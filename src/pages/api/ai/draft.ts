import type { APIContext } from 'astro';
import { streamComplete, brandSystemPrompt } from './_lib/claude';
import { draftPrompt, type DraftPreset, type Locale } from './_lib/prompts';
import { requireAdmin } from './_lib/auth';

export const prerender = false;

type Body = {
  preset: DraftPreset;
  input: { title: string; hints?: string; wordCount?: number; locale?: Locale };
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
  if (!body?.preset || !body?.input?.title) {
    return new Response('Missing preset or input.title', { status: 400 });
  }

  const system = [brandSystemPrompt({ locale: body.input.locale ?? 'cs' })];
  const user = draftPrompt(body.preset, body.input);

  try {
    const stream = await streamComplete(env, {
      system,
      user,
      model: 'sonnet',
      maxTokens: body.preset === 'blog-body' ? 2048 : 1024,
    });
    return new Response(stream, {
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'no-store',
        'x-content-type-options': 'nosniff',
      },
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: String(err?.message ?? err) }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
