/** @jsxImportSource react */
import { useEffect, useMemo, useState } from 'react';

type Props = {
  targetSelector?: string;
  types: Array<{ value: string; label: string }>;
  audiences: Array<{ value: string; label: string }>;
};

export default function EventFilter({
  targetSelector = '[data-event]',
  types,
  audiences,
}: Props) {
  const [type, setType] = useState<string>('all');
  const [audience, setAudience] = useState<string>('all');
  const [showPast, setShowPast] = useState(false);

  const today = useMemo(() => {
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return t.getTime();
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(targetSelector);
    let visible = 0;
    items.forEach((el) => {
      const t = el.dataset.type ?? '';
      const a = el.dataset.audience ?? '';
      const end = Number(el.dataset.endTs ?? 0);
      const isPast = end < today;
      const ok =
        (type === 'all' || t === type) &&
        (audience === 'all' || a === audience) &&
        (!isPast || showPast);
      el.hidden = !ok;
      if (ok) visible += 1;
    });
    const empty = document.getElementById('ef-empty');
    if (empty) empty.hidden = visible > 0;
  }, [type, audience, showPast, targetSelector, today]);

  return (
    <div className="ef-controls" role="group" aria-label="Filtry akcí">
      <div className="ef-group">
        <span className="ef-label">Formát</span>
        <div className="ef-row">
          <button
            type="button"
            className={`ef-chip ${type === 'all' ? 'is-active' : ''}`}
            onClick={() => setType('all')}
          >
            Vše
          </button>
          {types.map((t) => (
            <button
              key={t.value}
              type="button"
              className={`ef-chip ${type === t.value ? 'is-active' : ''}`}
              onClick={() => setType(t.value)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="ef-group">
        <span className="ef-label">Pro koho</span>
        <div className="ef-row">
          <button
            type="button"
            className={`ef-chip ${audience === 'all' ? 'is-active' : ''}`}
            onClick={() => setAudience('all')}
          >
            Vše
          </button>
          {audiences.map((a) => (
            <button
              key={a.value}
              type="button"
              className={`ef-chip ${audience === a.value ? 'is-active' : ''}`}
              onClick={() => setAudience(a.value)}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>
      <label className="ef-toggle">
        <input
          type="checkbox"
          checked={showPast}
          onChange={(e) => setShowPast(e.currentTarget.checked)}
        />
        <span>Zahrnout uplynulé</span>
      </label>
    </div>
  );
}
