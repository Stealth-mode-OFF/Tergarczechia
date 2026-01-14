import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Domů', path: '/' },
    { label: 'Co je meditace', path: '/co-je-meditace' },
    { label: 'Cesta Tergar', path: '/cesta-tergar' },
    { label: 'Programy', path: '/programy' },
    { label: 'Komunita', path: '/komunita' },
    { label: 'Události', path: '/udalosti' },
    { label: 'O nás', path: '/o-nas' },
    { label: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-sm border-b border-base-04">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Primary horizontal version with safe zone */}
          <Link to="/" className="flex items-center gap-3 py-2">
            {/* Logo symbol + wordmark (min 100px width for horizontal) */}
            <div className="flex items-center gap-2 min-w-[100px]">
              {/* Dharma wheel symbol - simplified representation */}
              <div className="w-10 h-10 bg-tergar-blue rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 border-2 border-white rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>
              </div>
              {/* Wordmark */}
              <span className="font-serif text-2xl font-semibold text-tergar-blue tracking-tight">
                Tergar
              </span>
            </div>
            <div className="hidden sm:block text-xs text-space-blue/70 border-l border-base-04 pl-3 ml-1">
              Česká republika
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold transition-colors hover:text-tergar-blue relative ${
                  location.pathname === item.path
                    ? 'text-tergar-blue'
                    : 'text-space-blue'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-tergar-gold rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-space-blue hover:text-tergar-blue transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-base-02 border-t border-base-04">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'text-tergar-blue bg-light-blue/20'
                    : 'text-space-blue hover:text-tergar-blue hover:bg-base-03'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
