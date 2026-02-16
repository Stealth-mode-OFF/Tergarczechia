import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImage from 'figma:asset/f2309011161c7516084a49a21e639ac08d91a296.png';
import { content } from '@/data/content';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nav } = content.header;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out font-heading ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 h-[80px] shadow-sm' 
          : 'bg-transparent h-[100px]'
      }`}
    >
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group relative z-50 shrink-0">
          <img 
            src={logoImage} 
            alt="Tergar Logo" 
            className={`transition-all duration-500 w-auto object-contain ${scrolled ? 'h-9' : 'h-11'}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            item.isExternal ? (
              <a
                key={item.label}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-bold text-space-blue hover:text-tergar-blue transition-colors uppercase tracking-widest flex items-center gap-1"
              >
                {item.label}
                <ExternalLink size={12} className="opacity-50" />
              </a>
            ) : (
              <a
                key={item.label}
                href={`#${item.path.replace('/', '')}`} // Using anchor links for single page feel or routes
                onClick={(e) => {
                  // If we are on home, scroll. If not, navigate.
                  // For now, assume single page sections for 'Program', 'Skupiny' if they are sections.
                  // But user asked for specific links. Let's stick to standard Link if they are pages.
                  // Wait, "O nás" -> /o-nas etc.
                  // Actually, let's make them scroll to sections on Home if they are on Home.
                }}
                className={`text-[14px] font-bold uppercase tracking-widest transition-colors ${
                  location.pathname === item.path ? 'text-tergar-blue' : 'text-space-blue hover:text-tergar-blue'
                }`}
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-space-blue hover:text-tergar-blue transition-colors relative z-50 p-2"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-all duration-300 flex flex-col pt-32 px-8 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-8 text-center">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.isExternal ? item.path : item.path}
              target={item.isExternal ? "_blank" : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-bold text-space-blue uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
