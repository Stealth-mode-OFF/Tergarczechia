export type PathStatus = 'dostupne' | 'brzy' | 'vyzaduje-predchozi';

export interface PathStep {
  id: string;
  level: number;
  title: string;
  subtitle: string;
  description: string;
  status: PathStatus;
  statusLabel: string;
  link?: string;
  prerequisite?: string;
  color: string;
}

export const tergarPathSteps: PathStep[] = [
  {
    id: 'aam',
    level: 0,
    title: 'Anytime Anywhere Meditation',
    subtitle: 'Úvodní workshop',
    description: 'Zhuštěný úvod do meditace pro každého. Naučíte se základy meditace, které můžete praktikovat kdykoliv a kdekoliv — při chůzi, v práci i při běžných denních aktivitách.',
    status: 'dostupne',
    statusLabel: 'Dostupné',
    link: 'https://learning.tergar.org',
    color: '#22c55e',
  },
  {
    id: 'jol1',
    level: 1,
    title: 'Joy of Living 1',
    subtitle: 'Vnitřní klid',
    description: 'Hluboký ponor do základů meditace. Naučíte se pracovat s pozorností, uklidnit mysl a objevit přirozený vnitřní klid. Program kombinuje staletou moudrost s moderní neurovědou.',
    status: 'dostupne',
    statusLabel: 'Dostupné',
    link: 'https://joy.tergar.org',
    color: '#3b82f6',
  },
  {
    id: 'jol2',
    level: 2,
    title: 'Joy of Living 2',
    subtitle: 'Láska a soucit',
    description: 'Druhá úroveň prohlubuje praxi o meditace na lásku a soucit. Naučíte se otevírat srdce sobě i druhým a pracovat s emocemi jako nástrojem růstu.',
    status: 'dostupne',
    statusLabel: 'Dostupné',
    link: 'https://joy.tergar.org',
    prerequisite: 'Joy of Living 1',
    color: '#e11d48',
  },
  {
    id: 'jol3',
    level: 3,
    title: 'Joy of Living 3',
    subtitle: 'Moudrost',
    description: 'Třetí úroveň přináší hlubší porozumění podstatě mysli a reality. Meditace na prázdnotu a vzájemnou závislost — klíčové koncepty buddhistické filozofie aplikované v každodenním životě.',
    status: 'dostupne',
    statusLabel: 'Dostupné',
    link: 'https://joy.tergar.org',
    prerequisite: 'Joy of Living 2',
    color: '#7c3aed',
  },
  {
    id: 'pol1',
    level: 4,
    title: 'Cesta osvobození 1',
    subtitle: 'Path of Liberation — úroveň 1',
    description: 'Vstup na buddhistickou meditační cestu Mahámudry. První úroveň zahrnuje přípravné praxe (ngöndro) a prohlubuje oddanost a porozumění učení.',
    status: 'dostupne',
    statusLabel: 'Dostupné',
    link: 'https://vajrayana.tergar.org',
    prerequisite: 'Joy of Living 3',
    color: '#1B4087',
  },
  {
    id: 'pol2',
    level: 5,
    title: 'Cesta osvobození 2',
    subtitle: 'Path of Liberation — úroveň 2',
    description: 'Pokračování v přípravných praxích a úvod do meditací šamatha a vipašjana v kontextu Mahámudry.',
    status: 'vyzaduje-predchozi',
    statusLabel: 'Vyžaduje předchozí úrovně',
    prerequisite: 'Cesta osvobození 1',
    color: '#1B4087',
  },
  {
    id: 'pol3',
    level: 6,
    title: 'Cesta osvobození 3',
    subtitle: 'Path of Liberation — úroveň 3',
    description: 'Hlubší praxe Mahámudry — rozpoznání podstaty mysli a práce s jemnějšími aspekty meditace.',
    status: 'vyzaduje-predchozi',
    statusLabel: 'Vyžaduje předchozí úrovně',
    prerequisite: 'Cesta osvobození 2',
    color: '#1B4087',
  },
  {
    id: 'pol4',
    level: 7,
    title: 'Cesta osvobození 4',
    subtitle: 'Path of Liberation — úroveň 4',
    description: 'Pokročilá praxe Mahámudry zaměřená na integraci meditačního vhledu do každodenního života.',
    status: 'vyzaduje-predchozi',
    statusLabel: 'Vyžaduje předchozí úrovně',
    prerequisite: 'Cesta osvobození 3',
    color: '#1B4087',
  },
  {
    id: 'pol5',
    level: 8,
    title: 'Cesta osvobození 5',
    subtitle: 'Path of Liberation — úroveň 5',
    description: 'Závěrečná úroveň programu Cesta osvobození. Plné rozvinutí praxe Mahámudry.',
    status: 'vyzaduje-predchozi',
    statusLabel: 'Vyžaduje předchozí úrovně',
    prerequisite: 'Cesta osvobození 4',
    color: '#1B4087',
  },
  {
    id: 'vajrayana',
    level: 9,
    title: 'Vajrayana Online',
    subtitle: 'Pokročilá praxe',
    description: 'Online program vajrayánových praxí pod přímým vedením Mingyura Rinpočheho. Zahrnuje specifické meditační techniky a rituální praxe tibetského buddhismu.',
    status: 'vyzaduje-predchozi',
    statusLabel: 'Vyžaduje předchozí úrovně',
    link: 'https://vajrayana.tergar.org',
    prerequisite: 'Cesta osvobození 5',
    color: '#b45309',
  },
];
