import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play, MapPin, Mail, ExternalLink, Calendar, Heart, Globe, Users } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { clsx } from 'clsx';
import { content } from '@/data/content';
import mingyurWavingImage from 'figma:asset/72312fce0245d3b51ee86da6f9a6003167a8e1e2.png';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export function HomePage() {
  const { slider, quote1, rinpoche, support, program, groups } = content.home;
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();

  // Smooth Parallax for Hero Text
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slider.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slider.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);

  return (
    <div className="bg-white overflow-hidden relative">
      
      {/* 1. HERO SECTION - IMMERSIVE CINEMATIC */}
      <section className="relative h-screen w-full overflow-hidden bg-space-blue">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
            <motion.img
              src={slider[currentSlide].image}
              alt="Hero Background"
              className="w-full h-full object-cover"
              animate={{ scale: 1.05 }}
              transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>
        </AnimatePresence>

        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="absolute inset-0 z-20 flex items-center justify-center text-center px-4"
        >
          <div className="max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-8 font-heading leading-[1.1] tracking-tight drop-shadow-2xl">
                  {slider[currentSlide].text}
                </h1>
                {slider[currentSlide].subtext && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="text-xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto drop-shadow-lg font-sans tracking-wide leading-relaxed"
                  >
                    {slider[currentSlide].subtext}
                  </motion.p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Cinematic Slider Controls */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6">
          <button onClick={prevSlide} className="text-white/40 hover:text-white transition-colors hover:scale-110 duration-300">
            <ChevronLeft size={32} strokeWidth={1} />
          </button>
          <div className="flex gap-3">
            {slider.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="relative h-1 w-12 rounded-full overflow-hidden bg-white/20 transition-all hover:bg-white/40"
              >
                {i === currentSlide && (
                  <motion.div 
                    layoutId="activeSlide"
                    className="absolute inset-0 bg-white"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
          <button onClick={nextSlide} className="text-white/40 hover:text-white transition-colors hover:scale-110 duration-300">
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div>
      </section>

      {/* 2. QUOTE SECTION - MINIMALIST PREMIUM */}
      <section className="py-32 bg-white text-center px-4 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-gray-200 to-transparent" />
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="container-custom max-w-4xl"
        >
          <blockquote className="font-heading text-3xl md:text-5xl text-space-blue leading-snug italic mb-10 relative">
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-9xl text-gray-100 font-serif opacity-50">“</span>
            <span className="relative z-10">{quote1.text}</span>
          </blockquote>
          <motion.cite 
            variants={fadeInUp}
            className="block text-xs font-bold uppercase tracking-[0.25em] text-tergar-gold not-italic mt-8"
          >
            — {quote1.author}
          </motion.cite>
        </motion.div>
      </section>

      {/* 3. RINPOCHE BIO - STRICTLY AS REQUESTED */}
      <section id="o-nas" className="py-32 bg-gray-50 overflow-hidden relative">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-tergar-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Image (Parallax Effect) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                 <motion.img 
                  src={mingyurWavingImage} 
                  alt={rinpoche.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-blue/60 to-transparent opacity-60 mix-blend-multiply" />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-tergar-gold/30 rounded-br-3xl -z-10" />
            </motion.div>
            
            {/* Text Content - No extra stats */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-10"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-5xl lg:text-6xl font-bold text-space-blue font-heading tracking-tight mb-6">{rinpoche.title}</h2>
                <div className="w-24 h-[1px] bg-gray-200" />
              </motion.div>
              
              <motion.p variants={fadeInUp} className="text-xl text-space-blue/70 leading-relaxed font-light font-sans">
                {rinpoche.text}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SUPPORT - HIGH END CONVERSION */}
      <section className="py-32 bg-space-blue text-white relative overflow-hidden isolate">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-space-blue via-[#1a2e6b] to-black z-0" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-tergar-blue/20 rounded-full blur-[120px]" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container-custom relative z-10 text-center max-w-4xl"
        >
          <Heart className="w-12 h-12 text-tergar-gold mx-auto mb-8 opacity-80" strokeWidth={1} />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-heading tracking-tight">{support.title}</h2>
          <p className="text-xl md:text-2xl text-white/70 mb-14 leading-relaxed font-light max-w-2xl mx-auto">
            {support.text}
          </p>
          
          <motion.a 
            href={support.buttonLink} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 bg-tergar-gold text-space-blue px-10 py-5 rounded-full font-bold uppercase tracking-widest overflow-hidden shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] transition-shadow hover:shadow-[0_0_60px_-10px_rgba(234,179,8,0.7)]"
          >
            <span className="relative z-10 flex items-center gap-3">
              {support.buttonText} <ArrowRight size={18} />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
          </motion.a>
        </motion.div>
      </section>

      {/* 5. PROGRAM (ZENAMU) - ELEGANT CARD */}
      <section id="program" className="py-32 bg-white relative">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-space-blue mb-10 font-heading tracking-tight">{program.title}</motion.h2>
            <motion.blockquote variants={fadeInUp} className="text-xl md:text-2xl text-space-blue/60 italic font-serif leading-relaxed mb-6">
              „{program.quote.text}”
            </motion.blockquote>
            <motion.cite variants={fadeInUp} className="text-xs font-bold uppercase tracking-widest text-tergar-gold not-italic block">
              — {program.quote.author}
            </motion.cite>
          </motion.div>

          {/* Zenamu Widget Container */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative"
          >
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-tergar-blue via-tergar-gold to-tergar-blue" />
             <div className="p-1">
               <iframe 
                 src="https://app.zenamu.com/tergarczechia?view=schedule" 
                 width="100%" 
                 height="800" 
                 frameBorder="0"
                 title="Zenamu Rozvrh"
                 className="w-full h-[800px] rounded-2xl bg-gray-50/50"
               />
             </div>
          </motion.div>
        </div>
      </section>

      {/* 6. GROUPS (MAP) - CLEAN & CLEAR */}
      <section id="skupiny" className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            {/* Text Content */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              <motion.h2 variants={fadeInUp} className="text-5xl font-bold text-space-blue mb-8 font-heading tracking-tight">{groups.title}</motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-space-blue/70 mb-10 leading-relaxed font-light">
                {groups.text}
              </motion.p>
              <motion.a 
                variants={fadeInUp}
                href={`mailto:${groups.email}`} 
                className="inline-flex items-center gap-3 text-tergar-blue font-bold text-lg group"
              >
                <div className="w-10 h-10 rounded-full bg-tergar-blue/10 flex items-center justify-center group-hover:bg-tergar-blue group-hover:text-white transition-all duration-300">
                   <Mail size={18} />
                </div>
                <span className="border-b border-gray-300 group-hover:border-tergar-blue transition-colors pb-0.5">{groups.email}</span>
              </motion.a>
            </motion.div>

            {/* Map - Premium but Solid Shape */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative h-[500px] w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex items-center justify-center overflow-hidden"
            >
               <div className="relative w-full h-full max-w-[500px] max-h-[300px]">
                 {/* Solid CZ Map Shape */}
                 <svg viewBox="0 0 500 300" className="w-full h-full drop-shadow-lg filter">
                    <path 
                      d="M40,140 L70,100 L120,80 L200,50 L300,60 L400,100 L460,150 L420,220 L320,250 L200,240 L100,220 L40,140 Z" 
                      fill="#e0e7ff" 
                      stroke="white" 
                      strokeWidth="2"
                    />
                 </svg>
                 
                 {/* Locations */}
                 {groups.mapLocations.map((loc, i) => (
                   <motion.a 
                     key={i} 
                     href={loc.link}
                     className="absolute group/pin flex flex-col items-center gap-3 cursor-pointer z-10"
                     style={{ top: loc.top, left: loc.left }}
                     whileHover={{ scale: 1.1 }}
                     initial={{ opacity: 0, scale: 0 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
                   >
                     <div className="relative">
                       <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tergar-gold opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-4 w-4 bg-tergar-blue border-2 border-white shadow-md"></span>
                     </div>
                     
                     <div className="absolute top-6 flex flex-col items-center pointer-events-none">
                       <span className="text-[10px] font-bold uppercase tracking-widest text-space-blue bg-white/90 backdrop-blur px-2 py-1 rounded shadow-sm opacity-0 group-hover/pin:opacity-100 transition-all duration-300 translate-y-2 group-hover/pin:translate-y-0 whitespace-nowrap">
                         {loc.name}
                       </span>
                     </div>
                   </motion.a>
                 ))}
               </div>
               
               <p className="absolute bottom-6 right-6 text-[10px] text-gray-300 uppercase tracking-widest font-bold">
                 Mapa skupin Tergar ČR
               </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
