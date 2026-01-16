import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen pt-[100px] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-tergar-blue/10 font-heading mb-4">404</h1>
        <h2 className="text-3xl font-bold text-space-blue mb-6 font-heading">Stránka nenalezena</h2>
        <p className="text-space-blue/70 mb-10 text-lg leading-relaxed">
          Omlouváme se, ale stránka, kterou hledáte, neexistuje nebo byla přesunuta.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <Home size={18} />
          Zpět na úvod
        </Link>
      </div>
    </div>
  );
}
