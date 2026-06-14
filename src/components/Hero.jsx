import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.tittel}>
          Naturfag for <span className={styles.uthev}>10. trinn</span>
        </h1>
        <p className={styles.ingress}>
          Utforsk fagene som forklarer verden rundt deg – fra celler og atomer
          til stjerner og klimaendringer.
        </p>
        <a href="#emner" className={styles.knapp}>Se alle emner ↓</a>
      </div>
    </section>
  );
}
