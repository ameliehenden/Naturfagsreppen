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
            Dette læreverket er utviklet av Amelie Henden, lektor ved Dirdal Skule. Med
            over ti års erfaring fra naturfagsundervisning på ungdomsskolen, og med en faglig bakgrunn innen klima og geofysikk er denne nettsiden tilpasset det elevene trenger.
          </p>
          <p>
            Naturfagsreppen er et godt repeteringsverktøy før både kapittelprøver og muntlig
            eksamen. Den har et faglig innhold knyttet til hele pensum i naturfag,
            presentert på en oversiktlig og ryddig måte. Elevene kan repetere faguttrykk
            eller opparbeide seg en god forståelse for sammenheng mellom de ulike emnene.
          </p>
          <p>
            Har du spørsmål eller tilbakemeldinger, er du velkommen til å ta kontakt med
            meg på e-post: <a href="mailto:amelie-he@gjesdalskolen.com">amelie-he@gjesdalskolen.com</a>.
            Du kan også bruke tilbakemeldingsknappen på siden, men den er anonym. Ønsker
            du svar, må du derfor huske å legge igjen e-postadressen din i tilbakemeldingen.
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
