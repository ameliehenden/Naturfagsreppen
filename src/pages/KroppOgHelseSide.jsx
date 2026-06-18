import { Link } from 'react-router-dom';
import { emner } from '../data/emner';
import styles from './JordaSide.module.css';

const KAPITLER = [
  { id: 'nerve-og-hormonsystemet', navn: 'Nerve- og hormonsystemet', farge: '#e74c3c', ikon: '🧠' },
  { id: 'seksualitet', navn: 'Seksualitet', farge: '#e91e8c', ikon: '🌸' },
  { id: 'immunsystemet', navn: 'Immunsystemet', farge: '#f1c40f', ikon: '🛡️' },
];

export default function KroppOgHelseSide() {
  const emne = emner.find((e) => e.id === 'kropp-og-helse');

  return (
    <div>
      <div className={styles.banner} style={{ '--emne-farge': emne.farge }}>
        <div className={styles.bannerInner}>
          <span className={styles.ikon} aria-hidden="true">{emne.ikon}</span>
          <h1 className={styles.tittel}>{emne.tittel}</h1>
        </div>
      </div>

      <div className={styles.innhold}>
        <p className={styles.ingress}>Velg et kapittel for å utforske.</p>
        <div className={styles.grid}>
          {KAPITLER.map((k) => (
            <Link
              key={k.id}
              to={`/emne/${k.id}`}
              className={styles.kort}
              style={{ '--kap-farge': k.farge }}
            >
              <span className={styles.kortIkon} aria-hidden="true">{k.ikon}</span>
              <span className={styles.kortNavn}>{k.navn}</span>
              <span className={styles.pil} aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
