# DESIGN.md — Tergar Česko

> Design bible for AI agents. Edit this file when the design system changes; do not duplicate design rules elsewhere. Pair with `CLAUDE.md` (project guide).

## Identity in one paragraph
Tergar Česko is the **Czech sangha of Yongey Mingyur Rinpočhe's Tergar meditation community**. The site should feel like a well-edited Czech print magazine crossed with a quiet Buddhist monastery: warm paper, slow pace, intentional typography, accents of saffron gold, never shouting. Think *New Yorker* editorial restraint meets *Ngöndro* visual calm. **Never corporate, never SaaS, never "modern startup."**

## Brand palette
| Role | Token | Hex | Notes |
|---|---|---|---|
| Primary | `--tergar-navy` | **#203070** | Karma Kagyü navy — used for headings, nav, teacher section bg |
| Accent | `--accent` | **#E0A020** | Saffron gold — only for CTA, eyebrows, small accents. Never for body text. |
| Accent hover | `--accent-hover` | **#C9861A** | Deeper saffron |
| Warm neutral | `--tergar-cream` | **#F6E7C8** | Cream — kicker pill bg, hero radiance mix |
| Page bg | `--bg` | **#FAF8F4** | Slight warm off-white |
| Surface | `--surface` | **#F2EEE6** | Subtle alternate bg for `<Section surface>` |
| Ink | `--ink` | **~#1A1F2E** | Body text |
| Ink muted | `--ink-muted` | **~#55617A** | Secondary text, ledes |
| Ink soft | `--ink-soft` | **~#8A93A1** | Meta, captions |
| Line | `--line` | light beige | Borders, dividers |

**Rules:**
- **Only 4 colors on a single screen** at most (navy + saffron + cream + ink).
- **Saffron is a spice, not a sauce** — small accent dots, underlines, eyebrow marks, CTA fills. Never large blocks of saffron.
- **No gradients except** (1) hero `bg-dharma-radiance` (existing), (2) `ig-tile-cta` saffron→navy corner. No purple/blue/pink gradients ever.
- **Never** invert to dark mode — project is light-only (see `CLAUDE.md`).

## Typography
- **Serif** (var(--font-serif)) — headings, hero title, pull-quotes, Buddhist term names. Balanced wrapping, -0.01 to -0.02em letter-spacing.
- **Sans** (var(--font-sans)) — body, nav, buttons, forms.
- **Mono** (var(--font-mono)) — eyebrow labels, meta chips, dates, folio numbers (01., 02., …).

### Type scale (clamp-based, responsive)
- `hero-title`: clamp(2.5rem, 5vw, 4rem), line-height 1.05
- `section h2`: clamp(1.875rem, 3vw, 2.75rem), text-wrap: balance
- `card h3`: 1.625rem, line-height 1.2
- `body`: 1rem (1.0625rem on lede), line-height 1.55-1.65
- `eyebrow`: 0.6875-0.75rem, uppercase, letter-spacing 0.12-0.22em

## Visual hierarchy
Every screen must answer these three questions in under 3 seconds:

1. **Where am I?** — page title + eyebrow + breadcrumb
2. **Why should I care?** — one strong lede or proof block
3. **What do I do next?** — one obvious primary action

### Hierarchy ladder (strict)
- **Level 1** — `h1` / dominant section title. Usually one per screen.
- **Level 2** — lede or key proof. Short. Max ~55-60ch.
- **Level 3** — primary CTA. Only one filled button per content cluster.
- **Level 4** — secondary CTA, supporting cards, meta facts.
- **Level 5** — tertiary links, glossary links, "learn more" style exits.

### Rules
- A section gets **one hero idea**. If title, quote, map, and CTA all fight for attention, the section is wrong.
- Supporting stats must **support**, not compete with, the heading. If a meta row becomes denser than the hero copy, simplify it.
- If two buttons feel equally important, they probably are not. Demote one.
- Decorative elements must never outrank copy on mobile.

### Eyebrow / folio pattern (reusable)
Every section starts with an eyebrow line in this pattern:
```
<p class="eyebrow"><span class="folio">04.</span>Název sekce</p>
```
- `folio` = saffron mono number, `04.` with trailing dot, separated by vertical rule
- Folio numbers are **sequential across the page** (01, 02, 03, …) — never skip.

