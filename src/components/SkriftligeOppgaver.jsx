import { useState } from 'react';
import styles from './SkriftligeOppgaver.module.css';

function Oppgave({ nr, oppgave }) {
  const [svar, setSvar] = useState('');
  const [vist, setVist] = useState(false);

  function visFasit() {
    if (svar.trim()) setVist(true);
  }

  function nullstill() {
    setSvar('');
    setVist(false);
  }

  return (
    <div className={styles.oppgave}>
      <p className={styles.sporsmal}>
        <span className={styles.nr}>{nr}.</span> {oppgave.sporsmal}
      </p>

      {oppgave.bilde && (
        <img
          className={styles.bilde}
          src={import.meta.env.BASE_URL + oppgave.bilde}
          alt="Illustrasjon til oppgaven"
        />
      )}

      <textarea
        className={styles.tekstfelt}
        value={svar}
        onChange={(e) => setSvar(e.target.value)}
        placeholder="Skriv svaret ditt her …"
        rows={4}
        readOnly={vist}
      />

      {!vist ? (
        <button
          type="button"
          className={styles.sjekk}
          onClick={visFasit}
          disabled={!svar.trim()}
        >
          Vis fasit
        </button>
      ) : (
        <div className={styles.resultat}>
          <div className={styles.fasit}>
            <span className={styles.fasitTittel}>Fasit</span>
            <p>{oppgave.fasit}</p>
          </div>
          <p className={styles.veiledning}>
            Les fasiten nøye og vurder selv om svaret ditt stemmer. Husk at
            svaret ditt kan være riktig selv om du har valgt et annet eksempel
            enn fasiten.
          </p>
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
        Skriv svaret ditt i tekstboksen og trykk «Vis fasit». Les deretter
        fasiten nøye og vurder selv om svaret ditt stemmer.
      </p>
      {oppgaver.map((o, i) => (
        <Oppgave key={i} nr={i + 1} oppgave={o} />
      ))}
    </div>
  );
}
