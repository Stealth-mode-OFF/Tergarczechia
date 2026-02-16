import { useState, useCallback } from 'react';
import { ArrowRight, ChevronDown, MapPin, Mail, ExternalLink, Calendar, Heart, Youtube, Instagram, Facebook, Send, BookOpen } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
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

/* ─── Czech Republic Map ─────────────────────────────────────── */
const CZ_MAP_PATH = "M122,2 L135,8 L148,5 L160,12 L175,8 L188,15 L200,10 L215,18 L228,14 L242,22 L255,18 L268,25 L282,20 L295,28 L308,24 L322,32 L335,28 L348,35 L362,30 L375,38 L385,42 L392,50 L398,58 L405,52 L415,58 L425,55 L435,62 L442,70 L448,78 L452,88 L448,98 L442,108 L435,115 L425,120 L418,128 L410,135 L400,140 L390,148 L378,152 L368,158 L355,162 L342,168 L330,172 L318,178 L305,175 L292,180 L278,178 L265,182 L252,178 L238,182 L225,178 L212,175 L198,178 L185,172 L172,168 L158,165 L145,160 L132,155 L118,150 L105,145 L92,140 L80,135 L68,128 L58,120 L48,112 L40,105 L35,95 L32,85 L30,75 L32,65 L38,55 L45,48 L55,40 L65,32 L78,25 L88,18 L100,12 L112,6 Z";

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
  const { hero, about, tergarPath, quote1, lineage, rinpoche, support, program, groups, newsletter, social } = content.home;
  const { scrollYProgress } = useScroll();
  const [activePin, setActivePin] = useState<number | null>(null);

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

              <motion.p variants={reveal} className="text-base sm:text-lg text-space-blue/65 leading-[1.8] font-light">
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

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            {/* Vajradhara image — square (750×750), displayed in contained square */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-2 relative"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl max-w-[400px] mx-auto">
                <img
                  src={tergarPath.image}
                  alt="Vajradhara"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
              </div>
            </motion.div>

            {/* Path items — 3 cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-3 space-y-5"
            >
              {tergarPath.items.map((item, i) => (
                <motion.div
                  key={i}
                  variants={reveal}
                  className="bg-white border border-gray-100 rounded-2xl p-7 transition-all duration-300 hover:border-tergar-blue/15 hover:shadow-[0_4px_24px_-8px_rgba(27,64,135,0.08)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-xl bg-tergar-blue/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-tergar-blue font-heading font-bold text-sm">{i + 1}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-space-blue font-heading mb-1">{item.title}</h3>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-tergar-gold/70 font-heading mb-3">{item.subtitle}</p>
                      <p className="text-sm text-space-blue/55 leading-relaxed font-light">{item.description}</p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 mt-3 text-[11px] font-bold text-tergar-blue uppercase tracking-widest font-heading hover:gap-2.5 transition-all"
                        >
                          Více na Tergar.org <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. PROGRAM — Events & Regular Meetings ──────────── */}
      <section id="program" className="scroll-mt-24 py-28 md:py-36 bg-white relative">
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
              <SectionLabel>Program</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-space-blue font-heading tracking-tight mb-6">
                {program.title}
              </h2>
            </motion.div>
            <motion.p variants={reveal} className="text-base sm:text-lg text-space-blue/55 leading-relaxed font-light">
              {program.subtitle}
            </motion.p>
          </motion.div>

          {/* Regular meetings — color-coded pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <h3 className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-space-blue/40 font-heading mb-6">
              Pravidelné meditace
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {program.regularMeetings.map((meeting, i) => (
                <a
                  key={i}
                  href={meeting.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-gray-100 rounded-full text-sm text-space-blue/70 hover:border-tergar-blue/20 hover:text-tergar-blue transition-all group hover:shadow-sm"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: meeting.color }}
                  />
                  <span className="font-semibold font-heading">{meeting.location}</span>
                  <span className="text-gray-200">·</span>
                  <span className="font-light">{meeting.day}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Upcoming event cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14"
          >
            {program.upcomingEvents.map((event, i) => (
              <motion.a
                key={i}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={reveal}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:border-tergar-blue/20 hover:shadow-[0_8px_30px_-12px_rgba(27,64,135,0.12)]"
              >
                {/* Type badge */}
                <span className={`self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest font-heading mb-4 ${
                  event.type === 'online'
                    ? 'bg-tergar-blue/8 text-tergar-blue'
                    : 'bg-tergar-gold/10 text-tergar-gold'
                }`}>
                  {event.type === 'online' ? 'Online' : 'Živě'}
                </span>

                {/* Date */}
                <div className="flex items-center gap-2 text-[11px] text-space-blue/45 mb-3 font-heading font-semibold">
                  <Calendar size={11} />
                  {event.date}
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-bold text-space-blue group-hover:text-tergar-blue transition-colors font-heading leading-snug mb-2 flex-grow">
                  {event.title}
                </h3>

                {/* Desc */}
                <p className="text-sm text-space-blue/50 font-light mb-4">{event.desc}</p>

                {/* Hover CTA */}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-tergar-blue uppercase tracking-widest font-heading opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                  Registrace <ArrowRight size={10} />
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <a
              href={program.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-tergar-blue text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-space-blue transition-colors duration-300 shadow-lg shadow-tergar-blue/15 font-heading"
            >
              Registrace na kurzy a rozvrh meditací
              <ExternalLink size={13} />
            </a>
          </motion.div>

          {/* Zenamu embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_4px_40px_-12px_rgba(0,0,0,0.06)]"
          >
            <div className="h-px bg-gradient-to-r from-tergar-blue/20 via-tergar-gold/40 to-tergar-blue/20" />
            <iframe
              src={program.zenamuUrl}
              width="100%"
              height="800"
              frameBorder="0"
              title="Zenamu Rozvrh"
              className="w-full h-[650px] md:h-[800px] bg-gray-50/30"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── 5. QUOTE ────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-[#fafbfc] relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
          className="container-custom max-w-3xl text-center"
        >
          <div className="text-tergar-gold/30 text-7xl md:text-8xl font-serif leading-none select-none mb-4">&ldquo;</div>
          <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] text-space-blue leading-[1.5] tracking-tight mb-8">
            {quote1.text}
          </blockquote>
          <cite className="block text-[11px] font-bold uppercase tracking-[0.3em] text-tergar-gold not-italic font-heading">
            {quote1.author}
          </cite>
        </motion.div>
      </section>

      {/* ── 5b. LINEAGE — Kagyü tradition ───────────────────── */}
      <section className="py-28 md:py-36 lg:py-44 bg-white relative overflow-hidden">
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

              <motion.p variants={reveal} className="text-base sm:text-lg text-space-blue/65 leading-[1.8] font-light">
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
                <motion.p key={i} variants={reveal} className="text-base sm:text-lg text-space-blue/65 leading-[1.8] font-light">
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

      {/* ── 7. SUPPORT ──────────────────────────────────────── */}
      <section className="py-28 md:py-36 bg-space-blue text-white relative overflow-hidden isolate">
        <div className="absolute inset-0 bg-gradient-to-br from-tergar-blue/90 via-space-blue to-[#1a1f2e]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tergar-blue/15 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="container-custom relative z-10 text-center max-w-3xl"
        >
          <motion.div variants={reveal}>
            <Heart className="w-10 h-10 text-tergar-gold mx-auto mb-8" strokeWidth={1.2} />
          </motion.div>
          <motion.h2 variants={reveal} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-heading tracking-tight">
            {support.title}
          </motion.h2>
          <motion.p variants={reveal} className="text-base sm:text-lg text-white/60 mb-12 leading-relaxed font-light max-w-xl mx-auto">
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
      <section id="skupiny" className="scroll-mt-24 py-28 md:py-36 bg-[#fafbfc] relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Text + location cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={reveal}>
                <SectionLabel>Skupiny</SectionLabel>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-space-blue font-heading tracking-tight mb-6">
                  {groups.title}
                </h2>
              </motion.div>

              <motion.p variants={reveal} className="text-base sm:text-lg text-space-blue/60 mb-10 leading-relaxed font-light">
                {groups.text}
              </motion.p>

              <motion.div variants={reveal} className="space-y-2.5 mb-8">
                {groups.mapLocations.map((loc, i) => (
                  <a
                    key={i}
                    href={loc.link}
                    target={loc.link.startsWith('http') ? '_blank' : undefined}
                    rel={loc.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-tergar-blue/20 transition-all duration-300 group hover:shadow-sm"
                    onMouseEnter={() => setActivePin(i)}
                    onMouseLeave={() => setActivePin(null)}
                  >
                    <div className="w-9 h-9 rounded-full bg-tergar-blue/8 flex items-center justify-center group-hover:bg-tergar-blue group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <MapPin size={15} />
                    </div>
                    <div className="min-w-0">
                      <span className="font-bold text-space-blue font-heading text-sm block">{loc.name}</span>
                      <span className="text-xs text-space-blue/45 block">{loc.desc}</span>
                    </div>
                  </a>
                ))}
              </motion.div>

              <motion.a
                variants={reveal}
                href={`mailto:${groups.email}`}
                className="inline-flex items-center gap-3 text-tergar-blue text-sm font-semibold group"
              >
                <div className="w-9 h-9 rounded-full bg-tergar-blue/8 flex items-center justify-center group-hover:bg-tergar-blue group-hover:text-white transition-all duration-300">
                  <Mail size={14} />
                </div>
                <span className="border-b border-gray-200 group-hover:border-tergar-blue transition-colors pb-px">{groups.email}</span>
              </motion.a>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm lg:sticky lg:top-28"
            >
              <svg viewBox="0 0 500 200" className="w-full h-auto" role="img" aria-label="Mapa skupin Tergar v České republice">
                <path
                  d={CZ_MAP_PATH}
                  fill="#eef1f6"
                  stroke="#d4dbe8"
                  strokeWidth="1.2"
                />
                {groups.mapLocations.map((loc, i) => {
                  const pos = geoToMap(loc.lat, loc.lng);
                  const isActive = activePin === i;
                  return (
                    <g key={i}>
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 9. NEWSLETTER + SOCIAL + INCLUSION ──────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Newsletter */}
            <motion.a
              href={newsletter.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-space-blue text-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-full bg-white/8 flex items-center justify-center mb-5 group-hover:bg-white/15 transition-colors">
                <Send size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold font-heading mb-2">{newsletter.title}</h3>
              <p className="text-white/50 text-sm font-light mb-5 leading-relaxed">
                Novinky, pozvánky a inspirace přímo do vaší schránky.
              </p>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-tergar-gold group-hover:gap-3 transition-all font-heading mt-auto">
                Přihlásit se <ArrowRight size={12} />
              </span>
            </motion.a>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="bg-[#fafbfc] border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <h3 className="text-base font-bold font-heading text-space-blue mb-5">Sledujte nás</h3>
              <div className="flex gap-3 mb-5">
                {[
                  { href: social.facebook, icon: Facebook, label: 'Facebook' },
                  { href: social.instagram, icon: Instagram, label: 'Instagram' },
                  { href: social.youtube, icon: Youtube, label: 'YouTube' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center text-space-blue/60 hover:bg-tergar-blue hover:text-white hover:border-tergar-blue transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={19} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
              <p className="text-xs text-space-blue/40 font-light">@tergar_cz</p>
            </motion.div>

            {/* Inclusion */}
            <motion.a
              href={content.home.inclusion.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="group bg-[#fafbfc] border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-tergar-blue/15 hover:shadow-sm"
            >
              <div className="text-3xl mb-5">🏳️‍🌈</div>
              <h3 className="text-base font-bold font-heading text-space-blue mb-2">Inkluze</h3>
              <p className="text-sm text-space-blue/50 leading-relaxed font-light mb-4">
                {content.home.inclusion.text}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-tergar-blue opacity-0 group-hover:opacity-100 transition-opacity font-heading mt-auto">
                Více <ExternalLink size={10} />
              </span>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
