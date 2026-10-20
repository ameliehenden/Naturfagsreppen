import { Navigate } from 'react-router-dom';
import { useTilgang } from '../tilgang';

// Sender besøkande utan passord tilbake til forsida, også ved direkte lenkjer til eit emne.
export default function Laast({ children }) {
  const rolle = useTilgang();
  return rolle ? children : <Navigate to="/" replace />;
}
