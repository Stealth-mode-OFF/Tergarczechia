/** @jsxImportSource preact */
import { useEffect, useState } from 'preact/hooks';

type Item = { label: string; href: string };

export default function MobileMenu({ nav, activePath }: { nav: Item[]; activePath: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        class="mm-toggle"
        aria-expanded={open}
        aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
        aria-controls="mm-panel"
        onClick={() => setOpen((v) => !v)}
      >
        <span class={`mm-bar ${open ? 'mm-bar-a' : ''}`} />
        <span class={`mm-bar ${open ? 'mm-bar-b' : ''}`} />
        <span class={`mm-bar ${open ? 'mm-bar-c' : ''}`} />
      </button>

      {open && (
        <div id="mm-panel" class="mm-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <nav class="mm-nav" aria-label="Mobilní navigace">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                class={`mm-link ${activePath === item.href ? 'is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="/daru" class="mm-link mm-donate" onClick={() => setOpen(false)}>
              Podpořte nás
            </a>
          </nav>
        </div>
      )}

      <style>{`
        .mm-toggle {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 48px;
          height: 48px;
          background: transparent;
          border: 0;
          padding: 0;
          cursor: pointer;
          color: var(--tergar-navy);
          margin-right: -8px;
        }
        .mm-bar {
          display: block;
          width: 22px;
          height: 1.5px;
          background: currentColor;
          transition: transform .25s ease, opacity .2s ease;
          transform-origin: center;
        }
        .mm-bar-a { transform: translateY(6.5px) rotate(45deg); }
        .mm-bar-b { opacity: 0; }
        .mm-bar-c { transform: translateY(-6.5px) rotate(-45deg); }
        .mm-panel {
          position: fixed;
          inset: 72px 0 0 0;
          background: var(--bg);
          z-index: 39;
          overflow-y: auto;
          padding: 2rem 1.5rem 4rem;
          animation: mm-fade 220ms var(--ease-out, ease-out);
        }
        @media (min-width: 768px) {
          .mm-panel { inset: 78px 0 0 0; }
        }
        @keyframes mm-fade {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mm-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
          max-width: 480px;
          margin-inline: auto;
        }
        .mm-link {
          display: flex;
          align-items: center;
          min-height: 56px;
          padding: 1.125rem 0;
          font-family: var(--font-serif);
          font-size: 1.625rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--tergar-navy);
          text-decoration: none;
          border-bottom: 1px solid var(--line);
          transition: color .15s ease, padding-left .2s ease;
        }
        .mm-link:active, .mm-link:hover, .mm-link:focus-visible {
          color: var(--accent);
          padding-left: 0.5rem;
        }
        .mm-link.is-active { color: var(--accent); }
        .mm-donate {
          margin-top: 1.5rem;
          padding: 1rem 1.5rem;
          background: var(--accent);
          color: var(--tergar-navy);
          border-radius: 999px;
          border: 0;
          justify-content: center;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
          font-family: var(--font-sans);
        }
        .mm-donate:active { padding-left: 1.5rem; }
      `}</style>
    </>
  );
}
