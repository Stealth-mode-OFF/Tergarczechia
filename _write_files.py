#!/usr/bin/env python3
"""Write all modified files from VFS changes to local clone."""
import os

BASE = '/Users/josefhofman/Documents/GitHub/Tergarczechia'

files = {}

# ────────────────────────────────────────────────────────────
# 1. src/assets/index.ts
# ────────────────────────────────────────────────────────────
files['src/assets/index.ts'] = r"""/**
 * Tergar Cesko — Image Catalog
 * Centralni katalog vsech obrazku s popisnymi nazvy.
 * Import: import { heroImage, mingyurPortrait } from '@/assets';
 */

/* --- PNG — Grafika & portrety (z Figma exportu) --- */

/** Logo Tergar */
export { default as tergarLogo } from './f2309011161c7516084a49a21e639ac08d91a296.png';

/** Hero — komunitni fotka pro uvodni sekci */
export { default as heroCommunity } from './ee3557312d962ff84207c71d88a25a1563aea613.png';

/** Mingyur Rinpoche mava — sekce O nas */
export { default as mingyurWaving } from './72312fce0245d3b51ee86da6f9a6003167a8e1e2.png';

/** Mingyur Rinpoche portret */
export { default as mingyurPortrait } from './d0b3d5641727b1f2f947c8f27ae30b24d450fbdf.png';

/** Vajradhara — sekce meditacni cesta Tergar */
export { default as vajradhara } from './a248c2397f596c63df6208678b6a60bceff14370.png';

/** Strom linie Kagju */
export { default as lineageTree } from './8a8c65298e950a77370a1c00b20804bd4d6a26d3.png';

/* --- JPG — Fotky Rinpocheho --- */
export { default as rinpochePhoto01 } from './Yongey Mingyur Rinpoche (7).jpg';
export { default as rinpochePhoto02 } from './Yongey Mingyur Rinpoche (15).jpg';

/* --- JPG — Profesionalni fotky (KRoN) --- */
export { default as eventPro01 } from './KRoN GR 0088.jpg';
export { default as eventPro02 } from './KRoN GR 0093.jpg';

/* --- JPG — Serie IMG_06xx --- */
export { default as photo0602 } from './IMG_0602.JPG';
export { default as photo0655 } from './IMG_0655.JPG';

/* --- JPG — Serie IMG_45xx --- */
export { default as photo4521 } from './IMG_4521.jpg';
export { default as photo4559 } from './IMG_4559.jpg';
export { default as photo4567 } from './IMG_4567.jpg';
export { default as photo4898 } from './IMG_4898.jpg';

/* --- JPG — Serie IMG_50xx --- */
export { default as photo5024 } from './IMG_5024.jpg';
export { default as photo5026 } from './IMG_5026.jpg';
export { default as photo5032 } from './IMG_5032.jpg';
export { default as photo5037 } from './IMG_5037.jpg';
export { default as photo5045 } from './IMG_5045.jpg';
export { default as photo5048 } from './IMG_5048.jpg';
export { default as photo5066 } from './IMG_5066.jpg';
export { default as photo5114 } from './IMG_5114.jpg';
export { default as photo5150 } from './IMG_5150.jpg';

/* --- JPG — Serie IMG_51xx-52xx --- */
export { default as photo5180 } from './IMG_5180.jpg';
export { default as photo5187 } from './IMG_5187.jpg';
export { default as photo5196 } from './IMG_5196.jpg';
export { default as photo5200 } from './IMG_5200.jpg';
"""

# ────────────────────────────────────────────────────────────
# 2. src/types.ts
# ────────────────────────────────────────────────────────────
files['src/types.ts'] = """export interface NavItem {
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
  lineage: {
    label: string;
    title: string;
    text: string;
    image: string;
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
    backgroundImage?: string;
  };
  gallery?: {
    title: string;
    subtitle: string;
    images: { src: string; alt: string }[];
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
"""

