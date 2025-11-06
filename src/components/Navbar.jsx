import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 text-white grid place-items-center shadow-sm">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight text-gray-900 text-lg">
            UNVRS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">LABS</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#services" className="hover:text-gray-900 transition">Servizi</a>
          <a href="#about" className="hover:text-gray-900 transition">Chi siamo</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contatti</a>
        </div>
        <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95 transition">
          Richiedi un preventivo
        </a>
      </nav>
    </header>
  );
}
