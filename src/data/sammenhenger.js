// "Sammenhenger" – tankekart/sol per emne. Fargen på hver boks gjenspeiler
// emnet begrepet hører til. Rekkefølgen bestemmer plasseringen rundt sola
// (med klokka fra toppen). Endre gjerne navn, farger og rekkefølge.
//
// Emnefarger: Jorda #27ae60 · Kropp og helse #e74c3c · Teknologi #2980b9
//             Kjemi #8e44ad · Klima og bærekraft #16a085 · Energi #f39c12
export const sammenhenger = {
  'klima-og-baerekraft': {
    senter: `Klima og bærekraft`,
    bokser: [
      { navn: `Immunsystemet`, farge: `#e74c3c` }, // Kropp og helse
      { navn: `Forbrenningsreaksjoner`, farge: `#8e44ad` }, // Kjemi
      { navn: `Kjemi`, farge: `#8e44ad` }, // Kjemi
      { navn: `Økologi`, farge: `#27ae60` }, // natur/biologi
      { navn: `Livets utvikling`, farge: `#27ae60` }, // natur/biologi
      { navn: `Teknologi`, farge: `#2980b9` }, // Teknologi
      { navn: `Energi`, farge: `#f39c12` }, // Energi
      { navn: `Karbonkretsløpet`, farge: `#8e44ad` }, // Kjemi
    ],
  },
};
