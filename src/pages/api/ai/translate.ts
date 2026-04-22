import type { APIContext } from 'astro';
import { complete, brandSystemPrompt } from './_lib/claude';
import { translatePrompt, type Locale } from './_lib/prompts';
import { requireAdmin } from './_lib/auth';

export const prerender = false;

type Body = {
  text: string;
  from: Locale;
  to: Locale;
  preserveTerms?: string[];
};

export async function POST(ctx: APIContext): Promise<Response> {
  const authFail = requireAdmin(ctx);
  if (authFail) return authFail;

  const env = (ctx.locals as any)?.runtime?.env ?? process.env;

  let body: Body;
  try {
    body = await ctx.request.json();
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }
  if (!body?.text || !body?.from || !body?.to) {
    return new Response('Missing text/from/to', { status: 400 });
  }

  const system = [brandSystemPrompt({ locale: body.to })];
  const result = await complete(env, {
    system,
    user: translatePrompt(body),
    model: 'sonnet',
    maxTokens: 4096,
  });

  return new Response(JSON.stringify({ text: result.text }), {
    headers: { 'content-type': 'application/json' },
  });
}
