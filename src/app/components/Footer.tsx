import { Link } from 'react-router-dom';
import { Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-base-02 border-t border-base-04">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              {/* Logo symbol */}
              <div className="w-10 h-10 bg-tergar-blue rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 border-2 border-white rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              </div>
              {/* Wordmark */}
              <div>
                <span className="font-serif text-xl font-semibold text-tergar-blue block">
                  Tergar
                </span>
                <span className="text-xs text-space-blue/70">Česká republika</span>
              </div>
            </Link>
            <p className="text-sm text-base-05 leading-relaxed">
              Meditace pro moderní život. Objevte radost, klid a moudrost prostřednictvím
              osvědčených meditačních technik.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-space-blue mb-4">Rychlé odkazy</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/co-je-meditace"
                  className="text-sm text-base-05 hover:text-tergar-blue transition-colors"
                >
                  Co je meditace
                </Link>
              </li>
              <li>
                <Link
                  to="/cesta-tergar"
                  className="text-sm text-base-05 hover:text-tergar-blue transition-colors"
                >
                  Cesta Tergar
                </Link>
              </li>
              <li>
                <Link
                  to="/programy"
                  className="text-sm text-base-05 hover:text-tergar-blue transition-colors"
                >
                  Programy
                </Link>
              </li>
              <li>
                <Link
                  to="/komunita"
                  className="text-sm text-base-05 hover:text-tergar-blue transition-colors"
                >
                  Komunita
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-space-blue mb-4">Zdroje</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/udalosti"
                  className="text-sm text-base-05 hover:text-tergar-blue transition-colors"
                >
                  Události
                </Link>
              </li>
              <li>
                <Link
                  to="/o-nas"
                  className="text-sm text-base-05 hover:text-tergar-blue transition-colors"
                >
                  O nás
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-sm text-base-05 hover:text-tergar-blue transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <a
                  href="https://tergar.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-base-05 hover:text-tergar-blue transition-colors"
                >
                  Tergar International
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-space-blue mb-4">Kontakt</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-tergar-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@tergar.cz"
                  className="text-sm text-base-05 hover:text-tergar-blue transition-colors"
                >
                  info@tergar.cz
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-tergar-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-base-05">Praha, Česká republika</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-base-03 flex items-center justify-center text-space-blue hover:bg-tergar-blue hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-base-03 flex items-center justify-center text-space-blue hover:bg-tergar-blue hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-base-03 flex items-center justify-center text-space-blue hover:bg-tergar-blue hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-base-04 pt-8 text-center">
          <p className="text-sm text-base-05">
            © {new Date().getFullYear()} Tergar Česká republika. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
