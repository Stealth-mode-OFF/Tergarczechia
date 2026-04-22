/** @jsxImportSource react */
import { useMemo, useState } from 'react';

type EventItem = {
  id: string;
  title: string;
  href: string;
  dateStart: string;
  dateEnd?: string;
  type: 'online' | 'prezencni' | 'prenos' | 'hybridni';
  audience: string;
  description: string;
  free: boolean;
  status: string;
};

const typeLabels: Record<string, string> = {
  online: 'Online',
  prezencni: 'Prezenčně',
  prenos: 'Přenos',
  hybridni: 'Hybridní',
};

const audienceLabels: Record<string, string> = {
  zacatecnici: 'Začátečníci',
  zkuseni: 'Zkušení',
  vsichni: 'Všichni',
};

function formatRange(start: string, end?: string): string {
  const s = new Date(start);
  const months = ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'];
  if (!end) return `${s.getDate()}. ${months[s.getMonth()]} ${s.getFullYear()}`;
  const e = new Date(end);
  if (s.getMonth() === e.getMonth()) {
    return `${s.getDate()}.–${e.getDate()}. ${months[s.getMonth()]} ${s.getFullYear()}`;
  }
  return `${s.getDate()}. ${months[s.getMonth()]} — ${e.getDate()}. ${months[e.getMonth()]} ${e.getFullYear()}`;
}

export default function EventFilter({ events }: { events: EventItem[] }) {
  const [type, setType] = useState<'all' | EventItem['type']>('all');
  const [audience, setAudience] = useState<'all' | 'zacatecnici' | 'zkuseni' | 'vsichni'>('all');
  const [showPast, setShowPast] = useState(false);

  const now = useMemo(() => {
    const n = new Date();
    n.setHours(0, 0, 0, 0);
    return n;
  }, []);

  const filtered = useMemo(() => {
    return events.filter((e) => {
      if (type !== 'all' && e.type !== type) return false;
      if (audience !== 'all' && e.audience !== audience) return false;
      const end = e.dateEnd ? new Date(e.dateEnd) : new Date(e.dateStart);
      const isPast = end < now;
      if (isPast && !showPast) return false;
      return true;
    });
  }, [events, type, audience, showPast, now]);

  const types: EventItem['type'][] = ['online', 'prezencni', 'prenos', 'hybridni'];
  const audiences: Array<'zacatecnici' | 'zkuseni' | 'vsichni'> = ['zacatecnici', 'zkuseni', 'vsichni'];

  return (
    <>
      <div className="ef-controls" role="group" aria-label="Filtry akcí">
        <div className="ef-group">
          <span className="ef-label">Formát</span>
          <button
            type="button"
            className={`ef-chip ${type === 'all' ? 'is-active' : ''}`}
            onClick={() => setType('all')}
          >Vše</button>
          {types.map((t) => (
            <button
              key={t}
              type="button"
              className={`ef-chip ${type === t ? 'is-active' : ''}`}
              onClick={() => setType(t)}
            >
              {typeLabels[t]}
            </button>
          ))}
        </div>
        <div className="ef-group">
          <span className="ef-label">Pro koho</span>
          <button
            type="button"
            className={`ef-chip ${audience === 'all' ? 'is-active' : ''}`}
            onClick={() => setAudience('all')}
          >Vše</button>
          {audiences.map((a) => (
            <button
              key={a}
              type="button"
              className={`ef-chip ${audience === a ? 'is-active' : ''}`}
              onClick={() => setAudience(a)}
            >
              {audienceLabels[a]}
            </button>
          ))}
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

      {filtered.length === 0 ? (
        <p className="ef-empty">Žádná akce pro zvolené filtry.</p>
      ) : (
        <ul className="ef-list">
          {filtered.map((e) => (
            <li key={e.id} className={`ef-item ${e.status === 'skoncila' ? 'is-past' : ''}`}>
              <a href={e.href}>
                <div className="ef-date">{formatRange(e.dateStart, e.dateEnd)}</div>
                <div className="ef-body">
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
                  <div className="ef-tags">
                    <span className="tag">{typeLabels[e.type]}</span>
                    {e.audience !== 'vsichni' && <span className="tag">{audienceLabels[e.audience]}</span>}
                    {e.free && <span className="tag tag-accent">Zdarma</span>}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
