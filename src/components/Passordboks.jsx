import { useState } from 'react';
import { provPassord, useTilgang } from '../tilgang';
import styles from './Passordboks.module.css';

export default function Passordboks() {
  const rolle = useTilgang();
  const [passord, setPassord] = useState('');
  const [feil, setFeil] = useState(false);

  if (rolle) return null;

  async function sendInn(e) {
    e.preventDefault();
    const ok = await provPassord(passord);
    setFeil(!ok);
    if (ok) setPassord('');
  }

  return (
    <form className={styles.boks} onSubmit={sendInn}>
      <label htmlFor="passord" className={styles.tekst}>
        🔒 Skriv inn passordet for å åpne emnene
      </label>
      <div className={styles.rad}>
        <input
          id="passord"
          type="password"
          className={styles.felt}
          value={passord}
          onChange={(e) => { setPassord(e.target.value); setFeil(false); }}
          autoComplete="off"
        />
        <button type="submit" className={styles.knapp}>Åpne</button>
      </div>
      {feil && <p className={styles.feil} role="alert">Feil passord. Prøv igjen.</p>}
      <p className={styles.gjest}>
        Ikke elev? Send en e-post til{' '}
        <a href="mailto:amelie-he@gjesdalskolen.com?subject=Gjestepassord%20til%20Naturfagsreppen">amelie-he@gjesdalskolen.com</a>{' '}
        for å få et gratis gjestepassord som er gyldig hele skoleåret.
      </p>
    </form>
  );
}
