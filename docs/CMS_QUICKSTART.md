# CMS — rychlý start (15 minut)

Tergar redakce běží na `tergarczechia-three.vercel.app/keystatic`. Josef se přihlásí
**Gmail účtem** `chatujsgpt@gmail.com`, vstoupí do editoru, změní článek → Vercel
automaticky redeployne. Tento dokument je minimální návod na první nastavení.

> Plná dokumentace se vším příslušenstvím: [`CMS_SETUP.md`](../CMS_SETUP.md)

## 1. Google OAuth (5 min)

Konzole: https://console.cloud.google.com/apis/credentials

1. **Create credentials → OAuth client ID → Web application**
2. Name: `Tergar Redakce`
3. Authorized JavaScript origins:
   - `https://tergarczechia-three.vercel.app`
   - `http://localhost:4321`
4. Authorized redirect URIs:
   - `https://egxxyszvwrqvkvlxawky.supabase.co/auth/v1/callback`
5. Klikni **Create** → zkopíruj **Client ID** i **Client secret**.

## 2. Supabase provider (3 min)

Dashboard: https://supabase.com/dashboard/project/egxxyszvwrqvkvlxawky/auth/providers

1. **Google** → Enable
2. Vlož **Client ID** a **Client secret** z kroku 1
3. Save

Dashboard: https://supabase.com/dashboard/project/egxxyszvwrqvkvlxawky/auth/url-configuration

- **Site URL:** `https://tergarczechia-three.vercel.app`
- **Additional Redirect URLs:** přidej
  - `https://tergarczechia-three.vercel.app/api/auth/callback`
  - `http://localhost:4321/api/auth/callback`

## 3. GitHub OAuth App pro Keystatic (5 min)

Konzole: https://github.com/settings/developers → **New OAuth App**

```
Application name:            Tergar CMS
Homepage URL:                https://tergarczechia-three.vercel.app
Authorization callback URL:  https://tergarczechia-three.vercel.app/api/keystatic/github/oauth/callback
```

Po vytvoření:
1. **Generate a new client secret** → zkopíruj
2. Poznamenej **Client ID** (viditelné trvale)

## 4. Env vars ve Vercelu (2 min)

Spusť jedno po druhém (na každé zadání prompt vložíš hodnotu):

```bash
cd ~/tergarczechia

# Supabase — auth guard
vercel env add PUBLIC_SUPABASE_URL production
# → https://egxxyszvwrqvkvlxawky.supabase.co

vercel env add PUBLIC_SUPABASE_ANON_KEY production
# → sb_publishable_WjCsaepIZ4DvSbPk3aCRJQ_X7YHenZS

vercel env add ADMIN_EMAILS production
# → chatujsgpt@gmail.com

# Keystatic GitHub mode
vercel env add KEYSTATIC_STORAGE production
# → github

vercel env add KEYSTATIC_GITHUB_CLIENT_ID production
# → <z kroku 3>

vercel env add KEYSTATIC_GITHUB_CLIENT_SECRET production
# → <z kroku 3>

vercel env add KEYSTATIC_SECRET production
# → <výstup z: openssl rand -hex 32>
```

## 5. Redeploy

```bash
vercel --prod --yes
```

## 6. Ověření

1. Otevři `https://tergarczechia-three.vercel.app/keystatic`
2. Middleware tě odhodí na `/admin/login`
3. Klikni **Přihlásit přes Google** → vybereš `chatujsgpt@gmail.com`
4. Vrátíš se do Keystatic → vidíš sekci **Hlavní obsah** (Blog, Akce, Přihlášky)
5. Klikni na **Blog** → **Add** → zkus vytvořit testovací článek
6. Uložit → Keystatic vytvoří commit do `main`, Vercel redeploy spustí sám

## Přidání dalšího redaktora

```bash
vercel env rm ADMIN_EMAILS production
vercel env add ADMIN_EMAILS production
# → chatujsgpt@gmail.com,jakub@email.cz,novy@...
vercel --prod --yes
```

## Lokální vývoj (bez auth)

`npm run dev` → `http://localhost:4321/keystatic` funguje **bez** Supabase loginu,
protože middleware kontroluje cookie jen na produkci. Lokálně píše přímo do
filesystému — žádný OAuth, žádné env vars potřeba.

## Co se teď umí

- ✅ Přihlášení Gmail (Josef + další redaktoři v allowlistu)
- ✅ Editace všech 11 kolekcí (Blog, Akce, Přihlášky, Skupiny, Učitelé, Hlasy sanghy, Cesta, Zdroje, Slovník, FAQ, Stránky)
- ✅ Upload obrázků (Blog, Akce, Učitelé, Zdroje → `public/uploads/<kolekce>/`)
- ✅ Auto-deploy po každé editaci (Keystatic commit → Vercel redeploy ~40s)
- ✅ Přihlášky na akce chodí do `/api/register` (email přes Resend + optional commit)

## Troubleshooting

**"Účet není v seznamu správců"** po přihlášení → Gmail e-mail nepasuje `ADMIN_EMAILS`.
Zkontroluj `vercel env ls` a přidej správnou adresu.

**Keystatic ukazuje „Repo not found"** → Client Secret v `KEYSTATIC_GITHUB_CLIENT_SECRET`
vypršel nebo je špatně zkopírovaný. Vygenerovat nový v GitHub OAuth app.

**Google redirect končí s 400** → Redirect URI v Google Cloud neobsahuje přesně
`https://egxxyszvwrqvkvlxawky.supabase.co/auth/v1/callback`.
