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
          Naturfagsrepetisjon for <span className={styles.uthev}>ungdomsskolen</span>
        </h1>
        <a href="#emner" className={styles.knapp} onClick={scrollTilEmner}>Se alle emner ↓</a>
      </div>
    </section>
  );
}
