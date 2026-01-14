// All pages for Tergar Česká republika - Brand Compliant 2024 - FINAL POLISH
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Mail, Users, BookOpen, Video, Star, Heart, CheckCircle2, Youtube, Instagram, Facebook, ExternalLink, Play, Clock, MapPin, Banknote } from 'lucide-react';
import communityImage from 'figma:asset/ee3557312d962ff84207c71d88a25a1563aea613.png';
import vajradharaImage from 'figma:asset/a248c2397f596c63df6208678b6a60bceff14370.png';
import mingyurWavingImage from 'figma:asset/72312fce0245d3b51ee86da6f9a6003167a8e1e2.png';
import lineageTreeImage from 'figma:asset/8a8c65298e950a77370a1c00b20804bd4d6a26d3.png';

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
    <div className="min-h-screen pt-[100px] bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 section-padding relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-tergar-gradient" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="text-left py-12">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-tergar-gold mb-6 block font-heading">Archiv moudrosti</span>
              <h1 className="mb-8 text-tergar-blue">
                Nadčasová moudrost
              </h1>
              <p className="text-xl text-space-blue/80 font-normal leading-relaxed mb-0 max-w-prose">
                Kompletní cesta od prvních kroků na buddhistické stezce až po pokročilá stádia vadžrajánové praxe. Přenášíme živou linii přímo k vám.
              </p>
            </div>
            <div className="relative flex justify-center lg:justify-end pb-12 lg:pb-0">
               <div className="relative w-3/4 lg:w-full max-w-[320px] aspect-[3/4] p-0">
                 <img 
                   src={vajradharaImage} 
                   alt="Vajradhara - Primordial Buddha" 
                   className="w-full h-full object-contain drop-shadow-lg"
                 />
                 {/* Subtle grounding shadow instead of glow */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/5 rounded-[100%] blur-md -z-10" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className={`group p-10 flex flex-col transition-all duration-300 ${
                course.active 
                  ? 'bg-white shadow-md border border-tergar-gold/20' 
                  : 'bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                 <span className={`text-xs font-bold uppercase tracking-widest font-heading ${course.active ? 'text-tergar-blue' : 'text-gray-400'}`}>
                  {course.year}
                </span>
                {course.active && (
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-tergar-gold bg-tergar-gold/5 px-3 py-1 rounded-full font-heading">
                    <span className="w-1.5 h-1.5 rounded-full bg-tergar-gold" />
                    {course.start}
                  </span>
                )}
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-tergar-blue group-hover:text-space-blue transition-colors leading-tight">
                {course.title}
              </h2>
              
              <p className="text-space-blue/80 leading-relaxed mb-10 text-[15px] font-normal flex-grow">
                {course.desc}
              </p>
              
              <div className="pt-6 border-t border-gray-50 flex flex-col sm:flex-row justify-between sm:items-center gap-4 mt-auto">
                <p className="text-xs text-gray-400 font-bold max-w-[70%] font-heading leading-snug">{course.teachers}</p>
                
                <Link
                  to="/kontakt"
                  className={`inline-flex items-center text-xs font-bold transition-colors uppercase tracking-widest font-heading ${course.active ? 'text-tergar-blue' : 'text-gray-400 group-hover:text-tergar-blue'}`}
                >
                  Detail <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
    <div className="min-h-screen pt-[100px] bg-white">
      <section className="bg-white section-padding text-center relative border-b border-gray-100">
        <div className="container-custom">
           <span className="text-xs font-bold tracking-[0.2em] uppercase text-tergar-blue mb-4 block font-heading">Kurikulum</span>
          <h1 className="mb-8 text-tergar-blue">
            Cesta osvobození
          </h1>
          <p className="text-xl text-space-blue/80 max-w-2xl mx-auto font-normal leading-relaxed">
            V tradici Mingyura Rinpočheho se postupuje krok za krokem. To zajišťuje, že student je připraven na další úroveň učení.
          </p>
        </div>
      </section>

      <div className="container-custom py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {levels.map((level, i) => (
            <div
              key={i}
              className="group bg-white p-8 border border-gray-100 hover:border-tergar-blue/30 transition-all duration-300 hover:shadow-md flex flex-col relative overflow-hidden"
            >
              <div className="w-10 h-10 border border-tergar-gold/50 text-tergar-gold rounded-full flex items-center justify-center mb-8 font-bold text-lg bg-transparent font-heading">
                {i + 1}
              </div>
              
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 mb-3 block font-heading">
                {level.subtitle}
              </span>
              
              <h3 className="text-xl font-bold mb-4 text-space-blue group-hover:text-tergar-blue transition-colors">
                {level.title.split(':')[0]}
              </h3>

              <p className="text-sm text-space-blue/70 font-normal leading-relaxed mb-8 flex-grow">
                {level.desc}
              </p>
              
              <div className="text-sm text-gray-400 border-t border-gray-50 pt-4 flex justify-between items-center mt-auto font-bold font-heading">
                 <span className="text-xs uppercase tracking-wide">Délka: <span className="text-tergar-blue ml-1">{level.duration}</span></span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Sessions Info - Brand Compliant */}
        <div className="bg-space-blue text-white rounded-none overflow-hidden relative">
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-tergar-blue/10 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20 relative z-10 flex flex-col justify-center">
              <span className="text-tergar-gold font-bold tracking-[0.2em] uppercase text-xs mb-6 block font-heading">Podpora sanghy</span>
              <h2 className="mb-6 text-white">Obohaťte své studium</h2>
              <p className="text-white/80 font-normal text-lg leading-relaxed mb-10 max-w-md">
                Samostudium je důležité, ale spojení s komunitou je klíčové. Připojte se k živým relacím, ptejte se a meditujte společně.
              </p>
              <div>
                <Link to="/udalosti" className="btn-primary !bg-white !text-tergar-blue hover:!bg-gray-100 border-none inline-flex">
                  Kalendář událostí
                </Link>
              </div>
            </div>
            
            <div className="bg-black/10 p-12 lg:p-20 h-full border-t lg:border-t-0 lg:border-l border-white/5 grid grid-cols-1 gap-8 content-center">
               {[
                 { icon: Heart, title: 'Heart-to-Heart', time: '1x měsíčně', desc: 'Intimní a srdečná setkání pro zkoumání učení a otázky.' },
                 { icon: Users, title: 'Praktické relace', time: 'Týdně', desc: '30minutová vedená meditace Nektaru cesty s průvodci.' },
                 { icon: BookOpen, title: 'Dharma Geek', time: '1x měsíčně', desc: 'Podnětná setkání ke studiu tradičních textů a jejich integraci.' },
                 { icon: Video, title: 'Webináře s lamy', time: 'Měsíčně', desc: 'Speciální události a rozhovory s učiteli linie.' }
               ].map((item, idx) => (
                 <div key={idx} className="flex items-start gap-5 group cursor-default">
                    <div className="text-tergar-gold mt-1 opacity-80">
                      <item.icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3 mb-1">
                        <h4 className="font-bold text-lg text-white">{item.title}</h4>
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-heading">{item.time}</span>
                      </div>
                      <p className="text-sm text-white/70 font-normal leading-relaxed">{item.desc}</p>
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
    <div className="min-h-screen pt-[100px] bg-white">
      <section className="bg-gray-50 section-padding text-center border-b border-gray-100">
        <div className="container-custom">
           <span className="text-xs font-bold tracking-[0.2em] uppercase text-tergar-gold mb-4 block font-heading">Sangha</span>
          <h1 className="mb-8 text-tergar-blue">
            Lineage Society
          </h1>
          <p className="text-xl text-space-blue/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Připojte se k živé linii. Tergar komunita nabízí bezpečné prostředí pro sdílení, učení a vzájemnou podporu na cestě.
          </p>
        </div>
      </section>

      <div className="container-custom py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="order-2 lg:order-1 relative">
             <div className="bg-white p-8 border border-gray-100 shadow-sm relative z-10">
                <img
                  src={lineageTreeImage}
                  alt="Lineage Tree Visualization"
                  className="w-full h-auto object-contain"
                />
             </div>
             {/* Simple decorative offset box */}
             <div className="absolute top-4 left-4 w-full h-full border border-tergar-gold/20 -z-0" />
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-space-blue">
              Síla skupiny
            </h2>
            <div className="space-y-6 text-lg text-space-blue/80 font-normal leading-relaxed">
              <p>
                Uplynulo dvacet šest století od dob Buddhy a miliony lidí následovaly jeho příklad. Učení byla předávána z generace na generaci, takže teď, přímo tady, máme k dispozici tuto informaci a zkušenost.
              </p>
              <div className="border-l-2 border-tergar-gold pl-6 py-1 my-8">
                <p className="font-serif-quote italic text-xl text-space-blue/90">
                  Můžeme praktikovat cestu meditace stejným způsobem a stylem jako Buddha a předkové naší linie. Máme přenos cesty, jak praktikovat, abychom překonali úzkost, klam a neurózu. Máme to a můžeme to dokázat.
                </p>
                <span className="block mt-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 font-heading">— Chögyam Trungpa Rinpočhe</span>
              </div>
            </div>
            
            <div className="pt-8 grid gap-6">
              {[
                { icon: Users, title: 'Týdenní setkání', desc: 'Vedené meditace Nektaru cesty' },
                { icon: BookOpen, title: 'Studijní skupiny', desc: 'Dharma Geek a diskuse nad texty' },
                { icon: Heart, title: 'Z Bdělého Srdce', desc: 'Intimní kruhy sdílení' }
              ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-tergar-blue"><item.icon size={20} strokeWidth={1.5} /></div>
                    <div>
                      <h4 className="font-bold text-base text-space-blue mb-1">{item.title}</h4>
                      <p className="text-sm text-space-blue/70 font-normal">{item.desc}</p>
                    </div>
                 </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 border border-tergar-gold/20 max-w-4xl mx-auto">
          <div className="p-12 lg:p-16 text-center">
            <Star className="w-8 h-8 text-tergar-gold mx-auto mb-6 opacity-80" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold text-tergar-blue mb-6">
              Staňte se členem
            </h3>
            <p className="text-space-blue/70 mb-10 text-lg font-normal max-w-lg mx-auto">
              Získejte přístup k 25+ kurzům pro samostudium, týdenním živým relacím a aplikaci Vajrayana Online.
            </p>
            <Link to="/kontakt" className="btn-primary">
              Vyzkoušet na 10 dní zdarma
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UdalostiPage() {
  const eventsByMonth = [
    {
      month: 'Leden',
      events: [
        { day: '21', dateFull: '21.1.2026', time: '17:15 - 19:00', title: 'AAM | 5-týdenní kurz', loc: 'PRAHA', color: 'bg-blue-50 text-tergar-blue', type: 'Kurz', address: 'Studio MILADA, Milady Horákové 53', price: '2500 Kč', desc: 'Esence meditační praxe. Krátký, praktický kurz pro začátečníky i pokročilé.' },
        { day: '21', dateFull: '21.1.2026', time: '18:00 - 19:00', title: 'Středeční meditace', loc: 'ČESKÁ LÍPA', color: 'bg-amber-50 text-amber-900', type: 'Meditace', icon: '🟤', address: 'GAIA centrum', price: 'Zdarma', desc: 'Vedené meditace a sdílení. Otevřené všem.' },
        { day: '21', dateFull: '21.1.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House, Školská 28', price: 'Zdarma', desc: 'Pravidelná setkání otevřená všem. Meditace a sdílení.' },
        { day: '25', dateFull: '25.1.2026', time: '18:00 - 19:30', title: 'Nedělní meditace', loc: 'ČESKÉ BUDĚJOVICE', color: 'bg-orange-50 text-orange-900', type: 'Meditace', icon: '🟠', address: 'Čajový ateliér, Krajinská 260/22', price: '100 Kč', desc: 'Každou 2. a 4. neděli. Vedené meditace a sdílení.' },
        { day: '26', dateFull: '26.1.2026', time: '20:00 - 21:00', title: 'Radost ze života 2+3', loc: 'ONLINE', color: 'bg-purple-50 text-purple-900', type: 'Praxe', icon: '🟣', address: 'Zoom (registrace emailem)', price: 'Zdarma', desc: 'Pro absolventy RZŽ 2 a 3. Otevírání srdce a Probuzení moudrosti.' },
        { day: '27', dateFull: '27.1.2026', time: '19:00 - 20:00', title: 'Pravidelné meditace', loc: 'ONLINE', color: 'bg-blue-50 text-blue-900', type: 'Meditace', icon: '🔵', address: 'Zoom (registrace emailem)', price: 'Zdarma', desc: 'Otevřené všem. Vedené meditace a sdílení.' },
        { day: '28', dateFull: '28.1.2026', time: '17:15 - 19:00', title: 'AAM | 5-týdenní kurz', loc: 'PRAHA', color: 'bg-blue-50 text-tergar-blue', type: 'Kurz', address: 'Studio MILADA, Milady Horákové 53', price: '2500 Kč', desc: 'Pokračování kurzu.' },
        { day: '28', dateFull: '28.1.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House, Školská 28', price: 'Zdarma', desc: 'Pravidelná setkání otevřená všem.' },
        { day: '30', dateFull: '30.1. - 1.2.', time: '16:30', title: 'Otevřené srdce', loc: 'PRAHA', color: 'bg-tergar-blue text-white', type: 'Workshop', address: 'Tibet Open House, Školská 28', price: '3200 Kč', desc: 'Víkendový workshop Radosti ze života 2. Rozvíjení lásky a soucitu.' },
      ]
    },
    {
      month: 'Únor',
      events: [
        { day: '04', dateFull: '4.2.2026', time: '17:15 - 19:00', title: 'AAM | 5-týdenní kurz', loc: 'PRAHA', color: 'bg-blue-50 text-tergar-blue', type: 'Kurz', address: 'Studio MILADA', price: '2500 Kč', desc: 'Pokračování kurzu.' },
        { day: '04', dateFull: '4.2.2026', time: '18:00 - 19:00', title: 'Středeční meditace', loc: 'ČESKÁ LÍPA', color: 'bg-amber-50 text-amber-900', type: 'Meditace', icon: '🟤', address: 'GAIA centrum', price: 'Zdarma', desc: 'Vedené meditace a sdílení.' },
        { day: '04', dateFull: '4.2.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House', price: 'Zdarma', desc: 'Pravidelná setkání.' },
        { day: '08', dateFull: '8.2.2026', time: '18:00 - 19:30', title: 'Nedělní meditace', loc: 'ČESKÉ BUDĚJOVICE', color: 'bg-orange-50 text-orange-900', type: 'Meditace', icon: '🟠', address: 'Čajový ateliér', price: '100 Kč', desc: 'Vedené meditace a sdílení.' },
        { day: '09', dateFull: '9.2.2026', time: '20:00 - 21:00', title: 'Radost ze života 2+3', loc: 'ONLINE', color: 'bg-purple-50 text-purple-900', type: 'Praxe', icon: '🟣', address: 'Zoom', price: 'Zdarma', desc: 'Pro absolventy RZŽ 2 a 3.' },
        { day: '10', dateFull: '10.2.2026', time: '19:00 - 20:00', title: 'Pravidelné meditace', loc: 'ONLINE', color: 'bg-blue-50 text-blue-900', type: 'Meditace', icon: '🔵', address: 'Zoom', price: 'Zdarma', desc: 'Otevřené všem.' },
        { day: '11', dateFull: '11.2.2026', time: '17:15 - 19:00', title: 'AAM | 5-týdenní kurz', loc: 'PRAHA', color: 'bg-blue-50 text-tergar-blue', type: 'Kurz', address: 'Studio MILADA', price: '2500 Kč', desc: 'Závěrečná lekce kurzu.' },
        { day: '11', dateFull: '11.2.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House', price: 'Zdarma', desc: 'Pravidelná setkání.' },
        { day: '15', dateFull: '15.2.2026', time: '09:30 - 16:30', title: 'Jednodenní retreat v tichu', loc: 'PRAHA', color: 'bg-gray-800 text-white', type: 'Retreat', address: 'Tibet Open House', price: 'Dobrovolný', desc: 'Celodenní meditační praxe.' },
        { day: '18', dateFull: '18.2.2026', time: '08:00 - 09:30', title: 'Klidná mysl | 8-týdenní kurz', loc: 'ONLINE', color: 'bg-blue-50 text-tergar-blue', type: 'Kurz', address: 'Zoom', price: 'Viz Zenamu', desc: 'Kurz pro začátečníky. Radost ze života 1.' },
        { day: '18', dateFull: '18.2.2026', time: '18:00 - 19:00', title: 'Středeční meditace', loc: 'ČESKÁ LÍPA', color: 'bg-amber-50 text-amber-900', type: 'Meditace', icon: '🟤', address: 'GAIA centrum', price: 'Zdarma', desc: 'Vedené meditace a sdílení.' },
        { day: '18', dateFull: '18.2.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House', price: 'Zdarma', desc: 'Pravidelná setkání.' },
        { day: '22', dateFull: '22.2.2026', time: '18:00 - 19:30', title: 'Nedělní meditace', loc: 'ČESKÉ BUDĚJOVICE', color: 'bg-orange-50 text-orange-900', type: 'Meditace', icon: '🟠', address: 'Čajový ateliér', price: '100 Kč', desc: 'Vedené meditace a sdílení.' },
        { day: '23', dateFull: '23.2.2026', time: '20:00 - 21:00', title: 'Radost ze života 2+3', loc: 'ONLINE', color: 'bg-purple-50 text-purple-900', type: 'Praxe', icon: '🟣', address: 'Zoom', price: 'Zdarma', desc: 'Pro absolventy RZŽ 2 a 3.' },
        { day: '24', dateFull: '24.2.2026', time: '19:00 - 20:00', title: 'Pravidelné meditace', loc: 'ONLINE', color: 'bg-blue-50 text-blue-900', type: 'Meditace', icon: '🔵', address: 'Zoom', price: 'Zdarma', desc: 'Otevřené všem.' },
        { day: '25', dateFull: '25.2.2026', time: '08:00 - 09:30', title: 'Klidná mysl | 8-týdenní kurz', loc: 'ONLINE', color: 'bg-blue-50 text-tergar-blue', type: 'Kurz', address: 'Zoom', price: 'Viz Zenamu', desc: 'Pokračování kurzu.' },
        { day: '25', dateFull: '25.2.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House', price: 'Zdarma', desc: 'Pravidelná setkání.' },
      ]
    },
    {
      month: 'Březen',
      events: [
        { day: '04', dateFull: '4.3.2026', time: '08:00 - 09:30', title: 'Klidná mysl | 8-týdenní kurz', loc: 'ONLINE', color: 'bg-blue-50 text-tergar-blue', type: 'Kurz', address: 'Zoom', price: 'Viz Zenamu', desc: 'Pokračování kurzu.' },
        { day: '04', dateFull: '4.3.2026', time: '18:00 - 19:00', title: 'Středeční meditace', loc: 'ČESKÁ LÍPA', color: 'bg-amber-50 text-amber-900', type: 'Meditace', icon: '🟤', address: 'GAIA centrum', price: 'Zdarma', desc: 'Vedené meditace a sdílení.' },
        { day: '04', dateFull: '4.3.2026', time: '18:30 - 20:00', title: 'Středeční meditace', loc: 'PRAHA', color: 'bg-green-50 text-green-900', type: 'Meditace', icon: '🟢', address: 'Tibet Open House', price: 'Zdarma', desc: 'Pravidelná setkání.' },
        { day: '08', dateFull: '8.3.2026', time: '18:00 - 19:30', title: 'Nedělní meditace', loc: 'ČESKÉ BUDĚJOVICE', color: 'bg-orange-50 text-orange-900', type: 'Meditace', icon: '🟠', address: 'Čajový ateliér', price: '100 Kč', desc: 'Vedené meditace a sdílení.' },
        { day: '09', dateFull: '9.3.2026', time: '20:00 - 21:00', title: 'Radost ze života 2+3', loc: 'ONLINE', color: 'bg-purple-50 text-purple-900', type: 'Praxe', icon: '🟣', address: 'Zoom', price: 'Zdarma', desc: 'Pro absolventy RZŽ 2 a 3.' },
        { day: '10', dateFull: '10.3.2026', time: '19:00 - 20:00', title: 'Pravidelné meditace', loc: 'ONLINE', color: 'bg-blue-50 text-blue-900', type: 'Meditace', icon: '🔵', address: 'Zoom', price: 'Zdarma', desc: 'Otevřené všem.' },
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-[100px] bg-white">
      <section className="bg-gray-50 section-padding text-center relative overflow-hidden border-b border-gray-100">
        <div className="container-custom relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-tergar-blue mb-4 block font-heading">Kalendář</span>
          <h1 className="mb-8 text-tergar-blue">
            Živá setkání
          </h1>
          <p className="text-xl text-space-blue/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Obohaťte své samostudium připojením k našim živým relacím a spojením s komunitou.
          </p>
        </div>
      </section>

      <div className="container-custom py-20">
        <div className="max-w-4xl mx-auto space-y-20">
          {eventsByMonth.map((monthData, mIdx) => (
            <div key={mIdx}>
              <h2 className="text-2xl font-bold text-tergar-blue mb-8 border-b border-gray-100 pb-4 font-heading">{monthData.month} 2026</h2>
              <div className="space-y-4">
                {monthData.events.map((event, i) => (
                  <div
                    key={i}
                    className="group bg-white p-6 border border-gray-100 hover:border-tergar-blue/30 transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center hover:shadow-md rounded-lg"
                  >
                    {/* Date Badge - Visual Balance */}
                    <div className="flex-shrink-0 flex flex-row md:flex-col items-baseline md:items-center gap-2 md:gap-0 min-w-[70px] pt-1 md:pt-0">
                       <span className="text-3xl font-bold text-tergar-blue font-heading">{event.day}</span>
                       <span className="text-xs font-bold uppercase tracking-wider text-gray-400 font-heading">{monthData.month.substring(0,3)}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow w-full">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest font-heading ${event.color}`}>
                          {event.icon && <span>{event.icon}</span>}
                          {event.loc}
                        </span>
                        <span className="text-gray-400 text-xs font-medium flex items-center gap-1">
                          <Clock size={12} /> {event.time}
                        </span>
                        {event.price && (
                           <span className="text-gray-400 text-xs font-medium flex items-center gap-1 ml-auto md:ml-0">
                            <Banknote size={12} /> {event.price}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-space-blue group-hover:text-tergar-blue transition-colors font-heading mb-1.5">
                        {event.title}
                      </h3>
                      {event.address && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2 font-medium">
                           <MapPin size={12} className="text-tergar-gold" />
                           {event.address}
                        </div>
                      )}
                      <p className="text-sm text-space-blue/70 font-normal leading-relaxed max-w-xl">
                        {event.desc}
                      </p>
                    </div>

                    {/* Action - Calm Button */}
                    <div className="flex-shrink-0 w-full md:w-auto mt-2 md:mt-0">
                      <a 
                        href="https://app.zenamu.com/tergarczechia" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-secondary !py-2 !px-5 text-xs whitespace-nowrap w-full justify-center flex items-center gap-2 !border-gray-200 hover:!border-tergar-blue hover:!text-tergar-blue transition-colors"
                      >
                        Rezervovat <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://app.zenamu.com/tergarczechia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <Calendar size={18} />
            Otevřít kompletní rozvrh na Zenamu
          </a>
        </div>

        <div className="mt-24 text-center bg-gray-50 border border-gray-100 max-w-3xl mx-auto p-12">
           <h4 className="font-bold text-lg mb-4 text-tergar-blue font-heading">Jste členem Vadžrajána Online?</h4>
           <p className="text-space-blue/70 mb-8 font-normal text-sm">Máte automatický přístup ke všem těmto setkáním zdarma.</p>
           <Link to="/kontakt" className="text-tergar-gold font-bold border-b border-transparent hover:border-tergar-gold transition-all pb-0.5 uppercase tracking-wide text-xs font-heading">
             Přihlásit se do členské sekce
           </Link>
        </div>
      </div>
    </div>
  );
}

export function ONasPage() {
  return (
    <div className="min-h-screen pt-[100px] bg-white">
      <section className="bg-gray-50 section-padding text-center border-b border-gray-100">
        <div className="container-custom">
           <span className="text-xs font-bold tracking-[0.2em] uppercase text-tergar-gold mb-4 block font-heading">Učitel</span>
          <h1 className="mb-8 text-tergar-blue">
            Yongey Mingyur Rinpočhe
          </h1>
          <p className="text-xl text-space-blue/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Mistr meditace s výjimečným darem propojovat starodávnou moudrost s moderním životem. Autor bestsellerů New York Times.
          </p>
        </div>
      </section>

      <div className="container-custom py-24 space-y-32">
        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
           <div className="prose prose-lg text-space-blue/80 font-normal leading-relaxed">
             <div className="border-l-2 border-tergar-blue pl-6 py-1 mb-8">
                <p className="font-serif-quote italic text-xl text-space-blue mb-0">
                 "Když se podíváte dovnitř, nenajdete nic pevného, čeho byste se mohli držet. A to je ta nejlepší zpráva, jakou jste kdy mohli slyšet."
                </p>
             </div>
             <p className="mb-6">
               Narodil se v roce 1975 v himalájském pohraničí mezi Tibetem a Nepálem. Mingjur Rinpočhe je velmi milovaný a uznávaný mistr meditace. Od útlého věku ho přitahoval život v kontemplaci. Mnoho let svého dětství strávil v přísném ústraní.
             </p>
             <p className="mb-6">
               Ve věku sedmnácti let byl pozván, aby se stal učitelem v tříletém meditačním centru svého kláštera, což je pozice, kterou tak mladý lama zastává jen zřídka. Dokončil také tradiční buddhistické vzdělání ve filozofii a psychologii, než založil mnišskou kolej ve svém domovském klášteře v severní Indii.
             </p>
             <p className="mb-6">
               Kromě rozsáhlého výcviku v meditačních a filozofických tradicích tibetského buddhismu se Mingjur Rinpočhe celý život zajímá o západní vědu a psychologii. V roce 2002 byl Rinpočhe a několik dalších dlouholetých meditujících pozváni do Waismanovy laboratoře pro zobrazování mozku a chování na Wisconsinské univerzitě v Madisonu, kde Richard Davidson a další vědci zkoumali účinky meditace na mozek pokročilých meditujících.
             </p>
           </div>
           <div className="space-y-8">
             <div className="relative group">
               {/* Authentic Image - No Grayscale Gimmicks */}
               <div className="relative z-10">
                 <img 
                    src={mingyurWavingImage} 
                    alt="Mingyur Rinpoche Waving" 
                    className="w-full shadow-md border border-gray-100"
                  />
               </div>
               <div className="absolute top-4 -right-4 w-full h-full border border-tergar-gold/30 -z-0" />
             </div>
             
             {/* Khenpo Kunga & Cortland Dahl Mini-Bios */}
             <div className="bg-gray-50 p-8 border-l-2 border-tergar-blue mt-8">
                <h3 className="font-bold text-lg mb-4 text-tergar-blue font-heading">Další průvodci</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-space-blue text-xs uppercase tracking-wider mb-1 font-heading">Khenpo Kunga</h4>
                    <p className="text-sm text-space-blue/70 font-normal">
                      Senior Tergar lama, který strávil tři roky v ústraní a 11 let studiem na Dzongsar College. Jeho hlavním učitelem je Mingjur Rinpočhe.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-bold text-space-blue text-xs uppercase tracking-wider mb-1 font-heading">Cortland Dahl, Ph.D.</h4>
                    <p className="text-sm text-space-blue/70 font-normal">
                      Vědec, překladatel a učitel meditace. Předseda Tergar International a autor knihy "A Meditator’s Guide to Buddhism".
                    </p>
                  </div>
                </div>
             </div>

             {/* ONLINE INSPIRATION (YOUTUBE) - COMPLIANT */}
             <div className="bg-space-blue text-white p-8 shadow-md mt-8 relative overflow-hidden group border-t border-tergar-gold/20">
                <h3 className="font-bold text-lg mb-4 relative z-10 flex items-center gap-3 text-white font-heading">
                   <Youtube className="text-tergar-gold" size={20} />
                   Digitální dharma
                </h3>
                <p className="text-white/70 font-normal text-sm mb-6 relative z-10 leading-relaxed">
                  Sledujte pravidelná učení, živá vysílání a krátké inspirace.
                </p>
                <div className="space-y-3 relative z-10">
                   <a href="https://www.youtube.com/@MingyurRinpoche" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 transition-colors group/link border border-white/5 font-heading">
                      <span className="font-bold text-xs tracking-wide">Mingyur Rinpoche</span>
                      <ExternalLink size={12} className="text-white/50 group-hover/link:text-white" />
                   </a>
                   <a href="https://www.youtube.com/@TergarMeditationCommunity" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 transition-colors group/link border border-white/5 font-heading">
                      <span className="font-bold text-xs tracking-wide">Tergar Community</span>
                      <ExternalLink size={12} className="text-white/50 group-hover/link:text-white" />
                   </a>
                </div>
             </div>
           </div>
        </div>

        {/* Books Grid */}
        <div className="border-t border-gray-100 pt-24">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-tergar-blue mb-4 block font-heading">Bibliografie</span>
            <h2 className="text-space-blue">Knihy a publikace</h2>
            <p className="text-space-blue/70 mt-4 font-normal max-w-2xl mx-auto text-lg">
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
              <div key={i} className="group bg-white p-8 text-center border border-gray-100 hover:border-tergar-gold/50 transition-all duration-300">
                 <div className="w-16 h-16 bg-gray-50 mx-auto mb-6 flex items-center justify-center text-2xl rounded-full text-tergar-blue border border-gray-100">
                    {book.icon}
                 </div>
                 <h4 className="font-bold text-lg text-space-blue group-hover:text-tergar-blue transition-colors mb-2 font-heading">{book.title}</h4>
                 <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold font-heading">{book.subtitle}</p>
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
    <div className="min-h-screen pt-[100px] bg-white">
      <section className="bg-space-blue text-white section-padding text-center relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-tergar-blue/20" />
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-tergar-gradient z-20" />
        
        <div className="container-custom relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-tergar-gold mb-4 block font-heading">Podpora</span>
          <h1 className="mb-8 text-white">
            Jsme tu pro vás
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-normal leading-relaxed">
            Máte dotazy k členství, technické problémy nebo hledáte radu k praxi?
          </p>
        </div>
      </section>

      <div className="container-custom py-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
           {/* General Support */}
           <div className="bg-white p-10 text-center border border-gray-100 hover:border-tergar-gold transition-all duration-300 shadow-sm hover:shadow-md">
             <div className="bg-tergar-gold/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="text-tergar-gold" size={24} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl font-bold mb-3 text-space-blue font-heading">Obecné dotazy</h3>
             <p className="text-space-blue/70 mb-6 font-normal text-sm">Informace o komunitě, akcích a studijních skupinách</p>
             <a href="mailto:tergar.czechia@tergar.org" className="text-tergar-blue font-bold hover:text-space-blue transition-colors border-b border-tergar-blue/30 pb-0.5 font-heading text-sm">
               tergar.czechia@tergar.org
             </a>
           </div>

           {/* Tech Support */}
           <div className="bg-white p-10 text-center border border-gray-100 hover:border-tergar-blue transition-all duration-300 shadow-sm hover:shadow-md">
             <div className="bg-tergar-blue/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-tergar-blue" size={24} strokeWidth={1.5} />
             </div>
             <h3 className="text-xl font-bold mb-3 text-space-blue font-heading">Technická podpora</h3>
             <p className="text-space-blue/70 mb-6 font-normal text-sm">Problémy s online platformou, přihlášením a platbami</p>
             <a href="mailto:podpora@tergar.cz" className="text-tergar-blue font-bold hover:text-space-blue transition-colors border-b border-tergar-blue/30 pb-0.5 font-heading text-sm">
               podpora@tergar.cz
             </a>
           </div>

           {/* Social Media */}
           <div className="bg-white p-10 text-center border border-gray-100 hover:border-space-blue transition-all duration-300 shadow-sm hover:shadow-md">
             <div className="bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 text-space-blue border border-gray-100">
                <Play className="text-space-blue ml-1" size={24} strokeWidth={1.5} fill="currentColor" />
             </div>
             <h3 className="text-xl font-bold mb-3 text-space-blue font-heading">Sledujte nás</h3>
             <p className="text-space-blue/70 mb-6 font-normal text-sm">Buďte v obraze s novinkami a inspirací na sociálních sítích</p>
             <div className="flex justify-center gap-4">
               <a href="https://www.facebook.com/tergarcz/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 rounded-full hover:bg-tergar-blue hover:text-white transition-colors">
                 <Facebook size={18} />
               </a>
               <a href="https://www.instagram.com/tergar_cz/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-50 rounded-full hover:bg-tergar-blue hover:text-white transition-colors">
                 <Instagram size={18} />
               </a>
             </div>
           </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-16 text-space-blue">Časté otázky</h2>
          <div className="space-y-6">
            {[
              { q: 'Musím být buddhista?', a: 'Vůbec ne. Kurzy Tergar jsou otevřeny každému, kdo se zajímá o meditaci a práci s myslí, bez ohledu na vyznání či světonázor.' },
              { q: 'Potřebuji předchozí zkušenosti?', a: 'Rozhodně ne! Naše úvodní kurzy (Radost ze života) jsou navrženy přímo pro úplné začátečníky. Povedeme vás krok za krokem.' },
              { q: 'Proč jsou tam předpoklady pro pokročilé kurzy?', a: 'V tradici Mingyura Rinpočheho se praxe následují krok za krokem. To zajišťuje, že student je připraven na další úroveň učení. Snaha postoupit k pokročilejším úrovním bez předchozí praxe není prospěšná.' },
              { q: 'Jak funguje členství?', a: 'Členství (24 USD/měsíc) zahrnuje přístup k 25+ kurzům, týdenním živým relacím a aplikaci. Nabízíme 10denní zkušební dobu zdarma. Můžete kdykoliv zrušit.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 p-8 border border-gray-100 hover:border-tergar-gold/50 transition-colors cursor-default">
                <h4 className="font-bold text-lg mb-3 text-tergar-blue font-heading">{faq.q}</h4>
                <p className="text-space-blue/80 font-normal leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
