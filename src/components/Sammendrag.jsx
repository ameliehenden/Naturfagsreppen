import styles from './Sammendrag.module.css';
import Figur from './Figurer';

export default function Sammendrag({ avsnitt }) {
  return (
    <div className={styles.wrapper}>
      {avsnitt.map((a, i) => (
        <div key={i} className={styles.avsnitt}>
          <h2 className={styles.tittel}>{a.tittel}</h2>
          <p className={styles.tekst}>{a.tekst}</p>
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
