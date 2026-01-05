
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-rooish rounded-2xl flex items-center justify-center shadow-lg shadow-rooish/20 group cursor-pointer transition-transform hover:rotate-3">
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
              <a 
                href="#" 
                onClick={(e) => scrollToSection(e, 'about')}
                className="hover:text-rooish transition-colors relative group"
              >
                درباره ما
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rooish transition-all group-hover:w-full"></span>
              </a>
              <a 
                href="#" 
                onClick={(e) => scrollToSection(e, 'capacities')}
                className="hover:text-rooish transition-colors relative group"
              >
                امکانات
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rooish transition-all group-hover:w-full"></span>
              </a>
              <a 
                href="#" 
                onClick={(e) => scrollToSection(e, 'ai-call')}
                className="hover:text-rooish transition-colors relative group text-rooish"
              >
                فراخوان AI
                <span className="bg-orange-500 text-white text-[8px] px-1.5 py-0.5 rounded-full absolute -top-3 -left-3 animate-pulse">New</span>
              </a>
              <a 
                href="#" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="hover:text-rooish transition-colors relative group"
              >
                ارتباط با ما
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rooish transition-all group-hover:w-full"></span>
              </a>
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
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <a href="#" onClick={(e) => scrollToSection(e, 'about')} className="text-lg font-bold text-gray-800 text-right">درباره ما</a>
          <a href="#" onClick={(e) => scrollToSection(e, 'capacities')} className="text-lg font-bold text-gray-800 text-right">امکانات</a>
          <a href="#" onClick={(e) => scrollToSection(e, 'ai-call')} className="text-lg font-bold text-rooish text-right">فراخوان AI</a>
          <a href="#" onClick={(e) => scrollToSection(e, 'contact')} className="text-lg font-bold text-gray-800 text-right">ارتباط با ما</a>
          <button onClick={(e) => scrollToSection(e, 'contact')} className="bg-rooish text-white p-4 rounded-2xl font-bold shadow-lg shadow-rooish/10">
            ارسال پیام
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
