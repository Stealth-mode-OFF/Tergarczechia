import { BookOpen, Headphones, Video, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface Resource {
  title: string;
  description: string;
  type: 'book' | 'audio' | 'video' | 'article';
  link: string;
  duration?: string;
  free?: boolean;
}

const resources: Resource[] = [
  {
    title: 'Radost ze života - kniha',
    description: 'New York Times bestseller od Mingyur Rinpočheho o klíčích k trvalému štěstí',
    type: 'book',
    link: 'https://tergar.org',
    free: false,
  },
  {
    title: 'Úvod do meditace - video série',
    description: 'Bezplatná video série pro začátečníky (5 lekcí)',
    type: 'video',
    link: 'https://tergar.org/meditation-instruction/',
    duration: '45 min celkem',
    free: true,
  },
  {
    title: 'Ranní meditace - audio nahrávky',
    description: 'Vedené meditace na každý den v týdnu',
    type: 'audio',
    link: 'https://app.zenamu.com/tergarczechia',
    duration: '10-20 min',
    free: true,
  },
  {
    title: 'Jak začít meditovat - příručka',
    description: 'Komplexní průvodce pro začátečníky',
    type: 'article',
    link: 'https://tergar.org',
    free: true,
  },
  {
    title: 'Práce s emocemi',
    description: 'Nahrávky workshopu o buddhisické psychologii',
    type: 'audio',
    link: 'https://learning.tergar.org',
    duration: '2 hodiny',
    free: false,
  },
  {
    title: 'In Love with the World',
    description: 'Autobiografie o Rinpočheho cestě za hranice komfortní zóny',
    type: 'book',
    link: 'https://tergar.org',
    free: false,
  },
];

const iconMap = {
  book: BookOpen,
  audio: Headphones,
  video: Video,
  article: FileText,
};

const colorMap = {
  book: 'from-amber-50 to-orange-50 border-amber-200',
  audio: 'from-purple-50 to-pink-50 border-purple-200',
  video: 'from-blue-50 to-cyan-50 border-blue-200',
  article: 'from-green-50 to-emerald-50 border-green-200',
};

export function MeditationResources() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-tergar-gold mb-4">
              Zdroje pro praxi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Meditační zdroje
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Objevte knihy, nahrávky a články které podpoří vaši meditační cestu
            </p>
          </motion.div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = iconMap[resource.type];
            
            return (
              <motion.a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`block bg-gradient-to-br ${colorMap[resource.type]} rounded-xl p-6 border hover:shadow-lg transition-all group relative overflow-hidden`}
              >
                {/* Free Badge */}
                {resource.free && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    ZDARMA
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-start justify-between gap-2">
                    <span>{resource.title}</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {resource.description}
                  </p>

                  {/* Duration */}
                  {resource.duration && (
                    <p className="text-xs text-slate-500 font-medium">
                      ⏱️ {resource.duration}
                    </p>
                  )}

                  {/* Type Label */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {resource.type === 'book' && '📚 Kniha'}
                      {resource.type === 'audio' && '🎧 Audio'}
                      {resource.type === 'video' && '📹 Video'}
                      {resource.type === 'article' && '📄 Článek'}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Additional Resources Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Hledáte více zdrojů?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Navštivte Tergar Learning Community pro přístup k rozsáhlé knihovně učení, 
              vedených meditací a online kurzů od Mingyur Rinpočheho a dalších učitelů.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://learning.tergar.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Tergar Learning Community
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://tergar.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-full font-bold hover:bg-slate-50 transition-colors border border-slate-200"
              >
                Tergar International
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
