import { Facebook, Instagram, Youtube, Mail, MapPin, Send } from 'lucide-react';
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
