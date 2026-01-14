import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import logoImage from 'figma:asset/f2309011161c7516084a49a21e639ac08d91a296.png';

export function Footer() {
  // Barva písma: #F5E6E0 (Jemná pudrová/narůžovělá)
  return (
    <footer className="bg-[#383F4D] pt-16 pb-12 font-sans border-t border-[#F5E6E0]/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Legal (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Link to="/" className="mb-6 block">
              {/* Logo with filter to make it match the text color (rosy/white) */}
              <img 
                src={logoImage} 
                alt="Tergar Logo" 
                className="h-14 w-auto object-contain brightness-0 invert opacity-90 sepia-[.2] hue-rotate-[320deg] saturate-[.3]"
                style={{ filter: 'brightness(0) saturate(100%) invert(91%) sepia(8%) saturate(373%) hue-rotate(314deg) brightness(106%) contrast(92%)' }} 
              />
            </Link>
            <div className="text-[#F5E6E0]/60 text-xs leading-relaxed space-y-2 max-w-xs">
              <p>2025© Tergar International.</p>
              <p>The Tergar logo is a registered service mark of Tergar International.</p>
              <p>Tergar Česká republika působí pod licencí Tergar International.</p>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <ul className="space-y-4 text-[15px] font-light tracking-wide text-[#F5E6E0]/90">
              <li>
                <a href="https://tergar.org" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Tergar International
                </a>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/programy" className="hover:text-white transition-colors">
                  Programy
                </Link>
              </li>
              <li>
                <Link to="/komunita" className="hover:text-white transition-colors">
                  Dobrovolnictví
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Policy Links (3 cols) */}
          <div className="lg:col-span-3">
            <ul className="space-y-4 text-[15px] font-light tracking-wide text-[#F5E6E0]/90">
              <li>
                <Link to="/vraceni-penez" className="hover:text-white transition-colors">
                  Pravidla vracení peněz
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Ochrana soukromí
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Obchodní podmínky
                </Link>
              </li>
              <li>
                <Link to="/eticky-kodex" className="hover:text-white transition-colors">
                  Etický kodex
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Icons (2 cols) */}
          <div className="lg:col-span-2 flex lg:justify-end items-start">
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-[#F5E6E0] text-[#383F4D] hover:bg-white transition-colors p-2 rounded-sm flex items-center justify-center w-9 h-9"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-[#F5E6E0] text-[#383F4D] hover:bg-white transition-colors p-2 rounded-sm flex items-center justify-center w-9 h-9"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-[#F5E6E0] text-[#383F4D] hover:bg-white transition-colors p-2 rounded-sm flex items-center justify-center w-9 h-9"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
