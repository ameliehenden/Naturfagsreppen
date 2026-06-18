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
          src={import.meta.env.BASE_URL + 'dirdal-skule-logo.png'}
          alt="Dirdal skule"
        />
        <div className={styles.tekst}>
          <h1 className={styles.tittel}>
            Naturfag for <span className={styles.uthev}>ungdomsskolen</span>
          </h1>

        </div>
      </div>
    </section>
  );
}
