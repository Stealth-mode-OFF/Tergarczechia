import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: { name: 'Tergar Česko · Admin' },
    navigation: {
      Obsah: ['blog', 'events', 'path', 'teachers', 'groups', 'resources', 'glossary', 'faq', 'pages'],
      Nastavení: ['site-settings', 'homepage', 'about', 'donate-settings'],
    },
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Název' } }),
        perex: fields.text({ label: 'Perex', multiline: true, description: 'Krátké shrnutí (max 280 znaků)' }),
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
          label: 'Náhled',
          directory: 'public/uploads/blog',
          publicPath: '/uploads/blog/',
        }),
        youtubeId: fields.text({ label: 'YouTube ID (volitelné)' }),
        featured: fields.checkbox({ label: 'Zvýraznit', defaultValue: false }),
        draft: fields.checkbox({ label: 'Koncept', defaultValue: false }),
        content: fields.mdx({
          label: 'Obsah',
          components: {},
        }),
      },
    }),
    events: collection({
      label: 'Akce a události',
      slugField: 'title',
      path: 'src/content/events/*',
      format: 'yaml',
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
        description: fields.text({ label: 'Popis', multiline: true }),
        registrationUrl: fields.url({ label: 'Odkaz na přihlášku' }),
        free: fields.checkbox({ label: 'Zdarma', defaultValue: false }),
        featured: fields.checkbox({ label: 'Zvýraznit na homepage', defaultValue: false }),
      },
    }),
    path: collection({
      label: 'Cesta Tergar',
      slugField: 'title',
      path: 'src/content/path/*',
      format: { contentField: 'body' },
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
        externalUrl: fields.url({ label: 'Externí odkaz (Tergar HQ)' }),
        color: fields.text({ label: 'Barva (hex)' }),
        body: fields.mdx({ label: 'Popis' }),
      },
    }),
    teachers: collection({
      label: 'Učitelé',
      slugField: 'name',
      path: 'src/content/teachers/*',
      format: { contentField: 'bio' },
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
        schedule: fields.text({ label: 'Rozvrh (text)' }),
        address: fields.text({ label: 'Adresa', multiline: true }),
        lat: fields.number({ label: 'Zeměpisná šířka' }),
        lng: fields.number({ label: 'Zeměpisná délka' }),
        contactEmail: fields.text({ label: 'Kontaktní e-mail' }),
        registrationUrl: fields.url({ label: 'Odkaz na přihlášku' }),
        active: fields.checkbox({ label: 'Aktivní', defaultValue: true }),
      },
    }),
    resources: collection({
      label: 'Zdroje (video, kniha, audio)',
      slugField: 'title',
      path: 'src/content/resources/*',
      format: 'yaml',
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
        description: fields.text({ label: 'Popis', multiline: true }),
        url: fields.url({ label: 'URL' }),
        youtubeId: fields.text({ label: 'YouTube ID' }),
        featured: fields.checkbox({ label: 'Zvýraznit', defaultValue: false }),
      },
    }),
    glossary: collection({
      label: 'Slovník pojmů',
      slugField: 'term',
      path: 'src/content/glossary/*',
      format: { contentField: 'body' },
      schema: {
        term: fields.slug({ name: { label: 'Pojem (česky)' } }),
        termSanskrit: fields.text({ label: 'Sanskrt' }),
        termTibetan: fields.text({ label: 'Tibetština' }),
        pronunciation: fields.text({ label: 'Výslovnost' }),
        shortDef: fields.text({ label: 'Krátká definice (tooltip, max 180)', multiline: true }),
        body: fields.mdx({ label: 'Rozšířený výklad' }),
      },
    }),
    faq: collection({
      label: 'Časté dotazy',
      slugField: 'question',
      path: 'src/content/faq/*',
      format: 'yaml',
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
      label: 'Statické stránky',
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
      label: 'Nastavení webu',
      path: 'src/content/_settings/site',
      format: 'yaml',
      schema: {
        siteName: fields.text({ label: 'Název webu' }),
        siteDescription: fields.text({ label: 'Popis webu', multiline: true }),
        contactEmail: fields.text({ label: 'Kontaktní e-mail' }),
        donationUrl: fields.url({ label: 'URL pro dary' }),
      },
    }),
    homepage: singleton({
      label: 'Úvodní stránka',
      path: 'src/content/_settings/homepage',
      format: 'yaml',
      schema: {
        heroTitle: fields.text({ label: 'Hero titulek' }),
        heroLede: fields.text({ label: 'Hero podtitulek', multiline: true }),
      },
    }),
    about: singleton({
      label: 'O nás (obsah)',
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
