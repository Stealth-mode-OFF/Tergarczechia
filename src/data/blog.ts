export type BlogCategory = 'jak-meditovat' | 'veda' | 'komunita' | 'udalosti';

export interface BlogArticle {
  id: string;
  title: string;
  perex: string;
  category: BlogCategory;
  categoryLabel: string;
  date: string;
  thumbnail?: string;
  link?: string;
}

export const blogCategories: { key: BlogCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'Vše' },
  { key: 'jak-meditovat', label: 'Jak meditovat' },
  { key: 'veda', label: 'Věda o meditaci' },
  { key: 'komunita', label: 'Příběhy komunity' },
  { key: 'udalosti', label: 'Události' },
];

export const blogArticles: BlogArticle[] = [
  {
    id: 'meditace-s-uzkosti',
    title: 'Meditace s úzkostí – jak z nepřítele udělat přítele',
    perex: 'Mingyur Rinpočhe sám jako dítě zažíval silnou úzkost. V tomto článku sdílíme jeho přístup k práci s emocemi — ne proti nim, ale s nimi. Meditace není o potlačení strachu, ale o tom, jak se s ním spřátelit.',
    category: 'jak-meditovat',
    categoryLabel: 'Jak meditovat',
    date: '12. 1. 2026',
  },
  {
    id: 'neuroveda-meditace',
    title: 'Co neurovědci zjistili o meditaci',
    perex: 'Výzkumy na University of Wisconsin ukázaly, že mozek meditujících vykazuje výrazně vyšší aktivitu v oblastech spojených s pozitivními emocemi. Mingyur Rinpočhe byl jedním z prvních buddhistických mnichů testovaných v laboratoři.',
    category: 'veda',
    categoryLabel: 'Věda o meditaci',
    date: '28. 12. 2025',
  },
  {
    id: 'proc-meditujeme-ve-skupine',
    title: 'Proč meditujeme ve skupině',
    perex: 'Meditace je osobní praxe, ale společná meditace ve skupině přináší něco navíc — vzájemnou podporu, pravidelnost a pocit sounáležitosti. Členové pražské skupiny sdílejí své zkušenosti.',
    category: 'komunita',
    categoryLabel: 'Příběhy komunity',
    date: '15. 11. 2025',
  },
];
