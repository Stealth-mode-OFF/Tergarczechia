# Tergar Česko — Project Guide for AI Agents

## Project identity
Česká pobočka komunity **Tergar** pod vedením Yongey Mingyur Rinpočheho. Editorial, meditativní, tradičně-moderní feel. Žádná korporátní SaaS estetika, žádné generické AI vibes.

## Stack
- **Framework:** Astro 5 (static output) + Vercel adapter
- **Styling:** CSS custom properties v `src/styles/tokens.css` + `global.css` (žádný Tailwind runtime; tokeny jsou zdroj pravdy)
- **CMS:** Keystatic pro content collections (`src/content/` — events, groups, resources, glossary)
- **Fonty:** Serif (nadpisy, citáty) + Sans (body, nav) + Mono (meta, eyebrow labels). Konkrétní rodiny viz `tokens.css`.

## Design system — MUSÍŠ dodržovat

### Barvy (tokeny v `src/styles/tokens.css`)
| Token | Hex | Použití |
|---|---|---|
| `--tergar-navy` | #203070 | primární brand barva, nadpisy, nav |
| `--accent` | #E0A020 | saffron gold — CTA, eyebrows, accents |
| `--accent-hover` | #C9861A | saffron hover |
| `--tergar-cream` | #F6E7C8 | warm cream pozadí |
| `--bg` | #FAF8F4 | hlavní pozadí |
| `--surface` | #F2EEE6 | sekundární pozadí (Section surface) |
| `--ink` | ~#1A1F2E | body text |
| `--ink-muted` | ~#55617A | secondary text |
| `--ink-soft` | ~#8A93A1 | tertiary/meta text |
| `--line` | light beige | borders |

**PRAVIDLO:** nová barva = nový token. Žádné inline `rgba(224, 160, 32, 0.35)` hardcoded v komponentách. Pokud potřebuješ průhlednost, použij `color-mix(in oklab, var(--accent) 35%, transparent)`.

### Radius
- **CTA buttony (Button.astro, Header cta-donate, mobile menu donate)** → `var(--radius-md)` **(10px)**
- **Badge / Tag / hero-kicker eyebrow pill** → `var(--radius-pill)` (999px)
- **Card** → 14px (viz `Card.astro`)
- **Nic nikdy nemíchat.** Link-with-icon (ig-follow, social-link) = button, takže 10px.

### Spacing tokeny
`--gap-tight`, `--gap-default`, `--gap-md`, `--gap-lg`, `--section-md`. Padding sections přes `Section.astro` komponentu, ne inline.

### Typography
- Nadpisy = serif, `text-wrap: balance`, negativní letter-spacing (-0.01 až -0.02em)
- Body = sans, `line-height: 1.55–1.65`, `text-wrap: pretty`
- Eyebrow labels = mono, uppercase, 0.6875–0.75rem, letter-spacing 0.12–0.22em
- Scale: clamp(min, vw, max) všude — žádné fixní px pro hlavní typo

### Dark mode
**VYPNUTÝ** (viz `tokens.css`). `color-scheme: light` v `BaseLayout.astro`. Nezapínat dokud nebude každá hardcoded `rgba()` hodnota v komponentách auditována a přepínatelná.

### Motion
Respektovat `prefers-reduced-motion`. Animace přes `var(--ease-out)` a `var(--dur-fast|med|slow)`. Žádné long-running loopy bez motion guardu.

## Komponentové zvyklosti
- **Layouty:** `BaseLayout.astro` → `Header` + `<slot/>` + `Footer`
- **Sections:** vždy `<Section size="md|lg" surface tint="navy">` + `<Container>`. Nepiš inline `<section style="padding: ...">`.
- **Buttons:** vždy `<Button variant="primary|secondary|ghost|link" size="sm|md|lg" href="...">`. Ne `<a class="btn">`.
- **Nový button radius?** Ne — aktualizuj Button.astro jen pokud fakt mění design system celoplošně.
- **Ikony:** `SocialIcon.astro` pro IG/FB/YT. Jiné ikony = inline SVG s `currentColor`, 18–24px, viewBox 0 0 24 24, `aria-hidden="true"` nebo `aria-label`.

## Komunikace v obsahu
- **Jazyk:** čeština všude (including alt texts, ARIA labels). Anglické termíny jen pokud jsou názvy programů (Joy of Living, Path of Liberation).
- **Tón:** klidný, editorial, bez marketingových frází. "Přijďte kdykoliv" > "Zažijte transformaci".
- **ADHD pravidlo:** každá sekce = max 1 obrazovka scroll. Bullet pointy, krátké odstavce.
- **Žádná korporátština:** „dále", „rovněž", „v neposlední řadě" = zakázáno.
- **Žádné emojis** pokud to Josef explicitně neřekne.

## Build & deploy
- `npm run dev` → localhost:4321
- `npm run build` → Astro static build + Vercel adapter
- `vercel --prod --yes` → CLI production deploy (hlavní pipeline, ne git push auto-deploy)
- Produkce: https://tergarczechia-three.vercel.app
- Hlavní branch: `main` (astro-migration už mergnuté)

## Co JE podporováno zkontrolovat při design review
- Konzistence radius napříč interaktivními elementy
- Konzistence spacing rhythm mezi sekcemi
- Žádné dark-mode regrese (light-only, ale testovat i s `prefers-color-scheme: dark` na OS úrovni — výsledek musí být stejný)
- Mobile viewport (390px) nesmí mít crowded/překrývající dekorace
- Font scale čitelný na mobilu (min 16px body)
- Kontrast text/bg minimálně WCAG AA (4.5:1)
- Hero kicker, folio eyebrows → konzistentní pattern (mono, uppercase, folio číslo)
- Social ikony = brand variant jen pro follow CTA; mono variant pro footer/nav

## Co NENÍ součástí projektu (out of scope)
- E-commerce, platby
- Multi-jazyčnost (kromě "/prague (english)" group schedulu)
- Complex JS aplikace (jen Astro islands kde nutné — MobileMenu, MeditationTimer)
- Tailwind runtime (jen tokens + komponentové `<style>`)

## Reference materials
- **DESIGN.md** v root projektu — brand bible pro design agenty
- **~/.claude/skills/design-critique/** — heuristická rubrika (Nielsen, UX laws)
- **~/.claude/skills/accessibility-audit/** — WCAG 2.2 audit
- **~/.claude/references/awesome-design-md/** — inspirace z top webových brands
