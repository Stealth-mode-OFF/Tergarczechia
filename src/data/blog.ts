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
  content?: string;
  youtubeId?: string;
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
    content: `<p>Když bylo Mingyuru Rinpočhemu devět let, trpěl tak silnými záchvaty paniky, že se bál vyjít z místnosti. Srdce mu bušilo, ruce se třásly a svět kolem něj se zdál ohrožující. Pro malého chlapce v tibetském klášteře to byl zdroj obrovského studu — vždyť byl synem uznávaného meditačního mistra Tulku Urgjena Rinpočheho. Jak může budoucí učitel meditace trpět úzkostí?</p>

<p>Ve svých jedenácti letech odešel Mingyur do kláštera Nagi Gompa v nepálských horách, kde se zúčastnil tříletého meditačního ústraní. Právě tam se naučil přístup, který změnil celý jeho život: místo boje s panikou se rozhodl z ní udělat svou přítelkyni. „Použij paniku jako podporu pro meditaci," poradil mu jeho otec. Místo toho, aby se snažil úzkost potlačit nebo od ní utéct, začal ji Mingyur vítat jako objekt své meditace. Když přišla panika, řekl jí: „Vítej. Pojď, meditujme spolu."</p>

<p>Tento přístup je jádrem Mingyurova učení dodnes. Úzkost, strach, hněv — to všechno nejsou nepřátelé meditace, ale její potenciální spojenci. Když se na nepříjemnou emoci podíváme s otevřeným uvědoměním, ztratí svou moc. Nezmizí nutně hned, ale přestane nás ovládat. Jak Mingyur říká: „Problém není v tom, že máme emoce. Problém je v tom, že si myslíme, že bychom je mít neměli."</p>

<p>Pro každého, kdo někdy seděl na meditačním polštáři a cítil, jak v něm stoupá neklid, je tohle osvobozující zpráva. Nemusíte čekat, až budete klidní, abyste mohli meditovat. Naopak — právě ty chvíle, kdy jste plní úzkosti, jsou tím nejcennějším časem pro praxi. Stačí se k úzkosti obrátit s laskavou pozorností a říct: „Vidím tě. Jsi tu vítaná." V tom okamžiku se meditace začíná doopravdy.</p>`,
  },
  {
    id: 'neuroveda-meditace',
    title: 'Co neurovědci zjistili o mozku meditujících',
    perex: 'Výzkumy na University of Wisconsin ukázaly, že mozek meditujících vykazuje výrazně vyšší aktivitu v oblastech spojených s pozitivními emocemi. Mingyur Rinpočhe byl jedním z prvních buddhistických mnichů testovaných v laboratoři.',
    category: 'veda',
    categoryLabel: 'Věda o meditaci',
    date: '28. 12. 2025',
    content: `<p>V roce 2002 přišel Mingyur Rinpočhe do laboratoře neurovědce Richarda Davidsona na University of Wisconsin-Madison. Na hlavě měl 256 elektrod a před sebou úkol: meditovat na soucit na požádání, v krátkých intervalech střídaných s odpočinkem. To, co vědci naměřili, je šokovalo. Během meditace na soucit vyskočila Mingyurova aktivita gama vln o 700 až 800 procent oproti klidovému stavu — což bylo něco, co výzkumníci dosud nikdy nezaznamenali.</p>

<p>Gama vlny jsou spojovány s vyššími kognitivními funkcemi, soustředěním a pocitem vnitřního štěstí. U běžných lidí kolísají v rozmezí desítek procent. Sedminásobný až osminásobný nárůst byl tak mimořádný, že výzkumný tým nejdřív kontroloval, zda přístroje fungují správně. Fungovaly. Média se tohoto příběhu chopila a Mingyur Rinpočhe se stal známým jako „nejšťastnější člověk na světě" — označení, které sám skromně odmítá.</p>

<p>Ještě pozoruhodnější jsou výsledky skenování Mingyurova mozku pomocí magnetické rezonance. Vědci zjistili, že jeho mozek stárne výrazně pomaleji než mozky kontrolní skupiny. Ve věku, kdy mu bylo kolem padesáti, vykazoval jeho mozek znaky člověka o dekádu i více mladšího. Davidson z toho vyvodil závěr, který opakuje dodnes: „Štěstí je dovednost. A jako každá dovednost se dá trénovat."</p>

<p>Tyto výzkumy nemají jen akademický význam. Ukazují, že meditace není jen subjektivní pocit — má měřitelné, fyzické důsledky v mozku. A co je podstatné: nemusíte být tibetský mnich s desítkami tisíc hodin praxe. Davidsonův tým zkoumal i začátečníky a zjistil, že už po osmi týdnech pravidelné meditace dochází k měřitelným změnám v oblastech mozku spojených s regulací emocí a empatií. Každá minuta na polštáři se počítá.</p>`,
  },
  {
    id: 'proc-meditujeme-ve-skupine',
    title: 'Proč meditujeme ve skupině',
    perex: 'Meditace je osobní praxe, ale společná meditace ve skupině přináší něco navíc — vzájemnou podporu, pravidelnost a pocit sounáležitosti. Členové pražské skupiny sdílejí své zkušenosti.',
    category: 'komunita',
    categoryLabel: 'Příběhy komunity',
    date: '15. 11. 2025',
    content: `<p>Meditace je v jádru osobní cesta. Sedíte, zavřete oči, jste sami se svou myslí. Proč tedy chodit meditovat s ostatními? Odpověď je jednoduchá a zároveň hluboká: protože společná praxe nás drží na cestě. V buddhismu se společenství praktikujících nazývá sangha a je považována za jeden ze tří klenotů — stejně důležitá jako samotné učení.</p>

<p>Praktický přínos skupinové meditace je zřejmý každému, kdo se někdy pokoušel meditovat sám doma. Dneska nemám čas. Zítra začnu. Ten polštář vypadá nepohodlně. Mysl je mistr ve vymýšlení výmluv. Ale když víte, že vás ve čtvrtek večer čeká skupina lidí, kteří sedí společně — najednou je mnohem těžší to vzdát. Pravidelnost je základ meditační praxe a skupina ji přirozeně vytváří.</p>

<p>Je tu ale i něco subtilnějšího. Když meditujete ve skupině, sdílíte společný záměr. Každý člověk v místnosti se rozhodl věnovat tento čas praxi — a ta společná energie je cítit. Není to žádná mystika, je to prostá lidská zkušenost: dělat něco společně s ostatními je jiné než dělat to sám. Sportovci to vědí, muzikanti to vědí a meditující to vědí taky.</p>

<p>V pražské skupině Tergar se scházíme pravidelně ve čtvrtky. Formát je jednoduchý: krátký úvod, společná meditace, prostor pro otázky a sdílení. Přicházejí lidé s různou úrovní zkušeností — od úplných začátečníků po ty, kdo meditují roky. A právě v tom je kouzlo sanghy: nikdo nikoho nehodnotí, nikdo nesoutěží. Jsme tu prostě spolu, každý se svou myslí, každý na své cestě. Pokud jste ještě nikdy nezkoušeli meditovat ve skupině, přijďte. Možná budete překvapeni, jaký rozdíl to udělá.</p>`,
  },
  {
    id: 'opici-mysl',
    title: 'Opičí mysl – proč nemůžeme zastavit myšlenky',
    perex: 'Mysl skáče z myšlenky na myšlenku jako opice ze stromu na strom. Mingyur Rinpočhe učí, že řešením není opici zkrotit, ale dát jí práci.',
    category: 'jak-meditovat',
    categoryLabel: 'Jak meditovat',
    date: '5. 2. 2026',
    content: `<p>Jedna z nejčastějších stížností začínajících meditujících zní: „Nedokážu zastavit myšlenky." Sedí na polštáři, soustředí se na dech — a za tři vteřiny už přemýšlejí o tom, co budou mít k obědu, jestli odpověděli na ten email, a proč jim koleno tak divně vrže. Mingyur Rinpočhe pro tento stav používá slavný obraz opičí mysli: naše mysl je jako opice, která neustále skáče z větve na větev, z myšlenky na myšlenku, nikdy nezůstane v klidu.</p>

<p>Většina lidí se instinktivně pokouší opici chytit a přivázat ke stromu. Snaží se myšlenky potlačit silou vůle, zatnout zuby a „nemyslet". Jenže to nefunguje — čím víc se snažíte nemyslet, tím víc myšlenek přichází. Je to jako snažit se neusnout: samotná snaha vás udržuje vzhůru. Mingyur Rinpočhe nabízí zcela jiný přístup: nedávejte opici pouta, dejte jí práci.</p>

<p>Co to znamená prakticky? Místo boje s myšlenkami dejte mysli jednoduchý úkol — uvědomování si dechu. Ne kontrolu dechu, ne hluboké dýchání, jen prosté všímání si toho, že dýcháte. Opice dostane práci a uklidní se. Když odbočí (a ona odbočí — to je její přirozenost), jednoduše ji jemně vraťte zpět. Žádné hodnocení, žádné zklamání. Jen návrat. Znovu a znovu.</p>

<p>Krása tohoto přístupu je v tom, že každé „selhání" je vlastně úspěch. Pokaždé, když si uvědomíte, že vaše mysl odběhla, je to okamžik uvědomění — a to je přesně to, co meditací trénujete. Nejde o to mít prázdnou mysl. Jde o to si všimnout, co v mysli je. Jak říká Mingyur: „Pokud si dokážete uvědomit, že vaše mysl bloudí, už meditujete." Opice nezmizí. Ale místo divokého zvířete se z ní stane váš nejlepší přítel na cestě.</p>`,
    youtubeId: '4PkrhH-bkpk',
  },
  {
    id: 'tri-kroky-meditace',
    title: 'Tři kroky k meditaci kdekoliv a kdykoliv',
    perex: 'Meditace není jen zavřené oči na polštáři. Mingyur Rinpočhe učí tři jednoduché kroky, díky kterým můžete meditovat při chůzi, jídle i práci.',
    category: 'jak-meditovat',
    categoryLabel: 'Jak meditovat',
    date: '20. 2. 2026',
    content: `<p>Jedna z největších bariér meditace je představa, že potřebujete speciální podmínky: tichý pokoj, meditační polštář, kadidlo, zvoneček a třicet minut nerušeného času. Mingyur Rinpočhe tuhle představu boří s úsměvem: „Meditovat můžete kdekoliv a kdykoliv. Ve frontě v obchodě, v metru, při mytí nádobí." Jeho přístup nazývaný Anytime Anywhere Meditation stojí na třech jednoduchých krocích.</p>

<p><strong>Krok první: Uvědomění těla.</strong> Začněte tím, že si uvědomíte, že máte tělo. Zní to absurdně, ale většinu dne žijeme výhradně v hlavě — v myšlenkách, plánech, starostech. Stačí na okamžik přenést pozornost do těla. Cítíte nohy na zemi? Ruce na klávesnici? Váhu těla na židli? Tento jednoduchý posun pozornosti vás okamžitě přivede do přítomného okamžiku. Nemusíte nic měnit, jen si všimnout.</p>

<p><strong>Krok druhý: Uvědomění dechu.</strong> Dech je kotva, která je vždy k dispozici. Nemusíte dýchat zvláštním způsobem — jen si všimněte, že dýcháte. Vzduch vchází dovnitř, vzduch vychází ven. Možná cítíte jemný proud v nosních dírkách, možná pohyb hrudníku nebo břicha. Stačí tři nádechy a výdechy s plnou pozorností. Trvá to patnáct vteřin a účinek je okamžitý.</p>

<p><strong>Krok třetí: Otevřené uvědomění.</strong> Teď rozšiřte pozornost na vše kolem. Zvuky, barvy, pachy, pocity. Nevybírejte si, čeho si všímáte — nechte pozornost být otevřená jako obloha, na které plují mraky. Mraky jsou vaše vjemy a myšlenky. Obloha je vaše uvědomění. Mraky přicházejí a odcházejí. Obloha zůstává.</p>

<p>Tyto tři kroky dohromady zaberou méně než minutu. A přesto — pokud je budete praktikovat několikrát denně, změní způsob, jakým prožíváte svůj život. Meditace přestane být něco, co „děláte", a stane se tím, čím jste. Není to o dosahování zvláštních stavů. Je to o uvědomění toho, co se už děje. Právě teď.</p>`,
    youtubeId: 'BjKS1HQFYP8',
  },
  {
    id: 'tajne-putovani',
    title: 'Mingyurovo tajné putování – čtyři roky jako bezdomovec',
    perex: 'V roce 2011 Mingyur Rinpočhe tajně opustil svůj klášter a vydal se na čtyřleté putování jako bezdomovec bez peněz a bez doprovodu. Vrátil se jako jiný člověk.',
    category: 'komunita',
    categoryLabel: 'Příběhy komunity',
    date: '8. 3. 2026',
    content: `<p>V noci 6. června 2011 napsal Mingyur Rinpočhe dopis svým studentům, nechal ho na stole ve svém pokoji v klášteře Tergar v indické Bodhgáji, a tiše odešel do tmy. Žádný doprovod, žádné peníze, žádný plán. Jeden z nejuznávanějších buddhistických učitelů své generace — člověk, který vedl meditační centra po celém světě — se rozhodl žít jako bezdomovec. Prostý jogín putující po Indii a Nepálu, bez jakéhokoliv záchytného bodu.</p>

<p>Pro jeho studenty a blízké to byl šok. Pro Mingyura to byl krok, o kterém snil roky. V tibetské buddhistické tradici existuje praxe putovního ústraní, kdy praktikující opustí veškerý komfort a vydá se na cestu bez cíle. Mingyur chtěl otestovat své učení v nejdrsnějších podmínkách. Dokáže meditovat, když nemá co jíst? Dokáže zůstat v klidu, když spí pod mostem? Je jeho praxe skutečná, nebo jen produkt pohodlného klášterního života?</p>

<p>Odpověď přišla bolestivě. Někdy během prvního roku dostal Mingyur těžkou otravu jídlem v odlehlé oblasti Indie. Zvracel, měl horečku, nemohl se pohnout. Ležel sám na břehu řeky a cítil, jak se jeho tělo vypíná. „Myslel jsem, že umírám," popsal později. V tom okamžiku — na hranici mezi životem a smrtí — prožil něco, co nazval svým nejhlubším meditačním zážitkem. Veškerý strach se rozpustil. Zůstalo jen čisté uvědomění, jasné a zářivé.</p>

<p>Mingyur Rinpočhe se z nemoci zotavil a pokračoval v putování další tři roky. V lednu 2015 se vrátil do svého kláštera — hubený, opálený, a podle svých slov vnitřně proměněný. Své zkušenosti popsal v knize „In Love with the World: A Monk's Journey Through the Bardos of Living and Dying", která se stala bestsellerem. Je to mimořádně upřímný a lidský popis toho, co se stane, když člověk opustí všechno, na čem lpí. A zjistí, že to, co zůstane, je víc než dost.</p>`,
  },
];

export interface YouTubeVideo {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  duration?: string;
}

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: 'meditation-and-the-brain',
    youtubeId: 'Grb0QgHSCro',
    title: 'Happiness is a Skill — Mingyur Rinpoche',
    description: 'Mingyur Rinpočhe vysvětluje, proč je štěstí dovednost, kterou se může naučit každý.',
    duration: '15:30',
  },
  {
    id: 'how-to-meditate',
    youtubeId: '2OVbg_wKjLc',
    title: 'How to Meditate — Guided Session',
    description: 'Vedená meditace s Mingyurem Rinpočhem. Ideální pro začátečníky.',
    duration: '12:45',
  },
  {
    id: 'monkey-mind',
    youtubeId: '4PkrhH-bkpk',
    title: 'The Secret of the Monkey Mind',
    description: 'Slavná přednáška o opičí mysli a jak se s ní spřátelit.',
    duration: '18:20',
  },
  {
    id: 'awareness-meditation',
    youtubeId: 'BjKS1HQFYP8',
    title: 'Awareness is Everywhere',
    description: 'Meditace uvědomění — jak meditovat kdekoliv a kdykoliv.',
    duration: '10:15',
  },
];
