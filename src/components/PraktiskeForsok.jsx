import styles from './PraktiskeForsok.module.css';

export default function PraktiskeForsok({ forsok }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.liste}>
        {forsok.map((f, i) => {
          const harInnhold = f.innledning || f.utstyr || f.slik || f.fargeord || f.sporsmal || f.forklaring;
          return (
            <div key={i} className={`${styles.kort} ${harInnhold ? styles.kortApen : ''}`}>
              <span className={styles.nr}>{i + 1}</span>
              <div className={styles.kortInnhold}>
                <h3 className={styles.tittel}>{f.tittel}</h3>

                {harInnhold ? (
                  <>
                    {f.innledning && <p className={styles.tekst}>{f.innledning}</p>}

                    {f.bilde && (
                      <img src={f.bilde} alt={f.bildeAlt || f.tittel} className={styles.bilde} />
                    )}

                    {f.utstyr && (
                      <>
                        <h4 className={styles.deltittel}>Du trenger</h4>
                        <ul className={styles.sporsmal}>
                          {f.utstyr.map((u, j) => <li key={j}>{u}</li>)}
                        </ul>
                      </>
                    )}

                    {f.fargeord && (
                      <p className={styles.fargeord} aria-hidden="true">
                        {f.fargeord.map((o, j) => (
                          <span key={j} style={{ color: o.farge }}>{o.ord}</span>
                        ))}
                      </p>
                    )}

                    {f.slik && (
                      <>
                        <h4 className={styles.deltittel}>Slik gjør du</h4>
                        <ol className={styles.steg}>
                          {f.slik.map((s, j) => <li key={j}>{s}</li>)}
                        </ol>
                      </>
                    )}

                    {f.sporsmal && (
                      <>
                        <h4 className={styles.deltittel}>Tenk over</h4>
                        <ul className={styles.sporsmal}>
                          {f.sporsmal.map((s, j) => <li key={j}>{s}</li>)}
                        </ul>
                      </>
                    )}

                    {f.forklaring && (
                      <>
                        <h4 className={styles.deltittel}>Hvorfor skjer dette?</h4>
                        <p className={styles.tekst}>{f.forklaring}</p>
                      </>
                    )}
                  </>
                ) : (
                  <p className={styles.status}>Kommer senere</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
