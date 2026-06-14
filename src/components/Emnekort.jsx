import styles from './Emnekort.module.css';

export default function Emnekort({ emne }) {
  return (
    <article
      className={styles.kort}
      style={{ '--emne-farge': emne.farge }}
    >
      <div className={styles.topp}>
        {emne.ikonSrc
          ? <img className={styles.ikonBilde} src={import.meta.env.BASE_URL + emne.ikonSrc} alt={emne.tittel} />
          : <span className={styles.ikon} aria-hidden="true">{emne.ikon}</span>
        }
        <h2 className={styles.tittel}>{emne.tittel}</h2>
      </div>
      <p className={styles.beskrivelse}>{emne.beskrivelse}</p>
      <ul className={styles.kapitler}>
        {emne.kapitler.map((kap) => (
          <li key={kap}>{kap}</li>
        ))}
      </ul>
      <button className={styles.knapp}>Start emnet →</button>
    </article>
  );
}
