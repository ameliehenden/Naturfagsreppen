import { useEffect, useState } from 'react';

// Passorda ligg berre som SHA-256-hashar (av passordet i små bokstavar),
// slik at dei ikkje kan lesast rett ut av koden.
const PASSORD_HASHAR = {
  elev: 'dc68f5a0a05594cfe3710806db68b516eb32104a3bdbada62c760286b917cdcb',
  gjest: 'e199d92f400d8a976c8cd130b82edc3fdbf1dd3b8d57e21d067381fe52e728d0',
};

const NOKKEL = 'naturfagsreppen-tilgang';
const HENDING = 'tilgang-endra';

// Reserve når nettlesaren ikkje tillèt lagring: då varer tilgangen til sida blir lasta på nytt.
let minneRolle = null;

function lesTilgang() {
  let rolle = minneRolle;
  try {
    rolle = localStorage.getItem(NOKKEL) ?? minneRolle;
  } catch {
    // Brukar minneRolle.
  }
  return rolle in PASSORD_HASHAR ? rolle : null;
}

async function sha256(tekst) {
  const data = new TextEncoder().encode(tekst);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Returnerer rolla ('elev' eller 'gjest') ved rett passord, elles null.
export async function provPassord(passord) {
  // Store og små bokstavar spelar inga rolle, så elevane slepp å treffe nøyaktig.
  const hash = await sha256(passord.trim().toLowerCase());
  const rolle = Object.keys(PASSORD_HASHAR).find((r) => PASSORD_HASHAR[r] === hash) ?? null;
  if (rolle) {
    minneRolle = rolle;
    try {
      localStorage.setItem(NOKKEL, rolle);
    } catch {
      // Brukar minneRolle.
    }
    window.dispatchEvent(new Event(HENDING));
  }
  return rolle;
}

export function useTilgang() {
  const [rolle, setRolle] = useState(lesTilgang);
  useEffect(() => {
    const oppdater = () => setRolle(lesTilgang());
    window.addEventListener(HENDING, oppdater);
    return () => window.removeEventListener(HENDING, oppdater);
  }, []);
  return rolle;
}