## Spacing & rhythm
- Section vertical padding: `<Section size="md">` ≈ 4-6rem; `<Section size="lg">` ≈ 6-9rem.
- Content gaps: `--gap-tight` (0.5rem) / `--gap-default` (1.5rem) / `--gap-md` (2.5rem) / `--gap-lg` (4rem).
- **One visual idea per section.** Don't stack a hero + CTA + testimonial + newsletter into one section.
- Card internal padding: 1.5-1.75rem, not generous hotel-lobby padding.

### Breakpoint logic
- Treat **960px** as the main desktop transition for layout shifts, nav mode changes and mobile utility patterns.
- Below 960px the site should still feel like one coherent mobile/tablet experience, not a half-desktop hybrid.
- CTA stacking should usually switch by **~520px**, not page-by-page randomly.
- Dense card grids should stay at **2 columns on tablet** and only expand to 3-4 columns on wider desktop (`~1080px+`), otherwise cards become cramped.

### Mobile rhythm
- Mobile is the source of truth for vertical pacing.
- First content section under the sticky header should start **fast**. No giant dead band before the breadcrumb/title block.
- Last meaningful CTA should not drown in whitespace before the footer.
- If a page contains multiple long reading sections, reduce padding before inventing more separators.
- Empty-looking blocks on mobile are bugs, even if they feel elegant on desktop.

### Footer rhythm
- Footer is a utility block, not a second homepage.
- On mobile it should feel **dense but breathable**: brand summary first, then compact nav, then legal/contact.
- Footer must never visually outweigh the final CTA above it.

## Components (canonical)
All live in `src/components/ui/` + `src/components/nav/`. **Always reuse. Never duplicate.**

| Component | Use for | Don't use for |
|---|---|---|
| `Button` | CTAs, form actions, major link buttons | Social chips, filter chips |
| `SocialIcon` | IG/FB/YT in footer + ig-follow row | Other icons |
| `Card` | Audience segments, event tiles | Text-only callouts |
| `Badge` | Category labels ("Jsem tu poprvé") | CTA buttons |
| `Tag` | Event types, filters | Labels with actions |
| `Callout` | Highlighted info blocks | Buttons |
| `Quote` | Teacher / sangha quotes | Regular paragraphs |
| `Divider` | Section breaks (variants: wheel, wave) | Horizontal rules inside lists |
| `Section` | Outer section wrapper w/ padding + bg | Inner content grids |
| `Container` | Max-width + padding-inline | Full-bleed content |

### Shared layout patterns
- **`split-grid`**: default two-column editorial/info layout for teacher, about, contact, feature sections.
- **`cards-2` / `cards-3` / `cards-4`**: the only approved responsive card grids.
- `cards-3` and `cards-4` should prefer a **2-up tablet state** before going fully dense on wide desktop.
- **`panel` + `panel-pad`**: shared surface shell for sidebars, info panels, legal/meta blocks, location cards.
- **`lined-list`**: canonical vertically-divided list.
- **`chip-nav`**: jump links, compact choice clusters, non-primary pill navigation.
- **`action-row`**: canonical CTA cluster with mobile stacking.
- If a page invents a new grid/list/panel without a strong reason, it is probably wrong.

### CTA priority model
- **Primary CTA**: filled saffron button. Max 1 per section/card cluster.
- **Secondary CTA**: outlined button. Use when there is a genuine alternate route.
- **Tertiary CTA**: text link or `Button variant="link"`. Use for glossaries, supporting reading, external references.
- Never place 3 equally-weighted buttons in a row on mobile.
- In stacked mobile CTAs: primary first, secondary second, tertiary as text underneath or inline.
- On homepage and other acquisition pages, primary CTA should favor **entry** ("Začít zdarma", "Zkusit 5 minut", "Najít skupinu"), not donation.
- For time-sensitive event cards, **registration beats detail**. "Přihlásit se" becomes primary when available.

### Conversion flow
- Homepage order should bias toward **intent-first**:
  `hero -> decision cards -> upcoming event / groups -> proof -> teacher -> deep program -> support`
- Brand story should support action, not delay it. If event/group signup appears after long lineage copy, reorder the page.
- Off-site links (Instagram, International, social platforms) belong **after** main on-site conversion paths.

### Mobile conversion bar
- On key mobile pages (`/`, `/meditace`, `/skupiny`, `/akce`, `/zdroje`) use a persistent bottom action bar when the next step would otherwise disappear below the fold.
- Limit to **2 actions** max: one primary, one secondary.
- The bar must feel premium and lightweight: glass/cream shell, compact radius, safe-area aware, hidden on tablet/desktop.
- Always include page spacing so the bar never covers the last CTA or footer.

