
import React from 'react';
import { CONTENT } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="capacities" className="py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rooish/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[100px] -ml-32 -mb-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-rooish-light text-rooish-dark text-xs font-black border border-rooish/10 uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 bg-rooish rounded-full animate-pulse"></span>
            FACILITIES & INFRASTRUCTURE
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
            تجهیزات و ظرفیت‌های <span className="text-rooish">مجتمع رویش</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-xl leading-relaxed font-medium">
            ما زیرساخت‌های لازم برای رشد انفجاری کسب‌وکارهای نوپا را فراهم کرده‌ایم؛ از فضاهای اشتراکی مدرن تا پیشرفته‌ترین تجهیزات تولید محتوا و آموزش.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CONTENT.capacities.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-rooish/30 transition-all duration-500 hover:shadow-[0_30px_70px_-15px_rgba(0,128,96,0.12)] hover:-translate-y-2 overflow-hidden flex flex-col h-full"
            >
              {/* Card Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-rooish/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-gray-50 group-hover:bg-rooish rounded-2xl flex items-center justify-center text-rooish group-hover:text-white shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-gray-100 group-hover:bg-rooish-light text-gray-500 group-hover:text-rooish-dark rounded-full transition-colors border border-transparent group-hover:border-rooish/10">
                    {item.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-rooish-dark transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 group-hover:text-gray-600 text-base leading-relaxed mb-8 flex-grow">
                  {item.details}
                </p>
                
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between group/btn">
                  <span className="text-rooish font-black text-sm opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    درخواست استفاده
                  </span>
                  <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-rooish group-hover:text-white group-hover:border-rooish transition-all duration-300">
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 border-t border-gray-200 pt-16">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-rooish/10 flex items-center justify-center flex-shrink-0 text-rooish">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h4 className="font-black text-gray-900 mb-2">تجهیزات مدرن</h4>
              <p className="text-sm text-gray-500 leading-relaxed">دسترسی به آخرین ابزارهای تکنولوژی و سخت‌افزارهای تخصصی برای نمونه‌سازی.</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-rooish/10 flex items-center justify-center flex-shrink-0 text-rooish">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <div>
              <h4 className="font-black text-gray-900 mb-2">زیست‌بوم تعاملی</h4>
              <p className="text-sm text-gray-500 leading-relaxed">محیطی طراحی شده برای شبکه‌سازی و تعامل مستقیم با نخبگان و صاحبان صنایع.</p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-2xl bg-rooish/10 flex items-center justify-center flex-shrink-0 text-rooish">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <h4 className="font-black text-gray-900 mb-2">امنیت و پایداری</h4>
              <p className="text-sm text-gray-500 leading-relaxed">زیرساخت‌های پایدار انرژی و شبکه برای فعالیت بی‌وقفه استارتاپ‌ها در تمام ساعات.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
