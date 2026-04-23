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
