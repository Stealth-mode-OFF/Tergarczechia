import { Mail, MapPin, Facebook, Instagram, Youtube, Send, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
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
    <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#C9962A] font-heading mb-6">
      {children}
    </span>
  );
}

export function KontaktPage() {
  const { contact } = content.footer;
  const { social, newsletter, support } = content.home;

  return (
    <div className="bg-[#FAF8F4]">
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-b from-white to-[#FAF8F4] overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#1C2B3A]/5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl"
          >
            <SectionLabel>Kontakt</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C2B3A] font-heading tracking-tight leading-[1.08] mb-6">
              Napište nám
            </h1>
            <p className="text-lg sm:text-xl text-[#1C2B3A]/60 leading-relaxed font-light max-w-2xl">
              Máte otázku ohledně meditace, kurzů nebo naší komunity? Neváhejte se ozvat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 md:py-28 bg-[#FAF8F4]">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20"
          >
            {/* Email */}
            <motion.a
              href={`mailto:${contact.email}`}
              variants={reveal}
              className="group bg-[#F4F1EC] rounded-2xl border border-[#E8E4DD]/50 p-7 hover:-translate-y-1 hover:shadow-lg hover:bg-white transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-[#1C2B3A]/8 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Mail size={24} className="text-[#C9962A]" />
              </div>
              <h3 className="font-bold text-[#1C2B3A] font-heading text-base mb-2">E-mail</h3>
              <p className="text-sm text-[#1C2B3A]/50 font-light">{contact.email}</p>
            </motion.a>

            {/* Address */}
            <motion.div
              variants={reveal}
              className="bg-[#F4F1EC] rounded-2xl border border-[#E8E4DD]/50 p-7 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-[#C9962A]/10 flex items-center justify-center mx-auto mb-5">
                <MapPin size={24} className="text-[#C9962A]" />
              </div>
              <h3 className="font-bold text-[#1C2B3A] font-heading text-base mb-2">Adresa</h3>
              <p className="text-sm text-[#1C2B3A]/50 font-light leading-relaxed">
                {contact.address.name}<br />
                {contact.address.street}<br />
                {contact.address.city}
              </p>
            </motion.div>

            {/* Newsletter */}
            <motion.a
              href={content.footer.newsletterLink}
              target="_blank"
              rel="noopener noreferrer"
              variants={reveal}
              className="group bg-[#F4F1EC] rounded-2xl border border-[#E8E4DD]/50 p-7 hover:-translate-y-1 hover:shadow-lg hover:bg-white transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-[#1a6b4a]/8 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Send size={24} className="text-[#1a6b4a]" />
              </div>
              <h3 className="font-bold text-[#1C2B3A] font-heading text-base mb-2">Newsletter</h3>
              <p className="text-sm text-[#1C2B3A]/50 font-light">Přihlásit se k odběru novinek</p>
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-lg mx-auto text-center"
          >
            <motion.div variants={reveal}>
              <SectionLabel>Sledujte nás</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] font-heading tracking-tight mb-8">
                Na sociálních sítích
              </h2>
            </motion.div>

            <motion.div variants={reveal} className="flex justify-center gap-4">
              {[
                { href: social.facebook, icon: Facebook, label: 'Facebook', color: '#1877F2' },
                { href: social.instagram, icon: Instagram, label: 'Instagram', color: '#E4405F' },
                { href: social.youtube, icon: Youtube, label: 'YouTube', color: '#FF0000' },
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#F4F1EC] border border-[#E8E4DD]/50 hover:-translate-y-1 hover:shadow-lg hover:bg-white transition-all duration-300 w-28"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${color}12` }}
                  >
                    <Icon size={22} style={{ color }} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-bold font-heading text-[#1C2B3A]/50 group-hover:text-[#1C2B3A] uppercase tracking-wider transition-colors">
                    {label}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 md:py-28 bg-[#F4F1EC]">
        <div className="container-custom text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <SectionLabel>Podpora</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] font-heading tracking-tight mb-4">
              {support.title}
            </h2>
            <p className="text-base text-[#1C2B3A]/55 font-light leading-relaxed mb-8">
              {support.text}
            </p>
            <a
              href={support.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#C9962A] text-[#1C2B3A] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:shadow-lg hover:shadow-[#C9962A]/20 font-heading"
            >
              {support.buttonText}
              <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
