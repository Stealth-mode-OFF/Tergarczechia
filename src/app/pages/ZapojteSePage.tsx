import { ArrowRight, Heart, Languages, Users, Share2, Wrench, ExternalLink, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9962A] font-heading mb-6">
      {children}
    </span>
  );
}

const volunteerRoles = [
  {
    icon: Languages,
    title: 'Překlady textů',
    description: 'Pomáhejte překládat meditační texty, články a materiály z angličtiny do češtiny. Ideální pro ty, kdo mají cit pro jazyk a znají buddhistickou terminologii.',
    color: '#3b82f6',
  },
  {
    icon: Users,
    title: 'Organizace setkání',
    description: 'Pomáhejte s organizací pravidelných meditačních setkání, workshopů a retreatů. Zahrnuje logistiku, komunikaci s účastníky a přípravu prostor.',
    color: '#22c55e',
  },
  {
    icon: Share2,
    title: 'Sociální sítě',
    description: 'Sdílejte inspiraci z učení Mingyura Rinpočheho na sociálních sítích. Tvorba obsahu, správa profilů a budování online komunity.',
    color: '#a855f7',
  },
  {
    icon: Wrench,
    title: 'Technická podpora',
    description: 'Pomáhejte s webem, online přenosy, zvukem a technikou při událostech. Vhodné pro ty, kdo mají zkušenosti s IT nebo AV technikou.',
    color: '#f59e0b',
  },
];

const volunteerQuotes = [
  {
    text: 'Dobrovolnictví u Tergaru je pro mě nejvyšší formou praxe. Služba ostatním prohlubuje meditaci víc než cokoliv jiného.',
    author: 'Jan',
    location: 'Praha',
  },
  {
    text: 'Překládání textů Mingyura Rinpočheho mě naučilo víc o meditaci než jakýkoliv kurz. Každé slovo má svou hloubku.',
    author: 'Kateřina',
    location: 'Brno',
  },
  {
    text: 'Organizování skupinových meditací mi dalo pocit sounáležitosti, který jsem hledal celý život.',
    author: 'Tomáš',
    location: 'Praha',
  },
];

