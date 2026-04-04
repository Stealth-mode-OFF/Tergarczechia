// * About us page — Tergar International, Rinpoche bio, lineage, Czech community story
import { ArrowRight, ExternalLink, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { content } from '@/data/content';
import { Link } from 'react-router-dom';

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
    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9962A] font-heading mb-6">
      {children}
    </span>
  );
}

export function ONasPage() {
  const { about, lineage, rinpoche, gallery, photoStrip } = content.home;

  return (
    <div className="bg-[#FAF8F4]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-b from-white to-[#FAF8F4] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#1C2B3A]/5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <SectionLabel>O nás</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C2B3A] font-heading tracking-tight leading-[1.08] mb-6">
              {about.title}
            </h1>
            <p className="text-lg sm:text-xl text-[#1C2B3A]/60 leading-relaxed font-light max-w-2xl">
              {about.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="py-0 bg-[#FAF8F4] overflow-hidden">
        <div className="flex gap-2 md:gap-3">
          {photoStrip.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="flex-1 min-w-0"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img src={src} alt="Tergar Česko komunita" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Rinpoche */}
      <section className="py-28 md:py-36 lg:py-44 bg-[#FAF8F4] relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
              className="relative lg:sticky lg:top-28"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl max-w-[440px] mx-auto">
                <img src={rinpoche.image} alt={rinpoche.title} className="w-full h-full object-cover object-top" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.div variants={reveal}>
                <SectionLabel>O učiteli</SectionLabel>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C2B3A] font-heading tracking-tight leading-[1.15]">
                  {rinpoche.title}
                </h2>
              </motion.div>
              <motion.div variants={reveal} className="w-16 h-px bg-[#C9962A]/60" />

              {rinpoche.text.split('\n\n').map((paragraph, i) => (
                <motion.p key={i} variants={reveal} className="text-base sm:text-lg text-[#1C2B3A]/60 leading-[1.8] font-light">
                  {paragraph}
                </motion.p>
              ))}

              <motion.div variants={reveal} className="pt-4">
                <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#1C2B3A]/40 font-heading mb-4">
                  <BookOpen size={13} />
                  Knihy
                </h3>
                <ul className="space-y-2">
                  {rinpoche.books.map((book, i) => (
                    <li key={i} className="text-sm text-[#1C2B3A]/55 font-light pl-4 border-l-2 border-[#C9962A]/30">
                      {book}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.blockquote variants={reveal} className="bg-[#F4F1EC] border-l-2 border-[#C9962A]/40 p-5 rounded-r-xl mt-6">
                <p className="text-base text-[#1C2B3A]/70 italic leading-relaxed font-light">
                  &bdquo;{rinpoche.quote}&ldquo;
                </p>
                <cite className="block mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C9962A] not-italic font-heading">
                  Mingyur Rinpočhe
                </cite>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lineage */}
      <section className="py-28 md:py-36 lg:py-44 bg-[#F4F1EC] relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="order-2 lg:order-1 space-y-6"
            >
              <motion.div variants={reveal}>
                <SectionLabel>{lineage.label}</SectionLabel>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C2B3A] font-heading tracking-tight leading-[1.15]">
                  {lineage.title}
                </h2>
              </motion.div>
              <motion.div variants={reveal} className="w-16 h-px bg-[#C9962A]/60" />
              <motion.p variants={reveal} className="text-base sm:text-lg text-[#1C2B3A]/60 leading-[1.8] font-light">
                {lineage.text}
              </motion.p>
              <motion.a
                variants={reveal}
                href="https://tergar.org/about/lineage/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9962A] text-sm font-semibold group"
              >
                <span className="border-b border-[#C9962A]/20 group-hover:border-[#C9962A] transition-colors pb-px">
                  Více o linii na Tergar.org
                </span>
                <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl max-w-[480px] mx-auto">
                <img src={lineage.image} alt="Strom linie Kagyü" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28 bg-[#FAF8F4]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.div variants={reveal}>
              <SectionLabel>Naše komunita</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2B3A] font-heading tracking-tight mb-4">
                Společné chvíle
              </h2>
            </motion.div>
            <motion.p variants={reveal} className="text-sm sm:text-base text-[#1C2B3A]/50 font-light max-w-lg mx-auto">
              Meditace, setkání, učení a komunita — momenty, které nás spojují.
            </motion.p>
          </motion.div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {gallery.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease }}
                className="break-inside-avoid"
              >
                <div className={`overflow-hidden rounded-xl group relative ${
                  photo.aspect === 'portrait' ? 'aspect-[2/3]' : i % 5 === 0 ? 'aspect-[4/5]' : 'aspect-[3/2]'
                }`}>
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-xs font-light">{photo.alt}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F4F1EC]">
        <div className="container-custom text-center">
          <p className="text-[#1C2B3A]/50 font-light mb-6">Chcete se dozvědět více o meditaci?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/co-je-meditace" className="btn-primary inline-flex items-center gap-2">
              Co je meditace
              <ArrowRight size={14} />
            </Link>
            <Link to="/program" className="btn-secondary inline-flex items-center gap-2">
              Zobrazit program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
