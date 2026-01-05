
import React from 'react';
import { CONTENT } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="capacities" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-5 py-2 mb-6 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black border border-emerald-100 uppercase tracking-widest">
            Infrastructure & Equipment
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8">امکانات فراتر از انتظار</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xl leading-relaxed">
            ما در مجتمع رویش، زیست‌بومی ساخته‌ایم که تمام قطعات پازل موفقیت شما را در کنار هم قرار می‌دهد.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONTENT.capacities.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.15)] hover:-translate-y-3 overflow-hidden"
            >
              {/* Card Gradient Background Hover */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-gray-50 group-hover:bg-emerald-600 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:text-white shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-gray-100 group-hover:bg-emerald-100 text-gray-500 group-hover:text-emerald-700 rounded-full transition-colors">
                    {item.tag}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 group-hover:text-gray-600 text-base leading-relaxed mb-6">
                  {item.details}
                </p>
                
                <div className="pt-6 border-t border-gray-50 flex items-center gap-2 text-emerald-600 font-black text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span>مشاهده تصاویر و جزئیات</span>
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
