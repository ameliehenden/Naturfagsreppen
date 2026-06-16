import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Hjem from './pages/Hjem'
import EmneSide from './pages/EmneSide'
import SammenhengSide from './pages/SammenhengSide'
import Om from './pages/Om'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hjem />} />
          <Route path="/emne/:id" element={<EmneSide />} />
          <Route path="/sammenheng/:id/:slug" element={<SammenhengSide />} />
          <Route path="/om" element={<Om />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
