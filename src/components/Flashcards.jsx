import { useState } from 'react';
import styles from './Flashcards.module.css';

// Lag en ny runde: stokk kortene tilfeldig, og marker ca. 1 av 4 som "snudd"
// (forklaring vises først i stedet for begrep).
function lagRunde(kort) {
  const stokket = kort.map((k) => ({ ...k, snudd: Math.random() < 0.25 }));
  for (let i = stokket.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [stokket[i], stokket[j]] = [stokket[j], stokket[i]];
  }
  return stokket;
}

export default function Flashcards({ kort }) {
  const [runde, setRunde] = useState(() => lagRunde(kort));
  const [index, setIndex] = useState(0);
  const [vist, setVist] = useState(false); // er baksiden snudd fram?
  const [ferdig, setFerdig] = useState(false);

  function startPaNytt() {
    setRunde(lagRunde(kort));
    setIndex(0);
    setVist(false);
    setFerdig(false);
  }

  function handleKlikk() {
    if (!vist) {
      setVist(true); // første trykk: snu kortet
    } else if (index + 1 < runde.length) {
      setIndex(index + 1); // andre trykk: neste kort
      setVist(false);
    } else {
      setFerdig(true); // siste kort var snudd: ferdig
    }
  }

  if (ferdig) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.ferdig}>
          <p className={styles.ferdigIkon} aria-hidden="true">🎉</p>
          <h3 className={styles.ferdigTittel}>Du er gjennom alle kortene!</h3>
          <button type="button" className={styles.nytt} onClick={startPaNytt}>
            Stokk om og start på nytt
          </button>
        </div>
      </div>
    );
  }

  const aktivt = runde[index];
  const forside = aktivt.snudd ? aktivt.forklaring : aktivt.begrep;
  const bakside = aktivt.snudd ? aktivt.begrep : aktivt.forklaring;
  const forsideType = aktivt.snudd ? 'Forklaring' : 'Begrep';
  const baksideType = aktivt.snudd ? 'Begrep' : 'Forklaring';

  const type = vist ? baksideType : forsideType;
  const tekst = vist ? bakside : forside;

  return (
    <div className={styles.wrapper}>
      <div className={styles.teller} aria-live="polite">
        Kort {index + 1} av {runde.length}
      </div>

      <button
        type="button"
        className={styles.kort}
        onClick={handleKlikk}
        key={`${index}-${vist}`}
      >
        <span className={styles.type}>{type}</span>
        <span className={styles.tekst}>{tekst}</span>
        <span className={styles.hint}>
          {vist ? 'Trykk for neste kort →' : 'Trykk for å snu'}
        </span>
      </button>

      <button type="button" className={styles.nytt} onClick={startPaNytt}>
        Stokk om og start på nytt
      </button>
    </div>
  );
}
