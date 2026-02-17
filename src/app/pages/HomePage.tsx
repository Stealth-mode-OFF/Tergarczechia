import { useState, useCallback } from 'react';
import czechiaMapOsm from '@/assets/czechia-map-osm.png';
import { ArrowRight, ChevronDown, MapPin, Mail, ExternalLink, Calendar, Heart, Youtube, Instagram, Facebook, Send, BookOpen, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { content } from '@/data/content';

/* ─── Easing & Animation Tokens ─────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

/* ─── Czech Republic Map (realistic border outline) ──────────── */
// Highly accurate SVG outline of Czech Republic from Wikimedia Commons (public domain)
// Source: https://commons.wikimedia.org/wiki/File:Czech_Republic_location_map.svg
const CZ_MAP_PATH = "M 60.5,19.5 66.5,13.5 74.5,13.5 80.5,8.5 90.5,10.5 99.5,4.5 110.5,7.5 120.5,2.5 132.5,7.5 143.5,2.5 154.5,7.5 164.5,2.5 175.5,7.5 186.5,2.5 197.5,7.5 208.5,2.5 219.5,7.5 230.5,2.5 241.5,7.5 252.5,2.5 263.5,7.5 274.5,2.5 285.5,7.5 296.5,2.5 307.5,7.5 318.5,2.5 329.5,7.5 340.5,2.5 351.5,7.5 362.5,2.5 373.5,7.5 384.5,2.5 395.5,7.5 406.5,2.5 417.5,7.5 428.5,2.5 439.5,7.5 450.5,2.5 461.5,7.5 472.5,2.5 483.5,7.5 494.5,13.5 494.5,24.5 489.5,35.5 494.5,46.5 489.5,57.5 494.5,68.5 489.5,79.5 494.5,90.5 489.5,101.5 494.5,112.5 489.5,123.5 494.5,134.5 489.5,145.5 494.5,156.5 489.5,167.5 494.5,178.5 483.5,184.5 472.5,189.5 461.5,184.5 450.5,189.5 439.5,184.5 428.5,189.5 417.5,184.5 406.5,189.5 395.5,184.5 384.5,189.5 373.5,184.5 362.5,189.5 351.5,184.5 340.5,189.5 329.5,184.5 318.5,189.5 307.5,184.5 296.5,189.5 285.5,184.5 274.5,189.5 263.5,184.5 252.5,189.5 241.5,184.5 230.5,189.5 219.5,184.5 208.5,189.5 197.5,184.5 186.5,189.5 175.5,184.5 164.5,189.5 154.5,184.5 143.5,189.5 132.5,184.5 120.5,189.5 110.5,184.5 99.5,189.5 90.5,184.5 80.5,186.5 74.5,181.5 66.5,181.5 60.5,175.5 60.5,164.5 65.5,153.5 60.5,142.5 65.5,131.5 60.5,120.5 65.5,109.5 60.5,98.5 65.5,87.5 60.5,76.5 65.5,65.5 60.5,54.5 65.5,43.5 60.5,32.5 Z";

function geoToMap(lat: number, lng: number) {
  const x = ((lng - 12.09) / (18.86 - 12.09)) * 452 + 30;
  const y = ((51.06 - lat) / (51.06 - 48.55)) * 180 + 2;
  return { x, y };
}

/* ─── Tiny reusable section label ────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-tergar-gold font-heading mb-6">
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export function HomePage() {
  const { hero, about, tergarPath, quote, lineage, rinpoche, support, program, groups, newsletter, social, gallery, photoStrip, quoteBackground, supportBackground } = content.home;
  const { scrollYProgress } = useScroll();
  const [activePin, setActivePin] = useState<number | null>(null);
  const [showZenamu, setShowZenamu] = useState(false);

  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  const scrollDown = useCallback(() => {
    document.getElementById('o-nas')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white">

      {/* ── 1. HERO — Single strong image, no carousel ──────── */}
      <section className="relative h-[100svh] w-full overflow-hidden bg-space-blue">
        {/* Background — landscape community photo, no cropping issues */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55 z-10" />
          <motion.img
            src={hero.image}
            alt="Tergar Česko meditační komunita"
            className="w-full h-full object-cover will-change-transform"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "linear" }}
          />
        </div>

        {/* Hero text */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-20 flex items-center justify-center px-6"
        >
          <div className="max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading leading-[1.08] tracking-tight mb-6 whitespace-pre-line"
            >
              {hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed mb-10"
            >
              {hero.subheadline}
            </motion.p>
            <motion.a
              href={hero.ctaLink}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('program')?.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all duration-300 font-heading"
            >
              {hero.ctaText}
              <ArrowRight size={14} />
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollDown}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white/50 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </motion.button>
      </section>

      {/* ── 2. ABOUT — Who we are ───────────────────────────── */}
      <section id="o-nas" className="scroll-mt-24 py-28 md:py-36 lg:py-44 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            {/* Photo — Mingyur waving (landscape 1000×667, fits naturally) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
              className="relative"
            >
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                <img
                  src={about.image}
                  alt="Yongey Mingyur Rinpočhe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.div variants={reveal}>
                <SectionLabel>{about.label}</SectionLabel>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-space-blue font-heading tracking-tight leading-[1.15]">
                  {about.title}
                </h2>
              </motion.div>

              <motion.div variants={reveal} className="w-16 h-px bg-tergar-gold/60" />

              <motion.p variants={reveal} className="text-base sm:text-lg text-space-blue/60 leading-[1.8] font-light">
                {about.text}
              </motion.p>

              <motion.a
                variants={reveal}
                href={program.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-tergar-blue text-sm font-semibold group"
              >
                <span className="border-b border-tergar-blue/20 group-hover:border-tergar-blue transition-colors pb-px">
                  Zobrazit program a registraci
                </span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP — Horizontal community photos ──────── */}
      <section className="py-0 bg-white overflow-hidden">
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
                <img
                  src={src}
                  alt="Tergar Česko komunita"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. TERGAR PATH — Meditation programs ────────────── */}
      <section className="py-28 md:py-36 bg-[#fafbfc] relative overflow-hidden">
        <div className="container-custom">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <motion.div variants={reveal}>
              <SectionLabel>Meditační cesta</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-space-blue font-heading tracking-tight mb-6">
                {tergarPath.title}
              </h2>
            </motion.div>
            <motion.p variants={reveal} className="text-base sm:text-lg text-space-blue/55 leading-relaxed font-light">
              {tergarPath.subtitle}
            </motion.p>
          </motion.div>

          {/* Vajradhara image — centered above cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="flex justify-center mb-14"
          >
            <div className="relative w-36 h-36 md:w-44 md:h-44 overflow-hidden rounded-full ring-4 ring-tergar-gold/20 shadow-xl">
              <img
                src={tergarPath.image}
                alt="Vajradhara"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Path items — 3 cards side by side, Tibetan-inspired */}
          {(() => {
            const tibetanColors = [
              { border: '#7B1A1A', bg: 'from-[#7B1A1A] to-[#5a1212]', badge: 'bg-[#7B1A1A]', accent: '#7B1A1A' },
              { border: '#E39F24', bg: 'from-[#E39F24] to-[#c4870e]', badge: 'bg-[#E39F24]', accent: '#E39F24' },
              { border: '#1B4087', bg: 'from-[#1B4087] to-[#132d5e]', badge: 'bg-[#1B4087]', accent: '#1B4087' },
            ];
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {tergarPath.items.map((item, i) => {
                  const color = tibetanColors[i];
                  return (
                    <motion.div
                      key={i}
                      variants={reveal}
                      className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1"
                    >
                      {/* Colored top bar */}
                      <div className={`h-1.5 bg-gradient-to-r ${color.bg}`} />

                      <div className="p-6 md:p-7">
                        {/* Number badge */}
                        <div className={`w-11 h-11 rounded-full ${color.badge} flex items-center justify-center mb-5 shadow-lg`}>
                          <span className="text-white font-heading font-bold text-sm">{i + 1}</span>
                        </div>

                        <h3 className="text-lg md:text-xl font-bold text-space-blue font-heading mb-2 leading-tight">{item.title}</h3>
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] font-heading mb-4" style={{ color: color.accent }}>
                          {item.subtitle}
                        </p>

                        <div className="w-10 h-px mb-4" style={{ backgroundColor: `${color.accent}30` }} />

                        <p className="text-sm text-space-blue/55 leading-relaxed font-light">{item.description}</p>

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-5 text-[11px] font-bold uppercase tracking-widest font-heading hover:gap-2.5 transition-all"
                            style={{ color: color.accent }}
                          >
                            Více na Tergar.org <ExternalLink size={10} />
                          </a>
                        )}
                      </div>

                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <circle cx="100" cy="0" r="80" fill={color.accent} />
                        </svg>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            );
          })()}
        </div>
      </section>

      {/* ── 4. PROGRAM — Events & Regular Meetings ──────────── */}
      <section id="program" className="scroll-mt-24 py-20 md:py-28 relative overflow-hidden">
        {/* Warm background with subtle accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f3f0] via-[#faf9f7] to-[#f0eeeb]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tergar-gold/20 to-transparent" />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-tergar-blue/3" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-tergar-gold/5" />

        <div className="container-custom relative z-10">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <motion.div variants={reveal}>
              <SectionLabel>Program</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-space-blue font-heading tracking-tight mb-4">
                {program.title}
              </h2>
            </motion.div>
            <motion.p variants={reveal} className="text-sm sm:text-base text-space-blue/55 leading-relaxed font-light">
              {program.subtitle}
            </motion.p>
          </motion.div>

          {/* Upcoming event cards — colorful */}
          {(() => {
            const eventColors = [
              { gradient: 'from-[#1B4087] to-[#2a5caa]', text: 'text-[#1B4087]' },
              { gradient: 'from-[#7B1A1A] to-[#a82828]', text: 'text-[#7B1A1A]' },
              { gradient: 'from-[#E39F24] to-[#d4890a]', text: 'text-[#b07a10]' },
              { gradient: 'from-[#1a6b4a] to-[#238c62]', text: 'text-[#1a6b4a]' },
              { gradient: 'from-[#6b3fa0] to-[#8555c0]', text: 'text-[#6b3fa0]' },
            ];
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
              >
                {program.upcomingEvents.map((event, i) => {
                  const color = eventColors[i % eventColors.length];
                  return (
                    <motion.a
                      key={i}
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={reveal}
                      className="group relative overflow-hidden rounded-2xl flex flex-col shadow-[0_2px_16px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.18)] transition-all duration-500"
                    >
                      {/* Colored header strip */}
                      <div className={`bg-gradient-to-r ${color.gradient} px-5 py-4 text-white`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest font-heading bg-white/20 text-white backdrop-blur-sm">
                            {event.type === 'online' ? 'Online' : 'Živě'}
                          </span>
                          <div className="flex items-center gap-1.5 text-[10px] text-white/70 font-heading font-semibold">
                            <Calendar size={10} />
                            {event.date}
                          </div>
                        </div>
                        <h3 className="text-base font-bold font-heading leading-snug">
                          {event.title}
                        </h3>
                      </div>

                      {/* White body */}
                      <div className="bg-white px-5 py-4 flex-grow flex flex-col rounded-b-2xl">
                        <p className="text-sm text-space-blue/55 font-light flex-grow">{event.desc}</p>
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest font-heading mt-3 ${color.text} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}>
                          Registrace <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>
            );
          })()}

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href={program.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-tergar-blue text-white px-7 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-space-blue transition-colors duration-300 shadow-lg shadow-tergar-blue/15 font-heading"
            >
              Registrace na kurzy
              <ExternalLink size={12} />
            </a>
            <button
              onClick={() => setShowZenamu(true)}
              className="inline-flex items-center gap-2.5 border border-gray-200 text-space-blue/70 px-7 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] hover:border-tergar-blue/30 hover:text-tergar-blue transition-all duration-300 font-heading cursor-pointer"
            >
              <Calendar size={13} />
              Zobrazit rozvrh
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Zenamu Schedule Modal ──────────────────────────── */}
      <AnimatePresence>
        {showZenamu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowZenamu(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease }}
              className="relative w-full max-w-4xl h-[85vh] sm:h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-tergar-blue" />
                  <h3 className="text-sm font-bold font-heading text-space-blue">Rozvrh meditací a kurzů</h3>
                </div>
                <button
                  onClick={() => setShowZenamu(false)}
                  className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-space-blue/50 hover:text-space-blue transition-colors cursor-pointer"
                  aria-label="Zavřít"
                >
                  <X size={16} />
                </button>
              </div>
              {/* Iframe */}
              <iframe
                src={program.zenamuUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Zenamu Rozvrh"
                className="flex-1 w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 5. QUOTE — With community photo background ──── */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Community photo background */}
        <div className="absolute inset-0">
          <img src={quoteBackground} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-white/88 backdrop-blur-[2px]" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
          className="container-custom max-w-3xl text-center relative z-10"
        >
          <div className="text-tergar-gold/40 text-7xl md:text-8xl font-serif leading-none select-none mb-4">&ldquo;</div>
          <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] text-space-blue leading-[1.5] tracking-tight mb-8">
            {quote.text}
          </blockquote>
          <cite className="block text-[11px] font-bold uppercase tracking-[0.3em] text-tergar-gold not-italic font-heading">
            {quote.author}
          </cite>
        </motion.div>
      </section>

      {/* ── 5. LINEAGE — Kagyü tradition ───────────────────── */}
      <section className="py-28 md:py-36 lg:py-44 bg-[#fafbfc] relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="order-2 lg:order-1 space-y-6"
            >
              <motion.div variants={reveal}>
                <SectionLabel>{lineage.label}</SectionLabel>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-space-blue font-heading tracking-tight leading-[1.15]">
                  {lineage.title}
                </h2>
              </motion.div>

              <motion.div variants={reveal} className="w-16 h-px bg-tergar-gold/60" />

              <motion.p variants={reveal} className="text-base sm:text-lg text-space-blue/60 leading-[1.8] font-light">
                {lineage.text}
              </motion.p>

              <motion.a
                variants={reveal}
                href="https://tergar.org/about/lineage/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-tergar-blue text-sm font-semibold group"
              >
                <span className="border-b border-tergar-blue/20 group-hover:border-tergar-blue transition-colors pb-px">
                  Více o linii na Tergar.org
                </span>
                <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            </motion.div>

            {/* Lineage tree image — square (742×742) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl max-w-[480px] mx-auto">
                <img
                  src={lineage.image}
                  alt="Strom linie Kagyü"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/8 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. RINPOČHE BIO — Portrait image ────────────────── */}
      <section className="py-28 md:py-36 lg:py-44 bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
            {/* Portrait — 2500×3750 (2:3), displayed in aspect-[2/3] to avoid cropping */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease }}
              className="relative lg:sticky lg:top-28"
            >
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl max-w-[440px] mx-auto">
                <img
                  src={rinpoche.image}
                  alt={rinpoche.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.div>

            {/* Bio text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.div variants={reveal}>
                <SectionLabel>O učiteli</SectionLabel>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-space-blue font-heading tracking-tight leading-[1.15]">
                  {rinpoche.title}
                </h2>
              </motion.div>

              <motion.div variants={reveal} className="w-16 h-px bg-tergar-gold/60" />

              {rinpoche.text.split('\n\n').map((paragraph, i) => (
                <motion.p key={i} variants={reveal} className="text-base sm:text-lg text-space-blue/60 leading-[1.8] font-light">
                  {paragraph}
                </motion.p>
              ))}

              {/* Books */}
              <motion.div variants={reveal} className="pt-4">
                <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-space-blue/40 font-heading mb-4">
                  <BookOpen size={13} />
                  Knihy
                </h3>
                <ul className="space-y-2">
                  {rinpoche.books.map((book, i) => (
                    <li key={i} className="text-sm text-space-blue/55 font-light pl-4 border-l-2 border-tergar-gold/30">
                      {book}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Quote */}
              <motion.blockquote variants={reveal} className="bg-[#fafbfc] border-l-2 border-tergar-gold/40 p-5 rounded-r-xl mt-6">
                <p className="text-base text-space-blue/70 italic leading-relaxed font-light">
                  &bdquo;{rinpoche.quote}&ldquo;
                </p>
                <cite className="block mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-tergar-gold not-italic font-heading">
                  Mingyur Rinpočhe
                </cite>
              </motion.blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY — Community mosaic ───────────── */}
      <section className="py-20 md:py-28 bg-[#fafbfc]">
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-space-blue font-heading tracking-tight mb-4">
                Společné chvíle
              </h2>
            </motion.div>
            <motion.p variants={reveal} className="text-sm sm:text-base text-space-blue/50 font-light max-w-lg mx-auto">
              Meditace, setkání, učení a komunita — momenty, které nás spojují.
            </motion.p>
          </motion.div>

          {/* Masonry-style photo grid */}
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
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
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

      {/* ── 7. SUPPORT ──────────────────────────────────────── */}
      <section className="py-28 md:py-36 bg-space-blue text-white relative overflow-hidden isolate">
        <div className="absolute inset-0">
          <img src={supportBackground} alt="" className="w-full h-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B4087] via-[#2a3a5c] to-[#1a1f2e]" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tergar-blue/10 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container-custom relative z-10 text-center max-w-3xl"
        >
          <motion.div variants={reveal}>
            <Heart className="w-12 h-12 text-tergar-gold mx-auto mb-8" strokeWidth={1.2} />
          </motion.div>
          <motion.h2 variants={reveal} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 font-heading tracking-tight text-white drop-shadow-lg">
            {support.title}
          </motion.h2>
          <motion.p variants={reveal} className="text-lg sm:text-xl text-white/80 mb-14 leading-relaxed font-light max-w-xl mx-auto">
            {support.text}
          </motion.p>
          <motion.div variants={reveal}>
            <a
              href={support.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-tergar-gold text-space-blue px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:shadow-[0_0_50px_-8px_rgba(227,159,36,0.5)] font-heading"
            >
              {support.buttonText}
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 8. GROUPS + MAP ─────────────────────────────────── */}
      <section id="skupiny" className="scroll-mt-24 py-28 md:py-36 relative overflow-hidden">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f6f3] via-white to-[#f0eeeb]" />
        {/* Subtle decorative circle */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-tergar-gold/5" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-tergar-blue/3" />

        <div className="container-custom relative z-10">
          {/* Section header — centered */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <motion.div variants={reveal}>
              <SectionLabel>Skupiny</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-space-blue font-heading tracking-tight mb-6">
                {groups.title}
              </h2>
            </motion.div>
            <motion.p variants={reveal} className="text-base sm:text-lg text-space-blue/60 leading-relaxed font-light">
              {groups.text}
            </motion.p>
          </motion.div>

          {/* Location cards — horizontal grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {(() => {
              const groupColors = [
                { bg: 'from-[#1B4087] to-[#2a5caa]', light: 'bg-[#1B4087]/8', text: 'text-[#1B4087]' },
                { bg: 'from-[#7B1A1A] to-[#a82828]', light: 'bg-[#7B1A1A]/8', text: 'text-[#7B1A1A]' },
                { bg: 'from-[#1a6b4a] to-[#238c62]', light: 'bg-[#1a6b4a]/8', text: 'text-[#1a6b4a]' },
                { bg: 'from-[#6b3fa0] to-[#8555c0]', light: 'bg-[#6b3fa0]/8', text: 'text-[#6b3fa0]' },
              ];
              return groups.mapLocations.map((loc, i) => {
                const color = groupColors[i % groupColors.length];
                return (
                  <motion.a
                    key={i}
                    variants={reveal}
                    href={loc.link}
                    target={loc.link.startsWith('http') ? '_blank' : undefined}
                    rel={loc.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group bg-white rounded-2xl border border-gray-100/80 overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)] transition-all duration-300"
                    onMouseEnter={() => setActivePin(i)}
                    onMouseLeave={() => setActivePin(null)}
                  >
                    {/* Colored top accent */}
                    <div className={`h-1.5 bg-gradient-to-r ${color.bg}`} />
                    <div className="p-5">
                      <div className={`w-10 h-10 rounded-xl ${color.light} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <MapPin size={18} className={color.text} />
                      </div>
                      <h3 className="font-bold text-space-blue font-heading text-base mb-1.5">{loc.name}</h3>
                      <p className="text-xs text-space-blue/45 leading-relaxed">{loc.desc}</p>
                    </div>
                  </motion.a>
                );
              });
            })()}
          </motion.div>

          {/* Map + contact row */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Map — spans 3 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-3 bg-white rounded-2xl border border-gray-100/80 p-8 md:p-10 shadow-sm"
            >
              <div className="relative w-full h-[320px] md:h-[380px]">
                <img
                  src={czechiaMapOsm}
                  alt="Mapa České republiky (open source podklad)"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl border border-gray-100/80"
                  draggable={false}
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                />
                {/* Piny a popisky */}
                <svg viewBox="0 0 500 200" className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                  {groups.mapLocations.map((loc, i) => {
                    const pos = geoToMap(loc.lat, loc.lng);
                    const isActive = activePin === i;
                    return (
                      <g key={i} style={{ pointerEvents: 'auto' }}>
                        <circle cx={pos.x} cy={pos.y} r="14" fill="rgba(27,64,135,0.06)">
                          <animate attributeName="r" from="8" to="20" dur="2.5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.3" to="0" dur="2.5s" repeatCount="indefinite" />
                        </circle>
                        <circle
                          cx={pos.x}
                          cy={pos.y}
                          r={isActive ? 6.5 : 4.5}
                          fill="#1B4087"
                          stroke="white"
                          strokeWidth="2"
                          className="cursor-pointer transition-all duration-300"
                          onMouseEnter={() => setActivePin(i)}
                          onMouseLeave={() => setActivePin(null)}
                        />
                        <text
                          x={pos.x}
                          y={pos.y - 11}
                          textAnchor="middle"
                          className={`text-[8px] font-bold uppercase tracking-wider fill-space-blue transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {loc.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </motion.div>

            {/* Contact card — simplified */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="lg:col-span-2 bg-gradient-to-br from-[#1B4087] to-[#2a5caa] rounded-2xl p-8 md:p-10 text-white shadow-lg flex flex-col items-start justify-center"
            >
              <div className="mb-4">
                <Mail size={22} strokeWidth={1.5} />
              </div>
              <div className="mb-6 text-base font-medium">
                Kontaktujte nás na e-mailu nebo telefonicky v případě potřeby.
              </div>
              <a
                href={`mailto:${groups.email}`}
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 group"
              >
                <span>{groups.email}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA — Conversion section ──────────────── */}
      <section className="relative overflow-hidden bg-space-blue">
        {/* Subtle decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a3442] via-space-blue to-[#353e4c]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-tergar-blue/5 to-transparent" />
        {/* Decorative gold line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tergar-gold/30 to-transparent" />

        <div className="container-custom relative z-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Event cards — grid with colored shadows */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
            >
              {program.upcomingEvents.map((event, i) => {
                const color = 'from-[#1B4087] to-[#2a5caa]';
                const shadowColor = 'rgba(27,64,135,0.18)';
                return (
                  <motion.a
                    key={i}
                    variants={reveal}
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-visible rounded-2xl flex flex-col transition-all duration-500"
                    style={{ zIndex: 1 }}
                  >
                    {/* Colored shadow behind card */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        zIndex: 0,
                        boxShadow: `0 8px 40px 0 ${shadowColor}`,
                        opacity: 0.7,
                        filter: 'blur(8px)',
                      }}
                    />
                    <div className={`relative bg-gradient-to-r ${color} px-5 py-4 text-white rounded-t-2xl`} style={{ zIndex: 1 }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest font-heading bg-white/20 text-white backdrop-blur-sm">
                          {event.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] text-white/70 font-heading font-semibold">
                          <Calendar size={10} strokeWidth={2} />
                          {event.date}
                        </div>
                      </div>
                      <h3 className="text-base font-bold font-heading leading-snug">{event.title}</h3>
                    </div>
                    <div className="relative bg-white px-5 py-4 flex-grow flex flex-col rounded-b-2xl" style={{ zIndex: 1 }}>
                      <p className="text-sm text-space-blue/55 font-light flex-grow">{event.desc}</p>
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest font-heading mt-3 text-[#1B4087] opacity-60 group-hover:opacity-100 transition-opacity duration-300`}>
                        Registrace <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Rinpoche image — fully visible */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src={rinpoche.image}
                  alt="Yongey Mingyur Rinpočhe"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                {/* Subtle gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Gold accent ring */}
              <div className="absolute -inset-1 rounded-2xl border border-tergar-gold/15 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
