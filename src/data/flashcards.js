// Flashcards per emne. Nøkkelen er emnets id (se emner.js).
// Hvert kort har et begrep og en forklaring.
//
// SLIK LEGGER DU TIL ET NYTT KORT: kopier blokken under, lim den inn
// rett før den siste ] -linjen, og fyll inn din egen tekst:
//
//   {
//     begrep: `Skriv begrepet her`,
//     forklaring: `Skriv forklaringen her`,
//   },
//
// Husk: behold backtick-tegnene ` rundt teksten, og komma etter } .
export const flashcards = {
  'geologi': [
    {
      begrep: `Jordskorpe`,
      forklaring: `Det ytterste, harde laget av jorda. Havbunnskorpen er tynnere (ca. 7 km) og tettere enn kontinentalkorpen (ca. 30–50 km).`,
    },
    {
      begrep: `Mantel`,
      forklaring: `Laget mellom jordskorpen og kjernen. Utgjør mesteparten av jordas volum og består av varmt, halvfast bergartsmateriale som beveger seg svært langsomt.`,
    },
    {
      begrep: `Yttre kjerne`,
      forklaring: `Laget rundt den indre kjernen, ca. 2200 km tykt. Består av flytende jern og nikkel – bevegelsen her skaper jordas magnetfelt.`,
    },
    {
      begrep: `Indre kjerne`,
      forklaring: `Det innerste laget av jorda, ca. 1200 km i radius. Består av fast jern og nikkel med en temperatur på ca. 5000–6000°C.`,
    },
    {
      begrep: `Kontinentalplater`,
      forklaring: `De store platene av jordskorpen og øvre del av mantelen som driver sakte rundt på den plastiske mantelen. Det finnes ca. 15 store plater.`,
    },
    {
      begrep: `Kontinentaldrift`,
      forklaring: `Teorien om at kontinentene har beveget seg over millioner av år og fortsatt beveger seg i dag, drevet av konveksjonsstrømmer i mantelen.`,
    },
    {
      begrep: `Pangea`,
      forklaring: `Superkontinentet som eksisterte for ca. 300 millioner år siden, da alle jordens landmasser var samlet til ett. Pangea begynte å dele seg for ca. 175 millioner år siden.`,
    },
    {
      begrep: `Midthavsryggen`,
      forklaring: `Et undersjøisk fjellsystem der to plater beveger seg fra hverandre og ny havbunn dannes. Verdens lengste fjellkjede, ca. 65 000 km lang.`,
    },
    {
      begrep: `Kontinent`,
      forklaring: `Store, hevede landmasser som utgjør om lag 30% av jordas overflate. Det finnes 7 kontinenter.`,
    },
    {
      begrep: `Havbunn`,
      forklaring: `Bunnen av havene, som dekker ca. 70% av jordas overflate. Havbunnen er yngre enn kontinentene og skapes kontinuerlig ved midthavsryggene.`,
    },
    {
      begrep: `Jordskjelv`,
      forklaring: `Rystelser i jordskorpen som oppstår når spenninger som er bygget opp mellom plater plutselig frigjøres. Kraftige jordskjelv kan utløse tsunamier.`,
    },
    {
      begrep: `Vulkan`,
      forklaring: `Et sted der magma fra jordens indre bryter gjennom jordskorpen og strømmer ut som lava. Vulkaner finnes oftest langs plategrenser.`,
    },
    {
      begrep: `Magma`,
      forklaring: `Smeltet stein inne i jorda. Når magma bryter gjennom overflaten og renner ut, kalles det lava.`,
    },
    {
      begrep: `Troposfære`,
      forklaring: `Det nederste laget av atmosfæren, fra bakken opp til ca. 12 km høyde. Her skjer alt vær, og temperaturen synker med høyden.`,
    },
    {
      begrep: `Stratosfære`,
      forklaring: `Atmosfærelaget over troposfæren, fra ca. 12 til 50 km høyde. Her ligger ozonlaget som beskytter jorda mot skadelig UV-stråling.`,
    },
  ],
  'celler-og-livets-utvikling': [
    {
      begrep: `Evolusjonsteorien`,
      forklaring: `Teorien om at alle levende organismer har utviklet seg fra felles forfedre gjennom naturlig utvalg over millioner av år. Charles Darwin formulerte teorien i 1859.`,
    },
    {
      begrep: `Naturlig utvalg`,
      forklaring: `Prosessen der individer med egenskaper som passer best til miljøet, overlever og formerer seg mer enn andre. Over tid fører dette til at gunstige egenskaper spres i en populasjon.`,
    },
    {
      begrep: `Felles stamfar`,
      forklaring: `Ideen om at alle levende organismer – dyr, planter, sopp og bakterier – stammer fra den samme urgamle organismen. Jo likere to arter er, jo nærmere felles stamfar har de.`,
    },
    {
      begrep: `Plantecelle`,
      forklaring: `En eukaryot celle med cellevegg, stor vakuole og kloroplaster i tillegg til de organellene den deler med dyrecellen. Kloroplastene gjør fotosyntese mulig.`,
    },
    {
      begrep: `Dyrecelle`,
      forklaring: `En eukaryot celle uten cellevegg og kloroplaster. Har cellekjerne, mitokondrier, ribosomer og andre organeller.`,
    },
    {
      begrep: `Cellemembran`,
      forklaring: `Den tynne, fleksible "huden" rundt alle celler som kontrollerer hva som slipper inn og ut av cellen.`,
    },
    {
      begrep: `Cellevegg`,
      forklaring: `Et stivt lag utenfor cellemembran som finnes i planteceller (og bakterier og sopp). Gir støtte og form, og holder cellen fra å sprekke.`,
    },
    {
      begrep: `Cytosol`,
      forklaring: `Væsken inne i cellen som fyller opp mellomrommene mellom organellene. Inneholder proteiner, salter og andre molekyler cellen trenger for å fungere.`,
    },
    {
      begrep: `Cellekjerne`,
      forklaring: `"Kontrollsenteret" i en celle. Inneholder cellens DNA med alle arveanleggene og styrer hvilke proteiner cellen produserer.`,
    },
    {
      begrep: `Ribosomer`,
      forklaring: `Svært små strukturer i cellen der proteiner bygges opp etter oppskrift fra DNA. Finnes i alle celler, inkludert bakterier.`,
    },
    {
      begrep: `Lysosomer`,
      forklaring: `Organeller som fungerer som cellens "fordøyelsessystem". Bryter ned avfall, utslitte organeller og inntrengere ved hjelp av enzymer.`,
    },
    {
      begrep: `Vakuole`,
      forklaring: `En væskefylt "ballong" inne i cellen. Planteceller har én stor vakuole som holder cellen stram. Dyreceller kan ha mange mindre vakuoler.`,
    },
    {
      begrep: `Golgiapparatet`,
      forklaring: `Et organell som pakker og sender ut proteiner og andre stoffer fra cellen. Fungerer som cellens "postkontor".`,
    },
    {
      begrep: `Mitokondrier`,
      forklaring: `Organeller der celleåndingen foregår, slik at cellen kan produsere energi fra glukose og oksygen. Kalles gjerne cellens "kraftverk".`,
    },
    {
      begrep: `Kloroplast`,
      forklaring: `Organell i planteceller der fotosyntesen foregår. Inneholder det grønne fargestoffet klorofyll som fanger opp sollys.`,
    },
    {
      begrep: `DNA`,
      forklaring: `Det kjemiske stoffet som inneholder arveoppskriften for alle levende organismer. Finnes i cellekjernen og består av fire baser (A, T, G og C) som danner en dobbel spiral.`,
    },
    {
      begrep: `Gen`,
      forklaring: `Et avsnitt av DNA-molekylet som inneholder oppskriften på ett bestemt protein. Genene bestemmer egenskapene til en organisme.`,
    },
    {
      begrep: `Genetisk variasjon`,
      forklaring: `Forskjeller i arveegenskaper mellom individer i en populasjon. Genetisk variasjon er grunnlaget for naturlig utvalg og evolusjon.`,
    },
    {
      begrep: `Mutasjon`,
      forklaring: `En tilfeldig endring i DNA-sekvensen. Kan skje spontant eller som følge av stråling eller kjemikalier. De fleste mutasjoner er nøytrale, noen skadelige og noen gunstige.`,
    },
    {
      begrep: `Celleånding`,
      forklaring: `Prosessen der cellen bryter ned glukose og oksygen for å frigjøre energi. Foregår i mitokondriene og produserer vann og CO₂ som avfallsprodukter.`,
    },
    {
      begrep: `Fotosyntesen`,
      forklaring: `Prosessen der planteceller bruker sollys, CO₂ og vann for å lage glukose og oksygen. Foregår i kloroplastene.`,
    },
    {
      begrep: `Glukose`,
      forklaring: `Et enkelt sukkermolekyl som er cellens viktigste energikilde. Produseres gjennom fotosyntesen og brytes ned i celleåndingen.`,
    },
  ],
  'okologi': [
    {
      begrep: `Økologi`,
      forklaring: `Vitenskapen om samspillet mellom organismer og mellom organismer og miljøet de lever i.`,
    },
    {
      begrep: `Økosystem`,
      forklaring: `Et avgrenset naturområde med alle levende organismer (planter, dyr, sopp, bakterier) og de ikke-levende omgivelsene (vann, luft, jord, lys) som påvirker hverandre.`,
    },
    {
      begrep: `Abiotisk faktor`,
      forklaring: `Ikke-levende faktorer i miljøet som påvirker livet, for eksempel temperatur, lys, vann, pH og næringsinnhold i jorda.`,
    },
    {
      begrep: `Biotisk faktor`,
      forklaring: `Levende faktorer som påvirker andre organismer i miljøet, for eksempel byttedyr, rovdyr, parasitter og konkurrenter.`,
    },
    {
      begrep: `Produsent`,
      forklaring: `Planter og alger som lager sin egen mat gjennom fotosyntesen. Produsentene er alltid det første leddet i en næringskjede.`,
    },
    {
      begrep: `Forbruker`,
      forklaring: `Organismer som ikke kan lage sin egen mat og som spiser andre organismer. Primærforbrukere spiser planter, sekundærforbrukere spiser primærforbrukerne, og slik videre oppover i næringskjeden.`,
    },
    {
      begrep: `Nedbryter`,
      forklaring: `Organismer som bryter ned dødt organisk materiale – for eksempel løv, greiner og døde dyr – til enkle stoffer som plantene kan ta opp igjen. Sopp, bakterier og meitemark er viktige nedbrytere.`,
    },
    {
      begrep: `Næringskjede`,
      forklaring: `En rekke av organismer der hvert ledd spiser det forrige. Næringskjeden begynner alltid med en produsent og ender med en toppredator. Eksempel: gras → sau → ulv.`,
    },
    {
      begrep: `Næringsnett`,
      forklaring: `Et nettverk av sammenkoblede næringskjeder i et økosystem. Næringsnettet viser de faktiske spise-forbindelsene mellom alle organismer i et område og gir et mer realistisk bilde enn én enkelt næringskjede.`,
    },
    {
      begrep: `Biologisk mangfold`,
      forklaring: `Summen av all genetisk variasjon, alle arter og alle naturtyper i et område. Rikt biologisk mangfold gjør et økosystem mer stabilt og motstandsdyktig mot forstyrrelser.`,
    },
    {
      begrep: `Rødlista`,
      forklaring: `En oversikt over arter som er truet av utryddelse eller har blitt sjeldnere. Artene deles inn i kategorier etter risiko for utdøing – den alvorligste kategorien er «kritisk truet».`,
    },
    {
      begrep: `Biom`,
      forklaring: `Store naturgeografiske soner med karakteristisk vegetasjon og dyreliv, styrt av klimaet. Eksempler er tropisk regnskog, steppe, taiga (boreal skog) og tundra.`,
    },
    {
      begrep: `Klimasoner`,
      forklaring: `Store geografiske soner med karakteristisk klima, avhengig av breddegrad, havstrømmer og terreng. Klimasonen avgjør hvilke planter og dyr som kan leve der.`,
    },
  ],
  'klima-og-baerekraft': [
    {
      begrep: `Bærekraftig utvikling`,
      forklaring: `Å dekke dagens behov uten å ødelegge mulighetene for at framtidige generasjoner skal få dekket sine behov – blant annet ved å bruke naturressurser uten å ødelegge dem.`,
    },
    {
      begrep: `Føre-var-prinsippet`,
      forklaring: `Å sette i gang tiltak for å begrense bruken av et stoff eller en ressurs før vi har vitenskapelig bekreftelse på at det er skadelig for miljøet.`,
    },
    {
      begrep: `Villmarksområde`,
      forklaring: `Landområde som ligger mer enn 5 km fra større tekniske inngrep. En liten, gammel hytte regnes ikke som et større teknisk inngrep, men et hyttefelt gjør det.`,
    },
    {
      begrep: `Interessegrupper`,
      forklaring: `Grupper som har ulike interesser i et naturområde. Eksempel: Skogen i Norge er både en viktig økonomisk ressurs og et område som bør vernes for å sikre det biologiske mangfoldet.`,
    },
    {
      begrep: `Interessekonflikt`,
      forklaring: `Når to interessegrupper er i konflikt om et naturområde eller en ressurs, fordi den enes bruk av ressursen ødelegger for den andres interesse.`,
    },
    {
      begrep: `Biologisk mangfold`,
      forklaring: `Samlebetegnelse på hvor rikt et område er på arter og natur. Omfatter genetisk variasjon innenfor populasjoner og arter, mangfoldet av populasjoner og arter, og mangfoldet av naturtyper og økosystemer.`,
    },
    {
      begrep: `Artsmangfold`,
      forklaring: `Summen av alle artene som finnes i et område.`,
    },
    {
      begrep: `Kulturlandskap`,
      forklaring: `Et landskap som er påvirket av mennesker, ofte avgrenset til områder som er påvirket av jord- og skogbruk.`,
    },
    {
      begrep: `Klima`,
      forklaring: `Den gjennomsnittlige værtypen for et område over en 30-årsperiode.`,
    },
    {
      begrep: `Klimaendringer`,
      forklaring: `Når gjennomsnittsværet for et område endrer seg over en 30-årsperiode.`,
    },
    {
      begrep: `Ozonhull`,
      forklaring: `Steder der ozonlaget rundt jorda (jordas solkrem) er tynnere enn det skal være. Ozonlaget har ingenting med global oppvarming å gjøre – det beskytter oss mot farlig UV-stråling, særlig UV-B.`,
    },
    {
      begrep: `Global oppvarming`,
      forklaring: `Den gjennomsnittlige temperaturen på jorda stiger på grunn av utslipp av klimagasser. Temperaturen stiger ikke like mye alle steder, og noen steder kan til og med oppleve kaldere perioder.`,
    },
    {
      begrep: `Drivhuseffekt`,
      forklaring: `Jordas evne til å holde på sin egen varme slik at den ikke slipper ut i verdensrommet. Kortbølget stråling fra sola slipper inn, men langbølget varmestråling fra jorda slipper ikke ut, fordi klimagass-molekylene fanger strålene opp og sender dem ut igjen i alle retninger, slik at noe kommer tilbake til jorda.`,
    },
    {
      begrep: `Klimasone`,
      forklaring: `Et område med samme klimatype. Vi deler oftest inn i polart, temperert, subtropisk og tropisk klima.`,
    },
    {
      begrep: `Vær`,
      forklaring: `Det du ser ut av vinduet akkurat nå: nedbør, vind, temperatur og så videre.`,
    },
    {
      begrep: `Drivhusgasser`,
      forklaring: `Gassmolekylene som absorberer langbølget varmestråling på vei ut fra jorda, slik at noe av varmen sendes tilbake til oss. Jo mer drivhusgass i atmosfæren, jo mer holder atmosfæren på jordas varme. De viktigste drivhusgassene er CO₂, vanndamp og metan.`,
    },
    {
      begrep: `Naturressurs`,
      forklaring: `Alt vi finner i naturen som vi kan bruke til å dekke et behov, som vann, fisk eller olje og gass.`,
    },
    {
      begrep: `Fornybare ressurser`,
      forklaring: `Ressurser som fornyes i naturen, og som kan brukes uten at de nødvendigvis brukes opp. Noen ressurser er betinget fornybare, som fisk og skog.`,
    },
    {
      begrep: `Forurensing`,
      forklaring: `Alt som gjør et miljø usunt og skaper nedgang i miljøkvaliteten.`,
    },
    {
      begrep: `Havforsuring`,
      forklaring: `Senket pH i havet fordi havet tar opp store mengder CO₂ fra atmosfæren.`,
    },
    {
      begrep: `Økt havnivå`,
      forklaring: `Havnivået stiger fordi innlandsis smelter og renner ut i havet, og fordi varmere vann utvider seg. Is som allerede flyter i havet, hever ikke havnivået når den smelter.`,
    },
  ],
  'immunsystemet': [
    {
      begrep: `Leukocytter`,
      forklaring: `De hvite blodcellene. Dette er kroppens forsvarsceller, og de utgjør selve immunforsvaret. Det finnes flere typer, blant annet fagocytter og lymfocytter.`,
    },
    {
      begrep: `Fagocytter`,
      forklaring: `En type hvite blodceller som også kalles eteceller. De «spiser» inntrengere som bakterier og virus i en prosess som heter fagocytose. De er en del av det medfødte forsvaret og kommer raskt i gang.`,
    },
    {
      begrep: `Makrofager`,
      forklaring: `Store fagocytter (eteceller). De rydder bort smittestoff og døde celler, og jobber ekstra effektivt når kroppen har feber.`,
    },
    {
      begrep: `Lymfocytter`,
      forklaring: `En type hvite blodceller i det ervervede forsvaret. De deles i B-celler, som lager antistoffer, og T-celler, som er drepeceller. De utvikler seg over tid og bruker gjerne noen dager på å komme i gang.`,
    },
    {
      begrep: `B-celler`,
      forklaring: `Lymfocytter som lager antistoffer. Noen B-celler blir til hukommelsesceller som husker smittestoffet til senere.`,
    },
    {
      begrep: `T-celler`,
      forklaring: `Lymfocytter som fungerer som drepeceller. De dreper kroppens egne celler når disse er blitt syke, for eksempel celler som er infisert av virus eller har blitt til kreftceller.`,
    },
    {
      begrep: `Antistoff`,
      forklaring: `Et protein som lages av B-celler. Hvert antistoff passer til ett bestemt smittestoff og merker det slik at det blir uskadeliggjort.`,
    },
    {
      begrep: `Hukommelsescelle`,
      forklaring: `En lymfocytt som husker et smittestoff kroppen har møtt før. Møter kroppen samme smittestoff igjen, reagerer immunforsvaret mye raskere – det er dette en vaksine utnytter.`,
    },
    {
      begrep: `Medfødt immunforsvar`,
      forklaring: `Den delen av immunforsvaret du er født med. Det virker raskt og angriper alle inntrengere på samme måte. Fagocyttene er viktigst her.`,
    },
    {
      begrep: `Ervervet immunforsvar`,
      forklaring: `Den delen av immunforsvaret som utvikler seg gjennom livet. Det er spesialisert og lærer seg å kjenne igjen bestemte smittestoff. Lymfocyttene hører til her.`,
    },
    {
      begrep: `Ytre immunforsvar`,
      forklaring: `Kroppens første barriere mot smitte: huden og slimhinnene som holder bakterier og virus ute. Også slim, tårer, spytt og magesyre hjelper til.`,
    },
    {
      begrep: `Indre immunforsvar`,
      forklaring: `Forsvaret som tar over hvis smittestoffene kommer seg inn i kroppen. Det består av de hvite blodcellene.`,
    },
    {
      begrep: `Immunitet`,
      forklaring: `Å være motstandsdyktig mot en bestemt sykdom, slik at kroppen klarer å slå den ned før du blir syk. Du kan bli immun etter å ha hatt sykdommen eller etter å ha blitt vaksinert.`,
    },
    {
      begrep: `Vaksine`,
      forklaring: `Inneholder svekkede eller døde smittestoff, eller deler av dem. Den lurer kroppen til å lage antistoffer og hukommelsesceller uten at du blir ordentlig syk, slik at du er beskyttet senere.`,
    },
    {
      begrep: `MMR-vaksine`,
      forklaring: `En vaksine som beskytter mot tre sykdommer på én gang: meslinger, kusma og røde hunder.`,
    },
    {
      begrep: `Flokkimmunitet`,
      forklaring: `Når så mange i en befolkning er immune at smittestoffet ikke klarer å spre seg. Da beskyttes også de som ikke kan vaksinere seg, for eksempel nyfødte og syke.`,
    },
    {
      begrep: `Patogen`,
      forklaring: `En sykdomsfremkallende mikroorganisme, altså et smittestoff som kan gjøre oss syke – for eksempel et virus eller en bakterie.`,
    },
    {
      begrep: `Virus`,
      forklaring: `Et svært lite smittestoff som består av arvestoff med en proteinkappe rundt. Virus regnes ikke som levende og må kapre en levende celle for å formere seg.`,
    },
    {
      begrep: `Bakterier`,
      forklaring: `Encellede organismer uten cellekjerne. Noen bakterier gjør oss syke, mens mange andre er nyttige eller helt ufarlige.`,
    },
    {
      begrep: `Beinmarg`,
      forklaring: `Vevet inni knoklene der blodcellene lages, blant annet de hvite blodcellene i immunforsvaret.`,
    },
    {
      begrep: `Feber`,
      forklaring: `Forhøyet kroppstemperatur som kroppen bruker mot infeksjoner. Smittestoffene formerer seg saktere ved feber, samtidig som immunforsvaret jobber mer effektivt.`,
    },
  ],
};
