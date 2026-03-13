import { Calendar, Monitor, Radio, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { events2026 } from '@/data/events2026';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9962A] font-heading mb-6">
      {children}
    </span>
  );
}

const typeConfig = {
  online: { label: 'Online', icon: Monitor, color: '#3b82f6', bg: 'bg-blue-50 text-blue-700 border-blue-200' },
  prezencni: { label: 'Prezenčně', icon: MapPin, color: '#22c55e', bg: 'bg-green-50 text-green-700 border-green-200' },
  prenos: { label: 'Živý přenos', icon: Radio, color: '#a855f7', bg: 'bg-purple-50 text-purple-700 border-purple-200' },
};

export function UdalostiPage() {
  // Group events by quarter
  const q1 = events2026.filter(e => ['01', '02', '03'].includes(e.dateSort.slice(5, 7)));
  const q2 = events2026.filter(e => ['04', '05', '06'].includes(e.dateSort.slice(5, 7)));
  const q3 = events2026.filter(e => ['07', '08', '09'].includes(e.dateSort.slice(5, 7)));
  const q4 = events2026.filter(e => ['10', '11', '12'].includes(e.dateSort.slice(5, 7)));

  const quarters = [
    { label: 'Leden – Březen', events: q1 },
    { label: 'Duben – Červen', events: q2 },
    { label: 'Červenec – Září', events: q3 },
    { label: 'Říjen – Prosinec', events: q4 },
  ].filter(q => q.events.length > 0);

  return (
    <div className="bg-[#FAF8F4]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1493673272479-a20888bcee10?w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F4]/95 via-[#FAF8F4]/85 to-[#FAF8F4]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <SectionLabel>Harmonogram 2026</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C2B3A] font-heading tracking-tight leading-[1.08] mb-6">
              Události a retreaty
            </h1>
            <p className="text-lg sm:text-xl text-[#1C2B3A]/60 leading-relaxed font-light max-w-2xl">
              Přehled nadcházejících online kurzů, retreatů a živých přenosů s Mingyurem Rinpočhem a dalšími učiteli Tergar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-6 bg-[#FAF8F4] border-b border-[#E8E4DD]/50">
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {Object.entries(typeConfig).map(([key, config]) => {
              const Icon = config.icon;
              return (
                <div key={key} className="flex items-center gap-2 text-xs text-[#1C2B3A]/50 font-light">
                  <Icon size={14} style={{ color: config.color }} />
                  <span>{config.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="container-custom max-w-3xl">
          {quarters.map((quarter, qi) => (
            <motion.div
              key={qi}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-16 last:mb-0"
            >
              <motion.div variants={reveal} className="mb-6">
                <h2 className="text-lg font-bold text-[#1C2B3A] font-heading tracking-tight flex items-center gap-3">
                  <Calendar size={18} className="text-[#C9962A]" />
                  {quarter.label}
                </h2>
                <div className="h-px bg-gradient-to-r from-[#C9962A]/30 to-transparent mt-3" />
              </motion.div>

              <motion.div variants={stagger} className="space-y-4 pl-2 md:pl-4">
                {quarter.events.map((event, i) => {
                  const config = typeConfig[event.type];
                  const Icon = config.icon;
                  return (
                    <motion.div
                      key={i}
                      variants={reveal}
                      className="group relative flex gap-4 md:gap-6 bg-[#F4F1EC] rounded-2xl border border-[#E8E4DD]/50 p-5 md:p-6 hover:bg-[#FAF8F4] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {/* Date column */}
                      <div className="flex-shrink-0 w-20 md:w-24 pt-0.5">
                        <span className="text-sm font-bold font-heading text-[#1C2B3A]/70">{event.date}</span>
                      </div>

                      {/* Timeline dot */}
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div
                          className="w-3 h-3 rounded-full mt-1.5"
                          style={{ backgroundColor: config.color }}
                        />
                        <div className="w-px flex-1 bg-gray-100 mt-1" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 pb-2">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest font-heading border ${config.bg}`}>
                            <Icon size={9} />
                            {config.label}
                          </span>
                          {event.free && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest font-heading bg-[#C9962A]/10 text-[#C9962A] border border-[#C9962A]/20">
                              Zdarma
                            </span>
                          )}
                        </div>
                        <h3 className="text-base font-bold font-heading text-[#1C2B3A] leading-snug mb-1.5">
                          {event.title}
                        </h3>
                        {event.description && (
                          <p className="text-sm text-[#1C2B3A]/50 font-light leading-relaxed">
                            {event.description}
                          </p>
                        )}
                        {event.link && (
                          <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-bold uppercase tracking-widest font-heading text-[#C9962A] opacity-50 group-hover:opacity-100 transition-opacity"
                          >
                            Registrace <ExternalLink size={10} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-[#F4F1EC] border-t border-[#E8E4DD]/50">
        <div className="container-custom text-center max-w-xl">
          <p className="text-sm text-[#1C2B3A]/40 font-light leading-relaxed">
            Události jsou organizovány Tergar International. Registrace a podrobnosti na{' '}
            <a href="https://learning.tergar.org" target="_blank" rel="noopener noreferrer" className="text-[#C9962A] hover:underline">
              learning.tergar.org
            </a>
            . Časy jsou uvedeny v středoevropském čase (CET).
          </p>
        </div>
      </section>
    </div>
  );
}
