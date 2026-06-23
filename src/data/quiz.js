// Quiz (flervalg) per emne. Nøkkelen er emnets id (se emner.js).
//
// Hvert spørsmål har:
//   sporsmal, selve spørsmålet
//   riktig  , det ene riktige svaret
//   feil    , tre gale (men troverdige) alternativer
//
// Alternativene stokkes tilfeldig, så rekkefølgen spiller ingen rolle.
export const quiz = {
  'geologi': [
    {
      sporsmal: `Hva er jordskorpen?`,
      riktig: `Det ytterste, harde laget av jorda.`,
      feil: [
        `Laget av halvfast stein mellom kjernen og overflaten.`,
        `Det innerste laget av jorda, bestående av jern og nikkel.`,
        `Det øverste laget av mantelen der platene beveger seg.`,
      ],
    },
    {
      sporsmal: `Hva kjennetegner mantelen?`,
      riktig: `Den utgjør mesteparten av jordas volum og består av varmt, halvfast bergartsmateriale.`,
      feil: [
        `Den er helt flytende og befinner seg mellom jordskorpen og kjernen.`,
        `Den er det innerste laget av jorda og består av fast jern og nikkel.`,
        `Den er svært tynn og ligger rett under jordskorpen.`,
      ],
    },
    {
      sporsmal: `Hva skaper jordas magnetfelt?`,
      riktig: `Bevegelsene i den flytende yttre kjernen av jern og nikkel.`,
      feil: [
        `Rotasjonen til den faste indre kjernen.`,
        `Konveksjonsstrømmene i mantelen.`,
        `Den elektriske aktiviteten i jordskorpen.`,
      ],
    },
    {
      sporsmal: `Hva er den indre kjernen?`,
      riktig: `Det innerste laget av jorda, fast jern og nikkel med temperaturer rundt 5000–6000°C.`,
      feil: [
        `Det innerste laget av jorda, flytende jern og nikkel.`,
        `Det innerste laget av jorda, smeltet stein og mineraler.`,
        `Det innerste laget av jorda, komprimert berggrunn under enormt trykk.`,
      ],
    },
    {
      sporsmal: `Hva er kontinentalplater?`,
      riktig: `Store plater av jordskorpen og øvre mantel som sakte driver rundt på den plastiske mantelen.`,
      feil: [
        `Store plater av jordskorpen som er fastlåst og aldri har beveget seg.`,
        `Store flytende bergartsmasser i mantelen som beveger seg under jordskorpen.`,
        `Store plater av havbunnen som ligger under kontinentene og aldri beveger seg.`,
      ],
    },
    {
      sporsmal: `Hva driver kontinentaldriften?`,
      riktig: `Konveksjonsstrømmer i mantelen som skyver platene rundt.`,
      feil: [
        `Jordas rotasjon som drar platene i ulike retninger.`,
        `Gravitasjonskraften fra månen som trekker i jordskorpen.`,
        `Varmen fra sola som varmer opp og utvider jordskorpen ujevnt.`,
      ],
    },
    {
      sporsmal: `Hva er Pangea?`,
      riktig: `Superkontinentet der alle jordens landmasser var samlet til ett, for ca. 300 millioner år siden.`,
      feil: [
        `Superkontinentet der alle jordens landmasser var samlet til ett, for ca. 65 millioner år siden.`,
        `Det første kontinentet som brøt løs fra havbunnen for ca. 300 millioner år siden.`,
        `Det superkontinentet som dannes i fremtiden når platene møtes igjen.`,
      ],
    },
    {
      sporsmal: `Hva skjer ved midthavsryggen?`,
      riktig: `To plater beveger seg fra hverandre og ny havbunn dannes.`,
      feil: [
        `To plater kolliderer og havbunnen senkes ned i mantelen.`,
        `To plater glir forbi hverandre og skaper jordskjelv uten å danne ny skorpe.`,
        `To plater smelter sammen og danner nye fjellkjeder under havet.`,
      ],
    },
    {
      sporsmal: `Hva er årsaken til jordskjelv?`,
      riktig: `Spenninger mellom plater frigjøres plutselig og skaper rystelser i jordskorpen.`,
      feil: [
        `Konveksjonsstrømmer i mantelen presser opp mot jordskorpen og skaper rystelser.`,
        `Vulkanutbrudd sender sjokkbølger gjennom jordskorpen til nærliggende områder.`,
        `Erosjon fra vann og vind skaper ustabilitet i jordskorpen.`,
      ],
    },
    {
      sporsmal: `Hva er en vulkan?`,
      riktig: `Et sted der magma fra jordens indre bryter gjennom jordskorpen og strømmer ut som lava.`,
      feil: [
        `Et fjell som dannes av platekollisjon, men der smeltet stein aldri bryter gjennom overflaten.`,
        `Et sted der grunnvannet koker og spruter opp som vann og damp.`,
        `Et sted der to plater glir forbi hverandre og skaper store sprekker i overflaten.`,
      ],
    },
    {
      sporsmal: `Hva er forskjellen på magma og lava?`,
      riktig: `Magma er smeltet stein inne i jorda, det kalles lava når det bryter ut på overflaten.`,
      feil: [
        `Magma er varmere enn lava og flyter saktere.`,
        `Magma er smeltet stein på overflaten, mens lava er smeltet stein inne i jorda.`,
        `Lava inneholder mer gass enn magma og er derfor mer eksplosiv.`,
      ],
    },
    {
      sporsmal: `Hvorfor er havbunnen yngre enn kontinentene?`,
      riktig: `Ny havbunn dannes hele tiden ved midthavsryggene, der platene beveger seg fra hverandre.`,
      feil: [
        `Havbunnen er laget av lettere bergarter som dannes raskere enn kontinentene.`,
        `Havet beskytter bunnen mot erosjon, så den ser yngre ut enn den er.`,
        `Kontinentene ble dannet for millioner av år siden og har ikke forandret seg siden.`,
      ],
    },
    {
      sporsmal: `I hvilken del av atmosfæren skjer alt vær?`,
      riktig: `Troposfæren, det nederste laget, fra bakken opp til ca. 12 km høyde.`,
      feil: [
        `Stratosfæren, laget fra ca. 12 til 50 km høyde.`,
        `Mesosfæren, laget fra ca. 50 til 80 km høyde.`,
        `Troposfæren og stratosfæren bidrar likt til værdannelsen.`,
      ],
    },
    {
      sporsmal: `Hva finner vi i stratosfæren?`,
      riktig: `Ozonlaget som beskytter jorda mot skadelig UV-stråling.`,
      feil: [
        `Mesteparten av vanndampen i atmosfæren og de fleste skyer.`,
        `Mesteparten av lufta vi puster inn, inkludert oksygen og nitrogen.`,
        `Det meste av drivhusgassene som påvirker jordas temperatur.`,
      ],
    },
    {
      sporsmal: `Hva er riktig rekkefølge fra jordas midtpunkt og ut?`,
      riktig: `Indre kjerne → yttre kjerne → mantel → jordskorpe.`,
      feil: [
        `Yttre kjerne → indre kjerne → mantel → jordskorpe.`,
        `Indre kjerne → mantel → yttre kjerne → jordskorpe.`,
        `Mantel → indre kjerne → yttre kjerne → jordskorpe.`,
      ],
    },
  ],
  'okologi': [
    {
      sporsmal: `Hva kjennetegner en produsent i en næringskjede?`,
      riktig: `Den lager sin egen mat gjennom fotosyntesen og er alltid det første leddet.`,
      feil: [
        `Den lager sin egen mat ved å bryte ned organisk materiale i jorda.`,
        `Den er det siste leddet i en næringskjede og spiser andre dyr.`,
        `Den spiser planter og er det andre leddet i en næringskjede.`,
      ],
    },
    {
      sporsmal: `Hva er nedbryternes rolle i et økosystem?`,
      riktig: `De bryter ned dødt organisk materiale slik at næringsstoffer frigjøres og kan tas opp av planter igjen.`,
      feil: [
        `De spiser levende planter og dyr og overfører energi oppover i næringskjeden.`,
        `De produserer oksygen ved å bryte ned mineraler i jorda.`,
        `De renser lufta ved å absorbere CO₂ fra atmosfæren.`,
      ],
    },
    {
      sporsmal: `Hva er forskjellen på en næringskjede og et næringsnett?`,
      riktig: `En næringskjede viser én rekke av hvem som spiser hvem, mens et næringsnett viser alle spise-forbindelsene i et område.`,
      feil: [
        `En næringskjede inkluderer nedbrytere, mens et næringsnett bare inkluderer produsenter og forbrukere.`,
        `Et næringsnett viser bare forbindelsene mellom pattedyr, mens næringskjeden inkluderer alle organismer.`,
        `En næringskjede begynner med en forbruker, mens et næringsnett alltid begynner med en produsent.`,
      ],
    },
    {
      sporsmal: `Hva er en abiotisk faktor?`,
      riktig: `En ikke-levende faktor som påvirker livet i et område, for eksempel temperatur, lys eller pH.`,
      feil: [
        `En levende faktor som påvirker andre organismer, for eksempel rovdyr eller parasitter.`,
        `En menneskeskapt faktor som påvirker miljøet, for eksempel forurensning.`,
        `En faktor som bare påvirker planter og ikke dyr i et område.`,
      ],
    },
    {
      sporsmal: `Hva er et økosystem?`,
      riktig: `Et avgrenset naturområde med alle levende organismer og de ikke-levende omgivelsene som påvirker hverandre.`,
      feil: [
        `Et avgrenset naturområde der det bare lever organismer, uten innflytelse fra miljøet.`,
        `Alle levende organismer på jorda og samspillet mellom dem.`,
        `Et naturområde bestemt av hvilke dyr som lever der, uten å ta hensyn til planter.`,
      ],
    },
    {
      sporsmal: `Hva er et biom?`,
      riktig: `En stor naturgeografisk sone med karakteristisk vegetasjon og dyreliv, styrt av klimaet.`,
      feil: [
        `Et lite, avgrenset naturområde med unike arter som ikke finnes andre steder.`,
        `En naturgeografisk sone bestemt av berggrunn og jordsmonn, ikke klima.`,
        `Et naturreservat der menneskelig aktivitet er forbudt.`,
      ],
    },
    {
      sporsmal: `Hva er biologisk mangfold?`,
      riktig: `Summen av all genetisk variasjon, alle arter og alle naturtyper i et område.`,
      feil: [
        `Antallet dyrearter som finnes i et bestemt naturreservat.`,
        `Antallet plante- og dyrearter som er registrert i et land.`,
        `Variasjonen i størrelse og utseende innenfor én enkelt art.`,
      ],
    },
    {
      sporsmal: `Hva er rødlista?`,
      riktig: `En oversikt over arter som er truet av utryddelse, inndelt i kategorier etter risiko for utdøing.`,
      feil: [
        `En oversikt over invasive fremmede arter som truer norsk natur.`,
        `En oversikt over alle ville dyr og planter som er fredet i Norge.`,
        `En liste over naturområder som er truet av utbygging og inngrep.`,
      ],
    },
    {
      sporsmal: `Hva avgjør hvilken klimasone et område tilhører?`,
      riktig: `Breddegrad, havstrømmer og terreng bestemmer klimaet og dermed hvilke organismer som kan leve der.`,
      feil: [
        `Bare breddegraden bestemmer klimasonen og hvilke organismer som lever der.`,
        `Jordas rotasjon og havets størrelse bestemmer klimasonen.`,
        `Berggrunnen og jordsmonnet bestemmer klimaet og dermed klimasonen.`,
      ],
    },
    {
      sporsmal: `Hva skjer dersom en art i et næringsnett forsvinner?`,
      riktig: `Det kan påvirke hele næringsnettet, siden mange andre arter kan miste mat eller få ukontrollert vekst.`,
      feil: [
        `Bare den arten som spiste den forsvunne arten, blir påvirket.`,
        `Næringsnettet tilpasser seg umiddelbart uten konsekvenser.`,
        `Nedbrytere tar over rollen til den forsvunne arten.`,
      ],
    },
  ],
  'celler-og-livets-utvikling': [
    {
      sporsmal: `Hva sier evolusjonsteorien?`,
      riktig: `At alle organismer har utviklet seg fra felles forfedre gjennom naturlig utvalg over millioner av år.`,
      feil: [
        `At alle organismer er skapt uavhengig av hverandre, tilpasset sine omgivelser fra starten av.`,
        `At organismer forandrer seg i løpet av livet for å tilpasse seg miljøet rundt dem.`,
        `At nye arter oppstår tilfeldig gjennom mutasjoner, uten at miljøet har noen innflytelse.`,
      ],
    },
    {
      sporsmal: `Hva er naturlig utvalg?`,
      riktig: `Prosessen der individer med gunstige egenskaper overlever og formerer seg mer, slik at egenskapene spres i populasjonen.`,
      feil: [
        `Prosessen der individer aktivt velger partnere med de beste egenskapene for å forsterke dem.`,
        `Prosessen der individer med ugunstige egenskaper dør umiddelbart og ikke etterlater seg avkom.`,
        `Prosessen der miljøet direkte endrer genene til de individene som lever der.`,
      ],
    },
    {
      sporsmal: `Hva har plantecellen som dyrecellen mangler?`,
      riktig: `Cellevegg, kloroplaster og en stor vakuole.`,
      feil: [
        `Cellekjerne og ribosomer.`,
        `Cellemembran og mitokondrier.`,
        `Cellevegg og mitokondrier.`,
      ],
    },
    {
      sporsmal: `Hva er cellemembranens viktigste funksjon?`,
      riktig: `Å kontrollere hva som slipper inn og ut av cellen.`,
      feil: [
        `Å gi cellen fast form og beskytte den mot mekanisk skade.`,
        `Å produsere energi til cellen ved hjelp av oksygen.`,
        `Å lagre cellens arvestoff og beskytte DNA.`,
      ],
    },
    {
      sporsmal: `Hva er cellekjernens rolle?`,
      riktig: `Den inneholder cellens DNA og styrer hvilke proteiner cellen produserer.`,
      feil: [
        `Den produserer energi til cellen ved å bryte ned glukose.`,
        `Den pakker og sender ut proteiner til resten av cellen og til omgivelsene.`,
        `Den bryter ned avfall og utslitte organeller ved hjelp av enzymer.`,
      ],
    },
    {
      sporsmal: `Hva skjer i mitokondriene?`,
      riktig: `Celleåndingen, glukose og oksygen omdannes til energi, vann og CO₂.`,
      feil: [
        `Fotosyntesen, sollys, CO₂ og vann omdannes til glukose og oksygen.`,
        `Proteinsyntesen, DNA-oppskriften omsettes til proteiner.`,
        `Fordøyelsen av avfall og inntrengere ved hjelp av enzymer.`,
      ],
    },
    {
      sporsmal: `Hva er kloroplastenes funksjon?`,
      riktig: `Stedet der fotosyntesen foregår, de fanger sollys ved hjelp av fargestoffet klorofyll.`,
      feil: [
        `De produserer energi ved å bryte ned glukose, akkurat som mitokondriene.`,
        `De lagrer næringsstoffer og vann til bruk i andre deler av cellen.`,
        `De styrer hvilke stoffer som slipper inn og ut av plantecellen.`,
      ],
    },
    {
      sporsmal: `Hva produserer ribosomene?`,
      riktig: `Proteiner, etter oppskrift fra cellens DNA.`,
      feil: [
        `Energi i form av ATP ved å bryte ned glukose.`,
        `Oksygen som et biprodukt av fotosyntesen.`,
        `Enzymer som bryter ned avfall inne i cellen.`,
      ],
    },
    {
      sporsmal: `Hva er DNA?`,
      riktig: `Stoffet som inneholder arveoppskriften for alle levende organismer, bygd opp av fire baser i en dobbel spiral.`,
      feil: [
        `En type protein som styrer cellens aktivitet og finnes i cellemembran.`,
        `Et sukkermolekyl som er cellens viktigste energikilde.`,
        `Stoffet som overfører arveegenskaper fra celle til celle via blodet.`,
      ],
    },
    {
      sporsmal: `Hva er et gen?`,
      riktig: `Et avsnitt av DNA som inneholder oppskriften på ett bestemt protein.`,
      feil: [
        `En kopi av DNA som sendes ut av cellekjernen for å styre celleaktiviteten.`,
        `En samling kromosomer som inneholder oppskriften på alle proteiner i kroppen.`,
        `En del av cellemembran som kontrollerer hvilke stoffer som slipper inn.`,
      ],
    },
    {
      sporsmal: `Hva er en mutasjon?`,
      riktig: `En tilfeldig endring i DNA-sekvensen som kan være nøytral, skadelig eller gunstig.`,
      feil: [
        `En planlagt endring i DNA-sekvensen som organismen gjør for å tilpasse seg miljøet.`,
        `En endring i DNA-sekvensen som alltid er skadelig og fører til sykdom.`,
        `En endring som bare skjer når organismen utsettes for ekstrem kulde eller varme.`,
      ],
    },
    {
      sporsmal: `Hva er genetisk variasjon, og hvorfor er det viktig?`,
      riktig: `Forskjeller i arveegenskaper mellom individer, det er grunnlaget for naturlig utvalg og evolusjon.`,
      feil: [
        `Forskjeller i utseende mellom individer som utelukkende skyldes ulikt kosthold og miljø.`,
        `Genetiske egenskaper som er helt like hos alle individer i en populasjon.`,
        `Forskjeller i arveegenskaper mellom ulike arter, ikke innenfor én og samme art.`,
      ],
    },
    {
      sporsmal: `Hva er produktene av fotosyntesen?`,
      riktig: `Glukose og oksygen, laget av CO₂, vann og sollys.`,
      feil: [
        `Glukose og CO₂, laget av oksygen, vann og sollys.`,
        `Energi og vann, laget av CO₂, oksygen og sollys.`,
        `Glukose og vann, laget av CO₂, oksygen og sollys.`,
      ],
    },
    {
      sporsmal: `Hva skjer under celleåndingen?`,
      riktig: `Glukose og oksygen brytes ned til energi, CO₂ og vann i mitokondriene.`,
      feil: [
        `CO₂ og vann omdannes til glukose og oksygen ved hjelp av sollys.`,
        `Glukose lagres i cellen og settes av til seinere bruk.`,
        `Oksygen fra lufta omdannes direkte til energi uten å involvere glukose.`,
      ],
    },
    {
      sporsmal: `Hva menes med at to arter har felles stamfar?`,
      riktig: `At begge artene stammer fra den samme forfedrearten og har utviklet seg fra den i ulike retninger.`,
      feil: [
        `At begge artene bor i det samme geografiske området og har tilpasset seg likt.`,
        `At de to artene er genetisk identiske og ikke kan skilles fra hverandre.`,
        `At de to artene kan pare seg med hverandre og få fruktbart avkom.`,
      ],
    },
    {
      sporsmal: `Hvilke kjennetegn har alt som er levende?`,
      riktig: `Det er bygd opp av celler, tar til seg næring, vokser, formerer seg og inneholder arvestoff.`,
      feil: [
        `Det er bygd opp av celler, kan bevege seg og puster inn oksygen.`,
        `Det inneholder arvestoff, men trenger verken næring eller å formere seg.`,
        `Det kan reagere på lys og lyd, men består ikke nødvendigvis av celler.`,
      ],
    },
    {
      sporsmal: `Hva kaller vi en genvariant som kommer fram selv om den bare finnes i ett eksemplar?`,
      riktig: `Dominant.`,
      feil: [
        `Recessiv.`,
        `Heterozygot.`,
        `Mutert.`,
      ],
    },
    {
      sporsmal: `En svart kanin (Ff) krysses med en hvit kanin (ff). Hvilket forhold mellom fargene får ungene?`,
      riktig: `Omtrent halvparten blir svarte (Ff) og halvparten hvite (ff).`,
      feil: [
        `Alle ungene blir svarte, fordi svart er dominant.`,
        `Alle ungene blir hvite, fordi begge foreldrene bærer på f.`,
        `Tre av fire blir svarte og én av fire blir hvit.`,
      ],
    },
    {
      sporsmal: `Hva er en triplettkode i proteinbyggingen?`,
      riktig: `Tre baser etter hverandre som bestemmer hvilken aminosyre som skal settes inn.`,
      feil: [
        `Tre gener som sammen danner ett kromosom.`,
        `Tre ribosomer som jobber med samme protein samtidig.`,
        `Tre aminosyrer som til sammen utgjør ett ferdig protein.`,
      ],
    },
    {
      sporsmal: `Hvilke to celleprosesser utgjør hoveddelen av karbonkretsløpet?`,
      riktig: `Fotosyntesen og celleåndingen.`,
      feil: [
        `Fotosyntesen og proteinbyggingen.`,
        `Celledelingen og celleåndingen.`,
        `Fordøyelsen og celledelingen.`,
      ],
    },
  ],
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
        `Bare temperatur og vind, nedbør regnes som klima.`,
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
  'immunsystemet': [
    {
      sporsmal: `Hva er leukocytter?`,
      riktig: `De hvite blodcellene, som utgjør immunforsvaret.`,
      feil: [
        `De røde blodcellene, som frakter oksygen.`,
        `Blodplatene, som får blodet til å størkne.`,
        `Blodplasmaet, som er den flytende delen av blodet.`,
      ],
    },
    {
      sporsmal: `Hvilken oppgave har de røde blodcellene (erytrocyttene)?`,
      riktig: `De frakter oksygen rundt i kroppen.`,
      feil: [
        `De spiser inntrengere som bakterier og virus.`,
        `De lager antistoffer mot smittestoff.`,
        `De får blodet til å størkne når vi blør.`,
      ],
    },
    {
      sporsmal: `Hva er det ytre immunforsvaret?`,
      riktig: `Huden og slimhinnene som holder smittestoff ute av kroppen.`,
      feil: [
        `De hvite blodcellene som angriper smittestoff inne i kroppen.`,
        `Antistoffene som merker smittestoff for ødeleggelse.`,
        `Hukommelsescellene som husker tidligere smitte.`,
      ],
    },
    {
      sporsmal: `Hva kjennetegner det medfødte immunforsvaret?`,
      riktig: `Det virker raskt og angriper alle inntrengere på samme måte.`,
      feil: [
        `Det er spesialisert og kjenner igjen bestemte smittestoff.`,
        `Det bruker noen dager på å komme i gang etter smitte.`,
        `Det dannes først etter at man har blitt vaksinert.`,
      ],
    },
    {
      sporsmal: `Hva gjør fagocyttene?`,
      riktig: `De «spiser» inntrengere i en prosess som kalles fagocytose.`,
      feil: [
        `De lager antistoffer som passer til ett bestemt smittestoff.`,
        `De danner hukommelsesceller etter en infeksjon.`,
        `De frakter oksygen og næring til cellene.`,
      ],
    },
    {
      sporsmal: `Hva er oppgaven til B-cellene?`,
      riktig: `De lager antistoffer mot smittestoff.`,
      feil: [
        `De dreper kroppens egne celler som er blitt syke.`,
        `De spiser inntrengere som etende celler.`,
        `De holder smittestoff ute ved hjelp av slimhinner.`,
      ],
    },
    {
      sporsmal: `Hva gjør T-cellene (drepecellene)?`,
      riktig: `De dreper kroppens egne celler som er blitt syke, for eksempel virusinfiserte celler og kreftceller.`,
      feil: [
        `De lager antistoffer som merker smittestoff.`,
        `De spiser bakterier i en prosess kalt fagocytose.`,
        `De danner det ytre forsvaret sammen med huden.`,
      ],
    },
    {
      sporsmal: `Hva er et antistoff?`,
      riktig: `Et protein som passer til ett bestemt smittestoff og merker det for ødeleggelse.`,
      feil: [
        `En etecelle som spiser opp inntrengere.`,
        `Et smittestoff som gjør oss syke.`,
        `En celle som frakter oksygen i blodet.`,
      ],
    },
    {
      sporsmal: `Hvorfor reagerer immunforsvaret raskere andre gang du møter samme smittestoff?`,
      riktig: `Fordi hukommelsesceller husker smittestoffet fra før.`,
      feil: [
        `Fordi de røde blodcellene har lært seg å frakte mer oksygen.`,
        `Fordi huden blir tykkere etter en infeksjon.`,
        `Fordi smittestoffet blir svakere hver gang det kommer tilbake.`,
      ],
    },
    {
      sporsmal: `Hvorfor er feber nyttig når vi er syke?`,
      riktig: `Smittestoffene formerer seg saktere, samtidig som immunforsvaret jobber mer effektivt.`,
      feil: [
        `Feber dreper alle bakterier i kroppen umiddelbart.`,
        `Feber gjør at vi lager flere røde blodceller.`,
        `Feber hindrer at vi blir smittet på nytt senere.`,
      ],
    },
    {
      sporsmal: `Hva inneholder en vaksine?`,
      riktig: `Svekkede eller døde smittestoff, eller deler av dem.`,
      feil: [
        `Ferdige antistoffer som virker med en gang.`,
        `Antibiotika som dreper bakterier i kroppen.`,
        `Levende, fullt smittsomme virus.`,
      ],
    },
    {
      sporsmal: `Hvordan virker en vaksine?`,
      riktig: `Kroppen lager antistoffer og hukommelsesceller uten at du blir ordentlig syk.`,
      feil: [
        `Den dreper smittestoffet direkte slik antibiotika gjør.`,
        `Den styrker huden og slimhinnene så smitte ikke kommer inn.`,
        `Den frakter ekstra oksygen til de syke cellene.`,
      ],
    },
    {
      sporsmal: `Hva er flokkimmunitet?`,
      riktig: `Når så mange er immune at smittestoffet ikke klarer å spre seg, slik at også de uvaksinerte beskyttes.`,
      feil: [
        `Når én person er immun mot alle kjente sykdommer.`,
        `Når immunforsvaret angriper kroppens egne celler.`,
        `Når en hel familie blir syke av samme smittestoff samtidig.`,
      ],
    },
    {
      sporsmal: `Hvorfor regnes ikke virus som levende?`,
      riktig: `De må kapre en levende celle for å kunne formere seg.`,
      feil: [
        `De er for små til å inneholde noe arvestoff.`,
        `De består bare av vann og salter.`,
        `De kan bare leve i kaldt vann.`,
      ],
    },
    {
      sporsmal: `Hvor i kroppen lages de hvite blodcellene?`,
      riktig: `I beinmargen inni knoklene.`,
      feil: [
        `I hjertet, sammen med blodplasmaet.`,
        `I huden, som en del av det ytre forsvaret.`,
        `I lungene, der oksygenet kommer inn.`,
      ],
    },
  ],
  'nerve-og-hormonsystemet': [
    {
      sporsmal: `Hvilke to deler består nervesystemet av?`,
      riktig: `Sentralnervesystemet og det perifere nervesystemet.`,
      feil: [
        `Det motoriske systemet og det sensoriske systemet.`,
        `Storehjernen og veslehjernen.`,
        `Nervesystemet og hormonsystemet.`,
      ],
    },
    {
      sporsmal: `Hva består sentralnervesystemet av?`,
      riktig: `Hjernen og ryggmargen.`,
      feil: [
        `Alle nervene som går ut i kroppen.`,
        `Hjernen og alle sansene.`,
        `Ryggmargen og det autonome systemet.`,
      ],
    },
    {
      sporsmal: `Hva er oppgaven til det motoriske systemet?`,
      riktig: `Å sende beskjeder fra sentralnervesystemet ut til musklene og styre bevegelsene.`,
      feil: [
        `Å sende informasjon fra sansene inn til sentralnervesystemet.`,
        `Å styre kjertler, hjerte og fordøyelse uten viljen.`,
        `Å beskytte hjernen og ryggmargen mot skader.`,
      ],
    },
    {
      sporsmal: `Hva gjør det autonome systemet?`,
      riktig: `Styrer kjertler, glatt muskulatur og hjertet, det vi ikke styrer med viljen.`,
      feil: [
        `Styrer musklene vi beveger med viljen.`,
        `Sender informasjon fra sansene til hjernen.`,
        `Lager nye nerveceller når noen blir skadet.`,
      ],
    },
    {
      sporsmal: `Hvilken del av nervecellen kan vokse ut igjen hvis den blir skadet?`,
      riktig: `Aksonet (nervetråden).`,
      feil: [
        `Cellekjernen.`,
        `Selve hjernecellen.`,
        `Ingen deler kan gro igjen.`,
      ],
    },
    {
      sporsmal: `Hva er en refleks?`,
      riktig: `En rask, automatisk reaksjon der signalet går til ryggmargen og rett tilbake, uten å gå om hjernen.`,
      feil: [
        `En reaksjon der hjernen nøye vurderer hva som er best å gjøre.`,
        `En bevegelse vi bestemmer oss for med viljen.`,
        `Et hormon som skilles ut når vi blir redde.`,
      ],
    },
    {
      sporsmal: `Hva er et hormon?`,
      riktig: `Et kjemisk signalstoff som sendes med blodet til en bestemt mottaker i kroppen.`,
      feil: [
        `Et elektrisk signal som sendes raskt gjennom nervene.`,
        `En celle som frakter oksygen rundt i kroppen.`,
        `Et stoff som bare finnes i hjernen.`,
      ],
    },
    {
      sporsmal: `Hva er den viktigste forskjellen på nervesystemet og hormonsystemet?`,
      riktig: `Nervesignaler går raskt og virker kort tid, mens hormoner virker langsommere, men ofte over lengre tid.`,
      feil: [
        `Nervesystemet bruker blodet, mens hormonsystemet bruker nervene.`,
        `Hormonsystemet er raskt, mens nervesystemet er tregt.`,
        `Bare nervesystemet gir beskjeder; hormonsystemet lagrer energi.`,
      ],
    },
    {
      sporsmal: `Hvorfor kalles hypofysen den overordnede hormonkjertelen?`,
      riktig: `Fordi den styrer de andre hormonkjertlene og bestemmer om de skal lage mer eller mindre hormon.`,
      feil: [
        `Fordi den er den største hormonkjertelen i kroppen.`,
        `Fordi den lager alle hormonene kroppen trenger.`,
        `Fordi den ligger nærmest hjertet.`,
      ],
    },
    {
      sporsmal: `Hvilken oppgave har adrenalin?`,
      riktig: `Det gjør kroppen klar til å kjempe eller flykte, blant annet med raskere hjerteslag.`,
      feil: [
        `Det senker blodsukkeret og lagrer energi som fett.`,
        `Det sørger for at kroppen vokser.`,
        `Det styrer utviklingen i puberteten.`,
      ],
    },
    {
      sporsmal: `Hvordan samarbeider insulin og glukagon?`,
      riktig: `Insulin senker blodsukkeret, og glukagon øker det, sammen holder de blodsukkeret stabilt.`,
      feil: [
        `Begge senker blodsukkeret så raskt som mulig.`,
        `Insulin øker blodsukkeret, og glukagon senker det.`,
        `De styrer kroppens vekst i puberteten.`,
      ],
    },
    {
      sporsmal: `Hva er forskjellen på legemidler og rusmidler?`,
      riktig: `Legemidler brukes for å forebygge, lindre eller kurere sykdom, mens rusmidler tas for å bli ruset og endre humør og bevissthet.`,
      feil: [
        `Legemidler tas for å bli ruset, mens rusmidler brukes mot sykdom.`,
        `Det er ingen forskjell, det er to ord for det samme.`,
        `Legemidler er alltid ulovlige, mens rusmidler alltid er lovlige.`,
      ],
    },
    {
      sporsmal: `Hva er doping?`,
      riktig: `Bruk av forbudte stoffer for å prestere bedre i idrett.`,
      feil: [
        `All bruk av legemidler mot sykdom.`,
        `En type hormon kroppen lager selv under trening.`,
        `En lovlig metode for å bygge muskler raskere.`,
      ],
    },
    {
      sporsmal: `Hvorfor passer rusmidler og doping inn under temaet nerve- og hormonsystemet?`,
      riktig: `Fordi de griper inn i signalene i nerve- og hormonsystemet, rusmidler virker på hjernen, og doping forstyrrer hormonsystemet.`,
      feil: [
        `Fordi de bare påvirker musklene og ingenting annet.`,
        `Fordi de styrker immunforsvaret mot sykdom.`,
        `Fordi de lages naturlig i hormonkjertlene.`,
      ],
    },
    {
      sporsmal: `Hva er forskjellen på diabetes type 1 og type 2?`,
      riktig: `Type 1 er medfødt og skyldes mangel på insulin, mens type 2 er en livsstilssykdom der kroppen har blitt mindre følsom for sitt eget insulin.`,
      feil: [
        `Type 1 er en livsstilssykdom, mens type 2 er medfødt.`,
        `Type 1 skyldes for mye insulin, mens type 2 skyldes for mye glukagon.`,
        `Det er ingen forskjell, det er to navn på samme sykdom.`,
      ],
    },
    {
      sporsmal: `Hvordan kan miljøgifter påvirke hormonsystemet?`,
      riktig: `Noen miljøgifter ligner kroppens egne hormoner, slik at kroppen tar feil av dem og de sender uønskede beskjeder.`,
      feil: [
        `De dreper alle nervecellene de kommer i kontakt med.`,
        `De styrker hormonsystemet slik at det virker raskere.`,
        `De bygger muskler på samme måte som doping.`,
      ],
    },
  ],
  'kjemi': [
    {
      sporsmal: `Hva er et atom?`,
      riktig: `Den minste byggesteinen et stoff kan deles opp i.`,
      feil: [
        `Flere atomer som er satt sammen til en enhet.`,
        `Et elektrisk ladet stoff som gir fra seg H⁺-ioner.`,
        `Den minste delen av en celle.`,
      ],
    },
    {
      sporsmal: `Hvilken ladning har de tre partiklene i et atom?`,
      riktig: `Protoner er positive, nøytroner er uten ladning, og elektroner er negative.`,
      feil: [
        `Protoner er negative, nøytroner er positive, og elektroner er uten ladning.`,
        `Protoner er uten ladning, nøytroner er negative, og elektroner er positive.`,
        `Alle tre er positivt ladet.`,
      ],
    },
    {
      sporsmal: `Hva bestemmer hvilket grunnstoff et atom er?`,
      riktig: `Antallet protoner i kjernen.`,
      feil: [
        `Antallet nøytroner i kjernen.`,
        `Antallet elektroner i ytterste skall.`,
        `Hvor mange skall atomet har.`,
      ],
    },
    {
      sporsmal: `Hva er et grunnstoff?`,
      riktig: `Et stoff som bare består av én type atom.`,
      feil: [
        `Et stoff som består av minst to ulike atomer.`,
        `Den minste partikkelen i en kjemisk reaksjon.`,
        `Et atom som har blitt elektrisk ladet.`,
      ],
    },
    {
      sporsmal: `Hva forteller en gruppe (loddrett kolonne) i periodesystemet?`,
      riktig: `At stoffene har like mange elektroner i ytterste skall og dermed nokså like egenskaper.`,
      feil: [
        `At stoffene har like mange elektronskall.`,
        `At stoffene har nøyaktig samme antall nøytroner.`,
        `At stoffene alltid reagerer med hverandre.`,
      ],
    },
    {
      sporsmal: `Hva kjennetegner edelgassene?`,
      riktig: `De har fullt ytterste skall og er svært stabile, så de reagerer nesten ikke med andre stoffer.`,
      feil: [
        `De har ett elektron i ytterste skall og reagerer veldig lett.`,
        `De mangler ett elektron og reagerer lett for å lage salt.`,
        `De er myke metaller som lett gir fra seg elektroner.`,
      ],
    },
    {
      sporsmal: `Hva sier 8-regelen?`,
      riktig: `At atomer «ønsker seg» 8 elektroner i ytterste skall (2 i det innerste).`,
      feil: [
        `At alle atomer har 8 protoner i kjernen.`,
        `At et atom kan ha maksimalt 8 skall.`,
        `At det alltid dannes 8 nye stoffer i en reaksjon.`,
      ],
    },
    {
      sporsmal: `Hva skjer i en ionebinding?`,
      riktig: `Det ene atomet gir fra seg elektroner og blir positivt, det andre tar dem opp og blir negativt, og de motsatte ladningene holder sammen.`,
      feil: [
        `Atomene deler elektroner med hverandre likt.`,
        `Atomene bytter protoner i kjernen.`,
        `Atomene smelter sammen til ett nytt atom.`,
      ],
    },
    {
      sporsmal: `Hva er en elektronparbinding?`,
      riktig: `En binding der atomer deler elektroner med hverandre, som i vann og metan.`,
      feil: [
        `En binding der et atom gir fra seg elektroner til et annet.`,
        `En binding mellom to ioner med motsatt ladning.`,
        `En binding der nøytroner deles mellom to kjerner.`,
      ],
    },
    {
      sporsmal: `Hva betyr massebevaring i en kjemisk reaksjon?`,
      riktig: `At atomer verken kan skapes eller forsvinne, så det er like mange atomer før og etter.`,
      feil: [
        `At stoffene alltid veier mer etter reaksjonen.`,
        `At noen atomer forsvinner når nye stoffer dannes.`,
        `At massen alltid blir til energi.`,
      ],
    },
    {
      sporsmal: `Hva dannes i en forbrenningsreaksjon når et hydrokarbon brenner?`,
      riktig: `Karbondioksid og vann, samtidig som det frigjøres varme.`,
      feil: [
        `Oksygen og glukose, samtidig som det frigjøres varme.`,
        `Bare vanndamp, uten at det dannes noen gass.`,
        `Hydrogen og rent karbon.`,
      ],
    },
    {
      sporsmal: `Hva kjennetegner organisk kjemi?`,
      riktig: `Det er kjemien om stoffer som inneholder karbon.`,
      feil: [
        `Det er kjemien om stoffer som inneholder oksygen.`,
        `Det er kjemien om alle metaller.`,
        `Det er kjemien om syrer og baser.`,
      ],
    },
    {
      sporsmal: `Hva er et hydrokarbon?`,
      riktig: `Et organisk stoff som bare består av hydrogen og karbon.`,
      feil: [
        `Et stoff som bare består av hydrogen og oksygen.`,
        `Et stoff som inneholder en OH-gruppe.`,
        `Et stoff som gir fra seg H⁺-ioner i vann.`,
      ],
    },
    {
      sporsmal: `Hva er det som gir syrene de sure egenskapene?`,
      riktig: `H⁺-ionene som syremolekylene gir fra seg i vann.`,
      feil: [
        `OH-gruppene som syren tar opp fra vannet.`,
        `Nøytronene i syremolekylene.`,
        `At syren tar opp H⁺-ioner fra omgivelsene.`,
      ],
    },
    {
      sporsmal: `Hva viser pH-skalaen?`,
      riktig: `Hvor sur eller basisk en løsning er, på en skala fra 0 til 14.`,
      feil: [
        `Hvor mye et stoff veier.`,
        `Hvor mange atomer et molekyl består av.`,
        `Hvor raskt en kjemisk reaksjon går.`,
      ],
    },
    {
      sporsmal: `Hva er forskjellen på en sterk og en svak syre?`,
      riktig: `I en sterk syre gir alle molekylene fra seg H⁺-ioner, mens i en svak syre gir bare noen av dem fra seg H⁺-ioner.`,
      feil: [
        `En sterk syre har lav pH fordi den inneholder mer vann.`,
        `En sterk syre tar opp H⁺-ioner, mens en svak gir dem fra seg.`,
        `En sterk syre er alltid organisk, mens en svak alltid er uorganisk.`,
      ],
    },
    {
      sporsmal: `Hva er forskjellen på organiske og uorganiske syrer?`,
      riktig: `Organiske syrer er som regel svake og finnes i planter og dyr, mens uorganiske syrer ofte er sterke og finnes i mineraler.`,
      feil: [
        `Organiske syrer er alltid sterkere enn uorganiske syrer.`,
        `Organiske syrer inneholder ikke karbon, men det gjør uorganiske.`,
        `Det er ingen forskjell, det er to navn på det samme.`,
      ],
    },
    {
      sporsmal: `Hva skjer når en syre og en base nøytraliserer hverandre?`,
      riktig: `Basen tar opp H⁺-ionene fra syren, slik at både de sure og de basiske egenskapene forsvinner.`,
      feil: [
        `Syren og basen forsterker hverandre og blir farligere.`,
        `Det dannes en enda sterkere syre.`,
        `Løsningen blir mer basisk enn før.`,
      ],
    },
  ],
  'energi': [
    {
      sporsmal: `Hva er bevegelsesenergi?`,
      riktig: `Energien noe har når det er i bevegelse, som en rullende ball eller vinden.`,
      feil: [
        `Lagret energi som ennå ikke er satt i bevegelse.`,
        `Energien som finnes i en vedkubbe før den brennes.`,
        `Energien i et eple som henger i et tre.`,
      ],
    },
    {
      sporsmal: `Hva er et eksempel på stillingsenergi (potensiell energi)?`,
      riktig: `Vann som ligger i et vannmagasin høyt oppe.`,
      feil: [
        `Vinden som blåser over en åker.`,
        `Elektrisk strøm i en ledning.`,
        `Lyset som stråler ut fra en lyspære.`,
      ],
    },
    {
      sporsmal: `Hva sier energiloven?`,
      riktig: `Energi kan verken skapes eller forsvinne, bare overføres fra én form til en annen.`,
      feil: [
        `Energi blir borte litt etter litt hver gang den brukes.`,
        `Energi kan lages fra ingenting hvis man har en generator.`,
        `Energi finnes bare i to former som ikke kan byttes om.`,
      ],
    },
    {
      sporsmal: `Hva mener vi med at energi går fra høyverdig til lavverdig form?`,
      riktig: `Den går fra en form som er lett å utnytte til en som er vanskelig å utnytte, som spredt varme.`,
      feil: [
        `At energien blir kraftigere og lettere å bruke for hver overgang.`,
        `At mengden energi øker når den skifter form.`,
        `At energien forsvinner helt til slutt.`,
      ],
    },
    {
      sporsmal: `Hva er elektrisk strøm?`,
      riktig: `Elektroner som beveger seg i samme retning gjennom en ledning.`,
      feil: [
        `Protoner som hopper mellom to magneter.`,
        `Varme som sprer seg utover i en metalltråd.`,
        `Lys som sendes gjennom en ledning.`,
      ],
    },
    {
      sporsmal: `Hva trenger du for å lage (indusere) strøm?`,
      riktig: `En spole og en magnet som beveges i forhold til hverandre.`,
      feil: [
        `To like metaller som ligger helt i ro.`,
        `En sitron og et stykke papir.`,
        `En varm gjenstand og et termometer.`,
      ],
    },
    {
      sporsmal: `Hva er det egentlig som avgjør hvor sterkt et sitronbatteri blir?`,
      riktig: `Metallene som brukes, og hvor langt fra hverandre de står i spenningsrekka.`,
      feil: [
        `Hvor sur sitronen er.`,
        `Hvor stor sitronen er.`,
        `Hvor mange ledninger man kobler til.`,
      ],
    },
    {
      sporsmal: `Hvorfor kan lys reise gjennom verdensrommet, mens lyd ikke kan?`,
      riktig: `Fordi lys er stråling som ikke trenger noe stoff, mens lyd må ha et stoff å bevege seg i.`,
      feil: [
        `Fordi lys er mye raskere enn lyd.`,
        `Fordi lyd er en form for stråling, men lys er det ikke.`,
        `Fordi verdensrommet er for kaldt for lyd.`,
      ],
    },
    {
      sporsmal: `Hva er amplituden til en bølge?`,
      riktig: `Høyden fra midten av bølgen opp til en bølgetopp, den henger sammen med energien i bølgen.`,
      feil: [
        `Avstanden mellom to bølgetopper.`,
        `Antall bølger per sekund.`,
        `Hvor raskt bølgen beveger seg.`,
      ],
    },
    {
      sporsmal: `Hva skjer med en bølge når den brer seg utover et større område?`,
      riktig: `Amplituden blir mindre, mens frekvensen og bølgelengden er de samme.`,
      feil: [
        `Bølgelengden blir kortere, mens amplituden er den samme.`,
        `Frekvensen øker, mens amplituden er den samme.`,
        `Alt blir mindre: både amplitude, frekvens og bølgelengde.`,
      ],
    },
    {
      sporsmal: `Hva er forskjellen på masse og tyngde?`,
      riktig: `Masse er stoffmengden og er alltid den samme, mens tyngde er en kraft som varierer med hvor du er.`,
      feil: [
        `Masse er en kraft, mens tyngde er stoffmengden.`,
        `De er to ord for nøyaktig det samme.`,
        `Masse måles i newton, mens tyngde måles i kilogram.`,
      ],
    },
    {
      sporsmal: `Hvordan regner vi ut arbeid?`,
      riktig: `Arbeid = kraft × strekning.`,
      feil: [
        `Arbeid = kraft delt på tid.`,
        `Arbeid = masse × akselerasjon.`,
        `Arbeid = strekning delt på tid.`,
      ],
    },
    {
      sporsmal: `Hva forteller effekten oss?`,
      riktig: `Hvor raskt et arbeid blir gjort (arbeid delt på tid).`,
      feil: [
        `Hvor stor kraft som brukes.`,
        `Hvor lang strekning noe flyttes.`,
        `Hvor stor masse en gjenstand har.`,
      ],
    },
    {
      sporsmal: `Hva sier Newtons 2. lov?`,
      riktig: `Kraft = masse × akselerasjon (F = m · a).`,
      feil: [
        `Kraft = masse delt på akselerasjon.`,
        `Kraft = arbeid × tid.`,
        `Kraft = masse × fart.`,
      ],
    },
    {
      sporsmal: `Hvorfor er bilbeltet med på å redde liv i et kræsj?`,
      riktig: `Det gjør kræsjtiden lengre, slik at akselerasjonen blir mindre, og fordeler kraften over en større flate.`,
      feil: [
        `Det gjør at farten endres raskere, slik at kræsjet går fortere over.`,
        `Det øker tyngdekraften som holder deg fast i setet.`,
        `Det fjerner all kraft fra kræsjet helt.`,
      ],
    },
  ],
  'teknologi': [
    {
      sporsmal: `Hva handler teknologi om?`,
      riktig: `Å utvikle redskaper og systemer vi bruker i hverdagen.`,
      feil: [
        `Bare å lage avanserte datamaskiner og roboter.`,
        `Å studere planter og dyr i naturen.`,
        `Å forske på verdensrommet og stjernene.`,
      ],
    },
    {
      sporsmal: `Hva gjør en generator?`,
      riktig: `Lager elektrisk strøm ved å bevege en magnet inni en spole.`,
      feil: [
        `Endrer spenningen på strømmen i strømnettet.`,
        `Lagrer elektrisk energi til senere bruk.`,
        `Gjør digitale signaler om til analoge.`,
      ],
    },
    {
      sporsmal: `Hva er oppgaven til en transformator?`,
      riktig: `Å endre spenningen på strømmen.`,
      feil: [
        `Å lage strøm fra bevegelse.`,
        `Å gjøre vekselstrøm om til likestrøm.`,
        `Å måle hvor mye strøm som brukes.`,
      ],
    },
    {
      sporsmal: `Hvor kommer det meste av strømmen i Norge fra?`,
      riktig: `Vannkraft, som er en fornybar energikilde.`,
      feil: [
        `Kullkraft, som er en ikke-fornybar energikilde.`,
        `Atomkraft.`,
        `Solceller på hustak.`,
      ],
    },
    {
      sporsmal: `Hva er forskjellen på et analogt og et digitalt signal?`,
      riktig: `Et analogt signal endrer seg jevnt og flytende, mens et digitalt signal består av tall, oftest 0 og 1.`,
      feil: [
        `Et digitalt signal endrer seg jevnt, mens et analogt består av tall.`,
        `Analoge signaler er alltid trådløse, digitale er alltid med kabel.`,
        `Det er ingen forskjell, det er to ord for det samme.`,
      ],
    },
    {
      sporsmal: `Hva er spesielt med en diode?`,
      riktig: `Den slipper strømmen gjennom bare én vei.`,
      feil: [
        `Den lagrer strøm slik et batteri gjør.`,
        `Den øker spenningen i kretsen.`,
        `Den slipper strømmen like godt begge veier.`,
      ],
    },
    {
      sporsmal: `Hvorfor brukes lysdioder (LED) i stadig flere lamper?`,
      riktig: `De bruker lite energi og varer svært lenge.`,
      feil: [
        `De gir et mye varmere lys enn andre pærer.`,
        `De er billigst mulig å produsere.`,
        `De lager sin egen strøm og trenger ikke kobles til nettet.`,
      ],
    },
    {
      sporsmal: `Hvilke deler må til for at et elektronisk kommunikasjonssystem skal virke?`,
      riktig: `Blant annet en sender, en mottaker, informasjon, en adresse og en vei (ruting).`,
      feil: [
        `Bare en sender og litt strøm.`,
        `Kun en datamaskin med skjerm.`,
        `En generator og en transformator.`,
      ],
    },
    {
      sporsmal: `Hvilken type trådløs kommunikasjon har lengst rekkevidde?`,
      riktig: `Satellitt, som kan nå nesten hvor som helst på jorda.`,
      feil: [
        `Bluetooth.`,
        `Wifi.`,
        `NFC.`,
      ],
    },
    {
      sporsmal: `Hva er en IP-adresse?`,
      riktig: `En unik adresse som alt som kobler seg til internett får tildelt.`,
      feil: [
        `Navnet på nettleseren du bruker.`,
        `En type kabel som kobler datamaskiner sammen.`,
        `Et passord som beskytter nettsiden din.`,
      ],
    },
    {
      sporsmal: `Hvilke to verdier bygger det binære tallsystemet på?`,
      riktig: `0 og 1 (av og på).`,
      feil: [
        `1 til 10.`,
        `Bokstavene A og B.`,
        `Pluss og minus.`,
      ],
    },
    {
      sporsmal: `Hva er ASCII?`,
      riktig: `En standard der hver bokstav har sitt eget tall, så tekst kan gjøres om til binær kode.`,
      feil: [
        `Et program for å redigere bilder.`,
        `En type trådløst nettverk.`,
        `Navnet på den første datamaskinen.`,
      ],
    },
    {
      sporsmal: `Hva er en algoritme?`,
      riktig: `En nøyaktig oppskrift, steg for steg, på hvordan en oppgave skal løses.`,
      feil: [
        `En feil i et dataprogram.`,
        `En type datamaskin.`,
        `Et trådløst signal.`,
      ],
    },
  ],
  'seksualitet': [
    {
      sporsmal: `Hva menes med biologisk kjønn?`,
      riktig: `Det kjønnet vi er født med.`,
      feil: [
        `Hvem man blir tiltrukket av.`,
        `Hvilket kjønn man selv opplever at man er.`,
        `Hvilke klær man liker å gå med.`,
      ],
    },
    {
      sporsmal: `Hva handler seksuell legning om?`,
      riktig: `Hvem man blir forelsket i eller tiltrukket av.`,
      feil: [
        `Hvilket kjønn man er født med.`,
        `Hvilket kjønn man selv opplever at man er.`,
        `Hvilket prevensjonsmiddel man bruker.`,
      ],
    },
    {
      sporsmal: `Hva er kjønnsidentitet?`,
      riktig: `Hvilket kjønn man selv opplever at man er.`,
      feil: [
        `Det kjønnet legen bestemte ved fødselen.`,
        `Hvem man er glad i.`,
        `Antall kromosomer man har.`,
      ],
    },
    {
      sporsmal: `Hva er LHBTQ+?`,
      riktig: `En paraplybetegnelse for alle som har en annen kombinasjon av kjønn, legning og identitet enn den vanligste.`,
      feil: [
        `Navnet på en bestemt seksuell legning.`,
        `En type prevensjonsmiddel.`,
        `En seksuelt overførbar infeksjon.`,
      ],
    },
    {
      sporsmal: `Hva betyr det at noen er bifil?`,
      riktig: `At man kan bli tiltrukket av både eget og motsatt kjønn.`,
      feil: [
        `At man ikke blir tiltrukket av noen.`,
        `At man bare blir tiltrukket av samme kjønn.`,
        `At man er født med trekk fra begge kjønn.`,
      ],
    },
    {
      sporsmal: `Hva er en seksuelt overførbar infeksjon (SOI)?`,
      riktig: `En infeksjon som smitter ved seksuell kontakt.`,
      feil: [
        `En infeksjon man bare kan få av dårlig kosthold.`,
        `En sykdom som alltid smitter gjennom lufta.`,
        `En arvelig sykdom man er født med.`,
      ],
    },
    {
      sporsmal: `Hvilken SOI er vanligst blant ungdom?`,
      riktig: `Klamydia.`,
      feil: [
        `Syfilis.`,
        `Hepatitt B.`,
        `Hiv.`,
      ],
    },
    {
      sporsmal: `Hvorfor er det viktig å teste seg for SOI etter ubeskyttet sex?`,
      riktig: `Fordi mange SOI gir få eller ingen symptomer, men likevel kan smitte videre og skade kroppen.`,
      feil: [
        `Fordi alle SOI alltid gir tydelige symptomer med en gang.`,
        `Fordi SOI bare smitter hvis man tester seg.`,
        `Fordi testen i seg selv hindrer at man blir smittet.`,
      ],
    },
    {
      sporsmal: `Hvilket prevensjonsmiddel beskytter også mot seksuelt overførbare infeksjoner?`,
      riktig: `Kondom.`,
      feil: [
        `P-piller.`,
        `Spiral.`,
        `P-sprøyte.`,
      ],
    },
    {
      sporsmal: `Hva er hovedoppgaven til prevensjon?`,
      riktig: `Å hindre graviditet.`,
      feil: [
        `Å kurere seksuelt overførbare infeksjoner.`,
        `Å bestemme barnets kjønn.`,
        `Å øke den seksuelle lysten.`,
      ],
    },
    {
      sporsmal: `Hva beskytter HPV-vaksinen mot?`,
      riktig: `Kjønnsvorter og enkelte former for kreft.`,
      feil: [
        `Alle seksuelt overførbare infeksjoner.`,
        `Graviditet.`,
        `Hiv og aids.`,
      ],
    },
    {
      sporsmal: `Hva er forskjellen på hormonell og ikke-hormonell prevensjon?`,
      riktig: `Hormonell prevensjon, som p-piller, bruker hormoner for å hindre graviditet, mens ikke-hormonell, som kondom og kobberspiral, ikke gjør det.`,
      feil: [
        `Hormonell prevensjon beskytter mot SOI, det gjør aldri ikke-hormonell.`,
        `Det er ingen forskjell, det er to navn på det samme.`,
        `Ikke-hormonell prevensjon virker bare for menn.`,
      ],
    },
    {
      sporsmal: `Hvor kan ungdom få veiledning og prevensjon billig eller gratis?`,
      riktig: `Hos helsesykepleier eller på helsestasjon for ungdom.`,
      feil: [
        `Bare hos en privat lege mot full betaling.`,
        `Bare på apoteket uten å snakke med noen.`,
        `Ingen steder før man er myndig.`,
      ],
    },
  ],
  'vitenskap': [
    {
      sporsmal: `Hva er en hypotese?`,
      riktig: `En testbar påstand om hva man tror vil skje.`,
      feil: [
        `Et endelig svar som allerede er bevist.`,
        `Resultatet man sitter igjen med etter forsøket.`,
        `En feil som oppstod under forsøket.`,
      ],
    },
    {
      sporsmal: `Hva betyr ordet «teori» i vitenskapen?`,
      riktig: `En grundig testet forklaring som er støttet av svært mye bevis.`,
      feil: [
        `En løs gjetning man ikke har undersøkt.`,
        `En mening en forsker har uten bevis.`,
        `Et forsøk som ikke er gjennomført ennå.`,
      ],
    },
    {
      sporsmal: `Hva er en feilkilde?`,
      riktig: `Noe som kan ha påvirket resultatet og gjort det mindre sikkert.`,
      feil: [
        `Selve konklusjonen i et forsøk.`,
        `En kilde man har brukt til bakgrunnsteori.`,
        `Et annet ord for hypotese.`,
      ],
    },
    {
      sporsmal: `Hva er en kontrollgruppe?`,
      riktig: `En gruppe som ikke får behandlingen man tester, og som man sammenligner med.`,
      feil: [
        `Gruppen som får dobbelt så mye av behandlingen.`,
        `De som styrer hele forsøket.`,
        `En gruppe som kontrollerer at utstyret virker.`,
      ],
    },
    {
      sporsmal: `Hva er en modell i naturfag?`,
      riktig: `En forenkling av virkeligheten som hjelper oss å forstå noe vi ikke kan se direkte.`,
      feil: [
        `En nøyaktig kopi av virkeligheten i full størrelse.`,
        `En person som viser fram et forsøk.`,
        `Et endelig bevis på at noe er sant.`,
      ],
    },
    {
      sporsmal: `Hva er en naturlov?`,
      riktig: `Noe som alltid gjelder i naturen, som energiloven.`,
      feil: [
        `En regel politikerne har vedtatt om naturen.`,
        `En hypotese som ennå ikke er testet.`,
        `En forklaring som bare gjelder noen ganger.`,
      ],
    },
    {
      sporsmal: `Hva menes med kildekritikk?`,
      riktig: `Å vurdere om en kilde er til å stole på.`,
      feil: [
        `Å kritisere alle som er uenige med deg.`,
        `Å bruke så mange kilder som mulig uansett kvalitet.`,
        `Å skrive en konklusjon uten kilder.`,
      ],
    },
    {
      sporsmal: `Hva er bias?`,
      riktig: `Skjevhet eller forutinntatthet som kan farge et resultat i en bestemt retning.`,
      feil: [
        `Et måleinstrument som brukes i forsøk.`,
        `Et annet ord for et godt og sikkert resultat.`,
        `En type kontrollgruppe.`,
      ],
    },
    {
      sporsmal: `Hva er fagfellevurdering?`,
      riktig: `At andre forskere kontrollerer et arbeid før det blir publisert.`,
      feil: [
        `At forskeren karaktersetter sitt eget arbeid.`,
        `At elevene retter hverandres prøver.`,
        `At resultatet sjekkes av en datamaskin.`,
      ],
    },
    {
      sporsmal: `Hvilken rekkefølge følger en vitenskapelig undersøkelse ofte?`,
      riktig: `Hypotese, metode, resultat og konklusjon.`,
      feil: [
        `Konklusjon, resultat, hypotese og metode.`,
        `Resultat, hypotese, konklusjon og metode.`,
        `Metode, konklusjon, hypotese og resultat.`,
      ],
    },
    {
      sporsmal: `Hva er en variabel i et forsøk?`,
      riktig: `Noe som kan endre seg, og som man enten endrer med vilje eller måler.`,
      feil: [
        `Noe som aldri kan forandre seg.`,
        `Et annet ord for konklusjonen.`,
        `Selve forskeren som gjør forsøket.`,
      ],
    },
    {
      sporsmal: `Hvorfor er det viktig å nevne feilkilder i en rapport?`,
      riktig: `Fordi det viser hvor sikre resultatene er, og hva som kunne påvirket dem.`,
      feil: [
        `Fordi rapporten må være så lang som mulig.`,
        `Fordi feilkilder beviser at forsøket var mislykket.`,
        `Det er ikke viktig, feilkilder kan utelates.`,
      ],
    },
    {
      sporsmal: `Hva er forskjellen på en hypotese og en konklusjon?`,
      riktig: `Hypotesen er det vi tror på forhånd, mens konklusjonen er det vi finner ut etterpå.`,
      feil: [
        `Det er to ord for nøyaktig det samme.`,
        `Hypotesen kommer etter forsøket, konklusjonen før.`,
        `Hypotesen er alltid riktig, konklusjonen alltid feil.`,
      ],
    },
    {
      sporsmal: `Hvorfor er det viktig at forskning blir etterprøvd av andre?`,
      riktig: `For å sjekke at resultatene er pålitelige og ikke bare gjelder én gang.`,
      feil: [
        `For at forskeren skal få mer betalt.`,
        `For å gjøre forskningen vanskeligere å forstå.`,
        `Det er ikke viktig, ett forsøk er nok.`,
      ],
    },
  ],
};
