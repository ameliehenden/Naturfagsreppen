import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img
            className={styles.logoBilde}
            src={import.meta.env.BASE_URL + 'naturfagsreppen-logo.svg'}
            alt=""
          />
          <span>Naturfagsreppen</span>
        </Link>
        <nav className={styles.nav} aria-label="Hovednavigasjon">
          <Link to="/">Emner</Link>
          <Link to="/om">Om læreverket</Link>
        </nav>
      </div>
    </header>
  );
}
