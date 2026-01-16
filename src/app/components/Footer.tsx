import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import logoImage from 'figma:asset/f2309011161c7516084a49a21e639ac08d91a296.png';
import { content } from '@/data/content';

export function Footer() {
  const { copyright, disclaimer, menuTitle, legalTitle, socialTitle, links, legal } = content.footer;

  return (
    <footer className="bg-space-blue pt-16 pb-12 font-sans border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pt-8">
          
          {/* Column 1: Logo & Legal (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-8">
            <Link to="/" className="block opacity-100 hover:opacity-80 transition-opacity">
              {/* Logo - Brand compliant: White on dark background, no filters */}
              <img 
                src={logoImage} 
                alt="Tergar Logo" 
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <div className="text-white/60 text-[13px] leading-relaxed max-w-xs font-sans font-medium">
              <p className="mb-3">{copyright}</p>
              <p>{disclaimer}</p>
            </div>
          </div>

          {/* Spacer Column (1 col) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-[13px] font-bold uppercase tracking-widest mb-8 opacity-50 font-heading">{menuTitle}</h4>
            <ul className="space-y-4 text-[15px] font-medium tracking-wide text-white/90 font-heading">
              {links.map((link) => (
                <li key={link.label}>
                  {link.isExternal ? (
                    <a href={link.path} target="_blank" rel="noopener noreferrer" className="hover:text-tergar-gold transition-colors block flex items-center gap-2">
                      {link.label} {link.note && <span className="text-[9px] opacity-80 border border-white/30 rounded px-1 font-sans">{link.note}</span>}
                    </a>
                  ) : (
                    <Link to={link.path} className="hover:text-tergar-gold transition-colors block">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Policy Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-[13px] font-bold uppercase tracking-widest mb-8 opacity-50 font-heading">{legalTitle}</h4>
            <ul className="space-y-4 text-[15px] font-medium tracking-wide text-white/90 font-heading">
              {legal.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-tergar-gold transition-colors block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Icons (1 col) */}
          <div className="lg:col-span-1 flex flex-col items-start lg:items-end">
            <h4 className="text-white text-[13px] font-bold uppercase tracking-widest mb-8 opacity-50 lg:text-right w-full whitespace-nowrap font-heading">{socialTitle}</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/tergarcz/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-white hover:text-space-blue transition-all p-2 rounded-full flex items-center justify-center w-10 h-10 border border-white/30 hover:border-white group"
                aria-label="Facebook Tergar CZ"
              >
                <Facebook size={18} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/tergar_cz/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-white hover:text-space-blue transition-all p-2 rounded-full flex items-center justify-center w-10 h-10 border border-white/30 hover:border-white group"
                aria-label="Instagram Tergar CZ"
              >
                <Instagram size={18} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.youtube.com/@MingyurRinpoche" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-white hover:text-space-blue transition-all p-2 rounded-full flex items-center justify-center w-10 h-10 border border-white/30 hover:border-white group"
                aria-label="YouTube Mingyur Rinpoche"
              >
                <Youtube size={18} strokeWidth={2} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
