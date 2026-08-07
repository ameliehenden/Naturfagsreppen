// Enkle, undervisningsvennlige figurer tegnet som SVG.
// Hvert avsnitt i sammendrag.js kan vise en figur ved å sette feltet
// figur: 'navn'. Navnet må finnes som nøkkel i FIGURER under.

function JordasLag() {
  const rader = [
    { farge: '#8B5A2B', navn: 'Jordskorpa', tekst: 'tynt, fast ytterlag' },
    { farge: '#E67E22', navn: 'Mantelen', tekst: 'flytende magma' },
    { farge: '#E74C3C', navn: 'Ytre kjerne', tekst: 'litt mykere' },
    { farge: '#F1C40F', navn: 'Indre kjerne', tekst: 'fast og svært varm' },
  ];
  return (
    <svg viewBox="0 0 440 290" role="img" aria-label="Tverrsnitt av jorda med lagene">
      <circle cx="135" cy="145" r="118" fill="#8B5A2B" />
      <circle cx="135" cy="145" r="110" fill="#E67E22" />
      <circle cx="135" cy="145" r="62" fill="#E74C3C" />
      <circle cx="135" cy="145" r="28" fill="#F1C40F" />
      {rader.map((r, i) => {
        const y = 58 + i * 50;
        return (
          <g key={i}>
            <rect x="290" y={y} width="20" height="20" rx="4" fill={r.farge} />
            <text x="320" y={y + 9} fontSize="15" fontWeight="700" fill="#1a1a1a">{r.navn}</text>
            <text x="320" y={y + 27} fontSize="12.5" fill="#555">{r.tekst}</text>
          </g>
        );
      })}
    </svg>
  );
}

function Kontinentaldrift() {
  return (
    <svg viewBox="0 0 440 250" role="img" aria-label="To kontinentalplater som glir fra hverandre med magma som stiger opp">
      <rect x="0" y="0" width="440" height="250" fill="#dceff6" />
      <rect x="0" y="120" width="440" height="130" fill="#9fd6e6" />
      {/* venstre plate */}
      <polygon points="0,120 190,120 165,185 0,185" fill="#6b4226" />
      <polygon points="0,120 190,120 190,135 0,135" fill="#7d5230" />
      {/* høyre plate */}
      <polygon points="250,120 440,120 440,185 275,185" fill="#6b4226" />
      <polygon points="250,120 440,120 440,135 250,135" fill="#7d5230" />
      {/* magma som stiger */}
      <polygon points="220,250 200,150 220,118 240,150" fill="#E74C3C" />
      <polygon points="220,140 210,118 230,118" fill="#F1C40F" />
      {/* piler */}
      <g stroke="#1a1a1a" strokeWidth="3" fill="none">
        <line x1="120" y1="95" x2="40" y2="95" />
        <line x1="320" y1="95" x2="400" y2="95" />
      </g>
      <polygon points="40,95 52,89 52,101" fill="#1a1a1a" />
      <polygon points="400,95 388,89 388,101" fill="#1a1a1a" />
      <text x="220" y="240" fontSize="13" fontWeight="700" fill="#fff" textAnchor="middle">magma stiger</text>
      <text x="80" y="80" fontSize="12.5" fill="#1a1a1a" textAnchor="middle">platene glir fra hverandre</text>
    </svg>
  );
}

function Celle() {
  return (
    <svg viewBox="0 0 460 320" role="img" aria-label="Forenklet tegning av en celle med navngitte deler">
      {/* cellemembran og cytoplasma */}
      <ellipse cx="185" cy="160" rx="150" ry="120" fill="#fbe4ef" stroke="#c2698f" strokeWidth="4" />
      {/* cellekjerne */}
      <circle cx="160" cy="150" r="50" fill="#a569bd" />
      <path d="M140 150 q10 -16 20 0 q10 16 20 0" stroke="#fff" strokeWidth="3" fill="none" />
      {/* mitokondrie */}
      <ellipse cx="250" cy="215" rx="42" ry="22" fill="#e67e22" transform="rotate(-20 250 215)" />
      <path d="M225 218 q12 -10 22 0 q12 10 22 0" stroke="#fff" strokeWidth="2.5" fill="none" transform="rotate(-20 250 215)" />
      {/* ribosomer */}
      <circle cx="120" cy="225" r="5" fill="#7d3c98" />
      <circle cx="140" cy="240" r="5" fill="#7d3c98" />
      <circle cx="100" cy="205" r="5" fill="#7d3c98" />
      <circle cx="230" cy="100" r="5" fill="#7d3c98" />
      <circle cx="210" cy="115" r="5" fill="#7d3c98" />
      {/* ledelinjer og etiketter */}
      <g stroke="#555" strokeWidth="1.5">
        <line x1="160" y1="150" x2="160" y2="55" />
        <line x1="250" y1="215" x2="350" y2="250" />
        <line x1="335" y1="160" x2="380" y2="160" />
        <line x1="230" y1="100" x2="350" y2="90" />
      </g>
      <text x="160" y="48" fontSize="13.5" fontWeight="700" fill="#1a1a1a" textAnchor="middle">Cellekjerne (DNA)</text>
      <text x="355" y="255" fontSize="13.5" fontWeight="700" fill="#1a1a1a">Mitokondrie</text>
      <text x="385" y="155" fontSize="13.5" fontWeight="700" fill="#1a1a1a">Cellemembran</text>
      <text x="385" y="172" fontSize="11.5" fill="#555">og cytoplasma</text>
      <text x="355" y="86" fontSize="13.5" fontWeight="700" fill="#1a1a1a">Ribosom</text>
    </svg>
  );
}

