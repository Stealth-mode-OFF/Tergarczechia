import { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { blogArticles, blogCategories, type BlogCategory } from '@/data/blog';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-tergar-gold font-heading mb-6">
      {children}
    </span>
  );
}

const categoryColors: Record<BlogCategory, { bg: string; text: string; border: string }> = {
  'jak-meditovat': { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  veda: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  komunita: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  udalosti: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
};

export function InspiracePage() {
  const [activeFilter, setActiveFilter] = useState<BlogCategory | 'all'>('all');

  const filteredArticles = activeFilter === 'all'
    ? blogArticles
    : blogArticles.filter(a => a.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#f0f2f5] to-white overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-tergar-blue/5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <SectionLabel>Inspirace</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-space-blue font-heading tracking-tight leading-[1.08] mb-6">
              Články a videa
            </h1>
            <p className="text-lg sm:text-xl text-space-blue/60 leading-relaxed font-light max-w-2xl">
              Inspirace pro vaši meditační praxi — články o meditaci, neurovědě, příběhy z komunity a videa Mingyura Rinpočheho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video section */}
      <section className="py-16 md:py-20 bg-space-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tergar-blue/10 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={reveal} className="text-center mb-8">
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-tergar-gold font-heading mb-4">
                Video
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight mb-3">
                Mingyur Rinpočhe o meditaci
              </h2>
              <p className="text-sm text-white/50 font-light">
                Krátký úvod do meditace od zakladatele Tergar
              </p>
            </motion.div>
            <motion.div variants={reveal} className="relative aspect-video rounded-2xl overflow-hidden bg-black/30 border border-white/10">
              {/* Placeholder iframe — replace with actual YouTube embed */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-space-blue to-[#1a1f2e]">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 hover:bg-white/20 transition-colors cursor-pointer">
                    <Play size={32} className="text-white ml-1" fill="white" />
                  </div>
                  <p className="text-white/40 text-xs font-heading uppercase tracking-wider">
                    YouTube video placeholder
                  </p>
                  <p className="text-white/25 text-[10px] mt-1">
                    Nahraďte iframe s ID videa z YouTube
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-[80px] z-30 backdrop-blur-xl bg-white/90">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {blogCategories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest font-heading transition-all duration-200 cursor-pointer ${
                  activeFilter === cat.key
                    ? 'bg-tergar-blue text-white shadow-md'
                    : 'bg-gray-50 text-space-blue/50 hover:bg-gray-100 hover:text-space-blue/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            key={activeFilter}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredArticles.map((article) => {
              const colors = categoryColors[article.category];
              return (
                <motion.article
                  key={article.id}
                  variants={reveal}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
                >
                  {/* Thumbnail placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-[#f0f2f5] to-[#e8eaed] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                        <span className="text-2xl font-heading font-bold text-space-blue/20">
                          {article.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category + date */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest font-heading border ${colors.bg} ${colors.text} ${colors.border}`}>
                        {article.categoryLabel}
                      </span>
                      <span className="text-[10px] text-space-blue/30 font-heading">{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold font-heading text-space-blue leading-snug mb-3 group-hover:text-tergar-blue transition-colors">
                      {article.title}
                    </h3>

                    {/* Perex */}
                    <p className="text-sm text-space-blue/50 font-light leading-relaxed flex-1 mb-4">
                      {article.perex}
                    </p>

                    {/* Read more */}
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest font-heading text-tergar-blue opacity-50 group-hover:opacity-100 transition-opacity">
                      Číst dále <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-space-blue/30 font-light">V této kategorii zatím nejsou žádné články.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
