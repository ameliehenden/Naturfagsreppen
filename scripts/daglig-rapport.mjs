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

let total = 0;
let hits = [];
let feil = null;
try {
  const t = await api(`/stats/total?start=${igaar}&end=${igaar}`);
  total = t.total ?? 0;
  const h = await api(`/stats/hits?start=${igaar}&end=${igaar}&limit=100`);
  hits = h.hits ?? [];
} catch (e) {
  feil = String(e);
  console.error(feil);
}

const opplegg = hits.filter((x) => x.event);
const sider = hits.filter((x) => !x.event);

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
if (feil) {
  L.push('');
  L.push(`_Merk: klarte ikke å hente alle tall (${feil})._`);
}

const rapport = L.join('\n');
console.log(rapport);
writeFileSync('rapport.md', rapport);
writeFileSync('tittel.txt', `Rapport for ${datoTekst}`);
