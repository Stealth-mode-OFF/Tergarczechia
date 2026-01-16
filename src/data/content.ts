import { Content } from '@/types';

export const content: Content = {
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
  cestaTergar: {
    courses: [
      {
        title: 'Plány probuzení',
        year: '2025–26',
        desc: 'V tomto devítiměsíčním imerzním kurzu prozkoumáme základní principy neboli „plány“ vadžrajánové praxe. Odhalíme, jak i ty nejnáročnější emoce a překážky mohou být ve skutečnosti palivem pro probuzení. Kurz vrcholí hlubokou praxí sebeosvobození.',
        teachers: 'S Mingjurem Rinpočhem, Robertem Thurmanem a Lamou Shenpen Hookham',
        start: 'Začínáme v srpnu 2025',
        active: true,
      },
      {
        title: 'Buddhistická psychologie',
        year: '2024–25',
        desc: 'Abhidharma je buddhistická věda o mysli a realitě. Kurz nabízí živé webináře a studium Mingjurova Rinpočheho textu „Neposkvrněná prajňá“. Naučíte se používat analytickou meditaci k vykořenění utrpení a pochopení fungování vlastní mysli.',
        teachers: 'S Mingjurem Rinpočhem, Danielem Aitkenem a Josephem Goldsteinem',
      },
      {
        title: 'Mahámudra: Píseň realizace',
        year: '2023–24',
        desc: 'Mahámudra je považována za nejpřímější cestu k probuzení v tradici Kagyu. Budeme studovat kořenové verše Mahámudry Gangy od Tilopy, které nám hravým a hlubokým způsobem pomohou objevit naši pravou přirozenost.',
        teachers: 'S Mingjurem Rinpočhem, Elizabeth Callahan a Karlem Brunnhölzlem',
      },
      {
        title: 'Srdce tantry',
        year: '2022–23',
        desc: 'Prozkoumejte fáze rozvoje a završení vadžrajány. Tantra zde není chápána jako něco sexuálního, ale jako cesta ovoce – rozpoznání, že osvícení není v budoucnosti, ale je přítomno tady a teď. Naučíte se pracovat s imaginací a jemným tělem.',
        teachers: 'S Džecunmou Tenzin Palmo a Coknji Rinpočhem',
      },
      {
        title: 'Cesta bódhisattvy',
        year: '2021–22',
        desc: 'Jak zůstat trpělivý v těžkých časech? Jak pomáhat druhým a nevyhořet? Hluboké studium Šántidevova klasického textu s praktickými instrukcemi pro moderní život. Zasejeme semínko odvahy a soucitu, které časem poroste.',
        teachers: 'Hloubková učení Šántidevy',
      },
      {
        title: 'Dzogčhen: Tři slova',
        year: '2020–21',
        desc: 'Od Garaba Dordže k Mingjurovi Rinpočhemu: krok za krokem k rozpoznání čisté bdělosti. Dzogčhen („Velká dokonalost“) je přímá cesta k odhalení naší původní moudrosti, která je vždy přítomná, ale často přehlížená.',
        teachers: 'Podstata dzogčhenu',
      },
    ]
  },
  programy: {
    levels: [
      { title: 'Úroveň 1: Příprava na praxi', subtitle: 'Cesta osvobození', duration: '6 týdnů', icon: '🌱', desc: 'Čtyři myšlenky, které obracejí mysl k dharmě, a uvedení do povahy mysli (klid, pohyb, vědomí).' },
      { title: 'Úroveň 2: Útočiště', subtitle: 'Cesta osvobození', duration: '4 týdny', icon: '🏠', desc: 'Vnější a vnitřní útočiště. Rozpoznání, že mysl je prázdnota. Očista a praxe.' },
      { title: 'Úroveň 3: Bódhičitta', subtitle: 'Cesta osvobození', duration: '4 týdny', icon: '❤️', desc: 'Altruistická motivace stát se plně realizovaným buddhou pro dobro všech bytostí.' },
      { title: 'Úroveň 4: Guru jóga', subtitle: 'Cesta osvobození', duration: '4 týdny', icon: '🙏', desc: 'Práce s principem gurua, synchronicitou a oddaností jako bránou k rozpoznání.' },
      { title: 'Úroveň 5: Sádhana', subtitle: 'Cesta osvobození', duration: '4 týdny', icon: '📿', desc: 'Struktura sádhany, mantry, mudry a sjednocení fáze rozvoje a završení.' },
      { title: 'Pokročilé: Mahámudra & Dzogčhen', subtitle: 'Imerze', duration: 'Průběžné', icon: '🏔️', desc: 'Přímé uvedení do podstaty mysli a stabilizace tohoto rozpoznání.' },
    ]
  },
  oNas: {
    title: 'Yongey Mingyur Rinpočhe',
    subtitle: 'Učitel',
    description: 'Mistr meditace s výjimečným darem propojovat starodávnou moudrost s moderním životem. Autor bestsellerů New York Times.',
    bio: [
      'Narodil se v roce 1975 v himalájském pohraničí mezi Tibetem a Nepálem. Mingjur Rinpočhe je velmi milovaný a uznávaný mistr meditace. Od útlého věku ho přitahoval život v kontemplaci. Mnoho let svého dětství strávil v přísném ústraní.',
      'Ve věku sedmnácti let byl pozván, aby se stal učitelem v tříletém meditačním centru svého kláštera, což je pozice, kterou tak mladý lama zastává jen zřídka. Dokončil také tradiční buddhistické vzdělání ve filozofii a psychologii, než založil mnišskou kolej ve svém domovském klášteře v severní Indii.',
      'Kromě rozsáhlého výcviku v meditačních a filozofických tradicích tibetského buddhismu se Mingjur Rinpočhe celý život zajímá o západní vědu a psychologii. V roce 2002 byl Rinpočhe a několik dalších dlouholetých meditujících pozváni do Waismanovy laboratoře pro zobrazování mozku a chování na Wisconsinské univerzitě v Madisonu, kde Richard Davidson a další vědci zkoumali účinky meditace na mozek pokročilých meditujících.'
    ],
    quote: '"Když se podíváte dovnitř, nenajdete nic pevného, čeho byste se mohli držet. A to je ta nejlepší zpráva, jakou jste kdy mohli slyšet."'
  },
  eventsPage: {
    hero: {
      label: 'Kalendář',
      title: 'Živá setkání',
      description: 'Obohaťte své samostudium připojením k našim živým relacím a spojením s komunitou.'
    },
    months: [
      {
        name: 'Leden',
        year: '2026',
        events: [
          { day: '14', dateFull: '14.1.2026', time: '17:15 - 19:00', title: 'AAM | 5-týdenní kurz', loc: 'PRAHA', color: 'bg-blue-50 text-tergar-blue', type: 'Kurz', address: 'Studio MILADA, Milady Horákové 53', price: '2500 Kč', desc: 'Esence meditační praxe. Krátký, praktický kurz pro začátečníky i pokročilé.' },
          { day: '14', dateFull: '14.1.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House, Školská 28', price: 'Zdarma', desc: 'Vedené meditace podle učení Mingyura Rinpocheho a krátké sdílení.' },
          { day: '19', dateFull: '19.1.2026', time: '20:00', title: 'Online meditační setkání (pokročilí)', loc: 'ONLINE', color: 'bg-purple-50 text-purple-900', type: 'Praxe', icon: '🟣', address: 'Zoom (registrace emailem)', price: 'Zdarma', desc: 'Pro absolventy RZŽ 2 a 3. Otevírání srdce a Probuzení moudrosti.' },
          { day: '20', dateFull: '20.1.2026', time: '19:00', title: 'Online meditační setkání (všichni)', loc: 'ONLINE', color: 'bg-blue-50 text-blue-900', type: 'Meditace', icon: '🔵', address: 'Zoom (registrace emailem)', price: 'Zdarma', desc: 'Vedené meditace a sdílení. Otevřené všem.' },
          { day: '21', dateFull: '21.1.2026', time: '17:15 - 19:00', title: 'AAM | 5-týdenní kurz', loc: 'PRAHA', color: 'bg-blue-50 text-tergar-blue', type: 'Kurz', address: 'Studio MILADA, Milady Horákové 53', price: '2500 Kč', desc: '2. lekce kurzu Esence meditační praxe.' },
          { day: '21', dateFull: '21.1.2026', time: '18:00 - 19:00', title: 'Středeční meditace', loc: 'ČESKÁ LÍPA', color: 'bg-amber-50 text-amber-900', type: 'Meditace', icon: '🟤', address: 'GAIA centrum', price: 'Zdarma', desc: 'Vedené meditace a sdílení. Otevřené všem.' },
          { day: '21', dateFull: '21.1.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House, Školská 28', price: 'Zdarma', desc: 'Pravidelné setkání.' },
          { day: '25', dateFull: '25.1.2026', time: '18:00 - 19:30', title: 'Nedělní meditace', loc: 'ČESKÉ BUDĚJOVICE', color: 'bg-orange-50 text-orange-900', type: 'Meditace', icon: '🟠', address: 'Čajový ateliér, Krajinská 260/22', price: '100 Kč (dop.)', desc: 'Vedené meditace a sdílení.' },
          { day: '26', dateFull: '26.1.2026', time: '20:00', title: 'Online meditační setkání (pokročilí)', loc: 'ONLINE', color: 'bg-purple-50 text-purple-900', type: 'Praxe', icon: '🟣', address: 'Zoom', price: 'Zdarma', desc: 'Pro absolventy RZŽ 2 a 3.' },
          { day: '27', dateFull: '27.1.2026', time: '19:00', title: 'Online meditační setkání (všichni)', loc: 'ONLINE', color: 'bg-blue-50 text-blue-900', type: 'Meditace', icon: '🔵', address: 'Zoom', price: 'Zdarma', desc: 'Otevřené všem.' },
          { day: '28', dateFull: '28.1.2026', time: '17:15 - 19:00', title: 'AAM | 5-týdenní kurz', loc: 'PRAHA', color: 'bg-blue-50 text-tergar-blue', type: 'Kurz', address: 'Studio MILADA', price: '2500 Kč', desc: '3. lekce kurzu.' },
          { day: '28', dateFull: '28.1.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House', price: 'Zdarma', desc: 'Pravidelné setkání.' },
          { day: '30', dateFull: '30.1. - 1.2.', time: '17:00', title: 'Otevřené srdce | Workshop', loc: 'PRAHA', color: 'bg-tergar-blue text-white', type: 'Workshop', address: 'Tibet Open House, Školská 28', price: '3200 Kč', desc: 'Víkendový workshop Radosti ze života 2. Rozvíjení lásky a soucitu. Vedou Anya Adair a Veronika Bílá.' },
        ]
      },
      {
        name: 'Únor',
        year: '2026',
        events: [
          { day: '02', dateFull: '2.2.2026', time: '20:00', title: 'Online meditační setkání (pokročilí)', loc: 'ONLINE', color: 'bg-purple-50 text-purple-900', type: 'Praxe', icon: '🟣', address: 'Zoom', price: 'Zdarma', desc: 'Pro absolventy RZŽ 2 a 3.' },
          { day: '03', dateFull: '3.2.2026', time: '19:00', title: 'Online meditační setkání (všichni)', loc: 'ONLINE', color: 'bg-blue-50 text-blue-900', type: 'Meditace', icon: '🔵', address: 'Zoom', price: 'Zdarma', desc: 'Otevřené všem.' },
          { day: '04', dateFull: '4.2.2026', time: '17:15 - 19:00', title: 'AAM | 5-týdenní kurz', loc: 'PRAHA', color: 'bg-blue-50 text-tergar-blue', type: 'Kurz', address: 'Studio MILADA', price: '2500 Kč', desc: '4. lekce kurzu.' },
          { day: '04', dateFull: '4.2.2026', time: '18:00 - 19:00', title: 'Středeční meditace', loc: 'ČESKÁ LÍPA', color: 'bg-amber-50 text-amber-900', type: 'Meditace', icon: '🟤', address: 'GAIA centrum', price: 'Zdarma', desc: 'Vedené meditace a sdílení.' },
          { day: '04', dateFull: '4.2.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House', price: 'Zdarma', desc: 'Pravidelné setkání.' },
          { day: '08', dateFull: '8.2.2026', time: '18:00 - 19:30', title: 'Nedělní meditace', loc: 'ČESKÉ BUDĚJOVICE', color: 'bg-orange-50 text-orange-900', type: 'Meditace', icon: '🟠', address: 'Čajový ateliér', price: '100 Kč (dop.)', desc: 'Vedené meditace a sdílení.' },
          { day: '09', dateFull: '9.2.2026', time: '20:00', title: 'Online meditační setkání (pokročilí)', loc: 'ONLINE', color: 'bg-purple-50 text-purple-900', type: 'Praxe', icon: '🟣', address: 'Zoom', price: 'Zdarma', desc: 'Pro absolventy RZŽ 2 a 3.' },
          { day: '10', dateFull: '10.2.2026', time: '19:00', title: 'Online meditační setkání (všichni)', loc: 'ONLINE', color: 'bg-blue-50 text-blue-900', type: 'Meditace', icon: '🔵', address: 'Zoom', price: 'Zdarma', desc: 'Otevřené všem.' },
          { day: '11', dateFull: '11.2.2026', time: '17:15 - 19:00', title: 'AAM | 5-týdenní kurz', loc: 'PRAHA', color: 'bg-blue-50 text-tergar-blue', type: 'Kurz', address: 'Studio MILADA', price: '2500 Kč', desc: 'Závěrečná lekce kurzu.' },
          { day: '11', dateFull: '11.2.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House', price: 'Zdarma', desc: 'Pravidelné setkání.' },
          { day: '18', dateFull: '18.2.2026', time: '18:00 - 19:00', title: 'Středeční meditace', loc: 'ČESKÁ LÍPA', color: 'bg-amber-50 text-amber-900', type: 'Meditace', icon: '🟤', address: 'GAIA centrum', price: 'Zdarma', desc: 'Vedené meditace a sdílení.' },
          { day: '18', dateFull: '18.2.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House', price: 'Zdarma', desc: 'Pravidelné setkání.' },
          { day: '22', dateFull: '22.2.2026', time: '18:00 - 19:30', title: 'Nedělní meditace', loc: 'ČESKÉ BUDĚJOVICE', color: 'bg-orange-50 text-orange-900', type: 'Meditace', icon: '🟠', address: 'Čajový ateliér', price: '100 Kč (dop.)', desc: 'Vedené meditace a sdílení.' },
        ]
      }
    ]
  },
  contactPage: {
    hero: {
      label: 'Podpora',
      title: 'Jsme tu pro vás',
      description: 'Máte dotazy k členství, technické problémy nebo hledáte radu k praxi?'
    },
    general: {
      title: 'Obecné dotazy',
      desc: 'Informace o komunitě, akcích a studijních skupinách',
      email: 'czech@community.tergar.org'
    },
    address: {
      title: 'Adresa',
      desc: 'Tibet Open House\nŠkolská 28\n110 00 Praha 1\nČeská republika'
    },
    social: {
      title: 'Sledujte nás',
      desc: 'Buďte v obraze s novinkami a inspirací na sociálních sítích',
      facebook: 'https://www.facebook.com/tergarcz',
      instagram: 'https://www.instagram.com/tergar_cz'
    }
  },
  footer: {
    copyright: '© 2026 Tergar International',
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
    ],
    contactInfo: {
      email: 'czech@community.tergar.org',
      address: 'Tibet Open House, Školská 28, Praha 1'
    }
  }
};
