import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