### Radius rules (right now this is inconsistent across tergar, fix on sight)
- **Buttons, link-chips (social, ig-follow, cta-donate)** → `var(--radius-md)` (10px)
- **Badge, Tag, hero-kicker, eyebrow pills** → `var(--radius-pill)` (999px)
- **Card** → 14px
- **Image frames (portrait)** → 1.5-2rem on large, 50% (circle) on mobile thumb
- **No other values.** If your component needs a different radius, rethink the design, don't add a new value.

## Motion
- Transitions `var(--dur-fast)` (150ms) or `var(--dur-med)` (300ms) + `var(--ease-out)`.
- Decorative animations (mandala drift, wave): slow, 30-60s loops, wrapped in `@media (prefers-reduced-motion: no-preference)`.
- Hover lifts ≤ 4px. No bouncy physics. This is a meditation site, not a gaming landing page.

## Imagery
- **Portrait of Rinpočhe** — warm, softly lit, centered. Never cropped to face only. Use `object-position: center 20%`.
- **Community photos** — people in meditation posture, Tibet Open House interior, retreats in nature. No stock photos of "smiling professionals."
- **Decorative marks** — dharma wheel (used as divider), subtle concentric rings as editorial ornament. Saffron + navy tones only. No lotuses or clichés.
- Brand-kit assets live in `public/brand/` and form the canonical Czechia companion identity layer.
- The official Tergar logo remains the institutional master mark. Czechia marks, seals and lockups are supporting assets, not replacements.

### Mobile image rules
- If an image does not add meaning in the first viewport, hide it or move it lower on mobile.
- Timeline, map and gallery blocks need a clear text anchor before the visual.
- Never insert a decorative image that reads like a blank card at phone width.

## Voice & copy (see also `ux-writing` skill)
- **Confident, calm, Czech.** No marketing superlatives.
- **Short sentences.** Czech is already long — don't compound it with em-dashes everywhere.
- **Buddhist terms** in original script (Mahámudra, ngöndro, samatha) + short Czech gloss on first mention.
- **CTAs** — verbs: "Najděte skupinu", "Začít", "Přihlásit se". Never "Klikněte sem", never "Dozvědět se více".
- **Never**: "V neposlední řadě", "rovněž", "transformace", "cesta k sobě", emojis.

## Anti-patterns (things to catch in design review)
1. ❌ Saffron button next to saffron eyebrow next to saffron divider — **too much gold**
2. ❌ Pill radius on a primary CTA ("Podpořte" was pill, fixed → 10px)
3. ❌ Hardcoded `rgba(224,160,32,0.xx)` instead of `color-mix(... var(--accent) ...)`
4. ❌ Two different radius values in the same element family (all social chips must match)
5. ❌ Decorative SVG crowding text on mobile (hero mandala was doing this, now desktop-only)
6. ❌ Sections without an eyebrow/folio (breaks rhythm)
7. ❌ Body text smaller than 16px on mobile
8. ❌ Nav link active state missing (breaks orientation)
9. ❌ `<Section surface>` and `<Section>` with identical bg (no visual rhythm)
10. ❌ English-only microcopy slipping through (all strings must be Czech)
11. ❌ Footer taller than the section above it on mobile
12. ❌ Three same-weight CTAs in one cluster
13. ❌ Hero/supporting meta squeezed into unreadable 3-up mobile columns
14. ❌ Blank-looking image card or oversized empty band on phone widths
15. ❌ Live site and repo drifting apart without a fresh screenshot pass after deploy

## Audit workflow
- Any meaningful homepage or template redesign should end with:
  1. desktop screenshot review
  2. mobile screenshot review
  3. `npm run check`
  4. `npm run build`
- If screenshots and repo disagree, trust neither blindly. Verify which environment is actually deployed.
- When a design bug is fixed systemically, update this file, not just the component CSS.

## Quick lookup — kde co najdu

Když potřebuješ něco upravit nebo přidat, jdi sem **první**. Pokud něco vyžaduje
přidání nového souboru, je to skoro vždycky špatný plán — utility už existuje.

### Stránky

