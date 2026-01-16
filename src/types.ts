export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
  note?: string;
}

export interface SocialLink {
  facebook: string;
  instagram: string;
}

export interface Address {
  name: string;
  street: string;
  city: string;
}

export interface HeaderContent {
  nav: NavItem[];
  cta: {
    memberSection: string;
    enter: string;
    enterApp: string;
  };
}

export interface HomeContent {
  hero: {
    label: string;
    title: {
      line1: string;
      highlight: string;
      line2: string;
    };
    description: string;
    buttons: {
      primary: string;
      secondary: string;
    };
  };
  philosophy: {
    label: string;
    title: {
      text: string;
      highlight: string;
      end: string;
    };
    paragraphs: string[];
    stats: {
      courses: { number: string; label: string };
      live: { number: string; label: string };
    };
    cta: string;
  };
  programs: {
    label: string;
    title: string;
    description: string;
    viewAll: string;
    cards: Array<{
      tag: string;
      title: string;
      description: string;
      cta: string;
      link: string;
      imageType: string;
    }>;
  };
  membership: {
    label: string;
    title: {
      text: string;
      highlight: string;
      end: string;
    };
    description: string;
    buttons: {
      primary: string;
      secondary: string;
    };
    features: Array<{
      title: string;
      subtitle: string;
    }>;
  };
}

export interface Course {
  title: string;
  year: string;
  desc: string;
  teachers: string;
  start?: string;
  active?: boolean;
}

export interface Level {
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
  desc: string;
}

export interface AboutContent {
  title: string;
  subtitle: string;
  description: string;
  bio: string[];
  quote: string;
}

export interface Event {
  day: string;
  dateFull: string;
  time: string;
  title: string;
  loc: string;
  color: string;
  type: string;
  address?: string;
  price: string;
  desc: string;
  icon?: string;
}

export interface MonthEvents {
  name: string;
  year: string;
  events: Event[];
}

export interface EventsPageContent {
  hero: {
    label: string;
    title: string;
    description: string;
  };
  months: MonthEvents[];
}

export interface ContactPageContent {
  hero: {
    label: string;
    title: string;
    description: string;
  };
  general: {
    title: string;
    desc: string;
    email: string;
  };
  address: {
    title: string;
    desc: string;
  };
  social: {
    title: string;
    desc: string;
    facebook: string;
    instagram: string;
  };
}

export interface FooterContent {
  copyright: string;
  disclaimer: string;
  menuTitle: string;
  legalTitle: string;
  socialTitle: string;
  links: NavItem[];
  legal: NavItem[];
  contactInfo: {
    email: string;
    address: string;
  };
}

export interface Content {
  header: HeaderContent;
  home: HomeContent;
  cestaTergar: {
    courses: Course[];
  };
  programy: {
    levels: Level[];
  };
  oNas: AboutContent;
  eventsPage: EventsPageContent;
  contactPage: ContactPageContent;
  footer: FooterContent;
}
