import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-white to-blue-50" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 items-center gap-10">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-blue-600/10 text-blue-700 px-3 py-1 text-xs font-semibold ring-1 ring-blue-600/20">
            Software House · AI · Web3
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            UNVRS LABS
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Costruiamo esperienze digitali su misura: app mobile, siti web ad alte prestazioni, software aziendali e integrazioni intelligenti con AI e Web3.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95 transition">
              Parla con noi
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-50 transition">
              I nostri servizi
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
