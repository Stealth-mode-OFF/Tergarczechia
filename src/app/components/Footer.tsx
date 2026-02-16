import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { content } from '@/data/content';

export function Footer() {
  const { copyright, contact } = content.footer;

  return (
    <footer className="bg-space-blue text-white py-16 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* 1. Brand & Copyright */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold font-heading text-white mb-4">Tergar ČR</h4>
            <p className="text-white/60 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
              {copyright}
            </p>
          </div>

          {/* 2. Contact Info */}
          <div className="space-y-6">
            <h5 className="text-sm font-bold uppercase tracking-widest text-tergar-gold mb-4 font-heading">Kontakt</h5>
            <ul className="space-y-4 text-white/80 text-sm font-light">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail size={16} className="text-tergar-gold" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors border-b border-white/20 pb-0.5 hover:border-white">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin size={16} className="text-tergar-gold mt-1" />
                <span className="leading-relaxed text-left">
                  {contact.address.name}<br/>
                  {contact.address.street}<br/>
                  {contact.address.city}
                </span>
              </li>
            </ul>
          </div>

          {/* 3. Social Media */}
          <div className="space-y-6 flex flex-col items-center md:items-end">
            <h5 className="text-sm font-bold uppercase tracking-widest text-tergar-gold mb-4 font-heading text-center md:text-right w-full">Sledujte nás</h5>
            <div className="flex gap-4">
              <a 
                href={contact.facebookLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tergar-gold hover:text-space-blue transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={contact.instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tergar-gold hover:text-space-blue transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
