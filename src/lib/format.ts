const csMonths = [
  'leden', 'únor', 'březen', 'duben', 'květen', 'červen',
  'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec',
];
const csMonthsShort = ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.', '9.', '10.', '11.', '12.'];

export function formatDate(d: Date | string): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  return `${date.getDate()}. ${csMonths[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatDateShort(d: Date | string): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  return `${date.getDate()}. ${csMonthsShort[date.getMonth()]}`;
}

export function formatDateRange(start: Date | string, end?: Date | string): string {
  const s = typeof start === 'string' ? new Date(start) : start;
  if (!end) return formatDateShort(s);
  const e = typeof end === 'string' ? new Date(end) : end;
  if (s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear()) {
    return `${s.getDate()}.–${e.getDate()}. ${csMonthsShort[s.getMonth()]}`;
  }
  return `${formatDateShort(s)} — ${formatDateShort(e)}`;
}

const typeLabels: Record<string, string> = {
  online: 'Online',
  prezencni: 'Prezenčně',
  prenos: 'Přenos',
  hybridni: 'Hybridní',
};
export function eventTypeLabel(t: string): string {
  return typeLabels[t] ?? t;
}

const audienceLabels: Record<string, string> = {
  zacatecnici: 'Začátečníci',
  zkuseni: 'Zkušení',
  vsichni: 'Všichni',
};
export function audienceLabel(a: string): string {
  return audienceLabels[a] ?? a;
}

const categoryLabels: Record<string, string> = {
  'jak-meditovat': 'Jak meditovat',
  veda: 'Věda o meditaci',
  komunita: 'Příběhy komunity',
  udalosti: 'Události',
  uceni: 'Učení',
};
export function categoryLabel(c: string): string {
  return categoryLabels[c] ?? c;
}

export function isFutureOrOngoing(event: { dateStart: Date; dateEnd?: Date }): boolean {
  const end = event.dateEnd ?? event.dateStart;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return end >= today;
}
