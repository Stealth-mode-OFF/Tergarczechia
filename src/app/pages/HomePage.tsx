import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, BookOpen, Calendar, Sparkles } from 'lucide-react';
import heroImage from 'figma:asset/3045fb23a75925f22c5576f76ae4d6f4ccd1cb7d.png';
import monkImage from 'figma:asset/e59d7e68a992f4bae38acfbbed942cfdeea85360.png';
import treeImage from 'figma:asset/959da14919cb8eebf4b116dcf987829a22a72e7b.png';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - NO text overlay on main image per guidelines */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-tergar-blue/30 via-transparent to-white" />
        </div>
        
        {/* Content below image */}
        <div className="relative z-10 w-full mt-auto pb-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-space-blue leading-tight">
                Objevte klid uprostřed chaosu
              </h1>
              <p className="text-lg md:text-xl mb-8 text-base-05 leading-relaxed">
                Meditace pro moderní život. Najděte rovnováhu, radost a moudrost
                prostřednictvím osvědčených tibetských technik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/programy"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tergar-blue hover:bg-space-blue text-white transition-all duration-300 rounded-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  Začít s meditací
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/co-je-meditace"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-tergar-blue text-tergar-blue hover:bg-tergar-blue hover:text-white transition-all duration-300 rounded-lg font-semibold"
                >
                  Zjistit více
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Tergar Section - Sky gradient background */}
      <section className="py-20 md:py-28 bg-sky-gradient-soft">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-space-blue mb-6">
              Co je Tergar?
            </h2>
            <p className="text-lg md:text-xl text-base-05 leading-relaxed">
              Tergar je mezinárodní komunita zaměřená na meditaci a osvícení, založená
              Yongey Mingyur Rinpočem. Nabízíme přístupné a praktické učení, které
              kombinuje starobylou tibetskou moudrost s moderním vědeckým poznáním.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-tergar-blue to-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-space-blue">
                Soucit a moudrost
              </h3>
              <p className="text-base-05 leading-relaxed">
                Rozvíjejte laskavost k sobě i druhým a objevte vnitřní moudrost, kterou už
                máte.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-tergar-gold to-yellow rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-space-blue">
                Komunita
              </h3>
              <p className="text-base-05 leading-relaxed">
                Připojte se k globální komunitě praktikujících a sdílejte cestu s ostatními.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-tergar-blue to-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BookOpen className="text-white" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-space-blue">
                Postupná cesta
              </h3>
              <p className="text-base-05 leading-relaxed">
                Strukturované programy navržené tak, aby vás krok za krokem provedly meditační praxí.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section with Monk - Clean, airy layout */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <img
                src={monkImage}
                alt="Meditující mnich"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-light-blue/30 rounded-full text-tergar-blue font-semibold text-sm">
                <Sparkles size={16} />
                Pro každého
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-space-blue">
                Meditace je pro každého
              </h2>
              <p className="text-lg text-base-05 leading-relaxed">
                Nemusíte být buddhistou ani mít zkušenosti s meditací. Naše programy jsou
                navrženy pro každého, kdo hledá větší klid, jasnost a štěstí v životě.
              </p>
              <p className="text-lg text-base-05 leading-relaxed">
                Učíme techniky, které můžete snadno integrovat do svého každodenního života
                – ať už máte pět minut nebo hodinu.
              </p>
              <Link
                to="/cesta-tergar"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-tergar-gold hover:bg-yellow text-white transition-all duration-300 rounded-lg font-semibold shadow-lg hover:shadow-xl"
              >
                Poznejte cestu Tergar
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview - Base background for contrast */}
      <section className="py-20 md:py-28 bg-base-02">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-space-blue mb-6">
              Naše programy
            </h2>
            <p className="text-lg md:text-xl text-base-05 max-w-3xl mx-auto leading-relaxed">
              Vyberte si cestu, která vám vyhovuje – od úvodních kurzů až po pokročilé
              praxe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Program Card 1 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-base-04 group">
              <div className="w-12 h-12 bg-gradient-to-br from-tergar-blue to-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-space-blue group-hover:text-tergar-blue transition-colors">
                Radost života
              </h3>
              <p className="text-base-05 mb-6 leading-relaxed">
                Úvodní kurz pro začátečníky zaměřený na základní meditační techniky a jejich
                aplikaci v každodenním životě.
              </p>
              <Link
                to="/programy"
                className="text-tergar-blue hover:text-tergar-gold font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Zjistit více
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Program Card 2 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-base-04 group">
              <div className="w-12 h-12 bg-gradient-to-br from-tergar-gold to-yellow rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-space-blue group-hover:text-tergar-blue transition-colors">
                Cesta osvobození
              </h3>
              <p className="text-base-05 mb-6 leading-relaxed">
                Pokročilý program pro ty, kdo chtějí prohloubit svou praxi a porozumět
                hlubším aspektům meditace.
              </p>
              <Link
                to="/programy"
                className="text-tergar-blue hover:text-tergar-gold font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Zjistit více
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Program Card 3 */}
            <div className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-base-04 group">
              <div className="w-12 h-12 bg-gradient-to-br from-tergar-blue to-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-space-blue group-hover:text-tergar-blue transition-colors">
                Online kurzy
              </h3>
              <p className="text-base-05 mb-6 leading-relaxed">
                Praktikujte odkudkoliv s našimi online programy vedenými zkušenými učiteli.
              </p>
              <Link
                to="/programy"
                className="text-tergar-blue hover:text-tergar-gold font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Zjistit více
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section with Tree Image - Sky gradient */}
      <section className="py-20 md:py-28 bg-sky-gradient">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-space-blue">
                Připojte se ke komunitě
              </h2>
              <p className="text-lg text-base-05 leading-relaxed">
                Meditace je silnější, když ji praktikujeme společně. Tergar komunita v České
                republice se pravidelně setkává k meditaci, diskusím a retreatům.
              </p>
              <p className="text-lg text-base-05 leading-relaxed">
                Ať už jste začátečník nebo zkušený praktikující, najdete zde podporu,
                inspiraci a přátelství na vaší cestě.
              </p>
              <Link
                to="/komunita"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-tergar-blue hover:bg-space-blue text-white transition-all duration-300 rounded-lg font-semibold shadow-lg hover:shadow-xl"
              >
                Poznat komunitu
                <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              <img
                src={treeImage}
                alt="Meditace v přírodě"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Tergar Blue with gradient overlay */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-tergar-blue" />
        <div className="absolute inset-0 bg-gradient-to-br from-tergar-blue via-space-blue/80 to-tergar-blue opacity-90" />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-white">
            Začněte svou cestu dnes
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Objevte mír, radost a moudrost, které jsou již ve vás. První krok je ten
            nejdůležitější.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programy"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-tergar-gold hover:bg-yellow text-white transition-all duration-300 rounded-lg font-semibold shadow-xl hover:shadow-2xl"
            >
              Prozkoumat programy
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/udalosti"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-tergar-blue transition-all duration-300 rounded-lg font-semibold text-white"
            >
              <Calendar size={20} />
              Nadcházející události
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
