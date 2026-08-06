import styles from './Sammendrag.module.css';
import Figur from './Figurer';

export default function Sammendrag({ avsnitt }) {
  return (
    <div className={styles.wrapper}>
      {avsnitt.map((a, i) => (
        <div key={i} className={styles.avsnitt}>
          <h2 className={styles.tittel}>{a.tittel}</h2>
          {Array.isArray(a.tekst)
            ? a.tekst.map((avs, ai) =>
                typeof avs === 'string'
                  ? <p key={ai} className={styles.tekst}>{avs}</p>
                  : avs.liste
                    ? <ul key={ai} className={styles.liste}>
                        {avs.liste.map((punkt, pi) => (
                          <li key={pi} className={styles.listePunkt}>{punkt}</li>
                        ))}
                      </ul>
                    : avs.bilder
                    ? <div key={ai} className={styles.bilderGrid} style={avs.bilderBredd ? { maxWidth: avs.bilderBredd } : undefined}>
                        {avs.bilder.map((b, bi) => (
                          <img key={bi} src={import.meta.env.BASE_URL + b} alt={avs.bilderAlt?.[bi] || ''} className={styles.bildeImg} />
                        ))}
                      </div>
                    : <figure key={ai} className={styles.bildeFigure} style={avs.bildeBredd ? { maxWidth: avs.bildeBredd } : undefined}>
                        <img src={import.meta.env.BASE_URL + avs.bilde} alt={avs.bildeAlt || ''} className={styles.bildeImg} />
                        {avs.bildeTekst && <figcaption className={styles.bildeTekst}>{avs.bildeTekst}</figcaption>}
                        {avs.bildeKredit && <p className={styles.bildeKredit}>{avs.bildeKredit}</p>}
                      </figure>
              )
            : <p className={styles.tekst}>{a.tekst}</p>}
          {a.tabell && (
            <div className={styles.tabell}>
              {a.tabell.map((kol, k) => (
                <div key={k} className={styles.tabellKol}>
                  <h3 className={styles.tabellTittel}>{kol.tittel}</h3>
                  <ul className={styles.tabellListe}>
                    {kol.rader.map((rad, r) => <li key={r}>{rad}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          )}
          {a.figur && (
            <div className={styles.figur}>
              <Figur navn={a.figur} />
            </div>
          )}
          {a.bilde && (
            <figure className={styles.bildeFigure} style={a.bildeBredd ? { width: a.bildeBredd, maxWidth: '100%' } : undefined}>
              <img
                src={import.meta.env.BASE_URL + a.bilde}
                alt={a.bildeAlt || a.tittel}
                className={styles.bildeImg}
                style={a.bildeBredd ? { width: '100%' } : undefined}
              />
              {a.bildeTekst && <figcaption className={styles.bildeTekst}>{a.bildeTekst}</figcaption>}
              {a.bildeKredit && <p className={styles.bildeKredit}>{a.bildeKredit}</p>}
            </figure>
          )}
          {a.bilderMedInfo && (
            <div className={styles.bilderMedInfoGrid}>
              {a.bilderMedInfo.map((b, bi) => (
                <figure key={bi} className={styles.bildeFigure}>
                  <img src={import.meta.env.BASE_URL + b.src} alt={b.bildeAlt || ''} className={styles.bildeImg} style={{ width: '100%' }} />
                  {b.bildeTekst && <figcaption className={styles.bildeTekst}>{b.bildeTekst}</figcaption>}
                  {b.bildeKredit && <p className={styles.bildeKredit}>{b.bildeKredit}</p>}
                </figure>
              ))}
            </div>
          )}
          {a.bilder && (
            <div className={styles.bilderGrid} style={a.bilderBredd ? { maxWidth: a.bilderBredd } : undefined}>
              {a.bilder.map((b, bi) => (
                <img
                  key={bi}
                  src={import.meta.env.BASE_URL + b}
                  alt={`${a.tittel} – bilde ${bi + 1}`}
                  className={styles.bildeImg}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
