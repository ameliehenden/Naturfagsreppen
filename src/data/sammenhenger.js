// "Sammenhenger" – tankekart/sol per emne. Fargen på hver boks gjenspeiler
// emnet begrepet hører til. Rekkefølgen bestemmer plasseringen rundt sola
// (med klokka fra toppen).
//
// Hver boks er en lenke til en egen side. Fyll inn forklaringen i `tekst`
// når du er klar – står den tom, viser siden "Innhold kommer snart".
// Ikke endre `slug` (det er adressen til siden).
//
// Emnefarger: Jorda #27ae60 · Kropp og helse #e74c3c · Teknologi #2980b9
//             Kjemi #8e44ad · Klima og bærekraft #16a085 · Energi #f39c12
export const sammenhenger = {
  'klima-og-baerekraft': {
    senter: `Klima og bærekraft`,
    bokser: [
      { navn: `Immunsystemet`, slug: `immunsystemet`, farge: `#e74c3c`, tekst: `` },
      { navn: `Forbrenningsreaksjoner`, slug: `forbrenningsreaksjoner`, farge: `#8e44ad`, tekst: `` },
      { navn: `Kjemi`, slug: `kjemi`, farge: `#8e44ad`, tekst: `` },
      { navn: `Økologi`, slug: `okologi`, farge: `#27ae60`, tekst: `` },
      { navn: `Livets utvikling`, slug: `livets-utvikling`, farge: `#27ae60`, tekst: `` },
      { navn: `Teknologi`, slug: `teknologi`, farge: `#2980b9`, tekst: `` },
      { navn: `Energi`, slug: `energi`, farge: `#f39c12`, tekst: `` },
      { navn: `Karbonkretsløpet`, slug: `karbonkretslopet`, farge: `#8e44ad`, tekst: `` },
    ],
  },
};
