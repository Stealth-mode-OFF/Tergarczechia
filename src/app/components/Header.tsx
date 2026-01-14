import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';
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
    { label: 'Komunita', path: '/komunita' },
    { label: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-divider-gray/50 h-[80px] shadow-sm' 
          : 'bg-transparent h-[100px]'
      }`}
    >
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group relative z-50">
          <img 
            src={logoImage} 
            alt="Tergar Logo" 
            className={`transition-all duration-500 w-auto object-contain ${scrolled ? 'h-10' : 'h-12'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[15px] font-medium transition-all duration-300 tracking-wide relative group ${
                location.pathname === item.path
                  ? 'text-tergar-blue'
                  : 'text-deep-charcoal hover:text-tergar-blue'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-tergar-blue transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </Link>
          ))}
          
          <div className="pl-4 border-l border-divider-gray/50 ml-2">
            <Link 
              to="/kontakt" 
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-tergar-gold hover:text-deep-charcoal transition-colors"
            >
              <LogIn size={16} strokeWidth={2} />
              <span className="hidden xl:inline">Členská sekce</span>
              <span className="xl:hidden">Vstoupit</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-deep-charcoal hover:text-tergar-blue transition-colors relative z-50 p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={32} strokeWidth={1} /> : <Menu size={32} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 flex items-center justify-center lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-8 text-center">
          {navItems.map((item, idx) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-serif text-deep-charcoal hover:text-tergar-blue transition-colors ${
                 mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 50}ms`, transitionDuration: '500ms' }}
            >
              {item.label}
            </Link>
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
