// All pages for Tergar Česká republika - Vadžrajánová online platforma
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Mail, Users, BookOpen, Video, Star, Heart, CheckCircle2 } from 'lucide-react';
import communityImage from 'figma:asset/ee3557312d962ff84207c71d88a25a1563aea613.png'; // World/People illustration
import mingyurPortrait from 'figma:asset/d0b3d5641727b1f2f947c8f27ae30b24d450fbdf.png'; // New High Quality Portrait

export function CestaTergarPage() {
  const courses = [
    {
      title: 'Plány probuzení',
      year: '2025–26',
      desc: 'V tomto devítiměsíčním imerzním kurzu prozkoumáme základní principy neboli „plány“ vadžrajánové praxe. Odhalíme, jak i ty nejnáročnější emoce a překážky mohou být ve skutečnosti palivem pro probuzení. Kurz vrcholí hlubokou praxí sebeosvobození.',
      teachers: 'S Mingjurem Rinpočhem, Robertem Thurmanem a Lamou Shenpen Hookham',
      start: 'Začínáme v srpnu 2025',
      active: true,
    },
    {
      title: 'Buddhistická psychologie',
      year: '2024–25',
      desc: 'Abhidharma je buddhistická věda o mysli a realitě. Kurz nabízí živé webináře a studium Mingjurova Rinpočheho textu „Neposkvrněná prajňá“. Naučíte se používat analytickou meditaci k vykořenění utrpení a pochopení fungování vlastní mysli.',
      teachers: 'S Mingjurem Rinpočhem, Danielem Aitkenem a Josephem Goldsteinem',
    },
    {
      title: 'Mahámudra: Píseň realizace',
      year: '2023–24',
      desc: 'Mahámudra je považována za nejpřímější cestu k probuzení v tradici Kagyu. Budeme studovat kořenové verše Mahámudry Gangy od Tilopy, které nám hravým a hlubokým způsobem pomohou objevit naši pravou přirozenost.',
      teachers: 'S Mingjurem Rinpočhem, Elizabeth Callahan a Karlem Brunnhölzlem',
    },
    {
      title: 'Srdce tantry',
      year: '2022–23',
      desc: 'Prozkoumejte fáze rozvoje a završení vadžrajány. Tantra zde není chápána jako něco sexuálního, ale jako cesta ovoce – rozpoznání, že osvícení není v budoucnosti, ale je přítomno tady a teď. Naučíte se pracovat s imaginací a jemným tělem.',
      teachers: 'S Džecunmou Tenzin Palmo a Coknji Rinpočhem',
    },
    {
      title: 'Cesta bódhisattvy',
      year: '2021–22',
      desc: 'Jak zůstat trpělivý v těžkých časech? Jak pomáhat druhým a nevyhořet? Hluboké studium Šántidevova klasického textu s praktickými instrukcemi pro moderní život. Zasejeme semínko odvahy a soucitu, které časem poroste.',
      teachers: 'Hloubková učení Šántidevy',
    },
    {
      title: 'Dzogčhen: Tři slova',
      year: '2020–21',
      desc: 'Od Garaba Dordže k Mingjurovi Rinpočhemu: krok za krokem k rozpoznání čisté bdělosti. Dzogčhen („Velká dokonalost“) je přímá cesta k odhalení naší původní moudrosti, která je vždy přítomná, ale často přehlížená.',
      teachers: 'Podstata dzogčhenu',
    },
  ];

  return (
    <div className="min-h-screen pt-[90px] bg-soft-white">
      <section className="bg-warm-sand/30 section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 to-white/80 pointer-events-none" />
        <div className="container-custom relative z-10">
          <span className="text-label text-tergar-gold mb-4 block">Archiv moudrosti</span>
          <h1 className="text-editorial-h1 mb-8">
            Nadčasová moudrost
          </h1>
          <p className="text-xl text-muted-gray max-w-2xl mx-auto font-light leading-relaxed text-balance">
            Kompletní cesta od prvních kroků na buddhistické stezce až po pokročilá stádia vadžrajánové praxe. Přenášíme živou linii přímo k vám.
          </p>
        </div>
      </section>

      <div className="container-custom py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {courses.map((course, i) => (
            <div
              key={i}
              className={`group p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden ${
                course.active 
                  ? 'bg-white shadow-xl shadow-tergar-gold/5 border border-tergar-gold/20' 
                  : 'bg-warm-sand/20 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 border border-transparent'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                 <span className={`text-xs font-bold uppercase tracking-[0.2em] ${course.active ? 'text-tergar-blue' : 'text-muted-gray/60'}`}>
                  {course.year}
                </span>
                {course.active && (
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-tergar-gold bg-tergar-gold/10 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-tergar-gold animate-pulse" />
                    {course.start}
                  </span>
                )}
              </div>
              
              <h2 className="text-3xl font-serif mb-4 text-deep-charcoal group-hover:text-tergar-blue transition-colors leading-tight">
                {course.title}
              </h2>
              
              <p className="text-muted-gray leading-relaxed mb-8 text-[15px] font-light">
                {course.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-deep-charcoal/5 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <p className="text-xs text-muted-gray/80 italic font-medium max-w-[70%]">{course.teachers}</p>
                
                <Link
                  to="/kontakt"
                  className={`inline-flex items-center text-sm font-semibold transition-colors ${course.active ? 'text-tergar-blue' : 'text-deep-charcoal group-hover:text-tergar-gold'}`}
                >
                  Prozkoumat <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProgramyPage() {
  const levels = [
    { title: 'Úroveň 1: Příprava na praxi', subtitle: 'Cesta osvobození', duration: '6 týdnů', icon: '🌱', desc: 'Čtyři myšlenky, které obracejí mysl k dharmě, a uvedení do povahy mysli (klid, pohyb, vědomí).' },
    { title: 'Úroveň 2: Útočiště', subtitle: 'Cesta osvobození', duration: '4 týdny', icon: '🏠', desc: 'Vnější a vnitřní útočiště. Rozpoznání, že mysl je prázdnota. Očista a praxe.' },
    { title: 'Úroveň 3: Bódhičitta', subtitle: 'Cesta osvobození', duration: '4 týdny', icon: '❤️', desc: 'Altruistická motivace stát se plně realizovaným buddhou pro dobro všech bytostí.' },
    { title: 'Úroveň 4: Guru jóga', subtitle: 'Cesta osvobození', duration: '4 týdny', icon: '🙏', desc: 'Práce s principem gurua, synchronicitou a oddaností jako bránou k rozpoznání.' },
    { title: 'Úroveň 5: Sádhana', subtitle: 'Cesta osvobození', duration: '4 týdny', icon: '📿', desc: 'Struktura sádhany, mantry, mudry a sjednocení fáze rozvoje a završení.' },
    { title: 'Pokročilé: Mahámudra & Dzogčhen', subtitle: 'Imerze', duration: 'Průběžné', icon: '🏔️', desc: 'Přímé uvedení do podstaty mysli a stabilizace tohoto rozpoznání.' },
  ];

  return (
    <div className="min-h-screen pt-[90px]">
      <section className="bg-soft-white section-padding text-center relative">
        <div className="container-custom">
           <span className="text-label text-tergar-blue mb-4 block">Kurikulum</span>
          <h1 className="text-editorial-h1 mb-8">
            Cesta osvobození
          </h1>
          <p className="text-xl text-muted-gray max-w-2xl mx-auto font-light leading-relaxed text-balance">
            V tradici Mingyura Rinpočheho se postupuje krok za krokem. To zajišťuje, že student je připraven na další úroveň učení.
          </p>
        </div>
      </section>

      <div className="container-custom pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {levels.map((level, i) => (
            <div
              key={i}
              className="group bg-white p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-tergar-blue/5 border border-divider-gray/50 hover:border-transparent relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-125 transition-all text-4xl grayscale group-hover:grayscale-0">
                {level.icon}
              </div>
              
              <div className="w-12 h-12 border border-tergar-gold/30 text-tergar-gold rounded-full flex items-center justify-center mb-8 font-serif text-xl bg-tergar-gold/5">
                {i + 1}
              </div>
              
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-gray/60 mb-2 block group-hover:text-tergar-blue transition-colors">
                {level.subtitle}
              </span>
              
              <h3 className="text-2xl font-serif mb-4 text-deep-charcoal group-hover:text-tergar-blue transition-colors">
                {level.title.split(':')[0]}
              </h3>

              <p className="text-sm text-muted-gray font-light leading-relaxed mb-8 flex-grow">
                {level.desc}
              </p>
              
              <div className="text-sm text-muted-gray/80 border-t border-dashed border-divider-gray pt-4 flex justify-between items-center group-hover:text-deep-charcoal transition-colors mt-auto">
                 <span>Délka: <span className="font-medium">{level.duration}</span></span>
                 <ArrowRight size={14} className="text-tergar-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Live Sessions Info - Clean Layout */}
        <div className="bg-deep-charcoal text-white rounded-[3rem] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-tergar-blue/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tergar-gold/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-20 relative z-10">
              <span className="text-tergar-gold font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Podpora sanghy</span>
              <h2 className="text-editorial-h2 mb-6 text-white">Obohaťte své studium</h2>
              <p className="text-white/70 font-light text-lg leading-relaxed mb-10 text-balance">
                Samostudium je důležité, ale spojení s komunitou je klíčové. Připojte se k živým relacím, ptejte se a meditujte společně.
              </p>
              <Link to="/udalosti" className="btn-primary !bg-white !border-white !text-deep-charcoal hover:!bg-tergar-blue hover:!text-white hover:!border-tergar-blue">
                Kalendář událostí
              </Link>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-12 lg:p-20 h-full border-l border-white/5 grid grid-cols-1 gap-4 content-center">
               {[
                 { icon: Heart, title: 'Heart-to-Heart', time: '1x měsíčně (středa)', desc: 'Intimní a srdečná setkání pro zkoumání učení a otázky.' },
                 { icon: Users, title: 'Praktické relace', time: 'Týdně', desc: '30minutová vedená meditace Nektaru cesty s průvodci Tergaru.' },
                 { icon: BookOpen, title: 'Dharma Geek', time: '1x měsíčně', desc: 'Podnětná setkání ke studiu tradičních textů a jejich integraci.' },
                 { icon: Video, title: 'Webináře s lamy', time: 'Měsíčně', desc: 'Speciální události a rozhovory s učiteli linie.' }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-start gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-tergar-gold group-hover:scale-110 transition-transform mt-1">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white group-hover:text-tergar-gold transition-colors mb-1">{item.title}</h4>
                      <p className="text-xs text-white/40 uppercase tracking-wide mb-2">{item.time}</p>
                      <p className="text-sm text-white/70 font-light leading-snug">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KomunitaPage() {
  return (
    <div className="min-h-screen pt-[90px]">
      <section className="bg-warm-sand section-padding text-center">
        <div className="container-custom">
           <span className="text-label text-tergar-gold mb-4 block">Sangha</span>
          <h1 className="text-editorial-h1 mb-8">
            Lineage Society
          </h1>
          <p className="text-xl text-muted-gray max-w-2xl mx-auto font-light leading-relaxed text-balance">
            Připojte se k živé linii. Tergar komunita nabízí bezpečné prostředí pro sdílení, učení a vzájemnou podporu na cestě.
          </p>
        </div>
      </section>

      <div className="container-custom py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="order-2 lg:order-1 relative">
             <div className="bg-[#E1E5EC] aspect-square rounded-[3rem] p-12 flex items-center justify-center relative z-10">
                <img
                  src={communityImage}
                  alt="Global Community"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
             </div>
             {/* Decorative blob behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-tergar-blue/5 rounded-full blur-3xl -z-0" />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-editorial-h2">
              Síla skupiny
            </h2>
            <div className="space-y-6 text-lg text-muted-gray font-light leading-relaxed">
              <p>
                Uplynulo dvacet šest století od dob Buddhy a miliony lidí následovaly jeho příklad. Učení byla předávána z generace na generaci, takže teď, přímo tady, máme k dispozici tuto informaci a zkušenost.
              </p>
              <p>
                Můžeme praktikovat cestu meditace stejným způsobem a stylem jako Buddha a předkové naší linie. Máme přenos cesty, jak praktikovat, abychom překonali úzkost, klam a neurózu. Máme to a můžeme to dokázat.
                <span className="block mt-4 text-sm italic text-tergar-gold">— Chögyam Trungpa Rinpočhe</span>
              </p>
            </div>
            
            <div className="pt-8 grid gap-6">
              {[
                { icon: Users, title: 'Týdenní setkání', desc: 'Vedené meditace Nektaru cesty' },
                { icon: BookOpen, title: 'Studijní skupiny', desc: 'Dharma Geek a diskuse nad texty' },
                { icon: Heart, title: 'Z Bdělého Srdce', desc: 'Intimní kruhy sdílení' }
              ].map((item, i) => (
                 <div key={i} className="flex items-start gap-5">
                    <div className="mt-1 text-tergar-blue bg-tergar-blue/5 p-3 rounded-2xl"><item.icon size={20} strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="font-serif text-xl text-deep-charcoal mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-gray font-light">{item.desc}</p>
                    </div>
                 </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] p-12 lg:p-20 text-center max-w-4xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-divider-gray/30">
          <Star className="w-12 h-12 text-tergar-gold mx-auto mb-6 opacity-80" strokeWidth={1} />
          <h3 className="text-3xl font-serif text-deep-charcoal mb-6">
            Staňte se členem
          </h3>
          <p className="text-muted-gray mb-10 text-lg font-light max-w-lg mx-auto">
            Získejte přístup k 25+ kurzům pro samostudium, týdenním živým relacím a aplikaci Vajrayana Online.
          </p>
          <Link to="/kontakt" className="btn-primary">
            Vyzkoušet na 10 dní zdarma
          </Link>
        </div>
      </div>
    </div>
  );
}

export function UdalostiPage() {
  const events = [
    {
      title: 'Heart-to-Heart: Intimní setkání',
      date: 'Středa 10:00 US ET',
      type: 'Diskuse',
      desc: 'Intimní, angažovaná a srdečná setkání pro zkoumání učení a kladení otázek.',
      freq: '1x měsíčně'
    },
    {
      title: 'Praxe Nektaru cesty',
      date: 'Týdně',
      type: 'Meditace',
      desc: 'Živé týdenní 30minutové vedené meditace Nektaru cesty vedené průvodcem Tergaru.',
    },
    {
      title: 'Dharma Geek',
      date: 'Čtvrtek',
      type: 'Studium',
      desc: 'Podnětná setkání ke studiu tradičních textů a integraci jejich moudrosti do našeho života.',
      freq: '1x měsíčně'
    },
    {
      title: 'Speciální webináře',
      date: 'Dle oznámení',
      type: 'Webinář',
      desc: 'Měsíční webináře s lamy Tergaru a významnými buddhistickými učiteli.',
      freq: 'Měsíčně'
    },
  ];

  return (
    <div className="min-h-screen pt-[90px]">
      <section className="bg-warm-sand section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="container-custom relative z-10">
          <span className="text-label text-tergar-blue mb-4 block">Kalendář</span>
          <h1 className="text-editorial-h1 mb-8">
            Živá setkání
          </h1>
          <p className="text-xl text-muted-gray max-w-2xl mx-auto font-light leading-relaxed">
            Obohaťte své samostudium připojením k našim živým relacím a spojením s komunitou Vajrayana Online.
          </p>
        </div>
      </section>

      <div className="container-custom py-24">
        <div className="space-y-6 max-w-5xl mx-auto">
          {events.map((event, i) => (
            <div
              key={i}
              className="group bg-white p-8 md:p-10 rounded-[2rem] hover:shadow-xl hover:shadow-tergar-blue/5 transition-all duration-300 flex flex-col md:flex-row gap-8 items-start md:items-center border border-divider-gray/20 hover:border-transparent"
            >
              <div className="min-w-[200px] flex-shrink-0">
                <span className="inline-block text-tergar-blue text-[10px] font-bold uppercase tracking-wider mb-3 bg-tergar-blue/5 px-3 py-1 rounded-full">{event.type}</span>
                <div className="flex items-center gap-3 text-deep-charcoal font-serif text-xl">
                   <Calendar size={20} className="text-tergar-gold" strokeWidth={1.5} />
                   {event.date}
                </div>
                {event.freq && <div className="text-sm text-tergar-gold/80 pl-8 mt-1 font-medium">• {event.freq}</div>}
              </div>
              
              <div className="flex-grow md:border-l md:border-divider-gray/30 md:pl-8">
                <h3 className="text-2xl font-serif text-deep-charcoal mb-2 group-hover:text-tergar-blue transition-colors">{event.title}</h3>
                <p className="text-muted-gray text-sm font-light leading-relaxed max-w-lg">{event.desc}</p>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                <Link to="/kontakt" className="btn-secondary !py-3 !px-6 text-sm whitespace-nowrap w-full justify-center group-hover:bg-deep-charcoal group-hover:text-white">
                  Rezervovat místo
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-warm-sand/30 p-12 rounded-[2rem] max-w-3xl mx-auto">
           <h4 className="font-serif text-xl mb-4 text-deep-charcoal">Jste členem Vadžrajána Online?</h4>
           <p className="text-muted-gray mb-8 font-light">Máte automatický přístup ke všem těmto setkáním zdarma.</p>
           <Link to="/kontakt" className="text-deep-charcoal font-medium border-b border-deep-charcoal/30 hover:border-tergar-gold hover:text-tergar-gold transition-all pb-1">
             Přihlásit se do členské sekce
           </Link>
        </div>
      </div>
    </div>
  );
}

export function ONasPage() {
  return (
    <div className="min-h-screen pt-[90px]">
      <section className="bg-warm-sand section-padding text-center">
        <div className="container-custom">
           <span className="text-label text-tergar-gold mb-4 block">Učitel</span>
          <h1 className="text-editorial-h1 mb-8">
            Yongey Mingyur Rinpočhe
          </h1>
          <p className="text-xl text-muted-gray max-w-2xl mx-auto font-light leading-relaxed text-balance">
            Mistr meditace s výjimečným darem propojovat starodávnou moudrost s moderním životem. Autor bestsellerů New York Times.
          </p>
        </div>
      </section>

      <div className="container-custom py-24 space-y-32">
        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
           <div className="prose prose-lg text-muted-gray font-light leading-relaxed">
             <p className="mb-8 text-xl text-deep-charcoal font-serif italic">
               "Když se podíváte dovnitř, nenajdete nic pevného, čeho byste se mohli držet. A to je ta nejlepší zpráva, jakou jste kdy mohli slyšet."
             </p>
             <p className="mb-6">
               Narodil se v roce 1975 v himalájském pohraničí mezi Tibetem a Nepálem. Mingjur Rinpočhe je velmi milovaný a uznávaný mistr meditace. Od útlého věku ho přitahoval život v kontemplaci. Mnoho let svého dětství strávil v přísném ústraní.
             </p>
             <p className="mb-6">
               Ve věku sedmnácti let byl pozván, aby se stal učitelem v tříletém meditačním centru svého kláštera, což je pozice, kterou tak mladý lama zastává jen zřídka. Dokončil také tradiční buddhistické vzdělání ve filozofii a psychologii, než založil mnišskou kolej ve svém domovském klášteře v severní Indii.
             </p>
             <p className="mb-6">
               Kromě rozsáhlého výcviku v meditačních a filozofických tradicích tibetského buddhismu se Mingjur Rinpočhe celý život zajímá o západní vědu a psychologii. V roce 2002 byl Rinpočhe a několik dalších dlouholetých meditujících pozváni do Waismanovy laboratoře pro zobrazování mozku a chování na Wisconsinské univerzitě v Madisonu, kde Richard Davidson a další vědci zkoumali účinky meditace na mozek pokročilých meditujících.
             </p>
             <p>
               Výsledky tohoto průlomového výzkumu byly publikovány v mnoha světových publikacích, včetně National Geographic a Time.
             </p>
           </div>
           <div className="space-y-8">
             <div className="relative group">
               <div className="absolute inset-0 bg-tergar-gold/10 transform translate-x-6 translate-y-6 rounded-[3rem] transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4" />
               <img 
                  src={mingyurPortrait} 
                  alt="Mingyur Rinpoche" 
                  className="w-full rounded-[3rem] shadow-2xl relative z-10 grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                />
             </div>
             
             {/* Khenpo Kunga & Cortland Dahl Mini-Bios */}
             <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-divider-gray/40 mt-8">
                <h3 className="font-serif text-xl mb-4 text-deep-charcoal">Další průvodci</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-tergar-blue text-sm uppercase tracking-wide mb-1">Khenpo Kunga</h4>
                    <p className="text-sm text-muted-gray font-light">
                      Senior Tergar lama, který strávil tři roky v ústraní a 11 let studiem na Dzongsar College. Jeho hlavním učitelem je Mingjur Rinpočhe.
                    </p>
                  </div>
                  <div className="border-t border-divider-gray/30 pt-4">
                    <h4 className="font-bold text-tergar-blue text-sm uppercase tracking-wide mb-1">Cortland Dahl, Ph.D.</h4>
                    <p className="text-sm text-muted-gray font-light">
                      Vědec, překladatel a učitel meditace. Předseda Tergar International a autor knihy "A Meditator’s Guide to Buddhism".
                    </p>
                  </div>
                </div>
             </div>
           </div>
        </div>

        {/* Books Grid - Clean Minimalist */}
        <div className="border-t border-divider-gray/30 pt-24">
          <div className="text-center mb-16">
            <span className="text-label text-tergar-blue mb-4 block">Bibliografie</span>
            <h2 className="text-editorial-h2 text-deep-charcoal">Knihy a publikace</h2>
            <p className="text-muted-gray mt-4 font-light max-w-2xl mx-auto">
              Rinpočheho knihy se staly bestsellery a byly přeloženy do více než dvaceti jazyků.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Radost ze života', subtitle: 'Tajemství a věda štěstí', icon: '📖' },
              { title: 'Zamilovaný do světa', subtitle: 'Cesta mnicha skrz bardy života a smrti', icon: '🌍' },
              { title: 'Radostná moudrost', subtitle: 'Přijetí změny a nalezení svobody', icon: '✨' },
              { title: 'Proměna zmatení v jasnost', subtitle: 'Průvodce základními praktikami', icon: '🧘' },
              { title: 'Zidži', subtitle: 'Štěně, které se naučilo meditovat', icon: '🐶' }
            ].map((book, i) => (
              <div key={i} className="group bg-white p-10 text-center rounded-[2rem] hover:shadow-xl hover:shadow-tergar-blue/5 transition-all duration-500 hover:-translate-y-1 cursor-default border border-transparent hover:border-divider-gray/30">
                 <div className="w-20 h-20 bg-[#F5F3EF] mx-auto mb-8 shadow-inner group-hover:shadow-lg transition-all flex items-center justify-center text-3xl rounded-full group-hover:scale-110 duration-500">
                    {book.icon}
                 </div>
                 <h4 className="font-serif text-xl text-deep-charcoal group-hover:text-tergar-blue transition-colors mb-2">{book.title}</h4>
                 <p className="text-xs text-muted-gray uppercase tracking-wider">{book.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function KontaktPage() {
  return (
    <div className="min-h-screen pt-[90px]">
      <section className="bg-deep-charcoal text-white section-padding text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-tergar-blue/20 to-deep-charcoal" />
        {/* Animated Orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-tergar-gold/10 rounded-full blur-[80px] animate-pulse" />
        
        <div className="container-custom relative z-10">
          <span className="text-label text-white/50 mb-4 block">Podpora</span>
          <h1 className="text-editorial-h1 mb-8 text-white">
            Jsme tu pro vás
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed text-balance">
            Máte dotazy k členství, technické problémy nebo hledáte radu k praxi?
          </p>
        </div>
      </section>

      <div className="container-custom py-24 relative -mt-20 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
           <div className="bg-white p-10 lg:p-14 text-center rounded-[2.5rem] shadow-xl shadow-black/5 hover:-translate-y-1 transition-transform duration-300">
             <div className="bg-tergar-gold/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Mail className="text-tergar-gold" size={32} strokeWidth={1.5} />
             </div>
             <h3 className="text-2xl font-serif mb-3 text-deep-charcoal">Obecné dotazy</h3>
             <p className="text-muted-gray mb-8 font-light">Pro informace o komunitě, akcích a studijních skupinách</p>
             <a href="mailto:tergar.czechia@tergar.org" className="text-tergar-blue font-medium hover:text-deep-charcoal transition-colors border-b border-tergar-blue/30 pb-1 text-lg">
               tergar.czechia@tergar.org
             </a>
           </div>

           <div className="bg-white p-10 lg:p-14 text-center rounded-[2.5rem] shadow-xl shadow-black/5 hover:-translate-y-1 transition-transform duration-300">
             <div className="bg-tergar-blue/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="text-tergar-blue" size={32} strokeWidth={1.5} />
             </div>
             <h3 className="text-2xl font-serif mb-3 text-deep-charcoal">Technická podpora</h3>
             <p className="text-muted-gray mb-8 font-light">Pro problémy s online platformou, přihlášením a platbami</p>
             <a href="mailto:podpora@tergar.cz" className="text-tergar-blue font-medium hover:text-deep-charcoal transition-colors border-b border-tergar-blue/30 pb-1 text-lg">
               podpora@tergar.cz
             </a>
           </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-editorial-h2 text-center mb-16 text-deep-charcoal">Časté otázky</h2>
          <div className="space-y-6">
            {[
              { q: 'Musím být buddhista?', a: 'Vůbec ne. Kurzy Tergar jsou otevřeny každému, kdo se zajímá o meditaci a práci s myslí, bez ohledu na vyznání či světonázor.' },
              { q: 'Potřebuji předchozí zkušenosti?', a: 'Rozhodně ne! Naše úvodní kurzy (Radost ze života) jsou navrženy přímo pro úplné začátečníky. Povedeme vás krok za krokem.' },
              { q: 'Proč jsou tam předpoklady pro pokročilé kurzy?', a: 'V tradici Mingyura Rinpočheho se praxe následují krok za krokem. To zajišťuje, že student je připraven na další úroveň učení. Snaha postoupit k pokročilejším úrovním bez předchozí praxe není prospěšná.' },
              { q: 'Jak funguje členství?', a: 'Členství (24 USD/měsíc) zahrnuje přístup k 25+ kurzům, týdenním živým relacím a aplikaci. Nabízíme 10denní zkušební dobu zdarma. Můžete kdykoliv zrušit.' }
            ].map((faq, i) => (
              <div key={i} className="bg-soft-white p-8 rounded-3xl hover:bg-white transition-colors cursor-default">
                <h4 className="font-serif text-xl mb-3 text-deep-charcoal">{faq.q}</h4>
                <p className="text-muted-gray font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
