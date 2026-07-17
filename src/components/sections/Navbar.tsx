import { useState, useEffect } from 'react';
import { Mail, Menu, X, Sun, Moon } from 'lucide-react';
import Logo from '../Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('arkamark-theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('arkamark-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = ['#home', '#why-arkamark', '#capabilities', '#contact'];
      let currentSection = '#home';
      for (const hash of sections) {
        const id = hash.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          if (rect.top <= 140) { // Offset to trigger before fully crossing the top
            currentSection = hash;
          }
        }
      }
      setActiveHash(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial active state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = (hash: string) => {
    const isActive = activeHash === hash;
    return `relative h-full flex items-center transition-colors ${isActive ? 'text-[#ffcc00]' : 'hover:text-[#ffcc00]'} ` + 
      `after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#ffcc00] after:transition-transform after:duration-300 ` + 
      (isActive ? 'after:scale-x-100' : 'after:scale-x-0');
  };

  const getMobileLinkClasses = (hash: string) => {
    const isActive = activeHash === hash;
    return `block py-3 text-lg font-semibold transition-colors ${isActive ? 'text-[#ffcc00]' : 'text-gray-800 dark:text-white hover:text-[#ffcc00] dark:hover:text-[#ffcc00]'}`;
  };

  const ctaClasses = `flex items-center justify-center gap-2 font-bold transition-all duration-300 ${
    isScrolled 
      ? 'bg-[#ffcc00] text-black px-4 md:px-6 py-2 md:py-2.5 shadow-lg shadow-[#ffcc00]/20 hover:-translate-y-0.5' 
      : 'text-[#ffcc00] hover:opacity-80'
  }`;

  const ctaStyle = { borderRadius: isScrolled ? '12px' : '0' };

  return (
    <nav className={`w-full h-[76px] px-6 md:px-20 sticky top-0 z-50 flex items-center justify-between transition-all duration-300 box-border ${isScrolled ? 'bg-white dark:bg-[#1e1e24] shadow-lg border-b border-[#ffcc00]/20' : 'bg-white dark:bg-[#1e1e24] border-b-2 border-gray-200 dark:border-[#333]'}`}>
      <div className="flex items-center gap-2">
        <Logo className="w-[120px] md:w-[158px] h-auto text-black dark:text-white" />
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center h-full gap-8 text-[16px] font-semibold text-black dark:text-white">
        <a href="#home" onClick={() => setActiveHash('#home')} className={getLinkClasses('#home')}>Home</a>
        <a href="#why-arkamark" onClick={() => setActiveHash('#why-arkamark')} className={getLinkClasses('#why-arkamark')}>Why ArkaMark</a>
        <a href="#capabilities" onClick={() => setActiveHash('#capabilities')} className={getLinkClasses('#capabilities')}>Capabilities</a>
        <a href="#contact" onClick={() => setActiveHash('#contact')} className={getLinkClasses('#contact')}>Let's Connect</a>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a 
          href="mailto:Support@arkamark.in" 
          style={ctaStyle}
          className={ctaClasses}
        >
          <Mail size={18} className={isScrolled ? "text-black" : "text-[#ffcc00]"} />
          <span className="text-[14px] md:text-[16px] tracking-wide">Support@arkamark.in</span>
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <div className="lg:hidden flex items-center gap-2 sm:gap-4">
        <button
          onClick={toggleTheme}
          className="p-1 sm:p-2 rounded-full text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a 
          href="mailto:Support@arkamark.in" 
          style={ctaStyle}
          className={ctaClasses}
        >
          <Mail size={18} className={isScrolled ? "text-black" : "text-[#ffcc00]"} />
        </a>
        <button 
          className="text-black dark:text-white hover:text-[#ffcc00] transition-colors p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[76px] left-0 w-full bg-white dark:bg-[#1e1e24] border-b border-gray-200 dark:border-[#333] shadow-xl flex flex-col py-4 px-6 lg:hidden animate-in slide-in-from-top-2 duration-300 z-50">
          <a href="#home" onClick={() => { setActiveHash('#home'); setIsMobileMenuOpen(false); }} className={getMobileLinkClasses('#home')}>Home</a>
          <a href="#why-arkamark" onClick={() => { setActiveHash('#why-arkamark'); setIsMobileMenuOpen(false); }} className={getMobileLinkClasses('#why-arkamark')}>Why ArkaMark</a>
          <a href="#capabilities" onClick={() => { setActiveHash('#capabilities'); setIsMobileMenuOpen(false); }} className={getMobileLinkClasses('#capabilities')}>Capabilities</a>
          <a href="#contact" onClick={() => { setActiveHash('#contact'); setIsMobileMenuOpen(false); }} className={getMobileLinkClasses('#contact')}>Let's Connect</a>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-[#333]">
            <a 
              href="mailto:Support@arkamark.in" 
              className="flex items-center gap-3 text-[#ffcc00] font-bold text-lg"
            >
              <Mail size={20} />
              <span>Support@arkamark.in</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
