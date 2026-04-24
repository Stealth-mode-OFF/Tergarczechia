import { useState } from 'react';

type Props = {
  eventId: string;
  eventTitle: string;
};

type Status = 'idle' | 'submitting' | 'ok' | 'error';

export default function RegistrationForm({ eventId, eventTitle }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');
    setError('');

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        message: String(data.get('message') ?? ''),
        website: String(data.get('website') ?? ''),
        event: eventId,
        eventTitle,
      }),
    });

    if (!res.ok) {
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      setError(errorMessage(body.error));
      setStatus('error');
      return;
    }

    setStatus('ok');
    form.reset();
  }

  if (status === 'ok') {
    return (
      <div className="reg-success" role="status" aria-live="polite">
        <h3>Díky, máme to.</h3>
        <p>
          Potvrzení přijde na váš e-mail během pár minut. Pokud by se nic neobjevilo
          ani ve spamu, napište na <a href="mailto:czech@tergar.org">czech@tergar.org</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="reg-form" onSubmit={handleSubmit} noValidate>
      <p className="reg-lede">
        Vyplňte a odešlete. Detaily přijdou e-mailem do pár minut.
      </p>
      <div className="field">
        <label htmlFor="reg-name">Jméno a příjmení</label>
        <input id="reg-name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="reg-email">E-mail</label>
        <input id="reg-email" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="reg-phone">Telefon <span className="opt">(volitelné)</span></label>
        <input id="reg-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="reg-message">Zpráva <span className="opt">(volitelné)</span></label>
        <textarea id="reg-message" name="message" rows={3} />
      </div>

      {/* Honeypot — hidden from humans, catches bots */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="reg-website">Webová stránka</label>
        <input id="reg-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Odesílám…' : 'Odeslat přihlášku'}
      </button>

      {status === 'error' && (
        <p className="reg-error" role="alert">
          {error || 'Něco se nepovedlo. Zkuste to prosím znovu, nebo napište na czech@tergar.org.'}
        </p>
      )}

      <p className="reg-privacy">
        Údaje použijeme jen k organizaci této akce. Nikam je neprodáváme a po akci je mažeme.
      </p>
    </form>
  );
}

function errorMessage(code?: string): string {
  switch (code) {
    case 'name_required':
      return 'Chybí jméno.';
    case 'email_invalid':
      return 'E-mail nevypadá správně. Zkontrolujte zápis.';
    case 'event_required':
      return 'Systémová chyba. Obnovte stránku a zkuste to znovu.';
    default:
      return 'Nepovedlo se to odeslat. Zkuste za chvíli znovu, nebo napište na czech@tergar.org.';
  }
}
