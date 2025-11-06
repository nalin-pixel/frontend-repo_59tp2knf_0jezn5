import { Smartphone, Globe2, Cog, Bot } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'App Mobile',
    desc: 'iOS e Android native o cross‑platform con performance eccellenti e UX curata.'
  },
  {
    icon: Globe2,
    title: 'Siti Web & eCommerce',
    desc: 'Web ad alte prestazioni, SEO‑friendly e scalabili, dal corporate al retail.'
  },
  {
    icon: Cog,
    title: 'Software Aziendale',
    desc: 'Soluzioni su misura, integrazioni ERP/CRM e automazioni dei processi.'
  },
  {
    icon: Bot,
    title: 'AI & Web3',
    desc: 'Chatbot, agenti, analisi dati, smart contract e wallet integrations.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Cosa facciamo</h2>
          <p className="mt-3 text-gray-600">Diamo forma a prodotti digitali moderni, belli e performanti, progettati per crescere con il tuo business.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 text-white grid place-items-center shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
