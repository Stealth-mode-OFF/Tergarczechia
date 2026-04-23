// Czech typography: insert NBSP (U+00A0) after single-letter prepositions/conjunctions
// and two-letter prepositions so they don't orphan at end of line.

const NBSP = ' ';

const SHORT_WORDS = [
  // single letters
  'k', 'K', 's', 'S', 'v', 'V', 'z', 'Z',
  'o', 'O', 'u', 'U', 'a', 'A', 'i', 'I',
  // two-letter prepositions / conjunctions
  'do', 'Do', 'na', 'Na', 'po', 'Po', 'od', 'Od',
  've', 'Ve', 'ze', 'Ze', 'ke', 'Ke', 'se', 'Se',
  'za', 'Za',
  // three-letter connectors commonly orphaned
  'ale', 'Ale', 'pro', 'Pro',
];

export function csTypo(input: string): string {
  if (!input) return input;
  let out = input;
  for (const w of SHORT_WORDS) {
    // word-boundary match for " w " (surrounded by spaces), replace inner space with NBSP
    const re = new RegExp(`(^|[\\s(\\[])${w}\\s+`, 'g');
    out = out.replace(re, `$1${w}${NBSP}`);
  }
  // number + unit / number + word (e.g. "2026", "19:00" — keep tight with following word)
  out = out.replace(/(\d)\s+([A-Za-zÀ-ž])/g, `$1${NBSP}$2`);
  // em/en dash with surrounding spaces — prevent line break before the dash
  out = out.replace(/\s—\s/g, `${NBSP}— `);
  out = out.replace(/\s–\s/g, `${NBSP}– `);
  return out;
}
