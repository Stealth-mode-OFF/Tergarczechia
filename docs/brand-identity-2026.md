# Tergar Czechia Brand Identity 2026

This is the working brand kit for the Czech site and related editorial materials.

## Brand architecture

- **Master mark:** the official Tergar logo remains the primary institutional mark.
  Path: [src/assets/logo.png](/Users/josefhofman/Clawdia/Tergarczechia/src/assets/logo.png)
- **Editorial identity layer:** a Czechia-specific companion system for favicon, social cards, infographics, internal docs, slide headers, event covers and educational visuals.
- **Rule:** do not replace the official master mark in institutional contexts. Use the new Czechia marks as a supporting layer around it.

## Core idea

The identity should feel like:

- a quiet print magazine
- a meditation school with lineage and rigor
- Czech, grounded, contemporary, and warm

It should not feel like:

- a startup wellness app
- generic spirituality
- luxury retreat branding
- noisy mandala cliché

## Asset system

### Marks

- **Editorial mark**
  Path: [public/brand/tergar-czechia-mark.svg](/Users/josefhofman/Clawdia/Tergarczechia/public/brand/tergar-czechia-mark.svg)
  Use for favicon, badges, section ornaments, watermarks and compact avatars.

- **Editorial seal**
  Path: [public/brand/tergar-czechia-seal.svg](/Users/josefhofman/Clawdia/Tergarczechia/public/brand/tergar-czechia-seal.svg)
  Use for presentations, posters, workshop covers and printed handouts.

- **Editorial lockup**
  Path: [public/brand/tergar-czechia-lockup.svg](/Users/josefhofman/Clawdia/Tergarczechia/public/brand/tergar-czechia-lockup.svg)
  Use for cover slides, sponsorship decks, partner pages and social templates.

### Patterns and atmospherics

- **Halo pattern**
  Path: [public/brand/pattern-halo.svg](/Users/josefhofman/Clawdia/Tergarczechia/public/brand/pattern-halo.svg)
  Use as a subtle background layer, never as a dominant hero illustration.

### Generated mood imagery

- **Editorial mood landscape**
  Path: [public/brand/meditation-editorial-mood.png](/Users/josefhofman/Clawdia/Tergarczechia/public/brand/meditation-editorial-mood.png)
  Use for covers, internal decks, campaign mockups and social templates when you need atmosphere rather than information.
  Prompt direction: Czech rooftops, parchment light, concentric meditation halos, calm premium editorial illustration, no people, no cliché spirituality.

### Infographic primitives

- **Three pillars**
  Path: [public/brand/infographic-practice-pillars.svg](/Users/josefhofman/Clawdia/Tergarczechia/public/brand/infographic-practice-pillars.svg)
  Use for beginner explanations and meditation fundamentals.

- **Tergar path**
  Path: [public/brand/infographic-tergar-path.svg](/Users/josefhofman/Clawdia/Tergarczechia/public/brand/infographic-tergar-path.svg)
  Use for program explanation, onboarding and event pages.

- **Lineage**
  Path: [public/brand/infographic-lineage.svg](/Users/josefhofman/Clawdia/Tergarczechia/public/brand/infographic-lineage.svg)
  Use for “O nás”, talks, workshops and lineage explainers.

## Color palette

- `#203070` — Tergar navy
- `#102070` — deep navy
- `#E0A020` — saffron gold
- `#B8821A` — deep gold
- `#F6E7C8` — warm cream
- `#FAF8F4` — page background
- `#1C2B3A` — body ink
- `#5B6472` — muted ink

These are aligned with [src/styles/tokens.css](/Users/josefhofman/Clawdia/Tergarczechia/src/styles/tokens.css).

## Typography

- **Display / titles:** Playfair Display
- **Body / UI:** Inter
- **Meta / folio / codes:** JetBrains Mono

The identity depends on contrast between serif authority and calm sans utility. Do not replace with generic system display styles unless absolutely necessary.

## Logo usage rules

- Use the official Tergar logo for institutional trust and parent-brand recognition.
- Use the editorial mark when the context is Czechia-specific, educational or decorative.
- Keep the mark on calm backgrounds: `#FAF8F4`, `#F6E7C8`, or navy.
- Do not place the mark on saturated photography.
- Do not stretch, outline, emboss or add heavy glow effects.

## Infographic rules

- Every infographic should answer one question only.
- Use 3 to 5 content blocks, not 9 to 12 tiny nodes.
- Maintain the same visual vocabulary:
  gold nodes, navy emphasis, warm paper background, soft separators
- Titles are serif, labels are sans, meta numbering is mono or spaced sans.
- If an infographic becomes text-heavy, split it into two visuals.

## Social and SEO

- **Favicon:** refreshed to the editorial mark.
  Path: [public/favicon.svg](/Users/josefhofman/Clawdia/Tergarczechia/public/favicon.svg)
- **Default OG card:** rebuilt to match the new identity system.
  Paths:
  [public/og-default.svg](/Users/josefhofman/Clawdia/Tergarczechia/public/og-default.svg)
  [public/og-default.png](/Users/josefhofman/Clawdia/Tergarczechia/public/og-default.png)
- **Structured-data logo file:** now expected at:
  [public/og-logo.png](/Users/josefhofman/Clawdia/Tergarczechia/public/og-logo.png)

## Site integration done

- refreshed favicon mark
- refreshed default OG asset
- lineage section on `/o-nas` moved to a cleaner vector infographic

## Recommended next uses

- add the path infographic to `/cesta`
- use the three-pillars infographic on `/meditace`
- prepare square social templates for event promotion
- prepare keynote / workshop slide master using the seal and halo pattern
- build a social cover template using `meditation-editorial-mood.png` plus the editorial lockup
