
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Features from './components/Features';
import GoalsSection from './components/GoalsSection';
import PartnersSection from './components/PartnersSection';
import AIIncubator from './components/AIIncubator';
import CallForAI from './components/CallForAI';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* Statistics Strip */}
        <section className="bg-gray-50 border-y border-gray-100 py-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-12 text-center">
            <div className="flex-1 min-w-[150px]">
              <div className="text-4xl font-black text-emerald-600 mb-1">۲۵+</div>
              <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">منتور متخصص</div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="flex-1 min-w-[150px]">
              <div className="text-4xl font-black text-emerald-600 mb-1">۱۵۰+</div>
              <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">رویداد آموزشی</div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="flex-1 min-w-[150px]">
              <div className="text-4xl font-black text-emerald-600 mb-1">۱۰+</div>
              <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">میلیارد تومان سرمایه جذب شده</div>
            </div>
            <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
            <div className="flex-1 min-w-[150px]">
              <div className="text-4xl font-black text-emerald-600 mb-1">۲۴/۷</div>
              <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">دسترسی به فضا</div>
            </div>
          </div>
        </section>

        <AboutSection />
        <Features />
        
        {/* Interactive AI Section */}
        <AIIncubator />

        {/* New Call for AI Section */}
        <CallForAI />
        
        <GoalsSection />
        <PartnersSection />

        {/* New Contact Section with colorful social cards */}
        <ContactSection />
        
        {/* High-impact Call to Action */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 relative">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[3.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-200">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">پذیرش دوره جدید شتابدهی <br/> آغاز شد</h2>
                <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                  اگر ایده‌ای دارید که فکر می‌کنید می‌تواند دنیا را تغییر دهد، ما منتظر شما هستیم. فضای کار، منتورینگ و سرمایه اولیه از ما؛ تلاش و پشتکار از شما.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-emerald-700 px-12 py-5 rounded-2xl font-black text-xl hover:bg-emerald-50 transition-all shadow-xl hover:scale-105">
                    فرم درخواست پذیرش
                  </button>
                  <button className="bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-500/40 transition-all">
                    دانلود دفترچه راهنما
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
