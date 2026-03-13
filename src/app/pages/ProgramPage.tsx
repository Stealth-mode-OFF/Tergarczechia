import { useState } from 'react';
import { ArrowRight, ExternalLink, Calendar, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { content } from '@/data/content';

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

export function ProgramPage() {
  const { tergarPath, program } = content.home;
  const [showZenamu, setShowZenamu] = useState(false);

  const eventAccents = [
    { border: 'border-l-[#1B4087]', badge: 'bg-[#1B4087]/8 text-[#1B4087]', text: 'text-[#1B4087]' },
    { border: 'border-l-[#7B1A1A]', badge: 'bg-[#7B1A1A]/8 text-[#7B1A1A]', text: 'text-[#7B1A1A]' },
    { border: 'border-l-[#b07a10]', badge: 'bg-[#b07a10]/8 text-[#b07a10]', text: 'text-[#b07a10]' },
    { border: 'border-l-[#1a6b4a]', badge: 'bg-[#1a6b4a]/8 text-[#1a6b4a]', text: 'text-[#1a6b4a]' },
    { border: 'border-l-[#6b3fa0]', badge: 'bg-[#6b3fa0]/8 text-[#6b3fa0]', text: 'text-[#6b3fa0]' },
  ];

  const tibetanColors = [
    { border: '#7B1A1A', bg: 'from-[#7B1A1A] to-[#5a1212]', badge: 'bg-[#7B1A1A]', accent: '#7B1A1A' },
    { border: '#E39F24', bg: 'from-[#E39F24] to-[#c4870e]', badge: 'bg-[#E39F24]', accent: '#E39F24' },
    { border: '#1B4087', bg: 'from-[#1B4087] to-[#132d5e]', badge: 'bg-[#1B4087]', accent: '#1B4087' },
  ];

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
            <SectionLabel>Program</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-space-blue font-heading tracking-tight leading-[1.08] mb-6">
              Kurzy, workshopy a pravidelné meditace
            </h1>
            <p className="text-lg sm:text-xl text-space-blue/60 leading-relaxed font-light max-w-2xl">
              {program.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tergar Path */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <motion.div variants={reveal}>
              <SectionLabel>Meditační cesta</SectionLabel>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-space-blue font-heading tracking-tight mb-6">
                {tergarPath.title}
              </h2>
            </motion.div>
            <motion.p variants={reveal} className="text-base sm:text-lg text-space-blue/55 leading-relaxed font-light">
              {tergarPath.subtitle}
            </motion.p>
          </motion.div>

          {/* Vajradhara */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="flex justify-center mb-14"
          >
            <div className="relative w-36 h-36 md:w-44 md:h-44 overflow-hidden rounded-full ring-4 ring-tergar-gold/20 shadow-xl">
              <img src={tergarPath.image} alt="Vajradhara" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </motion.div>

          {/* Path cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {tergarPath.items.map((item, i) => {
              const color = tibetanColors[i];
              return (
                <motion.div
                  key={i}
                  variants={reveal}
                  className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1 border border-gray-100"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${color.bg}`} />
                  <div className="p-6 md:p-7">
                    <div className={`w-11 h-11 rounded-full ${color.badge} flex items-center justify-center mb-5 shadow-lg`}>
                      <span className="text-white font-heading font-bold text-sm">{i + 1}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-space-blue font-heading mb-2 leading-tight">{item.title}</h3>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] font-heading mb-4" style={{ color: color.accent }}>
                      {item.subtitle}
                    </p>
                    <div className="w-10 h-px mb-4" style={{ backgroundColor: `${color.accent}30` }} />
                    <p className="text-sm text-space-blue/55 leading-relaxed font-light">{item.description}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-5 text-[11px] font-bold uppercase tracking-widest font-heading hover:gap-2.5 transition-all"
                        style={{ color: color.accent }}
                      >
                        Více na Tergar.org <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f3f0] via-[#faf9f7] to-[#f0eeeb]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tergar-gold/20 to-transparent" />

        <div className="container-custom relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <motion.div variants={reveal}>
              <SectionLabel>Nadcházející akce</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-space-blue font-heading tracking-tight mb-4">
                Kurzy a workshopy
              </h2>
            </motion.div>
            <motion.p variants={reveal} className="text-sm sm:text-base text-space-blue/55 leading-relaxed font-light">
              Registrujte se přes Zenamu. Místa jsou omezená.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
          >
            {program.upcomingEvents.map((event, i) => {
              const accent = eventAccents[i % eventAccents.length];
              return (
                <motion.a
                  key={i}
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={reveal}
                  className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-100/80 ${accent.border} border-l-[3px] flex flex-col shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)] transition-all duration-500`}
                >
                  <div className="px-5 pt-5 pb-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest font-heading ${accent.badge}`}>
                        {event.type === 'online' ? 'Online' : 'Živě'}
                      </span>
                      <div className="flex items-center gap-1.5 text-[10px] text-space-blue/40 font-heading font-semibold">
                        <Calendar size={10} />
                        {event.date}
                      </div>
                    </div>
                    <h3 className="text-base font-bold font-heading leading-snug text-space-blue">
                      {event.title}
                    </h3>
                  </div>
                  <div className="px-5 pb-5 pt-1 flex-grow flex flex-col">
                    <p className="text-sm text-space-blue/50 font-light flex-grow">{event.desc}</p>
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest font-heading mt-3 ${accent.text} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}>
                      Registrace <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href={program.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-tergar-blue text-white px-7 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] hover:bg-space-blue transition-colors duration-300 shadow-lg shadow-tergar-blue/15 font-heading"
            >
              Registrace na kurzy
              <ExternalLink size={12} />
            </a>
            <button
              onClick={() => setShowZenamu(true)}
              className="inline-flex items-center gap-2.5 border border-gray-200 text-space-blue/70 px-7 py-3.5 rounded-full font-bold uppercase tracking-widest text-[11px] hover:border-tergar-blue/30 hover:text-tergar-blue transition-all duration-300 font-heading cursor-pointer"
            >
              <Calendar size={13} />
              Zobrazit rozvrh
            </button>
          </motion.div>
        </div>
      </section>

      {/* Regular Meetings */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <motion.div variants={reveal}>
              <SectionLabel>Pravidelné meditace</SectionLabel>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-space-blue font-heading tracking-tight mb-4">
                Týdenní setkání
              </h2>
            </motion.div>
            <motion.p variants={reveal} className="text-sm sm:text-base text-space-blue/55 leading-relaxed font-light">
              Přijďte meditovat s námi — živě v Praze, Českých Budějovicích, České Lípě, nebo online.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {program.regularMeetings.map((meeting, i) => (
              <motion.a
                key={i}
                href={meeting.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={reveal}
                className="group flex items-center gap-4 bg-[#fafbfc] rounded-xl border border-gray-100/80 px-6 py-5 hover:-translate-y-0.5 hover:shadow-md hover:bg-white transition-all duration-300"
              >
                <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: meeting.color }} />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold font-heading text-space-blue leading-tight">{meeting.title}</h4>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-xs text-space-blue/45 font-light">{meeting.day}</span>
                    <span className="text-space-blue/20">·</span>
                    <span className="inline-flex items-center gap-1 text-xs text-space-blue/45 font-light">
                      <MapPin size={10} />
                      {meeting.location}
                    </span>
                  </div>
                </div>
                <ArrowRight size={12} className="text-space-blue/20 group-hover:text-tergar-blue group-hover:translate-x-0.5 transition-all flex-shrink-0" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Zenamu Modal */}
      <AnimatePresence>
        {showZenamu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowZenamu(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease }}
              className="relative w-full max-w-4xl h-[85vh] sm:h-[80vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-tergar-blue" />
                  <h3 className="text-sm font-bold font-heading text-space-blue">Rozvrh meditací a kurzů</h3>
                </div>
                <button
                  onClick={() => setShowZenamu(false)}
                  className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-space-blue/50 hover:text-space-blue transition-colors cursor-pointer"
                  aria-label="Zavřít"
                >
                  <X size={16} />
                </button>
              </div>
              <iframe
                src={program.zenamuUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Zenamu Rozvrh"
                className="flex-1 w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
