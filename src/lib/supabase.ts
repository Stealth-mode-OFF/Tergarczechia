import { createServerClient, parseCookieHeader } from '@supabase/ssr';
import type { AstroCookies } from 'astro';

const SUPABASE_URL =
  import.meta.env.PUBLIC_SUPABASE_URL ?? 'https://egxxyszvwrqvkvlxawky.supabase.co';
const SUPABASE_ANON_KEY =
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? 'sb_publishable_WjCsaepIZ4DvSbPk3aCRJQ_X7YHenZS';

/**
 * Server-side Supabase client bound to Astro cookies.
 * Use inside endpoints, middleware and `.astro` server code.
 */
export function getServerClient(
  request: Request,
  cookies: AstroCookies,
) {
  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        const header = request.headers.get('cookie') ?? '';
        return parseCookieHeader(header).map((c) => ({
          name: c.name,
          value: c.value ?? '',
        }));
      },
      setAll(all) {
        for (const { name, value, options } of all) {
          cookies.set(name, value, {
            path: '/',
            httpOnly: true,
            secure: import.meta.env.PROD,
            sameSite: 'lax',
            ...options,
          });
        }
      },
    },
  });
}

/**
 * Returns the list of admin e-mails from env (comma-separated).
 * Falls back to Josef's known gmail so local dev works without extra setup.
 */
export function adminEmails(): string[] {
  const raw = import.meta.env.ADMIN_EMAILS ?? 'chatujsgpt@gmail.com';
  return raw
    .split(',')
    .map((s: string) => s.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return adminEmails().includes(email.toLowerCase());
}

export const supabaseConfig = {
  url: SUPABASE_URL,
  anonKey: SUPABASE_ANON_KEY,
} as const;
