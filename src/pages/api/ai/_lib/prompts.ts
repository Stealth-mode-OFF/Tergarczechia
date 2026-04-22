export type Locale = 'cs' | 'en';

export type DraftPreset =
  | 'blog-perex'
  | 'blog-body'
  | 'event-description'
  | 'glossary-entry'
  | 'faq-answer';

const csPresets: Record<DraftPreset, (input: { title: string; hints?: string; wordCount?: number }) => string> = {
  'blog-perex': ({ title, hints }) => `
Napiš český perex (krátké shrnutí, max 320 znaků) pro článek s názvem:
"${title}"

${hints ? `Další vodítka od autora: ${hints}` : 'Autor nezadal další vodítka — vycházej z názvu.'}

Výstup: jen text perexu. Bez uvozovek. Bez vata. Žádné „v tomto článku se dozvíte".
`.trim(),

  'blog-body': ({ title, hints, wordCount }) => `
Napiš český článek pro Tergar Česko s názvem:
"${title}"

${hints ? `Podklad/body: ${hints}` : 'Autor nezadal podklad — napiš text založený na obecných Tergar učeních, ale buď opatrný s fakty.'}

Rozsah: ${wordCount ?? 400} slov.
Struktura: 3–4 odstavce, volitelně 1 podnadpis uprostřed.
Styl: osobní, konkrétní, ne přednášející. První odstavec začni scénou, faktem nebo dotazem — ne definicí.
Výstup: Markdown. Bez titulku (titulek je zadaný). Bez meta komentářů.
`.trim(),

  'event-description': ({ title, hints }) => `
Napiš popis meditační akce pro web Tergar Česko:
"${title}"

${hints ? `Detail: ${hints}` : ''}

Rozsah: 2–3 věty, 60–90 slov. Říká *co* se bude dít, *pro koho* a jaký bude výstup pro účastníka.
Bez marketingových frází. Bez "zažijte!", "přihlaste se!", "nebudete litovat".
`.trim(),

  'glossary-entry': ({ title, hints }) => `
Napiš heslo do slovníku buddhistických pojmů pro Tergar Česko. Pojem: "${title}".

${hints ? `Poznámka autora: ${hints}` : ''}

Struktura:
1. Krátká definice (max 220 znaků, plain text, pro tooltip)
2. 1–2 odstavce kontextu
3. Volitelně: podsekce "V Tergar programu" (kdy se pojem objeví v Joy of Living / Path of Liberation)

Buď přesný. Pokud nezná jistý etymologický detail, raději vynechej než vymyslet.
Výstup: Markdown. Začni rovnou definicí bez titulku.
`.trim(),

  'faq-answer': ({ title, hints }) => `
Napiš odpověď na častý dotaz pro Tergar Česko.
Dotaz: "${title}"
${hints ? `Kontext: ${hints}` : ''}

Rozsah: 60–120 slov. Přímo k věci. Pokud se odpověď liší podle situace, nabídni 2 varianty.
Bez úvodních frází ("Skvělá otázka!"). Začni rovnou.
`.trim(),
};

const enPresets: Record<DraftPreset, (input: { title: string; hints?: string; wordCount?: number }) => string> = {
  'blog-perex': ({ title, hints }) => `Write an English excerpt (max 320 chars) for article "${title}". ${hints ?? ''} Plain text only.`,
  'blog-body': ({ title, hints, wordCount }) => `Write ${wordCount ?? 400}-word English article "${title}" for Tergar Czechia. ${hints ?? ''} Markdown, 3-4 paragraphs, no title.`,
  'event-description': ({ title, hints }) => `Write 2-3 sentence English description for meditation event "${title}". ${hints ?? ''}`,
  'glossary-entry': ({ title, hints }) => `Write glossary entry for Buddhist term "${title}". ${hints ?? ''} Markdown, start with a 220-char definition then 1-2 paragraphs.`,
  'faq-answer': ({ title, hints }) => `Answer FAQ "${title}" in 60-120 words. ${hints ?? ''}`,
};

