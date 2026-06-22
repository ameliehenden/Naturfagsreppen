// Henter gårsdagens tall fra GoatCounter og skriver en rapport til rapport.md.
// GitHub-workflowen lager en sak (issue) av rapporten og tildeler den til Amelie,
// slik at hun får den på e-post.
import { writeFileSync } from 'node:fs';

const TOKEN = process.env.GOATCOUNTER_TOKEN;
const SITE = 'https://naturfagsreppen.goatcounter.com';
const headers = { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' };

if (!TOKEN) {
  console.error('Mangler GOATCOUNTER_TOKEN.');
  process.exit(1);
}

const igaar = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
const mnd = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
const [aar, m, dag] = igaar.split('-');
const datoTekst = `${parseInt(dag, 10)}. ${mnd[parseInt(m, 10) - 1]} ${aar}`;

async function api(sti) {
  const res = await fetch(`${SITE}/api/v0${sti}`, { headers });
  if (!res.ok) throw new Error(`${sti} -> ${res.status}`);
  return res.json();
}

// GoatCounter vil ha tidspunkt «rounded to the hour». Vi sender derfor hele
// gårsdagen med klokkeslett, men prøver også ren dato som reserve – slik at
// rapporten virker uansett hvilket format API-et godtar.
async function hentStats(endepunkt, ekstra = '') {
  const varianter = [
    `start=${igaar}T00:00:00Z&end=${igaar}T23:59:59Z`,
    `start=${igaar}&end=${igaar}`,
  ];
  let sisteFeil;
  for (const q of varianter) {
    try {
      return await api(`${endepunkt}?${q}${ekstra}`);
    } catch (e) {
      sisteFeil = e;
    }
  }
  throw sisteFeil;
}

let hits = [];
let total = null;
const feil = [];

// Hent sidene/opplegga (hver for seg, så én feil ikke stopper resten).
try {
  const h = await hentStats('/stats/hits', '&limit=100');
  hits = h.hits ?? [];
} catch (e) {
  feil.push(String(e));
  console.error(e);
}

// Hent totalen. Faller tilbake til å summere sidevisningene om kallet svikter.
try {
  const t = await hentStats('/stats/total');
  total = t.total ?? 0;
} catch (e) {
  feil.push(String(e));
  console.error(e);
}

const opplegg = hits.filter((x) => x.event);
const sider = hits.filter((x) => !x.event);

if (total === null) {
  total = sider.reduce((sum, x) => sum + (x.count ?? 0), 0);
}

const L = [];
L.push(`## Naturfagsreppen – rapport for ${datoTekst}`);
L.push('');
L.push(`**Besøk (sidevisninger):** ${total}`);
L.push('');
if (opplegg.length) {
  L.push('**Opplegg åpnet:**');
  opplegg.forEach((o) => L.push(`- ${o.path}: ${o.count}`));
} else {
  L.push('**Opplegg åpnet:** ingen registrert');
}
if (sider.length) {
  L.push('');
  L.push('**Mest besøkte sider:**');
  sider.slice(0, 10).forEach((s) => L.push(`- ${s.path}: ${s.count}`));
}
if (feil.length) {
  L.push('');
  L.push(`_Merk: klarte ikke å hente alle tall (${feil.join('; ')})._`);
}

const rapport = L.join('\n');
console.log(rapport);
writeFileSync('rapport.md', rapport);
writeFileSync('tittel.txt', `Rapport for ${datoTekst}`);
