// Henter gårsdagens tall fra GoatCounter og sender en daglig e-postrapport
// via FormSubmit. Kjøres av GitHub Actions (se .github/workflows/daglig-rapport.yml).

const TOKEN = process.env.GOATCOUNTER_TOKEN;
const SITE = 'https://naturfagsreppen.goatcounter.com';
const MOTTAKER = 'amelie-he@gjesdalskolen.com';

if (!TOKEN) {
  console.error('Mangler GOATCOUNTER_TOKEN. Legg den inn som GitHub-secret.');
  process.exit(1);
}

// Gårsdagens dato (YYYY-MM-DD)
const igaar = new Date(Date.now() - 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10);

const headers = { Authorization: `Bearer ${TOKEN}` };

async function api(sti) {
  const res = await fetch(`${SITE}/api/v0${sti}`, { headers });
  if (!res.ok) throw new Error(`API ${sti}: ${res.status} ${await res.text()}`);
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

const linjer = [];
linjer.push(`Naturfagsreppen – rapport for ${igaar}`);
linjer.push('');
linjer.push(`Besøk (sidevisninger): ${total}`);
linjer.push('');
linjer.push('Opplegg åpnet:');
if (opplegg.length === 0) linjer.push('  (ingen registrert)');
else opplegg.forEach((o) => linjer.push(`  ${o.path}: ${o.count}`));
linjer.push('');
linjer.push('Mest besøkte sider:');
if (sider.length === 0) linjer.push('  (ingen registrert)');
else sider.slice(0, 10).forEach((s) => linjer.push(`  ${s.path}: ${s.count}`));
if (feil) {
  linjer.push('');
  linjer.push(`Merk: klarte ikke å hente alle tall (${feil}).`);
}

const melding = linjer.join('\n');
console.log(melding);

const res = await fetch(`https://formsubmit.co/ajax/${MOTTAKER}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify({
    _subject: `Naturfagsreppen – daglig rapport ${igaar}`,
    Rapport: melding,
  }),
});

if (!res.ok) {
  console.error('FormSubmit feilet:', res.status, await res.text());
  process.exit(1);
}
console.log('Rapport sendt.');
