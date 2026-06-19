import { useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { emner } from '../data/emner';
import { flashcards } from '../data/flashcards';
import { oppgaver } from '../data/oppgaver';
import { quiz } from '../data/quiz';
import { forsok } from '../data/forsok';
import { sammenhenger } from '../data/sammenhenger';
import { sammendrag } from '../data/sammendrag';
import Flashcards from '../components/Flashcards';
import SkriftligeOppgaver from '../components/SkriftligeOppgaver';
import Quiz from '../components/Quiz';
import PraktiskeForsok from '../components/PraktiskeForsok';
import Sammenhenger from '../components/Sammenhenger';
import Sammendrag from '../components/Sammendrag';
import styles from './EmneSide.module.css';

// Opplegg-typene vises som en ikonrad øverst på hvert emne (samme på alle).
const OPPLEGG = [
  { id: 'sammendrag', navn: 'Sammendrag', ikon: 'icons/sammendrag.svg' },
  { id: 'flashcards', navn: 'Fagbegreper', ikon: 'icons/flashcards.svg' },
  { id: 'quiz', navn: 'Quiz', ikon: 'icons/quiz.svg' },
  { id: 'sammenhenger', navn: 'Sammenhenger', ikon: 'icons/sammenhenger.svg' },
  { id: 'oppgaver', navn: 'Skriftlige oppgaver', ikon: 'icons/oppgaver.svg' },
  { id: 'forsok', navn: 'Praktiske forsøk', ikon: 'icons/forsok.svg' },
];

export default function EmneSide() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const emne = emner.find((e) => e.id === id);
  const kortStokk = flashcards[id];
  const oppgaveListe = oppgaver[id];
  const quizListe = quiz[id];
  const forsokListe = forsok[id];
  const sammenhengerData = sammenhenger[id];
  const sammendragData = sammendrag[id];
  const [valgt, setValgt] = useState(searchParams.get('tab') || 'sammendrag');

  function velgOpplegg(o) {
    setValgt(o.id);
    // Anonym teller: registrer at noen åpnet dette opplegget
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({
        path: `${id}/${o.id}`,
        title: `${emne.tittel} – ${o.navn}`,
        event: true,
      });
    }
  }

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
    <article style={{
      '--emne-farge': emne.farge,
      '--emne-tekst': emne.tekstMørk ? '#1a1a2e' : '#fff',
      '--emne-tekst-dim': emne.tekstMørk ? 'rgba(26,26,46,0.85)' : 'rgba(255,255,255,0.9)',
    }}>
      <div className={styles.banner}>
        <div className={styles.bannerInner}>
          <Link to={emne.parent ? `/emne/${emne.parent}` : '/'} className={styles.tilbake}>
            ← Tilbake til {emne.parent ? emner.find((e) => e.id === emne.parent)?.tittel : 'forsiden'}
          </Link>
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
              onClick={() => velgOpplegg(o)}
            >
              <img className={styles.oppleggIkon} src={import.meta.env.BASE_URL + o.ikon} alt="" />
              <span>{o.navn}</span>
            </button>
          ))}
        </div>

        <div className={styles.oppleggInnhold}>
          {valgt === 'sammendrag' && sammendragData ? (
            <Sammendrag avsnitt={sammendragData} />
          ) : valgt === 'flashcards' && kortStokk ? (
            <Flashcards kort={kortStokk} />
          ) : valgt === 'quiz' && quizListe ? (
            <Quiz sporsmaal={quizListe} />
          ) : valgt === 'oppgaver' && oppgaveListe ? (
            <SkriftligeOppgaver oppgaver={oppgaveListe} />
          ) : valgt === 'forsok' && forsokListe ? (
            <PraktiskeForsok forsok={forsokListe} />
          ) : valgt === 'sammenhenger' && sammenhengerData ? (
            <Sammenhenger data={sammenhengerData} emneId={id} />
          ) : (
            <p className={styles.kommer}>Dette opplegget kommer snart.</p>
          )}
        </div>
      </div>
    </article>
  );
}
