import type { APIContext } from 'astro';
import { complete, brandSystemPrompt } from './_lib/claude';
import { seoMetaPrompt, type Locale } from './_lib/prompts';
import { requireAdmin } from './_lib/auth';

export const prerender = false;

type Body = {
  body: string;
  locale: Locale;
  primaryKeyword?: string;
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
  if (!body?.body) {
    return new Response('Missing body', { status: 400 });
  }

  const system = [brandSystemPrompt({ locale: body.locale ?? 'cs' })];
  const result = await complete(env, {
    system,
    user: seoMetaPrompt(body),
    model: 'haiku',
    maxTokens: 400,
  });

  // Expect JSON in response
  let parsed: { title: string; description: string; keywords: string[] } | null = null;
  try {
    const match = result.text.match(/\{[\s\S]*\}/);
    parsed = match ? JSON.parse(match[0]) : null;
  } catch {
    parsed = null;
  }

  if (!parsed) {
    return new Response(
      JSON.stringify({ error: 'AI returned non-JSON', raw: result.text }),
      { status: 502, headers: { 'content-type': 'application/json' } },
    );
  }

  return new Response(JSON.stringify(parsed), {
    headers: { 'content-type': 'application/json' },
  });
}
