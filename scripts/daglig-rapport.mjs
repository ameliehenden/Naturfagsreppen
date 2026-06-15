// DIAGNOSE-VERSJON: sjekker at API-nøkkelen virker og logger hva GoatCounter svarer.
const TOKEN = process.env.GOATCOUNTER_TOKEN;
const SITE = 'https://naturfagsreppen.goatcounter.com';
const headers = { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' };

async function prov(sti) {
  const url = `${SITE}/api/v0${sti}`;
  try {
    const res = await fetch(url, { headers });
    const tekst = await res.text();
    console.log(`\n=== ${sti} -> ${res.status} ===`);
    console.log(tekst.slice(0, 600));
  } catch (e) {
    console.log(`\n=== ${sti} -> FEIL: ${e} ===`);
  }
}

console.log('Token satt:', TOKEN ? `ja (${TOKEN.length} tegn)` : 'NEI');
await prov('/me');
const igaar = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
const idag = new Date().toISOString().slice(0, 10);
await prov(`/stats/total?start=${igaar}&end=${idag}`);
await prov(`/stats/hits?start=${igaar}&end=${idag}`);
process.exit(0);