export function draftPrompt(
  preset: DraftPreset,
  input: { title: string; hints?: string; wordCount?: number; locale?: Locale },
): string {
  const locale = input.locale ?? 'cs';
  const fn = locale === 'en' ? enPresets[preset] : csPresets[preset];
  return fn(input);
}

export function rewritePrompt(opts: {
  text: string;
  tone: 'warm' | 'formal' | 'concise' | 'seo';
  locale: Locale;
  instructions?: string;
}): string {
  const toneMap = {
    warm: 'vřelejší, osobnější, méně formální',
    formal: 'formálnější, věcnější',
    concise: 'kratší a údernější (zachovej fakta, vyhoď vatu)',
    seo: 'optimalizované pro vyhledávače — zachovej tón, ale použij klíčová slova přirozeně; nastav H-strukturu, přidej interní linky jen pokud to dává smysl',
  };

  const baseCs = `Přepiš následující český text tak, aby byl ${toneMap[opts.tone]}. ${opts.instructions ? `Dodatečné pokyny: ${opts.instructions}. ` : ''}Zachovej fakta, délku (±20 %) a markdown strukturu.\n\n---\n\n${opts.text}\n\n---\n\nVýstup: jen přepsaný text, bez komentářů.`;
  const baseEn = `Rewrite the following English text to be ${opts.tone === 'warm' ? 'warmer, more personal' : opts.tone === 'formal' ? 'more formal' : opts.tone === 'concise' ? 'shorter and tighter (keep facts, cut filler)' : 'SEO-aware — keep voice but use natural keywords'}. ${opts.instructions ?? ''}\n\n---\n\n${opts.text}\n\n---\n\nOutput: rewritten text only, no commentary.`;
  return opts.locale === 'en' ? baseEn : baseCs;
}

export function translatePrompt(opts: {
  text: string;
  from: Locale;
  to: Locale;
  preserveTerms?: string[];
}): string {
  const header = opts.from === 'cs' && opts.to === 'en'
    ? `Translate the following Czech text to English. Keep markdown structure. Preserve Buddhist terms that have no English equivalent (e.g. ngöndro, rigpa).`
    : `Přelož následující anglický text do češtiny. Zachovej markdown strukturu. Používej české buddhistické termíny tam, kde existují (Mahámudra, Šamatha, Vipaśyaná, Bódhičitta, Ngöndro, Rigpa).`;

  const preserve = opts.preserveTerms && opts.preserveTerms.length > 0
    ? `\n\nZachovej v původním tvaru tyto termíny: ${opts.preserveTerms.join(', ')}.`
    : '';

  return `${header}${preserve}\n\n---\n\n${opts.text}\n\n---\n\nVýstup: jen přeložený text.`;
}

export function seoMetaPrompt(opts: {
  body: string;
  locale: Locale;
  primaryKeyword?: string;
}): string {
  const cs = `Vygeneruj SEO meta pro tento text pro web Tergar Česko (meditace, buddhismus, Mingyur Rinpočhe).

${opts.primaryKeyword ? `Klíčové slovo: ${opts.primaryKeyword}` : ''}

Text:
---
${opts.body.slice(0, 4000)}
---

Vrať JSON ve tvaru:
{"title":"titulek max 60 znaků","description":"popis max 155 znaků, zakončený tečkou, říká, co se v textu dozví","keywords":["max 5 slov"]}

Jen JSON, nic jiného.`;

  const en = `Generate SEO meta for Tergar Czechia (meditation, Buddhism, Mingyur Rinpoche).
${opts.primaryKeyword ? `Primary keyword: ${opts.primaryKeyword}` : ''}

Text:
---
${opts.body.slice(0, 4000)}
---

Return JSON: {"title":"...max 60 chars","description":"...max 155 chars","keywords":["max 5"]}
JSON only.`;

  return opts.locale === 'en' ? en : cs;
}
