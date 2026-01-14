// All remaining pages for Czech Tergar website
import { ArrowRight, Calendar, MapPin, Mail, Phone } from 'lucide-react';

export function CestaTergarPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="bg-sky-gradient py-16 mb-20">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-space-blue">
            Cesta Tergar
          </h1>
          <p className="text-lg md:text-xl text-base-05">
            Tergar nabízí strukturovanou cestu k meditační praxi, která kombinuje starobylou
            moudrost s moderním přístupem.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-6 max-w-4xl space-y-8">
        {[
          {
            title: 'Krok 1: Základy',
            desc: 'Začněte s jednoduchými technikami vědomé pozornosti a klidné meditace.',
          },
          {
            title: 'Krok 2: Prohloubení',
            desc: 'Rozvíjejte praxi s pokročilejšími metodami a hlubším porozuměním.',
          },
          {
            title: 'Krok 3: Integrace',
            desc: 'Aplikujte meditaci do každodenního života a objevte trvalou transformaci.',
          },
        ].map((step, i) => (
          <div
            key={i}
            className="bg-white border border-base-04 p-8 rounded-2xl hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4 text-tergar-blue">{step.title}</h2>
            <p className="text-base-05 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProgramyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="bg-sky-gradient-soft py-16 mb-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-space-blue">
            Naše programy
          </h1>
          <p className="text-lg md:text-xl text-base-05 max-w-3xl mx-auto">
            Vyberte si cestu, která vám vyhovuje
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Radost života',
              desc: 'Úvodní kurz pro začátečníky',
              features: ['8týdenní program', 'Online i prezenčně', 'Pro začátečníky'],
            },
            {
              title: 'Cesta osvobození',
              desc: 'Pokročilý program',
              features: ['Průběžný program', 'Pro pokročilé', 'Hlubší praxe'],
            },
            {
              title: 'Retreaty',
              desc: 'Intenzivní praxe v tichu',
              features: ['3-7 dní', 'V přírodě', 'Všechny úrovně'],
            },
          ].map((prog, i) => (
            <div
              key={i}
              className="bg-white border border-base-04 rounded-2xl p-8 hover:shadow-2xl transition-all group"
            >
              <h3 className="text-2xl font-semibold mb-3 text-space-blue group-hover:text-tergar-blue transition-colors">
                {prog.title}
              </h3>
              <p className="text-base-05 mb-6">{prog.desc}</p>
              <ul className="space-y-2 text-base-05 mb-8">
                {prog.features.map((f, j) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>
              <button className="w-full bg-tergar-blue hover:bg-tergar-gold text-white py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
                Přihlásit se
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function KomunitaPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="bg-sky-gradient py-16 mb-20">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-space-blue">
            Komunita
          </h1>
          <p className="text-lg md:text-xl text-base-05">
            Tergar komunita v České republice je živou sítí praktikujících, kteří se vzájemně
            podporují na meditační cestě.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-base-04 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-tergar-blue">
              Meditační skupiny
            </h3>
            <p className="text-base-05 leading-relaxed">
              Pravidelná setkání v Praze a dalších městech. Přijďte meditovat společně každý
              týden.
            </p>
          </div>
          <div className="bg-white border border-base-04 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-tergar-blue">
              Online sangha
            </h3>
            <p className="text-base-05 leading-relaxed">
              Virtuální komunita pro ty, kdo nemohou přijít osobně. Spojte se s ostatními
              online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function UdalostiPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="bg-sky-gradient-soft py-16 mb-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-space-blue">
            Události
          </h1>
          <p className="text-lg md:text-xl text-base-05">
            Nadcházející kurzy, workshopy a retreaty
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-6 max-w-5xl space-y-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white border border-base-04 rounded-2xl p-8 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-space-blue">
                  Úvodní workshop - Radost života
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 text-base-05">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-tergar-gold" />
                    Praha
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-tergar-gold" />
                    15. března 2026 • 10:00 - 16:00
                  </span>
                </div>
              </div>
              <button className="bg-tergar-blue hover:bg-tergar-gold text-white px-8 py-3.5 rounded-lg font-semibold transition-all whitespace-nowrap shadow-lg hover:shadow-xl">
                Přihlásit se
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ONasPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="bg-sky-gradient py-16 mb-20">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-space-blue">
            O nás
          </h1>
          <p className="text-lg md:text-xl text-base-05">
            Tergar Česká republika je součástí mezinárodní organizace Tergar International,
            založené Yongey Mingyur Rinpočem.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-6 max-w-4xl space-y-12">
        <div className="bg-white border border-base-04 p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-space-blue">
            Naše mise
          </h2>
          <p className="text-lg text-base-05 leading-relaxed">
            Zpřístupnit hluboké učení tibetského buddhismu modernímu člověku a podpořit
            rozvoj meditační praxe v České republice.
          </p>
        </div>

        <div className="bg-sky-gradient-soft p-8 md:p-12 rounded-2xl">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-space-blue">
            Yongey Mingyur Rinpoče
          </h2>
          <p className="text-lg text-base-05 leading-relaxed">
            Světově uznávaný meditační mistr a učitel, který jedinečným způsobem spojuje
            tradiční tibetskou moudrost s moderní vědou a psychologií.
          </p>
        </div>
      </div>
    </div>
  );
}

export function KontaktPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="bg-sky-gradient-soft py-16 mb-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-space-blue">
            Kontakt
          </h1>
          <p className="text-lg md:text-xl text-base-05">
            Máte otázky? Rádi vám pomůžeme
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-base-04 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-space-blue">
              Napište nám
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-tergar-gold mt-0.5" />
                <div>
                  <p className="text-sm text-base-05 mb-1">Email:</p>
                  <a
                    href="mailto:info@tergar.cz"
                    className="text-tergar-blue hover:text-tergar-gold font-semibold"
                  >
                    info@tergar.cz
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-tergar-gold mt-0.5" />
                <div>
                  <p className="text-sm text-base-05 mb-1">Telefon:</p>
                  <a
                    href="tel:+420123456789"
                    className="text-tergar-blue hover:text-tergar-gold font-semibold"
                  >
                    +420 123 456 789
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-base-04 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-space-blue">Adresa</h3>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-tergar-gold mt-0.5" />
              <p className="text-base-05 leading-relaxed">
                Tergar Česká republika
                <br />
                Praha 1<br />
                110 00 Praha
                <br />
                Česká republika
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-base-04 p-8 md:p-12 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-8 text-center text-space-blue">
            Kontaktní formulář
          </h3>
          <form className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label className="block text-space-blue mb-2 font-semibold">Jméno</label>
              <input
                type="text"
                className="w-full px-4 py-3.5 bg-base-02 border border-base-04 rounded-lg focus:ring-2 focus:ring-tergar-blue focus:border-transparent transition-all"
                placeholder="Vaše jméno"
              />
            </div>
            <div>
              <label className="block text-space-blue mb-2 font-semibold">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3.5 bg-base-02 border border-base-04 rounded-lg focus:ring-2 focus:ring-tergar-blue focus:border-transparent transition-all"
                placeholder="vas@email.cz"
              />
            </div>
            <div>
              <label className="block text-space-blue mb-2 font-semibold">Zpráva</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3.5 bg-base-02 border border-base-04 rounded-lg focus:ring-2 focus:ring-tergar-blue focus:border-transparent resize-none transition-all"
                placeholder="Vaše zpráva..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-tergar-blue hover:bg-tergar-gold text-white py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              Odeslat zprávu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
