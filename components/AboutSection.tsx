
import React from 'react';
import { CONTENT } from '../constants';
import { Target, Eye, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden leaf-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-rooish rounded-2xl flex items-center justify-center shadow-lg shadow-rooish/20">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-gray-900">{CONTENT.about.title}</h2>
                    <div className="w-20 h-1.5 bg-rooish/20 rounded-full mt-2"></div>
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-[2.1] text-justify mb-8">
                  {CONTENT.about.description}
                </p>
                <div className="flex items-center gap-4 p-5 bg-rooish-light rounded-2xl border border-rooish/10">
                  <Award className="w-6 h-6 text-rooish" />
                  <span className="text-sm font-bold text-rooish-dark opacity-90">دارای مجوزهای رسمی از وزارت تعاون و سازمان فنی‌وحرفه‌ای</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-rooish-light rounded-[3rem] -z-10 opacity-50"></div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div className="bg-rooish p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-black">{CONTENT.vision.title}</h2>
                </div>
                <p className="text-xl leading-[1.8] opacity-90 font-light">
                  {CONTENT.vision.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-rooish mb-2">۱۰،۰۰۰</div>
                <div className="text-xs text-gray-400 font-black uppercase tracking-widest">هدف اشتغال‌زایی</div>
              </div>
              <div className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-black text-rooish mb-2">۲۵۰</div>
                <div className="text-xs text-gray-400 font-black uppercase tracking-widest">ظرفیت سالن هما</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
