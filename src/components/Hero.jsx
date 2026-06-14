import styles from './Hero.module.css';

export default function Hero() {
  function scrollTilEmner(e) {
    e.preventDefault();
    document.getElementById('emner')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <img
          className={styles.logo}
          src={import.meta.env.BASE_URL + 'dirdal-skule-logo.svg'}
          alt="Dirdal skule"
        />
        <h1 className={styles.tittel}>
          Naturfag for <span className={styles.uthev}>10. trinn</span>
        </h1>
        <p className={styles.ingress}>
          Utforsk fagene som forklarer verden rundt deg – fra celler og atomer
          til stjerner og klimaendringer.
        </p>
        <a href="#emner" className={styles.knapp} onClick={scrollTilEmner}>Se alle emner ↓</a>
      </div>
    </section>
  );
}
