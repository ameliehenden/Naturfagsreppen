import styles from './Om.module.css';

export default function Om() {
  return (
    <div className={styles.om}>
      <h1 className={styles.tittel}>Om læreverket</h1>

      <div className={styles.innhold}>
        <div className={styles.bildeFelt}>
          <img
            className={styles.bilde}
            src={import.meta.env.BASE_URL + 'amelie.jpg'}
            alt="Amelie, lektor ved Dirdal Skule"
          />
        </div>

        <div className={styles.tekst}>
          <p>
            Dette læreverket er utviklet av Amelie Henden, lektor ved Dirdal Skule, med
            over ti års erfaring fra naturfagsundervisning på ungdomsskolen. Med
            en faglig bakgrunn innen klima og geofysikk har jeg laget en digital
            ressurs tilpasset det elevene faktisk trenger.
          </p>
          <p>
            Nettsiden er et godt verktøy både til å repetere stoff før eksamen og
            til å forberede seg til kapittelprøver – med faglig innhold og oppgaver
            knyttet til hele pensum i naturfag på ungdomsskolen.
          </p>
        </div>
      </div>

      <div className={styles.logoer}>
        <img
          className={styles.dirdalLogo}
          src={import.meta.env.BASE_URL + 'dirdal-skule-logo.png'}
          alt="Dirdal skule"
        />
        <div className={styles.naturfagsreppenLogo}>
          <img
            className={styles.snofnugg}
            src={import.meta.env.BASE_URL + 'naturfagsreppen-logo.svg'}
            alt=""
          />
          <span>Naturfagsreppen</span>
        </div>
      </div>
    </div>
  );
}
