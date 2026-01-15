import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/f2309011161c7516084a49a21e639ac08d91a296.png';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Domů', path: '/' },
    { label: 'O nás', path: '/o-nas' },
    { label: 'Programy', path: '/programy' },
    { label: 'Události', path: '/udalosti' },
    { label: 'Rozvrh', path: 'https://app.zenamu.com/tergarczechia', isExternal: true },
    { label: 'Komunita', path: '/komunita' },
    { label: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out font-heading ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 h-[80px] shadow-sm' 
          : 'bg-transparent h-[100px]'
      }`}
    >
      <div className="container-custom h-full flex items-center">
        {/* Left Side: Logo and Navigation */}
        <div className="flex items-center gap-10 xl:gap-12 flex-1">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-50 shrink-0">
            <img 
              src={logoImage} 
              alt="Tergar Logo" 
              className={`transition-all duration-500 w-auto object-contain ${scrolled ? 'h-9' : 'h-11'}`}
            />
          </Link>

          {/* Desktop Navigation - Aligned to Logo */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.filter(item => item.label !== 'Kontakt').map((item) => (
              item.isExternal ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-bold transition-all duration-300 tracking-wide relative group text-space-blue hover:text-tergar-blue flex items-center gap-1"
                >
                  {item.label}
                  <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity text-tergar-blue" />
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[15px] font-bold transition-all duration-300 tracking-wide relative group ${
                    location.pathname === item.path
                      ? 'text-tergar-blue'
                      : 'text-space-blue hover:text-tergar-blue'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-tergar-blue transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              )
            ))}
          </nav>
        </div>

        {/* Right Side: CTA and Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block pl-6">
            <Link 
              to="/kontakt" 
              className="btn-primary px-6 py-2.5 text-xs"
            >
              <span className="hidden xl:inline">Členská sekce</span>
              <span className="xl:hidden">Vstoupit</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-space-blue hover:text-tergar-blue transition-colors relative z-50 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 transition-all duration-500 flex items-center justify-center lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-6 text-center">
          {navItems.map((item, idx) => (
            item.isExternal ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-bold text-space-blue hover:text-tergar-blue transition-colors flex items-center justify-center gap-3 ${
                   mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 50}ms`, transitionDuration: '500ms' }}
              >
                {item.label}
                <ExternalLink size={20} className="text-tergar-blue opacity-70" />
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-bold text-space-blue hover:text-tergar-blue transition-colors ${
                   mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${idx * 50}ms`, transitionDuration: '500ms' }}
              >
                {item.label}
              </Link>
            )
          ))}
          <div className={`mt-8 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '300ms', transitionDuration: '500ms' }}>
             <Link 
              to="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary text-lg px-10 py-4"
            >
              Vstoupit do aplikace
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
