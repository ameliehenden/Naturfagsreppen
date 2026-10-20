import { Navigate, useParams } from 'react-router-dom';
import { emner } from '../data/emner';
import { useTilgang } from '../tilgang';

// Sender besøkande utan passord tilbake til forsida, også ved direkte lenkjer til eit emne.
// Emne merkte med open: true er tilgjengelege for alle.
export default function Laast({ children }) {
  const rolle = useTilgang();
  const { id } = useParams();
  const open = emner.find((e) => e.id === id)?.open;
  return rolle || open ? children : <Navigate to="/" replace />;
}
