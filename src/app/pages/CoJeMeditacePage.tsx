import { Heart, Brain, Sparkles, Users } from 'lucide-react';

export function CoJeMeditacePage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero with Sky Gradient */}
      <section className="bg-sky-gradient-soft py-16 mb-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-space-blue">
              Co je meditace?
            </h1>
            <p className="text-lg md:text-xl text-base-05 leading-relaxed">
              Meditace je umění pracovat s myslí – technika, která nám pomáhá poznat sami
              sebe a rozvinout náš vnitřní potenciál pro štěstí, moudrost a soucit.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Benefits Grid */}
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-space-blue text-center">
            Proč meditovat?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white border border-base-04 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-tergar-blue to-blue rounded-xl flex items-center justify-center mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-space-blue">
                Snížení stresu
              </h3>
              <p className="text-base-05 leading-relaxed">
                Naučte se pracovat s nepříjemnými emocemi a stresem zdravým způsobem.
              </p>
            </div>

            <div className="bg-white border border-base-04 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-tergar-gold to-yellow rounded-xl flex items-center justify-center mb-4">
                <Brain className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-space-blue">
                Lepší soustředění
              </h3>
              <p className="text-base-05 leading-relaxed">
                Rozvíjejte schopnost udržet pozornost a být přítomní v každém okamžiku.
              </p>
            </div>

            <div className="bg-white border border-base-04 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-tergar-blue to-blue rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-space-blue">
                Emocionální rovnováha
              </h3>
              <p className="text-base-05 leading-relaxed">
                Objevte vnitřní klid a stabilitu i uprostřed životních výzev.
              </p>
            </div>

            <div className="bg-white border border-base-04 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-tergar-gold to-yellow rounded-xl flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-space-blue">
                Soucit
              </h3>
              <p className="text-base-05 leading-relaxed">
                Prohlubte laskavost k sobě i ostatním a žijte s větší otevřeností.
              </p>
            </div>
          </div>

          {/* Science Section */}
          <div className="bg-base-02 p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-space-blue">
              Vědecký základ
            </h2>
            <p className="text-lg text-base-05 leading-relaxed mb-6">
              Moderní neurověda potvrzuje, co tibetští mistři učí již staletí: pravidelná
              meditace skutečně mění mozek. Studie ukazují zlepšení v oblastech spojených s
              pozorností, emocemi a empatií.
            </p>
            <p className="text-lg text-base-05 leading-relaxed">
              Yongey Mingyur Rinpoče spolupracuje s předními neurovědci a jeho mozek byl
              zkoumán v rámci studií o meditaci. Výsledky ukazují pozoruhodné změny v mozkové
              aktivitě spojené s pozitivními emocemi a klidem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
