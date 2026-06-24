// Skriftlige oppgaver per emne. Nøkkelen er emnets id (se emner.js).
//
// Hvert spørsmål har:
//   sporsmal, selve spørsmålet
//   fasit   , modellsvaret som vises til eleven for sammenligning
//
// FASITEN ER ET UTKAST, se gjerne over og rett ordlyd.
export const oppgaver = {
  'klima-og-baerekraft': [
    {
      sporsmal: `Hva er forskjellen på vær og klima?`,
      fasit: `Vær er tilstanden vi opplever akkurat nå, nedbør, vind, temperatur, og som endrer seg fra dag til dag. Klima er gjennomsnittsværet for et område over en lang periode, vanligvis 30 år.`,
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
      fasit: `Hvit havis reflekterer mye av sollyset tilbake til verdensrommet. Når havisen smelter, blir mer mørkt hav synlig, som tar opp mer varme. Da blir det varmere, og enda mer is smelter, en selvforsterkende effekt.`,
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
      fasit: `Klima- og miljøproblemer kjenner ingen landegrenser, utslipp i ett land påvirker hele kloden. Derfor må landene samarbeide om felles mål og avtaler (for eksempel Parisavtalen) for at tiltakene skal virke.`,
    },
    {
      sporsmal: `Hva er en feedbackmekanisme (tilbakekoblingsmekanisme)? Gi et eksempel.`,
      fasit: `En feedbackmekanisme er når en endring forsterker (eller demper) seg selv. Eksempel: når havis smelter, tar mørkt hav opp mer varme, som gjør at enda mer is smelter, en selvforsterkende effekt.`,
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
      fasit: `Det ytre immunforsvaret er kroppens første barriere, huden og slimhinnene som holder smittestoff ute av kroppen. Slim, tårer, spytt og magesyre hjelper også til. Det indre immunforsvaret tar over hvis smittestoffene kommer seg inn i kroppen, og består av de hvite blodcellene.`,
    },
    {
      sporsmal: `Hva er forskjellen på det medfødte og det ervervede immunforsvaret?`,
      fasit: `Det medfødte forsvaret er du født med. Det virker raskt og angriper alle inntrengere på samme måte, og fagocyttene er viktigst her. Det ervervede forsvaret utvikler seg gjennom livet og er spesialisert, det lærer seg å kjenne igjen bestemte smittestoff. Lymfocyttene hører til her, og det tar gjerne noen dager før dette forsvaret kommer skikkelig i gang.`,
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
      fasit: `En vaksine inneholder svekkede eller døde smittestoff, eller deler av dem. Når du vaksineres, tror kroppen at den er smittet og setter i gang det ervervede forsvaret: den lager antistoffer og danner hukommelsesceller, uten at du blir ordentlig syk. Møter du det ekte smittestoffet senere, kjenner hukommelsescellene det igjen og slår det ned før du rekker å bli syk.`,
    },
    {
      sporsmal: `Hva er flokkimmunitet, og hvorfor er vaksiner viktige for folkehelsen?`,
      fasit: `Flokkimmunitet er når så mange i en befolkning er immune at smittestoffet ikke klarer å spre seg. Da beskyttes også de som ikke kan vaksinere seg selv, for eksempel nyfødte og personer med svekket immunforsvar. Slik har vaksiner gjort at sykdommer som tidligere tok mange liv, i dag er sjeldne. Derfor er de noe av det viktigste vi har for folkehelsen.`,
    },
    {
      sporsmal: `Hvorfor regnes ikke virus som levende?`,
      fasit: `Et virus består bare av arvestoff med en proteinkappe rundt, og det mangler kjennetegnene på levende organismer. Det kan ikke formere seg selv, men må kapre en levende celle og få den til å lage nye virus. Derfor regnes ikke virus som levende.`,
    },
    {
      sporsmal: `Gi et eksempel på hvordan kunnskap om immunforsvaret brukes i moderne teknologi.`,
      fasit: `Forskere prøver å bruke kroppens egne immunceller til å behandle kreft, dette kalles immunterapi. Kreftceller kan «gjemme seg» for immunforsvaret ved hjelp av proteinet AHR. Klarer forskerne å hindre kreftcellene i å skjule seg, blir det mye lettere for immuncellene å finne og drepe dem.`,
    },
  ],
  'celler-og-livets-utvikling': [
    {
      sporsmal: `Hvilke kjennetegn har alt som er levende?`,
      fasit: `Alt levende er bygd opp av celler, tar til seg næring og skaffer seg energi, vokser og formerer seg, reagerer på ytre påvirkninger og inneholder arvestoff (DNA).`,
    },
    {
      sporsmal: `Hvilke deler består en plantecelle av? Nevn så mange du kan.`,
      fasit: `En plantecelle har blant annet cellevegg, cellemembran, cytoplasma (cellevæske), cellekjerne, mitokondrier, ribosomer, kloroplaster og en vakuole (saftrom).`,
    },
    {
      sporsmal: `Hva er forskjellen på en dyrecelle og en plantecelle?`,
      fasit: `En plantecelle har vakuole, cellevegg og kloroplaster, som dyrecellen ikke har. Dyrecellen har til gjengjeld lysosomer, som plantecellen ikke har.`,
    },
    {
      sporsmal: `Skriv fotosyntesen med ord i stedet for kjemiske symboler, og forklar hvorfor fotosyntesen er så viktig for livet på jorda.`,
      fasit: `Vann + karbondioksid blir ved hjelp av sollys til glukose + oksygen. Fotosyntesen er den eneste prosessen som lager oksygen til atmosfæren, og uten oksygen hadde ikke livet slik vi kjenner det vært mulig. I tillegg er fotosyntesen grunnlaget for all næring: alle næringskjeder starter med planter, som produserer sin egen energi gjennom fotosyntesen og er mat for andre arter videre oppover i næringskjeden.`,
    },
    {
      sporsmal: `I mitokondriene skjer en motsatt prosess av fotosyntesen. Forklar det du vet om denne prosessen.`,
      fasit: `Prosessen heter celleånding og foregår i mitokondriene. Her frigjøres energien som er lagret i glukose. Organismen får i seg glukose gjennom maten og puster inn oksygen, og celleåndingen omdanner dette til energi, vann og karbondioksid. Celleåndingen er altså det motsatte av fotosyntesen.`,
    },
    {
      sporsmal: `Hva er et kromosom, og hva er et gen? Hvor i cella finner du dem?`,
      fasit: `Et kromosom er en gigantisk kveil av DNA, og det finnes i cellekjernen. Mennesker har 23 kromosompar, ett sett fra mor og ett sett fra far. Et gen er en bit av DNA-et som inneholder koden til én bestemt egenskap, for eksempel øyenfarge.`,
    },
    {
      sporsmal: `I ribosomene lages kroppens proteiner. Forklar så godt du kan hvordan kroppen bygger et protein.`,
      fasit: `I cellekjernen ligger DNA-et. Det blir kopiert av mRNA ved hjelp av baseparene (A–T og C–G). Kopien forlater cellekjernen og drar til ribosomet, som bygger proteinet etter oppskriften. Ribosomet leser tre og tre baser om gangen, en triplettkode, og hver triplett bestemmer hvilken aminosyre som skal settes inn og i hvilken rekkefølge. Det finnes rundt 20 ulike aminosyrer, og rekkefølgen på dem avgjør hvilket protein som blir laget.`,
    },
    {
      sporsmal: `Når genvariantene vi arver fra mor og far er ulike (heterozygote), kommer bare egenskapen til den ene fram, mens den andre må vike. Hva kaller vi genet som må vike, og hva kaller vi genet som kommer fram?`,
      fasit: `Genet som må vike kaller vi recessivt (vikende). Genet som kommer fram kaller vi dominant.`,
    },
    {
      sporsmal: `En svart kanin (Ff) har én dominant (F) og én recessiv (f) genvariant for farge. Den krysses med en hvit kanin (ff) som har to recessive genvarianter. Sett opp et kryssingsskjema og forklar hvilke farger ungene kan få.`,
      fasit: `I kryssingsskjemaet kombinerer vi F og f fra den svarte kaninen med f og f fra den hvite. Da får vi to ruter med Ff og to ruter med ff. Det betyr at omtrent halvparten av ungene blir svarte (Ff, fordi F er dominant) og halvparten blir hvite (ff). Forholdet blir altså 50 % svarte og 50 % hvite.`,
    },
    {
      sporsmal: `Hvilken sammenheng er det mellom karbonkretsløpet og to prosesser som skjer i cellene?`,
      fasit: `Karbonkretsløpet består i hovedsak av fotosyntesen og celleåndingen. I fotosyntesen hentes karbondioksid fra atmosfæren og bygges om til glukose, slik at karbonet blir en del av alt levende. Celleåndingen er den motsatte prosessen: karbonet i glukosen omdannes tilbake til karbondioksid, som slippes ut i atmosfæren igjen.`,
    },
  ],
  'nerve-og-hormonsystemet': [
    {
      sporsmal: `Hvordan er en nervecelle bygd opp, og hvilken del tåler ikke å bli skadet?`,
      fasit: `En nervecelle har en cellekjerne og en lang tråd som kalles akson, og det er gjennom aksonet nervesignalene sendes. Hvis cellekjernen blir skadet, dør nervecellen, og kroppen lager ikke nye nerveceller i hjernen. Hvis bare aksonet blir skadet eller kuttet, kan det derimot gro ut igjen så lenge skaden ikke er for stor. Det er derfor en som har blitt lam noen ganger kan trene seg opp igjen.`,
    },
    {
      sporsmal: `Nervesystemet er delt i to deler. Hva heter de, og hva kjennetegner dem?`,
      fasit: `Nervesystemet består av sentralnervesystemet og det perifere nervesystemet. Sentralnervesystemet er hjernen og ryggmargen, og det er beskyttet av hodeskallen og ryggraden. Det perifere nervesystemet er alle nervene som går ut i resten av kroppen.`,
    },
    {
      sporsmal: `Koble systemet til riktig beskrivelse: Det autonome systemet, det motoriske systemet og det sensoriske systemet.`,
      fasit: `Det sensoriske systemet sender informasjon fra sansene inn til sentralnervesystemet. Det motoriske systemet sender informasjon fra sentralnervesystemet til musklene og styrer dermed bevegelsene. Det autonome systemet sender informasjon fra sentralnervesystemet til kjertler, glatt muskulatur og hjertet.`,
    },
    {
      sporsmal: `Hvilken oppgave har veslehjernen?`,
      fasit: `Veslehjernen hjelper storehjernen med å styre og finjustere bevegelsene våre, slik at de blir jevne og presise.`,
    },
    {
      sporsmal: `Fortell om smertesansen. Hva er spesielt med den?`,
      fasit: `Smertesansen er en forsvarsmekanisme. Den forteller oss at det vi gjør kan skade kroppen, og smerten skremmer oss slik at vi lar være å gjøre noe som er farlig. Slik passer vi ekstra godt på neste gang.`,
    },
    {
      sporsmal: `Noen ganger reagerer kroppen før vi kjenner smerte. Hva kalles dette, og hvordan går nervesignalet?`,
      fasit: `Dette kalles en refleks. Nervesignalet går fra et sted på kroppen til ryggmargen, med beskjed om at vi kan bli skadet. Ryggmargen sender da signal rett tilbake om å flytte kroppsdelen vekk med en gang. Signalet går ikke helt til hjernen, fordi det ville tatt for lang tid. Først etterpå når signalet hjernen, og da kjenner vi smerten.`,
    },
    {
      sporsmal: `Hva er et hormon, og hva er likheter og forskjeller mellom hormonsystemet og nervesystemet?`,
      fasit: `Et hormon er et kjemisk signalstoff som sendes med blodet med en beskjed til en bestemt mottaker. Likheten er at både hormonsystemet og nervesystemet gir beskjeder, bare på ulike måter. Forskjellene er at nervesignaler går raskt og virker kort tid (som en e-post), mens hormoner går langsommere og virker lenge (som et postbud). Nervesignaler sendes gjennom nervene til et bestemt sted, mens hormoner sendes med blodet til hele kroppen.`,
    },
    {
      sporsmal: `Nevn tre hormonkjertler der det lages hormoner, og forklar hvorfor hypofysen kalles den overordnede hormonkjertelen.`,
      fasit: `Eksempler på hormonkjertler er hypofysen, bukspyttkjertelen og binyrene (andre er skjoldbruskkjertelen, eggstokkene og testiklene). Hypofysen kalles «sjefen» fordi den styrer de andre hormonkjertlene: den sender ut hormoner som forteller de andre kjertlene om de skal lage mer eller mindre hormon, og passer slik på at kroppen har riktig mengde hormoner i blodet.`,
    },
    {
      sporsmal: `Nevn to hormoner, og forklar hvilken oppgave de har i kroppen.`,
      fasit: `Adrenalin er et «kjemp eller flykt»-hormon som skilles ut når vi blir redde. Det gir raskere hjerteslag slik at mer oksygen kommer til hjernen og musklene, og gjør oss klare til å kjempe eller flykte. Insulin og glukagon styrer mengden glukose i blodet: insulin senker blodsukkeret og lagrer energi som fett, mens glukagon øker blodsukkeret igjen når kroppen trenger energi.`,
    },
    {
      sporsmal: `Hva er forskjellen på legemidler, rusmidler og doping, og hvorfor hører de hjemme i dette emnet?`,
      fasit: `Legemidler brukes for å forebygge, lindre eller kurere sykdom, og er til hjelp for kroppen når de brukes riktig. Rusmidler tas for å bli ruset, altså for å endre humør og bevissthet; de virker på signalstoffene i hjernen og kan skade kroppen og gi avhengighet (for eksempel alkohol, nikotin og narkotika). Doping er bruk av forbudte stoffer for å prestere bedre i idrett, for eksempel anabole steroider som ligner testosteron. Alle tre hører hjemme i dette emnet fordi de griper inn i signalene i nerve- og hormonsystemet.`,
    },
  ],
  'okologi': [
    {
      sporsmal: `Hva betyr økologi?`,
      fasit: `Økologi er læren om samspillet i naturen.`,
    },
    {
      sporsmal: `Hva er et økosystem, og hvilke økosystemer finnes i Norge? Nevn minst tre.`,
      fasit: `Et økosystem er et avgrenset område med en ensartet natur, der det er et samspill mellom bestemte biotiske og abiotiske faktorer som gir området et typisk utseende og bestemte arter. Eksempler på økosystemer i Norge er blåbærskog, fjæra, myr og innsjøer.`,
    },
    {
      sporsmal: `Vi deler alt i et økosystem inn i biotiske og abiotiske faktorer. Hva betyr dette, og gi noen eksempler på hver av dem.`,
      fasit: `Det betyr at vi deler alt inn i en levende og en ikke-levende del. Biotisk betyr levende, og abiotisk betyr ikke-levende. Viktige biotiske faktorer kan være ulike plantearter, dyrearter og plankton. Viktige abiotiske faktorer kan være temperatur, nedbør/vann og lys.`,
    },
    {
      sporsmal: `Forklar hvordan de abiotiske faktorene påvirker de biotiske faktorene i et økosystem.`,
      fasit: `De abiotiske (ikke-levende) faktorene bestemmer hvilke organismer som kan leve i et område. En endring i temperatur, enten kaldere eller varmere, kan for eksempel føre til at planter og dyr som er tilpasset den gamle temperaturen får problemer eller dør. Det kan også føre til at nye arter dukker opp, eller at området endrer naturtype (for eksempel mer eller mindre is), slik at det blir helt andre plante- og dyrearter der.`,
    },
    {
      sporsmal: `Hva er forskjellen på et biom og et økosystem? Nevn også hvilke biomer som finnes i Norge.`,
      fasit: `Et biom er et stort område med en bestemt type vegetasjon (planteliv). Biomer er svært store og endrer seg ofte med breddegradene. Et økosystem er et mindre område, og handler ikke bare om plantene, men også om dyrelivet og de ikke-levende faktorene som vann, is, jord og temperatur. I Norge finner vi blant annet biomene sommergrønn løvskog, barskog og tundra.`,
    },
    {
      sporsmal: `Planter er spesielle sammenlignet med dyr på grunn av fotosyntesen. Forklar hvorfor planter kalles produsenter.`,
      fasit: `Planter bruker fotosyntesen til å lage glukose, som er næring for planten selv. De produserer altså sin egen mat, og kalles derfor produsenter.`,
    },
    {
      sporsmal: `Hvilke produsenter er viktige for økosystemene i havet?`,
      fasit: `Planteplankton og alger er svært viktige produsenter for økosystemene i havet. De ligger nesten alltid nederst i næringskjeden.`,
    },
    {
      sporsmal: `Forklar forskjellen på en næringskjede og et næringsnett.`,
      fasit: `En næringskjede viser hvem som blir spist av hvem, i en rett linje fra produsent til forbruker. Et næringsnett viser en større del av økosystemet, fordi de fleste artene er mat for mer enn én annen art. Næringsnettet henger dermed sammen flere næringskjeder.`,
    },
    {
      sporsmal: `Hva er forskjellen på jord og jordsmonn?`,
      fasit: `Jord er alt løsmateriale som ligger over det faste fjellet, for eksempel mold, leire, sand, grus og store steiner. Morenejord og marin leire er vanlige typer i Norge. Jordsmonn er det vi til daglig kaller «jord»: det øverste laget av jorda som er påvirket av levende organismer. Brunjord og podsol er to vanlige typer jordsmonn i Norge.`,
    },
  ],
  'geologi': [
    {
      sporsmal: `Omtrent når og hvor oppstod livet på jorda?`,
      fasit: `Livet oppstod for omtrent 3,7–3,8 milliarder år siden, og det oppstod i havet. De første organismene var encellede bakterier (blågrønnbakterier).`,
    },
    {
      sporsmal: `Hvordan oppstod det oksygengass i atmosfæren? Beskriv så godt du kan.`,
      fasit: `De første organismene laget sin egen mat ved hjelp av fotosyntesen. Til det trengte de karbondioksid, som fantes i lufta, og hydrogen. Hydrogenet hentet de fra vannmolekyler, som de spaltet i fotosyntesen. De brukte selve hydrogenet, mens oksygenet ble til overs som et avfallsstoff. Oksygenet økte først sakte i havet, og da havet ikke kunne ta opp mer, begynte oksygenet å stige opp i atmosfæren.`,
    },
    {
      sporsmal: `Hvordan er jorda bygd opp inni?`,
      fasit: `Innerst ligger den indre kjernen, som er fast. Rundt den ligger den ytre kjernen, som er mykere og flytende. Deretter kommer mantelen, som består av varm, flytende stein som kalles magma. Ytterst ligger jordskorpen, som er fast og svært tynn, krymper vi jorda til størrelsen av et eple, er jordskorpen like tynn som skallet på eplet.`,
    },
    {
      sporsmal: `Gi så mange bevis du kan på at teorien om kontinentaldrift stemmer.`,
      fasit: `Det finnes flere bevis: 1) Kontinentene passer sammen som puslespillbrikker, noe som tyder på at de en gang hang sammen i ett superkontinent kalt Pangea. 2) Man har funnet like plante- og dyrefossiler på begge sider av havet. 3) De samme bergartene og fjellkjedene fortsetter fra den ene siden av havet til den andre. 4) Satellitter måler at platene fortsatt beveger seg i dag. 5) Vulkaner og jordskjelv opptrer langs grensene mellom platene.`,
    },
    {
      sporsmal: `Hva er en midthavsrygg?`,
      fasit: `En midthavsrygg er en fjellrygg på havbunnen, der to plater beveger seg fra hverandre. Når platene skilles, strømmer magma opp i sprekken, størkner og danner ny havbunn. Det er blant annet ved en midthavsrygg at Nord-Amerika og Europa ble skilt fra hverandre da Pangea sprakk opp.`,
    },
    {
      sporsmal: `Vi hører av og til at vi «stammer fra apene». Forklar hvorfor dette ikke er helt riktig.`,
      fasit: `Vi stammer ikke fra dagens aper, men vi er i slekt med dem. Mennesket og menneskeapene har en felles forfader langt tilbake i tid. For flere millioner år siden delte etterkommerne etter denne forfaderen seg i ulike retninger, én linje utviklet seg til dagens aper, og en annen linje utviklet seg til mennesket. Det er altså feil å si at vi nedstammer fra apene; vi har bare et felles opphav.`,
    },
    {
      sporsmal: `Hva er Charles Darwin kjent for, og hva mente han med «naturlig utvalg»?`,
      fasit: `Charles Darwin er kjent for utviklingslæren (evolusjonsteorien). Han mente at alt liv på jorda er i slekt og har et felles opphav. Med «naturlig utvalg» mente han at de individene som er best tilpasset miljøet, har størst sjanse til å overleve og få avkom. Dermed fører de egenskapene (genene) sine videre til neste generasjon, og over tid blir de gunstige egenskapene vanligere i bestanden.`,
    },
    {
      sporsmal: `Hvordan forklarer evolusjonsteorien at ulike arter har utviklet seg? Gi minst ett eksempel.`,
      fasit: `Tilfeldige genetiske endringer (mutasjoner) skaper variasjon innenfor en art. Gjennom naturlig utvalg overlever og formerer de best tilpassede individene seg, slik at de gunstige egenskapene blir vanligere. Over lang tid kan dette føre til at det oppstår nye arter. Et eksempel er Darwins finker på Galápagosøyene: finker med felles opphav utviklet ulike nebbformer tilpasset maten på hver øy. Under en tørke overlevde de finkene som hadde kraftige nebb og kunne knekke harde frø, og avkommet deres fikk større nebb, et tegn på at arten endret seg over tid.`,
    },
  ],
  'kjemi': [
    {
      sporsmal: `Hva er forskjellen på et atom og et molekyl?`,
      fasit: `Et atom er den minste byggesteinen, bygd opp av små partikler (protoner, nøytroner og elektroner). Et molekyl er flere atomer satt sammen. Med andre ord: én byggekloss er et atom, mens flere byggeklosser bundet sammen er et molekyl.`,
    },
    {
      sporsmal: `Hvilken elektrisk ladning har de tre partiklene et atom er bygd opp av, og hva kalles et elektrisk ladet atom?`,
      fasit: `Protoner er positive, nøytroner er uten ladning (nøytrale), og elektroner er negative. Et atom som har blitt elektrisk ladet, kalles et ion. Atomet blir ladet ved å gi fra seg eller ta opp elektroner.`,
    },
    {
      sporsmal: `Hvorfor bruker vi modeller av atomet, og hvilke to modeller kjenner du til?`,
      fasit: `Atomer er så små at vi ikke kan se dem, og derfor bruker vi modeller for å vise hvordan de kan se ut. To vanlige modeller er skallmodellen, som er enkel og god å lære av, og skymodellen, som ligner mer på hvordan forskere tror atomet egentlig ser ut. Ingen av modellene er helt riktige, men de er nyttige på hver sin måte.`,
    },
    {
      sporsmal: `Tegn et karbonatom (på et ark), og forklar hvordan det er bygd opp.`,
      fasit: `Karbon er grunnstoff nummer 6, så det har 6 protoner i kjernen og 6 elektroner i skallene. Det innerste skallet har plass til bare 2 elektroner, så de 4 siste ligger i det ytterste skallet. I kjernen finnes også nøytroner, antallet kan variere, men en tommelfingerregel er at det er omtrent like mange nøytroner som protoner.`,
    },
    {
      sporsmal: `Hvordan er periodesystemet bygd opp? Forklar hva grupper, perioder og atomnummer er.`,
      fasit: `Periodesystemet er en tabell over alle grunnstoffene, sortert etter atomnummer (antall protoner i kjernen). De vannrette radene kalles perioder; stoffer i samme periode har like mange elektronskall. De loddrette kolonnene kalles grupper; stoffer i samme gruppe har like mange elektroner i ytterste skall og dermed nokså like egenskaper. Atomnummeret forteller hvor mange protoner et atom har, og dermed hvilket grunnstoff det er.`,
    },
    {
      sporsmal: `Vanlig bordsalt (natriumklorid) er laget av natrium og klor. Hva heter bindingen som holder atomene sammen, og hvordan foregår den?`,
      fasit: `Bindingen heter ionebinding. Natrium har ett elektron i ytterste skall og gir det fra seg, slik at det blir et positivt ion (Na⁺). Klor mangler ett elektron på å få fullt ytterskall og tar opp dette elektronet, slik at det blir et negativt ion (Cl⁻). De motsatte ladningene trekker hverandre til seg og holder sammen.`,
    },
    {
      sporsmal: `Et oksygenatom og to hydrogenatomer deler et par elektroner hver. Hva heter denne bindingen?`,
      fasit: `Det er en elektronparbinding. Atomene gir ikke fra seg elektroner, men deler dem, slik at alle oppnår fullt ytterste skall. Fordi de deler de samme elektronene, må de holde sammen, og sammen danner de et vannmolekyl.`,
    },
    {
      sporsmal: `Hva mener vi med at det alltid er massebevaring i en kjemisk reaksjon?`,
      fasit: `Massebevaring betyr at atomer verken kan skapes eller forsvinne. Det er nøyaktig like mange atomer av hvert slag før og etter reaksjonen, de er bare satt sammen på en ny måte, slik som legoklosser man bygger om. Derfor må det være like mange atomer på begge sider av en reaksjonslikning.`,
    },
    {
      sporsmal: `Tegn opp pH-skalaen og forklar hvordan du bruker den.`,
      fasit: `pH-skalaen går fra 0 til 14. Løsninger med pH under 7 er sure, pH lik 7 er nøytralt, og pH over 7 er basisk. Jo nærmere 0, desto surere er løsningen; jo nærmere 14, desto mer basisk. For å finne pH bruker vi en indikator, for eksempel pH-papir.`,
    },
    {
      sporsmal: `Gi eksempel på tre syrer og to baser, og hva vi bruker dem til.`,
      fasit: `Eksempler på syrer: sitronsyre og eddiksyre (organiske syrer som brukes i matlaging) og saltsyre eller svovelsyre (uorganiske syrer som brukes i industrien, blant annet til kunstgjødsel og sprengstoff). Eksempler på baser: natriumhydroksid (lut, som løser opp fett og brukes til å rense avløp) og ammoniakk (som brukes til vindusvask fordi den løser fett uten å skumme).`,
    },
    {
      sporsmal: `Forklar forskjellen på organiske og uorganiske syrer.`,
      fasit: `Organiske syrer er som regel svake syrer som finnes i planter og dyr, og de brukes ofte i matlaging (for eksempel sitronsyre og eddiksyre). Uorganiske syrer er ofte sterke syrer som finnes i mineraler, og de brukes mye i industrien (for eksempel saltsyre og svovelsyre). Det er de uorganiske syrene som kan være svært farlige.`,
    },
    {
      sporsmal: `Hva er en indikator, og hvordan kan du finne ut om en vannløsning er sur eller basisk?`,
      fasit: `En indikator er et stoff som skifter farge etter hvor surt eller basisk noe er. Du kan finne ut om en løsning er sur eller basisk ved å bruke en indikator, for eksempel pH-papir som skifter farge, eller naturlige indikatorer som enkelte planter, frukter og grønnsaker.`,
    },
    {
      sporsmal: `Hva er forskjellen på en sterk og en svak syre, og hva mener vi med at syrer og baser nøytraliserer hverandre?`,
      fasit: `En syre gir fra seg H⁺-ioner i vann. I en sterk syre gir alle (eller mange) molekyler fra seg H⁺-ioner, mens i en svak syre gir bare noen få fra seg H⁺-ioner, flere H⁺-ioner gjør syren sterkere. At syrer og baser nøytraliserer hverandre, betyr at når de blandes, tar basen opp («spiser») H⁺-ionene fra syren. Da forsvinner både de sure og de basiske egenskapene, og løsningen blir nøytral.`,
    },
  ],
  'energi': [
    {
      sporsmal: `Hva mener vi med bevegelsesenergi? Gi et eksempel.`,
      fasit: `Bevegelsesenergi er energien noe har når det er i bevegelse. Eksempler er elektrisitet (elektroner som beveger seg), vind, lys og en ball som ruller.`,
    },
    {
      sporsmal: `Hva mener vi med potensiell energi (stillingsenergi)? Gi et eksempel.`,
      fasit: `Potensiell energi er energi som er lagret, og som kan bli til bevegelse. Et eple som henger i et tre er et eksempel, den potensielle energien er like stor som bevegelsesenergien eplet får når det faller. Vann i en demning, en vedkubbe og mat er andre eksempler.`,
    },
    {
      sporsmal: `Hva sier energiloven?`,
      fasit: `Energiloven sier at energi ikke kan skapes eller forsvinne, bare overføres fra én form til en annen. For eksempel kan bevegelsesenergien i vinden overføres til elektrisk energi ved hjelp av en vindmølle.`,
    },
    {
      sporsmal: `En ball slippes fra 1 meters høyde, treffer bakken og spretter opp igjen, men ikke like høyt. Forklar hvor energien blir av. Bruk fagord.`,
      fasit: `Ballen har en viss mengde energi når den slippes. På veien ned og i sammenstøtet mister den noe energi: noe går til luftmotstand, noe til å deformere ballen (og kanskje bakken), noe blir til lydbølger, og en liten del blir til varme. Fordi en del av energien er overført til andre former, har ballen mindre bevegelsesenergi igjen og kommer derfor ikke like høyt opp som den startet.`,
    },
    {
      sporsmal: `Elektrisk strøm er en type bevegelsesenergi. Hva trenger vi for å lage (indusere) strøm? Forklar ut fra forsøket.`,
      fasit: `Vi trenger en spole og en magnet (i forsøket brukte vi i tillegg et voltmeter og to ledninger med krokodilleklemmer). For å indusere strøm må vi bevege magneten gjennom spolen flere ganger, eller rotere den inni. Da induseres det vekselstrøm i ledningen, og vi så et lite utslag på voltmeteret.`,
    },
    {
      sporsmal: `Tegn en bølge og forklar hvor du finner amplituden og bølgelengden.`,
      fasit: `Amplituden er høyden fra midten av bølgen og opp til en bølgetopp (eller ned til en bølgebunn). Bølgelengden er avstanden mellom to like punkter på bølgen, for eksempel fra én bølgetopp til den neste.`,
    },
    {
      sporsmal: `Hva mener vi med frekvens, og hva er det elektromagnetiske spekteret en oversikt over?`,
      fasit: `Frekvens er antallet svingninger (bølger) per sekund. Det elektromagnetiske spekteret er en oversikt over de elektromagnetiske bølgelengdene og hva vi kaller dem. De lengste bølgene er radiobølger, og de korteste er gammastråler. I en liten del på midten finner vi det synlige lyset, der rødt lys har litt lengre bølgelengde enn blått.`,
    },
    {
      sporsmal: `Hva kan stråling brukes til i teknologien vi har i dag?`,
      fasit: `Stråling brukes til svært mye: WiFi og Bluetooth, radiobølger til å sende informasjon (for eksempel i en fjernkontroll), GPS-navigasjon via satellitter, vanlig radio, røntgenmaskiner, laserlys og lyset fra lampene rundt oss. Alt dette sender ut eller bruker stråling.`,
    },
  ],
  'teknologi': [
    {
      sporsmal: `Hva er en generator, og hva er en transformator?`,
      fasit: `En generator lager elektrisk strøm ved å bevege en magnet inni en spole, og den finnes i nesten alle kraftverk. En transformator endrer spenningen på strømmen, slik at den kan settes høyt når den skal sendes langt, og ned igjen til trygg spenning før den når hjemmene.`,
    },
    {
      sporsmal: `Hvorfor trenger vi generatorer og transformatorer når vi skal produsere og frakte elektrisitet?`,
      fasit: `Vi trenger generatoren for i det hele tatt å lage strømmen, ved å gjøre bevegelse om til elektrisk energi. Transformatoren trengs fordi strømmen skal fraktes over lange avstander i strømnettet. Når spenningen settes svært høyt, går det minst mulig energi tapt på veien, og deretter transformeres spenningen ned igjen til et trygt nivå før strømmen brukes hjemme.`,
    },
    {
      sporsmal: `Hvordan produserer vi elektrisk energi i Norge, og hvilke konsekvenser har det for naturen sammenlignet med andre land?`,
      fasit: `I Norge kommer det aller meste av strømmen fra vannkraft, som er en fornybar energikilde med lite klimagassutslipp. Mange andre land bruker i større grad ikke-fornybare kilder som kull, olje og gass, som gir store CO₂-utslipp. Norsk vannkraft er altså renere for klimaet, men også den påvirker naturen: elver demmes opp, landskap endres og dyreliv kan forstyrres. Uansett energikilde må vi veie nytten opp mot konsekvensene for miljøet.`,
    },
    {
      sporsmal: `Hva er forskjellen på fornybare og ikke-fornybare energikilder? Gi eksempler på hver.`,
      fasit: `Fornybare energikilder blir ikke brukt opp og fornyer seg selv, som vann, vind og sol. Ikke-fornybare energikilder finnes det en begrenset mengde av, og de gir klimagassutslipp når de brukes, som kull, olje og gass. Fornybare kilder er mer bærekraftige, men også de kan påvirke naturen lokalt.`,
    },
    {
      sporsmal: `Hva er forskjellen på et analogt og et digitalt signal?`,
      fasit: `Et analogt signal endrer seg jevnt og flytende, omtrent som en bølge. Et digitalt signal består av tall, oftest bare 0 og 1. Digitale signaler er mindre følsomme for støy og lettere å lagre og kopiere uten at kvaliteten blir dårligere. Derfor bruker nesten all moderne teknologi digitale signaler.`,
    },
    {
      sporsmal: `Beskriv et elektronisk kommunikasjonssystem, og forklar hvordan informasjon overføres fra avsender til mottaker.`,
      fasit: `Et elektronisk kommunikasjonssystem frakter informasjon fra en avsender til en mottaker, for eksempel via internett eller mobilnettet. Senderen bestemmer hvilken informasjon som skal sendes, og gjør den om til et signal (ofte digitalt, som nuller og enere). Informasjonen merkes med en adresse som viser hvor den skal, og sendes så gjennom systemet, trådløst eller via kabel, og videre fra ruter til ruter som finner riktig vei. Til slutt når informasjonen mottakeren, som gjør signalet om til noe vi kan forstå igjen, som tekst, lyd eller bilde. Underveis sørger overvåking og kontroll for å oppdage feil og hindre at uvedkommende får tilgang.`,
    },
    {
      sporsmal: `Velg ett kommunikasjonssystem (for eksempel mobiltelefon, satellitt eller internett) og forklar noen fordeler og ulemper det gir samfunnet.`,
      fasit: `Eksempel med internett: Fordelene er at vi raskt kan kommunisere med hverandre over hele verden, finne informasjon, samarbeide og bruke tjenester uansett hvor vi er. Ulempene er blant annet at personlig informasjon kan komme på avveie, at vi blir svært avhengige av at systemene virker, fare for nettmobbing og falsk informasjon, og at all teknologien krever mye energi og ressurser å lage og drive. (Andre system, som mobil eller satellitt, kan brukes på samme måte med egne fordeler og ulemper.)`,
    },
    {
      sporsmal: `Hva er ASCII og binære tall, og hvordan henger de sammen når vi sender en tekstmelding?`,
      fasit: `Datamaskiner forstår egentlig bare to verdier, 0 og 1, som er det binære tallsystemet. ASCII er en standard der hver bokstav har sitt eget tall, for eksempel A = 65. For å sende tekst gjøres hver bokstav først om til ASCII-tallet sitt, og deretter om til en binær kode (A blir 01000001). Hele meldingen sendes dermed som en lang rekke med nuller og enere, som mottakeren gjør tilbake til bokstaver igjen. For å hindre at andre leser meldingen, kan den krypteres med en hemmelig nøkkel.`,
    },
    {
      sporsmal: `Hvordan har den elektriske revolusjonen endret måten vi lever på, og hvordan påvirker den naturen?`,
      fasit: `Elektrisiteten har endret hverdagen vår fullstendig: vi har lys, varme, kjøleskap, datamaskiner, internett og transport som alle er avhengige av strøm. Det har gjort livene enklere og åpnet for kommunikasjon og teknologi vi ikke kunne tenkt oss før. Samtidig krever all denne teknologien mye energi, og produksjonen av strøm og elektronikk påvirker naturen, gjennom utslipp, naturinngrep og avfall fra utstyr vi kaster. Derfor er det viktig å bruke energien fornuftig og tenke på miljøet når vi utvikler ny teknologi.`,
    },
  ],
  'vitenskap': [
    {
      sporsmal: `Skriv en rapport fra et av forsøkene under Praktiske forsøk. Hva skal en god rapport inneholde?`,
      fasit: `Bruk denne oppskriften på rapporten:

Forside: Lag en fin forside med en kort og presis overskrift (tittelen på forsøket), og med navn, klasse og dato. Ta med navnene på alle du har samarbeidet med, slik at det er tydelig hvem som skriver rapporten.

Inni rapporten skal du ha disse overskriftene:

Innledning: Skriv om hensikten med forsøket. Hvorfor gjør vi det, og hva vil vi finne ut?

Bakgrunnsteori: Ta med teori som er relevant for forsøket, slik at man forstår innholdet i rapporten. Tenk at bestemor skal forstå hva du har gjort og lært, bare ved å lese rapporten din.

Hypotese: Hva tror du blir resultatet? Skriv hva du trodde ville skje før forsøket, og hvorfor.

Utstyr: Lag en liste over utstyret som ble brukt. Ta gjerne med en skisse eller et bilde av forsøksoppsettet (eller tegn det).

Metode: Beskriv punktvis det som ble gjort, så detaljert at en som ikke var med, kan gjøre forsøket selv ved å følge beskrivelsen din.

Resultater og observasjoner: Beskriv det du så, hørte, luktet eller følte. Sett målinger inn i en tabell, og ta med tegninger, bilder eller utregninger der det passer.

Drøfting og feilkilder: Se kritisk på resultatene og vurder om de er til å stole på. Forklar det du har målt og observert, beskriv mulige feilkilder og vurder om de er store eller små, og hva du kunne gjort annerledes.

Konklusjon: Ta utgangspunkt i hensikten og hypotesen. Stemte det? Hva ble svaret? Konklusjonen er en kort oppsummering av hele rapporten.

Kilder: Oppgi kildene du har brukt. Bruker du nettet, ta med hele lenken; bruker du læreboka, oppgi sidetall.`,
    },
    {
      sporsmal: `Forklar stegene i den vitenskapelige metoden.`,
      fasit: `Først gjør man observasjoner og bygger på bakgrunnsteori, altså det man allerede vet. Så lager man en hypotese, en testbar påstand om hva man tror vil skje. Deretter bestemmer man en metode og gjennomfører forsøket, mens man holder styr på variablene. Man noterer resultatene, og trekker en konklusjon om hypotesen stemte. Til slutt reflekterer man over feilkilder og hva som kan forbedres.`,
    },
    {
      sporsmal: `Hva er en feilkilde, og hvorfor er det viktig å ta med feilkilder i en rapport?`,
      fasit: `En feilkilde er noe som kan ha påvirket resultatet og gjort det mindre sikkert, for eksempel unøyaktig måling, dårlig utstyr eller at man ikke klarte å holde alle variablene like. Det er viktig å ta med feilkilder fordi det viser hvor pålitelige resultatene er, og hjelper andre å gjøre forsøket bedre neste gang.`,
    },
    {
      sporsmal: `Hvorfor er kildekritikk viktig når du leter etter informasjon på nettet?`,
      fasit: `Fordi hvem som helst kan legge ut informasjon på nettet, og ikke alt er riktig. Med kildekritikk vurderer du om kilden er til å stole på, for eksempel hvem som står bak, om de har en grunn til å være forutinntatt (bias), og om informasjonen stemmer med andre pålitelige kilder. Forskning som er fagfellevurdert, er som regel mer pålitelig.`,
    },
  ],
};
