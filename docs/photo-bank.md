# Tergar Czechia — Photo Bank

Kurátorované Unsplash URL použité v předchozích pass tohoto projektu + doporučené nové. Rozděleno podle účelu. Nejnovější curation byla commit `30dd459` (3. pass — „sunsets, incense, candles, mountains, autumn trees, starry sky").

**Pravidlo výběru:** warm/desaturated, real practitioners nebo nature preferred, žádné saturované stock Tibet, žádné lotosy/mudry/prayer flags close-up. Mountain restraint.

**Integrace v Astro:** přidáme `image.remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }]` do `astro.config.mjs` — `<Image>` stáhne, optimalizuje do AVIF/WebP at build, žádná runtime závislost.

---

## Hero & landscape (1920×1080, home, page tops)

| ID | URL | Popis | Použití |
|---|---|---|---|
| A1 | `photo-1506905925346-21bda4d32df4` | Hory nad mraky, golden hour — klidné vrstvy | Home hero, Cesta intro |
| A2 | `photo-1507525428034-b723cf961d3e` | Oceán z ptačí perspektivy, minimalist | Meditace page hero |
| A3 | `photo-1451187580459-43490279c0fa` | Mountain ridge fog — kontemplativní | O nás hero |
| A4 | `photo-1465056836900-8f1e940f3404` | Mlha a stromy v zimě | Zapojte se hero, alternativa Home |
| A5 | `photo-1470115636492-6d2b56f9b754` | Les s paprsky slunce | Inspirace hero |
| A6 | `photo-1490730141103-6cac27aaab94` | Horská cesta ve večerním světle | Cesta detail pages |
| A7 | `photo-1507413245164-6160d8298b31` | Hvězdná obloha nad horami | Programy hero |
| A8 | `photo-1508672019048-805c876b67e2` | Detail stromu, bokeh | Článek hero, blog |
| A9 | `photo-1559757175-5700dde675bc` | Tichá zátoka, modrá hodina | Udalosti hero |
| A10 | `photo-1609766857326-18a204b63e81` | Poušť/dune, minimal | Daru / kontakt hero |

## Nature / kontemplativní (800×500, card covers)

| ID | URL | Popis | Použití |
|---|---|---|---|
| N1 | `photo-1476900164809-ff19b8ae5968` | Západ slunce, silueta stromu | Blog thumb — příroda |
| N2 | `photo-1493673272479-a20888bcee10` | Podzimní listí, warm | Blog thumb — praxe |
| N3 | `photo-1506126613408-eca07ce68773` | Mlha v lese | Blog thumb — kontemplace |
| N4 | `photo-1528715471579-d1bcf0ba5e83` | Žena u okna, ranní světlo | Článek „úzkost" |
| N5 | `photo-1464278533981-50106e6176b1` | Stezka v lese, sólo poutník | Článek „tajné putování" |
| N6 | `photo-1453847668862-487637052f8a` | Laboratoř / elektroda setup | Článek „neuroveda" |
| N7 | `photo-1516966324705-bbc444a14ef6` | Detail stromu, větve | Článek „opičí mysl" |
| N8 | `photo-1517486808906-6ca8b3f04846` | Skupina lidí u vody, silueta | Článek „komunita" |
| N9 | `photo-1474418397713-7ede21d49118` | Mlhavé údolí | Resource card |
| N10 | `photo-1500534623283-312aade485b7` | Hvězdná obloha nad horou | Resource card |

## Praxe / interiér / detail (600–800 portrait & landscape)

| ID | URL | Popis | Použití |
|---|---|---|---|
| P1 | `photo-1544027993-37dbfe43562a` | Vonné tyčinky detail | Galerie, Skupiny |
| P2 | `photo-1545389336-cf090694435e` | Svíčky v řadě | Galerie, Rozvrh |
| P3 | `photo-1510797215324-95aa89f43c33` | Matracový polštář / meditační kout | Ukázka skupin |
| P4 | `photo-1528164344705-47542687000d` | Detail sedění, ruce | Programy detail |
| P5 | `photo-1499209974431-9dddcece7f88` | Kniha + čaj, zátiší | Inspirace article card |
| P6 | `photo-1501854140801-50d01698950b` | Temple interiér světlo | Alternativa pro O nás |

## Komunita / lidé (warm, reálné)

| ID | URL | Popis | Použití |
|---|---|---|---|
| C1 | `photo-1517457373958-b7bdd4587205` | Skupina u stolu, sdílení | Skupiny, Zapojte se |
| C2 | `photo-1541849546-216549ae216d` | Procházka v přírodě | Community banner |
| C3 | `photo-1603228254119-e6a4d095dc59` | Walking meditation | Galerie |
| C4 | `photo-1540573133985-87b6da6d54a9` | Skupina v diskusi | Home |

## Textura / abstrakt (pozadí sekcí)

| ID | URL | Popis | Použití |
|---|---|---|---|
| T1 | `photo-1447452001602-7090c7ab2db3` | Mountain abstract, jemná | Pozadí CTA |
| T2 | `photo-1448375240586-882707db888b` | Mlhavé stromy, hloubka | Section divider |
| T3 | `photo-1463852247062-1bbca38f7805` | Voda + odraz, minimalistická | Pozadí quote |
| T4 | `photo-1464822759023-fed622ff2c3b` | Tichá pláž, fade | Pozadí newsletter |
| T5 | `photo-1504198453319-5ce911bafcde` | Mlha hora monochrom | Pozadí daru |
| T6 | `photo-1486870591958-9b9d0d1dda99` | Bambus, monochrom | Slovník hero |

---

## Doporučená rozšíření (ne-historické, kvalitní kandidáti)

Tyto jsem přidal jako upgrady — test buildtime v Astro `<Image>`, vybrat finálně až v Phase 5 review.

| URL slug | Popis | Pro |
|---|---|---|
| `photo-1528164344705-47542687000d` | Meditační polštář, warm tone | Programy |
| `photo-1519677100203-a0e668c92439` | Buddhist architecture detail | O nás |
| `photo-1545239351-ef35f43d514b` | Sunrise over water | Cesta 1 |

---

## Technické URL patterny

Pro Astro `<Image>` používat vždy max kvality (Astro si udělá vlastní srcset). Base URL:

```
https://images.unsplash.com/{PHOTO_ID}?w=2400&q=85&auto=format&fit=crop
```

Astro `remotePatterns` v `astro.config.mjs`:

```js
image: {
  remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
}
```

---

## Vlastní assety (existující, uchovat)

Tyto už jsou v `src/assets/`, re-exportujeme vyšší res source pro AVIF gen:

- `mingyur-portrait.png` (654 KB) — 🔒 keep, lineage face
- `mingyur-waving.png` (102 KB) — keep
- `lineage-tree.png` (188 KB) — preferuju SVG remake inline, ale keep jako fallback
- `vajradhara.png` (402 KB) — keep, use rarely
- `community.png` (27 KB) — keep
- `logo.png` (193 KB) — ➡️ remake jako SVG pro retina + menší payload

---

## TODO pro finální review

- [ ] Josef vybere top 3 hero photos z Hero sekce
- [ ] Ověřit že všechny fotky mají Unsplash license „photos for anything" (default, ale verify pro commercial CZ entity)
- [ ] Phase 5: vyměnit alespoň 3 za vlastní foto od českých praktikujících pokud budou (real > stock)
- [ ] Logo → SVG (1 hod práce nebo AI-generated vector)
- [ ] Lineage tree → SVG (Phase 5, interactive draw-on animation)
