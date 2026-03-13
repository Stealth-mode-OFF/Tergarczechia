import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Mail, Heart, Calendar, Users, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { content } from '@/data/content';
import mingyurWavingImage from '@/assets/mingyur-waving.png';
import communityImage from '@/assets/community.png';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export function HomePage() {
  const { slider, quote1, rinpoche, support, program, groups } = content.home;
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slider.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slider.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);

  return (
    <div className="bg-[#FAF8F4] overflow-hidden">

      {/* ═══════ HERO — CINEMATIC FULLSCREEN ═══════ */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50 z-10" />
            <motion.img
              src={slider[currentSlide].image}
              alt=""
              className="w-full h-full object-cover"
              animate={{ scale: 1.04 }}
              transition={{ duration: 12, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>
        </AnimatePresence>

        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="absolute inset-0 z-20 flex items-center justify-center text-center px-6"
        >
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl" style={{ fontWeight: 600 }}>
                  {slider[currentSlide].text}
                </h1>
                {slider[currentSlide].subtext && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-lg md:text-2xl text-white/85 font-light max-w-2xl mx-auto leading-relaxed"
                  >
                    {slider[currentSlide].subtext}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Hero CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/co-je-meditace"
                className="inline-flex items-center gap-3 bg-[#C9962A] text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:shadow-[0_8px_30px_-6px_rgba(201,150,42,0.5)] transition-all duration-500 group"
              >
                Začít meditovat
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/program"
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-8 py-4 rounded-full font-medium border border-white/20 hover:bg-white/25 transition-all duration-300"
              >
                Prozkoumat program
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Slider controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-5">
          <button onClick={prevSlide} className="text-white/30 hover:text-white transition-colors duration-300 cursor-pointer">
            <ChevronLeft size={28} strokeWidth={1} />
          </button>
          <div className="flex gap-2.5">
            {slider.map((_: unknown, i: number) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="relative h-[3px] w-10 rounded-full overflow-hidden bg-white/15 cursor-pointer"
              >
                {i === currentSlide && (
                  <motion.div layoutId="heroSlide" className="absolute inset-0 bg-[#C9962A]" transition={{ duration: 0.4 }} />
                )}
              </button>
            ))}
          </div>
          <button onClick={nextSlide} className="text-white/30 hover:text-white transition-colors duration-300 cursor-pointer">
            <ChevronRight size={28} strokeWidth={1} />
          </button>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 right-8 z-30 hidden lg:block"
        >
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="text-[9px] uppercase tracking-[0.3em] font-heading rotate-90 origin-center translate-y-6">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-8 bg-white/20 mt-8" />
          </div>
        </motion.div>
      </section>

      {/* ═══════ QUOTE — WARM & ELEGANT ═══════ */}
      <section className="py-28 md:py-36 bg-[#FAF8F4] text-center px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#C9962A]/30 to-transparent" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <blockquote className="font-heading text-2xl md:text-4xl lg:text-[2.75rem] text-[#1C2B3A] leading-snug italic relative" style={{ fontWeight: 400 }}>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-[#C9962A]/15 font-serif">"</span>
            <span className="relative">{quote1.text}</span>
          </blockquote>
          <div className="flex items-center justify-center gap-4 mt-10">
            <div className="w-12 h-px bg-[#C9962A]/40" />
            <cite className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9962A] not-italic">
              {quote1.author}
            </cite>
            <div className="w-12 h-px bg-[#C9962A]/40" />
          </div>
        </motion.div>
      </section>

      {/* ═══════ KDE ZAČÍT — DUAL ENTRY POINT ═══════ */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E8E4DD] to-transparent" />
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9962A] mb-4">
              Kde začít
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading text-[#1C2B3A] tracking-tight" style={{ fontWeight: 600 }}>
              Dva způsoby, jak začít
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* Online */}
            <motion.div variants={fadeInUp}>
              <Link
                to="/program"
                className="group block bg-[#FAF8F4] rounded-3xl p-8 md:p-10 border border-[#E8E4DD]/60 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#C9962A]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles size={28} className="text-[#C9962A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading text-[#1C2B3A] mb-3" style={{ fontWeight: 600 }}>Online kurz</h3>
                <p className="text-[#2D3748]/60 leading-relaxed mb-6 font-light">
                  Začněte s programem Joy of Living — meditační kurz pod vedením Mingyura Rinpočheho, který můžete absolvovat z domova.
                </p>
                <span className="inline-flex items-center gap-2 text-[#C9962A] text-sm font-semibold group-hover:gap-3 transition-all">
                  Prozkoumat programy <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>

            {/* In person */}
            <motion.div variants={fadeInUp}>
              <Link
                to="/skupiny"
                className="group block bg-[#FAF8F4] rounded-3xl p-8 md:p-10 border border-[#E8E4DD]/60 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1C2B3A]/8 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Users size={28} className="text-[#1C2B3A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading text-[#1C2B3A] mb-3" style={{ fontWeight: 600 }}>Přijďte osobně</h3>
                <p className="text-[#2D3748]/60 leading-relaxed mb-6 font-light">
                  Meditujte s námi v Praze, Českých Budějovicích nebo České Lípě. Každý 2. a 4. čtvrtek, Chorvatská 12.
                </p>
                <span className="inline-flex items-center gap-2 text-[#1C2B3A] text-sm font-semibold group-hover:gap-3 transition-all">
                  Najít skupinu <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ RINPOCHE BIO ═══════ */}
      <section className="py-28 md:py-36 bg-[#F4F1EC] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#C9962A]/[0.03] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="lg:col-span-5 relative group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
                <motion.img
                  src={mingyurWavingImage}
                  alt={rinpoche.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B3A]/40 to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#C9962A]/25 rounded-br-3xl" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-7 space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9962A] block mb-4">O učiteli</span>
                <h2 className="text-3xl md:text-5xl font-heading text-[#1C2B3A] tracking-tight leading-[1.15]" style={{ fontWeight: 600 }}>
                  {rinpoche.title}
                </h2>
              </motion.div>
              <motion.div variants={fadeInUp} className="w-16 h-px bg-[#C9962A]/40" />
              <motion.p variants={fadeInUp} className="text-lg text-[#2D3748]/65 leading-[1.8] font-light">
                {rinpoche.text}
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link
                  to="/o-nas"
                  className="inline-flex items-center gap-2 text-[#C9962A] font-semibold text-sm group"
                >
                  <span className="border-b border-[#C9962A]/30 group-hover:border-[#C9962A] transition-colors pb-0.5">
                    Více o Rinpočhem a linii
                  </span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ UPCOMING EVENTS PREVIEW ═══════ */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeInUp} className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9962A] mb-4">
              Nadcházející
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading text-[#1C2B3A] tracking-tight mb-4" style={{ fontWeight: 600 }}>
              Události 2026
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#2D3748]/55 font-light max-w-lg mx-auto">
              Online kurzy, retreaty a živé přenosy s Mingyurem Rinpočhem
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10"
          >
            {[
              { title: 'Losar: Tibetský Nový rok', date: '14. 2.', type: 'Online', color: '#C9962A' },
              { title: 'Flourish: Věda a praxe', date: '17.–21. 3.', type: 'Zdarma', color: '#22c55e' },
              { title: 'Retreat s Mingyurem Rinpočhem', date: '10.–12. 4.', type: 'Online', color: '#1C2B3A' },
            ].map((event, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group bg-[#FAF8F4] rounded-2xl border border-[#E8E4DD]/60 p-6 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={14} style={{ color: event.color }} />
                  <span className="text-xs font-semibold text-[#2D3748]/40">{event.date}</span>
                  <span
                    className="ml-auto text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: `${event.color}12`, color: event.color }}
                  >
                    {event.type}
                  </span>
                </div>
                <h3 className="text-base font-heading text-[#1C2B3A] leading-snug" style={{ fontWeight: 600 }}>
                  {event.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/udalosti-2026"
              className="inline-flex items-center gap-2 text-[#C9962A] font-semibold text-sm group"
            >
              <span className="border-b border-[#C9962A]/30 group-hover:border-[#C9962A] transition-colors pb-0.5">
                Zobrazit všechny události
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════ PROGRAM ZENAMU ═══════ */}
      <section className="py-24 md:py-32 bg-[#FAF8F4] relative">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading text-[#1C2B3A] mb-8 tracking-tight" style={{ fontWeight: 600 }}>
              {program.title}
            </motion.h2>
            <motion.blockquote variants={fadeInUp} className="text-xl md:text-2xl text-[#2D3748]/50 italic font-heading leading-relaxed" style={{ fontWeight: 400 }}>
              „{program.quote.text}"
            </motion.blockquote>
            <motion.cite variants={fadeInUp} className="block mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9962A] not-italic">
              — {program.quote.author}
            </motion.cite>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-[#E8E4DD]/50 overflow-hidden"
          >
            <div className="h-1 bg-gradient-to-r from-[#C9962A] via-[#F2D4A8] to-[#C9962A]" />
            <div className="p-1">
              <iframe
                src="https://app.zenamu.com/tergarczechia?view=schedule"
                width="100%"
                height="800"
                frameBorder="0"
                title="Zenamu Rozvrh"
                className="w-full h-[800px] rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SUPPORT — WARM DARK ═══════ */}
      <section className="py-28 md:py-36 text-white relative overflow-hidden isolate">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&h=800&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1C2B3A]/85 bg-gradient-to-br from-[#1C2B3A]/90 via-[#243447]/85 to-[#0f1a24]/90" />
        </div>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#C9962A]/10 rounded-full blur-[120px]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container-custom relative z-10 text-center max-w-3xl"
        >
          <Heart className="w-10 h-10 text-[#C9962A] mx-auto mb-8 opacity-70" strokeWidth={1} />
          <h2 className="text-3xl md:text-5xl font-heading mb-6 tracking-tight" style={{ fontWeight: 600 }}>
            {support.title}
          </h2>
          <p className="text-lg md:text-xl text-white/55 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
            {support.text}
          </p>

          <motion.a
            href={support.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 bg-[#C9962A] text-white px-10 py-5 rounded-full font-semibold tracking-wider shadow-[0_0_40px_-10px_rgba(201,150,42,0.4)] hover:shadow-[0_0_60px_-10px_rgba(201,150,42,0.6)] transition-shadow duration-500"
          >
            {support.buttonText}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </section>

      {/* ═══════ GROUPS MAP ═══════ */}
      <section className="py-24 md:py-32 bg-[#FAF8F4] relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="order-2 lg:order-1"
            >
              <motion.span variants={fadeInUp} className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9962A] mb-4">
                Komunita
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-heading text-[#1C2B3A] mb-6 tracking-tight" style={{ fontWeight: 600 }}>
                {groups.title}
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-[#2D3748]/60 mb-8 leading-relaxed font-light">
                {groups.text}
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/skupiny"
                  className="inline-flex items-center gap-2 bg-[#C9962A] text-white px-6 py-3 rounded-full font-semibold text-sm tracking-wide hover:shadow-lg transition-all duration-300"
                >
                  Najít skupinu <ArrowRight size={14} />
                </Link>
                <a
                  href={`mailto:${groups.email}`}
                  className="inline-flex items-center gap-2 border border-[#1C2B3A]/15 text-[#1C2B3A] px-6 py-3 rounded-full font-medium text-sm hover:border-[#C9962A]/40 transition-colors"
                >
                  <Mail size={14} /> {groups.email}
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-square max-w-[480px] mx-auto bg-white rounded-3xl shadow-lg border border-[#E8E4DD]/50 p-8 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full max-w-[400px] max-h-[280px]">
                  <svg viewBox="0 0 500 300" className="w-full h-full">
                    <path
                      d="M40,140 L70,100 L120,80 L200,50 L300,60 L400,100 L460,150 L420,220 L320,250 L200,240 L100,220 L40,140 Z"
                      fill="#F4F1EC"
                      stroke="#E8E4DD"
                      strokeWidth="1.5"
                    />
                  </svg>
                  {groups.mapLocations.map((loc: { name: string; top: string; left: string; link: string }, i: number) => (
                    <motion.a
                      key={i}
                      href={loc.link}
                      className="absolute group/pin flex flex-col items-center cursor-pointer z-10"
                      style={{ top: loc.top, left: loc.left }}
                      whileHover={{ scale: 1.15 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.12, type: "spring" }}
                    >
                      <div className="relative">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9962A] opacity-40" />
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#C9962A] border-2 border-white shadow-md" />
                      </div>
                      <span className="absolute top-5 text-[9px] font-semibold uppercase tracking-wider text-[#1C2B3A] bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm opacity-0 group-hover/pin:opacity-100 transition-all duration-300 translate-y-1 group-hover/pin:translate-y-0 whitespace-nowrap">
                        {loc.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
                <p className="absolute bottom-5 right-5 text-[9px] text-[#2D3748]/20 uppercase tracking-widest font-semibold">
                  Tergar ČR
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ COMMUNITY IMAGE STRIP ═══════ */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[communityImage, mingyurWavingImage, communityImage, mingyurWavingImage].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="aspect-[3/2] overflow-hidden"
            >
              <img src={img} alt="Tergar komunita" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
