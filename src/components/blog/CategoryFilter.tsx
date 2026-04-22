/** @jsxImportSource preact */
import { useMemo, useState } from 'preact/hooks';

type Item = {
  id: string;
  kind: 'blog' | 'video' | 'kniha' | 'clanek' | 'podcast' | 'meditace-audio';
  title: string;
  href: string;
  description: string;
  category: string;
  date?: string;
  thumbnail?: string;
  youtubeId?: string;
  featured?: boolean;
};

const categoryLabels: Record<string, string> = {
  all: 'Vše',
  'jak-meditovat': 'Jak meditovat',
  veda: 'Věda',
  komunita: 'Příběhy komunity',
  udalosti: 'Události',
  uceni: 'Učení',
};

const kindLabels: Record<string, string> = {
  blog: 'Článek',
  video: 'Video',
  kniha: 'Kniha',
  clanek: 'Článek',
  podcast: 'Podcast',
  'meditace-audio': 'Audio',
};

export default function CategoryFilter({ items }: { items: Item[] }) {
  const [cat, setCat] = useState<string>('all');
  const [kind, setKind] = useState<'all' | 'clanky' | 'video' | 'kniha' | 'audio'>('all');

  const categories = useMemo(() => {
    const unique = new Set(items.map((i) => i.category));
    return ['all', ...Array.from(unique)];
  }, [items]);

  const filtered = useMemo(() => {
    return items.filter((it) => {
      if (cat !== 'all' && it.category !== cat) return false;
      if (kind === 'clanky' && it.kind !== 'blog' && it.kind !== 'clanek') return false;
      if (kind === 'video' && it.kind !== 'video') return false;
      if (kind === 'kniha' && it.kind !== 'kniha') return false;
      if (kind === 'audio' && it.kind !== 'meditace-audio' && it.kind !== 'podcast') return false;
      return true;
    });
  }, [items, cat, kind]);

  return (
    <>
      <div class="cf-controls">
        <div class="cf-group">
          <span class="cf-label">Téma</span>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              class={`cf-chip ${cat === c ? 'is-active' : ''}`}
              onClick={() => setCat(c)}
            >
              {categoryLabels[c] ?? c}
            </button>
          ))}
        </div>
        <div class="cf-group">
          <span class="cf-label">Typ</span>
          {(['all', 'clanky', 'video', 'kniha', 'audio'] as const).map((k) => (
            <button
              key={k}
              type="button"
              class={`cf-chip ${kind === k ? 'is-active' : ''}`}
              onClick={() => setKind(k)}
            >
              {k === 'all' ? 'Vše' : k.charAt(0).toUpperCase() + k.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p class="cf-empty">Žádný obsah pro zvolené filtry.</p>
      ) : (
        <ul class="cf-grid">
          {filtered.map((it) => (
            <li key={it.id}>
              <a href={it.href} class="cf-card">
                <div class="cf-kind">{kindLabels[it.kind] ?? it.kind}</div>
                {it.thumbnail && (
                  <div class="cf-thumb" style={`background-image:url(${it.thumbnail})`} aria-hidden="true" />
                )}
                {!it.thumbnail && it.youtubeId && (
                  <div
                    class="cf-thumb"
                    style={`background-image:url(https://i.ytimg.com/vi/${it.youtubeId}/hqdefault.jpg)`}
                    aria-hidden="true"
                  />
                )}
                <h3>{it.title}</h3>
                <p>{it.description}</p>
                <div class="cf-meta">
                  <span class="cf-cat">{categoryLabels[it.category] ?? it.category}</span>
                  {it.date && <time>{it.date}</time>}
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
