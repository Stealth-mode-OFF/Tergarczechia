import communityImage from 'figma:asset/ee3557312d962ff84207c71d88a25a1563aea613.png';
import vajradharaImage from 'figma:asset/a248c2397f596c63df6208678b6a60bceff14370.png';
import mingyurWavingImage from 'figma:asset/72312fce0245d3b51ee86da6f9a6003167a8e1e2.png';

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
    slider: [
      {
        text: 'Meditační komunita',
        subtext: 'Yongey Mingyur Rinpočheho v České republice',
        image: communityImage // Use community image
      },
      {
        text: 'Jste vítaní',
        subtext: 'ať už s meditací začínáte nebo se jí věnujete dlouhodobě.',
        image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=2574&auto=format&fit=crop' // Peaceful nature
      },
      {
        text: 'Tergar Česko pořádá',
        subtext: 'meditační workshopy, kurzy, pravidelná setkání a ústraní. Podívejte se na náš program.',
        image: 'https://images.unsplash.com/photo-1755591169837-01288ab3c111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbmF0dXJlJTIwcGVhY2VmdWwlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcxMjYxNzg5fDA&ixlib=rb-4.1.0&q=80&w=1080' // Using the newly fetched image
      }
    ],
    quote1: {
      text: 'Vše, po čem jste kdy toužili, je právě tady, v tomto přítomném okamžiku bdělého vědomí.',
      author: 'Mingyur Rinpočhe'
    },
    rinpoche: {
      title: 'Yongey Mingyur Rinpočhe',
      text: 'Yongey Mingyur Rinpočhe je učitel a autor několika knih. Je známý svou vřelostí, humorem a svým opravdu jedinečným darem předání esence meditační praxe západnímu publiku. Ve svém přístupu k výuce meditace spojuje tradiční buddhistickou praxi a filozofii se současným vědeckým chápáním mysli a duševního zdraví. Vede celosvětovou meditační komunitu Tergar a další neziskové organizace.'
    },
    support: {
      title: 'Podpořte nás',
      text: 'Věříme, že lidé na celém světě mohou změnit sebe i svět tím, že začlení meditaci do svého každodenního života. Vše, co děláme, vychází z motivace pomáhat lidem žít vědomě, s láskou, soucitem a moudrostí vůči sobě i druhým. I vy můžete pomoci tím, že podpoříte naše aktivity.',
      buttonText: 'Chci podpořit',
      buttonLink: 'https://darujme.cz/projekt/1202868', // Assuming Darujme link or similar for CZ context
    },
    program: {
      title: 'Program',
      quote: {
        text: 'Meditace je opravdu docela jednoduchá. Stačí, když každý prožitek přijmeme vědomě a plně otevřeme svá srdce přítomnému okamžiku.',
        author: 'Mingyur Rinpočhe'
      }
    },
    groups: {
      title: 'Skupiny',
      text: 'Najděte Tergar meditační skupinu poblíž vás. Pokud ve vašem okolí žádná není a vy byste ji chtěli založit, ozvěte se nám na czech@community.tergar.org.',
      email: 'czech@community.tergar.org',
      mapLocations: [
        { name: 'Praha', top: '35%', left: '42%', link: 'mailto:praha@community.tergar.org' },
        { name: 'Brno', top: '65%', left: '65%', link: 'mailto:brno@community.tergar.org' },
        { name: 'České Budějovice', top: '75%', left: '40%', link: 'mailto:budejovice@community.tergar.org' },
        { name: 'Česká Lípa', top: '25%', left: '45%', link: 'mailto:ceskalipa@community.tergar.org' },
      ]
    }
  },
  contactPage: {
    hero: { title: 'Kontakt', subtitle: 'Napište nám' },
    general: { email: 'czech@community.tergar.org' },
    address: { text: 'Tibet Open House, Školská 28, Praha 1' }
  },
  footer: {
    copyright: '© 2026 Tergar International',
    contact: {
      email: 'czech@community.tergar.org',
      facebookLink: 'https://www.facebook.com/tergarcz',
      instagramLink: 'https://www.instagram.com/tergar_cz',
      address: {
        name: 'Tibet Open House',
        street: 'Školská 28',
        city: '110 00 Praha 1'
      }
    }
  }
};
