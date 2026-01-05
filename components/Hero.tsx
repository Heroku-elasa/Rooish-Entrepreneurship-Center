
import React from 'react';
import { Rocket, ArrowLeft, Users, Zap, ShieldCheck, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden bg-white leaf-bg">
      {/* Organic Background Elements */}
      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-rooish-light opacity-30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-rooish-light opacity-20 organic-shape blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center text-right">
          
          {/* Text Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-rooish-light text-rooish-dark text-sm font-bold mb-8 border border-rooish/10">
              <Zap className="w-4 h-4 fill-rooish" />
              <span>پیشرو در خدمات کارآفرینی شمال شرق کشور</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.2] mb-8">
              از هنر دست‌های خلاق <br />
              <span className="text-rooish relative inline-block">
                تا نیازهای روزمره‌تان
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-rooish/10 -rotate-1"></div>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl font-medium opacity-80">
              مجتمع رویش سبزوار؛ نخستین شتابدهنده تخصصی که با الهام از اصالت و نوآوری، بذرهای ایده شما را به محصولات ماندگار تبدیل می‌کند.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button className="bg-rooish text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-rooish-dark transition-all flex items-center gap-3 shadow-lg shadow-rooish/20">
                ثبت‌نام در شتابدهنده
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="bg-white text-rooish border-2 border-rooish/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-rooish-light transition-all flex items-center gap-2">
                <Users className="w-5 h-5" />
                درخواست مشاوره رایگان
              </button>
            </div>
          </div>

          {/* Visual Elements - Inspired by the provided screenshot */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Main Circular Image */}
              <div className="absolute inset-0 bg-white rounded-full border-8 border-rooish/5 shadow-2xl overflow-hidden z-20">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop" 
                  alt="Rooish Office" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Smaller Overlapping Circles (Mocking the products in the screenshot) */}
              <div className="absolute -top-4 -right-4 w-48 h-48 bg-white rounded-full border-4 border-white shadow-xl overflow-hidden z-30 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=500&auto=format&fit=crop" 
                  alt="Handicraft" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white rounded-full border-4 border-white shadow-xl overflow-hidden z-30 animate-float" style={{ animationDelay: '1.5s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1544441893-675973e300bb?q=80&w=500&auto=format&fit=crop" 
                  alt="Product" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dot Grid Pattern from screenshot */}
              <div className="absolute -top-10 -left-10 grid grid-cols-4 gap-4 opacity-30 z-10">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-rooish rounded-full"></div>
                ))}
              </div>
              <div className="absolute -bottom-10 -right-10 grid grid-cols-4 gap-4 opacity-30 z-10">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-rooish rounded-full"></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
