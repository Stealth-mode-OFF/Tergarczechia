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
          width: 40px;
          height: 40px;
          background: transparent;
          border: 0;
          padding: 0;
          cursor: pointer;
          color: var(--ink);
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
          inset: 68px 0 0 0;
          background: var(--bg);
          z-index: 39;
          overflow-y: auto;
          padding: 2rem 1.5rem 4rem;
          animation: mm-fade 180ms ease-out;
        }
        @keyframes mm-fade {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .mm-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 480px;
          margin-inline: auto;
        }
        .mm-link {
          display: block;
          padding: 1rem 0;
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--ink);
          text-decoration: none;
          border-bottom: 1px solid var(--line);
          transition: color .15s ease;
        }
        .mm-link:hover, .mm-link:focus-visible { color: var(--accent); }
        .mm-link.is-active { color: var(--accent); }
        .mm-donate {
          margin-top: 1rem;
          color: var(--accent);
          border-bottom: 0;
        }
      `}</style>
    </>
  );
}
