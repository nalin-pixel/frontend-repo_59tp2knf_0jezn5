export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} UNVRS LABS · Tutti i diritti riservati</p>
        <div className="text-sm text-gray-600 flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Cookies</a>
          <a href="#" className="hover:text-gray-900">Contatti</a>
        </div>
      </div>
    </footer>
  );
}
