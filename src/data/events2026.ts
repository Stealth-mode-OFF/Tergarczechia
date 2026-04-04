// * 2026 event calendar data — sorted by dateSort for chronological display
export interface Event2026 {
  date: string;
  dateSort: string;
  title: string;
  type: 'online' | 'prezencni' | 'prenos';
  description?: string;
  link?: string;
  free?: boolean;
}

export const events2026: Event2026[] = [
  {
    date: '14. 2.',
    dateSort: '2026-02-14',
    title: 'Losar: Oslava tibetského Nového roku',
    type: 'online',
    description: 'Společná online oslava tibetského Nového roku s meditací a požehnáním.',
  },
  {
    date: '20.–22. 2.',
    dateSort: '2026-02-20',
    title: 'Blueprints of Awakening: Princip gurua',
    type: 'online',
    description: 'Víkendový online retreat zaměřený na vztah žáka a učitele v buddhistické tradici.',
  },
  {
    date: '17.–21. 3.',
    dateSort: '2026-03-17',
    title: 'Flourish: Věda a praxe lidského potenciálu',
    type: 'online',
    description: 'Online summit propojující neurovědu, psychologii a meditační praxi.',
    free: true,
  },
  {
    date: '10.–12. 4.',
    dateSort: '2026-04-10',
    title: 'Mahamudra a zářivá mysl: Retreat s Mingyurem Rinpočhem',
    type: 'online',
    description: 'Retreat s přímým vedením Mingyura Rinpočheho zaměřený na praxi Mahamudry.',
  },
  {
    date: '22.–24. 5.',
    dateSort: '2026-05-22',
    title: 'Blueprints of Awakening: Závěrečný retreat',
    type: 'online',
    description: 'Závěrečný retreat série Blueprints of Awakening.',
  },
  {
    date: '18.–19. 7.',
    dateSort: '2026-07-18',
    title: 'Anytime Anywhere Meditation Workshop',
    type: 'prenos',
    description: 'Živý přenos workshopu z Francie. Úvodní meditační program vhodný pro každého.',
  },
  {
    date: '24.–26. 7.',
    dateSort: '2026-07-24',
    title: 'Cesta osvobození úroveň 1 Retreat',
    type: 'prenos',
    description: 'Živý přenos retreatu z USA. První úroveň programu Path of Liberation.',
  },
  {
    date: '14.–16. 8.',
    dateSort: '2026-08-14',
    title: 'Dzogchen přenosový retreat s Mingyurem Rinpočhem',
    type: 'online',
    description: 'Online retreat s Mingyurem Rinpočhem zaměřený na praxi Dzogchenu.',
  },
  {
    date: '4.–6. 12.',
    dateSort: '2026-12-04',
    title: 'Bardo Retreat',
    type: 'prenos',
    description: 'Živý přenos retreatu z Káthmándú. Učení o bardech — přechodových stavech.',
  },
];
