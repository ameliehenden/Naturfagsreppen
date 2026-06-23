import styles from './Sammendrag.module.css';
import Figur from './Figurer';

export default function Sammendrag({ avsnitt }) {
  return (
    <div className={styles.wrapper}>
      {avsnitt.map((a, i) => (
        <div key={i} className={styles.avsnitt}>
          <h2 className={styles.tittel}>{a.tittel}</h2>
          <p className={styles.tekst}>{a.tekst}</p>
          {a.tabell && (
            <div className={styles.tabell}>
              {a.tabell.map((kol, k) => (
                <div key={k} className={styles.tabellKol}>
                  <h3 className={styles.tabellTittel}>{kol.tittel}</h3>
                  <ul className={styles.tabellListe}>
                    {kol.rader.map((rad, r) => <li key={r}>{rad}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {a.figur && (
            <div className={styles.figur}>
              <Figur navn={a.figur} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
