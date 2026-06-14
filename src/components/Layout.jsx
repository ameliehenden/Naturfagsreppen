import { Outlet } from 'react-router-dom';
import Header from './Header';
import Feedback from './Feedback';
import styles from '../App.module.css';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <footer className={styles.footer} id="om">
          <p>
            <strong>Naturfag 10</strong> – et digitalt læreverk for 10. trinn, basert på Kunnskapsløftet (LK20).
          </p>
        </footer>
      </main>
      <Feedback />
    </>
  );
}