# ────────────────────────────────────────────────────────────
# 3. src/app/components/Header.tsx
# ────────────────────────────────────────────────────────────
files['src/app/components/Header.tsx'] = """import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { tergarLogo as logoImage } from '@/assets';
import { content } from '@/data/content';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nav } = content.header;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    document.getElementById(path.replace('/', ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  }, []);

  const linkClass =
    'text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors relative group py-1 block cursor-pointer font-heading';

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-gray-100/60 h-[72px] shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
            : 'bg-transparent h-[100px]'
        }`}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={logoImage}
              alt="Tergar"
              className={`transition-all duration-500 object-contain ${scrolled ? 'h-8' : 'h-11'}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.3, duration: 0.4 }}
              >
                {item.isExternal ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} text-space-blue/70 hover:text-tergar-blue flex items-center gap-1.5`}
                  >
                    {item.label}
                    <ExternalLink size={10} className="opacity-30 group-hover:opacity-70 transition-opacity" />
                    <span className="absolute bottom-0 left-0 w-full h-px bg-tergar-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </a>
                ) : (
                  <a
                    href={`#${item.path.replace('/', '')}`}
                    onClick={(e) => scrollTo(e, item.path)}
                    className={`${linkClass} text-space-blue/70 hover:text-tergar-blue`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-tergar-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </a>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-50 p-2 -mr-2 text-space-blue"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {nav.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.isExternal ? item.path : `#${item.path.replace('/', '')}`}
                  target={item.isExternal ? '_blank' : undefined}
                  onClick={item.isExternal ? () => setMenuOpen(false) : (e) => scrollTo(e as any, item.path)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  className="text-2xl font-bold text-space-blue font-heading tracking-tight"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"""

# ────────────────────────────────────────────────────────────
# 4. src/app/components/Footer.tsx
# ────────────────────────────────────────────────────────────
files['src/app/components/Footer.tsx'] = """import { Facebook, Instagram, Youtube, Mail, MapPin, Send } from 'lucide-react';
import { tergarLogo as logoImage } from '@/assets';
import { content } from '@/data/content';

export function Footer() {
  const { copyright, contact, newsletterLink } = content.footer;

  return (
    <footer className="bg-space-blue text-white relative">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-tergar-gold/25 to-transparent" />

      <div className="container-custom py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-8 mb-16 text-center md:text-left">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <img
              src={logoImage}
              alt="Tergar"
              className="h-8 brightness-0 invert opacity-80"
            />
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-[220px]">
              {copyright}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-tergar-gold/70 font-heading">
              Kontakt
            </h5>
            <ul className="space-y-4 text-white/55 text-sm font-light">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Mail size={13} className="mt-0.5 flex-shrink-0 text-white/30" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin size={13} className="mt-0.5 flex-shrink-0 text-white/30" />
                <span className="leading-relaxed text-center md:text-left">
                  {contact.address.name}<br />
                  {contact.address.street}<br />
                  {contact.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5 flex flex-col items-center md:items-start">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-tergar-gold/70 font-heading">
              Newsletter
            </h5>
            <a
              href={newsletterLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-white/55 hover:text-white transition-colors text-sm font-light group"
            >
              <Send size={13} className="text-white/30 group-hover:text-tergar-gold transition-colors" />
              Prihlasit se k odberu
            </a>
          </div>

          {/* Social */}
          <div className="space-y-5 flex flex-col items-center lg:items-end">
            <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] text-tergar-gold/70 font-heading w-full text-center lg:text-right">
              Sledujte nas
            </h5>
            <div className="flex gap-3">
              {[
                { href: contact.facebookLink, icon: Facebook, label: 'Facebook' },
                { href: contact.instagramLink, icon: Instagram, label: 'Instagram' },
                { href: contact.youtubeLink, icon: Youtube, label: 'YouTube' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-tergar-gold hover:text-space-blue hover:border-tergar-gold transition-all duration-300"
                >
                  <Icon size={17} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
"""

# Write all files
for rel_path, content in files.items():
    full_path = os.path.join(BASE, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w') as f:
        f.write(content.lstrip('\n'))
    print(f'  OK  {rel_path} ({len(content.splitlines())} lines)')

print('\nDone writing 4 files.')