| Co je | Kde to žije | Editovat přes |
|---|---|---|
| Homepage | `src/pages/index.astro` | code |
| Stálé stránky (Co je meditace, O nás, Zapojte se) | `src/content/pages/*.md` | **CMS → Statické stránky** |
| Cesta Tergar úrovně | `src/content/path/*.mdx` | **CMS → Cesta Tergar** |
| Akce a retreaty | `src/content/events/*.yaml` | **CMS → Akce a události** |
| Skupiny + mapa | `src/content/groups/*.yaml` | **CMS → Meditační skupiny** |
| Blog články | `src/content/blog/*.mdx` | **CMS → Blog** |
| Zdroje (videa, knihy, audio) | `src/content/resources/*.yaml` | **CMS → Zdroje** |
| Slovník pojmů | `src/content/glossary/*.mdx` | **CMS → Slovník pojmů** |
| FAQ | `src/content/faq/*.yaml` | **CMS → Časté dotazy** |
| Hlasy sanghy (homepage citáty) | `src/content/testimonials/*.yaml` | **CMS → Hlasy sanghy** |
| Učitelé | `src/content/teachers/*.mdx` | **CMS → Učitelé** |
| Přihlášky z formulářů | `src/content/registrations/*.yaml` | **CMS → Přihlášky** (read-only seznam) |
| Hero titulek + lede homepage | `src/content/_settings/homepage.yaml` | **CMS → Homepage** |
| Číslo účtu, darujme.cz URL | `src/content/_settings/donate.yaml` | **CMS → Daru — nastavení** |
| Kontaktní e-mail, název webu | `src/content/_settings/site.yaml` | **CMS → Web — obecné** |

### Globální komponenty

| Co | Soubor | Kdy použít |
|---|---|---|
| Header (nav + CTA) | `src/components/nav/Header.astro` | nikdy needituj nav položky inline na stránce |
| Footer | `src/components/nav/Footer.astro` | sloupce + dolní řádek |
| Mobilní menu | `src/components/nav/MobileMenu.tsx` | mění se s Header.astro `nav` polem |
| Sekce wrapper | `src/components/ui/Section.astro` | každá `<section>` na stránce |
| Container | `src/components/ui/Container.astro` | každý vnitřní obsah uvnitř `<Section>` |
| **SectionHeader** | `src/components/ui/SectionHeader.astro` | **každý** úvod sekce — folio + eyebrow + h2 + lede |
| Button | `src/components/ui/Button.astro` | každé tlačítko/CTA |
| Card | `src/components/ui/Card.astro` | každá editorial karta v gridu |
| Badge | `src/components/ui/Badge.astro` | malé nominální labely |
| Tag | `src/components/ui/Tag.astro` | filtrovatelné pily |
| Quote | `src/components/ui/Quote.astro` | pull-quote uvnitř `prose` |
| Callout | `src/components/ui/Callout.astro` | zdůrazněný textový blok mezi odstavci |
| Divider | `src/components/ui/Divider.astro` | dharma kolo / vlna mezi sekcemi |
| Mobilní akční lišta | `src/components/ui/MobileActionBar.astro` | pevný bottom CTA pro key pages |
| Sociální ikony (IG/FB/YT) | `src/components/ui/SocialIcon.astro` | jediný zdroj brand glyfů |
| Registrační formulář | `src/components/events/RegistrationForm.tsx` | event detail page bez Zenamu |

### Layout utility (v `src/styles/global.css`)

Tyhle třídy jsou **canonical**. Přidávat novou variantu = potřeba design rozhodnutí, ne styling.

| Třída | Co dělá | Příklady použití |
|---|---|---|
| `.split-grid` | 2-sloupcový editorial layout (text + figure) | `/o-nas` učitel/linie, `/kontakt` main+side |
| `.split-grid.is-reverse` | totéž, ale obrazek vlevo na desktopu | `/o-nas` linie sekce |
| `.cards-2`, `.cards-3`, `.cards-4` | responsive grid karet (1 → 2 → 3-4) | `/zdroje` videa+knihy, `/programy` trasy |
| `.panel` | shared surface shell (bg + border + radius) | sidebary, info bloky, glossary item |
| `.panel-soft` | varianta `.panel` na cream pozadí | `/kontakt` legal sidebar |
| `.panel-pad` | standardní vnitřní padding pro `.panel` | vždy s `.panel` |
| `.lined-list` | vertikálně rozdělený seznam (řádky s linkou) | `/daru` "kam peníze jdou", `/o-nas` knihy, `/zdroje` audio |
| `.chip-nav` | rejstříkové linky / kompaktní pily | `/slovnik` A-Ž, `/kontakt` social linky |
| `.action-row` | CTA cluster (auto-stackuje pod 520px) | každý sekční CTA blok |
| `.link-inline` | textový link s saffron underline | uvnitř copy a karet |
| `.meta-heading` | mono uppercase 11px label | sub-nadpisy v sidebaru |
| `.detail-grid` | dt/dd grid pro key-value bloky | právní údaje, technické metadata |

