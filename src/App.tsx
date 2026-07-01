import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import WhyArkamark from './components/sections/WhyArkamark';
import Capabilities from './components/sections/Capabilities';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import VerticalGuidelines from './components/VerticalGuidelines';
import GoogleAnalytics from './components/GoogleAnalytics';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#222] selection:bg-[#ffcc00] selection:text-black font-sans md:px-[50px] transition-colors duration-300">
      <div className="relative w-full min-h-screen flex flex-col mx-auto md:border-l md:border-r border-gray-300 dark:border-[#444] shadow-2xl bg-white dark:bg-[#2a2b30] transition-colors duration-300">
        <GoogleAnalytics />
        <ScrollProgress />
        <VerticalGuidelines />
        <Navbar />
        <main>
          <Hero />
          <Features />
          <WhyArkamark />
          <Capabilities />
          <Contact />
        </main>
        <Footer />
      </div>
      <FloatingWhatsApp />
    </div>
  );
}
