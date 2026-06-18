import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Hjem from './pages/Hjem'
import JordaSide from './pages/JordaSide'
import KroppOgHelseSide from './pages/KroppOgHelseSide'
import EmneSide from './pages/EmneSide'
import SammenhengSide from './pages/SammenhengSide'
import Om from './pages/Om'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hjem />} />
          <Route path="/emne/jorda" element={<JordaSide />} />
          <Route path="/emne/kropp-og-helse" element={<KroppOgHelseSide />} />
          <Route path="/emne/:id" element={<EmneSide />} />
          <Route path="/sammenheng/:id/:slug" element={<SammenhengSide />} />
          <Route path="/om" element={<Om />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
