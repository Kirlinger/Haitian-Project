import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import HealthCrisis from './pages/HealthCrisis';
import Solutions from './pages/Solutions';
import ImpactResults from './pages/ImpactResults';
import Vision from './pages/Vision';
import Financing from './pages/Financing';
import Phases from './pages/Phases';
import Departments from './pages/Departments';
import ROI from './pages/ROI';
import History from './pages/History';
import Leadership from './pages/Leadership';
import Technology from './pages/Technology';
import Diaspora from './pages/Diaspora';
import Partnerships from './pages/Partnerships';
import Training from './pages/Training';
import Research from './pages/Research';
import Community from './pages/Community';
import News from './pages/News';
import Contact from './pages/Contact';
import Transparency from './pages/Transparency';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* ── Main 8-page navigation structure ───────────────────── */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="health-crisis" element={<HealthCrisis />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="budget" element={<Financing />} />
          <Route path="impact" element={<ImpactResults />} />
          <Route path="plan" element={<Phases />} />
          <Route path="contact" element={<Contact />} />

          {/* ── Legacy / detailed sub-pages (kept for deep-linking) ── */}
          <Route path="vizyon" element={<Vision />} />
          <Route path="finansman" element={<Financing />} />
          <Route path="faz" element={<Phases />} />
          <Route path="depatman" element={<Departments />} />
          <Route path="roi" element={<ROI />} />
          <Route path="istwa" element={<History />} />
          <Route path="ekip" element={<Leadership />} />
          <Route path="teknoloji" element={<Technology />} />
          <Route path="dyaspora" element={<Diaspora />} />
          <Route path="patenayi" element={<Partnerships />} />
          <Route path="formasyon" element={<Training />} />
          <Route path="rechech" element={<Research />} />
          <Route path="kominote" element={<Community />} />
          <Route path="aktyalite" element={<News />} />
          <Route path="kontakte" element={<Contact />} />
          <Route path="transparans" element={<Transparency />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
