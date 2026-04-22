/** @jsxImportSource preact */
import { useEffect, useState } from 'preact/hooks';

type Props = {
  src: string;
  title: string;
  provider?: 'youtube' | 'vimeo' | 'zenamu' | 'other';
  aspect?: string;
};

const providerLabels: Record<string, string> = {
  youtube: 'YouTube',
  vimeo: 'Vimeo',
  zenamu: 'Zenamu',
  other: 'externí služba',
};

export default function ConsentEmbed({ src, title, provider = 'other', aspect = '16/9' }: Props) {
  const key = `consent:${provider}`;
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    try {
      setConsented(window.localStorage.getItem(key) === 'yes');
    } catch {
      /* storage unavailable */
    }
  }, [key]);

  const allow = () => {
    try { window.localStorage.setItem(key, 'yes'); } catch {}
    setConsented(true);
  };

  if (consented) {
    return (
      <div class="consent-embed" style={{ aspectRatio: aspect }}>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          referrerpolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  return (
    <div class="consent-wall" style={{ aspectRatio: aspect }}>
      <div>
        <p class="consent-title">{title}</p>
        <p class="consent-body">
          Obsah z {providerLabels[provider]}. Kliknutím dáváte souhlas s načtením scriptů
          a cookies {providerLabels[provider]} (sledování Google / Vimeo / ...).
          Rozhodnutí si zapamatujeme v prohlížeči.
        </p>
        <button type="button" onClick={allow} class="consent-btn">
          Načíst a souhlasím
        </button>
        <a href={src} target="_blank" rel="noopener noreferrer" class="consent-link">
          Otevřít v novém okně →
        </a>
      </div>
      <style>{`
        .consent-wall {
          width: 100%;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          text-align: center;
        }
        .consent-title {
          font-family: var(--font-serif);
          font-weight: 600;
          font-size: 1.125rem;
          margin: 0 0 0.75rem;
        }
        .consent-body {
          color: var(--ink-muted);
          max-width: 40ch;
          margin: 0 auto 1.25rem;
          font-size: 0.9375rem;
        }
        .consent-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.625rem 1.25rem;
          background: var(--ink);
          color: var(--bg);
          border: 0;
          border-radius: var(--radius-md);
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          font-weight: 500;
          cursor: pointer;
          transition: background .15s;
        }
        .consent-btn:hover { background: var(--accent); }
        .consent-link {
          display: block;
          margin-top: 0.75rem;
          color: var(--ink-muted);
          font-size: 0.8125rem;
          text-decoration: none;
          border-bottom: 1px solid transparent;
        }
        .consent-link:hover { color: var(--ink); border-color: var(--line-strong); }
        .consent-embed {
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: var(--surface);
        }
        .consent-embed iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
      `}</style>
    </div>
  );
}