function FotosynteseCelleanding() {
  return (
    <svg viewBox="0 0 470 300" role="img" aria-label="Kretsløpet mellom fotosyntese og celleånding">
      {/* sol */}
      <circle cx="55" cy="45" r="26" fill="#F4D03F" />
      <g stroke="#F4D03F" strokeWidth="3">
        <line x1="55" y1="8" x2="55" y2="0" />
        <line x1="92" y1="45" x2="100" y2="45" />
        <line x1="82" y1="18" x2="88" y2="12" />
        <line x1="82" y1="72" x2="88" y2="78" />
      </g>
      {/* fotosyntese-boks */}
      <rect x="20" y="95" width="180" height="90" rx="14" fill="#d5f5e3" stroke="#27ae60" strokeWidth="3" />
      <text x="110" y="125" fontSize="15" fontWeight="700" fill="#196f3d" textAnchor="middle">Fotosyntese</text>
      <text x="110" y="146" fontSize="11.5" fill="#196f3d" textAnchor="middle">i kloroplast (planter)</text>
      <text x="110" y="168" fontSize="11.5" fill="#196f3d" textAnchor="middle">lager energi fra sollys</text>
      {/* celleånding-boks */}
      <rect x="270" y="95" width="180" height="90" rx="14" fill="#fdebd0" stroke="#e67e22" strokeWidth="3" />
      <text x="360" y="125" fontSize="15" fontWeight="700" fill="#9c4a06" textAnchor="middle">Celleånding</text>
      <text x="360" y="146" fontSize="11.5" fill="#9c4a06" textAnchor="middle">i mitokondrier</text>
      <text x="360" y="168" fontSize="11.5" fill="#9c4a06" textAnchor="middle">(planter og dyr)</text>
      {/* sol-pil inn */}
      <line x1="72" y1="62" x2="95" y2="92" stroke="#F4D03F" strokeWidth="3" />
      <polygon points="95,92 84,88 90,80" fill="#F4D03F" />
      {/* øvre pil: glukose + oksygen til høyre */}
      <path d="M200 120 q35 -22 70 0" stroke="#27ae60" strokeWidth="3" fill="none" />
      <polygon points="270,120 258,114 260,126" fill="#27ae60" />
      <text x="235" y="92" fontSize="12.5" fontWeight="700" fill="#196f3d" textAnchor="middle">glukose + oksygen</text>
      {/* nedre pil: CO2 + vann til venstre */}
      <path d="M270 160 q-35 22 -70 0" stroke="#e67e22" strokeWidth="3" fill="none" />
      <polygon points="200,160 212,154 210,166" fill="#e67e22" />
      <text x="235" y="208" fontSize="12.5" fontWeight="700" fill="#9c4a06" textAnchor="middle">karbondioksid + vann</text>
      {/* energi ut */}
      <line x1="360" y1="185" x2="360" y2="225" stroke="#c0392b" strokeWidth="3" />
      <polygon points="360,225 354,213 366,213" fill="#c0392b" />
      <text x="360" y="245" fontSize="13" fontWeight="700" fill="#c0392b" textAnchor="middle">energi til kroppen</text>
    </svg>
  );
}

const FIGURER = {
  'jordas-lag': JordasLag,
  'kontinentaldrift': Kontinentaldrift,
  'celle': Celle,
  'fotosyntese-celleanding': FotosynteseCelleanding,
};

export default function Figur({ navn }) {
  const Komponent = FIGURER[navn];
  if (!Komponent) return null;
  return <Komponent />;
}
