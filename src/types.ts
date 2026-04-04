// * Shared TypeScript types for site content structure
export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface Slide {
  text: string;
  subtext?: string;
  image: string;
}

export interface MapLocation {
  name: string;
  top: string;
  left: string;
  link: string;
}

export interface HomeContent {
  slider: Slide[];
  quote1: {
    text: string;
    author: string;
  };
  rinpoche: {
    title: string;
    text: string;
  };
  support: {
    title: string;
    text: string;
    buttonText: string;
    buttonLink: string;
  };
  program: {
    title: string;
    quote: {
      text: string;
      author: string;
    };
  };
  groups: {
    title: string;
    text: string;
    email: string;
    mapLocations: MapLocation[];
  };
}

export interface HeaderContent {
  nav: NavItem[];
}

export interface ContactPageContent {
  hero: { title: string; subtitle: string };
  general: { email: string };
  address: { text: string };
}

export interface FooterContent {
  copyright: string;
  contact: {
    email: string;
    facebookLink: string;
    instagramLink: string;
    address: { name: string; street: string; city: string };
  };
}

export interface Content {
  header: HeaderContent;
  home: HomeContent;
  footer: FooterContent;
  contactPage: ContactPageContent;
}
