import Header from './components/Header';
import Hero from './components/Hero';
import EmnekortGrid from './components/EmnekortGrid';
import Feedback from './components/Feedback';
import styles from './App.module.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className={styles.innhold}>
          <h2 id="emner" className={styles.seksjonstittel}>Emneoversikt</h2>
          <EmnekortGrid />
        </div>
        <footer className={styles.footer} id="om">
          <p>
            <strong>Naturfag 10</strong> – et digitalt læreverk for 10. trinn, basert på Kunnskapsløftet (LK20).
          </p>
        </footer>
      </main>
      <Feedback />
    </>
  );
}
