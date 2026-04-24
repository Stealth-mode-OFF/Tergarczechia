import type { APIRoute } from 'astro';

// Server-rendered — accepts POST from event registration forms.
export const prerender = false;

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  event?: string;
  eventTitle?: string;
  message?: string;
  /** Honeypot — real users leave it empty. */
  website?: string;
};

const contactEmail = 'czech@tergar.org';
const repoOwner = 'Stealth-mode-OFF';
const repoName = 'Tergarczechia';

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function slug(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 48);
}

function yamlEscape(v: string): string {
  return v.replace(/"/g, '\\"').replace(/\n/g, '\\n');
}

async function sendNotificationEmail(b: Body, id: string): Promise<void> {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) return; // silent noop when not configured

  const from = import.meta.env.NOTIFY_FROM ?? 'Tergar Web <no-reply@tergarczechia.cz>';
  const subject = `Nová přihláška: ${b.eventTitle ?? b.event ?? 'akce'} — ${b.name ?? ''}`;
  const lines = [
    `Jméno: ${b.name ?? ''}`,
    `E-mail: ${b.email ?? ''}`,
    `Telefon: ${b.phone ?? '—'}`,
    `Akce: ${b.eventTitle ?? b.event ?? '—'}`,
    `Slug akce: ${b.event ?? '—'}`,
    '',
    'Zpráva:',
    b.message ?? '—',
    '',
    `ID přihlášky: ${id}`,
    `(V CMS: /keystatic/collection/registrations/item/${id})`,
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [contactEmail],
      reply_to: b.email,
      subject,
      text: lines,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.warn('[register] Resend failed:', res.status, text);
  }
}

async function commitToGitHub(id: string, body: Body): Promise<void> {
  const token = import.meta.env.GITHUB_COMMIT_TOKEN;
  if (!token) return; // silent — registration still goes via email

  const now = new Date().toISOString();
  const yaml = [
    `id: ${id}`,
    `name: "${yamlEscape(body.name ?? '')}"`,
    `email: "${yamlEscape(body.email ?? '')}"`,
    `phone: "${yamlEscape(body.phone ?? '')}"`,
    `event: "${yamlEscape(body.event ?? '')}"`,
    `message: "${yamlEscape(body.message ?? '')}"`,
    `source: web`,
    `status: new`,
    `createdAt: "${now}"`,
    `notes: ""`,
    '',
  ].join('\n');

  const path = `src/content/registrations/${id}.yaml`;
  const content = btoa(unescape(encodeURIComponent(yaml)));
  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `registration: ${body.name ?? ''} → ${body.event ?? ''}`,
      content,
      branch: 'main',
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    console.warn('[register] GitHub commit failed:', res.status, text);
  }
}

export const POST: APIRoute = async ({ request }) => {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return new Response(JSON.stringify({ error: 'invalid_json' }), { status: 400 });
  }

  // Honeypot — bots fill every field
  if (body.website && body.website.length > 0) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const event = (body.event ?? '').trim();

  if (!name || name.length < 2) {
    return new Response(JSON.stringify({ error: 'name_required' }), { status: 400 });
  }
  if (!email || !isEmail(email)) {
    return new Response(JSON.stringify({ error: 'email_invalid' }), { status: 400 });
  }
  if (!event) {
    return new Response(JSON.stringify({ error: 'event_required' }), { status: 400 });
  }

  const ts = new Date();
  const datePart = ts.toISOString().slice(0, 10);
  const id = `${datePart}-${slug(event)}-${slug(name)}-${ts.getTime().toString(36)}`;

  // Fire-and-forget. Registration is accepted as long as the email OR the
  // commit succeeds; both failing is logged server-side.
  await Promise.allSettled([
    sendNotificationEmail(body, id),
    commitToGitHub(id, body),
  ]);

  return new Response(JSON.stringify({ ok: true, id }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