export function ZapojteSePage() {
  return (
    <div className="bg-[#FAF8F4]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F4]/95 via-[#FAF8F4]/85 to-[#FAF8F4]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <SectionLabel>Zapojte se</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C2B3A] font-heading tracking-tight leading-[1.08] mb-6">
              Staňte se součástí komunity
            </h1>
            <p className="text-lg sm:text-xl text-[#1C2B3A]/60 leading-relaxed font-light max-w-2xl">
              Tergar funguje díky dobrovolníkům, kteří věnují svůj čas a energii šíření meditace. Každý příspěvek — ať už časem nebo finančně — pomáhá budovat komunitu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* A) Dobrovolnictví — Role */}
      <section className="py-20 md:py-28 bg-[#FAF8F4]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.div variants={reveal}>
              <SectionLabel>Dobrovolnictví</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2B3A] font-heading tracking-tight mb-4">
                Jak můžete pomoci
              </h2>
            </motion.div>
            <motion.p variants={reveal} className="text-sm sm:text-base text-[#1C2B3A]/55 font-light max-w-lg mx-auto">
              Vyberte si oblast, která vás zajímá. Žádné speciální zkušenosti nejsou potřeba — stačí chuť pomáhat.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {volunteerRoles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={i}
                  variants={reveal}
                  className="group bg-[#F4F1EC] rounded-2xl border border-[#E8E4DD]/50 p-7 md:p-8 hover:bg-[#FAF8F4] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${role.color}12` }}
                  >
                    <Icon size={26} style={{ color: role.color }} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-[#1C2B3A] font-heading mb-3">{role.title}</h3>
                  <p className="text-sm text-[#1C2B3A]/55 font-light leading-relaxed mb-5">{role.description}</p>
                  <a
                    href="mailto:czech@tergar.org?subject=Dobrovolnictví – Tergar Česko"
                    className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest font-heading group-hover:gap-3 transition-all"
                    style={{ color: role.color }}
                  >
                    Mám zájem <ArrowRight size={12} />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Volunteer quotes */}
      <section className="py-16 md:py-24 bg-[#F4F1EC]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {volunteerQuotes.map((q, i) => (
              <motion.blockquote
                key={i}
                variants={reveal}
                className="bg-[#FAF8F4] rounded-2xl border border-[#E8E4DD]/50 p-6 md:p-7 relative"
              >
                <Quote size={24} className="text-[#C9962A]/20 mb-4" />
                <p className="text-sm text-[#1C2B3A]/70 italic leading-relaxed font-light mb-5">
                  &bdquo;{q.text}&ldquo;
                </p>
                <footer className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1C2B3A]/8 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#C9962A] font-heading">{q.author.charAt(0)}</span>
                  </div>
                  <div>
                    <cite className="text-sm font-bold text-[#1C2B3A] not-italic font-heading">{q.author}</cite>
                    <span className="text-[10px] text-[#1C2B3A]/35 block">{q.location}</span>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </section>

      {/* B) Dary */}
      <section className="py-20 md:py-28 bg-[#FAF8F4]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={reveal} className="text-center mb-12">
              <SectionLabel>Finanční podpora</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2B3A] font-heading tracking-tight mb-4">
                Podpořte Tergar Česko
              </h2>
              <p className="text-base text-[#1C2B3A]/55 font-light leading-relaxed max-w-xl mx-auto">
                Vaše dary pomáhají financovat organizaci meditačních setkání, překlady učení do češtiny, pronájem prostor a rozvoj komunity v České republice.
              </p>
            </motion.div>

            {/* Donation cards */}
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Bank transfer */}
              <motion.div
                variants={reveal}
                className="bg-gradient-to-br from-[#1B4087] to-[#2a5caa] rounded-2xl p-7 md:p-8 text-white"
              >
                <h3 className="text-lg font-bold font-heading mb-4">Bankovní převod</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 font-heading block mb-1">Číslo účtu</span>
                    <span className="text-white/90 font-mono text-sm">XXXX XXXX XXXX / XXXX</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 font-heading block mb-1">IBAN</span>
                    <span className="text-white/90 font-mono text-sm break-all">CZ00 XXXX XXXX XXXX XXXX XXXX</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 font-heading block mb-1">Variabilní symbol</span>
                    <span className="text-white/90 font-mono text-sm">000</span>
                  </div>
                </div>
                <p className="text-white/40 text-xs font-light">
                  Jako zprávu pro příjemce uveďte „dar Tergar".
                </p>
              </motion.div>

              {/* PayPal / Online */}
              <motion.div
                variants={reveal}
                className="bg-[#F4F1EC] rounded-2xl border border-[#E8E4DD]/50 p-7 md:p-8 flex flex-col"
              >
                <h3 className="text-lg font-bold font-heading text-[#1C2B3A] mb-4">Online platba</h3>
                <p className="text-sm text-[#1C2B3A]/55 font-light leading-relaxed mb-6 flex-1">
                  Podpořte nás jednorázově nebo pravidelně přes PayPal nebo platební bránu.
                </p>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0070ba] text-white px-6 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-[#005ea6] transition-colors duration-300 font-heading"
                  >
                    Darovat přes PayPal
                    <ExternalLink size={11} />
                  </a>
                  <a
                    href="https://darujme.cz/projekt/1202868"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 border border-[#E8E4DD]/50 text-[#1C2B3A]/70 px-6 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] hover:border-[#C9962A]/30 hover:text-[#C9962A] transition-all duration-300 font-heading"
                  >
                    Darovat přes Darujme.cz
                    <ExternalLink size={11} />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Tax deductibility note */}
            <motion.div
              variants={reveal}
              className="bg-[#C9962A]/5 border border-[#C9962A]/15 rounded-2xl p-6 text-center"
            >
              <Heart size={20} className="text-[#C9962A] mx-auto mb-3" strokeWidth={1.5} />
              <h4 className="text-sm font-bold text-[#1C2B3A] font-heading mb-2">Daňová uznatelnost darů</h4>
              <p className="text-sm text-[#1C2B3A]/55 font-light leading-relaxed max-w-lg mx-auto">
                Tergar Česko je registrovaný spolek. Vaše dary jsou daňově uznatelné podle § 15 odst. 1 zákona o daních z příjmů.
                Na požádání vystavíme potvrzení o přijetí daru pro účely daňového přiznání.
                Fyzické osoby si mohou odečíst dary od základu daně, pokud úhrnná hodnota darů přesáhne 2 % základu daně nebo činí alespoň 1 000 Kč.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
