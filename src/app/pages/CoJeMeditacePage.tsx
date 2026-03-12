import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Zap, Sparkles } from 'lucide-react';
import mingyurPortrait from 'figma:asset/d0b3d5641727b1f2f947c8f27ae30b24d450fbdf.png';

export function CoJeMeditacePage() {
  return (
    <div className="min-h-screen pt-[90px]">
      
      {/* HERO SECTION */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-label text-tergar-gold mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">Základy praxe</span>
            <h1 className="text-editorial-h1 mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
              Co je meditace?
            </h1>
            <p className="text-xl md:text-2xl text-muted-gray font-light leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 text-balance">
              Mnoho lidí si myslí, že meditace znamená vyprázdnit mysl, zastavit myšlenky nebo dosáhnout nějakého zvláštního stavu klidu. <br className="hidden md:block"/>
              <span className="text-deep-charcoal font-medium">Ve skutečnosti je to mnohem jednodušší.</span>
            </p>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tergar-blue/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* MONKEY MIND SECTION */}
      <section className="py-24 bg-soft-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
               <div className="aspect-square rounded-[3rem] overflow-hidden bg-[#EAEAEA] relative z-10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700">
                 {/* Abstract visual representing 'Monkey Mind' - perhaps a chaotic but soft pattern or the portrait */}
                  <img src={mingyurPortrait} alt="Monkey Mind" className="w-full h-full object-cover scale-110 opacity-90" />
                  <div className="absolute inset-0 bg-deep-charcoal/10 mix-blend-multiply" />
               </div>
               <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-tergar-gold/20 rounded-full blur-2xl" />
            </div>

            <div>
              <h2 className="text-editorial-h2 mb-8">Opičí mysl</h2>
              <div className="space-y-6 text-lg text-muted-gray font-light leading-relaxed">
                <p>
                  Mingjur Rinpočhe často používá termín "Opičí mysl". Naše mysl je jako opice, která neustále skáče z větve na větev. Plánuje, vzpomíná, soudí, bojí se budoucnosti.
                </p>
                <p>
                  Většina z nás se snaží tuto opici spoutat, porazit ji nebo ji uspat. Ale to nikdy nefunguje. Čím více se snažíme myšlenky potlačit, tím jsou hlasitější.
                </p>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-divider-gray/30 mt-8">
                  <h3 className="font-serif text-xl text-deep-charcoal mb-4">Tajemství meditace</h3>
                  <p className="italic text-deep-charcoal/80">
                    "Nemusíte opici vyhazovat. Stačí, když jí dáte práci. Nejjednodušší práce pro opičí mysl je vnímání dechu."
                  </p>
                  <p className="text-sm text-tergar-blue font-bold mt-4 uppercase tracking-wider">— Mingjur Rinpočhe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-editorial-h2 mb-6">Tři pilíře praxe</h2>
            <p className="text-muted-gray text-xl font-light">
              Meditace není jen sezení na polštáři. Je to trénink mysli, který staví na třech klíčových kvalitách.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: 'Uvědomění', 
                desc: 'Schopnost vědět, co se děje v přítomném okamžiku. Bez souzení, bez snahy něco měnit. Prosté "vědění".' 
              },
              { 
                icon: Heart, 
                title: 'Soucit', 
                desc: 'Otevření srdce sobě i druhým. Přijetí našich emocí a nedostatků s laskavostí namísto kritiky.' 
              },
              { 
                icon: Brain, 
                title: 'Moudrost', 
                desc: 'Vhled do toho, jak věci skutečně existují. Rozpoznání, že nic není pevné a neměnné, což přináší svobodu.' 
              }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-[2.5rem] bg-soft-white hover:bg-deep-charcoal transition-colors duration-500 cursor-default">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-tergar-gold mb-8 shadow-sm group-hover:bg-white/10 group-hover:text-tergar-gold transition-colors">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-deep-charcoal group-hover:text-white mb-4 transition-colors">{item.title}</h3>
                <p className="text-muted-gray group-hover:text-white/70 font-light leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCIENCE SECTION */}
      <section className="py-24 bg-deep-charcoal text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tergar-blue/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
             <div className="lg:col-span-7">
               <span className="text-tergar-gold font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Neurověda</span>
               <h2 className="text-editorial-h2 text-white mb-8">
                 Měníme svůj mozek
               </h2>
               <div className="space-y-6 text-lg text-white/70 font-light leading-relaxed">
                 <p>
                   Díky neuroplasticitě víme, že náš mozek není fixní. Každá myšlenka, každá emoce vytváří neurální dráhy. Meditace je způsob, jak vědomě formovat tyto dráhy směrem ke štěstí a odolnosti.
                 </p>
                 <p>
                   Výzkumy s Mingjurem Rinpočhem ukázaly, že dlouhodobí meditující mají zvýšenou aktivitu v oblastech mozku spojených s pozitivními emocemi a regulací stresu.
                 </p>
               </div>
               <div className="mt-10 flex gap-4">
                 <Link to="/programy" className="btn-primary !bg-white !text-deep-charcoal hover:!bg-tergar-blue hover:!text-white hover:!border-tergar-blue border-transparent">
                   Začít s tréninkem
                 </Link>
               </div>
             </div>
             
             <div className="lg:col-span-5 relative">
               <div className="aspect-[4/5] rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-tergar-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Sparkles size={64} className="text-tergar-gold mb-6 opacity-80" strokeWidth={1} />
                  <p className="font-serif text-2xl text-white mb-2">"Štěstí je dovednost."</p>
                  <p className="text-white/50 text-sm uppercase tracking-wider">Richard Davidson, Neurovědec</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="section-padding bg-soft-white text-center">
        <div className="container-custom">
          <h2 className="text-editorial-h2 mb-12">Jak začít?</h2>
          <div className="inline-flex flex-col md:flex-row gap-6">
            <Link to="/programy" className="group flex items-center gap-4 bg-white p-6 pr-10 rounded-full hover:shadow-xl transition-all duration-300 border border-transparent hover:border-tergar-gold/30">
              <div className="w-12 h-12 rounded-full bg-tergar-blue/10 flex items-center justify-center text-tergar-blue font-bold text-xl group-hover:scale-110 transition-transform">1</div>
              <div className="text-left">
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-gray">Online kurz</span>
                <span className="block font-serif text-xl text-deep-charcoal">Radost ze života</span>
              </div>
              <ArrowRight className="ml-auto text-muted-gray group-hover:text-tergar-gold group-hover:translate-x-1 transition-all" />
            </Link>

            <Link to="/komunita" className="group flex items-center gap-4 bg-white p-6 pr-10 rounded-full hover:shadow-xl transition-all duration-300 border border-transparent hover:border-tergar-gold/30">
              <div className="w-12 h-12 rounded-full bg-tergar-gold/10 flex items-center justify-center text-tergar-gold font-bold text-xl group-hover:scale-110 transition-transform">2</div>
              <div className="text-left">
                <span className="block text-xs font-bold uppercase tracking-wider text-muted-gray">Komunita</span>
                <span className="block font-serif text-xl text-deep-charcoal">Najít skupinu</span>
              </div>
              <ArrowRight className="ml-auto text-muted-gray group-hover:text-tergar-gold group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
