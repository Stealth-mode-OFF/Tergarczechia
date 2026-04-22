/** @jsxImportSource preact */
import { useEffect, useState } from 'preact/hooks';

type Props = {
  targetSelector?: string;
  categories: Array<{ value: string; label: string }>;
  kinds: Array<{ value: string; label: string }>;
};

export default function CategoryFilter({
  targetSelector = '[data-resource]',
  categories,
  kinds,
}: Props) {
  const [cat, setCat] = useState<string>('all');
  const [kind, setKind] = useState<string>('all');

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(targetSelector);
    let visible = 0;
    items.forEach((el) => {
      const c = el.dataset.category ?? '';
      const k = el.dataset.kind ?? '';
      const ok = (cat === 'all' || c === cat) && (kind === 'all' || k === kind);
      el.hidden = !ok;
      if (ok) visible += 1;
    });
    const empty = document.getElementById('cf-empty');
    if (empty) empty.hidden = visible > 0;
  }, [cat, kind, targetSelector]);

  return (
    <div class="cf-controls">
      <div class="cf-group">
        <span class="cf-label">Téma</span>
        <button type="button" class={`cf-chip ${cat === 'all' ? 'is-active' : ''}`} onClick={() => setCat('all')}>Vše</button>
        {categories.map((c) => (
          <button
            key={c.value}
            type="button"
            class={`cf-chip ${cat === c.value ? 'is-active' : ''}`}
            onClick={() => setCat(c.value)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div class="cf-group">
        <span class="cf-label">Typ</span>
        <button type="button" class={`cf-chip ${kind === 'all' ? 'is-active' : ''}`} onClick={() => setKind('all')}>Vše</button>
        {kinds.map((k) => (
          <button
            key={k.value}
            type="button"
            class={`cf-chip ${kind === k.value ? 'is-active' : ''}`}
            onClick={() => setKind(k.value)}
          >
            {k.label}
          </button>
        ))}
      </div>
    </div>
  );
}
