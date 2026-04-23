/** @jsxImportSource preact */
import { useEffect, useState } from 'preact/hooks';

type Item = { label: string; href: string };

export default function MobileMenu({
  nav,
  quickLinks = [],
  activePath,
}: {
  nav: Item[];
  quickLinks?: Item[];
  activePath: string;
}) {
  const [open, setOpen] = useState(false);
  const isActive = (href: string) =>
    href === '/' ? activePath === '/' : activePath === href || activePath.startsWith(`${href}/`);

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
          <div class="mm-hero">
            <p class="mm-kicker">První krok</p>
            <div class="mm-quick-grid">
              <a href="/meditace" class="mm-quick mm-quick-primary" onClick={() => setOpen(false)}>
                <span>Začít zdarma</span>
                <small>5 minut meditace bez závazku</small>
              </a>
              <a href="/skupiny" class="mm-quick" onClick={() => setOpen(false)}>
                <span>Najít skupinu</span>
                <small>Praha, další města i online</small>
              </a>
            </div>
          </div>

          <nav class="mm-nav" aria-label="Mobilní navigace">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                class={`mm-link ${isActive(item.href) ? 'is-active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {quickLinks.length > 0 && (
            <div class="mm-secondary">
              <p class="mm-kicker">Další</p>
              <div class="mm-secondary-links">
                {quickLinks.map((item) => (
                  <a key={item.href} href={item.href} class="mm-secondary-link" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
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
          background:
            radial-gradient(circle at top right, rgba(224, 160, 32, 0.12), transparent 24rem),
            var(--bg);
          z-index: 39;
          overflow-y: auto;
          padding: 1.25rem 1.5rem 4rem;
          animation: mm-fade 220ms var(--ease-out, ease-out);
        }
        @media (min-width: 768px) {
          .mm-panel { inset: 78px 0 0 0; }
        }
        @keyframes mm-fade {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mm-hero {
          max-width: 480px;
          margin: 0 auto 1.5rem;
        }
        .mm-kicker {
          margin: 0 0 0.75rem;
          font-family: var(--font-mono);
          font-size: 0.6875rem;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--ink-soft);
        }
        .mm-quick-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
        }
        .mm-quick {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 1rem;
          border-radius: 1rem;
          border: 1px solid var(--line);
          background: color-mix(in oklab, var(--surface) 88%, white 12%);
          color: var(--ink);
          text-decoration: none;
          box-shadow: 0 10px 28px -24px rgba(28, 43, 58, 0.4);
        }
        .mm-quick span {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--tergar-navy);
        }
        .mm-quick small {
          font-size: 0.76rem;
          line-height: 1.35;
          color: var(--ink-muted);
        }
        .mm-quick-primary {
          background: linear-gradient(145deg, rgba(246, 231, 200, 0.9), rgba(255, 247, 230, 0.98));
          border-color: color-mix(in oklab, var(--accent) 52%, white 48%);
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
        .mm-secondary {
          max-width: 480px;
          margin: 1.75rem auto 0;
        }
        .mm-secondary-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.625rem;
        }
        .mm-secondary-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 2.75rem;
          padding: 0.8rem 1rem;
          border-radius: 999px;
          border: 1px solid var(--line-strong);
          color: var(--ink);
          text-decoration: none;
          font-size: 0.8125rem;
          font-weight: 600;
        }
        @media (max-width: 420px) {
          .mm-quick-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
