import { Facebook, Instagram, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from '@/assets/logo.png';
import { content } from '@/data/content';

export function Footer() {
  const { copyright, contact } = content.footer;

  return (
    <footer className="bg-space-blue text-white py-24 border-t border-white/5 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tergar-gold/20 to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-tergar-blue/10 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-8 mb-20 text-center md:text-left">
          
          {/* 1. Brand */}
          <div className="lg:col-span-1 space-y-8 flex flex-col items-center md:items-start">
            <motion.img 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              src={logoImage} 
              alt="Tergar Logo" 
              className="h-10 brightness-0 invert opacity-90"
            />
            <p className="text-white/60 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed font-light">
              {copyright}
            </p>
          </div>

          {/* 2. Contact */}
          <div className="lg:col-span-1 space-y-8">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-tergar-gold/80 font-heading">Kontakt</h5>
            <ul className="space-y-6 text-white/70 text-sm font-light">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-tergar-gold group-hover:text-space-blue transition-colors duration-300 mt-1">
                  <Mail size={14} />
                </div>
                <div>
                  <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors border-b border-transparent hover:border-white/30 pb-0.5">
                    {contact.email}
                  </a>
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-tergar-gold group-hover:text-space-blue transition-colors duration-300 mt-1">
                  <MapPin size={14} />
                </div>
                <div>
                  <span className="leading-relaxed block text-center md:text-left">
                    {contact.address.name}<br/>
                    {contact.address.street}<br/>
                    {contact.address.city}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* 3. Social */}
          <div className="lg:col-span-1 space-y-8 flex flex-col items-center lg:items-end">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-tergar-gold/80 font-heading w-full text-center lg:text-right">Sledujte nás</h5>
            <div className="flex gap-4">
              <motion.a 
                whileHover={{ y: -5 }}
                href={contact.facebookLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-tergar-gold hover:text-space-blue hover:border-tergar-gold transition-all duration-300"
              >
                <Facebook size={20} strokeWidth={1.5} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href={contact.instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-tergar-gold hover:text-space-blue hover:border-tergar-gold transition-all duration-300"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
