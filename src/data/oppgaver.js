// Skriftlige oppgaver per emne. Nøkkelen er emnets id (se emner.js).
//
// Hvert spørsmål har:
//   sporsmal – selve spørsmålet
//   fasit    – modellsvaret som vises til eleven for sammenligning
//
// FASITEN ER ET UTKAST – se gjerne over og rett ordlyd.
export const oppgaver = {
  'klima-og-baerekraft': [
    {
      sporsmal: `Hva er forskjellen på vær og klima?`,
      fasit: `Vær er tilstanden vi opplever akkurat nå – nedbør, vind, temperatur – og som endrer seg fra dag til dag. Klima er gjennomsnittsværet for et område over en lang periode, vanligvis 30 år.`,
    },
    {
      sporsmal: `Nevn tre globale miljøutfordringer.`,
      fasit: `Eksempler er global oppvarming/klimaendringer, tap av biologisk mangfold, forurensning, havforsuring, plast i havet og avskoging. Det holder å nevne tre.`,
    },
    {
      sporsmal: `Forklar hvordan klimaet vårt påvirkes av utslipp av CO₂ i atmosfæren.`,
      fasit: `Når vi slipper ut mer CO₂, øker mengden drivhusgasser i atmosfæren. Da holder atmosfæren bedre på varmen (forsterket drivhuseffekt), og temperaturen på jorda stiger.`,
    },
    {
      sporsmal: `Forklar hvordan klimaet vårt påvirkes av mengden havis i Arktis.`,
      fasit: `Hvit havis reflekterer mye av sollyset tilbake til verdensrommet. Når havisen smelter, blir mer mørkt hav synlig, som tar opp mer varme. Da blir det varmere, og enda mer is smelter – en selvforsterkende effekt.`,
    },
    {
      sporsmal: `Hva mener vi med uttrykket «bærekraftig utvikling»? Gi et eksempel på en naturressurs som ikke har blitt forvaltet på en bærekraftig måte, og forklar.`,
      fasit: `Bærekraftig utvikling betyr å bruke naturressurser slik at de ikke ødelegges for framtidige generasjoner. Eksempel på dårlig forvaltning: overfiske som tømmer en fiskebestand, eller hogst av skog raskere enn den vokser opp.`,
    },
    {
      sporsmal: `Hva mener vi med å være «føre var»? Gi minst ett eksempel der mennesket ikke har vært føre var.`,
      fasit: `Å være føre var betyr å sette i gang tiltak for å hindre skade før vi har sikker vitenskapelig kunnskap om at noe er skadelig. Eksempel der vi ikke var føre var: bruk av KFK-gasser som skadet ozonlaget, eller utstrakt bruk av plast.`,
    },
    {
      sporsmal: `Ta utgangspunkt i bildet og forklar drivhuseffekten så nøye du kan. Bruk gjerne ordene stråling og drivhusgasser.`,
      bilde: `drivhuseffekten.png`,
      fasit: `På bildet kommer kortbølget stråling fra sola inn gjennom atmosfæren og varmer opp jorda (de gule pilene). Jorda sender så ut langbølget varmestråling (de røde pilene). En del slipper ut i verdensrommet, men drivhusgassene (som CO₂, vanndamp og metan) fanger opp noe av varmen og sender den tilbake mot jorda. Slik holder atmosfæren på varmen, og det blir varmt nok til å leve. Jo mer drivhusgasser, jo mer varme holdes tilbake, og temperaturen stiger.`,
      fasitBilde: `drivhuseffekten-fasit.png`,
    },
    {
      sporsmal: `Hva er årsaken til økt havnivå?`,
      fasit: `Havnivået stiger fordi innlandsis og isbreer på land smelter og renner ut i havet, og fordi varmere vann utvider seg. Is som allerede flyter i havet, øker ikke havnivået når den smelter.`,
    },
    {
      sporsmal: `Hvorfor er internasjonalt samarbeid viktig i klima- og miljøarbeidet?`,
      fasit: `Klima- og miljøproblemer kjenner ingen landegrenser – utslipp i ett land påvirker hele kloden. Derfor må landene samarbeide om felles mål og avtaler (for eksempel Parisavtalen) for at tiltakene skal virke.`,
    },
    {
      sporsmal: `Hva er en feedbackmekanisme (tilbakekoblingsmekanisme)? Gi et eksempel.`,
      fasit: `En feedbackmekanisme er når en endring forsterker (eller demper) seg selv. Eksempel: når havis smelter, tar mørkt hav opp mer varme, som gjør at enda mer is smelter – en selvforsterkende effekt.`,
    },
    {
      sporsmal: `Gi eksempler på samenes tradisjonelle kunnskap om naturen, og hvordan den kan bidra til bærekraftig forvaltning.`,
      fasit: `Samene har lang erfaring med å bruke naturen bærekraftig, blant annet gjennom reindrift der dyrene flyttes etter årstidene slik at beitene ikke blir overbeitet. Denne tradisjonelle kunnskapen kan hjelpe oss å forvalte naturressursene på en bærekraftig måte.`,
    },
  ],
  'immunsystemet': [
    {
      sporsmal: `Hvilke tre hovedtyper blodceller har vi, og hvilke oppgaver har de?`,
      fasit: `Røde blodceller (erytrocytter) frakter oksygen rundt i kroppen. Blodplater (trombocytter) får blodet til å størkne når vi blør. Hvite blodceller (leukocytter) er kroppens forsvarsceller og utgjør immunforsvaret. I tillegg består blodet av blodplasma, som er en tyktflytende væske.`,
    },
    {
      sporsmal: `Hva er forskjellen på det ytre og det indre immunforsvaret?`,
      fasit: `Det ytre immunforsvaret er kroppens første barriere – huden og slimhinnene som holder smittestoff ute av kroppen. Slim, tårer, spytt og magesyre hjelper også til. Det indre immunforsvaret tar over hvis smittestoffene kommer seg inn i kroppen, og består av de hvite blodcellene.`,
    },
    {
      sporsmal: `Hva er forskjellen på det medfødte og det ervervede immunforsvaret?`,
      fasit: `Det medfødte forsvaret er du født med. Det virker raskt og angriper alle inntrengere på samme måte, og fagocyttene er viktigst her. Det ervervede forsvaret utvikler seg gjennom livet og er spesialisert – det lærer seg å kjenne igjen bestemte smittestoff. Lymfocyttene hører til her, og det tar gjerne noen dager før dette forsvaret kommer skikkelig i gang.`,
    },
    {
      sporsmal: `Beskriv de ulike typene hvite blodceller og oppgavene deres.`,
      fasit: `Fagocytter (eteceller) «spiser» inntrengere i en prosess som kalles fagocytose; store fagocytter kalles makrofager. Lymfocytter deles i B-celler, som lager antistoffer, og T-celler, som er drepeceller som dreper kroppens egne syke celler (for eksempel virusinfiserte celler og kreftceller). Noen lymfocytter blir til hukommelsesceller som husker smittestoffet til senere.`,
    },
    {
      sporsmal: `Hva er et antistoff, og hvilken celle lager det?`,
      fasit: `Et antistoff er et protein som passer til ett bestemt smittestoff og merker det slik at det blir uskadeliggjort. Antistoffene lages av B-cellene, som er en type lymfocytter.`,
    },
    {
      sporsmal: `Hvorfor får vi feber når vi er syke, og hvordan hjelper det immunforsvaret?`,
      fasit: `De hvite blodcellene slipper ut et feberfremkallende stoff som hjernen oppfatter, og kroppen setter i gang en frysereaksjon for å holde på varmen. De fleste smittestoffene trives best ved normal kroppstemperatur (35–37 °C) og formerer seg saktere ved feber. Samtidig jobber immunforsvaret mer effektivt: fagocyttene rydder bort smittestoff raskere, og kroppen aktiverer flere T-celler og lager mer antistoff.`,
    },
    {
      sporsmal: `Forklar hvordan en vaksine virker.`,
      fasit: `En vaksine inneholder svekkede eller døde smittestoff, eller deler av dem. Når du vaksineres, tror kroppen at den er smittet og setter i gang det ervervede forsvaret: den lager antistoffer og danner hukommelsesceller – uten at du blir ordentlig syk. Møter du det ekte smittestoffet senere, kjenner hukommelsescellene det igjen og slår det ned før du rekker å bli syk.`,
    },
    {
      sporsmal: `Hva er flokkimmunitet, og hvorfor er vaksiner viktige for folkehelsen?`,
      fasit: `Flokkimmunitet er når så mange i en befolkning er immune at smittestoffet ikke klarer å spre seg. Da beskyttes også de som ikke kan vaksinere seg selv, for eksempel nyfødte og personer med svekket immunforsvar. Slik har vaksiner gjort at sykdommer som tidligere tok mange liv, i dag er sjeldne – derfor er de noe av det viktigste vi har for folkehelsen.`,
    },
    {
      sporsmal: `Hvorfor regnes ikke virus som levende?`,
      fasit: `Et virus består bare av arvestoff med en proteinkappe rundt, og det mangler kjennetegnene på levende organismer. Det kan ikke formere seg selv, men må kapre en levende celle og få den til å lage nye virus. Derfor regnes ikke virus som levende.`,
    },
    {
      sporsmal: `Gi et eksempel på hvordan kunnskap om immunforsvaret brukes i moderne teknologi.`,
      fasit: `Forskere prøver å bruke kroppens egne immunceller til å behandle kreft – dette kalles immunterapi. Kreftceller kan «gjemme seg» for immunforsvaret ved hjelp av proteinet AHR. Klarer forskerne å hindre kreftcellene i å skjule seg, blir det mye lettere for immuncellene å finne og drepe dem.`,
    },
  ],
};
