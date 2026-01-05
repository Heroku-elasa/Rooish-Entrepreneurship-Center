
import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone, Smartphone, Send } from 'lucide-react';

const Footer: React.FC = () => {
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
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-rooish rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">ر</span>
              </div>
              <span className="text-xl font-black text-white tracking-tight">رویش سبزوار</span>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              مرکز کارآفرینی و شتابدهنده رویش، حامی ایده‌های نوآورانه و کسب‌وکارهای دانش‌بنیان در منطقه سبزوار. 
              <br />
              <span className="text-rooish-light font-bold mt-2 inline-block">فروشگاه رویش کالا</span>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">دسترسی سریع</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-emerald-400 transition-colors">درباره ما</a></li>
              <li><a href="#" onClick={(e) => scrollToSection(e, 'capacities')} className="hover:text-emerald-400 transition-colors">امکانات</a></li>
              <li><a href="#" onClick={(e) => scrollToSection(e, 'ai-call')} className="hover:text-emerald-400 transition-colors">فراخوان AI</a></li>
              <li><a href="#" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-emerald-400 transition-colors">تماس با ما</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">اطلاعات تماس</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="leading-relaxed">سبزوار، میدان مادر، خیابان نور، مجتمع رویش</span>
              </li>
              <li className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-emerald-500" />
                <span dir="ltr">۰۹۱۵ ۱۷۱ ۰۰۳۶</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span dir="ltr">۰۵۱ ۴۴۲۳ ۵۳۳۷</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500" />
                <span>info@royeshsabzevar.ir</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6">شبکه‌های اجتماعی</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/royeshsabzevar" className="p-3 bg-gray-800 rounded-xl hover:bg-emerald-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://t.me/royeshsabzevar" className="p-3 bg-gray-800 rounded-xl hover:bg-emerald-600 transition-all">
                {/* Fixed: Send is now imported from lucide-react */}
                <Send className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-8">
              <p className="text-xs text-gray-500 text-right">مشترک خبرنامه شوید</p>
              <div className="mt-2 flex flex-row-reverse">
                <input type="email" placeholder="ایمیل شما" className="bg-gray-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-emerald-500 text-right" />
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-r-lg hover:bg-emerald-700 transition-colors">ثبت</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>© ۱۴۰۴ تمامی حقوق برای مرکز کارآفرینی رویش محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
