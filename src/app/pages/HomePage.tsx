import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import skyGradient from 'figma:asset/b4bc420e40f9dd5fde6c9814aa821085502fea35.png';
import mingyurPortrait from 'figma:asset/d0b3d5641727b1f2f947c8f27ae30b24d450fbdf.png';
import keyImage from 'figma:asset/5d8bedd5018a0e234946e59b9209cc53507b8e12.png';
import worldImage from 'figma:asset/ee3557312d962ff84207c71d88a25a1563aea613.png';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 
        HERO SECTION: IMMERSIVE & ATMOSPHERIC
        Concept: "The Sky Mind" - open, boundless, clear.
      */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[90px]">
        {/* Background Layer with Soft Parallax feel */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[20s] ease-in-out scale-105"
          style={{ backgroundImage: `url(${skyGradient})` }}
        />
        
        {/* Soft atmospheric overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-soft-white z-0 pointer-events-none" />

        {/* Content Layer */}
        <div className="relative z-10 container-custom grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content - Editorial Style */}
          <div className="lg:col-span-7 text-center lg:text-left pt-12 lg:pt-0">
            <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-white/40 backdrop-blur-md border border-white/40 mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-tergar-blue/80"></span>
              <span className="text-deep-charcoal text-xs font-bold tracking-[0.2em] uppercase font-heading">Tergar Česká republika</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-8 text-balance drop-shadow-sm leading-[1.1] text-tergar-blue">
              Otevřete svou <br/>
              <span className="italic font-light">přirozenou</span> moudrost.
            </h1>
            
            <p className="text-lg md:text-xl text-deep-charcoal/80 mb-12 max-w-xl font-light leading-relaxed text-balance mx-auto lg:mx-0">
              Nadčasová moudrost pro moderní svět. Kompletní cesta od prvních kroků až k pokročilým stádiím vadžrajány pod vedením Mingyura Rinpočheho.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link to="/programy" className="btn-primary group">
                <span className="mr-2">Začít svou cestu</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Link>
              
              <Link to="/co-je-meditace" className="btn-secondary group !bg-white/60 !backdrop-blur-md !border-white/50">
                <PlayCircle size={20} className="mr-2 text-tergar-gold group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                <span>Co je meditace?</span>
              </Link>
            </div>
          </div>
          
          {/* Visual Anchor - Floating Composition */}
          <div className="hidden lg:block lg:col-span-5 relative animate-in fade-in duration-1000 delay-500">
            <div className="relative z-10 aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-white/60 transform translate-y-8 rotate-1 hover:rotate-0 transition-transform duration-1000 ease-out">
               <img 
                 src={mingyurPortrait} 
                 alt="Mingyur Rinpoche" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/30 to-transparent mix-blend-multiply" />
            </div>
            
            {/* Organic Shapes / Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-white/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-tergar-gold/30 rounded-full blur-2xl animate-pulse delay-700" />
          </div>
        </div>
      </section>

      {/* 
        VALUE PROPOSITION: CLEAN & MINIMAL
        Focus: Readability and "Breathing Room"
      */}
      <section className="section-padding bg-soft-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
             <div className="lg:col-span-5 relative order-2 lg:order-1">
               <div className="aspect-square rounded-[3rem] overflow-hidden relative shadow-lg rotate-[-2deg] hover:rotate-0 transition-all duration-700">
                 <img src={mingyurPortrait} alt="Mingyur Rinpoche Smiling" className="w-full h-full object-cover scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-tr from-tergar-blue/10 to-transparent mix-blend-overlay" />
               </div>
               {/* Decorative Quote Mark */}
               <div className="absolute -top-10 -left-10 text-[200px] leading-none font-heading text-warm-sand/50 select-none">"</div>
             </div>
             
             <div className="lg:col-span-7 order-1 lg:order-2">
               <span className="text-label mb-6 block text-tergar-blue font-heading uppercase tracking-widest text-sm font-bold">Naše filozofie</span>
               <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-balance text-tergar-blue">
                 Meditace není o tom, abychom se <span className="text-tergar-gold italic font-light">zbavili</span> myšlenek.
               </h2>
               <div className="space-y-6 text-lg text-muted-gray font-light leading-relaxed">
                 <p>
                   Můžeme praktikovat cestu meditace stejným stylem jako Buddha a předkové naší linie. Máme přenos cesty, jak praktikovat, abychom překonali úzkost, klam a neurózu. Máme to a můžeme to dokázat.
                 </p>
                 <p>
                   Mingjur Rinpočhe propojuje osobní zkušenost s moderním vědeckým výzkumem a zpřístupňuje starodávnou moudrost studentům po celém světě.
                 </p>
               </div>
               <div className="mt-10 pt-10 border-t border-divider-gray/50 flex gap-12">
                 <div>
                   <span className="block text-4xl font-heading font-bold text-deep-charcoal mb-1">25+</span>
                   <span className="text-sm text-muted-gray uppercase tracking-wider font-heading">Kurzů pro samostudium</span>
                 </div>
                 <div>
                   <span className="block text-4xl font-heading font-bold text-deep-charcoal mb-1">Live</span>
                   <span className="text-sm text-muted-gray uppercase tracking-wider font-heading">Týdenní relace</span>
                 </div>
               </div>
               <div className="mt-10">
                 <Link to="/o-nas" className="text-deep-charcoal font-medium border-b border-deep-charcoal/30 pb-1 hover:border-tergar-blue hover:text-tergar-blue transition-all inline-flex items-center gap-2 group">
                   Poznat Rinpočheho příběh <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 
        PROGRAMS: DEMATERIALIZED CARDS (SOFT UI)
        No borders, just space and subtle shadows.
      */}
      <section className="section-padding bg-warm-sand/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="mb-4 block text-tergar-gold font-heading uppercase tracking-widest text-sm font-bold">Vzdělávání</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-tergar-blue">Vaše cesta praxe</h2>
              <p className="mt-6 text-muted-gray text-lg font-light">
                Nabízíme vzdělávací cesty vedoucí k certifikaci a hlubokému pochopení. Od základů (Radost ze života) až po pokročilou vadžrajánu.
              </p>
            </div>
            <Link to="/programy" className="btn-secondary !bg-white shadow-sm hover:shadow-md whitespace-nowrap">
              Zobrazit všechny kurzy
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1: Soft & Clean */}
            <Link to="/programy" className="group card-soft p-8 lg:p-10 flex flex-col h-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="mb-8 relative">
                 <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F5F3EF] flex items-center justify-center mb-6">
                    <img src={keyImage} alt="Joy of Living" className="w-3/4 h-3/4 object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-sm" />
                 </div>
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-deep-charcoal shadow-sm font-heading">
                   Úvodní
                 </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-deep-charcoal mb-4 group-hover:text-tergar-blue transition-colors">Radost ze života</h3>
              <p className="text-muted-gray mb-8 text-[15px] leading-relaxed flex-grow font-light">
                Odemkněte tajemství a vědu štěstí. Naučte se transformovat obtížné emoce a najít svobodu v každodenním životě.
              </p>
              <div className="flex items-center text-sm font-semibold text-tergar-gold mt-auto group-hover:translate-x-1 transition-transform font-heading">
                Prozkoumat kurz <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/programy" className="group card-soft p-8 lg:p-10 flex flex-col h-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
               <div className="mb-8 relative">
                 <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#EAEAEA] flex items-center justify-center mb-6">
                    {/* Abstract Graphic */}
                    <div className="w-24 h-24 rounded-full border border-white/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                      <Sparkles className="text-white w-8 h-8 opacity-80" strokeWidth={1} />
                    </div>
                 </div>
                 <div className="absolute top-4 right-4 bg-tergar-blue/10 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-tergar-blue font-heading">
                   Pokročilé
                 </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-deep-charcoal mb-4 group-hover:text-tergar-blue transition-colors">Cesta osvobození</h3>
              <p className="text-muted-gray mb-8 text-[15px] leading-relaxed flex-grow font-light">
                Imerzní kurzy Mahámudry, Dzogčhenu a Srdce tantry. Pro ty, kteří chtějí zkoumat podstatu mysli do hloubky.
              </p>
              <div className="flex items-center text-sm font-semibold text-tergar-gold mt-auto group-hover:translate-x-1 transition-transform font-heading">
                Prozkoumat kurz <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>

             {/* Card 3 */}
             <Link to="/komunita" className="group card-soft p-8 lg:p-10 flex flex-col h-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="mb-8 relative">
                 <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#E1E5EC] flex items-center justify-center mb-6">
                    <img src={worldImage} alt="Community" className="w-3/4 h-3/4 object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-sm" />
                 </div>
                 <div className="absolute top-4 right-4 bg-tergar-gold/10 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-tergar-gold font-heading">
                   Komunita
                 </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-deep-charcoal mb-4 group-hover:text-tergar-blue transition-colors">Lineage Society</h3>
              <p className="text-muted-gray mb-8 text-[15px] leading-relaxed flex-grow font-light">
                Připojte se k živým relacím Heart-to-Heart, Dharma Geek a týdenním meditacím. Sangha je klenotem naší cesty.
              </p>
              <div className="flex items-center text-sm font-semibold text-tergar-gold mt-auto group-hover:translate-x-1 transition-transform font-heading">
                Najít skupinu <ArrowRight size={16} className="ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 
        MEMBERSHIP CTA: ELEGANT & TRUSTWORTHY
        Focus: Value over price.
      */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="relative rounded-[3rem] bg-deep-charcoal overflow-hidden px-8 py-24 md:px-24 text-center group">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tergar-blue/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60 group-hover:opacity-80 transition-opacity duration-1000" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tergar-gold/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-60 group-hover:opacity-80 transition-opacity duration-1000" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="text-tergar-gold font-bold tracking-[0.2em] uppercase text-xs mb-6 block font-heading">Členství</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 text-white">
                Váš prostor pro <span className="italic font-light text-white/80">každodenní</span> praxi.
              </h2>
              <p className="text-white/70 text-lg md:text-xl mb-12 font-light leading-relaxed text-balance">
                Získejte neomezený přístup k více než 25 kurzům, týdenním živým relacím a exkluzivní aplikaci Vajrayana Online.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/kontakt" className="btn-primary !py-5 !px-10 text-lg shadow-xl shadow-tergar-gold/20 hover:shadow-tergar-gold/40">
                  Prozkoumat možnosti členství
                </Link>
                <Link to="/programy" className="text-white/80 hover:text-white border-b border-white/20 hover:border-white pb-1 transition-colors">
                  Více o výhodách členství
                </Link>
              </div>
              
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-white/50 border-t border-white/10 pt-10 font-heading">
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-white text-lg font-bold">25+</span>
                  <span>Kurzů pro samostudium</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-white text-lg font-bold">Live</span>
                  <span>Webináře s lamy</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <span className="text-white text-lg font-bold">App</span>
                  <span>Pro iOS a Android</span>
                </div>
                 <div className="flex flex-col gap-2 items-center">
                  <span className="text-white text-lg font-bold">New</span>
                  <span>Obsah každý měsíc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
