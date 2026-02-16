import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '@/assets/f2309011161c7516084a49a21e639ac08d91a296.png';
import { content } from '@/data/content';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nav } = content.header;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    document.getElementById(path.replace('/', ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  }, []);

  const linkClass =
    'text-[12px] font-semibold uppercase tracking-[0.18em] transition-colors relative group py-1 block cursor-pointer font-heading';

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-b border-gray-100/60 h-[72px] shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
            : 'bg-transparent h-[100px]'
        }`}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={logoImage}
              alt="Tergar"
              className={`transition-all duration-500 object-contain ${scrolled ? 'h-8' : 'h-11'}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.3, duration: 0.4 }}
              >
                {item.isExternal ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} text-space-blue/70 hover:text-tergar-blue flex items-center gap-1.5`}
                  >
                    {item.label}
                    <ExternalLink size={10} className="opacity-30 group-hover:opacity-70 transition-opacity" />
                    <span className="absolute bottom-0 left-0 w-full h-px bg-tergar-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </a>
                ) : (
                  <a
                    href={`#${item.path.replace('/', '')}`}
                    onClick={(e) => scrollTo(e, item.path)}
                    className={`${linkClass} text-space-blue/70 hover:text-tergar-blue`}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-full h-px bg-tergar-blue origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </a>
                )}
              </motion.div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-50 p-2 -mr-2 text-space-blue"
            aria-label="Menu"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {nav.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.isExternal ? item.path : `#${item.path.replace('/', '')}`}
                  target={item.isExternal ? '_blank' : undefined}
                  onClick={item.isExternal ? () => setMenuOpen(false) : (e) => scrollTo(e as any, item.path)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  className="text-2xl font-bold text-space-blue font-heading tracking-tight"
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
