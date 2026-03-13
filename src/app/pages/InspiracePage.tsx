import { useState } from 'react';
import { ArrowRight, Play, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { blogArticles, blogCategories, youtubeVideos, type BlogCategory } from '@/data/blog';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const categoryColors: Record<BlogCategory, { bg: string; text: string; border: string }> = {
  'jak-meditovat': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  veda: { bg: 'bg-sky-50', text: 'text-sky-700', border: 'border-sky-200' },
  komunita: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
  udalosti: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
};

export function InspiracePage() {
  const [activeFilter, setActiveFilter] = useState<BlogCategory | 'all'>('all');
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

  const filteredArticles = activeFilter === 'all'
    ? blogArticles
    : blogArticles.filter(a => a.category === activeFilter);

  return (
    <div className="bg-[#FAF8F4]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FAF8F4]" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#C9962A]/[0.04] blur-[100px]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9962A] mb-5">
              Inspirace
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading text-[#1C2B3A] tracking-tight leading-[1.1] mb-6" style={{ fontWeight: 600 }}>
              Články, videa a příběhy
            </h1>
            <p className="text-lg sm:text-xl text-[#2D3748]/55 leading-relaxed font-light max-w-2xl">
              Inspirace pro vaši meditační praxi — od neurovědních výzkumů po osobní příběhy z komunity a učení Mingyura Rinpočheho.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ YOUTUBE VIDEOS ═══════ */}
      <section className="py-20 md:py-28 bg-[#1C2B3A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9962A]/8 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9962A]/15 to-transparent" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={reveal} className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9962A] mb-4">
              Video
            </motion.span>
            <motion.h2 variants={reveal} className="text-2xl sm:text-4xl font-heading text-white tracking-tight mb-3" style={{ fontWeight: 600 }}>
              Mingyur Rinpočhe o meditaci
            </motion.h2>
            <motion.p variants={reveal} className="text-sm text-white/40 font-light max-w-md mx-auto">
              Vybraná videa z YouTube kanálu Mingyura Rinpočheho
            </motion.p>
          </motion.div>

          {/* Featured video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-10"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideos[0]?.youtubeId || 'Grb0QgHSCro'}?rel=0`}
                title={youtubeVideos[0]?.title || 'Mingyur Rinpoche'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-heading text-white/90" style={{ fontWeight: 500 }}>
                {youtubeVideos[0]?.title}
              </h3>
              <p className="text-sm text-white/40 mt-1 font-light">{youtubeVideos[0]?.description}</p>
            </div>
          </motion.div>

          {/* More videos grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto"
          >
            {youtubeVideos.slice(1).map((video) => (
              <motion.div key={video.id} variants={reveal}>
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black/30 border border-white/10 group">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <h4 className="text-sm font-heading text-white/80 mt-3 leading-snug" style={{ fontWeight: 500 }}>
                  {video.title}
                </h4>
                {video.duration && (
                  <span className="text-[10px] text-white/30 mt-1 block">{video.duration}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <a
              href="https://www.youtube.com/@mingyurrinpoche"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C9962A] text-sm font-semibold group"
            >
              <span className="border-b border-[#C9962A]/30 group-hover:border-[#C9962A] transition-colors pb-0.5">
                Více videí na YouTube
              </span>
              <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CATEGORY FILTER ═══════ */}
      <section className="py-6 bg-white/80 backdrop-blur-xl border-b border-[#E8E4DD]/50 sticky top-[68px] z-30">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {blogCategories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  activeFilter === cat.key
                    ? 'bg-[#1C2B3A] text-white shadow-md'
                    : 'bg-[#F4F1EC] text-[#2D3748]/40 hover:bg-[#E8E4DD] hover:text-[#2D3748]/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ARTICLES GRID ═══════ */}
      <section className="py-20 md:py-28 bg-[#FAF8F4]">
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
              const isExpanded = expandedArticle === article.id;
              return (
                <motion.article
                  key={article.id}
                  variants={reveal}
                  className="group bg-white rounded-2xl border border-[#E8E4DD]/50 overflow-hidden hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
                >
                  {/* Thumbnail */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-[#F4F1EC] to-[#E8E4DD] relative overflow-hidden">
                    {article.thumbnail ? (
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/70 flex items-center justify-center backdrop-blur-sm">
                          <span className="text-3xl font-heading text-[#1C2B3A]/15" style={{ fontWeight: 600 }}>
                            {article.title.charAt(0)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-widest border ${colors.bg} ${colors.text} ${colors.border}`}>
                        {article.categoryLabel}
                      </span>
                      <span className="text-[10px] text-[#2D3748]/25">{article.date}</span>
                    </div>

                    <h3 className="text-base font-heading text-[#1C2B3A] leading-snug mb-3 group-hover:text-[#C9962A] transition-colors" style={{ fontWeight: 600 }}>
                      {article.title}
                    </h3>

                    <p className="text-sm text-[#2D3748]/45 font-light leading-relaxed mb-4 flex-1">
                      {article.perex}
                    </p>

                    {/* Full content toggle */}
                    {article.content && (
                      <div>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mb-4 text-sm text-[#2D3748]/60 leading-relaxed font-light space-y-3 border-t border-[#E8E4DD]/50 pt-4"
                          >
                            {article.content.split('\n\n').map((p, i) => (
                              <p key={i}>{p}</p>
                            ))}
                          </motion.div>
                        )}
                        <button
                          onClick={() => setExpandedArticle(isExpanded ? null : article.id)}
                          className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#C9962A] opacity-60 group-hover:opacity-100 transition-opacity cursor-pointer"
                        >
                          {isExpanded ? 'Sbalit' : 'Číst dále'} <ArrowRight size={10} className={`transition-transform ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                        </button>
                      </div>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#2D3748]/25 font-light text-lg">V této kategorii zatím nejsou žádné články.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════ NEWSLETTER CTA ═══════ */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <h3 className="text-xl font-heading text-[#1C2B3A] mb-3" style={{ fontWeight: 600 }}>
              Nechte si posílat inspiraci
            </h3>
            <p className="text-sm text-[#2D3748]/45 font-light mb-6">
              Přihlaste se k odběru novinek z komunity Tergar Česko — nové články, videa a pozvánky na události.
            </p>
            <a
              href="https://app.zenamu.com/tergarczechia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C9962A] text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:shadow-lg hover:shadow-[#C9962A]/20 transition-all duration-300"
            >
              Přihlásit se k odběru <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
