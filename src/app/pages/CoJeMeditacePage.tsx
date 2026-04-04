// * "What is meditation" intro page — benefits, science, Rinpoche portrait, CTA to programs
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Heart, Zap, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import mingyurPortrait from '@/assets/mingyur-portrait.png';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export function CoJeMeditacePage() {
  return (
    <div className="bg-[#FAF8F4]">

      {/* HERO */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FAF8F4]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C9962A]/[0.03] rounded-full blur-[120px]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span variants={fadeInUp} className="inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C9962A] mb-5">
              Základy praxe
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading text-[#1C2B3A] tracking-tight leading-[1.1] mb-8" style={{ fontWeight: 600 }}>
              Co je meditace?
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#2D3748]/55 font-light leading-relaxed text-balance">
              Mnoho lidí si myslí, že meditace znamená vyprázdnit mysl, zastavit myšlenky nebo dosáhnout nějakého zvláštního stavu klidu.
              <br className="hidden md:block" />
              <span className="text-[#1C2B3A] font-medium">Ve skutečnosti je to mnohem jednodušší.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MONKEY MIND */}
      <section className="py-24 md:py-32 bg-[#F4F1EC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, rotate: 2 }}
              whileInView={{ opacity: 1, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl hover:rotate-0 transition-transform duration-700 relative">
                <img src={mingyurPortrait} alt="Mingyur Rinpočhe" className="w-full h-full object-cover scale-105" />
                <div className="absolute inset-0 bg-[#1C2B3A]/5 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#C9962A]/15 rounded-full blur-2xl" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading text-[#1C2B3A] mb-8 tracking-tight" style={{ fontWeight: 600 }}>
                Opičí mysl
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-5 text-lg text-[#2D3748]/60 font-light leading-relaxed">
                <p>
                  Mingyur Rinpočhe často používá termín „opičí mysl". Naše mysl je jako opice, která neustále skáče z větve na větev. Plánuje, vzpomíná, soudí, bojí se budoucnosti.
                </p>
                <p>
                  Většina z nás se snaží tuto opici spoutat, porazit ji nebo ji uspat. Ale to nikdy nefunguje. Čím více se snažíme myšlenky potlačit, tím jsou hlasitější.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white p-8 rounded-2xl shadow-sm border border-[#E8E4DD]/50 mt-8">
                <h3 className="font-heading text-xl text-[#1C2B3A] mb-4" style={{ fontWeight: 600 }}>Tajemství meditace</h3>
                <p className="italic text-[#2D3748]/65 leading-relaxed">
                  „Nemusíte opici vyhazovat. Stačí, když jí dáte práci. Nejjednodušší práce pro opičí mysl je vnímání dechu."
                </p>
                <p className="text-sm text-[#C9962A] font-semibold mt-4 uppercase tracking-wider">— Mingyur Rinpočhe</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-24 md:py-32 bg-[#FAF8F4]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading text-[#1C2B3A] mb-5 tracking-tight" style={{ fontWeight: 600 }}>
              Tři pilíře praxe
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#2D3748]/50 text-lg font-light">
              Meditace není jen sezení na polštáři. Je to trénink mysli, který staví na třech klíčových kvalitách.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { icon: Zap, title: 'Uvědomění', desc: 'Schopnost vědět, co se děje v přítomném okamžiku. Bez souzení, bez snahy něco měnit. Prosté „vědění".' },
              { icon: Heart, title: 'Soucit', desc: 'Otevření srdce sobě i druhým. Přijetí našich emocí a nedostatků s laskavostí namísto kritiky.' },
              { icon: Brain, title: 'Moudrost', desc: 'Vhled do toho, jak věci skutečně existují. Rozpoznání, že nic není pevné a neměnné, což přináší svobodu.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group p-8 md:p-10 rounded-3xl bg-[#FAF8F4] hover:bg-[#1C2B3A] transition-colors duration-500 cursor-default border border-[#E8E4DD]/50 hover:border-transparent"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#C9962A] mb-6 shadow-sm group-hover:bg-white/10 transition-colors">
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading text-[#1C2B3A] group-hover:text-white mb-3 transition-colors" style={{ fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-[#2D3748]/50 group-hover:text-white/60 font-light leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEUROSCIENCE */}
      <section className="py-24 md:py-32 text-white overflow-hidden relative">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1000&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#1C2B3A]/90" />
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9962A]/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-7"
            >
              <motion.span variants={fadeInUp} className="text-[#C9962A] font-semibold tracking-[0.25em] uppercase text-[11px] mb-5 block">
                Neurověda
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-heading text-white mb-8 tracking-tight" style={{ fontWeight: 600 }}>
                Měníme svůj mozek
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-5 text-lg text-white/60 font-light leading-relaxed">
                <p>
                  Díky neuroplasticitě víme, že náš mozek není fixní. Každá myšlenka, každá emoce vytváří neurální dráhy. Meditace je způsob, jak vědomě formovat tyto dráhy směrem ke štěstí a odolnosti.
                </p>
                <p>
                  Výzkumy s Mingyurem Rinpočhem ukázaly, že dlouhodobí meditující mají zvýšenou aktivitu v oblastech mozku spojených s pozitivními emocemi a regulací stresu.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="mt-10">
                <Link
                  to="/program"
                  className="inline-flex items-center gap-2 bg-white text-[#1C2B3A] px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide hover:bg-[#C9962A] hover:text-white transition-all duration-300"
                >
                  Začít s tréninkem <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="aspect-[4/5] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9962A]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Sparkles size={56} className="text-[#C9962A] mb-6 opacity-70" strokeWidth={1} />
                <p className="font-heading text-2xl text-white mb-2 italic" style={{ fontWeight: 400 }}>"Štěstí je dovednost."</p>
                <p className="text-white/40 text-sm uppercase tracking-wider">Richard Davidson, neurovědec</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="py-24 md:py-32 bg-[#FAF8F4] text-center">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading text-[#1C2B3A] mb-12 tracking-tight"
            style={{ fontWeight: 600 }}
          >
            Jak začít?
          </motion.h2>
          <div className="inline-flex flex-col md:flex-row gap-5">
            <Link to="/program" className="group flex items-center gap-4 bg-white p-5 pr-10 rounded-full hover:shadow-lg transition-all duration-300 border border-[#E8E4DD]/50 hover:border-[#C9962A]/30">
              <div className="w-12 h-12 rounded-full bg-[#1C2B3A]/8 flex items-center justify-center text-[#1C2B3A] font-heading text-lg group-hover:scale-110 transition-transform" style={{ fontWeight: 600 }}>1</div>
              <div className="text-left">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#2D3748]/35">Online kurz</span>
                <span className="block font-heading text-lg text-[#1C2B3A]" style={{ fontWeight: 600 }}>Radost ze života</span>
              </div>
              <ArrowRight className="ml-4 text-[#2D3748]/20 group-hover:text-[#C9962A] group-hover:translate-x-1 transition-all" size={18} />
            </Link>

            <Link to="/skupiny" className="group flex items-center gap-4 bg-white p-5 pr-10 rounded-full hover:shadow-lg transition-all duration-300 border border-[#E8E4DD]/50 hover:border-[#C9962A]/30">
              <div className="w-12 h-12 rounded-full bg-[#C9962A]/10 flex items-center justify-center text-[#C9962A] font-heading text-lg group-hover:scale-110 transition-transform" style={{ fontWeight: 600 }}>2</div>
              <div className="text-left">
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-[#2D3748]/35">Komunita</span>
                <span className="block font-heading text-lg text-[#1C2B3A]" style={{ fontWeight: 600 }}>Najít skupinu</span>
              </div>
              <ArrowRight className="ml-4 text-[#2D3748]/20 group-hover:text-[#C9962A] group-hover:translate-x-1 transition-all" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
