// * Root router — all Czech page routes, scroll-to-top on navigate
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { ONasPage } from '@/app/pages/ONasPage';
import { ProgramPage } from '@/app/pages/ProgramPage';
import { SkupinyPage } from '@/app/pages/SkupinyPage';
import { KontaktPage } from '@/app/pages/KontaktPage';
import { CoJeMeditacePage } from '@/app/pages/CoJeMeditacePage';
import { CestaPage } from '@/app/pages/CestaPage';
import { UdalostiPage } from '@/app/pages/UdalostiPage';
import { InspiracePage } from '@/app/pages/InspiracePage';
import { ZapojteSePage } from '@/app/pages/ZapojteSePage';
import { RozvrhPage } from '@/app/pages/RozvrhPage';
import { NotFoundPage } from '@/app/pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nas" element={<ONasPage />} />
            <Route path="/co-je-meditace" element={<CoJeMeditacePage />} />
            <Route path="/cesta" element={<CestaPage />} />
            <Route path="/program" element={<ProgramPage />} />
            <Route path="/rozvrh" element={<RozvrhPage />} />
            <Route path="/udalosti-2026" element={<UdalostiPage />} />
            <Route path="/skupiny" element={<SkupinyPage />} />
            <Route path="/inspirace" element={<InspiracePage />} />
            <Route path="/zapojte-se" element={<ZapojteSePage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
