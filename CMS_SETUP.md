# CMS Setup — Tergar Česko

Administrace běží na **Keystatic** ([keystatic.com](https://keystatic.com/)). CMS rozhraní je na cestě **`/keystatic`** (v dev i na produkci).

V tomto dokumentu najdete:

1. [Lokální režim (5 minut)](#lokální-režim-5-minut) — jen `npm run dev`, žádné nastavování
2. [Produkční režim s GitHub OAuth (30 minut)](#produkční-režim-s-github-oauth) — admin přístupný po přihlášení na `tergarczechia.cz/keystatic`
3. [Přihlášky na akce — e-mailové notifikace](#přihlášky-na-akce) — Resend + volitelné ukládání do Gitu
4. [Přihlášení přes Gmail (volitelné budoucí rozšíření)](#přihlášení-přes-gmail)

---

## Lokální režim (5 minut)

Jenom potřeba lokálního vývoje / editování obsahu — **žádné env vars, žádné OAuth**.

```bash
cd ~/tergarczechia
npm run dev
# Otevři: http://localhost:4321/keystatic
```

Keystatic píše přímo do `src/content/**`. Změny commitnete ručně (`git add . && git commit -m "..."`).

---

## Produkční režim s GitHub OAuth

Po tomto nastavení bude CMS dostupný na **`https://tergarczechia-three.vercel.app/keystatic`**, přihlašujete se GitHub účtem (Josef = `Stealth-mode-OFF`). Každé uložení v editoru vytvoří commit do repa; Vercel detekuje change a redeployne web (~40 s).

### Krok 1 — Vytvořit GitHub OAuth App

1. Otevřete [https://github.com/settings/developers](https://github.com/settings/developers) → **OAuth Apps** → **New OAuth App**.
2. Vyplňte:

   | Pole | Hodnota |
   |---|---|
   | Application name | `Tergar CMS` |
   | Homepage URL | `https://tergarczechia-three.vercel.app` |
   | Authorization callback URL | `https://tergarczechia-three.vercel.app/api/keystatic/github/oauth/callback` |

3. Po vytvoření klikněte **Generate a new client secret**.
4. Zapište si z obrazovky:
   - **Client ID** (vždy viditelné)
   - **Client secret** (zobrazí se jednou — uložte hned)

### Krok 2 — Vygenerovat JWT secret

```bash
# Random 32-byte hex string
openssl rand -hex 32
```

Výsledek bude 64 znaků. Uložte jako `KEYSTATIC_SECRET`.

### Krok 3 — Přidat env vars do Vercelu

Přes Vercel CLI nebo UI (Dashboard → Tergarczechia → Settings → Environment Variables). Nastavit pro **Production** a **Preview**:

```
KEYSTATIC_STORAGE=github
KEYSTATIC_GITHUB_CLIENT_ID=<Client ID z kroku 1>
KEYSTATIC_GITHUB_CLIENT_SECRET=<Client secret z kroku 1>
KEYSTATIC_SECRET=<hex z kroku 2>
```

Z příkazové řádky:

```bash
cd ~/tergarczechia
vercel env add KEYSTATIC_STORAGE production
# Vloží hodnotu: github
vercel env add KEYSTATIC_GITHUB_CLIENT_ID production
vercel env add KEYSTATIC_GITHUB_CLIENT_SECRET production
vercel env add KEYSTATIC_SECRET production
```

### Krok 4 — Redeploy

```bash
vercel --prod --yes
```

Po úspěšném deployi otevřete `https://tergarczechia-three.vercel.app/keystatic`. GitHub vás přesměruje na login a po autorizaci `Tergar CMS` OAuth app se vrátíte do administrace.

### Krok 5 (volitelné) — Omezit přístup

GitHub OAuth App sama o sobě pustí dovnitř **každého**, kdo má GitHub účet a klikne „Authorize". Chcete-li omezit přístup, máte tři cesty:

- **(a) Repo Collaborators** — přidat spoluautory do repa `Stealth-mode-OFF/Tergarczechia`. Keystatic v GitHub mode vyžaduje, aby uživatel měl write access k repu, jinak neuvidí edit tlačítka.
- **(b) GitHub Organization** — přesunout repo pod organizaci a řídit přístup členstvím.
- **(c) Keystatic Cloud** (placené, Thinkmill) — e-mailové pozvánky, team management, role. Viz [Přihlášení přes Gmail](#přihlášení-přes-gmail) níže.

Josef (`Stealth-mode-OFF`) má jako owner automatický přístup.

---

## Přihlášky na akce

Když akce v CMS **nemá** vyplněné pole „Externí přihláška (Zenamu)", na detailu akce se zobrazí **interní formulář**. Odeslání formuláře:

1. Pošle notifikační e-mail na `czech@tergar.org` (přes Resend).
2. Volitelně: commitne YAML soubor `src/content/registrations/<id>.yaml` přes GitHub API (pak je přihláška viditelná v CMS v sekci „Přihlášky (interní)").

### Setup Resend (notifikace e-mailem)

1. Vytvořte účet na [resend.com](https://resend.com) (3 000 e-mailů / měsíc zdarma).
2. Ověřte doménu `tergarczechia.cz` (nebo použijte `onboarding@resend.dev` pro testování).
3. Vygenerujte API klíč.
4. Přidejte do Vercelu:

```bash
vercel env add RESEND_API_KEY production
vercel env add NOTIFY_FROM production
# NOTIFY_FROM: "Tergar Web <no-reply@tergarczechia.cz>"
```

### Setup GitHub commit (volitelné — archiv přihlášek v CMS)

1. [Vygenerujte Fine-grained Personal Access Token](https://github.com/settings/personal-access-tokens/new):
   - **Repository access**: jen `Stealth-mode-OFF/Tergarczechia`
   - **Permissions → Contents**: `Read and write`
   - **Expiration**: 1 rok
2. Přidejte do Vercelu:

```bash
vercel env add GITHUB_COMMIT_TOKEN production
```

Pokud tuto proměnnou nenastavíte, formulář bude fungovat, ale záznamy se budou dávat jen do e-mailů — ne do CMS.

### Jak to uživatel vidí

- **Akce s `registrationUrl`** → primární CTA „Přihlásit se (Zenamu)" linkuje ven. Stávající flow.
- **Akce bez `registrationUrl`** → sekce „Přihláška" s formulářem (jméno, e-mail, telefon, zpráva). Po odeslání se ukáže „Díky, máme to." a přijde e-mail na `czech@tergar.org`.

### Anti-spam

- Honeypot pole `website` (skryté pro lidi, viditelné pro boty). Vyplnění = tichý „OK" bez zpracování.
- Server-side validace e-mailu regexem, minimální délka jména.
- Žádný CAPTCHA — pokud bude spam, přidáme Cloudflare Turnstile.

---

## Přihlášení přes Gmail (Supabase guard)

Tergar používá **Supabase Auth** jako guard před Keystatic admin rozhraním. Uživatel
přijde na `/keystatic` → middleware ho přesměruje na `/admin/login` → klikne
„Přihlásit přes Google" → po úspěšném přihlášení zkontroluje, že jeho e-mail
je v `ADMIN_EMAILS` a pustí dovnitř Keystatic (které zapisuje přes GitHub mode).

Tento flow je **nezávislý na GitHub OAuth App výše** — GitHub OAuth stále může běžet
jako alternativní cesta (otevře se `?login=github` v Keystatic), ale **výchozí login
je Google/Supabase**.

### Krok 1 — Nastavit Google OAuth v Supabase

1. Otevřete [supabase.com/dashboard](https://supabase.com/dashboard) → projekt
   `clawdia-bus` (Tergar používá stejný projekt) → **Authentication → Providers → Google**.
2. Zapněte Google provider.
3. Potřebujete **Google Cloud OAuth Client ID**:
   - [console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
   - **Create credentials → OAuth client ID → Web application**
   - Name: `Tergar Redakce`
   - **Authorized JavaScript origins**: `https://tergarczechia-three.vercel.app`
   - **Authorized redirect URIs**: `https://egxxyszvwrqvkvlxawky.supabase.co/auth/v1/callback`
4. V Supabase vložte **Client ID** a **Client Secret** z Google Cloud a uložte.

### Krok 2 — Doplnit redirect URL Supabase → web

V Supabase **Authentication → URL Configuration**:

- **Site URL**: `https://tergarczechia-three.vercel.app`
- **Additional Redirect URLs**:
  - `https://tergarczechia-three.vercel.app/api/auth/callback`
  - `http://localhost:4321/api/auth/callback` *(pro lokální vývoj)*

### Krok 3 — Env vars ve Vercelu

```bash
vercel env add PUBLIC_SUPABASE_URL production
# → https://egxxyszvwrqvkvlxawky.supabase.co

vercel env add PUBLIC_SUPABASE_ANON_KEY production
# → sb_publishable_WjCsaepIZ4DvSbPk3aCRJQ_X7YHenZS

vercel env add ADMIN_EMAILS production
# → chatujsgpt@gmail.com,jakub@...
```

### Krok 4 — Redeploy

```bash
vercel --prod --yes
```

Otevřete `https://tergarczechia-three.vercel.app/keystatic`. Middleware vás odhodí
na `/admin/login` s tlačítkem **Přihlásit přes Google**. Po kliknutí se otevře
standardní Google OAuth dialog, potvrdíte a vrátíte se zpět do redakce.

### Jak funguje allowlist

Middleware (`src/middleware.ts`) kontroluje Supabase session cookie na každém
requestu k `/keystatic/**` a `/api/keystatic/**`. Přístup dostane **pouze**
uživatel, jehož Google e-mail je v `ADMIN_EMAILS`. Každý jiný account je ihned
odhlášen a uvidí chybovou hlášku „Tento účet není v seznamu správců".

Pro přidání nového redaktora:

```bash
vercel env rm ADMIN_EMAILS production
vercel env add ADMIN_EMAILS production
# → chatujsgpt@gmail.com,jakub@tergarczechia.cz,novy@email.cz
vercel --prod --yes
```

### Alternativa — Keystatic Cloud

Pokud chcete Supabase obejít a platit za hotovou team collaboration:
[keystatic.cloud](https://keystatic.cloud/) — od $10/měsíc, e-mail pozvánky, role.
V tom případě v `keystatic.config.tsx`:

```ts
storage: { kind: 'cloud', pathPrefix: 'Stealth-mode-OFF/Tergarczechia' }
```

---

## Struktura obsahu

CMS spravuje 11 kolekcí v `src/content/`:

| Kolekce | Co je to | Složka |
|---|---|---|
| Blog | Články | `blog/*.{md,mdx}` |
| Akce | Retreaty, workshopy | `events/*.yaml` |
| Přihlášky | Příchozí registrace (z webu) | `registrations/*.yaml` |
| Cesta Tergar | Úrovně programu | `path/*.mdx` |
| Učitelé | Biografie + portréty | `teachers/*.mdx` |
| Skupiny | Mapa skupin | `groups/*.yaml` |
| Hlasy sanghy | Citáty na homepage | `testimonials/*.yaml` |
| Zdroje | Video / kniha / audio | `resources/*.yaml` |
| Slovník | Buddhistické pojmy | `glossary/*.mdx` |
| FAQ | Časté dotazy | `faq/*.yaml` |
| Stránky | O nás, Co je meditace | `pages/*.mdx` |

Plus 4 singletons (jediné instance): Nastavení webu, Homepage, O nás, Daru.

### Uploadování fotek

Každá kolekce s obrázkem má dedikovanou složku v `public/uploads/<collection>/`. Keystatic UI ukládá soubory automaticky do správné složky.

| Kolekce | Složka |
|---|---|
| Blog thumbnails + inline | `public/uploads/blog/` |
| Akce (obrázek akce) | `public/uploads/events/` |
| Učitelé (portrét) | `public/uploads/teachers/` |
| Zdroje (náhled) | `public/uploads/resources/` |

Ideální velikost:
- **Thumbnails**: 1200×630 px (OG image dimensions)
- **Portréty**: 1080×1350 px (4:5 aspect)
- **Inline v článku**: 1600px šířka max

Keystatic automaticky uvede `alt` text při uploadu — **vždy ho vyplňte** (accessibility + SEO).

---

## Workflow pro redaktora

1. Otevřít `https://tergarczechia-three.vercel.app/keystatic`
2. Přihlásit se GitHubem
3. Vybrat kolekci (Blog, Akce, …) z levého menu
4. Kliknout **Add** (pro nový) nebo existující položku
5. Vyplnit pole, uložit
6. Počkat ~40 s na auto-deploy; Vercel ukáže novou verzi na `tergarczechia-three.vercel.app`

### Koncepty

Blog má checkbox **„Koncept"**. Zatržené = článek se nezobrazí návštěvníkům, zůstane jen v CMS. Odznačením + uložením = publikováno po deployi.

### Zvýraznění

Blog a Akce mají **„Zvýraznit"**. Zaškrtnuté položky jsou nahoře na homepage a na přehledové stránce.

---

## Troubleshooting

**„This app is not authorized"** po přihlášení → GitHub OAuth App callback URL nesedí. Zkontrolujte v [Settings → Developer settings → OAuth Apps](https://github.com/settings/developers), že je tam přesně `https://tergarczechia-three.vercel.app/api/keystatic/github/oauth/callback`.

**Změny v CMS se neprojeví na webu** → Zkontrolujte Vercel Dashboard, deploy status. Keystatic commituje do větve `cms/*` na GitHubu; Vercel deployuje jen z `main`. Pokud máte `branchPrefix: 'cms/'` v configu, PR musíte mergnout ručně. Pro autodeploy nastavte `branchPrefix: undefined` v `keystatic.config.tsx`.

**„Secret required"** při načtení `/keystatic` → chybí `KEYSTATIC_SECRET` env var na Vercelu.

**Formulář přihlášky nefunguje v produkci** → zkontrolujte, že `RESEND_API_KEY` je nastavený a že doména v `NOTIFY_FROM` je v Resendu ověřená.

---

## Změny v kódu

- `keystatic.config.tsx` — schema + UI konfigurace (kolekce, labely, pole)
- `src/content.config.ts` — Astro Content Collections schema (Zod)
- `src/pages/api/register.ts` — serverless endpoint pro přihlášky
- `src/components/events/RegistrationForm.tsx` — React formulář
- `.env.example` — vzor env vars

Update tohoto dokumentu vždycky, když přidáte novou kolekci nebo env var.
