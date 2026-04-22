import Anthropic from '@anthropic-ai/sdk';

const SONNET = 'claude-sonnet-4-5';
const HAIKU = 'claude-haiku-4-5';

function getClient(env: Record<string, unknown>): Anthropic {
  const key = (env?.ANTHROPIC_API_KEY as string) || (globalThis as any).ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY;
  if (!key) {
    throw new Error('ANTHROPIC_API_KEY is not set');
  }
  return new Anthropic({ apiKey: key });
}

export type Locale = 'cs' | 'en';

export type BrandContext = {
  locale: Locale;
  glossary?: Array<{ term: string; shortDef: string }>;
};

export function brandSystemPrompt(ctx: BrandContext): Anthropic.Messages.TextBlockParam {
  const voice = ctx.locale === 'en'
    ? `You write for Tergar Czechia — the Czech branch of the international Tergar meditation community founded by Yongey Mingyur Rinpoche. Voice: warm, grounded, quietly confident. Science-adjacent (neuroscience-aware). Never dogmatic, never promotional. Plain English, no AI-ish padding, no em-dash overuse, no "journey" filler.`
    : `Píšeš pro Tergar Česko — českou pobočku mezinárodní meditační komunity Tergar založené Yongey Mingyur Rinpočhem. Tón: vřelý, usazený, tiše sebejistý. Vědomý neurovědy, ne-dogmatický, nepromociální. Prostá čeština, žádná AI vata, žádné "cestování životem" či nadbytečné pomlčky. Dodržuj české typografické zvyklosti (uvozovky „ ", nezlomitelné mezery po k, v, z, s, o, u, a, i).`;

  const guardrails = `
Pravidla:
- Nikdy nevymýšlej fakta o učitelích, datech, místech nebo cenách.
- Nikdy necituj konkrétního učitele slovy, pokud citace nebyla v zadání.
- Používej buddhistické termíny správně (Mahámudra, Šamatha, Vipaśyaná, Ngöndro, Bódhičitta). Pokud neznáš český ekvivalent, ponech sanskrt/tibet a vysvětli.
- Délka respektuje požadavek uživatele; raději krátce a hutně než dlouze.
- Nepřidávej disclaimery ani úvodní „Samozřejmě, napíšu pro vás…". Rovnou text.
`.trim();

  const glossaryBlock = ctx.glossary && ctx.glossary.length > 0
    ? `\n\nGlosář pojmů dostupných na webu (používej krátké definice jako vodítko):\n${
        ctx.glossary.slice(0, 50).map((t) => `- ${t.term}: ${t.shortDef}`).join('\n')
      }`
    : '';

  return {
    type: 'text',
    text: `${voice}\n\n${guardrails}${glossaryBlock}`,
    cache_control: { type: 'ephemeral' },
  };
}

export async function complete(
  env: Record<string, unknown>,
  opts: {
    system: Anthropic.Messages.TextBlockParam[];
    user: string;
    model?: 'sonnet' | 'haiku';
    maxTokens?: number;
  },
): Promise<{ text: string; inputTokens: number; outputTokens: number }> {
  const client = getClient(env);
  const model = opts.model === 'haiku' ? HAIKU : SONNET;

  const res = await client.messages.create({
    model,
    max_tokens: opts.maxTokens ?? 1024,
    system: opts.system,
    messages: [{ role: 'user', content: opts.user }],
  });

  const text = res.content
    .filter((b): b is Anthropic.Messages.TextBlock => b.type === 'text')
    .map((b) => b.text)
    .join('\n');

  return {
    text,
    inputTokens: res.usage.input_tokens,
    outputTokens: res.usage.output_tokens,
  };
}

export async function streamComplete(
  env: Record<string, unknown>,
  opts: {
    system: Anthropic.Messages.TextBlockParam[];
    user: string;
    model?: 'sonnet' | 'haiku';
    maxTokens?: number;
  },
): Promise<ReadableStream<Uint8Array>> {
  const client = getClient(env);
  const model = opts.model === 'haiku' ? HAIKU : SONNET;
  const encoder = new TextEncoder();

  return new ReadableStream({
    async start(controller) {
      try {
        const stream = client.messages.stream({
          model,
          max_tokens: opts.maxTokens ?? 2048,
          system: opts.system,
          messages: [{ role: 'user', content: opts.user }],
        });

        for await (const event of stream) {
          if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
  });
}
