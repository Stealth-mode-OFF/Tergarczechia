import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Play, MapPin, Mail, ExternalLink, Calendar } from 'lucide-react';
import { content } from '@/data/content';
import mingyurWavingImage from 'figma:asset/72312fce0245d3b51ee86da6f9a6003167a8e1e2.png'; // Using Rinpoche image for Bio

export function HomePage() {
  const { slider, quote1, rinpoche, support, program, groups } = content.home;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slider.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slider.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SLIDER */}
      <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
        {slider.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-[10000ms] ease-out scale-105 hover:scale-110"
            />
            
            {/* Content */}
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
              <div className="max-w-4xl animate-fadeInUp">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading leading-tight drop-shadow-lg">
                  {slide.text}
                </h1>
                {slide.subtext && (
                  <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-md">
                    {slide.subtext}
                  </p>
                )}
                {/* Optional CTA if needed later, but not requested now */}
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-2"
        >
          <ChevronLeft size={48} />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/50 hover:text-white transition-colors p-2"
        >
          <ChevronRight size={48} />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slider.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. QUOTE 1 */}
      <section className="py-24 bg-white text-center px-4">
        <div className="container-custom max-w-4xl">
          <blockquote className="font-serif-quote text-2xl md:text-4xl text-tergar-blue leading-relaxed italic mb-8">
            „{quote1.text}”
          </blockquote>
          <cite className="text-sm font-bold uppercase tracking-widest text-tergar-gold not-italic">
            — {quote1.author}
          </cite>
        </div>
      </section>

      {/* 3. RINPOCHE BIO */}
      <section id="o-nas" className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-tergar-blue/5 translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              <img 
                src={mingyurWavingImage} 
                alt={rinpoche.title} 
                className="w-full shadow-lg filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Text */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-tergar-blue font-heading">{rinpoche.title}</h2>
              <div className="w-20 h-1 bg-tergar-gold" />
              <p className="text-lg text-space-blue/80 leading-relaxed font-light">
                {rinpoche.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SUPPORT */}
      <section className="py-24 bg-tergar-blue text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-tergar-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-8 font-heading">{support.title}</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed font-light">
            {support.text}
          </p>
          <a 
            href={support.buttonLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-tergar-gold text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-tergar-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {support.buttonText} <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* 5. PROGRAM (ZENAMU) */}
      <section id="program" className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-tergar-blue mb-8 font-heading">{program.title}</h2>
            <blockquote className="font-serif-quote text-xl md:text-2xl text-space-blue/60 italic mb-4">
              „{program.quote.text}”
            </blockquote>
            <cite className="text-xs font-bold uppercase tracking-widest text-tergar-gold not-italic">
              — {program.quote.author}
            </cite>
          </div>

          {/* Zenamu Widget Placeholder/Iframe */}
          <div className="w-full bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden min-h-[600px]">
             <iframe 
               src="https://app.zenamu.com/tergarczechia?view=schedule" 
               width="100%" 
               height="800" 
               frameBorder="0"
               title="Zenamu Rozvrh"
               className="w-full h-[800px]"
             />
          </div>
        </div>
      </section>

      {/* 6. GROUPS (MAP) */}
      <section id="skupiny" className="py-24 bg-gray-50 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-tergar-blue mb-8 font-heading">{groups.title}</h2>
              <p className="text-lg text-space-blue/80 mb-8 leading-relaxed">
                {groups.text}
              </p>
              <a 
                href={`mailto:${groups.email}`} 
                className="inline-flex items-center gap-2 text-tergar-blue font-bold border-b-2 border-tergar-gold pb-1 hover:text-tergar-gold transition-colors"
              >
                <Mail size={18} />
                {groups.email}
              </a>
            </div>

            {/* Interactive Map Visualization */}
            <div className="order-1 lg:order-2 relative h-[400px] w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex items-center justify-center overflow-hidden group">
               {/* Simplified CZ Map SVG Representation */}
               <div className="relative w-full h-full max-w-[500px] max-h-[300px]">
                 {/* Better Abstract Shape for CZ */}
                 <svg viewBox="0 0 500 300" className="w-full h-full drop-shadow-md text-gray-200 fill-current">
                    <path d="M40,140 L70,100 L120,80 L200,50 L300,60 L400,100 L460,150 L420,220 L320,250 L200,240 L100,220 L40,140 Z" />
                 </svg>
                 
                 {/* Locations */}
                 {groups.mapLocations.map((loc, i) => (
                   <a 
                     key={i} 
                     href={loc.link}
                     className="absolute group/pin flex flex-col items-center gap-2 transition-transform hover:scale-110 hover:z-10"
                     style={{ top: loc.top, left: loc.left }}
                   >
                     <div className="w-4 h-4 bg-tergar-blue rounded-full ring-4 ring-tergar-blue/20 animate-pulse-slow group-hover/pin:ring-tergar-gold/30 group-hover/pin:bg-tergar-gold transition-colors" />
                     <span className="bg-white px-3 py-1 rounded shadow text-xs font-bold uppercase tracking-wider text-space-blue opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap -translate-y-1">
                       {loc.name}
                     </span>
                   </a>
                 ))}
               </div>
               
               <p className="absolute bottom-4 right-4 text-[10px] text-gray-300 uppercase tracking-widest font-bold">
                 Mapa skupin Tergar ČR
               </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
