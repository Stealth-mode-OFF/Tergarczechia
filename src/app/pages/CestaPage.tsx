import { ExternalLink, Lock, Check, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { tergarPathSteps } from '@/data/tergarPath';

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

function StatusBadge({ status, label }: { status: string; label: string }) {
  const styles = {
    dostupne: 'bg-green-50 text-green-700 border-green-200',
    brzy: 'bg-amber-50 text-amber-700 border-amber-200',
    'vyzaduje-predchozi': 'bg-gray-50 text-gray-500 border-gray-200',
  };
  const icons = {
    dostupne: <Check size={10} />,
    brzy: <Clock size={10} />,
    'vyzaduje-predchozi': <Lock size={10} />,
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest font-heading border ${styles[status as keyof typeof styles]}`}>
      {icons[status as keyof typeof icons]}
      {label}
    </span>
  );
}

export function CestaPage() {
  // Group steps into sections
  const introStep = tergarPathSteps[0]; // AAM
  const jolSteps = tergarPathSteps.slice(1, 4); // JOL 1-3
  const polSteps = tergarPathSteps.slice(4, 9); // POL 1-5
  const vajrayanaStep = tergarPathSteps[9]; // Vajrayana

  return (
    <div className="bg-[#FAF8F4]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1476900164809-ff19b8ae5968?w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F4]/95 via-[#FAF8F4]/85 to-[#FAF8F4]" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <SectionLabel>Meditační cesta</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C2B3A] font-heading tracking-tight leading-[1.08] mb-6">
              Tergar cesta
            </h1>
            <p className="text-lg sm:text-xl text-[#1C2B3A]/60 leading-relaxed font-light max-w-2xl">
              Od prvních kroků v meditaci až po hlubokou buddhistickou praxi. Každý stupeň staví na předchozím a postupně prohlubuje vaše porozumění mysli.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="py-16 md:py-24 bg-[#FAF8F4]">
        <div className="container-custom max-w-4xl">

          {/* Intro — AAM */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={reveal} className="text-center mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1C2B3A]/30 font-heading">Začátek cesty</span>
            </motion.div>
            <motion.div variants={reveal}>
              <StepCard step={introStep} isHighlighted />
            </motion.div>
          </motion.div>

          {/* Connector */}
          <div className="flex justify-center mb-16">
            <div className="w-px h-16 bg-gradient-to-b from-[#22c55e]/30 to-[#3b82f6]/30" />
          </div>

          {/* Joy of Living */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={reveal} className="text-center mb-10">
              <SectionLabel>Radost ze života</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] font-heading tracking-tight mb-3">
                Joy of Living
              </h2>
              <p className="text-sm text-[#1C2B3A]/50 font-light max-w-lg mx-auto">
                Meditační program pro každého bez ohledu na vyznání. Tři úrovně postupně prohlubují praxi.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="space-y-4">
              {jolSteps.map((step) => (
                <motion.div key={step.id} variants={reveal}>
                  <StepCard step={step} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Connector */}
          <div className="flex justify-center mb-16">
            <div className="w-px h-16 bg-gradient-to-b from-[#7c3aed]/30 to-[#1B4087]/30" />
          </div>

          {/* Path of Liberation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-16"
          >
            <motion.div variants={reveal} className="text-center mb-10">
              <SectionLabel>Buddhistická cesta</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] font-heading tracking-tight mb-3">
                Cesta osvobození
              </h2>
              <p className="text-sm text-[#1C2B3A]/50 font-light max-w-lg mx-auto">
                Meditační trénink v tradici Mahámudry pod vedením Mingyura Rinpočheho.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="space-y-4">
              {polSteps.map((step) => (
                <motion.div key={step.id} variants={reveal}>
                  <StepCard step={step} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Connector */}
          <div className="flex justify-center mb-16">
            <div className="w-px h-16 bg-gradient-to-b from-[#1B4087]/30 to-[#b45309]/30" />
          </div>

          {/* Vajrayana */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={reveal} className="text-center mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1C2B3A]/30 font-heading">Pokročilá praxe</span>
            </motion.div>
            <motion.div variants={reveal}>
              <StepCard step={vajrayanaStep} isHighlighted />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#F4F1EC]">
        <div className="container-custom text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <h3 className="text-xl font-bold text-[#1C2B3A] font-heading mb-4">
              Nevíte, kde začít?
            </h3>
            <p className="text-sm text-[#1C2B3A]/50 font-light mb-6">
              Program Anytime Anywhere Meditation je ideální první krok. Další možností je navštívit naši pravidelnou meditační skupinu v Praze.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://learning.tergar.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Začít s AAM
                <ExternalLink size={12} />
              </a>
              <a
                href="/skupiny"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Najít skupinu
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function StepCard({ step, isHighlighted }: { step: typeof tergarPathSteps[0]; isHighlighted?: boolean }) {
  const Wrapper = step.link ? 'a' : 'div';
  const wrapperProps = step.link
    ? { href: step.link, target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative flex items-start gap-5 md:gap-7 rounded-2xl border overflow-hidden transition-all duration-500 ${
        isHighlighted
          ? 'bg-gradient-to-br from-white to-[#F4F1EC] border-[#E8E4DD]/50 shadow-sm p-6 md:p-8 hover:shadow-lg hover:-translate-y-0.5'
          : 'bg-[#FAF8F4] border-[#E8E4DD]/50 p-5 md:p-6 hover:shadow-md hover:-translate-y-0.5'
      } ${step.link ? 'cursor-pointer' : ''}`}
    >
      {/* Level indicator */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <div
          className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-heading font-bold text-white text-sm shadow-lg"
          style={{ backgroundColor: step.color }}
        >
          {step.level + 1}
        </div>
        {!isHighlighted && (
          <div className="w-px h-full bg-gray-100 mt-2 min-h-[20px]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className={`font-bold text-[#1C2B3A] font-heading leading-tight ${isHighlighted ? 'text-lg md:text-xl' : 'text-base'}`}>
            {step.title}
          </h3>
          <StatusBadge status={step.status} label={step.statusLabel} />
        </div>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] font-heading mb-3" style={{ color: step.color }}>
          {step.subtitle}
        </p>
        <p className="text-sm text-[#1C2B3A]/55 leading-relaxed font-light mb-2">
          {step.description}
        </p>
        {step.prerequisite && (
          <p className="text-[10px] text-[#1C2B3A]/35 font-heading">
            Předpoklad: {step.prerequisite}
          </p>
        )}
        {step.link && (
          <span className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-bold uppercase tracking-widest font-heading opacity-50 group-hover:opacity-100 transition-opacity" style={{ color: step.color }}>
            Více informací <ExternalLink size={10} />
          </span>
        )}
      </div>
    </Wrapper>
  );
}
