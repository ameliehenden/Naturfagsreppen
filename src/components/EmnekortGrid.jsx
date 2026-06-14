import Emnekort from './Emnekort';
import { emner } from '../data/emner';
import styles from './EmnekortGrid.module.css';

export default function EmnekortGrid() {
  return (
    <section className={styles.grid} aria-label="Emneoversikt">
      {emner.map((emne) => (
        <Emnekort key={emne.id} emne={emne} />
      ))}
    </section>
  );
}
