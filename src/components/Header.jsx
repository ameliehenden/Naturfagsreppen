import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span aria-hidden="true">🔬</span>
          <span>Naturfag 10</span>
        </div>
        <nav className={styles.nav} aria-label="Hovednavigasjon">
          <a href="#emner">Emner</a>
          <a href="#om">Om læreverket</a>
        </nav>
      </div>
    </header>
  );
}
