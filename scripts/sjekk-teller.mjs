// Engangs-diagnose: skriver ut totale besøk siste 30 dager til loggen.
// Brukes for å sjekke om GoatCounter faktisk registrerer besøk i det hele tatt.
const TOKEN = process.env.GOATCOUNTER_TOKEN;
const SITE = 'https://naturfagsreppen.goatcounter.com';
const headers = { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' };

if (!TOKEN) { console.error('Mangler GOATCOUNTER_TOKEN.'); process.exit(1); }

const slutt = new Date();
const start = new Date(Date.now() - 30 * 86400000);
const s = start.toISOString().slice(0, 10) + 'T00:00:00Z';
const e = slutt.toISOString().slice(0, 10) + 'T23:59:59Z';

async function api(sti) {
  const res = await fetch(`${SITE}/api/v0${sti}`, { headers });
  if (!res.ok) throw new Error(`${sti} -> ${res.status}`);
  return res.json();
}

try {
  const t = await api(`/stats/total?start=${s}&end=${e}`);
  console.log(`TOTALT siste 30 dager: ${JSON.stringify(t)}`);
  const h = await api(`/stats/hits?start=${s}&end=${e}&limit=20`);
  console.log(`ANTALL SIDER MED DATA: ${(h.hits ?? []).length}`);
  for (const x of (h.hits ?? [])) {
    console.log(`  ${x.path} (event=${!!x.event}): ${x.count}`);
  }
} catch (err) {
  console.error('FEIL:', String(err));
  process.exit(1);
}
