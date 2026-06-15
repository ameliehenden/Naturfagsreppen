// Quiz (flervalg) per emne. Nøkkelen er emnets id (se emner.js).
//
// Hvert spørsmål har:
//   sporsmal – selve spørsmålet
//   riktig   – det ene riktige svaret
//   feil     – tre gale (men troverdige) alternativer
//
// Alternativene stokkes tilfeldig, så rekkefølgen spiller ingen rolle.
export const quiz = {
  'klima-og-baerekraft': [
    {
      sporsmal: `Hva menes med «bærekraftig utvikling»?`,
      riktig: `Å utnytte naturressurser slik at de ikke ødelegges for framtidige generasjoner.`,
      feil: [
        `Å utvikle ny teknologi slik at produktene holder lenger og vi lager mindre søppel.`,
        `Å utvikle samfunnet slik at alle mennesker har det de trenger for å leve gode liv.`,
        `Å bruke mest mulig fornybar energi i stedet for fossil energi.`,
      ],
    },
    {
      sporsmal: `Hva menes med «føre-var-prinsippet»?`,
      riktig: `Å sette i gang tiltak mot miljøskade før vi har sikker vitenskapelig dokumentasjon på at noe er skadelig.`,
      feil: [
        `Å sette i gang tiltak mot miljøskade med en gang vi har vitenskapelig dokumentasjon på at noe er skadelig.`,
        `Å begrense bruken av en naturressurs før den forsvinner helt.`,
        `Å rydde opp i miljøskader så raskt som mulig etter at de har oppstått.`,
      ],
    },
    {
      sporsmal: `Hva er klima?`,
      riktig: `Gjennomsnittsværet for et område over en 30-årsperiode.`,
      feil: [
        `Den værtypen som er mest vanlig i et område over en 30-årsperiode.`,
        `Gjennomsnittlig vær i en bestemt årstid.`,
        `Været som er forventet de nærmeste dagene.`,
      ],
    },
    {
      sporsmal: `Hva er vær?`,
      riktig: `Det du ser av vær og vind ute akkurat nå.`,
      feil: [
        `Gjennomsnittlig vær og vind gjennom et helt år.`,
        `Gjennomsnittsværet for et område over mange år.`,
        `Bare temperatur og vind – nedbør regnes som klima.`,
      ],
    },
    {
      sporsmal: `Hva er drivhuseffekten?`,
      riktig: `At drivhusgassene i atmosfæren fanger opp varmestråling fra jorda og sender den tilbake, slik at det holder seg varmt nok til å leve.`,
      feil: [
        `At ozonlaget slipper gjennom solstrålene og varmer opp jorda.`,
        `At sola sender ut stadig mer energi mot jorda.`,
        `At lufta varmes opp fordi det blir færre skyer.`,
      ],
    },
    {
      sporsmal: `Hva er drivhusgasser?`,
      riktig: `Gasser som fanger opp varmestråling og påvirker temperaturen på jorda.`,
      feil: [
        `Gasser som bare finnes inne i drivhus.`,
        `Gasser som bryter ned ozonlaget i atmosfæren.`,
        `Forurensende gasser som er farlige å puste inn.`,
      ],
    },
    {
      sporsmal: `Hva er global oppvarming?`,
      riktig: `At den gjennomsnittlige temperaturen på jorda stiger.`,
      feil: [
        `At hele kloden blir like mye varmere overalt.`,
        `At sommeren blir varmere over hele verden hvert år.`,
        `At sola varmer opp jordas overflate mer enn før.`,
      ],
    },
    {
      sporsmal: `Hva er et ozonhull?`,
      riktig: `Et område i atmosfæren der det er mindre ozongass enn normalt.`,
      feil: [
        `Et område i atmosfæren helt uten ozongass.`,
        `Et hull der varmen fra jorda slipper ut i verdensrommet.`,
        `Et område der drivhusgassene samler seg og stenger for varmen.`,
      ],
    },
    {
      sporsmal: `Hva er biologisk mangfold?`,
      riktig: `Hvor rikt et område er på arter, genetisk variasjon og økosystemer.`,
      feil: [
        `Summen av alle artene som finnes i et område.`,
        `Hvor mange individer av levende organismer som finnes i et område.`,
        `Hvor mange ulike naturtyper som finnes i et land.`,
      ],
    },
    {
      sporsmal: `Hva er et kulturlandskap?`,
      riktig: `Et landskap som er påvirket av mennesker, ofte gjennom jord- og skogbruk.`,
      feil: [
        `En by der mennesker har bygd og formet hele området.`,
        `Et landskap der det har skjedd store, historiske hendelser.`,
        `Et naturområde som er fredet og ikke kan bygges ut.`,
      ],
    },
    {
      sporsmal: `Hva er fornybare ressurser?`,
      riktig: `Ressurser som fornyes i naturen, og som kan brukes uten at de nødvendigvis brukes opp.`,
      feil: [
        `Ressurser som aldri kan ta slutt, uansett hvor mye vi bruker.`,
        `Ressurser som mennesker kan lage mer av når vi trenger det.`,
        `Ressurser som finnes i svært store mengder, som olje og gass.`,
      ],
    },
    {
      sporsmal: `Hva er en interessekonflikt?`,
      riktig: `Når to grupper har ulike interesser i et naturområde, og den enes bruk ødelegger for den andre.`,
      feil: [
        `Når to forskningsgrupper vil bruke det samme området til å forske på det samme.`,
        `Når mennesker er uenige om hvordan de skal stemme ved et valg.`,
        `Når et naturområde blir ødelagt av forurensning fra flere kilder.`,
      ],
    },
    {
      sporsmal: `Hva er forurensing?`,
      riktig: `Alt som gjør et miljø usunt og senker miljøkvaliteten.`,
      feil: [
        `Alle produkter av menneskelig aktivitet som havner i naturen.`,
        `Alle kunstig framstilte stoffer som slippes ut i miljøet.`,
        `Søppel som kastes på bakken i stedet for i en søppelkasse.`,
      ],
    },
    {
      sporsmal: `Hva er hovedårsaken til økt havnivå?`,
      riktig: `Innlandsis på land smelter og renner ut i havet, og varmere vann utvider seg.`,
      feil: [
        `Havisen i Arktis smelter og fyller havet med mer vann.`,
        `Det regner mye mer enn før, slik at havet fylles opp.`,
        `Havet tar opp store mengder CO₂ fra atmosfæren.`,
      ],
    },
    {
      sporsmal: `Hva skjer ved havforsuring?`,
      riktig: `pH-en i havet synker fordi havet tar opp store mengder CO₂.`,
      feil: [
        `pH-en i havet stiger fordi havet tar opp store mengder CO₂.`,
        `Havet blir saltere fordi mer vann fordamper i varmen.`,
        `Havet blir varmere på grunn av global oppvarming.`,
      ],
    },
  ],
};
