import type { APIRoute } from 'astro';
import { getServerClient, isAdminEmail } from '@/lib/supabase';

export const prerender = false;

/**
 * Completes the Supabase OAuth flow.
 *
 * Supabase redirects the browser to this endpoint with `?code=...` after the
 * user signs in with Google. We exchange the code for a session (stored in
 * HTTP-only cookies via our server client), verify the account is on the
 * admin allowlist, and then send them back to the page they came from
 * (defaults to /keystatic).
 */
export const GET: APIRoute = async ({ url, request, cookies, redirect }) => {
  const code = url.searchParams.get('code');
  const returnTo = url.searchParams.get('returnTo') ?? '/keystatic';

  if (!code) {
    return redirect('/admin/login?error=oauth');
  }

  const supabase = getServerClient(request, cookies);
  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return redirect('/admin/login?error=oauth');
  }

  // Verify allowlist. Sign out immediately if not allowed — we don't want
  // a stray session cookie for a non-admin e-mail hanging around.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminEmail(user.email)) {
    const bad = encodeURIComponent(user?.email ?? 'unknown');
    await supabase.auth.signOut();
    return redirect(`/admin/login?error=denied&denied=${bad}`);
  }

  // Good to go
  return redirect(returnTo.startsWith('/') ? returnTo : '/keystatic');
};
