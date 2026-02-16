export interface NavItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export interface MapLocation {
  name: string;
  lat: number;
  lng: number;
  desc: string;
  link: string;
}

export interface UpcomingEvent {
  title: string;
  date: string;
  type: 'online' | 'live';
  desc: string;
  link: string;
}

export interface RegularMeeting {
  title: string;
  day: string;
  location: string;
  color: string;
  link: string;
}

export interface TergarPathItem {
  title: string;
  subtitle: string;
  description: string;
  link?: string;
}

export interface HomeContent {
  hero: {
    headline: string;
    subheadline: string;
    image: string;
    ctaText: string;
    ctaLink: string;
  };
  about: {
    label: string;
    title: string;
    text: string;
    image: string;
  };
  tergarPath: {
    title: string;
    subtitle: string;
    items: TergarPathItem[];
    image: string;
  };
  quote1: {
    text: string;
    author: string;
  };
  rinpoche: {
    title: string;
    image: string;
    text: string;
    books: string[];
    quote: string;
  };
  support: {
    title: string;
    text: string;
    buttonText: string;
    buttonLink: string;
  };
  program: {
    title: string;
    subtitle: string;
    zenamuUrl: string;
    registrationUrl: string;
    upcomingEvents: UpcomingEvent[];
    regularMeetings: RegularMeeting[];
  };
  groups: {
    title: string;
    text: string;
    email: string;
    mapLocations: MapLocation[];
  };
  newsletter: {
    title: string;
    link: string;
  };
  inclusion: {
    text: string;
    link: string;
  };
  social: {
    youtube: string;
    instagram: string;
    facebook: string;
  };
}

export interface HeaderContent {
  nav: NavItem[];
}

export interface FooterContent {
  copyright: string;
  contact: {
    email: string;
    facebookLink: string;
    instagramLink: string;
    youtubeLink: string;
    address: { name: string; street: string; city: string };
  };
  newsletterLink: string;
}

export interface Content {
  header: HeaderContent;
  home: HomeContent;
  footer: FooterContent;
}
