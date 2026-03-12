import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';
import logoImage from '@/assets/logo.png';
import { content } from '@/data/content';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nav } = content.header;

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-heading',
          scrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-gray-100/50 h-[80px] shadow-sm py-0'
            : 'bg-transparent h-[120px] py-4'
        )}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50 group block">
            <motion.img
              layoutId="logo"
              src={logoImage}
              alt="Tergar Logo"
              className={clsx(
                'transition-all duration-500 object-contain',
                scrolled ? 'h-10' : 'h-14'
              )}
            />
          </Link>

          {/* Desktop Navigation - Premium & Minimal */}
          <nav className="hidden lg:flex items-center gap-12">
            {nav.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
              >
                {item.isExternal ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-bold text-space-blue/80 hover:text-tergar-blue transition-colors uppercase tracking-[0.15em] flex items-center gap-2 group relative overflow-hidden"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-tergar-gold translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  </a>
                ) : (
                  <a
                    href={`#${item.path.replace('/', '')}`}
                    className={clsx(
                      'text-[13px] font-bold uppercase tracking-[0.15em] transition-colors relative group py-1 block',
                      location.pathname === item.path ? 'text-tergar-blue' : 'text-space-blue/80 hover:text-tergar-blue'
                    )}
                  >
                    {item.label}
                    <span className={clsx(
                      "absolute bottom-0 left-0 w-full h-[1px] bg-tergar-blue transition-transform duration-300 ease-out origin-left",
                      location.pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )} />
                  </a>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-space-blue hover:text-tergar-blue transition-colors relative z-50 p-2"
          >
            <motion.div
              animate={mobileMenuOpen ? "open" : "closed"}
              className="w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            >
              <motion.span 
                variants={{ open: { rotate: 45, y: 8 }, closed: { rotate: 0, y: 0 } }}
                className="w-full h-0.5 bg-current block origin-center transition-all" 
              />
              <motion.span 
                variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
                className="w-full h-0.5 bg-current block transition-all" 
              />
              <motion.span 
                variants={{ open: { rotate: -45, y: -8 }, closed: { rotate: 0, y: 0 } }}
                className="w-full h-0.5 bg-current block origin-center transition-all" 
              />
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col pt-32 px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-8 text-center">
              {nav.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.isExternal ? item.path : item.path}
                  target={item.isExternal ? "_blank" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="text-3xl font-bold text-space-blue font-heading"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
