
import React, { useState } from 'react';
import { CONTENT } from '../constants';
import { ChevronRight, Info, Zap, Layers, Cpu, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="capacities" className="py-32 bg-[#fafcfb] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rooish/5 rounded-full blur-[140px] -mr-96 -mt-96 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[120px] -ml-64 -mb-64"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-rooish/10 text-rooish text-[10px] font-black border border-rooish/20 uppercase tracking-widest">
              <span className="w-2 h-2 bg-rooish rounded-full animate-ping"></span>
              Infrastructure & Tech Stack
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              تجهیزات و ظرفیت‌های <span className="text-rooish">مجتمع رویش</span>
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed font-medium">
              ما پیشرفته‌ترین زیرساخت‌های فناورانه را برای شتابدهی به ایده‌های شما در قلب سبزوار گرد هم آورده‌ایم.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-12 border-r-2 border-gray-100 pr-12">
            <div className="text-center">
              <div className="text-3xl font-black text-rooish">۱۵۰۰+</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase">مترمربع فضا</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-rooish">۵۰+</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase">تجهیزات پیشرفته</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTENT.capacities.map((item: any, index: number) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-[2.5rem] bg-white border border-gray-100 p-8 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,128,96,0.15)] overflow-hidden flex flex-col h-full ${
                index === 0 || index === 3 ? 'md:col-span-1 lg:col-span-2' : ''
              }`}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-rooish/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    hoveredIndex === index ? 'bg-rooish text-white rotate-6 scale-110 shadow-lg shadow-rooish/30' : 'bg-gray-50 text-rooish'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider px-3 py-1.5 bg-gray-50 text-gray-400 rounded-full border border-gray-100">
                    {item.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-rooish transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {item.details}
                </p>

                {/* Specs Chips - Visualizing capacity */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {item.specs?.map((spec: string, sIndex: number) => (
                    <div key={sIndex} className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-lg border border-gray-100 group-hover:bg-white group-hover:border-rooish/20 transition-all">
                      <div className="w-1 h-1 bg-rooish rounded-full"></div>
                      <span className="text-[10px] font-bold text-gray-600">{spec}</span>
                    </div>
                  ))}
                </div>
                
                <button className="flex items-center justify-between group/btn pt-6 border-t border-gray-50">
                  <span className="text-rooish font-black text-xs opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    رزرو و بازدید
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-rooish group-hover:text-white transition-all duration-300 shadow-sm">
                    <ChevronRight className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Highlights Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-12 bg-white rounded-[3rem] p-12 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-rooish"></div>
          
          <div className="space-y-4">
            <div className="w-12 h-12 bg-rooish/10 rounded-xl flex items-center justify-center text-rooish">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black text-gray-900">انرژی و پایداری</h4>
            <p className="text-sm text-gray-500 leading-relaxed">سیستم برق اضطراری (UPS) و ژنراتور پشتیبان برای فعالیت ۲۴ ساعته بدون وقفه استارتاپ‌ها.</p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-rooish/10 rounded-xl flex items-center justify-center text-rooish">
              <Globe className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black text-gray-900">شبکه و ارتباطات</h4>
            <p className="text-sm text-gray-500 leading-relaxed">اینترنت فیبر نوری اختصاصی با پهنای باند متقارن و امنیت شبکه لایه ۲ برای محافظت از داده‌ها.</p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-rooish/10 rounded-xl flex items-center justify-center text-rooish">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-black text-gray-900">امنیت هوشمند</h4>
            <p className="text-sm text-gray-500 leading-relaxed">کنترل تردد بیومتریک، مانیتورینگ تصویری پیشرفته و سیستم‌های اطفاء حریق خودکار در تمامی بخش‌ها.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
