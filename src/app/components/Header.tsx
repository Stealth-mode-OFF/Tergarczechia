// * Sticky header — morphs from transparent to pill-shaped on scroll, mobile hamburger overlay
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '@/assets/logo.png';
import { content } from '@/data/content';

export function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { nav } = content.header;
  // * Homepage gets transparent header, all other pages get solid pill
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const linkClass =
    'text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors relative group py-1 block cursor-pointer';

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'top-3 left-4 right-4 md:left-8 md:right-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-[min(1080px,calc(100%-4rem))] h-[64px] bg-[#FAF8F4]/90 backdrop-blur-2xl border border-[#E8E4DD]/40 rounded-full shadow-[0_4px_40px_rgba(0,0,0,0.04)]'
            : 'top-0 left-0 right-0 bg-transparent h-[100px]'
        }`}
      >
        <div className={`h-full flex items-center justify-between ${scrolled || !isHome ? 'px-5 md:px-7' : 'container-custom'}`}>
          <Link to="/" className="relative z-50">
            <img
              src={logoImage}
              alt="Tergar"
              className={`transition-all duration-500 object-contain ${scrolled || !isHome ? 'h-8' : 'h-11 brightness-0 invert'}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
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
                    className={`${linkClass} ${scrolled || !isHome ? 'text-[#2D3748]/60 hover:text-[#C9962A]' : 'text-white/80 hover:text-white'} flex items-center gap-1.5`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C9962A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`${linkClass} ${
                      scrolled || !isHome
                        ? isActive(item.path)
                          ? 'text-[#C9962A]'
                          : 'text-[#2D3748]/60 hover:text-[#C9962A]'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 w-full h-px ${
                      scrolled || !isHome ? 'bg-[#C9962A]' : 'bg-white/60'
                    } origin-left ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300`} />
                  </Link>
                )}
              </motion.div>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden relative z-50 p-2 -mr-2 transition-colors ${scrolled || !isHome || menuOpen ? 'text-[#1C2B3A]' : 'text-white'}`}
            aria-label="Menu"
          >
            <motion.div
              animate={menuOpen ? "open" : "closed"}
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#FAF8F4]/98 backdrop-blur-xl flex flex-col pt-32 px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-8 text-center">
              {nav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  {item.isExternal ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="text-2xl font-bold text-[#1C2B3A] font-heading tracking-tight inline-flex items-center gap-2"
                    >
                      {item.label}
                      <ExternalLink size={14} className="opacity-30" />
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={`text-2xl font-bold font-heading tracking-tight ${
                        isActive(item.path) ? 'text-[#C9962A]' : 'text-[#1C2B3A]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
