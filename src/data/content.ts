import communityImage from '@/assets/community.png';
import vajradharaImage from '@/assets/vajradhara.png';
import mingyurWavingImage from '@/assets/mingyur-waving.png';
import lineageTreeImage from '@/assets/lineage-tree.png';
import mingyurPortrait from '@/assets/mingyur-portrait.png';

export const content = {
  header: {
    nav: [
      { label: 'Začít', path: '/co-je-meditace', isExternal: false },
      { label: 'Programy', path: '/program', isExternal: false },
      { label: 'Rozvrh', path: '/rozvrh', isExternal: false },
      { label: 'Skupiny', path: '/skupiny', isExternal: false },
      { label: 'Události', path: '/udalosti-2026', isExternal: false },
      { label: 'Inspirace', path: '/inspirace', isExternal: false },
      { label: 'O nás', path: '/o-nas', isExternal: false },
    ]
  },
  home: {
    slider: [
      {
        text: 'Meditační komunita',
        subtext: 'Yongey Mingyur Rinpočheho v České republice',
        image: communityImage
      },
      {
        text: 'Jste vítaní',
        subtext: 'ať už s meditací začínáte nebo se jí věnujete dlouhodobě.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop'
      },
      {
        text: 'Tergar Česko pořádá',
        subtext: 'meditační workshopy, kurzy, pravidelná setkání a ústraní. Podívejte se na náš program.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop'
      }
    ],
    quote1: {
      text: 'Vše, po čem jste kdy toužili, je právě tady, v tomto přítomném okamžiku bdělého vědomí.',
      author: 'Mingyur Rinpočhe'
    },
    rinpoche: {
      title: 'Yongey Mingyur Rinpočhe',
      text: 'Yongey Mingyur Rinpočhe je učitel a autor několika knih. Je známý svou vřelostí, humorem a svým opravdu jedinečným darem předání esence meditační praxe západnímu publiku. Ve svém přístupu k výuce meditace spojuje tradiční buddhistickou praxi a filozofii se současným vědeckým chápáním mysli a duševního zdraví. Vede celosvětovou meditační komunitu Tergar a další neziskové organizace.',
      image: mingyurWavingImage,
      books: [
        'Radost ze života — Štěstí jako vědecká disciplína',
        'Proměňte svůj život v meditaci — Jak najít klid v moderním světě',
        'Zamilovanost do světa — Mnichovo putování za moudrostí',
        'Vzhůru! — Odhalte sílu, bdělost a vnitřní klid každého dne',
      ],
      quote: 'Skutečná meditace je způsob, jak se spřátelit se svou vlastní myslí. A nejlepší přítel je ten, kdo vás přijme přesně takové, jací jste.',
    },
    support: {
      title: 'Podpořte nás',
      text: 'Věříme, že lidé na celém světě mohou změnit sebe i svět tím, že začlení meditaci do svého každodenního života. Vše, co děláme, vychází z motivace pomáhat lidem žít vědomě, s láskou, soucitem a moudrostí vůči sobě i druhým. I vy můžete pomoci tím, že podpoříte naše aktivity.',
      buttonText: 'Chci podpořit',
      buttonLink: 'https://darujme.cz/projekt/1202868',
    },
    program: {
      title: 'Program',
      subtitle: 'Tergar nabízí ucelený meditační program — od prvních kroků až po pokročilou praxi. Vyberte si úroveň, která vám vyhovuje.',
      quote: {
        text: 'Meditace je opravdu docela jednoduchá. Stačí, když každý prožitek přijmeme vědomě a plně otevřeme svá srdce přítomnému okamžiku.',
        author: 'Mingyur Rinpočhe'
      },
      registrationUrl: 'https://app.zenamu.com/tergarczechia',
      zenamuUrl: 'https://app.zenamu.com/tergarczechia?view=schedule',
      upcomingEvents: [
        { title: 'Joy of Living 1 — Víkendový workshop', date: '15.–16. 3.', type: 'online', desc: 'Úvodní meditační program pro začátečníky i pokročilé.', link: 'https://app.zenamu.com/tergarczechia' },
        { title: 'Měsíční online meditace', date: '22. 3.', type: 'online', desc: 'Společná meditace otevřená všem členům komunity.', link: 'https://app.zenamu.com/tergarczechia' },
        { title: 'Jarní meditační retreat', date: '10.–12. 4.', type: 'prezencni', desc: 'Třídenní retreat v Praze s vedením zkušených instruktorů.', link: 'https://app.zenamu.com/tergarczechia' },
        { title: 'Anytime Anywhere Meditation', date: '3.–4. 5.', type: 'online', desc: 'Úvodní workshop meditace pro úplné začátečníky.', link: 'https://app.zenamu.com/tergarczechia' },
        { title: 'Joy of Living 2 — Soucit', date: '23.–25. 5.', type: 'online', desc: 'Druhá úroveň programu zaměřená na meditace soucitu.', link: 'https://app.zenamu.com/tergarczechia' },
      ],
      regularMeetings: [
        { title: 'Pražská skupina — česky', day: 'Každý 2. a 4. čtvrtek', location: 'Praha 10', link: 'https://app.zenamu.com/tergarczechia', color: '#1C2B3A' },
        { title: 'Prague Group — English', day: 'Every 2nd & 4th Thursday', location: 'Praha 10', link: 'https://app.zenamu.com/tergarczechia', color: '#7B1A1A' },
        { title: 'Budějovická skupina', day: 'Každou neděli', location: 'Č. Budějovice', link: 'https://app.zenamu.com/tergarczechia', color: '#22c55e' },
        { title: 'Českolipská skupina', day: 'Každou středu', location: 'Česká Lípa', link: 'https://app.zenamu.com/tergarczechia', color: '#C9962A' },
        { title: 'Online meditace', day: 'Každé pondělí', location: 'Online', link: 'https://app.zenamu.com/tergarczechia', color: '#6366f1' },
      ],
      tergarPath: {
        title: 'Cesta Tergar',
        subtitle: 'Kompletní meditační cesta od prvních kroků až po pokročilou praxi. Každý stupeň staví na předchozím.',
        image: vajradharaImage,
        items: [
          { title: 'Joy of Living', subtitle: 'Radost ze života', description: 'Tři úrovně meditačního programu pro každého. Naučíte se pracovat s pozorností, soucitem a moudrostí.', link: 'https://joy.tergar.org' },
          { title: 'Path of Liberation', subtitle: 'Cesta osvobození', description: 'Pět úrovní buddhistické meditační praxe Mahámudry pod vedením Mingyura Rinpočheho.', link: 'https://vajrayana.tergar.org' },
          { title: 'Vajrayana Online', subtitle: 'Pokročilá praxe', description: 'Pokročilé vajrayánové praxe pro studenty, kteří dokončili Cestu osvobození.', link: 'https://vajrayana.tergar.org' },
        ],
      },
    },
    groups: {
      title: 'Skupiny',
      text: 'Najděte Tergar meditační skupinu poblíž vás. Pokud ve vašem okolí žádná není a chtěli byste ji založit, ozvěte se nám.',
      email: 'czech@tergar.org',
      mapLocations: [
        { name: 'Praha', top: '35%', left: '42%', lat: 50.08, lng: 14.44, desc: 'Každý 2. a 4. čtvrtek · Chorvatská 12, Praha 10', link: 'https://app.zenamu.com/tergarczechia' },
        { name: 'Brno', top: '65%', left: '65%', lat: 49.19, lng: 16.61, desc: 'Meditační skupina', link: 'mailto:brno@community.tergar.org' },
        { name: 'České Budějovice', top: '75%', left: '40%', lat: 48.97, lng: 14.47, desc: 'Pravidelné nedělní meditace', link: 'https://app.zenamu.com/tergarczechia' },
        { name: 'Česká Lípa', top: '25%', left: '45%', lat: 50.68, lng: 14.54, desc: 'Pravidelné středeční meditace', link: 'https://app.zenamu.com/tergarczechia' },
      ]
    },
    about: {
      title: 'Tergar Česko',
      text: 'Jsme česká pobočka mezinárodní meditační komunity Tergar, kterou založil tibetský buddhistický učitel Yongey Mingyur Rinpočhe. Spojujeme lidi, kteří chtějí meditaci začlenit do svého každodenního života.'
    },
    lineage: {
      label: 'Živá linie',
      title: 'Tradice Karma Kagyü',
      text: 'Mingyur Rinpočhe je držitelem linie Karma Kagyü, jedné z hlavních škol tibetského buddhismu. Tato nepřerušená linie sahá od historického Buddhy přes indické mahásiddhy, tibetské mistry Marpu a Milaräpu, až po současné učitele. Rinpočhe je žákem svého otce Tulku Urgjena Rinpočheho a XVII. Karmapa Ogyen Trinley Dordže je hlavou linie.',
      image: lineageTreeImage,
    },
    photoStrip: [
      communityImage,
      'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop',
      mingyurWavingImage,
      'https://images.unsplash.com/photo-1493673272479-a20888bcee10?w=600&h=400&fit=crop',
    ],
    gallery: [
      { src: communityImage, alt: 'Tergar komunita', aspect: 'landscape' as const },
      { src: mingyurWavingImage, alt: 'Mingyur Rinpočhe', aspect: 'portrait' as const },
      { src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=800&fit=crop', alt: 'Vonné tyčinky', aspect: 'portrait' as const },
      { src: 'https://images.unsplash.com/photo-1493673272479-a20888bcee10?w=800&h=500&fit=crop', alt: 'Podzimní stromy', aspect: 'landscape' as const },
      { src: mingyurPortrait, alt: 'Mingyur Rinpočhe portrét', aspect: 'portrait' as const },
      { src: 'https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?w=800&h=500&fit=crop', alt: 'Západ slunce', aspect: 'landscape' as const },
      { src: lineageTreeImage, alt: 'Strom linie Kagyü', aspect: 'landscape' as const },
      { src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=600&h=800&fit=crop', alt: 'Hvězdná obloha', aspect: 'portrait' as const },
    ],
    social: {
      facebook: 'https://www.facebook.com/tergarcz/',
      instagram: 'https://instagram.com/tergar_cz',
      youtube: 'https://www.youtube.com/@tergarczechia1847',
    },
    newsletter: {
      text: 'Přihlaste se k odběru novinek z komunity Tergar Česko.'
    },
  },
  contactPage: {
    hero: { title: 'Kontakt', subtitle: 'Napište nám' },
    general: { email: 'czech@community.tergar.org' },
    address: { text: 'Tibet Open House, Školská 28, Praha 1' }
  },
  footer: {
    copyright: '© 2026 Tergar International',
    newsletterLink: 'https://app.zenamu.com/tergarczechia',
    contact: {
      email: 'czech@tergar.org',
      facebookLink: 'https://www.facebook.com/tergarcz/',
      instagramLink: 'https://instagram.com/tergar_cz',
      youtubeLink: 'https://www.youtube.com/@tergarczechia1847',
      address: {
        name: 'Tergar Česko',
        street: 'Chorvatská 12',
        city: '101 00 Praha 10'
      }
    }
  }
};
