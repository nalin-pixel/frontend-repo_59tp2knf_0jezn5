export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-blue-600 to-violet-600 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Pronti a creare il prossimo prodotto di successo?</h2>
          <p className="mt-3 text-white/90 max-w-xl">Parlaci della tua idea, ti rispondiamo entro 24 ore con una proposta chiara e tempi concreti.</p>
        </div>
        <form className="relative bg-white/10 backdrop-blur rounded-xl p-6 grid gap-3">
          <input className="w-full rounded-md bg-white/90 text-gray-900 px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/60" placeholder="Nome e azienda" required />
          <input type="email" className="w-full rounded-md bg-white/90 text-gray-900 px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/60" placeholder="Email" required />
          <textarea rows={4} className="w-full rounded-md bg-white/90 text-gray-900 px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/60" placeholder="Descrivici il progetto" />
          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-black/90 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black transition">Invia richiesta</button>
          <p className="text-xs text-white/70">Compilando il form accetti la nostra privacy policy.</p>
        </form>
      </div>
    </section>
  );
}
