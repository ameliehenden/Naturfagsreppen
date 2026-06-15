import { useParams, Link } from 'react-router-dom';
import { emner } from '../data/emner';
import { flashcards } from '../data/flashcards';
import Flashcards from '../components/Flashcards';
import styles from './EmneSide.module.css';

export default function EmneSide() {
  const { id } = useParams();
  const emne = emner.find((e) => e.id === id);
  const kortStokk = flashcards[id];

  if (!emne) {
    return (
      <div className={styles.innhold}>
        <Link to="/" className={styles.tilbake}>← Tilbake til forsiden</Link>
        <h1 className={styles.tittel}>Fant ikke emnet</h1>
        <p>Dette emnet finnes ikke. Gå tilbake til forsiden og prøv igjen.</p>
      </div>
    );
  }

  return (
    <article style={{ '--emne-farge': emne.farge }}>
      <div className={styles.banner}>
        <div className={styles.bannerInner}>
          <Link to="/" className={styles.tilbake}>← Tilbake til forsiden</Link>
          <div className={styles.bannerTopp}>
            {emne.ikonSrc
              ? <img className={styles.ikonBilde} src={import.meta.env.BASE_URL + emne.ikonSrc} alt="" />
              : <span className={styles.ikon} aria-hidden="true">{emne.ikon}</span>
            }
            <h1 className={styles.tittel}>{emne.tittel}</h1>
          </div>
          <p className={styles.beskrivelse}>{emne.beskrivelse}</p>
        </div>
      </div>

      {kortStokk && (
        <div className={styles.innhold}>
          <h2 className={styles.seksjonstittel}>
            <img className={styles.oppleggIkon} src={import.meta.env.BASE_URL + 'icons/flashcards.svg'} alt="" />
            Øv på begreper
          </h2>
          <p className={styles.oppleggTekst}>
            Trykk på kortet for å snu det. Trykk igjen for å gå til neste kort.
            Kortene kommer i tilfeldig rekkefølge, og noen ganger ser du
            forklaringen først.
          </p>
          <Flashcards kort={kortStokk} />
        </div>
      )}

      <div className={styles.innhold}>
        <h2 className={styles.seksjonstittel}>Kapitler</h2>
        <div className={styles.kapitler}>
          {emne.kapitler.map((kap) => (
            <section key={kap} className={styles.kapittel}>
              <h3 className={styles.kapittelTittel}>{kap}</h3>
              <p className={styles.plassholder}>Innhold kommer snart.</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
