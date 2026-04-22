import type { APIContext } from 'astro';

/**
 * Guard AI endpoints. In dev (local Keystatic mode) we allow all.
 * In prod we require a Keystatic session cookie.
 * Cloudflare env wires real auth at deploy.
 */
export function requireAdmin(ctx: APIContext): Response | null {
  const isDev = import.meta.env.DEV;
  if (isDev) return null;

  const cookie = ctx.request.headers.get('cookie') ?? '';
  const hasKeystaticSession = /keystatic-branch|keystatic-gh-access-token/.test(cookie);
  if (hasKeystaticSession) return null;

  return new Response(
    JSON.stringify({ error: 'Unauthorized', hint: 'AI endpoints require Keystatic admin session.' }),
    { status: 401, headers: { 'content-type': 'application/json' } },
  );
}
