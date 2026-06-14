import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  function scrollTilOm(e) {
    e.preventDefault();
    document.getElementById('om')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img
            className={styles.logoBilde}
            src={import.meta.env.BASE_URL + 'dirdal-skule-logo.svg'}
            alt="Dirdal skule"
          />
          <span>Naturfagsreppen</span>
        </Link>
        <nav className={styles.nav} aria-label="Hovednavigasjon">
          <Link to="/">Emner</Link>
          <a href="#om" onClick={scrollTilOm}>Om læreverket</a>
        </nav>
      </div>
    </header>
  );
}
