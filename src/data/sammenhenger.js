// "Sammenhenger" – tankekart/sol per emne.
// innhold: blanding av { type: 'tekst', verdi: '...' } og { type: 'bilde', src: '...' }
// i den rekkefølgen de skal vises på siden.
export const sammenhenger = {
  'klima-og-baerekraft': {
    senter: `Klima og bærekraft`,
    kortnavn: `klima`,
    bokser: [
      {
        navn: `Immunsystemet`,
        slug: `immunsystemet`,
        farge: `#e74c3c`,
        innhold: [
          { type: 'tekst', verdi: `Klimaendringer påvirker helsen vår, ikke bare direkte i form av heteslag eller solbrenthet, men varmere klima bidrar til spredning av sykdommer og nye smittestoffer. Parasitter og dyr som sprer smitte, trives over større områder etter hvert som klimaet blir mildere.` },
          { type: 'tekst', verdi: `Et eksempel er mygg. Mygg som ikke har kunnet etablere seg i Europa, vil kunne trives godt her når klimaet blir varmere. Mygg er kjent for å være smittebærere av virus.` },
          { type: 'bilde', src: `sammenhenger/immunsystemet.png` },
        ],
      },
      {
        navn: `Forbrenningsreaksjoner`,
        slug: `forbrenningsreaksjoner`,
        farge: `#8e44ad`,
        innhold: [
          { type: 'tekst', verdi: `Forbrenningsreaksjoner er kjemiske reaksjoner der oksygen inngår i forbrenning av andre stoffer. En forbrenningsreaksjon slipper alltid ut varme, CO₂ og vanndamp. Siden alle forbrenningsreaksjoner slipper ut CO₂, er det disse kjemiske reaksjonene som har skylda for klimaendringene.` },
          { type: 'tekst', verdi: `To viktige forbrenningsreaksjoner er forbrenning av metangass og celleånding. Forbrenning av metangass skjer ved at høy temperatur får metan og oksygen til å reagere og danne vanndamp og karbondioksid. Denne reaksjonen frigir så mye varme at forbrenningen fortsetter så lenge det er oksygen og metan til stede.` },
          { type: 'bilde', src: `sammenhenger/forbrenningsreaksjoner-1.png` },
          { type: 'tekst', verdi: `Vi har også forbrenning i kroppen, uten at vi har noen flamme i oss. Kroppens eget forbrenningsanlegg finner vi i mitokondriene i cellene. Hit fraktes glukose fra maten vi spiser, og oksygenet vi puster inn. Når reaksjonen er ferdig, sitter vi igjen med energi (ATP), CO₂ og vanndamp. Energien bruker vi til å holde kroppen i gang, mens CO₂ og vanndamp slippes ut via pusten.` },
          { type: 'bilde', src: `sammenhenger/forbrenningsreaksjoner-2.png` },
          { type: 'tekst', verdi: `Alle levende organismer bidrar til CO₂-utslipp, men utslippet som kommer fra pusten vår er fra karbon som ble tatt ut fra atmosfæren via fotosyntesen for relativt kort tid siden. Dette utslippet påvirker derfor ikke klimaet, siden vi ikke bidrar til å tilføre ekstra karbondioksid i atmosfæren.` },
        ],
      },
      {
        navn: `Kjemi`,
        slug: `kjemi`,
        farge: `#8e44ad`,
        innhold: [
          { type: 'tekst', verdi: `De viktigste klimagassene er karbondioksid (CO₂), vanndamp (H₂O) og metan (CH₄). Hvilke kjemiske forbindelser disse stoffene kan danne med andre molekyler, er viktig for å forstå både konsekvensene av det vi slipper ut og hvordan vi kan løse problemet.` },
          { type: 'bilde', src: `sammenhenger/kjemi.png` },
          { type: 'tekst', verdi: `Da KFK-gasser ble sluppet ut i atmosfæren på midten av 1900-tallet, visste vi ikke at disse gassene ville bryte ned livsviktige ozonmolekyler (O₃) i stratosfæren.` },
          { type: 'tekst', verdi: `Kjemi inngår også i forklaringen av havforsuring som følge av økt CO₂-opptak. CO₂-molekylene reagerer med vann og danner karbonsyre (H₂CO₃), som frigjør hydrogenioner (H⁺) og senker pH-verdien. Dette reduserer mengden karbonat som organismer trenger for å bygge skall.` },
        ],
      },
      {
        navn: `Økologi`,
        slug: `okologi`,
        farge: `#27ae60`,
        innhold: [
          { type: 'tekst', verdi: `Klimaendringer påvirker økosystemer ved at arter må tilpasse seg en annen naturtype, kanskje med ulik temperatur eller nedbørsmengde. Hele næringsnett kan ødelegges dersom en art ikke klarer å tilpasse seg endringene.` },
          { type: 'bilde', src: `sammenhenger/okologi.png` },
          { type: 'tekst', verdi: `Dersom planter, insekter eller smådyr ikke lenger trives i et område, vil dette få store konsekvenser for det biologiske mangfoldet og artsmangfoldet.` },
        ],
      },
      {
        navn: `Livets utvikling`,
        slug: `livets-utvikling`,
        farge: `#27ae60`,
        innhold: [
          { type: 'tekst', verdi: `Evolusjonsteorien bygger på naturlig utvalg, der den som er best tilpasset vil overleve og føre genene sine videre. Dersom klimaet endres for mye for raskt, vil ikke artene lenger være godt tilpasset området de befinner seg i, og de kan dø eller bli tvunget til å flytte til andre områder.` },
          { type: 'tekst', verdi: `Dagens klimaendringer skjer langt raskere enn det mange arter klarer å tilpasse seg.` },
        ],
      },
      {
        navn: `Teknologi`,
        slug: `teknologi`,
        farge: `#2980b9`,
        innhold: [
          { type: 'tekst', verdi: `Teknologi er både en del av klimaproblemet og løsningen. Strømproduksjon ved hjelp av ikke-fornybare energikilder som kull, olje og gass, er et av våre hovedproblemer. Samtidig kan teknologi gi oss karbonfangst og klimamodeller som hjelper oss å justere CO₂-nivået tilbake til et bærekraftig nivå.` },
          { type: 'bilde', src: `sammenhenger/teknologi.png` },
          { type: 'tekst', verdi: `Verden jobber med å fase ut kull og gass, og heller gå over til grønne energikilder. Likevel står kull og gass i dag for omtrent 50 % av verdens CO₂-utslipp.` },
        ],
      },
      {
        navn: `Energi`,
        slug: `energi`,
        farge: `#f39c12`,
        innhold: [
          { type: 'tekst', verdi: `Når vi ser på sammenhengen mellom energi og klima, er det de ikke-fornybare energikildene – kull, olje og gass – som i størst grad bidrar til økt CO₂-innhold i atmosfæren. Rundt år 1900 lå antall CO₂-molekyler i atmosfæren på omtrent 295 ppm (parts per million). I dag har vi omtrent 427 ppm. Det er denne økningen som i stor grad gir oss klimaendringene og den økte drivhuseffekten vi ser nå.` },
          { type: 'tekst', verdi: `Sola er vår viktigste energikilde og står for nesten all energi på jorda.` },
          { type: 'bilde', src: `sammenhenger/energi.png` },
          { type: 'tekst', verdi: `Strålingsenergien fra sola kommer i form av UV-stråler og synlig lys – det vi kaller kortbølget stråling. De farligste UV-strålene stoppes av ozonlaget, mens synlig lys stort sett passerer gjennom atmosfæren.` },
          { type: 'tekst', verdi: `Jorda stråler selv ut energi, men er mye kaldere enn sola. Det er denne strålingen som ikke får passere fritt gjennom atmosfæren, fordi drivhusgassene absorberer den. Drivhusgassene varmes opp og stråler varme ut igjen – noe mot verdensrommet og noe tilbake til jorda. Jo mer drivhusgass i atmosfæren, jo mer varme holdes tilbake – noe som bidrar til global oppvarming.` },
        ],
      },
      {
        navn: `Karbonkretsløpet`,
        slug: `karbonkretslopet`,
        farge: `#27ae60`,
        innhold: [
          { type: 'tekst', verdi: `Karbon er et grunnstoff som hele tiden beveger seg mellom atmosfæren, havet, jorda og levende organismer. Denne sirkulasjonen kalles karbonkretsløpet. Alt liv inneholder karbon.` },
          { type: 'bilde', src: `sammenhenger/karbonkretslopet.png` },
          { type: 'tekst', verdi: `Karbon tas opp fra atmosfæren gjennom fotosyntese, der planter, alger og andre organismer omdanner CO₂ og sollys til organisk materiale. Levende organismer driver celleånding i mitokondriene, der glukose brytes ned til CO₂ som slippes ut igjen. Når organismer dør, brytes de ned av mikroorganismer, og karbonet frigjøres til jord og luft. Havet tar opp enorme mengder CO₂ og fungerer som et viktig karbonlager.` },
          { type: 'tekst', verdi: `Gjennom millioner av år ble døde organismer begravd under jord og havbunn og omdannet til fossil energi – kull, olje og naturgass. Dette karbonet var «låst inne» og ute av kretsløpet. Når vi brenner fossil energi, frigjør vi dette lagrede karbonet tilbake til atmosfæren på ekstremt kort tid. Det som tar naturen millioner av år å lagre, slipper vi ut i løpet av tiår.` },
          { type: 'tekst', verdi: `Resultatet er at konsentrasjonen av CO₂ i atmosfæren stiger mye raskere enn jorda klarer å ta opp igjen. Som drivhusgass holder CO₂ på varme, og gjennomsnittstemperaturen på jorda stiger. Konsekvensene er mange: isbreer og polarisen smelter, havnivået stiger, ekstremvær blir hyppigere og kraftigere, havene blir surere (havforsuring), og økosystemer og artsmangfold trues.` },
        ],
      },
    ],
  },
};
