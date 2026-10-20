import Hero from '../components/Hero';
import EmnekortGrid from '../components/EmnekortGrid';
import Passordboks from '../components/Passordboks';
import styles from '../App.module.css';

export default function Hjem() {
  return (
    <>
      <Hero />
      <div className={styles.innhold}>
        <h2 id="emner" className={styles.seksjonstittel}>Emneoversikt</h2>
        <Passordboks />
        <EmnekortGrid />
      </div>
    </>
  );
}
