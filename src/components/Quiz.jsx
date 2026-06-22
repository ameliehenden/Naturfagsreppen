import { useState } from 'react';
import styles from './Quiz.module.css';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Stokk spørsmålene, og stokk alternativene innenfor hvert spørsmål.
function lagRunde(sporsmaal) {
  return shuffle(sporsmaal).map((q) => ({
    sporsmal: q.sporsmal,
    alternativer: shuffle([
      { tekst: q.riktig, riktig: true },
      ...q.feil.map((f) => ({ tekst: f, riktig: false })),
    ]),
  }));
}

export default function Quiz({ sporsmaal }) {
  const [runde, setRunde] = useState(() => lagRunde(sporsmaal));
  const [index, setIndex] = useState(0);
  const [valgt, setValgt] = useState(null); // valgt alternativ-indeks
  const [poeng, setPoeng] = useState(0);
  const [ferdig, setFerdig] = useState(false);

  function velg(i) {
    if (valgt !== null) return; // allerede besvart
    setValgt(i);
    if (runde[index].alternativer[i].riktig) setPoeng((p) => p + 1);
  }

  function neste() {
    if (index + 1 < runde.length) {
      setIndex(index + 1);
      setValgt(null);
    } else {
      setFerdig(true);
    }
  }

  function startPaNytt() {
    setRunde(lagRunde(sporsmaal));
    setIndex(0);
    setValgt(null);
    setPoeng(0);
    setFerdig(false);
  }

  if (ferdig) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.resultat}>
          <p className={styles.resultatIkon} aria-hidden="true">🎉</p>
          <h3 className={styles.resultatTittel}>
            Du fikk {poeng} av {runde.length} riktige!
          </h3>
          <button type="button" className={styles.nytt} onClick={startPaNytt}>
            Ta quizen på nytt
          </button>
        </div>
      </div>
    );
  }

  const q = runde[index];
  const besvart = valgt !== null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.teller}>
        Spørsmål {index + 1} av {runde.length}
      </div>
      <p className={styles.sporsmal}>{q.sporsmal}</p>

      <div className={styles.alternativer}>
        {q.alternativer.map((alt, i) => {
          let kl = styles.alt;
          if (besvart) {
            if (alt.riktig) kl += ' ' + styles.riktig;
            else if (i === valgt) kl += ' ' + styles.feil;
            else kl += ' ' + styles.dempet;
          }
          const ikon = besvart
            ? alt.riktig ? '✓' : i === valgt ? '✗' : null
            : null;
          return (
            <button
              key={i}
              type="button"
              className={kl}
              onClick={() => velg(i)}
              disabled={besvart}
            >
              {ikon && <span className={styles.altIkon} aria-hidden="true">{ikon}</span>}
              {alt.tekst}
            </button>
          );
        })}
      </div>

      {besvart && (
        <div className={styles.tilbakemelding}>
          <p className={q.alternativer[valgt].riktig ? styles.riktigTekst : styles.feilTekst}>
            {q.alternativer[valgt].riktig
              ? 'Riktig! 🎉'
              : 'Ikke helt. Riktig svar er markert grønt.'}
          </p>
          <button type="button" className={styles.neste} onClick={neste}>
            {index + 1 < runde.length ? 'Neste spørsmål →' : 'Se resultatet'}
          </button>
        </div>
      )}
    </div>
  );
}
