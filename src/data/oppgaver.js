// Skriftlige oppgaver per emne. Nøkkelen er emnets id (se emner.js).
//
// Hvert spørsmål har:
//   sporsmal  – selve spørsmålet
//   fasit     – modellsvaret som vises til eleven
//   nokkelord – ord/uttrykk som et godt svar bør inneholde. Disse brukes til
//               den automatiske «du fikk med X av Y nøkkelord»-tilbakemeldingen.
//               Skriv dem med små bokstaver. Bruk gjerne en kort stamme
//               (f.eks. `smelter` fanger også opp «smeltende»).
//
// FASITEN ER ET UTKAST – se gjerne over og rett ordlyd og nøkkelord.
export const oppgaver = {
  'klima-og-baerekraft': [
    {
      sporsmal: `Hva er forskjellen på vær og klima?`,
      fasit: `Vær er tilstanden vi opplever akkurat nå – nedbør, vind, temperatur – og som endrer seg fra dag til dag. Klima er gjennomsnittsværet for et område over en lang periode, vanligvis 30 år.`,
      nokkelord: ['vær', 'klima', 'gjennomsnitt', '30'],
    },
    {
      sporsmal: `Nevn tre globale miljøutfordringer.`,
      fasit: `Eksempler er global oppvarming/klimaendringer, tap av biologisk mangfold, forurensning, havforsuring, plast i havet og avskoging. Det holder å nevne tre.`,
      nokkelord: ['oppvarming', 'mangfold', 'forurens', 'havforsuring'],
    },
    {
      sporsmal: `Forklar hvordan klimaet vårt påvirkes av utslipp av CO₂ i atmosfæren.`,
      fasit: `Når vi slipper ut mer CO₂, øker mengden drivhusgasser i atmosfæren. Da holder atmosfæren bedre på varmen (forsterket drivhuseffekt), og temperaturen på jorda stiger.`,
      nokkelord: ['co2', 'drivhus', 'varme', 'temperatur'],
    },
    {
      sporsmal: `Forklar hvordan klimaet vårt påvirkes av mengden havis i Arktis.`,
      fasit: `Hvit havis reflekterer mye av sollyset tilbake til verdensrommet. Når havisen smelter, blir mer mørkt hav synlig, som tar opp mer varme. Da blir det varmere, og enda mer is smelter – en selvforsterkende effekt.`,
      nokkelord: ['reflekter', 'smelter', 'mørk', 'varme'],
    },
    {
      sporsmal: `Hva mener vi med uttrykket «bærekraftig utvikling»? Gi et eksempel på en naturressurs som ikke har blitt forvaltet på en bærekraftig måte, og forklar.`,
      fasit: `Bærekraftig utvikling betyr å bruke naturressurser slik at de ikke ødelegges for framtidige generasjoner. Eksempel på dårlig forvaltning: overfiske som tømmer en fiskebestand, eller hogst av skog raskere enn den vokser opp.`,
      nokkelord: ['ressurs', 'generasjon', 'eksempel'],
    },
    {
      sporsmal: `Hva mener vi med å være «føre var»? Gi minst ett eksempel der mennesket ikke har vært føre var.`,
      fasit: `Å være føre var betyr å sette i gang tiltak for å hindre skade FØR vi har sikker vitenskapelig kunnskap om at noe er skadelig. Eksempel der vi ikke var føre var: bruk av KFK-gasser som skadet ozonlaget, eller utstrakt bruk av plast.`,
      nokkelord: ['tiltak', 'før', 'eksempel'],
    },
    {
      sporsmal: `Forklar drivhuseffekten så godt du kan, ved hjelp av stråling og drivhusgasser.`,
      fasit: `Kortbølget stråling fra sola slipper gjennom atmosfæren og varmer opp jorda. Jorda sender ut langbølget varmestråling. Drivhusgassene (som CO₂ og vanndamp) fanger opp deler av denne varmestrålingen og sender den tilbake mot jorda, slik at det holder seg varmt nok til å leve. Mer drivhusgasser gir sterkere effekt og høyere temperatur.`,
      nokkelord: ['kortbølget', 'langbølget', 'drivhusgass', 'stråling'],
    },
    {
      sporsmal: `Hva er årsaken til økt havnivå?`,
      fasit: `Havnivået stiger fordi innlandsis og isbreer på land smelter og renner ut i havet, og fordi varmere vann utvider seg. Is som allerede flyter i havet, øker ikke havnivået når den smelter.`,
      nokkelord: ['innlandsis', 'smelter', 'utvider', 'flyter'],
    },
    {
      sporsmal: `Hvorfor er internasjonalt samarbeid viktig i klima- og miljøarbeidet?`,
      fasit: `Klima- og miljøproblemer kjenner ingen landegrenser – utslipp i ett land påvirker hele kloden. Derfor må landene samarbeide om felles mål og avtaler (for eksempel Parisavtalen) for at tiltakene skal virke.`,
      nokkelord: ['samarbeid', 'avtale', 'felles', 'landegrense'],
    },
    {
      sporsmal: `Hva er en feedbackmekanisme (tilbakekoblingsmekanisme)? Gi et eksempel.`,
      fasit: `En feedbackmekanisme er når en endring forsterker (eller demper) seg selv. Eksempel: når havis smelter, tar mørkt hav opp mer varme, som gjør at enda mer is smelter – en selvforsterkende effekt.`,
      nokkelord: ['forsterk', 'smelter', 'eksempel'],
    },
    {
      sporsmal: `Gi eksempler på samenes tradisjonelle kunnskap om naturen, og hvordan den kan bidra til bærekraftig forvaltning.`,
      fasit: `Samene har lang erfaring med å bruke naturen bærekraftig, blant annet gjennom reindrift der dyrene flyttes etter årstidene slik at beitene ikke blir overbeitet. Denne tradisjonelle kunnskapen kan hjelpe oss å forvalte naturressursene på en bærekraftig måte.`,
      nokkelord: ['reindrift', 'bærekraftig', 'natur'],
    },
  ],
};
