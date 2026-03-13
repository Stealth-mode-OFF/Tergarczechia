import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'motion/react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen pt-[100px] flex items-center justify-center bg-[#FAF8F4] px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-lg"
      >
        <h1 className="text-9xl font-heading text-[#C9962A]/15 mb-4" style={{ fontWeight: 600 }}>404</h1>
        <h2 className="text-3xl font-heading text-[#1C2B3A] mb-6" style={{ fontWeight: 600 }}>Stránka nenalezena</h2>
        <p className="text-[#2D3748]/50 mb-10 text-lg leading-relaxed font-light">
          Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
        </p>
        <Link to="/" className="inline-flex items-center gap-2 bg-[#C9962A] text-white px-8 py-3.5 rounded-full font-semibold tracking-wide hover:shadow-lg hover:shadow-[#C9962A]/20 transition-all duration-300">
          <Home size={16} />
          Zpět na úvod
        </Link>
      </motion.div>
    </div>
  );
}
