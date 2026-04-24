import { config, fields, collection, singleton } from '@keystatic/core';

/**
 * CMS storage — local filesystem in dev, GitHub commits in production.
 *
 * GITHUB mode needs a GitHub OAuth App (see CMS_SETUP.md) and these env vars:
 *   KEYSTATIC_STORAGE=github                       (toggle flag)
 *   KEYSTATIC_GITHUB_CLIENT_ID=<from OAuth app>
 *   KEYSTATIC_GITHUB_CLIENT_SECRET=<from OAuth app>
 *   KEYSTATIC_SECRET=<random 32-byte hex>          (JWT signing secret)
 *
 * Local dev (default): `npm run dev` → http://localhost:4321/keystatic writes
 * straight to ./src/content. No auth, no env vars needed.
 */
const useGitHub = process.env.KEYSTATIC_STORAGE === 'github';

const storage = useGitHub
  ? ({
      kind: 'github',
      repo: { owner: 'Stealth-mode-OFF', name: 'Tergarczechia' },
      branchPrefix: 'cms/',
    } as const)
  : ({ kind: 'local' } as const);

export default config({
  storage,
  ui: {
    brand: { name: 'Tergar Česko — redakce' },
    navigation: {
      'Hlavní obsah': ['blog', 'events', 'registrations'],
      'Komunita': ['groups', 'teachers', 'testimonials'],
      Program: ['path', 'resources', 'glossary', 'faq'],
      Stránky: ['pages'],
      Nastavení: ['site-settings', 'homepage', 'about', 'donate-settings'],
    },
  },
  collections: {
    blog: collection({
      label: 'Blog — články',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      columns: ['title', 'date', 'category'],
      schema: {
        title: fields.slug({
          name: { label: 'Název' },
          slug: { label: 'URL slug (automaticky z názvu)' },
        }),
        perex: fields.text({
          label: 'Perex',
          multiline: true,
          description: 'Krátké shrnutí (1–2 věty, ideál max 280 znaků). Zobrazí se v kartě + SEO description.',
          validation: { length: { max: 320 } },
        }),
        category: fields.select({
          label: 'Kategorie',
          options: [
            { label: 'Jak meditovat', value: 'jak-meditovat' },
            { label: 'Věda o meditaci', value: 'veda' },
            { label: 'Příběhy komunity', value: 'komunita' },
            { label: 'Události', value: 'udalosti' },
          ],
          defaultValue: 'jak-meditovat',
        }),
        date: fields.date({ label: 'Datum publikace' }),
        thumbnail: fields.image({
          label: 'Náhled (1200×630 ideálně)',
          directory: 'public/uploads/blog',
          publicPath: '/uploads/blog/',
          validation: { isRequired: false },
        }),
        youtubeId: fields.text({
          label: 'YouTube ID (volitelné)',
          description: 'Pokud článek obsahuje hlavní video, vložte ID z URL (dQw4w9WgXcQ apod.).',
        }),
        featured: fields.checkbox({
          label: 'Zvýraznit',
          description: 'Zobrazí se na homepage a nahoře v /zdroje.',
          defaultValue: false,
        }),
        draft: fields.checkbox({
          label: 'Koncept',
          description: 'Pokud je zaškrtnuto, článek se nezobrazí návštěvníkům.',
          defaultValue: false,
        }),
        content: fields.mdx({
          label: 'Obsah článku',
          description: 'Plný obsah. Podporuje Markdown + vlastní komponenty.',
          options: {
            image: {
              directory: 'public/uploads/blog',
              publicPath: '/uploads/blog/',
            },
          },
        }),
      },
    }),

    events: collection({
      label: 'Akce a události',
      slugField: 'title',
      path: 'src/content/events/*',
      format: 'yaml',
      columns: ['title', 'dateStart', 'type'],
      schema: {
        title: fields.slug({ name: { label: 'Název' } }),
        dateStart: fields.date({ label: 'Začátek' }),
        dateEnd: fields.date({ label: 'Konec (volitelné)' }),
        type: fields.select({
          label: 'Formát',
          options: [
            { label: 'Online', value: 'online' },
            { label: 'Prezenčně', value: 'prezencni' },
            { label: 'Přenos', value: 'prenos' },
            { label: 'Hybridní', value: 'hybridni' },
          ],
          defaultValue: 'online',
        }),
        audience: fields.select({
          label: 'Pro koho',
          options: [
            { label: 'Začátečníci', value: 'zacatecnici' },
            { label: 'Zkušení', value: 'zkuseni' },
            { label: 'Všichni', value: 'vsichni' },
          ],
          defaultValue: 'vsichni',
        }),
        description: fields.text({
          label: 'Krátký popis (pro kartu)',
          multiline: true,
          validation: { length: { max: 280 } },
        }),
        body: fields.text({
          label: 'Dlouhý popis (volitelné)',
          multiline: true,
        }),
        registrationUrl: fields.url({
          label: 'Externí přihláška (Zenamu)',
          description: 'Pokud necháte prázdné, použije se interní formulář a přihlášky chodí do CMS.',
        }),
        price: fields.text({ label: 'Cena (text)' }),
        free: fields.checkbox({ label: 'Zdarma', defaultValue: false }),
        capacity: fields.integer({
          label: 'Kapacita',
          description: 'Volitelně — max počet účastníků pro interní přihlášky.',
        }),
        featured: fields.checkbox({ label: 'Zvýraznit na homepage', defaultValue: false }),
        image: fields.image({
          label: 'Obrázek akce',
          directory: 'public/uploads/events',
          publicPath: '/uploads/events/',
          validation: { isRequired: false },
        }),
        status: fields.select({
          label: 'Stav',
          options: [
            { label: 'Plánovaná', value: 'planovana' },
            { label: 'Probíhá', value: 'probiha' },
            { label: 'Skončila', value: 'skoncila' },
            { label: 'Zrušena', value: 'zrusena' },
          ],
          defaultValue: 'planovana',
        }),
      },
    }),

    registrations: collection({
      label: 'Přihlášky (interní)',
      slugField: 'id',
      path: 'src/content/registrations/*',
      format: 'yaml',
      columns: ['name', 'email', 'event', 'createdAt'],
      schema: {
        id: fields.slug({
          name: {
            label: 'ID (automaticky)',
            description: 'Vytváří se automaticky při příjmu formuláře.',
          },
        }),
        name: fields.text({ label: 'Jméno' }),
        email: fields.text({ label: 'E-mail' }),
        phone: fields.text({ label: 'Telefon' }),
        event: fields.text({
          label: 'Akce (ID)',
          description: 'Slug akce, na kterou se přihlašuje.',
        }),
        message: fields.text({ label: 'Zpráva', multiline: true }),
        source: fields.select({
          label: 'Zdroj',
          options: [
            { label: 'Webový formulář', value: 'web' },
            { label: 'E-mail', value: 'email' },
            { label: 'Telefon', value: 'phone' },
            { label: 'Ručně', value: 'manual' },
          ],
          defaultValue: 'web',
        }),
        status: fields.select({
          label: 'Stav',
          options: [
            { label: 'Nová', value: 'new' },
            { label: 'Potvrzená', value: 'confirmed' },
            { label: 'Zúčastnil se', value: 'attended' },
            { label: 'Zrušená', value: 'cancelled' },
          ],
          defaultValue: 'new',
        }),
        createdAt: fields.datetime({ label: 'Datum přihlášení' }),
        notes: fields.text({
          label: 'Interní poznámky',
          multiline: true,
          description: 'Poznámky pro organizátory — nezobrazují se návštěvníkům.',
        }),
      },
    }),

    testimonials: collection({
      label: 'Hlasy sanghy (citáty)',
      slugField: 'name',
      path: 'src/content/testimonials/*',
      format: 'yaml',
      columns: ['name', 'city', 'active'],
      schema: {
        name: fields.slug({ name: { label: 'Jméno (např. „Hana K.")' } }),
        quote: fields.text({
          label: 'Citát',
          multiline: true,
          description: 'V první osobě, bez uvozovek — přidají se automaticky.',
          validation: { length: { max: 400 } },
        }),
        city: fields.text({ label: 'Město / skupina' }),
        practiceYears: fields.text({
          label: 'Zkušenost (např. „Joy of Living 2")',
        }),
        order: fields.integer({ label: 'Pořadí na stránce', defaultValue: 0 }),
        active: fields.checkbox({ label: 'Publikovat', defaultValue: true }),
      },
    }),

    path: collection({
      label: 'Cesta Tergar (úrovně)',
      slugField: 'title',
      path: 'src/content/path/*',
      format: { contentField: 'body' },
      columns: ['title', 'level', 'status'],
      schema: {
        title: fields.slug({ name: { label: 'Název' } }),
        subtitle: fields.text({ label: 'Podtitulek' }),
        level: fields.integer({ label: 'Úroveň (0+)' }),
        status: fields.select({
          label: 'Stav',
          options: [
            { label: 'Dostupné', value: 'dostupne' },
            { label: 'Brzy', value: 'brzy' },
            { label: 'Vyžaduje předchozí', value: 'vyzaduje-predchozi' },
          ],
          defaultValue: 'dostupne',
        }),
        statusLabel: fields.text({
          label: 'Štítek stavu (volitelné)',
          description: 'Přepíše výchozí text — např. „Připravujeme".',
        }),
        externalUrl: fields.url({ label: 'Externí odkaz (Tergar International)' }),
        color: fields.text({
          label: 'Barva kolečka (hex, např. #E0A020)',
          defaultValue: '#E0A020',
          validation: { length: { min: 4, max: 7 } },
        }),
        body: fields.mdx({ label: 'Popis úrovně' }),
      },
    }),

    teachers: collection({
      label: 'Učitelé',
      slugField: 'name',
      path: 'src/content/teachers/*',
      format: { contentField: 'bio' },
      columns: ['name', 'role', 'order'],
      schema: {
        name: fields.slug({ name: { label: 'Jméno' } }),
        role: fields.text({ label: 'Role' }),
        portrait: fields.image({
          label: 'Portrét',
          directory: 'public/uploads/teachers',
          publicPath: '/uploads/teachers/',
        }),
        email: fields.text({ label: 'E-mail' }),
        order: fields.integer({ label: 'Pořadí', defaultValue: 0 }),
        bio: fields.mdx({ label: 'Biografie' }),
      },
    }),

    groups: collection({
      label: 'Meditační skupiny',
      slugField: 'name',
      path: 'src/content/groups/*',
      format: 'yaml',
      columns: ['name', 'city', 'active'],
      schema: {
        name: fields.slug({ name: { label: 'Název skupiny' } }),
        city: fields.text({ label: 'Město' }),
        language: fields.select({
          label: 'Jazyk',
          options: [
            { label: 'Čeština', value: 'cs' },
            { label: 'Angličtina', value: 'en' },
          ],
          defaultValue: 'cs',
        }),
        schedule: fields.text({
          label: 'Rozvrh',
          description: 'Lidskou řečí — např. „2. a 4. čtvrtek · 19:00".',
        }),
        address: fields.text({ label: 'Adresa', multiline: true }),
        lat: fields.number({ label: 'GPS — šířka' }),
        lng: fields.number({ label: 'GPS — délka' }),
        color: fields.text({
          label: 'Barva značky na mapě (hex)',
          defaultValue: '#E0A020',
        }),
        contactEmail: fields.text({ label: 'Kontaktní e-mail' }),
        registrationUrl: fields.url({ label: 'Odkaz na přihlášku (Zenamu)' }),
        active: fields.checkbox({
          label: 'Aktivní skupina',
          description: 'Neaktivní skupiny se nezobrazí na mapě ani v seznamu.',
          defaultValue: true,
        }),
      },
    }),

    resources: collection({
      label: 'Zdroje (video, kniha, audio)',
      slugField: 'title',
      path: 'src/content/resources/*',
      format: 'yaml',
      columns: ['title', 'kind', 'featured'],
      schema: {
        title: fields.slug({ name: { label: 'Název' } }),
        kind: fields.select({
          label: 'Typ',
          options: [
            { label: 'Video', value: 'video' },
            { label: 'Kniha', value: 'kniha' },
            { label: 'Článek', value: 'clanek' },
            { label: 'Podcast', value: 'podcast' },
            { label: 'Audio meditace', value: 'meditace-audio' },
          ],
          defaultValue: 'video',
        }),
        category: fields.select({
          label: 'Kategorie',
          options: [
            { label: 'Jak meditovat', value: 'jak-meditovat' },
            { label: 'Věda o meditaci', value: 'veda' },
            { label: 'Příběhy komunity', value: 'komunita' },
            { label: 'Události', value: 'udalosti' },
          ],
          defaultValue: 'jak-meditovat',
        }),
        description: fields.text({ label: 'Popis', multiline: true }),
        url: fields.url({ label: 'URL' }),
        youtubeId: fields.text({ label: 'YouTube ID' }),
        thumbnail: fields.image({
          label: 'Náhled',
          directory: 'public/uploads/resources',
          publicPath: '/uploads/resources/',
          validation: { isRequired: false },
        }),
        publishedAt: fields.date({ label: 'Datum publikace' }),
        featured: fields.checkbox({ label: 'Zvýraznit', defaultValue: false }),
      },
    }),

    glossary: collection({
      label: 'Slovník pojmů',
      slugField: 'term',
      path: 'src/content/glossary/*',
      format: { contentField: 'body' },
      columns: ['term', 'termSanskrit'],
      schema: {
        term: fields.slug({ name: { label: 'Pojem (česky)' } }),
        termSanskrit: fields.text({ label: 'Sanskrt' }),
        termTibetan: fields.text({ label: 'Tibetština' }),
        pronunciation: fields.text({ label: 'Výslovnost' }),
        shortDef: fields.text({
          label: 'Krátká definice (tooltip, max 180)',
          multiline: true,
          validation: { length: { max: 200 } },
        }),
        body: fields.mdx({ label: 'Rozšířený výklad' }),
      },
    }),

    faq: collection({
      label: 'Časté dotazy',
      slugField: 'question',
      path: 'src/content/faq/*',
      format: 'yaml',
      columns: ['question', 'section', 'order'],
      schema: {
        question: fields.slug({ name: { label: 'Otázka' } }),
        answer: fields.text({ label: 'Odpověď', multiline: true }),
        section: fields.select({
          label: 'Sekce',
          options: [
            { label: 'Obecné', value: 'obecne' },
            { label: 'Programy', value: 'programy' },
            { label: 'Meditace', value: 'meditace' },
            { label: 'Skupiny', value: 'skupiny' },
            { label: 'Daru', value: 'daru' },
          ],
          defaultValue: 'obecne',
        }),
        order: fields.integer({ label: 'Pořadí', defaultValue: 0 }),
      },
    }),

    pages: collection({
      label: 'Statické stránky (o nás, co je meditace...)',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Název' } }),
        heroText: fields.text({ label: 'Úvodní text', multiline: true }),
        body: fields.mdx({ label: 'Obsah' }),
      },
    }),
  },

  singletons: {
    'site-settings': singleton({
      label: 'Web — obecné nastavení',
      path: 'src/content/_settings/site',
      format: 'yaml',
      schema: {
        siteName: fields.text({ label: 'Název webu' }),
        siteDescription: fields.text({ label: 'Popis webu', multiline: true }),
        contactEmail: fields.text({
          label: 'Kontaktní e-mail',
          description: 'Sem chodí notifikace z formulářů a přihlášek.',
        }),
        donationUrl: fields.url({ label: 'URL pro dary (darujme.cz)' }),
      },
    }),
    homepage: singleton({
      label: 'Homepage — hero sekce',
      path: 'src/content/_settings/homepage',
      format: 'yaml',
      schema: {
        heroTitle: fields.text({ label: 'Hero titulek' }),
        heroLede: fields.text({ label: 'Hero podtitulek', multiline: true }),
      },
    }),
    about: singleton({
      label: 'Stránka „O nás" — úvod',
      path: 'src/content/_settings/about',
      format: { contentField: 'body' },
      schema: {
        mission: fields.text({ label: 'Poslání', multiline: true }),
        body: fields.mdx({ label: 'Rozšířený text' }),
      },
    }),
    'donate-settings': singleton({
      label: 'Daru — nastavení',
      path: 'src/content/_settings/donate',
      format: 'yaml',
      schema: {
        primaryUrl: fields.url({ label: 'darujme.cz URL' }),
        bankAccount: fields.text({ label: 'Bankovní účet' }),
      },
    }),
  },
});
