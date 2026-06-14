import { useEffect, useRef, useState } from 'react';
import styles from './Feedback.module.css';

const MOTTAKER = 'amelie-he@gjesdalskolen.com';

export default function Feedback() {
  const [apen, setApen] = useState(false);
  const [tekst, setTekst] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sender | sendt | feil
  const tekstfeltRef = useRef(null);

  // Lukk med Escape, og sett fokus i tekstfeltet når dialogen åpnes
  useEffect(() => {
    if (!apen) return;
    tekstfeltRef.current?.focus();
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setApen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [apen]);

  function apne() {
    // Start alltid med et tomt skjema
    setTekst('');
    setStatus('idle');
    setApen(true);
  }

  function lukk() {
    setApen(false);
  }

  async function sendInn(e) {
    e.preventDefault();
    if (!tekst.trim()) return;
    setStatus('sender');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${MOTTAKER}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Tilbakemelding: tekst.trim(),
          _subject: 'Ny tilbakemelding fra Naturfagsreppen',
          _template: 'table',
          _captcha: 'false',
        }),
      });
      if (!res.ok) throw new Error('Innsending feilet');
      setStatus('sendt');
      setTekst('');
    } catch {
      setStatus('feil');
    }
  }

  return (
    <>
      <button
        type="button"
        className={styles.knapp}
        onClick={apne}
        aria-haspopup="dialog"
      >
        <span aria-hidden="true">💬</span> Tilbakemelding
      </button>

      {apen && (
        <div
          className={styles.overlegg}
          onClick={lukk}
          role="presentation"
        >
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="tilbakemelding-tittel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.lukk}
              onClick={lukk}
              aria-label="Lukk"
            >
              ×
            </button>

            {status === 'sendt' ? (
              <div className={styles.takk}>
                <p className={styles.takkIkon} aria-hidden="true">✅</p>
                <h2 id="tilbakemelding-tittel" className={styles.tittel}>
                  Takk for tilbakemeldingen!
                </h2>
                <p className={styles.hjelpetekst}>
                  Den er sendt anonymt videre. Du kan trygt lukke dette vinduet.
                </p>
                <button
                  type="button"
                  className={styles.send}
                  onClick={lukk}
                >
                  Lukk
                </button>
              </div>
            ) : (
              <form onSubmit={sendInn}>
                <h2 id="tilbakemelding-tittel" className={styles.tittel}>
                  Si din mening
                </h2>
                <p className={styles.hjelpetekst}>
                  Fant du noe som bør endres, en feil eller noe som var
                  vanskelig? Skriv det her. Tilbakemeldingen er helt anonym.
                </p>
                <textarea
                  ref={tekstfeltRef}
                  className={styles.tekstfelt}
                  value={tekst}
                  onChange={(e) => setTekst(e.target.value)}
                  placeholder="Skriv tilbakemeldingen din her …"
                  rows={5}
                  required
                />
                {status === 'feil' && (
                  <p className={styles.feilmelding} role="alert">
                    Noe gikk galt. Sjekk nettforbindelsen og prøv igjen.
                  </p>
                )}
                <button
                  type="submit"
                  className={styles.send}
                  disabled={status === 'sender' || !tekst.trim()}
                >
                  {status === 'sender' ? 'Sender …' : 'Send tilbakemelding'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
