// Praktiske forsøk per emne. Nøkkelen er emnets id (se emner.js).
//
// Foreløpig vises bare navnene (oversikt over hva som kommer).
// Senere kan hvert forsøk utvides med beskrivelse, utstyr, metode,
// resultat og bilder.
export const forsok = {
  'klima-og-baerekraft': [
    { tittel: `Havforsuring, observasjon av pH i vann` },
    { tittel: `Havnivåstigning, varmt vann utvider seg` },
    { tittel: `Havnivåstigning, issmelting` },
    {
      tittel: `Gass i kaldt og varmt vann`,
      innledning: `Kaldt vann holder på mer gass enn varmt vann. Havet er et viktig lager for CO₂ på jorda, samtidig vet vi at temperaturen både på land og i vann er på vei opp på grunn av klimaendringene. Kullsyre i brus er faktisk bare CO₂ som har blitt trykket ned i brusen og reagerer med vannet til karbonsyre. Når du åpner korken, frigjøres karbondioksidet og siver ut i luften igjen. Du kan sammenligne havet med en gigantisk, tam brusflaske.`,
      utstyr: [
        `En kald brus`,
        `En varm brus`,
      ],
      slik: [
        `Skru av korken på de to brusflaskene og observer om du hører eller kjenner forskjell når du åpner dem.`,
      ],
      sporsmal: [
        `Hvordan påvirker global oppvarming havets evne til å være et lager for CO₂?`,
      ],
    },
  ],
  'geologi': [
    { tittel: `Studere havbunnen i Google Maps` },
  ],
  'okologi': [
    { tittel: `Kartlegge arter og registrere i Artsobservasjoner` },
  ],
  'celler-og-livets-utvikling': [
    { tittel: `Se på tøffeldyr i mikroskop` },
    { tittel: `Påvisning av stivelse i plantebaserte matvarer` },
  ],
  'nerve-og-hormonsystemet': [
    { tittel: `Reflekser` },
    { tittel: `Bruke oss selv som modell av nervecelle` },
    {
      tittel: `Tekst i farger (Stroop-testen)`,
      innledning: `Hjernen din er så vant til å lese at den nesten ikke klarer å la være. I dette forsøket skal du si hvilken farge ordene er skrevet i, ikke lese selve ordet. Det høres lett ut, men hjernen vil hele tiden lese ordet i stedet, og da bremser den deg. Dette kalles Stroop-effekten.`,
      slik: [
        `Gå sammen to og to og ta tida på hverandre.`,
        `Først: les ordene høyt slik de står (altså selve ordet), så raskt du kan. Noter tiden.`,
        `Så: si høyt hvilken farge hvert ord er skrevet i, så raskt du kan, uten å lese ordet. Noter tiden.`,
        `Sammenlign de to tidene. Hva gikk raskest?`,
      ],
      fargeord: [
        { ord: `BLÅ`, farge: `#e74c3c` },
        { ord: `GUL`, farge: `#27ae60` },
        { ord: `GRØNN`, farge: `#8e44ad` },
        { ord: `LILLA`, farge: `#e67e22` },
        { ord: `RØD`, farge: `#2980b9` },
        { ord: `SVART`, farge: `#e74c3c` },
        { ord: `GRÅ`, farge: `#27ae60` },
        { ord: `ORANSJE`, farge: `#8e44ad` },
        { ord: `BLÅ`, farge: `#c99700` },
        { ord: `RØD`, farge: `#27ae60` },
        { ord: `ROSA`, farge: `#2980b9` },
        { ord: `GRØNN`, farge: `#e74c3c` },
        { ord: `LILLA`, farge: `#c99700` },
        { ord: `GUL`, farge: `#e74c3c` },
        { ord: `SVART`, farge: `#2980b9` },
        { ord: `BLÅ`, farge: `#27ae60` },
        { ord: `RØD`, farge: `#8e44ad` },
        { ord: `GRÅ`, farge: `#e67e22` },
        { ord: `GRØNN`, farge: `#2980b9` },
        { ord: `GUL`, farge: `#8e44ad` },
        { ord: `SVART`, farge: `#27ae60` },
      ],
      sporsmal: [
        `Hvorfor tror du det gikk saktere å si fargene enn å lese ordene?`,
        `Hvordan tror du resultatet hadde blitt dersom teksten sto på et språk du ikke forstod?`,
        `Hva forteller dette forsøket om hvordan hjernen behandler informasjon?`,
      ],
      forklaring: `Grunnen til at det blir krøll med fargene, er at nervesystemet er laget for å lære gjennom gjentakelse. Hver gang du leser et ord, styrkes nerveforbindelsene som kobler synet av ordet til uttalen av det. Etter hvert skjer dette nesten uten at du tenker over det, og det går nærmest automatisk. Nervesystemet er laget slik at oppgaver du har gjort mange ganger, ikke lenger krever full oppmerksomhet. Problemet i denne testen er at du nå må overstyre denne automatikken. Det krever mer bevisst kontroll fra hjernen, og det tar tid. Derfor blir du langsommere og gjør flere feil når fargen og ordet ikke stemmer overens.`,
    },
  ],
  'immunsystemet': [
    { tittel: `Se på egne blodceller i mikroskop` },
  ],
  'seksualitet': [
    { tittel: `Sugeevne i bind og tamponger` },
    { tittel: `Tre på kondom` },
  ],
  'energi': [
    { tittel: `Hvor mye energi bruker du?` },
    { tittel: `Indusere strøm i en ledning` },
    {
      tittel: `Sitronbatteri`,
      innledning: `I dette forsøket skal dere bruke en sitron til å lage et batteri. Målet er å få en diode (en liten lampe) til å lyse ved å koble ulike metaller til sitronen.`,
      utstyr: [
        `En sitron`,
        `2 krokodilleklemmer`,
        `Galvanisert spiker (sink)`,
        `Kobber`,
        `Blyant eller grafitt`,
        `Magnesiumbånd`,
        `Voltmeter`,
        `Diode`,
      ],
      slik: [
        `Stikk to ulike metaller inn i sitronen, og koble dem opp i en lukket krets med et voltmeter, slik at du kan lese av spenningen.`,
        `Lag en tabell der du skriver opp hvilke metaller du bruker, og hvor stort utslag du får på voltmeteret. Tips: bruk spenningsrekka for å se hvilke metaller det lønner seg å sette ved siden av hverandre.`,
        `Ta bort voltmeteret og fest krokodilleklemmene til hvert sitt ben på en diode. Lyser den? Skriv også dette inn i tabellen.`,
        `Tips: pusser du metallene med stålull først, får du enda større spenning.`,
        `Vask utstyret og benken som har blitt tilgriset av sitron, og rydd på plass.`,
      ],
      sporsmal: [
        `Hva er strøm?`,
        `Hvordan virker sitronbatteriet?`,
        `Stemmer resultatet ditt med spenningsrekka?`,
        `Hva slags energi er det i en sitron?`,
        `Er sitronen egentlig et batteri?`,
      ],
      forklaring: `Det er ikke sitronen i seg selv som lager strømmen, men metallene. To ulike metaller gir fra seg elektroner i ulik grad, og jo lenger fra hverandre de står i spenningsrekka (Li, Na, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Ag, Hg, Au, Pt, C), desto større blir spenningen. Magnesium og karbon (grafitt) står langt fra hverandre og gir høy spenning, mens sink og kobber står nærmere hverandre og gir mindre. Sitronen fungerer bare som en «bru» som lar elektronene vandre fra det ene metallet til det andre.`,
    },
  ],
  'kjemi': [
    { tittel: `Påvisningsreaksjoner, kalkvann` },
    { tittel: `Havforsuring` },
    { tittel: `Elektrolyse av kobberklorid` },
    { tittel: `Finne pH i ulike væsker` },
    { tittel: `Kjemiske reaksjoner` },
    { tittel: `Indikatorer` },
  ],
  'teknologi': [
    { tittel: `ASCII-koder` },
    { tittel: `Programmere fjernstyrt bil med Micro:Bit` },
    { tittel: `Programmere trafikklys med Micro:Bit` },
  ],
  'vitenskap': [
    {
      tittel: `Hvor fort løser sukker seg i vann?`,
      innledning: `I dette forsøket skal dere undersøke hva som påvirker hvor fort sukker løser seg opp i vann. Dette er en fin øvelse i å bruke den vitenskapelige metoden: dere lager en hypotese, styrer variablene og noterer resultatene. Etterpå skal dere skrive en rapport.`,
      utstyr: [
        `Sukker`,
        `Vann (kaldt og varmt)`,
        `Like glass eller begerglass`,
        `Skje til å røre`,
        `Klokke eller stoppeklokke`,
      ],
      slik: [
        `Lag en hypotese: hva tror dere får sukkeret til å løse seg raskest? (For eksempel varmt vann, eller å røre.)`,
        `Bestem hvilken variabel dere vil teste, for eksempel temperaturen på vannet. Husk å holde alt annet likt (samme mengde vann og sukker).`,
        `Ha samme mengde sukker i hvert glass, og start klokka.`,
        `Mål hvor lang tid det tar før sukkeret er helt oppløst i hvert glass, og skriv det inn i en tabell.`,
        `Vil dere teste flere ting? Gjenta forsøket der dere for eksempel rører i det ene glasset, eller bruker grovt og fint sukker.`,
      ],
      sporsmal: [
        `Hva fikk sukkeret til å løse seg raskest?`,
        `Stemte hypotesen deres?`,
        `Hvilke feilkilder kan ha påvirket resultatet?`,
      ],
    },
    {
      tittel: `Beskytt et fallende egg`,
      innledning: `Her skal dere lage en innpakning som beskytter et rått egg slik at det ikke knuser når det slippes fra høyden. Dette er et teknologi- og forskningsforsøk der dere planlegger, tester og forbedrer en løsning, og lærer hvordan krefter virker i et støt.`,
      utstyr: [
        `Et rått egg per gruppe`,
        `Materialer til innpakning (for eksempel papir, bobleplast, ballonger, sugerør, teip, bomull)`,
        `Et sted å slippe egget fra (samme høyde for alle)`,
        `Søppelpose eller avis til å beskytte gulvet`,
      ],
      slik: [
        `Lag en hypotese om hva slags innpakning som vil beskytte egget best, og hvorfor.`,
        `Bygg innpakningen rundt egget med materialene dere har valgt.`,
        `Slipp egget fra avtalt høyde, og se om det overlevde.`,
        `Noter resultatet. Forbedre løsningen og prøv igjen, eller slipp fra større høyde.`,
        `Rydd opp og kast knuste egg og tilgriset materiale.`,
      ],
      sporsmal: [
        `Hvilken innpakning beskyttet egget best, og hvorfor tror dere det?`,
        `Hvordan klarte innpakningen å gjøre støtet mindre farlig for egget? (Tenk på kræsjtid og å fordele kraften.)`,
        `Hva ville dere endret hvis dere skulle gjort forsøket på nytt?`,
      ],
    },
  ],
};
