import styles from './PraktiskeForsok.module.css';

export default function PraktiskeForsok({ forsok }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.intro}>
        Disse forsøkene skal vi gjennomføre til høsten. Beskrivelser, resultater
        og bilder legges inn etter hvert som vi gjør dem.
      </p>
      <div className={styles.liste}>
        {forsok.map((f, i) => (
          <div key={i} className={styles.kort}>
            <span className={styles.nr}>{i + 1}</span>
            <div>
              <h3 className={styles.tittel}>{f.tittel}</h3>
              <p className={styles.status}>Kommer til høsten</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
