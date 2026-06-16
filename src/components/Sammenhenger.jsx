import styles from './Sammenhenger.module.css';

export default function Sammenhenger({ data }) {
  const { senter, bokser } = data;
  const R = 36; // avstand fra sentrum (prosent)
  const punkter = bokser.map((b, i) => {
    const vinkel = ((-90 + i * (360 / bokser.length)) * Math.PI) / 180;
    return {
      ...b,
      x: 50 + R * Math.cos(vinkel),
      y: 50 + R * Math.sin(vinkel),
    };
  });

  return (
    <div className={styles.wrapper}>
      <p className={styles.intro}>
        Slik henger {senter} sammen med andre temaer i naturfag:
      </p>
      <div className={styles.stage}>
        <svg
          className={styles.lines}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {punkter.map((p, i) => (
            <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} stroke={p.farge} strokeWidth="0.6" />
          ))}
        </svg>

        <div className={styles.senter}>{senter}</div>

        {punkter.map((p, i) => (
          <div
            key={i}
            className={styles.boks}
            style={{ left: `${p.x}%`, top: `${p.y}%`, '--boks-farge': p.farge }}
          >
            {p.navn}
          </div>
        ))}
      </div>
    </div>
  );
}
