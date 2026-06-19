import styles from './Sammendrag.module.css';

export default function Sammendrag({ avsnitt }) {
  return (
    <div className={styles.wrapper}>
      {avsnitt.map((a, i) => (
        <div key={i} className={styles.avsnitt}>
          <h2 className={styles.tittel}>{a.tittel}</h2>
          <p className={styles.tekst}>{a.tekst}</p>
        </div>
      ))}
    </div>
  );
}
