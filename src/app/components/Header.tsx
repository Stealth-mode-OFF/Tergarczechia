// * Premium Buddhist-inspired header — dharma ribbon, glass nav capsule, adaptive logo treatment
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
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const linkClass =
    'text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors relative group py-1 block cursor-pointer';

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed z-50 inset-x-0"
      >
        <div
          className={`h-8 flex items-center justify-center text-[10px] tracking-[0.24em] uppercase font-semibold transition-all duration-500 ${
            scrolled || !isHome
              ? 'bg-[#7A2635] text-[#F6E7C8] opacity-100'
              : 'bg-[#7A2635]/65 text-white/90 backdrop-blur-sm opacity-100'
          }`}
        >
          Tergar Czechia · Cesta probuzené mysli
        </div>

        <div className={`transition-all duration-500 ${scrolled || !isHome ? 'pt-2' : 'pt-4'}`}>
          <div
            className={`mx-auto transition-all duration-500 ${
              scrolled || !isHome
                ? 'w-[min(1120px,calc(100%-1.5rem))] md:w-[min(1120px,calc(100%-3rem))]'
                : 'w-[min(1220px,calc(100%-2.25rem))]'
            }`}
          >
            <div
              className={`h-[72px] px-5 md:px-8 flex items-center justify-between rounded-[2rem] border transition-all duration-500 ${
                scrolled || !isHome
                  ? 'bg-[#FFFCF5]/95 border-[#E9DDC8] shadow-[0_18px_65px_-35px_rgba(28,43,58,0.55)] backdrop-blur-2xl'
                  : 'bg-white/12 border-white/25 backdrop-blur-xl shadow-[0_8px_35px_-18px_rgba(0,0,0,0.35)]'
              }`}
            >
              <Link to="/" className="relative z-50 flex items-center gap-3">
                <img
                  src={logoImage}
                  alt="Tergar Czechia"
                  className="h-11 object-contain drop-shadow-[0_3px_10px_rgba(0,0,0,0.12)]"
                />
              </Link>

              <nav className="hidden lg:flex items-center gap-6">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i + 0.2, duration: 0.45 }}
                  >
                    {item.isExternal ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${linkClass} ${
                          scrolled || !isHome ? 'text-[#2D3748]/70 hover:text-[#D9A441]' : 'text-white/85 hover:text-white'
                        } flex items-center gap-1.5`}
                      >
                        <span className="relative z-10">{item.label}</span>
                        <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D9A441] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className={`${linkClass} ${
                          scrolled || !isHome
                            ? isActive(item.path)
                              ? 'text-[#7A2635]'
                              : 'text-[#2D3748]/70 hover:text-[#7A2635]'
                            : 'text-white/85 hover:text-white'
                        }`}
                      >
                        {item.label}
                        <span
                          className={`absolute bottom-0 left-0 w-full h-px ${
                            scrolled || !isHome ? 'bg-[#D9A441]' : 'bg-white/65'
                          } origin-left ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform duration-300`}
                        />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden relative z-50 p-2 -mr-2 transition-colors ${
                  scrolled || !isHome || menuOpen ? 'text-[#1C2B3A]' : 'text-white'
                }`}
                aria-label="Menu"
              >
                <motion.div animate={menuOpen ? 'open' : 'closed'} className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
                  <motion.span variants={{ open: { rotate: 45, y: 8 }, closed: { rotate: 0, y: 0 } }} className="w-full h-0.5 bg-current block" />
                  <motion.span variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }} className="w-full h-0.5 bg-current block" />
                  <motion.span variants={{ open: { rotate: -45, y: -8 }, closed: { rotate: 0, y: 0 } }} className="w-full h-0.5 bg-current block" />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#F8F1E4]/98 backdrop-blur-xl flex flex-col pt-32 px-8 lg:hidden"
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
                        isActive(item.path) ? 'text-[#7A2635]' : 'text-[#1C2B3A]'
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
