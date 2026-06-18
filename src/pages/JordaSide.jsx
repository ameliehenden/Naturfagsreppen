import { Link } from 'react-router-dom';
import { emner } from '../data/emner';
import styles from './JordaSide.module.css';

const KAPITLER = [
  { id: 'geologi', navn: 'Geologi', farge: '#16a085' },
  { id: 'okologi', navn: 'Økologi', farge: '#27ae60' },
  { id: 'celler-og-livets-utvikling', navn: 'Celler og livets utvikling', farge: '#8db600' },
];

export default function JordaSide() {
  const emne = emner.find((e) => e.id === 'jorda');

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
              <span className={styles.kortNavn}>{k.navn}</span>
              <span className={styles.pil} aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
