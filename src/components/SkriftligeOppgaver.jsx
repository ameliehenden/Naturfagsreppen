import { useState } from 'react';
import styles from './SkriftligeOppgaver.module.css';

function Oppgave({ nr, oppgave }) {
  const [svar, setSvar] = useState('');
  const [sjekket, setSjekket] = useState(false);

  const svarLower = svar.toLowerCase();
  const treff = oppgave.nokkelord.filter((n) => svarLower.includes(n.toLowerCase()));
  const antall = treff.length;
  const total = oppgave.nokkelord.length;

  let melding;
  if (antall === total) {
    melding = `Flott! Du fikk med alle ${total} nøkkelordene 🎉`;
  } else if (antall >= Math.ceil(total / 2)) {
    melding = `Bra! Du fikk med ${antall} av ${total} nøkkelord 👍`;
  } else {
    melding = `Du fikk med ${antall} av ${total} nøkkelord. Les fasiten og prøv å utdype svaret ditt.`;
  }

  function sjekk() {
    if (svar.trim()) setSjekket(true);
  }

  function nullstill() {
    setSvar('');
    setSjekket(false);
  }

  return (
    <div className={styles.oppgave}>
      <p className={styles.sporsmal}>
        <span className={styles.nr}>{nr}.</span> {oppgave.sporsmal}
      </p>

      <textarea
        className={styles.tekstfelt}
        value={svar}
        onChange={(e) => setSvar(e.target.value)}
        placeholder="Skriv svaret ditt her …"
        rows={4}
        readOnly={sjekket}
      />

      {!sjekket ? (
        <button
          type="button"
          className={styles.sjekk}
          onClick={sjekk}
          disabled={!svar.trim()}
        >
          Sjekk svaret
        </button>
      ) : (
        <div className={styles.resultat}>
          <p className={styles.melding}>{melding}</p>
          <div className={styles.fasit}>
            <span className={styles.fasitTittel}>Fasit</span>
            <p>{oppgave.fasit}</p>
          </div>
          <button type="button" className={styles.nullstill} onClick={nullstill}>
            Prøv på nytt
          </button>
        </div>
      )}
    </div>
  );
}

export default function SkriftligeOppgaver({ oppgaver }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.intro}>
        Skriv svaret ditt i tekstboksen og trykk «Sjekk svaret». Du får en enkel
        tilbakemelding basert på nøkkelord, og fasiten vises så du kan
        sammenligne svaret ditt selv.
      </p>
      {oppgaver.map((o, i) => (
        <Oppgave key={i} nr={i + 1} oppgave={o} />
      ))}
    </div>
  );
}
