import { defineMiddleware } from 'astro:middleware';
import { getServerClient, isAdminEmail } from '@/lib/supabase';

/**
 * Guards the Keystatic admin routes.
 *
 * The /keystatic/** URL space is where Keystatic mounts its editor. We also
 * guard /api/keystatic/** to block the OAuth exchange endpoints for anyone
 * who isn't a logged-in admin.
 *
 * Everything else passes through untouched — public pages stay static and
 * unauthenticated.
 */
const GUARDED_PREFIXES = ['/keystatic', '/api/keystatic'];
const ALLOWED_UNAUTH_PREFIXES = ['/admin/login', '/api/auth'];

function isGuarded(pathname: string): boolean {
  return GUARDED_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

function isUnauthAllowed(pathname: string): boolean {
  return ALLOWED_UNAUTH_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { request, cookies, url, redirect } = context;

  // Public page? Always let through.
  if (!isGuarded(url.pathname) && !isUnauthAllowed(url.pathname)) {
    return next();
  }

  // Unauth-allowed routes (login + callback) need no check.
  if (isUnauthAllowed(url.pathname)) {
    return next();
  }

  const supabase = getServerClient(request, cookies);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminEmail(user.email)) {
    // Preserve return URL so post-login we land back where they came from
    const returnTo = encodeURIComponent(url.pathname + url.search);
    return redirect(`/admin/login?returnTo=${returnTo}`);
  }

  // Attach user to locals so admin pages can read who's logged in
  (context.locals as { user?: typeof user }).user = user;
  return next();
});
