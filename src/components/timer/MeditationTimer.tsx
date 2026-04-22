/** @jsxImportSource preact */
import { useCallback, useEffect, useMemo, useRef, useState } from 'preact/hooks';

type Props = {
  /** Max délka časovače v minutách (default 60). */
  maxMinutes?: number;
  /** Výchozí délka v minutách. */
  defaultMinutes?: number;
  /** Zvukový signál na konci. */
  chime?: boolean;
  /** Kompaktní varianta (menší padding, bez stínu). */
  compact?: boolean;
};

const VIEW = 400;
const CENTER = VIEW / 2;
const RADIUS = 160;
const STROKE = 2;

function toFixedAngle(m: number, max: number): number {
  // 0 → top (-90°), clockwise. Return angle in radians, where 0 is top.
  return (m / max) * 2 * Math.PI;
}

function pointerToMinutes(
  clientX: number,
  clientY: number,
  rect: DOMRect,
  max: number,
  snap: number,
): number {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = clientX - cx;
  const dy = clientY - cy;
  // atan2 returns angle from east (+x), -π..π; we want clockwise from top.
  let angle = Math.atan2(dy, dx) + Math.PI / 2;
  if (angle < 0) angle += 2 * Math.PI;
  const fraction = angle / (2 * Math.PI);
  const raw = fraction * max;
  // snap to `snap` minutes
  const snapped = Math.max(0, Math.min(max, Math.round(raw / snap) * snap));
  return snapped === max ? max : snapped;
}

function formatMMSS(seconds: number): string {
  const s = Math.max(0, Math.round(seconds));
  const mm = Math.floor(s / 60);
  const ss = s % 60;
  return `${mm}:${ss.toString().padStart(2, '0')}`;
}

