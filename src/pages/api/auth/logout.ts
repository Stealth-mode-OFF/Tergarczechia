import type { APIRoute } from 'astro';
import { getServerClient } from '@/lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const supabase = getServerClient(request, cookies);
  await supabase.auth.signOut();
  return redirect('/admin/login?logged_out=1');
};

export const GET = POST;
