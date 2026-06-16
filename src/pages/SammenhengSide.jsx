import { useParams, Link } from 'react-router-dom';
import { emner } from '../data/emner';
import { sammenhenger } from '../data/sammenhenger';
import styles from './SammenhengSide.module.css';

export default function SammenhengSide() {
  const { id, slug } = useParams();
  const emne = emner.find((e) => e.id === id);
  const data = sammenhenger[id];
  const boks = data?.bokser.find((b) => b.slug === slug);

  if (!emne || !boks) {
    return (
      <div className={styles.innhold}>
        <Link to="/" className={styles.tilbake}>← Tilbake til forsiden</Link>
        <h1 className={styles.tittel}>Fant ikke siden</h1>
        <p>Denne sammenhengen finnes ikke. Gå tilbake og prøv igjen.</p>
      </div>
    );
  }

  return (
    <article style={{ '--boks-farge': boks.farge, '--emne-farge': emne.farge }}>
      <div className={styles.banner}>
        <div className={styles.bannerInner}>
          <Link to={`/emne/${id}`} className={styles.tilbake}>
            ← Tilbake til {emne.tittel}
          </Link>
          <h1 className={styles.tittel}>
            {data.senter} <span className={styles.kobling}>×</span> {boks.navn}
          </h1>
        </div>
      </div>

      <div className={styles.innhold}>
        {boks.tekst ? (
          <p className={styles.tekst}>{boks.tekst}</p>
        ) : (
          <p className={styles.kommer}>Innhold kommer snart.</p>
        )}
      </div>
    </article>
  );
}
