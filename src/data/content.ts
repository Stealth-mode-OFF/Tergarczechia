import communityImage from '@/assets/ee3557312d962ff84207c71d88a25a1563aea613.png';
import mingyurWavingImage from '@/assets/72312fce0245d3b51ee86da6f9a6003167a8e1e2.png';
import mingyurPortraitImage from '@/assets/d0b3d5641727b1f2f947c8f27ae30b24d450fbdf.png';
import vajradharaImage from '@/assets/a248c2397f596c63df6208678b6a60bceff14370.png';

export const content = {
  header: {
    nav: [
      { label: 'O nás', path: '/o-nas', isExternal: false },
      { label: 'Program', path: '/program', isExternal: false },
      { label: 'Skupiny', path: '/skupiny', isExternal: false },
      { label: 'Tergar International', path: 'https://tergar.org', isExternal: true },
    ]
  },
  home: {
    hero: {
      headline: 'Meditační komunita\nv České republice',
      subheadline: 'Yongey Mingyur Rinpočhe · meditace pro každého · živě i online',
      image: communityImage,
      ctaText: 'Zobrazit program',
      ctaLink: '#program',
    },
    about: {
      label: 'Kdo jsme',
      title: 'Tergar Česko',
      text: 'Jsme meditační komunita založená na učení tibetského mistra Yongey Mingyur Rinpočheho. Pořádáme pravidelné meditace, workshopy, kurzy a ústraní v Praze, Českých Budějovicích, České Lípě a online. Naše programy jsou otevřené všem — ať už s meditací začínáte, nebo se jí věnujete dlouhodobě.',
      image: mingyurWavingImage,
    },
    tergarPath: {
      title: 'Meditační cesta Tergar',
      subtitle: 'Tři pilíře praxe — od úplných základů meditace až po hlubokou buddhistickou cestu Mahámudry.',
      items: [
        {
          title: 'Radost ze života',
          subtitle: 'Joy of Living · 3 úrovně',
          description: 'Meditační program pro každého bez ohledu na vyznání. Tři úrovně postupně prohlubují praxi od základů klidu mysli přes práci s emocemi až po bdělé vědomí v každodenním životě.',
          link: 'https://joy.tergar.org',
        },
        {
          title: 'AAM – Esence meditační praxe',
          subtitle: 'Anytime Anywhere Meditation',
          description: 'Zhuštěný úvod do meditace vycházející z programu Radost ze života. Ideální víkendový workshop pro ty, kdo chtějí začít meditovat rychle a prakticky.',
        },
        {
          title: 'Cesta osvobození',
          subtitle: 'Path of Liberation · 5 úrovní',
          description: 'Buddhistický meditační trénink v tradici Mahámudry. Pět úrovní praxe pod vedením Mingyur Rinpočheho pro ty, kdo se chtějí na cestě meditace ponořit hlouběji.',
          link: 'https://vajrayana.tergar.org',
        },
      ],
      image: vajradharaImage,
    },
    quote1: {
      text: 'Vše, po čem jste kdy toužili, je právě tady, v tomto přítomném okamžiku bdělého vědomí.',
      author: 'Mingyur Rinpočhe'
    },
    rinpoche: {
      title: 'Yongey Mingyur Rinpočhe',
      image: mingyurPortraitImage,
      text: 'Yongey Mingyur Rinpočhe se narodil v roce 1975 v Nepálu. Jako dítě trpěl silným strachem a úzkostí, které se mu podařilo proměnit právě díky meditaci — tento osobní příběh transformace inspiruje praktikující po celém světě.\n\nJe uznávaným učitelem, který ve svém přístupu spojuje staletou buddhistickou moudrost se současným vědeckým výzkumem. Dlouhodobě spolupracuje s neurovědci na University of Wisconsin, včetně Richarda Davidsona a Antoina Lutze, na výzkumu účinků meditace na mozek.\n\nVede celosvětovou meditační komunitu Tergar s komunitami ve více než 30 zemích. Je autorem několika knih přeložených do více než 20 jazyků a svým vřelým humorem a srozumitelností oslovuje široké publikum.',
      books: [
        'Radost ze života — New York Times bestseller',
        'Joyful Wisdom — Proměna strachu a úzkosti',
        'In Love with the World — O cestě za hranice komfortní zóny',
      ],
      quote: 'Podstatu buddhovské přirozenosti lze shrnout jediným slovem: odvaha.',
    },
    support: {
      title: 'Podpořte nás',
      text: 'Věříme, že lidé na celém světě mohou změnit sebe i svět tím, že začlení meditaci do svého každodenního života. I vy můžete pomoci tím, že podpoříte naše aktivity.',
      buttonText: 'Chci podpořit',
      buttonLink: 'https://darujme.cz/projekt/1202868',
    },
    program: {
      title: 'Program',
      subtitle: 'Nadcházející akce, kurzy a pravidelné meditace. Registrujte se přes Zenamu.',
      zenamuUrl: 'https://app.zenamu.com/tergarczechia?view=schedule',
      registrationUrl: 'https://app.zenamu.com/app/office/tergarczechia',
      upcomingEvents: [
        {
          title: 'Radost ze života 1 – Klidná mysl',
          date: '18.2. – 8.4.2026',
          type: 'online' as const,
          desc: '8-týdenní ranní meditační kurz',
          link: 'https://app.zenamu.com/tergarczechia/courses/58095',
        },
        {
          title: 'AAM – Esence meditační praxe',
          date: '14.–15.3.2026',
          type: 'live' as const,
          desc: 'Víkendový workshop · České Budějovice',
          link: 'https://app.zenamu.com/tergarczechia/workshops/3182',
        },
        {
          title: 'Pobytový retreat',
          date: '26.–29.3.2026',
          type: 'live' as const,
          desc: 'Tuněchodský Mlýn',
          link: 'https://app.zenamu.com/tergarczechia/workshops/2883',
        },
        {
          title: 'AAM – čtvrteční večery',
          date: '2.–30.4.2026',
          type: 'online' as const,
          desc: '5-týdenní online kurz',
          link: 'https://app.zenamu.com/tergarczechia',
        },
        {
          title: 'Jednodenní retreat v tichu',
          date: '26.4.2026',
          type: 'live' as const,
          desc: 'Praha',
          link: 'https://app.zenamu.com/tergarczechia/workshops/3351',
        },
      ],
      regularMeetings: [
        {
          title: 'Středeční meditace',
          day: 'Středa',
          location: 'Praha',
          color: '#22c55e',
          link: 'https://app.zenamu.com/tergarczechia',
        },
        {
          title: 'Středeční meditace',
          day: 'Středa',
          location: 'Česká Lípa',
          color: '#a16207',
          link: 'https://app.zenamu.com/tergarczechia',
        },
        {
          title: 'Nedělní meditace',
          day: 'Neděle',
          location: 'České Budějovice',
          color: '#f97316',
          link: 'https://app.zenamu.com/tergarczechia',
        },
        {
          title: 'Středeční meditace',
          day: 'Středa',
          location: 'Online',
          color: '#3b82f6',
          link: 'https://app.zenamu.com/tergarczechia',
        },
        {
          title: 'Radost ze života 2+3 · practice group',
          day: '1× za 14 dní úterý',
          location: 'Online',
          color: '#a855f7',
          link: 'https://app.zenamu.com/tergarczechia',
        },
      ]
    },
    groups: {
      title: 'Skupiny',
      text: 'Najděte Tergar meditační skupinu poblíž vás. Pokud ve vašem okolí žádná není a chtěli byste ji založit, ozvěte se nám.',
      email: 'czech@community.tergar.org',
      mapLocations: [
        { name: 'Praha', lat: 50.08, lng: 14.44, desc: 'Pravidelné středeční meditace · Tibet Open House, Školská 28', link: 'https://app.zenamu.com/tergarczechia' },
        { name: 'Brno', lat: 49.19, lng: 16.61, desc: 'Meditační skupina', link: 'mailto:brno@community.tergar.org' },
        { name: 'České Budějovice', lat: 48.97, lng: 14.47, desc: 'Pravidelné nedělní meditace · workshopy', link: 'https://app.zenamu.com/tergarczechia' },
        { name: 'Česká Lípa', lat: 50.68, lng: 14.54, desc: 'Pravidelné středeční meditace', link: 'https://app.zenamu.com/tergarczechia' },
      ]
    },
    newsletter: {
      title: 'Chci dostávat Tergar newsletter',
      link: 'https://bit.ly/zajima_me_tergar',
    },
    inclusion: {
      text: 'Mingyur Rinpočhe a celá komunita Tergar vyjadřuje podporu LGBTQ komunitě.',
      link: 'https://learning.tergar.org/2020/07/16/mingyur-rinpoche-addresses-tergars-support-of-the-lgbtq-community/',
    },
    social: {
      youtube: 'https://www.youtube.com/@tergarczechia1847',
      instagram: 'https://instagram.com/tergar_cz',
      facebook: 'https://www.facebook.com/tergarcz/',
    }
  },
  footer: {
    copyright: '© 2026 Tergar Česko',
    contact: {
      email: 'czech@community.tergar.org',
      facebookLink: 'https://www.facebook.com/tergarcz/',
      instagramLink: 'https://instagram.com/tergar_cz',
      youtubeLink: 'https://www.youtube.com/@tergarczechia1847',
      address: {
        name: 'Tibet Open House',
        street: 'Školská 28',
        city: '110 00 Praha 1'
      }
    },
    newsletterLink: 'https://bit.ly/zajima_me_tergar',
  }
};
