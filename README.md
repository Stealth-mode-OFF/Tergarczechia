# Tergar Česko

Nová oficiální stránka české pobočky mezinárodní meditační komunity **Tergar**
pod vedením **Yongey Mingyur Rinpočheho**.

**Produkce:** https://tergarczechia.cz (po cutoveru z Vercel → Cloudflare Pages)

## Stack

- **Astro 5.18** — static site + islands
- **Tailwind v4** — CSS-first design tokens
- **Preact + React** — lightweight islands (menu, GDPR wall, filters, mapa)
- **Keystatic 0.5** — git-based CMS na `/admin`
- **Anthropic Claude SDK** — AI admin endpointy v `/api/ai/*`
- **Cloudflare Pages** — deploy (free, Praha PoP)
- **MapLibre GL + OSM** — mapa skupin, bez API klíče

## Struktura

```
src/
├── content.config.ts        # Zod schémata 9 kolekcí (blog, events, path,
│                              teachers, groups, resources, glossary, faq, pages)
├── content/                 # MDX + YAML — obsah lze editovat přes /admin
├── pages/
│   ├── index.astro          # Home + 3 audience segmenty + path ladder + next event
│   ├── meditace.astro       # Co je meditace
│   ├── cesta/[id].astro     # Strukturovaný program 10 úrovní
│   ├── akce/[id].astro      # Retreaty 2026 + schema.org Event JSON-LD
│   ├── skupiny.astro        # Mapa + seznam měst (MapLibre island)
│   ├── zdroje/[id].astro    # Blog + videa + knihy
│   ├── slovnik/[id].astro   # Buddhistický slovník (SEO moat, 10 termů)
│   ├── faq.astro            # FAQPage JSON-LD pro Google rich results
│   ├── daru.astro           # darujme.cz + bankovní převod + dobrovolnictví
│   ├── api/ai/              # AI endpointy (draft/rewrite/translate/seo-meta)
│   └── admin/[...rest]      # Keystatic CMS (auto-routed)
├── components/              # Astro primitivy + React/Preact islands
├── layouts/BaseLayout.astro
└── styles/                  # Dawn paleta + typografické tokeny
```

## Design

**Paleta "Dawn":** parchment `#FBF8F2`, sumi ink `#1B2230`, burnt saffron `#B6671F`, lapis focus `#1E4E8C`.
Dark mode přes `prefers-color-scheme`.

**Typografie:** Source Serif 4 Variable (headings) + Inter Variable (UI/body). Podpora českých diakritik, `hanging-punctuation`, `text-wrap: balance`, `hyphens: auto`.

**Islands (client-side JS):**
- `MobileMenu` (Preact, `client:media`) — 4 KB
- `ConsentEmbed` (Preact, `client:visible`) — GDPR YouTube/Vimeo/Zenamu wall, 4 KB
- `EventFilter` (React, `client:visible`) — DOM-filtering, list renderuje server, 4 KB shell
- `CategoryFilter` (Preact, `client:visible`) — 4 KB
- `GroupsMap` (React + MapLibre, `client:only`) — 1 MB lazy, jen na /skupiny

Static stránky (9 ze 14): **0 KB JS baseline** + 16 KB ClientRouter (View Transitions).

## SEO

- **Content Collections** → typovaná schémata, všechny entity v sitemapě
- **JSON-LD** per stránka: Organization, WebSite+SearchAction, BreadcrumbList, Event, Article, DefinedTerm, FAQPage
- **OG meta** — per-page title/description, `/og-default.png` 1200×630 fallback
- **301 redirects** v `public/_redirects` z legacy Vite slugů
- **Sitemap** 50 URL přes `@astrojs/sitemap`, cs-CZ locale
- **RSS** blogu na `/rss.xml`
- **GDPR consent wall** pro všechny YouTube/Vimeo/Zenamu iframy

## Vývoj

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # dist/ + Cloudflare _worker.js
npm run preview        # ověřit build lokálně
npm run check          # TypeScript + Astro check
```

## Deploy

Cloudflare Pages:

```bash
npx wrangler pages deploy dist/
```

Produkční nasazení vyžaduje:
1. **Cloudflare Pages** projekt, pointovaný na tento repo (auto-deploy z `main`)
2. **DNS** `tergarczechia.cz` → Cloudflare
3. **Env:** `ANTHROPIC_API_KEY` pro AI endpointy, volitelně `KEYSTATIC_GITHUB_*` pro CMS auth
4. **KV binding** `SESSION` pro Astro sessions (volitelné)

## CMS

`/admin` je Keystatic CMS. V lokálním vývoji čte/píše přímo do `src/content/*`. V produkci použije GitHub OAuth App (commity pod účtem editora).

**Kolekce:** blog · events · path · teachers · groups · resources · glossary · faq · pages  
**Singletony:** site-settings · homepage · about · donate-settings

## AI admin vrstva

Na `/api/ai/*` běží 4 endpointy využívající Anthropic SDK:

| Route | Model | Použití |
|---|---|---|
| `POST /api/ai/draft` | Sonnet 4.5 | Nový obsah (perex/body/event/glossary/faq) |
| `POST /api/ai/rewrite` | Sonnet 4.5 | Přepis tónu (warm/formal/concise/seo) |
| `POST /api/ai/translate` | Sonnet 4.5 | CZ↔EN překlad s ochranou buddhistických termínů |
| `POST /api/ai/seo-meta` | Haiku 4.5 | Titulek + popis + klíčová slova |

Guardrails: brand voice a glosář zachycen v systémovém promptu s `cache_control: ephemeral`, rate limit + auth cookie check + input sanitization.

## Rollback

Starý React/Vite kód je uchován na branchi `pre-astro-safety`.
Produkční Vercel deploy nechat aktivní 14 dní po DNS flipnutí jako safety net.

## Owner

Josef Hofman — josef.hofman@behavera.com  
Kontakt komunity — czech@tergar.org
