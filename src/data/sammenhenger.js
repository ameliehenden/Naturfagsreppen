// "Sammenhenger", tankekart/sol per emne.
// innhold: blanding av { type: 'tekst', verdi: '...' } og { type: 'bilde', src: '...' }
// i den rekkefølgen de skal vises på siden.
export const sammenhenger = {
  'energi': {
    senter: `Energi`,
    kortnavn: `energi`,
    bokser: [
      {
        navn: `Teknologi`,
        slug: `teknologi`,
        farge: `#1f6fa0`,
        innhold: [
          { type: 'tekst', verdi: `Alt teknologisk utstyr krever energi for å fungere. Elektriske kretser, motorer og datamaskiner er alle avhengige av elektrisk energi. Micro:Bit-kortet trenger strøm for å kjøre programmet sitt, og mobiltelefonen din bruker energi for hver eneste beregning den gjør.` },
          { type: 'tekst', verdi: `Samtidig er teknologi avgjørende for å produsere og distribuere energi. Solcellepaneler omdanner lysenergi til elektrisk energi, vindturbiner omdanner bevegelsesenergi til elektrisitet, og smarte nett-systemer sørger for at strøm kan overføres fra produsent til forbruker. Teknologisk utvikling er dermed nøkkelen til overgangen til fornybar energi.` },
        ],
      },
      {
        navn: `Fotosyntesen`,
        slug: `fotosyntesen`,
        farge: `#8db600`,
        innhold: [
          { type: 'tekst', verdi: `Sola er den absolutt viktigste energikilden på jorda, og fotosyntesen er porten som slipper solenergi inn i alle levende systemer. I kloroplastene i plantecellene omdannes lysenergi til kjemisk energi lagret i glukose:` },
          { type: 'liste', punkt: [`CO₂ + vann + sollys → glukose + oksygen`] },
          { type: 'tekst', verdi: `Glukosen som dannes inneholder lagret kjemisk energi som siden kan frigis gjennom celleånding, enten i plantecellen selv, eller i en dyrecelle som har spist planten. Fotosyntesen er selve startpunktet for energiflyten gjennom alle næringskjeder på jorda.` },
        ],
      },
      {
        navn: `Celleånding`,
        slug: `celesaanding`,
        farge: `#8db600`,
        innhold: [
          { type: 'tekst', verdi: `Energien som er lagret i glukose gjennom fotosyntesen, frigis gjennom celleånding i mitokondriene:` },
          { type: 'liste', punkt: [`glukose + oksygen → energi (ATP) + CO₂ + vann`] },
          { type: 'tekst', verdi: `ATP (adenosintrifosfat) er cellens «energivaluta», et lite molekyl som bærer energi dit den trengs og frigjør den når cellen trenger å gjøre arbeid. Celleånding foregår kontinuerlig i alle levende celler. Uten en konstant tilførsel av glukose og oksygen kan cellene ikke produsere nok energi til å overleve.` },
        ],
      },
      {
        navn: `Kjemi`,
        slug: `kjemi`,
        farge: `#8e44ad`,
        innhold: [
          { type: 'tekst', verdi: `Kjemiske reaksjoner kan enten frigjøre energi (eksoterme) eller kreve energi for å skje (endoterme). Forbrenning er et klassisk eksempel på en eksoterm reaksjon, kull, olje og gass reagerer med oksygen og frigjør store mengder varme og lys.` },
          { type: 'tekst', verdi: `Batterier er et annet eksempel på koblingen mellom kjemi og energi. I et batteri drives elektroner gjennom en krets av spontane kjemiske reaksjoner, og lagret kjemisk energi omdannes til elektrisk energi. Elektrolyse gjør det motsatte: elektrisk energi tvinger frem kjemiske reaksjoner som ellers ikke ville skjedd, for eksempel spalting av vann til hydrogen og oksygen.` },
        ],
      },
      {
        navn: `Klima`,
        slug: `klima`,
        farge: `#0e7a8a`,
        innhold: [
          { type: 'tekst', verdi: `Sammenhengen mellom energi og klima handler først og fremst om hvilke energikilder vi velger. Forbrenning av fossile brensler, kull, olje og naturgass, frigjør CO₂ som har vært lagret i millioner av år, og dette bidraget til den økte drivhuseffekten og global oppvarming.` },
          { type: 'tekst', verdi: `Fornybare energikilder som sol, vind og vannkraft produserer elektrisitet uten å slippe ut fossilt CO₂. Overgangen fra fossile til fornybare energikilder er derfor et av de viktigste tiltakene for å bremse klimaendringene. Fossil energi sto for over 80 % av verdens energiforbruk i 2023.` },
        ],
      },
      {
        navn: `Nervesystemet`,
        slug: `nervesystemet`,
        farge: `#c0392b`,
        innhold: [
          { type: 'tekst', verdi: `Hjernen og nervesystemet er blant de mest energikrevende delene av kroppen. Hjernen utgjør bare rundt 2 % av kroppsvekten, men bruker hele 20 % av kroppens energiforbruk. For at nerveceller skal kunne sende signaler, må de opprettholde et elektrisk potensial over membranen sin, og det krever kontinuerlig bruk av ATP.` },
          { type: 'tekst', verdi: `Signaloverføringen i en nervecelle skjer ved at natriumioner strømmer inn og kaliumioner strømmer ut over membranen. Etter at signalet er sendt, må ionegradientene gjenopprettes av ionepumper som bruker ATP. Dersom tilførselen av glukose eller oksygen stopper, for eksempel ved et slag, vil nervecellene raskt miste evnen til å sende signaler.` },
        ],
      },
      {
        navn: `Økologi`,
        slug: `okologi`,
        farge: `#1b7a3e`,
        innhold: [
          { type: 'tekst', verdi: `I alle økosystemer starter energiflyten med sola. Produsentene (planter og alger) fanger solenergi gjennom fotosyntesen og lagrer den som kjemisk energi i organisk materiale. Denne energien overføres til primærforbrukerne som spiser plantene, og videre til sekundærforbrukerne.` },
          { type: 'tekst', verdi: `For hvert ledd i næringskjeden går omtrent 90 % av energien tapt som varme, bare rundt 10 % overføres til neste nivå. Derfor er det alltid langt færre toppredatorer enn byttedyr i et økosystem, og derfor kan jorda forsørge langt flere mennesker dersom vi spiser planter fremfor kjøtt.` },
        ],
      },
    ],
  },
  'okologi': {
    senter: `Økologi`,
    kortnavn: `okologi`,
    bokser: [
      {
        navn: `Energi`,
        slug: `energi`,
        farge: `#f39c12`,
        innhold: [
          { type: 'tekst', verdi: `All energi i levende systemer starter med sola. Produsentene, planter og alger, fanger solenergi gjennom fotosyntesen og lagrer den som kjemisk energi i glukose. Denne energien overføres videre til forbrukerne som spiser dem, og videre til neste trofiske nivå.` },
          { type: 'tekst', verdi: `For hvert trinn i næringskjeden går omtrent 90 % av energien tapt som varme, bare ca. 10 % overføres til neste ledd. Det er derfor det alltid er langt færre toppredatorer enn byttedyr i et økosystem, og derfor kan jorda brødfø langt flere mennesker dersom vi spiser planter fremfor kjøtt.` },
        ],
      },
      {
        navn: `Teknologi`,
        slug: `teknologi`,
        farge: `#1f6fa0`,
        innhold: [
          { type: 'tekst', verdi: `Teknologi påvirker naturen på mange måter. Industriell produksjon, avskoging og forurensning ødelegger habitater og truer biologisk mangfold. Plastforurensning havner i næringsnett og skader dyr som forveksler plast med mat.` },
          { type: 'tekst', verdi: `Teknologi hjelper oss imidlertid også å overvåke og beskytte naturen. Droner og satellittbilder kartlegger vegetasjon og avskoging. Apper som Artsobservasjoner lar alle bidra til å registrere og overvåke naturmangfoldet. Bærekraftig teknologiutvikling kan redusere menneskenes fotavtrykk i naturen.` },
        ],
      },
      {
        navn: `Geologi`,
        slug: `geologi`,
        farge: `#0e7060`,
        innhold: [
          { type: 'tekst', verdi: `Berggrunnen og jordsmonnet er selve fundamentet for livet på land. Hvilke mineraler og næringsstoffer som finnes i jorda, bestemmer hvilke planter som kan vokse, og igjen hvilke dyr som kan leve der. Noen planter er spesialtilpasset kalkrik berggrunn, andre til sur og næringsfattig jord.` },
          { type: 'tekst', verdi: `Geologiske prosesser som vulkanutbrudd og erosjon frigjør næringsstoffer og kan skape nye habitater. Store geologiske hendelser, som de massive vulkanutbruddene som kan ha bidratt til masseutryddelsene i jordens historie, har omformet hele økosystemer og drevet evolusjon i nye retninger.` },
        ],
      },
      {
        navn: `Immunsystemet`,
        slug: `immunsystemet`,
        farge: `#f1c40f`,
        innhold: [
          { type: 'tekst', verdi: `Parasitter, bakterier og virus er en naturlig del av alle økosystemer og inngår i næringsnettene på lik linje med dyr og planter. Disse patogenene regulerer bestandsstørrelser, sykdom kan hindre at én art vokser ukontrollert og tar over et helt habitat.` },
          { type: 'tekst', verdi: `Biologisk mangfold påvirker også vår egen helse. I artsrike naturområder finnes en rekke organismer som konkurrerer med sykdomsfremkallende bakterier og virus, slik at sjansen for at én sykdom eksploderer er lavere. Nedgang i biologisk mangfold kan dermed øke risikoen for pandemier.` },
        ],
      },
      {
        navn: `Karbonkretsløpet`,
        slug: `karbonkretslopet`,
        farge: `#27ae60`,
        innhold: [
          { type: 'tekst', verdi: `Planter er motoren i karbonkretsløpet. Gjennom fotosyntesen tar de opp CO₂ fra atmosfæren og binder karbon i organisk materiale. Når planter og dyr dør, bryter nedbrytere ned det organiske materialet og frigjør karbonet tilbake til jorda og lufta. Slik sirkulerer karbon kontinuerlig mellom levende organismer og omgivelsene.` },
          { type: 'tekst', verdi: `Skogøkosystemer er spesielt viktige karbonlagre. Regnskog, torvmyr og boreal skog lagrer enorme mengder karbon over lang tid. Avskoging og tap av disse habitatene er dermed ikke bare et tap av biologisk mangfold, det frigjør også lagret CO₂ og forsterker klimaendringene.` },
        ],
      },
      {
        navn: `Fotosyntesen`,
        slug: `fotosyntesen`,
        farge: `#8db600`,
        innhold: [
          { type: 'tekst', verdi: `Fotosyntesen er selve grunnlaget for alle næringskjeder i et økosystem. Uten planter og alger som omdanner sollys til glukose, ville det ikke finnes mat til noen dyr. Produsentene er det første og absolutt uunnværlige leddet i ethvert næringsnett.` },
          { type: 'tekst', verdi: `Fotosyntesen produserer også oksygenet vi puster. Alt fritt oksygen i atmosfæren er et biprodukt av fotosyntesen, akkumulert over milliarder av år. Store skoger og hav fylt med planteplankton er dermed avgjørende ikke bare for å brødfø livet, men for å opprettholde den atmosfæren livet er avhengig av.` },
        ],
      },
    ],
  },
  'kjemi': {
    senter: `Kjemi`,
    kortnavn: `kjemi`,
    bokser: [
      {
        navn: `Teknologi`,
        slug: `teknologi`,
        farge: `#1f6fa0`,
        innhold: [
          { type: 'tekst', verdi: `Kjemi er fundamentet for utallige teknologier. Batterier i mobiltelefoner, elbiler og lagringsanlegg for fornybar energi er alle basert på kjemiske reaksjoner der elektroner overføres mellom stoffer. Solceller er laget av silisium og andre halvledermaterialer med nøye kontrollerte kjemiske egenskaper.` },
          { type: 'tekst', verdi: `Produksjonen av elektronikk og teknologiske komponenter krever en rekke kjemiske prosesser, fra utvinning og rensing av råmaterialer til etsing av kretskort og framstilling av plastkomponenter. Uten kjemi ville moderne teknologi ikke eksistere.` },
        ],
      },
      {
        navn: `Klima`,
        slug: `klima`,
        farge: `#0e7a8a`,
        innhold: [
          { type: 'tekst', verdi: `Klimaproblemet er i bunn og grunn et kjemisk problem. CO₂, metan og lystgass er kjemiske molekyler med den egenskapen at de absorberer langbølget varmestråling og holder på varmen i atmosfæren. Jo mer av disse molekylene det er i atmosfæren, jo sterkere drivhuseffekt.` },
          { type: 'tekst', verdi: `Kjemi forklarer også havforsuring: CO₂ løser seg i havvann og reagerer med vann til karbonsyre (H₂CO₃), som frigjør H⁺-ioner og senker pH. Det gjør det vanskeligere for muslinger, koraller og andre dyr å bygge skall av kalsiumkarbonat. Kjemikunnskap er dermed nødvendig for å forstå klimakonsekvensene fullt ut.` },
        ],
      },
      {
        navn: `Energi`,
        slug: `energi`,
        farge: `#f39c12`,
        innhold: [
          { type: 'tekst', verdi: `Energi frigjøres eller absorberes i kjemiske reaksjoner. Eksoterme reaksjoner, som forbrenning av kull, olje og gass, frigjør energi i form av varme og lys. Disse reaksjonene er grunnlaget for mesteparten av verdens energiproduksjon.` },
          { type: 'tekst', verdi: `I et batteri drives elektroner gjennom en krets av spontane kjemiske reaksjoner, og kjemisk energi omdannes til elektrisk energi. Hydrogen kan brukes som energibærer: elektrolyse spalter vann til hydrogen og oksygen ved hjelp av strøm, og hydrogenet kan siden brennes eller brukes i brenselceller, der kjemisk energi igjen omdannes til elektrisitet.` },
        ],
      },
      {
        navn: `Fotosyntesen`,
        slug: `fotosyntesen`,
        farge: `#8db600`,
        innhold: [
          { type: 'tekst', verdi: `Fotosyntesen er en kjemisk reaksjon der seks molekyler CO₂ og seks molekyler vann, ved hjelp av lysenergi, omdannes til ett glukosemolekyl og seks oksygenmolekyler: 6CO₂ + 6H₂O + lys → C₆H₁₂O₆ + 6O₂.` },
          { type: 'tekst', verdi: `Klorofyll er det grønne kjemiske fargestoffet i kloroplastene som fanger lysenergi og starter reaksjonskjeden. Fotosyntesen er altså en av de viktigste kjemiske prosessene på jorda, den binder karbon fra atmosfæren og lagrer solenergi i kjemisk form tilgjengelig for alle levende organismer.` },
        ],
      },
      {
        navn: `Celleånding`,
        slug: `celesaanding`,
        farge: `#8db600`,
        innhold: [
          { type: 'tekst', verdi: `Celleånding er den kjemiske prosessen som er motsatsen til fotosyntesen. Glukose reagerer med oksygen og brytes ned til CO₂ og vann, mens energi frigjøres og lagres i ATP-molekyler: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energi (ATP).` },
          { type: 'tekst', verdi: `Enzymer er biologiske katalysatorer, proteiner som gjør at disse kjemiske reaksjonene kan foregå raskt nok til å holde cellen i live, uten at temperaturen trenger å være veldig høy. Uten enzymer ville de fleste kjemiske reaksjonene i cellen gå altfor langsomt.` },
        ],
      },
      {
        navn: `Karbonkretsløpet`,
        slug: `karbonkretslopet`,
        farge: `#27ae60`,
        innhold: [
          { type: 'tekst', verdi: `Karbon er et av de viktigste grunnstoffene i kjemien og i livet. Det finnes som CO₂ i atmosfæren, som kalsiumkarbonat (CaCO₃) i kalkstein og skjell, som organiske molekyler i alt levende, og som kull, olje og gass under bakken.` },
          { type: 'tekst', verdi: `Kjemien bak karbonkretsløpet handler om at karbon stadig skifter form gjennom kjemiske reaksjoner: fotosyntese binder CO₂ i organiske molekyler, celleånding og forbrenning frigjør det som CO₂ igjen, og forvitring av kalkstein foregår gjennom syre-base-reaksjoner der karbonsyre løser opp kalsiumkarbonat.` },
        ],
      },
      {
        navn: `Hormonsystemet`,
        slug: `hormonsystemet`,
        farge: `#c0392b`,
        innhold: [
          { type: 'tekst', verdi: `Hormoner er kjemiske budbringere, molekyler som produseres ett sted i kroppen og transporteres via blodet til målorganer et annet sted. Steroidhormoner (som kjønnshormoner og kortisol) er bygd opp av kolesterol og er fettløselige. Peptidhormoner (som insulin og veksthormon) er proteiner og er vannløselige.` },
          { type: 'tekst', verdi: `pH-verdien i blodet er ekstremt nøye regulert (normalt rundt 7,4). Selv små avvik kan forstyrre enzymene som styrer alle livsprosessene. Nyrene, lungene og blodet samarbeider kjemisk om å holde pH stabil gjennom buffer-systemer basert på karbonsyre og bikarbonat.` },
        ],
      },
      {
        navn: `Livets utvikling`,
        slug: `livets-utvikling`,
        farge: `#8db600`,
        innhold: [
          { type: 'tekst', verdi: `DNA er et kjemisk molekyl bygd opp av fire typer nukleotider med basene adenin (A), tymin (T), guanin (G) og cytosin (C). Rekkefølgen på basene er den genetiske koden som bestemmer hvilke proteiner cellen lager. Proteiner er igjen kjemiske molekyler, lange kjedar av aminosyrer som folder seg til tredimensjonale strukturer.` },
          { type: 'tekst', verdi: `Mutasjoner er kjemiske endringer i DNA-sekvensen, for eksempel at én base byttes ut med en annen, eller at en bit av DNA slettes eller settes inn. Slike endringer kan oppstå av kjemiske årsaker (f.eks. påvirkning fra mutagene stoffer) eller feil under kopiering. Naturlig utvalg sorterer deretter hvilke kjemiske «oppskrifter» som fungerer best i et gitt miljø.` },
        ],
      },
    ],
  },
  'teknologi': {
    senter: `Teknologi`,
    kortnavn: `teknologi`,
    bokser: [
      {
        navn: `Klima`,
        slug: `klima`,
        farge: `#0e7a8a`,
        innhold: [
          { type: 'tekst', verdi: `Teknologi er både en del av klimaproblemet og løsningen. Kraftverk som brenner kull og gass, forbrenningsbiler og industrielle prosesser slipper ut store mengder CO₂. Samtidig er det teknologisk utvikling som gir oss solceller, vindturbiner, elbiler og karbonfangst.` },
          { type: 'tekst', verdi: `Avanserte klimamodeller, store datasystemer som simulerer atmosfæren, havet og isen, er avgjørende for å forstå og forutse klimaendringer. Kunstig intelligens og stordata brukes i dag til å optimere energisystemer og redusere utslipp. Uten teknologi har vi verken skapt klimaproblemet eller muligheten til å løse det.` },
        ],
      },
      {
        navn: `Immunsystemet`,
        slug: `immunsystemet`,
        farge: `#f1c40f`,
        innhold: [
          { type: 'tekst', verdi: `Vaksiner er en av de viktigste medisinteknologiske oppfinnelsene i historien. Ved å introdusere kroppen for et ufarlig antigen fra et smittestoff, trenes immunsystemet til å gjenkjenne og bekjempe den ekte infeksjonen raskt. Vaksiner har utryddet kopper og nesten utryddet polio.` },
          { type: 'tekst', verdi: `Medisinsk teknologi som PCR-tester (brukt under pandemien), blodprøveanalyse og bildediagnostikk gir oss innsikt i immunsystemets tilstand. Nye teknologier som mRNA-vaksiner, som ble utviklet mot COVID-19, åpner for raskere utvikling av vaksiner mot fremtidige sykdommer.` },
        ],
      },
      {
        navn: `Energi`,
        slug: `energi`,
        farge: `#f39c12`,
        innhold: [
          { type: 'tekst', verdi: `All teknologi er avhengig av energi for å fungere, fra den minste mikrokontroller til store industrianlegg. Datamaskiner, servere og internett alene bruker enorme mengder elektrisitet globalt. Energieffektiv design er derfor en viktig del av bærekraftig teknologiutvikling.` },
          { type: 'tekst', verdi: `Teknologi er samtidig nøkkelen til å produsere mer fornybar energi. Solcellepaneler, vindturbiner, smarte strømnett og batteriteknologi er alle teknologiske løsninger som gjør det mulig å erstatte fossile brensler. Uten teknologisk innovasjon kan vi ikke løse energiutfordringen.` },
        ],
      },
      {
        navn: `Kjemi`,
        slug: `kjemi`,
        farge: `#8e44ad`,
        innhold: [
          { type: 'tekst', verdi: `Kjemi er grunnlaget for de materialene teknologien er laget av. Halvledere i datachips, litium i batterier, silikon i solceller og plast i nesten alt annet, alle disse materialene er produkter av kjemisk forskning og produksjon.` },
          { type: 'tekst', verdi: `Kjemiske prosesser brukes også i selve fremstillingen av teknologi: etsing av kretskort, galvanisering av metaller, og produksjon av spesialglass til skjermer. Utviklingen av nye, bærekraftige materialer er en av de viktigste arenaene der kjemi og teknologi møtes.` },
        ],
      },
      {
        navn: `Geologi`,
        slug: `geologi`,
        farge: `#0e7060`,
        innhold: [
          { type: 'tekst', verdi: `Geologi og teknologi møtes tydelig i utvinning av råmaterialer. Metaller som kobber, jern, aluminium og sjeldne jordarter utvinnes fra berggrunnen og er uunnværlige i moderne elektronikk. Litium til batterier og silikon til solceller er geologiske ressurser vi er helt avhengige av for den grønne omstillingen.` },
          { type: 'tekst', verdi: `Teknologi brukes også til å studere geologi: seismografer registrerer jordskjelv og gir oss kunnskap om jordas indre, GPS-satellitter måler platebevegelser med millimeters nøyaktighet, og georadar kartlegger strukturer under bakken uten å grave.` },
        ],
      },
      {
        navn: `Økologi`,
        slug: `okologi`,
        farge: `#1b7a3e`,
        innhold: [
          { type: 'tekst', verdi: `Teknologi påvirker naturen, men hjelper oss også å forstå og beskytte den. Industriell forurensning, plastforsøpling og habitatødeleggelse er negative konsekvenser av teknologisk aktivitet. På den annen side gjør satellitter, droner og miljøsensorer det mulig å overvåke natur i stor skala.` },
          { type: 'tekst', verdi: `Digitale verktøy som Artsobservasjoner gjør det mulig for alle å bidra til kartlegging av biologisk mangfold. Bærekraftig teknologidesign, der produkter lages for å vare lenger, repareres og gjenvinnes, er avgjørende for å redusere teknologiens miljøpåvirkning.` },
        ],
      },
      {
        navn: `Seksualitet`,
        slug: `seksualitet`,
        farge: `#a01261`,
        innhold: [
          { type: 'tekst', verdi: `Teknologi har endret reproduksjon og seksuell helse radikalt. P-piller, spiral og hormonimplantater er teknologiske prevensjonsmidler som har gitt kvinner større kontroll over egen reproduksjon. IVF (in vitro-fertilisering) og assistert befruktning gjør det mulig for par som sliter med å få barn å bli foreldre.` },
          { type: 'tekst', verdi: `Internett og sosiale medier har stor innflytelse på unges forståelse av seksualitet, både positiv og negativ. Tilgang til informasjon er bedre enn noensinne, men eksponering for urealistiske fremstillinger av seksualitet er en utfordring. Digitale arenaer stiller nye krav til samtykke, personvern og kritisk mediakunnskap.` },
        ],
      },
      {
        navn: `Vitenskap`,
        slug: `vitenskap`,
        farge: `#2c3e50`,
        innhold: [
          { type: 'tekst', verdi: `Teknologi og vitenskap driver hverandre fremover i et gjensidig avhengighetsforhold. Vitenskapelige oppdagelser skaper ny teknologi, røntgenstråling, MRI og PCR er alle eksempler på teknologi som springer ut av grunnforskning. Og ny teknologi åpner igjen for ny vitenskap: mikroskopet muliggjorde cellebiologi, teleskopet astronomien.` },
          { type: 'tekst', verdi: `DNA-sekvensering, CRISPR-genredigering og kunstig intelligens er eksempler på teknologier som i dag revolusjonerer biologisk og medisinsk forskning. Den vitenskapelige metoden, systematisk observasjon, hypotesetesting og fagfellevurdering, er selve rammeverket som gjør det mulig å stole på at teknologien vi utvikler faktisk virker slik vi tror.` },
        ],
      },
    ],
  },
  'geologi': {
    senter: `Geologi`,
    kortnavn: `geologi`,
    bokser: [
      {
        navn: `Teknologi`,
        slug: `teknologi`,
        farge: `#1f6fa0`,
        innhold: [
          { type: 'tekst', verdi: `Teknologi gjør det mulig å studere jordens indre og overflate på måter som tidligere var umulige. Seismografer registrerer bølgene fra jordskjelv og avslører informasjon om jordas lagdeling. GPS-satellitter måler platebevegelser med millimeters nøyaktighet over år. Georadar kartlegger strukturer under bakken uten å grave.` },
          { type: 'tekst', verdi: `Utvinning av råmaterialer fra berggrunnen, metaller, mineraler og fossile brensler, er helt avhengig av avansert teknologi. Boring, sprengning, separasjon og rensing av mineralske ressurser er store teknologiske prosesser. De sjeldne jordartene som er nødvendige for solceller, vindturbiner og batterier, utvinnes fra geologiske forekomster verden over.` },
        ],
      },
      {
        navn: `Energi`,
        slug: `energi`,
        farge: `#f39c12`,
        innhold: [
          { type: 'tekst', verdi: `De fossile energikildene, kull, olje og naturgass, er geologiske ressurser. De dannes av rester av levende organismer som ble begravd under sedimenter for millioner av år siden og omdannet av trykk og varme. Utvinningen av disse ressursene er en geologisk og teknologisk prosess.` },
          { type: 'tekst', verdi: `Geologi åpner også for fornybar energi. Geotermisk energi utnytter varmen fra jordens indre, spesielt relevant i vulkansk aktive områder som Island. Vannkraft er indirekte geologisk: fjorder og daler formet av isbreer og erosjon er grunnlaget for store norske vannkraftmagasiner.` },
        ],
      },
      {
        navn: `Klima`,
        slug: `klima`,
        farge: `#0e7a8a`,
        innhold: [
          { type: 'tekst', verdi: `Geologi og klima henger tett sammen over lange tidsskalaer. Vulkanutbrudd kan sende store mengder støv og SO₂ høyt opp i atmosfæren og blokkere sollys, noe som kan gi kortvarig global avkjøling. Platetektonikk styrer havstrømmene og kontinentenes beliggenhet, som igjen påvirker klimaet over millioner av år.` },
          { type: 'tekst', verdi: `Geologiske lag er en arkiv over jordens klimahistorie. Iskjerner fra Antarktis inneholder luftbobler som forteller om atmosfærens sammensetning hundretusenvis av år tilbake. Sedimentære bergarter og fossiler viser tidligere klimasoner. Denne historien gir oss perspektiv på dagens klimaendringer og hjelper oss å forstå hva som er menneskeskapt.` },
        ],
      },
      {
        navn: `Kjemi`,
        slug: `kjemi`,
        farge: `#8e44ad`,
        innhold: [
          { type: 'tekst', verdi: `Bergarter og mineraler er kjemiske forbindelser. Granitt inneholder feltspat, kvarts og glimmer, alle med veldefinerte kjemiske formler. Kalkstein er kalsiumkarbonat (CaCO₃), dannet av skjell og koraller. Jern utvinnes fra jernmalm (Fe₂O₃) gjennom kjemiske smelteprosesser.` },
          { type: 'tekst', verdi: `Kjemisk forvitring er prosessen der vann og karbonsyre (H₂CO₃) bryter ned bergarter over tid. Regnvann løser CO₂ fra lufta og danner karbonsyre, som reagerer med kalkstein og løser det opp, det er slik huler dannes. Forvitringen frigjør mineraler og næringsstoffer til jorda, som er selve grunnlaget for plantevekst.` },
        ],
      },
      {
        navn: `Økologi`,
        slug: `okologi`,
        farge: `#1b7a3e`,
        innhold: [
          { type: 'tekst', verdi: `Berggrunnen bestemmer jordsmonn og dermed hvilke planter som kan vokse på et sted, og igjen hvilke dyr som lever der. Sur, næringsfattig fjellgrunn gir torvmyr og mager heivegetasjon. Kalkrik berggrunn gir kalkmark med stort artsmangfold. Geologi setter altså de biologiske rammebetingelsene for et økosystem.` },
          { type: 'tekst', verdi: `Store geologiske hendelser har gjentatte ganger omformet livet på jorda. Vulkanutbrudd har bidratt til masseutryddelser. Kontinentaldrift har splittet og forent landmasser og dermed bestemt hvor ulike arter har kunnet spre seg. Og istider har presset livssonene sørover og skapt nye habitater i kjølvannet.` },
        ],
      },
      {
        navn: `Livets utvikling`,
        slug: `livets-utvikling`,
        farge: `#8db600`,
        innhold: [
          { type: 'tekst', verdi: `Fossiler er rester av levende organismer bevart i sedimentære bergarter. De er det viktigste bevisgrunnlaget for evolusjonsteorien og viser tydelig at livet på jorda har forandret seg dramatisk over tid. Geologiske dateringsmetoder gjør det mulig å bestemme alderen på fossiler og sette dem inn i den biologiske tidslinjen.` },
          { type: 'tekst', verdi: `Kontinentaldrift forklarer mye av artenes geografiske utbredelse. Da Pangea delte seg, ble dyrepopulasjoner isolert på ulike kontinenter og utviklet seg i ulike retninger. Australia er det klassiske eksempelet: pungdyr dominerer fordi kontinentet skilte lag fra resten av verden lenge før placentale pattedyr hadde spredt seg dit.` },
        ],
      },
    ],
  },
  'celler-og-livets-utvikling': {
    senter: `Celler og livets utvikling`,
    kortnavn: `celler`,
    bokser: [
      {
        navn: `Immunsystemet`,
        slug: `immunsystemet`,
        farge: `#f1c40f`,
        innhold: [
          { type: 'tekst', verdi: `Immunforsvaret er bygd opp av spesialiserte celler. Hvite blodceller, som makrofager, B-celler og T-celler, er alle spesialiserte celletyper med svært ulike funksjoner, men alle har de oppstått fra de samme stamcellene i benmargen. Cellebiologi er dermed nødvendig for å forstå immunsystemet.` },
          { type: 'tekst', verdi: `Kreft oppstår når celler med mutasjoner i DNA begynner å dele seg ukontrollert og unnslipper immunsystemets overvåking. Immunsystemet patruljerer kontinuerlig etter celler som oppfører seg unormalt, dette er en sentral mekanisme som forhindrer at de fleste kreftceller utvikler seg til svulster.` },
        ],
      },
      {
        navn: `Karbonkretsløpet`,
        slug: `karbonkretslopet`,
        farge: `#27ae60`,
        innhold: [
          { type: 'tekst', verdi: `Alt levende materiale inneholder karbon, det er grunnstoffet i alle organiske molekyler, fra DNA til proteiner og fettmolekyler. Karbon tas opp fra atmosfæren gjennom fotosyntesen i plantecellene og bindes i organisk materiale. Når celler dør og brytes ned, frigjøres karbonet igjen.` },
          { type: 'tekst', verdi: `Celleånding i mitokondriene frigjør CO₂ som biprodukt hver gang celler brenner glukose for å lage ATP. Denne CO₂-en pustes ut og returnerer til atmosfæren. Slik er alle levende celler aktivt involvert i karbonkretsløpet, som karbonopptagere (via fotosyntesen) og karbonutsippere (via celleånding).` },
        ],
      },
      {
        navn: `Kjemi`,
        slug: `kjemi`,
        farge: `#8e44ad`,
        innhold: [
          { type: 'tekst', verdi: `Livet er kjemi. DNA er et kjemisk molekyl bygd av fire nukleotidbaser. Proteiner er kjemiske polymerer av aminosyrer som folder seg til tredimensjonale strukturer som bestemmer funksjonen. Enzymer er proteiner som fungerer som biologiske katalysatorer og gjør at de kjemiske reaksjonene i cellen kan foregå raskt nok.` },
          { type: 'tekst', verdi: `Cellemembranen er sammensatt av fosfolipider, molekyler med et vannelskende «hode» og en vannskyende «hale», som spontant danner et dobbeltlag. Alle disse strukturene er produkter av kjemiske egenskaper og samspill. For å forstå cellenes biologi trenger du grunnleggende kjemiforståelse.` },
        ],
      },
      {
        navn: `Energi`,
        slug: `energi`,
        farge: `#f39c12`,
        innhold: [
          { type: 'tekst', verdi: `Celler trenger en konstant tilførsel av energi for å leve. ATP, adenosintrifosfat, er cellens energivaluta og produseres i mitokondriene gjennom celleånding. Uten ATP kan cellen verken bevege seg, transportere stoffer over membranen, lage proteiner eller dele seg.` },
          { type: 'tekst', verdi: `Planteceller kan produsere sin egen energi ved å fange sollys i kloroplastene gjennom fotosyntesen. Dyreceller er avhengige av å spise for å få glukose. Energiflyten fra sola → fotosyntesen → glukose → celleånding → ATP er selve grunnfjellet i all biologi.` },
        ],
      },
      {
        navn: `Geologi`,
        slug: `geologi`,
        farge: `#0e7060`,
        innhold: [
          { type: 'tekst', verdi: `Fossiler, rester av celler og organismer bevart i sedimentære bergarter, er de viktigste bevisene for livets utvikling over tid. Geologiske dateringsmetoder som radiometrisk datering gjør det mulig å bestemme når ulike organismer levde, og dermed rekonstruere livets stamtre.` },
          { type: 'tekst', verdi: `Geologiske hendelser har drevet evolusjon. Masseutryddelsen for 66 millioner år siden, trolig forårsaket av et asteroidetreff som utløste enorme klimaendringer, utryddet ikke-fugledinosaurene og åpnet rommet for pattedyrenes storhetstid. Kontinentaldrift har isolert populasjoner og ført til artsdannelse.` },
        ],
      },
      {
        navn: `Teknologi`,
        slug: `teknologi`,
        farge: `#1f6fa0`,
        innhold: [
          { type: 'tekst', verdi: `Bioteknologi bruker levende celler og biologiske prosesser til å lage produkter og løse problemer. DNA-sekvensering gjør det mulig å lese hele genomet til en organisme på timer. CRISPR-teknologi lar forskere redigere spesifikke gener med stor presisjon. Disse teknologiene revolusjonerer medisin, landbruk og forskning.` },
          { type: 'tekst', verdi: `Lysmikroskopet ble oppfunnet på 1600-tallet og muliggjorde oppdagelsen av cellen. Elektronmikroskopet ga oss bilder av organeller. I dag kan fluorescensmikroskopi filme prosesser i levende celler i sanntid. Teknologisk utvikling har altså vært avgjørende for all vår kunnskap om celler og genetikk.` },
        ],
      },
      {
        navn: `Klima`,
        slug: `klima`,
        farge: `#0e7a8a`,
        innhold: [
          { type: 'tekst', verdi: `Klimaendringer driver evolusjon, men dagens endringer skjer raskere enn de fleste arter klarer å tilpasse seg. Naturlig utvalg krever mange generasjoner for å endre en populasjon, mens klimaet endres innen tiår. Mange arter risikerer utryddelse fordi de ikke rekker å tilpasse seg.` },
          { type: 'tekst', verdi: `På cellenivå er plantenes fotosyntese direkte koblet til CO₂-konsentrasjonen i atmosfæren. Høyere CO₂ kan øke plantevekst («gjødslingseffekten»), men samtidig reduserer varmere klima vanninnholdet i jord og kan hemme vekst. Endringer i fotosynteserate i hav og land påvirker hele karbonkretsløpet.` },
        ],
      },
    ],
  },
  'immunsystemet': {
    senter: `Immunsystemet`,
    kortnavn: `immunsystemet`,
    bokser: [
      {
        navn: `Seksualitet`,
        slug: `seksualitet`,
        farge: `#a01261`,
        innhold: [
          { type: 'tekst', verdi: `Seksuelt overførbare infeksjoner (SOI) er sykdommer som smitter via seksuell kontakt. Eksempler er klamydia, gonore, syfilis, herpes, HPV og HIV. Disse smittestoffene er godt tilpasset å unngå eller overvinne immunforsvaret, noe som gjør dem spesielt vanskelige å bekjempe uten behandling.` },
          { type: 'tekst', verdi: `Kondom er det eneste prevensjonsmiddelet som gir effektiv beskyttelse mot SOI, ikke bare mot graviditet. Vaksiner mot HPV (som kan føre til livmorhalskreft) og hepatitt B gis i dag til alle norske ungdommer som del av barnevaksinasjonsprogrammet. HIV angriper T-celler direkte og svekker immunforsvaret over tid, noe som fører til AIDS dersom ubehandlet.` },
        ],
      },
      {
        navn: `Teknologi`,
        slug: `teknologi`,
        farge: `#1f6fa0`,
        innhold: [
          { type: 'tekst', verdi: `Medisinsk teknologi har revolusjonert immunologien. PCR-tester kan oppdage spesifikt DNA fra bakterier eller virus i løpet av timer. Blodprøver måler antistoffnivåer og gir informasjon om immunstatus. MRI og CT-skanning viser betennelsesreaksjoner inne i kroppen.` },
          { type: 'tekst', verdi: `Vaksiner er en av medisinteknologiens største triumfer. Nye mRNA-vaksiner, som de mot COVID-19, lærer immuncellene å gjenkjenne et protein fra viruset, uten å introdusere levende virus. Denne teknologien kan nå brukes til å utvikle vaksiner mot kreft og andre sykdommer mye raskere enn tidligere.` },
        ],
      },
      {
        navn: `Celler`,
        slug: `celler`,
        farge: `#8db600`,
        innhold: [
          { type: 'tekst', verdi: `Immunsystemet er i sin helhet bygd opp av spesialiserte celler. Makrofager er store «spisecelletyper» som oppsluker og ødelegger inntrengere. B-celler produserer antistoffer som binder seg spesifikt til antigener. T-celler koordinerer immunresponsen og dreper infiserte celler direkte.` },
          { type: 'tekst', verdi: `Alle disse cellene oppstår fra felles stamceller i benmargen. Forståelsen av celledeling, differensiering (at celler spesialiserer seg) og kommunikasjon mellom celler er helt sentral for å forstå immunsystemet. Kreft i immunsystemet, som leukemi, oppstår når celledeling i hvite blodceller går ut av kontroll.` },
        ],
      },
      {
        navn: `Klima`,
        slug: `klima`,
        farge: `#0e7a8a`,
        innhold: [
          { type: 'tekst', verdi: `Klimaendringer påvirker spredningen av smittsomme sykdommer. Varmere klima gjør at mygg, som sprer malaria, denguefeber og Zika-virus, kan etablere seg i nye områder. Mildere vintre gjør at flåtten, som sprer skogflåttencefalitt og Lyme-sykdom, overlever og sprer seg nordover i Europa.` },
          { type: 'tekst', verdi: `Ekstremvær som flom kan forurense drikkevann og spre vannbårne sykdommer. Tørke kan svekke avlinger og føre til underernæring, som igjen svekker immunforsvaret. Klimaendringer er dermed ikke bare et miljøproblem, men også en folkehelseutfordring som legger økt press på immunsystemet til millioner av mennesker.` },
        ],
      },
      {
        navn: `Økologi`,
        slug: `okologi`,
        farge: `#1b7a3e`,
        innhold: [
          { type: 'tekst', verdi: `Sykdomsfremkallende organismer, virus, bakterier og parasitter, er en naturlig del av alle økosystemer. De regulerer bestandsstørrelser og inngår i næringsnett som biotiske faktorer. Rovdyr-byttedyr-dynamikk finnes ikke bare mellom store dyr, men også mellom patogener og vertene de lever i.` },
          { type: 'tekst', verdi: `Biologisk mangfold ser ut til å redusere risikoen for pandemier. I artsrike økosystemer finnes mange mulige verter for patogener, som «fortynner» smitterisikoen. Tap av biologisk mangfold, som avskoging, tvinger dyr og deres parasitter til å komme tettere innpå mennesker, noe som øker risikoen for at sykdommer hopper fra dyr til menneske.` },
        ],
      },
    ],
  },
  'nerve-og-hormonsystemet': {
    senter: `Nerve- og hormonsystemet`,
    kortnavn: `nerve`,
    bokser: [
      {
        navn: `Energi`,
        slug: `energi`,
        farge: `#f39c12`,
        innhold: [
          { type: 'tekst', verdi: `Hjernen er kroppens mest energikrevende organ. Den utgjør bare ca. 2 % av kroppsvekten, men bruker hele 20 % av kroppens energiforbruk i hvile. Nerveceller bruker ATP kontinuerlig for å opprettholde et elektrisk potensial over cellemembran, dette er forutsetningen for å kunne sende nervesignaler.` },
          { type: 'tekst', verdi: `Når et nervesignal (aksjonspotensial) sendes, strømmer natriumioner inn og kaliumioner ut over membranen. Etter signalet må ionepumper bruke ATP for å gjenopprette gradientene. Dersom hjernen mister tilførselen av glukose eller oksygen i bare noen minutter, som ved et hjerneslag, begynner nerveceller å dø.` },
        ],
      },
      {
        navn: `Immunsystemet`,
        slug: `immunsystemet`,
        farge: `#f1c40f`,
        innhold: [
          { type: 'tekst', verdi: `Nervesystemet og immunsystemet kommuniserer tettere enn vi lenge trodde. Kronisk stress aktiverer stresshormonet kortisol fra binyrene, og høye kortisolnivåer over tid svekker immunforsvaret. Det er grunnen til at langvarig stress øker risikoen for infeksjon og gjør det vanskeligere å bli frisk.` },
          { type: 'tekst', verdi: `Betennelsesreaksjoner, en del av immunforsvaret, kan påvirke hjernen og gi symptomer som tretthet, tristhet og konsentrasjonsvansker. Nyere forskning tyder på at depresjon hos noen pasienter er koblet til kronisk lavgradig betennelse. Samspillet mellom hjerne og immunsystem er et av de mest spennende forskningsområdene i dag.` },
        ],
      },
      {
        navn: `Kjemi`,
        slug: `kjemi`,
        farge: `#8e44ad`,
        innhold: [
          { type: 'tekst', verdi: `Hormoner er kjemiske molekyler som transporteres i blodet. Steroidhormoner, som østrogen, testosteron og kortisol, er bygd opp av kolesterol og er fettløselige. De kan passere direkte gjennom cellemembranen og binde seg til reseptorer inne i cellen. Peptidhormoner, som insulin og veksthormon, er proteiner og binder seg til reseptorer på celleoverflaten.` },
          { type: 'tekst', verdi: `Nevrotransmittere er kjemikalier som frigjøres i synapsespalten mellom nerveceller. Dopamin, serotonin, noradrenalin og acetylkolin er eksempler. Mange psykiatriske medisiner og rusmidler virker nettopp ved å påvirke konsentrasjonen eller aktiviteten til disse kjemiske signalstoffene i hjernen.` },
        ],
      },
      {
        navn: `Teknologi`,
        slug: `teknologi`,
        farge: `#1f6fa0`,
        innhold: [
          { type: 'tekst', verdi: `Medisinsk teknologi gir oss vindu inn i hjernen og nervesystemet. EEG (elektroencefalografi) registrerer elektrisk aktivitet i hjernen og brukes til å diagnostisere epilepsi og søvnforstyrrelser. MRI (magnetresonanstomografi) gir detaljerte bilder av hjernestruktur og aktivitet uten bruk av stråling.` },
          { type: 'tekst', verdi: `Nevrale grensesnitt, teknologi som kobler hjerne direkte til datamaskiner, er et raskt voksende felt. Cochleaimplantater gir hørsel til døve ved å stimulere hørselsnerven elektrisk. Dype hjernestimulatorimplantater hjelper pasienter med Parkinsons sykdom. I fremtiden kan slik teknologi gjenopprette bevegelse hos lamme.` },
        ],
      },
    ],
  },
  'seksualitet': {
    senter: `Seksualitet`,
    kortnavn: `seksualitet`,
    bokser: [
      {
        navn: `Teknologi`,
        slug: `teknologi`,
        farge: `#1f6fa0`,
        innhold: [
          { type: 'tekst', verdi: `Teknologi har endret reproduksjon og seksuell helse fundamentalt. Hormonelle prevensjonsmidler, p-piller, hormonspiral, implantat og p-ring, er alle produkter av kjemisk og medisinsk teknologi. IVF (in vitro-fertilisering) gjør det mulig å befrukte egg utenfor kroppen og har hjulpet millioner av par verden over til å få barn.` },
          { type: 'tekst', verdi: `Internett og sosiale medier former unges forståelse av seksualitet, kropp og relasjoner, både positivt og negativt. Tilgang til korrekt informasjon om seksuell helse er viktigere enn noensinne. Samtidig er eksponering for pornografi, kroppspress og seksuell trakassering på nett en reell utfordring som krever kritisk mediakunnskap og bevissthet om samtykke.` },
        ],
      },
      {
        navn: `Immunsystemet`,
        slug: `immunsystemet`,
        farge: `#f1c40f`,
        innhold: [
          { type: 'tekst', verdi: `Seksuelt overførbare infeksjoner (SOI) er sykdommer der smittestoffet er godt tilpasset å overleve i kroppsvæsker og overføres ved seksuell kontakt. Klamydia er den vanligste SOI i Norge og gir ofte ingen symptomer, men kan gi alvorlige komplikasjoner dersom den ikke behandles. HIV angriper T-hjelperceller og bryter ned immunforsvaret systematisk over år.` },
          { type: 'tekst', verdi: `Kondom gir effektiv beskyttelse mot de fleste SOI. Vaksine mot HPV, som kan føre til livmorhalskreft og kjønnsvorter, er en del av barnevaksinasjonsprogrammet. Vaksine mot hepatitt B gis også. God kunnskap om SOI og tilgang til testing og behandling er grunnleggende for seksuell helse.` },
        ],
      },
      {
        navn: `Nerve- og hormonsystemet`,
        slug: `nerve-og-hormonsystemet`,
        farge: `#c0392b`,
        innhold: [
          { type: 'tekst', verdi: `Puberteten settes i gang av hormoner fra hypofysen, som stimulerer kjønnskjertlene til å produsere kjønnshormoner. Testosteron hos gutter og østrogen hos jenter styrer utviklingen av kjønnsorganer, kroppsbehåring, muskelvekst og stemmeendring. Disse hormonene påvirker også humør, energinivå og seksuell interesse.` },
          { type: 'tekst', verdi: `Nervesystemet spiller en sentral rolle i seksuell respons. Oxytocin, «kosehormonet», frigjøres ved nær fysisk kontakt og styrker tilknytning mellom mennesker. Dopamin er koblet til nytelse og belønning. Samspillet mellom nervesystemet og hormonsystemet er dermed grunnleggende for seksualitet, tilknytning og relasjoner.` },
        ],
      },
      {
        navn: `Celler`,
        slug: `celler`,
        farge: `#8db600`,
        innhold: [
          { type: 'tekst', verdi: `Kjønnsceller, egg og sædceller, er helt spesielle celler. De er haploide, dvs. de inneholder bare halvparten av det normale antallet kromosomer (23 i stedet for 46 hos mennesker). Når egg og sædcelle smelter sammen ved befruktning, dannes en ny celle, zygoten, med fullt kromosomantall (46).` },
          { type: 'tekst', verdi: `Zygoten deler seg gjentatte ganger og differensierer seg til alle de ulike celletypene i kroppen, nerveceller, muskelceller, immunceller og alt annet. DNA fra begge foreldre blandes, og kombinasjonen av gener fra mor og far, pluss tilfeldige mutasjoner, er det som gjør hvert individ genetisk unikt.` },
        ],
      },
    ],
  },
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
          { type: 'tekst', verdi: `Forbrenningsreaksjoner er kjemiske reaksjoner der oksygen inngår i forbrenning av andre stoffer. Når vi brenner karbonholdige stoffer, slippes det ut varme, CO₂ og vanndamp. Siden forbrenning av karbonholdige (organiske) stoffer slipper ut CO₂, er det disse kjemiske reaksjonene som har skylda for klimaendringene. Likevel er det ikke alle forbrenningsreaksjoner som påvirker klimaet. Forskjellen på de som påvirker klimaet og de som ikke gjør det, ligger i om forbrenningen slipper ut CO₂ laget av karbonatomer som allerede befinner seg i det raske karbonkretsløpet, eller om forbrenningen tilfører «nytt» karbon som har vært fanget i kull, olje eller gass i millioner av år. To ulike forbrenningsreaksjoner er` },
          { type: 'liste', punkt: [`forbrenning av metangass`, `celleånding`] },
          { type: 'overskrift', verdi: `Forbrenning av metan` },
          { type: 'tekst', verdi: `Forbrenning av metangass skjer ved at høy temperatur får metan og oksygen til å reagere og danne vanndamp og karbondioksid. Denne reaksjonen frigir så mye varme at forbrenningen fortsetter så lenge det er oksygen og metan til stede. I bildet nedenfor ser du hvordan reaksjonsligningen skrives. Dersom kull, olje eller gass, som har blitt hentet opp fra under bakken eller havbunnen forbrennes, tilføres CO₂ til atmosfæren og bidrar til økt drivhuseffekt.` },
          { type: 'bilde', src: `sammenhenger/forbrenningsreaksjoner-1.png` },
          { type: 'overskrift', verdi: `Celleånding` },
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
          { type: 'tekst', verdi: `Vi var altså ikke føre var da vi startet med produksjon av kjøleskap og frysebokser med KFK-gasser. Da vi forstod denne sammenhengen, startet et internasjonalt samarbeid for å forby KFK-gasser og rette opp skadene på ozonlaget. Den dag i dag er ozonlaget langt på bedringens vei, men vi er ennå ikke helt i mål.` },
          { type: 'tekst', verdi: `Kjemi inngår også i forklaringen av havforsuring som følge av økt CO₂-opptak. CO₂-molekylene reagerer med vann og danner karbonsyre (H₂CO₃), som frigjør hydrogenioner (H⁺) og senker pH-verdien. Dette reduserer mengden karbonat som organismer trenger for å bygge skall.` },
          { type: 'tekst', verdi: `Når vi sier havforsuring, betyr det at havet blir surere, men vannet er faktisk fortsatt basisk. Siden industrialiseringen startet, har gjennomsnittlig pH i havoverflaten gått fra ca. 8,2 til litt under 8,1. Det høres veldig lite ut, men siden pH-skalaen er logaritmisk, tilsvarer dette en økning i surhet på omtrent 30 %.` },
          { type: 'bilde', src: `sammenhenger/ph-skala.png` },
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
          { type: 'tekst', verdi: `Verden jobber med å fase ut kull og gass, og heller gå over til grønne energikilder. Likevel sto kull alene for rundt 40 % av de energirelaterte CO₂-utslippene i 2023, og fossil energi samlet for over 80 % (kilde: IEA, 2024).` },
        ],
      },
      {
        navn: `Energi`,
        slug: `energi`,
        farge: `#f39c12`,
        innhold: [
          { type: 'tekst', verdi: `Når vi ser på sammenhengen mellom energi og klima, er det de ikke-fornybare energikildene, kull, olje og gass, som i størst grad bidrar til økt CO₂-innhold i atmosfæren. Rundt år 1900 lå antall CO₂-molekyler i atmosfæren på omtrent 295 ppm (parts per million). I dag har vi omtrent 427 ppm. Det er denne økningen som i stor grad gir oss klimaendringene og den økte drivhuseffekten vi ser nå.` },
          { type: 'tekst', verdi: `Sola er vår viktigste energikilde og står for nesten all energi på jorda.` },
          { type: 'bilde', src: `sammenhenger/energi.png` },
          { type: 'tekst', verdi: `Strålingsenergien fra sola kommer i form av UV-stråler og synlig lys, det vi kaller kortbølget stråling. De farligste UV-strålene stoppes av ozonlaget, mens synlig lys stort sett passerer gjennom atmosfæren.` },
          { type: 'tekst', verdi: `Jorda stråler selv ut energi, men er mye kaldere enn sola. Det er denne strålingen som ikke får passere fritt gjennom atmosfæren, fordi drivhusgassene absorberer den. Drivhusgassene varmes opp og stråler varme ut igjen, noe mot verdensrommet og noe tilbake til jorda. Jo mer drivhusgass i atmosfæren, jo mer varme holdes tilbake, noe som bidrar til global oppvarming.` },
        ],
      },
      {
        navn: `Karbonkretsløpet`,
        slug: `karbonkretslopet`,
        farge: `#27ae60`,
        innhold: [
          { type: 'tekst', verdi: `Karbon er et grunnstoff som hele tiden beveger seg mellom atmosfæren, havet, jorda og levende organismer. Denne sirkulasjonen kalles karbonkretsløpet. Alt liv inneholder karbon.` },
          { type: 'bilde', src: `sammenhenger/karbonkretslopet.png` },
          { type: 'tekst', verdi: `Karbon tas opp fra atmosfæren gjennom fotosyntese, der planter, alger og andre organismer omdanner CO₂ og sollys til organisk materiale. Levende organismer driver celleånding i mitokondriene, der glukose brytes ned til CO₂ som slippes ut igjen. Når organismer dør, brytes de ned av mikroorganismer, og karbonet frigjøres til jord og luft. Havet tar også opp enorme mengder CO₂ og fungerer som et viktig karbonlager. Denne delen av karbonkretsløpet kan kalles for det raske karbonkretsløpet.` },
          { type: 'tekst', verdi: `Gjennom millioner av år ble døde organismer begravd under jord og havbunn og omdannet til fossil energi, kull, olje og naturgass. Dette karbonet var «låst inne» og ute av kretsløpet. Når vi brenner fossil energi, frigjør vi dette lagrede karbonet tilbake til atmosfæren på ekstremt kort tid. Det som tar naturen millioner av år å lagre, slipper vi ut i løpet av tiår.` },
          { type: 'tekst', verdi: `Resultatet er at konsentrasjonen av CO₂ i atmosfæren stiger mye raskere enn jorda klarer å ta opp igjen. Som drivhusgass holder CO₂ på varme, og gjennomsnittstemperaturen på jorda stiger. Konsekvensene er mange: isbreer og polarisen smelter, havnivået stiger, ekstremvær blir hyppigere og kraftigere, havene blir surere (havforsuring), og økosystemer og artsmangfold trues.` },
        ],
      },
    ],
  },
  'vitenskap': {
    senter: `Vitenskap`,
    kortnavn: `vitenskap`,
    bokser: [
      {
        navn: `Teknologi`,
        slug: `teknologi`,
        farge: `#1f6fa0`,
        innhold: [
          { type: 'tekst', verdi: `Mye av teknologien vi bruker hver dag, er et resultat av forskning. Når forskere finner ut noe nytt om for eksempel elektrisitet, materialer eller lys, kan ingeniører bruke denne kunnskapen til å lage ny teknologi.` },
          { type: 'tekst', verdi: `Slik henger vitenskap og teknologi tett sammen: vitenskapen gir oss forståelsen, og teknologien gjør den om til praktiske løsninger som mobiler, solceller og medisinsk utstyr.` },
        ],
      },
      {
        navn: `Utviklingslæra`,
        slug: `utviklingslaera`,
        farge: `#6b8e00`,
        innhold: [
          { type: 'tekst', verdi: `Utviklingslæra, eller evolusjonsteorien, er et godt eksempel på hva en vitenskapelig teori er. I dagligtale betyr «teori» en gjetning, men i vitenskapen er en teori en grundig testet forklaring som er støttet av svært mye bevis.` },
          { type: 'tekst', verdi: `Evolusjonsteorien bygger på funn fra mange fagfelt, som fossiler, DNA og observasjoner av dyr og planter. Den er etterprøvd igjen og igjen, og er derfor blant de best underbygde teoriene vi har.` },
        ],
      },
      {
        navn: `Klima`,
        slug: `klima`,
        farge: `#0e7a8a`,
        innhold: [
          { type: 'tekst', verdi: `Klimaforskere bruker modeller for å forstå og forutsi klimaet. En modell er en forenkling av virkeligheten, ofte en stor datasimulering som regner på hvordan temperatur, hav og atmosfære henger sammen.` },
          { type: 'tekst', verdi: `Modeller kan aldri få med absolutt alt, men de er likevel et av de viktigste verktøyene vi har for å se hva som kan skje med klimaet i framtiden. Derfor er det viktig å forstå både hva modeller kan og ikke kan fortelle oss.` },
        ],
      },
      {
        navn: `Geologi`,
        slug: `geologi`,
        farge: `#0e7060`,
        innhold: [
          { type: 'tekst', verdi: `Geologi handler mye om årsak og virkning. Når kontinentalplatene beveger seg (årsak), oppstår det jordskjelv og vulkanutbrudd (virkning). Vitenskap går nettopp ut på å finne slike årsakssammenhenger.` },
          { type: 'tekst', verdi: `Ved å lete etter hva som forårsaker hva, kan forskere forklare hvorfor ting skjer, og noen ganger til og med forutsi det, slik som hvor det er størst fare for jordskjelv.` },
        ],
      },
      {
        navn: `Immunsystemet`,
        slug: `immunsystemet`,
        farge: `#b8860b`,
        innhold: [
          { type: 'tekst', verdi: `Innenfor medisin er forskningsetikk og kildekritikk svært viktig. Vaksiner og medisiner må testes grundig og fagfellevurderes før de tas i bruk, slik at vi vet at de er trygge og virker.` },
          { type: 'tekst', verdi: `Her ser vi forskjellen på skolemedisin og naturmedisin: skolemedisin bygger på grundig, etterprøvd og fagfellevurdert forskning, mens mange påstander innen naturmedisin ikke er testet på samme måte. Da er det viktig å bruke kildekritikk og spørre seg hva som faktisk er bevist.` },
        ],
      },
      {
        navn: `Kjemi`,
        slug: `kjemi`,
        farge: `#8e44ad`,
        innhold: [
          { type: 'tekst', verdi: `Atomer er altfor små til at vi kan se dem, så i kjemien bruker vi modeller for å forstå hvordan de er bygd opp. Skallmodellen og skymodellen er begge forenklinger som hver på sin måte hjelper oss å forklare hvordan atomer ser ut og oppfører seg.` },
          { type: 'tekst', verdi: `At vi har flere modeller av det samme, viser noe viktig om vitenskap: en modell er ikke virkeligheten selv, men et nyttig verktøy for å forstå den.` },
        ],
      },
      {
        navn: `Energi`,
        slug: `energi`,
        farge: `#c87f0a`,
        innhold: [
          { type: 'tekst', verdi: `Energiloven er et eksempel på en naturlov, noe som alltid gjelder i naturen. Den sier at energi ikke kan skapes eller forsvinne, bare gå over fra én form til en annen.` },
          { type: 'tekst', verdi: `Naturlover er noe av det vitenskapen leter etter: regler som holder hver eneste gang, uansett hvor og når vi undersøker dem. Slike lover gjør at vi kan forstå og forutsi hvordan verden virker.` },
        ],
      },
    ],
  },
};
