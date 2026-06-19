// "Sammenhenger" – tankekart/sol per emne.
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
          { type: 'tekst', verdi: `Glukosen som dannes inneholder lagret kjemisk energi som siden kan frigis gjennom celleånding – enten i plantecellen selv, eller i en dyrecelle som har spist planten. Fotosyntesen er selve startpunktet for energiflyten gjennom alle næringskjeder på jorda.` },
        ],
      },
      {
        navn: `Celleånding`,
        slug: `celesaanding`,
        farge: `#8db600`,
        innhold: [
          { type: 'tekst', verdi: `Energien som er lagret i glukose gjennom fotosyntesen, frigis gjennom celleånding i mitokondriene:` },
          { type: 'liste', punkt: [`glukose + oksygen → energi (ATP) + CO₂ + vann`] },
          { type: 'tekst', verdi: `ATP (adenosintrifosfat) er cellens «energivaluta» – et lite molekyl som bærer energi dit den trengs og frigjør den når cellen trenger å gjøre arbeid. Celleånding foregår kontinuerlig i alle levende celler. Uten en konstant tilførsel av glukose og oksygen kan cellene ikke produsere nok energi til å overleve.` },
        ],
      },
      {
        navn: `Kjemi`,
        slug: `kjemi`,
        farge: `#8e44ad`,
        innhold: [
          { type: 'tekst', verdi: `Kjemiske reaksjoner kan enten frigjøre energi (eksoterme) eller kreve energi for å skje (endoterme). Forbrenning er et klassisk eksempel på en eksoterm reaksjon – kull, olje og gass reagerer med oksygen og frigjør store mengder varme og lys.` },
          { type: 'tekst', verdi: `Batterier er et annet eksempel på koblingen mellom kjemi og energi. I et batteri drives elektroner gjennom en krets av spontane kjemiske reaksjoner, og lagret kjemisk energi omdannes til elektrisk energi. Elektrolyse gjør det motsatte: elektrisk energi tvinger frem kjemiske reaksjoner som ellers ikke ville skjedd – for eksempel spalting av vann til hydrogen og oksygen.` },
        ],
      },
      {
        navn: `Klima`,
        slug: `klima`,
        farge: `#0e7a8a`,
        innhold: [
          { type: 'tekst', verdi: `Sammenhengen mellom energi og klima handler først og fremst om hvilke energikilder vi velger. Forbrenning av fossile brensler – kull, olje og naturgass – frigjør CO₂ som har vært lagret i millioner av år, og dette bidraget til den økte drivhuseffekten og global oppvarming.` },
          { type: 'tekst', verdi: `Fornybare energikilder som sol, vind og vannkraft produserer elektrisitet uten å slippe ut fossilt CO₂. Overgangen fra fossile til fornybare energikilder er derfor et av de viktigste tiltakene for å bremse klimaendringene. Fossil energi sto for over 80 % av verdens energiforbruk i 2023.` },
        ],
      },
      {
        navn: `Nervesystemet`,
        slug: `nervesystemet`,
        farge: `#c0392b`,
        innhold: [
          { type: 'tekst', verdi: `Hjernen og nervesystemet er blant de mest energikrevende delene av kroppen. Hjernen utgjør bare rundt 2 % av kroppsvekten, men bruker hele 20 % av kroppens energiforbruk. For at nerveceller skal kunne sende signaler, må de opprettholde et elektrisk potensial over membranen sin – og det krever kontinuerlig bruk av ATP.` },
          { type: 'tekst', verdi: `Signaloverføringen i en nervecelle skjer ved at natriumioner strømmer inn og kaliumioner strømmer ut over membranen. Etter at signalet er sendt, må ionegradientene gjenopprettes av ionepumper som bruker ATP. Dersom tilførselen av glukose eller oksygen stopper – for eksempel ved et slag – vil nervecellene raskt miste evnen til å sende signaler.` },
        ],
      },
      {
        navn: `Økologi`,
        slug: `okologi`,
        farge: `#1b7a3e`,
        innhold: [
          { type: 'tekst', verdi: `I alle økosystemer starter energiflyten med sola. Produsentene (planter og alger) fanger solenergi gjennom fotosyntesen og lagrer den som kjemisk energi i organisk materiale. Denne energien overføres til primærforbrukerne som spiser plantene, og videre til sekundærforbrukerne.` },
          { type: 'tekst', verdi: `For hvert ledd i næringskjeden går omtrent 90 % av energien tapt som varme – bare rundt 10 % overføres til neste nivå. Derfor er det alltid langt færre toppredatorer enn byttedyr i et økosystem, og derfor kan jorda forsørge langt flere mennesker dersom vi spiser planter fremfor kjøtt.` },
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
          { type: 'tekst', verdi: `Forbrenningsreaksjoner er kjemiske reaksjoner der oksygen inngår i forbrenning av andre stoffer. Når vi brenner karbonholdige stoffer, slippes det ut varme, CO₂ og vanndamp. Siden forbrenning av karbonholdige (organiske) stoffer slipper ut CO₂, er det disse kjemiske reaksjonene som har skylda for klimaendringene. Likevel er det ikke alle forbrenningsreaksjoner som påvirker klimaet. To ulike forbrenningsreaksjoner er` },
          { type: 'liste', punkt: [`forbrenning av metangass`, `celleånding`] },
          { type: 'tekst', verdi: `Forbrenning av metangass skjer ved at høy temperatur får metan og oksygen til å reagere og danne vanndamp og karbondioksid. Denne reaksjonen frigir så mye varme at forbrenningen fortsetter så lenge det er oksygen og metan til stede. I bildet nedenfor ser du hvordan reaksjonsligningen skrives. Dersom kull, olje eller gass, som har blitt hentet opp fra under bakken eller havbunnen forbrennes, tilføres CO₂ til atmosfæren og bidrar til økt drivhuseffekt.` },
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
          { type: 'tekst', verdi: `Verden jobber med å fase ut kull og gass, og heller gå over til grønne energikilder. Likevel sto kull alene for rundt 40 % av de energirelaterte CO₂-utslippene i 2023, og fossil energi samlet for over 80 % (kilde: IEA, 2024).` },
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
