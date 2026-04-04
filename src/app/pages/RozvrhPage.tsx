// * Weekly schedule page — embedded Google Calendar iframe
import { motion } from 'motion/react';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function RozvrhPage() {
  return (
    <div className="bg-[#FAF8F4]">
      {/* Hero */}
      <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 bg-gradient-to-b from-white to-[#FAF8F4] overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9962A] font-heading mb-6">
              Rozvrh
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C2B3A] font-heading tracking-tight leading-[1.08] mb-6">
              Rozvrh meditací a kurzů
            </h1>
            <p className="text-lg sm:text-xl text-[#1C2B3A]/60 leading-relaxed font-light max-w-2xl">
              Přehled všech nadcházejících meditací, kurzů a workshopů. Registrujte se přímo přes Zenamu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zenamu Embed */}
      <section className="pb-24 md:pb-32 bg-[#FAF8F4]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-[#E8E4DD]/50 overflow-hidden"
          >
            <div className="h-1 bg-gradient-to-r from-[#C9962A] via-[#F2D4A8] to-[#C9962A]" />
            <div className="p-1">
              <iframe
                src="https://app.zenamu.com/tergarczechia?view=schedule"
                width="100%"
                height="900"
                frameBorder="0"
                title="Zenamu Rozvrh"
                className="w-full h-[900px] rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
