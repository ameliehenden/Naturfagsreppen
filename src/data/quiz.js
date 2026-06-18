// Quiz (flervalg) per emne. Nøkkelen er emnets id (se emner.js).
//
// Hvert spørsmål har:
//   sporsmal – selve spørsmålet
//   riktig   – det ene riktige svaret
//   feil     – tre gale (men troverdige) alternativer
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
      riktig: `Det innerste laget av jorda – fast jern og nikkel med temperaturer rundt 5000–6000°C.`,
      feil: [
        `Det innerste laget av jorda – flytende jern og nikkel.`,
        `Det innerste laget av jorda – smeltet stein og mineraler.`,
        `Det innerste laget av jorda – komprimert berggrunn under enormt trykk.`,
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
      riktig: `Magma er smeltet stein inne i jorda – det kalles lava når det bryter ut på overflaten.`,
      feil: [
        `Magma er varmere enn lava og flyter saktere.`,
        `Magma er smeltet stein på overflaten, mens lava er smeltet stein inne i jorda.`,
        `Lava inneholder mer gass enn magma og er derfor mer eksplosiv.`,
      ],
    },
    {
      sporsmal: `Hva er havbunnen yngre enn kontinentene?`,
      riktig: `Fordi ny havbunn dannes kontinuerlig ved midthavsryggene.`,
      feil: [
        `Fordi kontinentene er laget av eldre bergarter som ikke kan fornyes.`,
        `Fordi havbunnen smeltes ned i mantelen og dannes på nytt mye raskere enn kontinentene.`,
        `Fordi erosjon fra havet hele tiden sliper vekk de eldste lagene av havbunnen.`,
      ],
    },
    {
      sporsmal: `I hvilken del av atmosfæren skjer alt vær?`,
      riktig: `Troposfæren – det nederste laget, fra bakken opp til ca. 12 km høyde.`,
      feil: [
        `Stratosfæren – laget fra ca. 12 til 50 km høyde.`,
        `Mesosfæren – laget fra ca. 50 til 80 km høyde.`,
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
      riktig: `Celleåndingen – glukose og oksygen omdannes til energi, vann og CO₂.`,
      feil: [
        `Fotosyntesen – sollys, CO₂ og vann omdannes til glukose og oksygen.`,
        `Proteinsyntesen – DNA-oppskriften omsettes til proteiner.`,
        `Fordøyelsen av avfall og inntrengere ved hjelp av enzymer.`,
      ],
    },
    {
      sporsmal: `Hva er kloroplastenes funksjon?`,
      riktig: `Stedet der fotosyntesen foregår – de fanger sollys ved hjelp av fargestoffet klorofyll.`,
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
      riktig: `Forskjeller i arveegenskaper mellom individer – det er grunnlaget for naturlig utvalg og evolusjon.`,
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
