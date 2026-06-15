import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { emner } from '../data/emner';
import { flashcards } from '../data/flashcards';
import { oppgaver } from '../data/oppgaver';
import Flashcards from '../components/Flashcards';
import SkriftligeOppgaver from '../components/SkriftligeOppgaver';
import styles from './EmneSide.module.css';

// Opplegg-typene vises som en ikonrad øverst på hvert emne (samme på alle).
const OPPLEGG = [
  { id: 'flashcards', navn: 'Flashcards', ikon: 'icons/flashcards.svg' },
  { id: 'quiz', navn: 'Quiz', ikon: 'icons/quiz.svg' },
  { id: 'forsok', navn: 'Praktiske forsøk', ikon: 'icons/forsok.svg' },
  { id: 'oppgaver', navn: 'Skriftlige oppgaver', ikon: 'icons/oppgaver.svg' },
];

export default function EmneSide() {
  const { id } = useParams();
  const emne = emner.find((e) => e.id === id);
  const kortStokk = flashcards[id];
  const oppgaveListe = oppgaver[id];
  const [valgt, setValgt] = useState('flashcards');

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
        </div>
      </div>

      <div className={styles.innhold}>
        <div className={styles.oppleggRad}>
          {OPPLEGG.map((o) => (
            <button
              key={o.id}
              type="button"
              className={`${styles.oppleggKnapp} ${valgt === o.id ? styles.aktiv : ''}`}
              onClick={() => setValgt(o.id)}
            >
              <img className={styles.oppleggIkon} src={import.meta.env.BASE_URL + o.ikon} alt="" />
              <span>{o.navn}</span>
            </button>
          ))}
        </div>

        <div className={styles.oppleggInnhold}>
          {valgt === 'flashcards' && kortStokk ? (
            <Flashcards kort={kortStokk} />
          ) : valgt === 'oppgaver' && oppgaveListe ? (
            <SkriftligeOppgaver oppgaver={oppgaveListe} />
          ) : (
            <p className={styles.kommer}>Dette opplegget kommer snart.</p>
          )}
        </div>
      </div>
    </article>
  );
}
