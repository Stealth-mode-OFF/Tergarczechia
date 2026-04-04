// * Site footer — nav links, contact info, social icons, darujme.cz donation link
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, MapPin, ArrowUpRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from '@/assets/logo.png';
import { content } from '@/data/content';

export function Footer() {
  const { copyright, contact } = content.footer;

  return (
    <footer className="bg-[#1C2B3A] text-white relative overflow-hidden">
      {/* Gold line accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9962A]/30 to-transparent" />

      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C9962A]/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src={logoImage}
              alt="Tergar"
              className="h-9 brightness-0 invert opacity-80"
            />
            <p className="text-white/40 text-sm leading-relaxed font-light max-w-xs">
              Meditační komunita Yongey Mingyura Rinpočheho v České republice.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1 space-y-6">
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9962A]/70">Navigace</h5>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Co je meditace', to: '/co-je-meditace' },
                { label: 'Program', to: '/program' },
                { label: 'Skupiny', to: '/skupiny' },
                { label: 'Události 2026', to: '/udalosti-2026' },
                { label: 'Inspirace', to: '/inspirace' },
                { label: 'O nás', to: '/o-nas' },
                { label: 'Zapojte se', to: '/zapojte-se' },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-white/45 text-sm font-light hover:text-white transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1 space-y-6">
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9962A]/70">Kontakt</h5>
            <ul className="space-y-4 text-white/50 text-sm font-light">
              <li className="flex items-start gap-3 group">
                <Mail size={14} className="mt-0.5 flex-shrink-0 group-hover:text-[#C9962A] transition-colors" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  {contact.address.name}<br />
                  {contact.address.street}<br />
                  {contact.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* Social + Support */}
          <div className="lg:col-span-1 space-y-6">
            <h5 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C9962A]/70">Sledujte nás</h5>
            <div className="flex gap-3">
              {[
                { href: contact.facebookLink, icon: Facebook, label: 'Facebook' },
                { href: contact.instagramLink, icon: Instagram, label: 'Instagram' },
                { href: contact.youtubeLink, icon: Youtube, label: 'YouTube' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ y: -3 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/8 flex items-center justify-center hover:bg-[#C9962A] hover:text-[#1C2B3A] hover:border-[#C9962A] transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={16} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="https://darujme.cz/projekt/1202868"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9962A] text-sm font-medium hover:text-[#C9962A]/80 transition-colors group"
              >
                <Heart size={14} strokeWidth={1.5} />
                <span className="border-b border-[#C9962A]/20 group-hover:border-[#C9962A]/50 transition-colors pb-0.5">
                  Podpořte nás
                </span>
                <ArrowUpRight size={11} className="opacity-40" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-light">{copyright}</p>
          <div className="flex items-center gap-6">
            <Link to="/kontakt" className="text-white/25 text-xs font-light hover:text-white/50 transition-colors">Kontakt</Link>
            <a href="https://tergar.org" target="_blank" rel="noopener noreferrer" className="text-white/25 text-xs font-light hover:text-white/50 transition-colors inline-flex items-center gap-1">
              Tergar International <ArrowUpRight size={9} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