export default function MeditationTimer({
  maxMinutes = 60,
  defaultMinutes = 20,
  chime = true,
  compact = false,
}: Props) {
  const [durationMin, setDurationMin] = useState(defaultMinutes);
  const [remainingMs, setRemainingMs] = useState(defaultMinutes * 60_000);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [dragging, setDragging] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTickRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const snap = maxMinutes <= 15 ? 0.5 : maxMinutes <= 30 ? 1 : 1;

  const currentMinutesShown = running || finished ? remainingMs / 60_000 : durationMin;
  const angleRad = toFixedAngle(currentMinutesShown, maxMinutes);

  // Build wedge path from top (0 rad), clockwise by angleRad.
  const wedgePath = useMemo(() => {
    if (currentMinutesShown <= 0.001) return '';
    if (currentMinutesShown >= maxMinutes - 0.001) {
      // full circle — draw as two half-arcs
      return `M ${CENTER} ${CENTER - RADIUS}
              A ${RADIUS} ${RADIUS} 0 1 1 ${CENTER} ${CENTER + RADIUS}
              A ${RADIUS} ${RADIUS} 0 1 1 ${CENTER} ${CENTER - RADIUS} Z`;
    }
    const endX = CENTER + RADIUS * Math.sin(angleRad);
    const endY = CENTER - RADIUS * Math.cos(angleRad);
    const largeArc = angleRad > Math.PI ? 1 : 0;
    return `M ${CENTER} ${CENTER}
            L ${CENTER} ${CENTER - RADIUS}
            A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${endX} ${endY} Z`;
  }, [angleRad, currentMinutesShown, maxMinutes]);

  // Handle position (on the outer arc at the wedge edge)
  const handle = useMemo(() => {
    const x = CENTER + RADIUS * Math.sin(angleRad);
    const y = CENTER - RADIUS * Math.cos(angleRad);
    return { x, y };
  }, [angleRad]);

  // ------- Dragging (pointer events, touch-friendly) -------
  const onPointerDown = useCallback(
    (e: PointerEvent) => {
      if (running) return;
      const svg = svgRef.current;
      if (!svg) return;
      svg.setPointerCapture(e.pointerId);
      setDragging(true);
      setFinished(false);
      const rect = svg.getBoundingClientRect();
      const m = pointerToMinutes(e.clientX, e.clientY, rect, maxMinutes, snap);
      setDurationMin(m);
      setRemainingMs(m * 60_000);
    },
    [running, maxMinutes, snap],
  );

  const onPointerMove = useCallback(
    (e: PointerEvent) => {
      if (!dragging) return;
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const m = pointerToMinutes(e.clientX, e.clientY, rect, maxMinutes, snap);
      setDurationMin(m);
      setRemainingMs(m * 60_000);
    },
    [dragging, maxMinutes, snap],
  );

  const onPointerUp = useCallback((e: PointerEvent) => {
    const svg = svgRef.current;
    if (svg && svg.hasPointerCapture(e.pointerId)) {
      svg.releasePointerCapture(e.pointerId);
    }
    setDragging(false);
  }, []);

  // ------- Countdown loop -------
  useEffect(() => {
    if (!running) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTickRef.current = null;
      return;
    }
    const tick = (t: number) => {
      if (lastTickRef.current == null) lastTickRef.current = t;
      const delta = t - lastTickRef.current;
      lastTickRef.current = t;
      setRemainingMs((prev) => {
        const next = prev - delta;
        if (next <= 0) {
          return 0;
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTickRef.current = null;
    };
  }, [running]);

  // Detect completion
  useEffect(() => {
    if (running && remainingMs <= 0) {
      setRunning(false);
      setFinished(true);
      if (chime) playChime();
      try {
        if ('vibrate' in navigator) navigator.vibrate([80, 120, 80, 120, 200]);
      } catch {
        /* ignore */
      }
    }
  }, [remainingMs, running, chime]);

  // Web Audio chime (no external assets)
  const playChime = useCallback(() => {
    try {
      if (!audioCtxRef.current) {
        const Ctx = (window.AudioContext ?? (window as any).webkitAudioContext);
        audioCtxRef.current = new Ctx();
      }
      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;
      // Tibetan-ish bell: fundamental + overtone
      const play = (freq: number, offset: number, duration: number, gain: number) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(freq, now + offset);
        g.gain.setValueAtTime(0, now + offset);
        g.gain.linearRampToValueAtTime(gain, now + offset + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + offset + duration);
        o.connect(g).connect(ctx.destination);
        o.start(now + offset);
        o.stop(now + offset + duration + 0.05);
      };
      play(440, 0, 2.6, 0.25); // fundamental
      play(660, 0.01, 2.2, 0.15); // fifth
      play(880, 0.02, 1.6, 0.08); // octave
    } catch {
      /* ignore */
    }
  }, []);

  const onPlay = () => {
    if (finished) {
      setRemainingMs(durationMin * 60_000);
      setFinished(false);
    }
    if (remainingMs <= 0) return;
    // unlock AudioContext on user gesture
    try {
      if (!audioCtxRef.current) {
        const Ctx = (window.AudioContext ?? (window as any).webkitAudioContext);
        audioCtxRef.current = new Ctx();
      }
      audioCtxRef.current.resume().catch(() => {});
    } catch {
      /* noop */
    }
    setRunning(true);
  };
  const onPause = () => setRunning(false);
  const onReset = () => {
    setRunning(false);
    setFinished(false);
    setRemainingMs(durationMin * 60_000);
  };

  // Tick marks
  const ticks = useMemo(() => {
    const arr: Array<{ angle: number; major: boolean; label?: string }> = [];
    const ticksCount = maxMinutes;
    for (let i = 0; i <= ticksCount; i += 1) {
      if (i === ticksCount) continue;
      const major = i % 5 === 0;
      const angle = (i / maxMinutes) * 2 * Math.PI;
      arr.push({
        angle,
        major,
        label: major ? String(i) : undefined,
      });
    }
    return arr;
  }, [maxMinutes]);

  return (
    <div class={`mt ${compact ? 'mt-compact' : ''}`}>
      <div class="mt-dial-wrap">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          class="mt-dial"
          role="slider"
          aria-label="Délka meditace v minutách"
          aria-valuemin={0}
          aria-valuemax={maxMinutes}
          aria-valuenow={Math.round(durationMin)}
          tabIndex={0}
          onPointerDown={onPointerDown as any}
          onPointerMove={onPointerMove as any}
          onPointerUp={onPointerUp as any}
          onPointerCancel={onPointerUp as any}
          onKeyDown={(e: KeyboardEvent) => {
            if (running) return;
            const step = e.shiftKey ? 5 : 1;
            if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
              e.preventDefault();
              const m = Math.min(maxMinutes, durationMin + step);
              setDurationMin(m); setRemainingMs(m * 60_000);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
              e.preventDefault();
              const m = Math.max(0, durationMin - step);
              setDurationMin(m); setRemainingMs(m * 60_000);
            }
          }}
        >
          {/* Face */}
          <circle cx={CENTER} cy={CENTER} r={RADIUS + 20} class="mt-face" />
          <circle cx={CENTER} cy={CENTER} r={RADIUS} class="mt-face-inner" />

          {/* Tick marks + labels */}
          {ticks.map((t) => {
            const sin = Math.sin(t.angle);
            const cos = Math.cos(t.angle);
            const inner = t.major ? RADIUS - 14 : RADIUS - 8;
            const outer = RADIUS - 2;
            const x1 = CENTER + inner * sin;
            const y1 = CENTER - inner * cos;
            const x2 = CENTER + outer * sin;
            const y2 = CENTER - outer * cos;
            const lr = RADIUS - 30;
            const lx = CENTER + lr * sin;
            const ly = CENTER - lr * cos;
            return (
              <g>
                <line
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  class={t.major ? 'mt-tick mt-tick-major' : 'mt-tick'}
                  stroke-width={t.major ? 2 : 1}
                />
                {t.major && t.label && t.label !== '0' && (
                  <text x={lx} y={ly} class="mt-num" text-anchor="middle" dominant-baseline="middle">
                    {t.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Wedge */}
          {wedgePath && (
            <path d={wedgePath} class={`mt-wedge ${finished ? 'is-finished' : ''}`} />
          )}

          {/* Handle (not shown while running) */}
          {!running && currentMinutesShown > 0 && (
            <g>
              <circle cx={handle.x} cy={handle.y} r={14} class="mt-handle-bg" />
              <circle cx={handle.x} cy={handle.y} r={7} class="mt-handle" />
            </g>
          )}

          {/* Center label */}
          <text x={CENTER} y={CENTER - 6} class="mt-mm" text-anchor="middle" dominant-baseline="middle">
            {running ? formatMMSS(remainingMs / 1000) : `${Math.round(durationMin)}`}
          </text>
          <text x={CENTER} y={CENTER + 22} class="mt-mm-sub" text-anchor="middle" dominant-baseline="middle">
            {running ? 'zbývá' : durationMin === 1 ? 'minuta' : durationMin < 5 ? 'minuty' : 'minut'}
          </text>
        </svg>
      </div>

      <div class="mt-controls">
        {running ? (
          <button type="button" class="mt-btn mt-btn-primary" onClick={onPause} aria-label="Pauza">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <rect x="4" y="3" width="3" height="12" fill="currentColor"/>
              <rect x="11" y="3" width="3" height="12" fill="currentColor"/>
            </svg>
            Pauza
          </button>
        ) : (
          <button
            type="button"
            class="mt-btn mt-btn-primary"
            onClick={onPlay}
            disabled={durationMin <= 0}
            aria-label={finished ? 'Spustit znovu' : 'Spustit'}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M4 3 L15 9 L4 15 Z" fill="currentColor"/>
            </svg>
            {finished ? 'Znovu' : 'Spustit'}
          </button>
        )}
        <button type="button" class="mt-btn mt-btn-ghost" onClick={onReset} aria-label="Reset">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M4 9 a5 5 0 1 1 1.5 3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M4 5 L4 9 L8 9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Reset
        </button>
        <div class="mt-presets" role="group" aria-label="Přednastavené délky">
          {[5, 10, 15, 20, 30, 45].filter((n) => n <= maxMinutes).map((n) => (
            <button
              type="button"
              class={`mt-preset ${Math.round(durationMin) === n ? 'is-active' : ''}`}
              onClick={() => {
                if (running) return;
                setFinished(false);
                setDurationMin(n);
                setRemainingMs(n * 60_000);
              }}
              disabled={running}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {finished && (
        <p class="mt-done" role="status">
          Čas vypršel. Tři vědomé nádechy na rozloučenou.
        </p>
      )}

      <style>{`
        .mt {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          --mt-face: var(--surface, #F4EEE3);
          --mt-face-inner: var(--bg, #FBF8F2);
          --mt-ink: var(--ink, #1B2230);
          --mt-ink-muted: var(--ink-muted, #55606E);
          --mt-ink-soft: var(--ink-soft, #8A93A1);
          --mt-accent: var(--accent, #B6671F);
          --mt-accent-soft: var(--accent-soft, #E8D3B7);
          --mt-line: var(--line, #E3DBCC);
        }
        .mt-dial-wrap {
          width: 100%;
          max-width: 440px;
          aspect-ratio: 1 / 1;
          display: grid;
          place-items: center;
        }
        .mt-compact .mt-dial-wrap { max-width: 280px; }
        .mt-dial {
          width: 100%;
          height: 100%;
          touch-action: none;
          cursor: grab;
          user-select: none;
          -webkit-user-select: none;
          filter: drop-shadow(0 4px 12px rgba(27,34,48,.06)) drop-shadow(0 24px 48px rgba(27,34,48,.08));
        }
        .mt-compact .mt-dial { filter: none; }
        .mt-dial:active { cursor: grabbing; }
        .mt-face {
          fill: var(--mt-face);
          stroke: var(--mt-line);
          stroke-width: 1;
        }
        .mt-face-inner {
          fill: var(--mt-face-inner);
          stroke: none;
        }
        .mt-tick {
          stroke: var(--mt-ink-soft);
        }
        .mt-tick-major {
          stroke: var(--mt-ink);
        }
        .mt-num {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 16px;
          fill: var(--mt-ink-muted);
        }
        .mt-wedge {
          fill: var(--mt-accent-soft);
          stroke: var(--mt-accent);
          stroke-width: 1.5;
          transition: opacity .2s;
        }
        .mt-wedge.is-finished {
          animation: mt-flash 0.5s ease-in-out 3;
        }
        @keyframes mt-flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .mt-handle-bg {
          fill: var(--mt-face-inner);
          stroke: var(--mt-accent);
          stroke-width: 1.5;
        }
        .mt-handle {
          fill: var(--mt-accent);
        }
        .mt-mm {
          font-family: var(--font-serif, Georgia, serif);
          font-size: 68px;
          font-weight: 600;
          fill: var(--mt-ink);
          letter-spacing: -0.02em;
        }
        .mt-mm-sub {
          font-family: var(--font-mono, ui-monospace, monospace);
          font-size: 12px;
          letter-spacing: 0.16em;
          fill: var(--mt-ink-soft);
          text-transform: uppercase;
        }

        .mt-controls {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.625rem;
          align-items: center;
        }
        .mt-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          border-radius: 10px;
          font-family: var(--font-sans, system-ui);
          font-size: 0.9375rem;
          font-weight: 500;
          border: 1px solid transparent;
          cursor: pointer;
          transition: background .15s, color .15s, border-color .15s;
        }
        .mt-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .mt-btn-primary {
          background: var(--mt-ink);
          color: var(--mt-face-inner);
          border-color: var(--mt-ink);
        }
        .mt-btn-primary:hover:not(:disabled) {
          background: var(--mt-accent);
          border-color: var(--mt-accent);
        }
        .mt-btn-ghost {
          background: transparent;
          color: var(--mt-ink);
          border-color: var(--mt-line);
        }
        .mt-btn-ghost:hover:not(:disabled) { background: var(--mt-face); }

        .mt-presets {
          display: inline-flex;
          gap: 0.25rem;
          padding: 0.25rem;
          background: var(--mt-face);
          border-radius: 9999px;
        }
        .mt-preset {
          min-width: 2.25rem;
          height: 2rem;
          padding: 0 0.625rem;
          background: transparent;
          border: 0;
          border-radius: 9999px;
          font-family: var(--font-mono, monospace);
          font-size: 0.8125rem;
          color: var(--mt-ink-muted);
          cursor: pointer;
          transition: background .15s, color .15s;
        }
        .mt-preset:hover:not(:disabled) { color: var(--mt-ink); }
        .mt-preset.is-active {
          background: var(--mt-accent);
          color: var(--mt-face-inner);
        }
        .mt-preset:disabled { cursor: not-allowed; opacity: 0.5; }

        .mt-done {
          margin: 0;
          font-family: var(--font-serif, Georgia, serif);
          font-style: italic;
          font-size: 1.125rem;
          color: var(--mt-ink-muted);
          text-align: center;
        }

        @media (prefers-reduced-motion: reduce) {
          .mt-wedge.is-finished { animation: none; }
        }
      `}</style>
    </div>
  );
}
