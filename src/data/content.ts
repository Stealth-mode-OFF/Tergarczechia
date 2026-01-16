export const content = {
  header: {
    nav: [
      { label: 'Domů', path: '/' },
      { label: 'O nás', path: '/o-nas' },
      { label: 'Programy', path: '/programy' },
      { label: 'Události', path: '/udalosti' },
      { label: 'Rozvrh', path: 'https://app.zenamu.com/tergarczechia', isExternal: true },
      { label: 'Komunita', path: '/komunita' },
      { label: 'Kontakt', path: '/kontakt' },
    ],
    cta: {
      memberSection: 'Členská sekce',
      enter: 'Vstoupit',
      enterApp: 'Vstoupit do aplikace',
    }
  },
  home: {
    hero: {
      label: 'Tergar Česká republika',
      title: {
        line1: 'Otevřete svou',
        highlight: 'přirozenou',
        line2: 'moudrost.',
      },
      description: 'Nadčasová moudrost pro moderní svět. Kompletní cesta od prvních kroků až k pokročilým stádiím vadžrajány pod vedením Mingyura Rinpočheho.',
      buttons: {
        primary: 'Začít svou cestu',
        secondary: 'Co je meditace?',
      }
    },
    philosophy: {
      label: 'Naše filozofie',
      title: {
        text: 'Meditace není o tom, abychom se',
        highlight: 'zbavili',
        end: 'myšlenek.',
      },
      paragraphs: [
        'Můžeme praktikovat cestu meditace stejným stylem jako Buddha a předkové naší linie. Máme přenos cesty, jak praktikovat, abychom překonali úzkost, klam a neurózu. Máme to a můžeme to dokázat.',
        'Mingjur Rinpočhe propojuje osobní zkušenost s moderním vědeckým výzkumem a zpřístupňuje starodávnou moudrost studentům po celém světě.',
      ],
      stats: {
        courses: { number: '25+', label: 'Kurzů pro samostudium' },
        live: { number: 'Live', label: 'Týdenní relace' },
      },
      cta: 'Poznat Rinpočheho příběh',
    },
    programs: {
      label: 'Vzdělávání',
      title: 'Vaše cesta praxe',
      description: 'Nabízíme vzdělávací cesty vedoucí k certifikaci a hlubokému pochopení. Od základů (Radost ze života) až po pokročilou vadžrajánu.',
      viewAll: 'Zobrazit všechny kurzy',
      cards: [
        {
          tag: 'Úvodní',
          title: 'Radost ze života',
          description: 'Odemkněte tajemství a vědu štěstí. Naučte se transformovat obtížné emoce a najít svobodu v každodenním životě.',
          cta: 'Prozkoumat kurz',
          link: '/programy',
          imageType: 'key'
        },
        {
          tag: 'Pokročilé',
          title: 'Cesta osvobození',
          description: 'Imerzní kurzy Mahámudry, Dzogčhenu a Srdce tantry. Pro ty, kteří chtějí zkoumat podstatu mysli do hloubky.',
          cta: 'Prozkoumat kurz',
          link: '/programy',
          imageType: 'sparkles'
        },
        {
          tag: 'Komunita',
          title: 'Lineage Society',
          description: 'Připojte se k živým relacím Heart-to-Heart, Dharma Geek a týdenním meditacím. Sangha je klenotem naší cesty.',
          cta: 'Najít skupinu',
          link: '/komunita',
          imageType: 'world'
        }
      ]
    },
    membership: {
      label: 'Členství',
      title: {
        text: 'Váš prostor pro',
        highlight: 'každodenní',
        end: 'praxi.',
      },
      description: 'Získejte neomezený přístup k více než 25 kurzům, týdenním živým relacím a exkluzivní aplikaci Vajrayana Online.',
      buttons: {
        primary: 'Prozkoumat možnosti členství',
        secondary: 'Více o výhodách členství',
      },
      features: [
        { title: '25+', subtitle: 'Kurzů pro samostudium' },
        { title: 'Live', subtitle: 'Webináře s lamy' },
        { title: 'App', subtitle: 'Pro iOS a Android' },
        { title: 'New', subtitle: 'Obsah každý měsíc' },
      ]
    }
  },
  footer: {
    copyright: '© 2025 Tergar International',
    disclaimer: 'Tergar logo je registrovaná ochranná známka Tergar International. Tergar Česká republika působí pod oficiální licencí.',
    menuTitle: 'Menu',
    legalTitle: 'Právní info',
    socialTitle: 'Sledujte nás',
    links: [
      { label: 'Tergar International', path: 'https://tergar.org', isExternal: true },
      { label: 'Kontakt', path: '/kontakt' },
      { label: 'Programy', path: '/programy' },
      { label: 'Komunita', path: '/komunita' },
      { label: 'Rozvrh akcí', path: 'https://app.zenamu.com/tergarczechia', isExternal: true, note: 'ZENAMU' },
    ],
    legal: [
      { label: 'Pravidla vracení peněz', path: '/vraceni-penez' },
      { label: 'Ochrana soukromí', path: '/privacy' },
      { label: 'Obchodní podmínky', path: '/terms' },
      { label: 'Etický kodex', path: '/eticky-kodex' },
    ]
  }
};