### Tokeny (v `src/styles/tokens.css`)

| Co | Token | Použití |
|---|---|---|
| Primární brand | `--tergar-navy`, `--accent` | CTA, headings, eyebrows |
| Pozadí | `--bg`, `--surface` | celá stránka / `<Section surface>` |
| Text | `--ink`, `--ink-muted`, `--ink-soft` | headings / lede / meta |
| Borders | `--line`, `--line-strong` | dividers / strong borders |
| Spacing tokeny | `--gap-tight`, `--gap-default`, `--gap-md`, `--gap-lg` | mezi karty |
| Section padding | clamp() v `Section.astro` size | nikdy ne inline padding na sekci |
| Radius | `--radius-sm` (6) / `--radius-md` (10) / `--radius-lg` (16) / `--radius-pill` (999) | viz Radius rules výše |
| Animace | `--dur-fast` (150ms), `--dur-med` (300ms), `--ease-out` | každý transition |
| Stíny | `--shadow-sm`, `--shadow-md` | jen na panelech / kartách s hover lift |

### Recipes — jak složit sekci

**Standardní sekce s nadpisem + CTA:**
```astro
<Section size="md">
  <Container>
    <SectionHeader folio="03" eyebrow="…" title="…" lede="…" />
    <div class="action-row">
      <Button variant="primary">…</Button>
      <Button variant="secondary">…</Button>
    </div>
  </Container>
</Section>
```

**Editorial 2-col (text + figure):**
```astro
<Section size="md" surface>
  <Container>
    <SectionHeader … />
    <div class="split-grid">
      <div><p>…</p><Button …/></div>
      <figure>…</figure>
    </div>
  </Container>
</Section>
```

**Karty 3-up:**
```astro
<Section size="md">
  <Container>
    <SectionHeader … />
    <div class="cards-3">
      <Card>…</Card>
      <Card>…</Card>
      <Card>…</Card>
    </div>
  </Container>
</Section>
```

**Sidebar info panel:**
```astro
<aside class="panel panel-soft panel-pad">
  <h3 class="meta-heading">…</h3>
  <dl class="detail-grid">
    <dt>…</dt><dd>…</dd>
  </dl>
</aside>
```

### Když máš pochybnost

- **Nepřidávej nový soubor** — utility už existuje (zkontroluj tabulky výše).
- **Nepřidávej nový radius/color/font-size** — tokens už pokrývají všechny role.
- **Nepřidávej inline padding na sekci** — použij `<Section size="…">` variantu.
- **Pokud něco nesedí**, je to nejspíš špatně designed sekce, ne chybějící utility. Předělej obsah.

## Reference brands (inspiration, NOT imitation)
- **Claude** (Anthropic) — warm terracotta, editorial layout, restrained
- **Linear** — minimalist hierarchy, thin dividers
- **Substack editorial blogs** — serif + mono pairing, folio-style numbering
- **NYT Magazine** — eyebrow + balanced headlines + 60ch lede

Reference DESIGN.md files for these brands live in `~/.claude/references/awesome-design-md/design-md/`.

## Changelog (design-level decisions)
- **2026-04-23** — Radius unified: all CTAs → 10px. Pill reserved for badges/tags/eyebrow. Dark mode disabled project-wide until hardcoded `rgba()` values are audited. Hero mandala moved to desktop-only.
- **2026-04-23** — New component `SocialIcon.astro` with mono + brand variants (official IG gradient, FB #0866FF, YT #FF0033).
- **2026-04-23** — New "Hlasy sanghy" editorial testimonials section on homepage (3 quotes, saffron left rule, middle-card offset on desktop).
- **2026-04-23** — Audit-driven rules added: stricter CTA ladder, tighter mobile section rhythm, denser footer, and explicit post-deploy screenshot verification.
- **2026-04-23** — Conversion-first pass: header CTA shifted from donation-first to entry-first, homepage reordered around intent and trust, and a reusable mobile action bar introduced for high-intent pages.
- **2026-04-24** — Site-wide unification pass: shared `split-grid/cards/panel/chip-nav/action-row` patterns established, detail templates aligned closer to `SectionHeader`, and desktop/mobile breakpoint logic tightened around 960px.
- **2026-04-24** — Tablet cleanup pass: dense card grids now hold a calmer 2-column rhythm until wide desktop, footer stays lighter on tablet, and CTA rows/time-based tools align to the same responsive rules.
- **2026-04-24** — Brand identity package added: Czechia companion marks, favicon refresh, OG refresh, and a reusable infographic set in `public/brand/`.
