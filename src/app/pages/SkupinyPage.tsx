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
    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9962A] font-heading mb-6">
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
    <div className="bg-[#FAF8F4]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F4]/95 via-[#FAF8F4]/85 to-[#FAF8F4]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <SectionLabel>Skupiny</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C2B3A] font-heading tracking-tight leading-[1.08] mb-6">
              Meditační skupiny v Praze
            </h1>
            <p className="text-lg sm:text-xl text-[#1C2B3A]/60 leading-relaxed font-light max-w-2xl">
              Tergar Česko provozuje dvě pravidelné praxové skupiny v Praze — českou a anglickou.
              Setkání jsou otevřená všem, bez ohledu na úroveň zkušeností.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice group cards */}
      <section className="py-20 md:py-28 bg-[#FAF8F4]">
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
                className="group bg-[#FAF8F4] rounded-2xl border border-[#E8E4DD]/50 overflow-hidden hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="h-1.5 bg-gradient-to-r" style={{ background: `linear-gradient(to right, ${group.color}, ${group.color}cc)` }} />
                <div className="p-7 md:p-8">
                  {/* Group name + language */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h3 className="text-lg font-bold text-[#1C2B3A] font-heading leading-tight mb-1">
                        {group.name}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#1C2B3A]/40 font-light">
                        <Globe size={11} />
                        {group.languageFlag} {group.language}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <Calendar size={14} className="text-[#1C2B3A]/30 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm text-[#1C2B3A]/70 font-medium block">{group.schedule}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={14} className="text-[#1C2B3A]/30 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-[#1C2B3A]/70">{group.time}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={14} className="text-[#1C2B3A]/30 mt-0.5 flex-shrink-0" />
                      <a
                        href={group.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#C9962A] hover:underline inline-flex items-center gap-1"
                      >
                        {group.location}
                        <ExternalLink size={10} className="opacity-40" />
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={14} className="text-[#1C2B3A]/30 mt-0.5 flex-shrink-0" />
                      <a
                        href={`mailto:${group.contact}`}
                        className="text-sm text-[#C9962A] hover:underline"
                      >
                        {group.contact}
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#E8E4DD] mb-4" />
                  <p className="text-xs text-[#1C2B3A]/35 font-light leading-relaxed">
                    Není třeba předchozí registrace. Přijďte kdykoliv.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="max-w-3xl mx-auto mb-20"
          >
            <div className="rounded-2xl overflow-hidden border border-[#E8E4DD]/50 bg-[#F4F1EC]">
              <div className="aspect-[2/1] md:aspect-[5/2] relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&h=500&fit=crop"
                  alt="Praha"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B3A]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-[#C9962A]" />
                    <span className="text-sm font-semibold font-heading">Chorvatská 12, Praha 10</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Chorvatská+12,+Praha+10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest font-heading text-[#C9962A] hover:gap-2.5 transition-all"
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
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] font-heading tracking-tight mb-4">
                Jak založit vlastní skupinu
              </h2>
              <p className="text-base text-[#1C2B3A]/55 font-light leading-relaxed">
                Chcete meditovat s ostatními ve vašem městě? Založení Tergar praxové skupiny je jednodušší, než si myslíte. Stačí pár lidí a pravidelný prostor.
              </p>
            </motion.div>

            <motion.div variants={reveal} className="space-y-4 mb-10">
              {[
                { num: '1', text: 'Najděte alespoň 3 lidi, kteří chtějí pravidelně meditovat.' },
                { num: '2', text: 'Zajistěte klidný prostor pro setkávání — může to být i obývák.' },
                { num: '3', text: 'Kontaktujte nás — pomůžeme s materiály, programem a propojením s komunitou.' },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4 bg-[#F4F1EC] rounded-xl p-5 border border-[#E8E4DD]/50/80">
                  <div className="w-8 h-8 rounded-full bg-[#1C2B3A]/8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[#C9962A] font-heading">{step.num}</span>
                  </div>
                  <p className="text-sm text-[#1C2B3A]/60 font-light leading-relaxed pt-1">{step.text}</p>
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
                className="inline-flex items-center gap-3 bg-[#FAF8F4]/10 hover:bg-[#FAF8F4]/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 group"
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
