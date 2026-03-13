import communityImage from '@/assets/community.png';
import vajradharaImage from '@/assets/vajradhara.png';
import mingyurWavingImage from '@/assets/mingyur-waving.png';

export const content = {
  header: {
    nav: [
      { label: 'Začít', path: '/co-je-meditace', isExternal: false },
      { label: 'Programy', path: '/program', isExternal: false },
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
        image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=2574&auto=format&fit=crop'
      },
      {
        text: 'Tergar Česko pořádá',
        subtext: 'meditační workshopy, kurzy, pravidelná setkání a ústraní. Podívejte se na náš program.',
        image: 'https://images.unsplash.com/photo-1755591169837-01288ab3c111?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwbmF0dXJlJTIwcGVhY2VmdWwlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcxMjYxNzg5fDA&ixlib=rb-4.1.0&q=80&w=1080'
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
      buttonLink: 'https://darujme.cz/projekt/1202868',
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
      text: 'Najděte Tergar meditační skupinu poblíž vás. Pokud ve vašem okolí žádná není a chtěli byste ji založit, ozvěte se nám.',
      email: 'czech@tergar.org',
      mapLocations: [
        { name: 'Praha', lat: 50.08, lng: 14.44, desc: 'Každý 2. a 4. čtvrtek · Chorvatská 12, Praha 10', link: 'https://app.zenamu.com/tergarczechia' },
        { name: 'Brno', lat: 49.19, lng: 16.61, desc: 'Meditační skupina', link: 'mailto:brno@community.tergar.org' },
        { name: 'České Budějovice', lat: 48.97, lng: 14.47, desc: 'Pravidelné nedělní meditace · workshopy', link: 'https://app.zenamu.com/tergarczechia' },
        { name: 'Česká Lípa', lat: 50.68, lng: 14.54, desc: 'Pravidelné středeční meditace', link: 'https://app.zenamu.com/tergarczechia' },
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
