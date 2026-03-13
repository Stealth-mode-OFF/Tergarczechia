import { ArrowRight, MapPin, Mail, Globe, Clock, Calendar, ExternalLink } from 'lucide-react';
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
    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-tergar-gold font-heading mb-6">
      {children}
    </span>
  );
}

export interface PracticeGroup {
  name: string;
  language: string;
  languageFlag: string;
  schedule: string;
  time: string;
  location: string;
  address: string;
  mapsLink: string;
  contact: string;
  color: string;
}

const practiceGroups: PracticeGroup[] = [
  {
    name: 'Pražská skupina — česky',
    language: 'Čeština',
    languageFlag: '🇨🇿',
    schedule: 'Každý 2. a 4. čtvrtek v měsíci',
    time: '19:00–20:30',
    location: 'Chorvatská 12, Praha',
    address: 'Chorvatská 12, Praha 10',
    mapsLink: 'https://maps.google.com/?q=Chorvatská+12,+Praha+10',
    contact: 'czech@tergar.org',
    color: '#1B4087',
  },
  {
    name: 'Prague Group — English',
    language: 'English',
    languageFlag: '🇬🇧',
    schedule: 'Every 2nd and 4th Thursday',
    time: '19:00–20:30',
    location: 'Chorvatská 12, Praha',
    address: 'Chorvatská 12, Praha 10',
    mapsLink: 'https://maps.google.com/?q=Chorvatská+12,+Praha+10',
    contact: 'czech@tergar.org',
    color: '#7B1A1A',
  },
];

export function SkupinyPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-[#f0f2f5] to-white overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-tergar-blue/5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <SectionLabel>Skupiny</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-space-blue font-heading tracking-tight leading-[1.08] mb-6">
              Meditační skupiny v Praze
            </h1>
            <p className="text-lg sm:text-xl text-space-blue/60 leading-relaxed font-light max-w-2xl">
              Tergar Česko provozuje dvě pravidelné praxové skupiny v Praze — českou a anglickou.
              Setkání jsou otevřená všem, bez ohledu na úroveň zkušeností.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice group cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20"
          >
            {practiceGroups.map((group, i) => (
              <motion.div
                key={i}
                variants={reveal}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="h-1.5 bg-gradient-to-r" style={{ background: `linear-gradient(to right, ${group.color}, ${group.color}cc)` }} />
                <div className="p-7 md:p-8">
                  {/* Group name + language */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3 className="text-lg font-bold text-space-blue font-heading leading-tight mb-1">
                        {group.name}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-xs text-space-blue/40 font-light">
                        <Globe size={11} />
                        {group.languageFlag} {group.language}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Calendar size={14} className="text-space-blue/30 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm text-space-blue/70 font-medium block">{group.schedule}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={14} className="text-space-blue/30 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-space-blue/70">{group.time}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={14} className="text-space-blue/30 mt-0.5 flex-shrink-0" />
                      <a
                        href={group.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-tergar-blue hover:underline inline-flex items-center gap-1"
                      >
                        {group.location}
                        <ExternalLink size={10} className="opacity-40" />
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={14} className="text-space-blue/30 mt-0.5 flex-shrink-0" />
                      <a
                        href={`mailto:${group.contact}`}
                        className="text-sm text-tergar-blue hover:underline"
                      >
                        {group.contact}
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-xs text-space-blue/35 font-light leading-relaxed">
                    Není třeba předchozí registrace. Přijďte kdykoliv.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map embed placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="max-w-3xl mx-auto mb-20"
          >
            <div className="rounded-2xl overflow-hidden border border-gray-100 bg-[#fafbfc]">
              <div className="aspect-[2/1] md:aspect-[3/1] bg-gradient-to-br from-[#e8eaed] to-[#f0f2f5] flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin size={32} className="text-space-blue/15 mx-auto mb-2" />
                  <p className="text-sm text-space-blue/30 font-light">Chorvatská 12, Praha 10</p>
                  <a
                    href="https://maps.google.com/?q=Chorvatská+12,+Praha+10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest font-heading text-tergar-blue mt-3 hover:gap-2.5 transition-all"
                  >
                    Otevřít v Google Maps <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* How to start a group */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={reveal} className="text-center mb-10">
              <SectionLabel>Založte skupinu</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-space-blue font-heading tracking-tight mb-4">
                Jak založit vlastní skupinu
              </h2>
              <p className="text-base text-space-blue/55 font-light leading-relaxed">
                Chcete meditovat s ostatními ve vašem městě? Založení Tergar praxové skupiny je jednodušší, než si myslíte. Stačí pár lidí a pravidelný prostor.
              </p>
            </motion.div>

            <motion.div variants={reveal} className="space-y-4 mb-10">
              {[
                { num: '1', text: 'Najděte alespoň 3 lidi, kteří chtějí pravidelně meditovat.' },
                { num: '2', text: 'Zajistěte klidný prostor pro setkávání — může to být i obývák.' },
                { num: '3', text: 'Kontaktujte nás — pomůžeme s materiály, programem a propojením s komunitou.' },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4 bg-[#fafbfc] rounded-xl p-5 border border-gray-100/80">
                  <div className="w-8 h-8 rounded-full bg-tergar-blue/8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-tergar-blue font-heading">{step.num}</span>
                  </div>
                  <p className="text-sm text-space-blue/60 font-light leading-relaxed pt-1">{step.text}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={reveal}
              className="bg-gradient-to-br from-[#1B4087] to-[#2a5caa] rounded-2xl p-8 md:p-10 text-white shadow-lg text-center"
            >
              <Mail size={28} strokeWidth={1.5} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold font-heading mb-3">Mám zájem založit skupinu</h3>
              <p className="text-white/70 font-light text-sm mb-6 leading-relaxed max-w-md mx-auto">
                Napište nám a my vás provedeme celým procesem. Pomůžeme s materiály i s propojením na Tergar International.
              </p>
              <a
                href="mailto:czech@tergar.org?subject=Založení nové meditační skupiny"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 group"
              >
                <span>czech@tergar.org</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
