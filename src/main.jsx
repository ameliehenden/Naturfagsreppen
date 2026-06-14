import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Hjem from './pages/Hjem'
import EmneSide from './pages/EmneSide'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hjem />} />
          <Route path="/emne/:id" element={<EmneSide />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
