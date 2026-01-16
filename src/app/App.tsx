import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { CoJeMeditacePage } from '@/app/pages/CoJeMeditacePage';
import { NotFoundPage } from '@/app/pages/NotFoundPage';
import {
  CestaTergarPage,
  ProgramyPage,
  KomunitaPage,
  UdalostiPage,
  ONasPage,
  KontaktPage,
} from '@/app/pages';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/co-je-meditace" element={<CoJeMeditacePage />} />
            <Route path="/cesta-tergar" element={<CestaTergarPage />} />
            <Route path="/programy" element={<ProgramyPage />} />
            <Route path="/komunita" element={<KomunitaPage />} />
            <Route path="/udalosti" element={<UdalostiPage />} />
            <Route path="/o-nas" element={<ONasPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            
            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
