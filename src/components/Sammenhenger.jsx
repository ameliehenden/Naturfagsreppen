import { Link } from 'react-router-dom';
import styles from './Sammenhenger.module.css';

export default function Sammenhenger({ data, emneId }) {
  const { senter, bokser } = data;
  const R = 38; // avstand fra sentrum (prosent) – større = mer luft mellom boksene
  // Egne vinkler for 8 bokser: de skrå boksene flyttes nærmere side-boksene,
  // så det blir jevn avstand (brede bokser trenger mer luft mot topp/bunn).
  const FASTE_VINKLER = [-90, -35, 0, 35, 90, 145, 180, 215];
  const punkter = bokser.map((b, i) => {
    const grader =
      bokser.length === 8 ? FASTE_VINKLER[i] : -90 + i * (360 / bokser.length);
    const vinkel = (grader * Math.PI) / 180;
    return {
      ...b,
      x: 50 + R * Math.cos(vinkel),
      y: 50 + R * Math.sin(vinkel),
    };
  });

  return (
    <div className={styles.wrapper}>
      <p className={styles.intro}>
        Slik henger {senter} sammen med andre temaer i naturfag. Trykk på en boks
        for å lese mer.
      </p>
      <div className={styles.stage}>
        <svg
          className={styles.lines}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {punkter.map((p, i) => (
            <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} stroke={p.farge} strokeWidth="0.6" />
          ))}
        </svg>

        <div className={styles.senter}>{senter}</div>

        {punkter.map((p, i) => (
          <Link
            key={i}
            to={`/sammenheng/${emneId}/${p.slug}`}
            className={styles.boks}
            style={{ left: `${p.x}%`, top: `${p.y}%`, '--boks-farge': p.farge }}
          >
            {p.navn}
          </Link>
        ))}
      </div>
    </div>
  );
}
