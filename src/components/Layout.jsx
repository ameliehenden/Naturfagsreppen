import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Feedback from './Feedback';
import styles from '../App.module.css';

export default function Layout() {
  const location = useLocation();
  const forsteVisning = useRef(true);

  // Tell éitt unikt besøk per nettlesarøkt (sessionStorage hindrar dobbelttelling).
  useEffect(() => {
    if (sessionStorage.getItem('gc_session_counted')) return;
    const timer = setTimeout(() => {
      if (!window.goatcounter?.count) return;
      sessionStorage.setItem('gc_session_counted', '1');
      window.goatcounter.count({ path: '~session', title: 'Unikt besøk', event: true });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Tell sidevisninger ved navigasjon. Selve tellekoden teller den første
  // sidelastingen automatisk, så vi hopper over den her for å unngå dobbelttelling.
  useEffect(() => {
    if (forsteVisning.current) {
      forsteVisning.current = false;
      return;
    }
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({ path: location.pathname + location.search });
    }
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
        {!location.pathname.startsWith('/sammenheng/') && (
          <footer className={styles.footer} id="om">
            <p>
              <strong>Naturfagsreppen</strong>, et digitalt læreverk for 10. trinn, basert på Kunnskapsløftet (LK20).
            </p>
          </footer>
        )}
      </main>
      <Feedback />
    </>
  );
}
