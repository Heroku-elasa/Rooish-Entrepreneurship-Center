
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ChevronLeft } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer to track active section
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sectionIds = ['about', 'capacities', 'ai-call', 'contact', 'ai-incubator'];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', label: 'درباره ما' },
    { id: 'capacities', label: 'امکانات' },
    { id: 'ai-call', label: 'فراخوان AI', highlight: true },
    { id: 'contact', label: 'ارتباط با ما' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div 
                onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-12 h-12 bg-rooish rounded-2xl flex items-center justify-center shadow-lg shadow-rooish/20 group cursor-pointer transition-transform hover:rotate-3"
              >
                <span className="text-white font-black text-2xl">ر</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-black text-gray-900 tracking-tight leading-none">رویش سبزوار</div>
                <div className="text-[10px] font-bold text-rooish uppercase tracking-widest mt-1">Entrepreneurship Center</div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <div className="flex items-center gap-8 text-sm font-bold text-gray-600">
                {navLinks.map((link) => (
                  <a 
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`transition-all relative group flex items-center gap-1 ${
                      activeSection === link.id ? 'text-rooish' : 'hover:text-rooish'
                    } ${link.highlight ? 'text-rooish' : ''}`}
                  >
                    {link.label}
                    {link.highlight && (
                      <span className="bg-orange-500 text-white text-[8px] px-1.5 py-0.5 rounded-full absolute -top-3 -left-3 animate-pulse">New</span>
                    )}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-rooish transition-all ${
                      activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
                ))}
              </div>
              <button 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="bg-rooish text-white px-8 py-3 rounded-full font-bold hover:bg-rooish-dark transition-all shadow-md shadow-rooish/10 flex items-center gap-2 group"
              >
                ارتباط مستقیم
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden p-2 text-gray-900 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rooish rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">ر</span>
              </div>
              <span className="font-black text-gray-900">منوی رویش</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-grow p-6 flex flex-col gap-2 overflow-y-auto">
            {navLinks.map((link, index) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`flex items-center justify-between p-5 rounded-2xl transition-all group ${
                  activeSection === link.id 
                    ? 'bg-rooish/5 text-rooish shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg font-black ${link.highlight ? 'text-rooish' : ''}`}>
                    {link.label}
                  </span>
                  {link.highlight && (
                    <span className="bg-orange-500 text-white text-[8px] px-2 py-0.5 rounded-full animate-pulse font-black uppercase">بروزرسانی</span>
                  )}
                </div>
                <ChevronLeft className={`w-5 h-5 transition-transform ${
                  activeSection === link.id ? 'translate-x-1 opacity-100' : 'opacity-0 group-hover:opacity-50 group-hover:-translate-x-1'
                }`} />
              </a>
            ))}
          </div>

          <div className="p-8 bg-gray-50 mt-auto">
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="w-full bg-rooish text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-rooish/20 hover:bg-rooish-dark transition-all flex items-center justify-center gap-3"
            >
              شروع همکاری
              <ArrowUpRight className="w-5 h-5" />
            </button>
            <p className="text-center text-[10px] font-bold text-gray-400 mt-6 uppercase tracking-widest">
              Rooish Entrepreneurship Center 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
