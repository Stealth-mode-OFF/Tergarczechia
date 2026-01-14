import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import logoImage from 'figma:asset/f2309011161c7516084a49a21e639ac08d91a296.png';

export function Footer() {
  // Barva písma: #F5E6E0 (Jemná pudrová/narůžovělá)
  return (
    <footer className="bg-[#383F4D] pt-16 pb-12 font-sans border-t border-[#F5E6E0]/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pt-8">
          
          {/* Column 1: Logo & Legal (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-8">
            <Link to="/" className="block opacity-90 hover:opacity-100 transition-opacity">
              {/* Logo with filter to make it match the text color (rosy/white) */}
              <img 
                src={logoImage} 
                alt="Tergar Logo" 
                className="h-14 w-auto object-contain brightness-0 invert opacity-90 sepia-[.2] hue-rotate-[320deg] saturate-[.3]"
                style={{ filter: 'brightness(0) saturate(100%) invert(91%) sepia(8%) saturate(373%) hue-rotate(314deg) brightness(106%) contrast(92%)' }} 
              />
            </Link>
            <div className="text-[#F5E6E0]/40 text-[12px] leading-relaxed max-w-xs font-sans tracking-wide">
              <p className="mb-3">© 2025 Tergar International</p>
              <p>Tergar logo je registrovaná ochranná známka Tergar International. Tergar Česká republika působí pod oficiální licencí.</p>
            </div>
          </div>

          {/* Spacer Column (1 col) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[#F5E6E0] text-[11px] font-serif font-bold uppercase tracking-[0.25em] mb-8 opacity-60">Menu</h4>
            <ul className="space-y-5 text-[15px] font-normal tracking-wide text-[#F5E6E0]/90 font-sans">
              <li>
                <a href="https://tergar.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors block">
                  Tergar International
                </a>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-white transition-colors block">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/programy" className="hover:text-white transition-colors block">
                  Programy
                </Link>
              </li>
              <li>
                <a href="https://app.zenamu.com/tergarczechia" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block flex items-center gap-2">
                  Rozvrh akcí <span className="text-[9px] opacity-60 border border-[#F5E6E0]/40 rounded px-1">ZENAMU</span>
                </a>
              </li>
              <li>
                <Link to="/komunita" className="hover:text-white transition-colors block">
                  Komunita
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Policy Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[#F5E6E0] text-[11px] font-serif font-bold uppercase tracking-[0.25em] mb-8 opacity-60">Právní info</h4>
            <ul className="space-y-5 text-[15px] font-normal tracking-wide text-[#F5E6E0]/90 font-sans">
              <li>
                <Link to="/vraceni-penez" className="hover:text-white transition-colors block">
                  Pravidla vracení peněz
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors block">
                  Ochrana soukromí
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors block">
                  Obchodní podmínky
                </Link>
              </li>
              <li>
                <Link to="/eticky-kodex" className="hover:text-white transition-colors block">
                  Etický kodex
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Icons (1 col) */}
          <div className="lg:col-span-1 flex flex-col items-start lg:items-end">
            <h4 className="text-[#F5E6E0] text-[11px] font-serif font-bold uppercase tracking-[0.25em] mb-8 opacity-60 lg:text-right w-full whitespace-nowrap">Sledujte nás</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/tergarcz/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5E6E0] hover:bg-[#F5E6E0] hover:text-[#383F4D] transition-all p-2 rounded-full flex items-center justify-center w-12 h-12 border border-[#F5E6E0]/30 hover:border-[#F5E6E0] group"
                aria-label="Facebook Tergar CZ"
              >
                <Facebook size={20} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/tergar_cz/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5E6E0] hover:bg-[#F5E6E0] hover:text-[#383F4D] transition-all p-2 rounded-full flex items-center justify-center w-12 h-12 border border-[#F5E6E0]/30 hover:border-[#F5E6E0] group"
                aria-label="Instagram Tergar CZ"
              >
                <Instagram size={20} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.youtube.com/@MingyurRinpoche" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F5E6E0] hover:bg-[#F5E6E0] hover:text-[#383F4D] transition-all p-2 rounded-full flex items-center justify-center w-12 h-12 border border-[#F5E6E0]/30 hover:border-[#F5E6E0] group"
                aria-label="YouTube Mingyur Rinpoche"
              >
                <Youtube size={20} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
