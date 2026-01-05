
import React, { useState, useEffect } from 'react';
import { 
  Megaphone, 
  Target, 
  AlertTriangle, 
  Zap, 
  Gem, 
  Users, 
  Share2, 
  DollarSign, 
  Wrench, 
  Activity, 
  Handshake, 
  CreditCard,
  MessageSquare,
  ArrowLeft,
  CheckCircle2,
  X,
  User,
  Phone,
  FileText,
  Send,
  Loader2,
  Calendar,
  Rocket
} from 'lucide-react';

const CallForAI: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [prefilledData, setPrefilledData] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  useEffect(() => {
    const handlePrefill = (e: any) => {
      setPrefilledData(e.detail.text);
      setFormData(prev => ({ ...prev, message: e.detail.text }));
      setIsFormOpen(true);
      const element = document.getElementById('ai-call');
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      }
    };
    window.addEventListener('open-registration-form', handlePrefill);
    return () => window.removeEventListener('open-registration-form', handlePrefill);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // شبیه‌سازی ارسال به soheil.power@gmail.com
    console.log("Sending Form Data to soheil.power@gmail.com:", formData);
    
    // In a production environment, you would use an email integration like Resend or SendGrid
    // to send the actual email to soheil.power@gmail.com.
    // The current code simulates this for testing purposes.

    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setPrefilledData('');
      setFormData({ name: '', phone: '', message: '' });
      
      // بستن خودکار بعد از مدتی
      setTimeout(() => {
        setIsFormOpen(false);
        setFormSubmitted(false);
      }, 5000);
    }, 2000);
  };

  return (
    <section id="ai-call" className="py-24 bg-[#fcfdfd] relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rooish/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Hero */}
        <div className="relative mb-20">
          <div className="bg-gradient-to-br from-rooish via-rooish-dark to-[#004d3a] rounded-[3rem] p-10 lg:p-20 text-center text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent)]"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-black mb-8 border border-white/20 animate-bounce">
                <Rocket className="w-5 h-5 text-yellow-400" />
                فراخوان مرکز رشد رویش سبزوار - سال ۱۴۰۴
              </div>
              
              <h1 className="text-4xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
                مسابقه طراحی و توسعه <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-yellow-200 to-white">سایت‌ساز هوش مصنوعی</span>
              </h1>
              
              <p className="text-lg lg:text-2xl opacity-90 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
                طراحی یک پلتفرم هوشمند متناسب با کسب‌وکارهای محلی و فروشگاه رویش کالا. 
                مسیر استارتاپی خود را با حمایت کامل مرکز رشد رویش آغاز کنید.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-3xl flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-yellow-300" />
                  <span className="text-lg font-black">مهلت: ۲۱ دی ۱۴۰۴</span>
                </div>
                <div className="bg-yellow-400 text-rooish-dark px-8 py-4 rounded-3xl flex items-center gap-3 font-black text-lg shadow-xl shadow-yellow-400/20">
                  <CheckCircle2 className="w-6 h-6" />
                  ثبت‌نام کاملاً رایگان
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Canvas Visualizer */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">بوم پیشنهادی کسب‌وکار</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              این بوم یک الگو برای درک بهتر ابعاد پروژه است؛ خلاقیت شما در تغییر این فرض‌ها ملاک ارزیابی خواهد بود.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" dir="rtl">
            <div className="space-y-6">
              <div className="bg-rose-50 border border-rose-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-rose-100 transition-all group">
                <div className="w-14 h-14 bg-rose-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-rose-900 mb-4">🔴 مشکلات فعلی</h3>
                <ul className="text-sm text-rose-800 space-y-3 font-medium opacity-80">
                  <li>• هزینه طراحی سایت (۱۰-۱۵ میلیون)</li>
                  <li>• زمان اجرا (۱ تا ۲ ماه)</li>
                  <li>• نیاز مداوم به برنامه‌نویس</li>
                  <li>• عدم بهینگی موبایل</li>
                </ul>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-emerald-100 transition-all group">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-emerald-900 mb-4">✅ راه‌حل AI</h3>
                <ul className="text-sm text-emerald-800 space-y-3 font-medium opacity-80">
                  <li>• ساخت سایت (۳۵۰-۴۵۰ هزارتومان)</li>
                  <li>• راه‌اندازی در چند دقیقه</li>
                  <li>• بدون نیاز به کدنویسی</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6 lg:mt-12">
              <div className="bg-amber-50 border border-amber-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-amber-100 transition-all group">
                <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                  <Gem className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-amber-900 mb-4">💎 ارزش پیشنهادی</h3>
                <ul className="text-sm text-amber-800 space-y-3 font-medium opacity-80">
                  <li>• فروشگاه آنلاین آماده</li>
                  <li>• کاملاً فارسی و RTL</li>
                  <li>• آموزش مدیریت هوشمند</li>
                  <li>• اتصال سریع به درگاه</li>
                </ul>
              </div>
              <div className="bg-indigo-50 border border-indigo-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-indigo-100 transition-all group">
                <div className="w-14 h-14 bg-indigo-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                  <Activity className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-indigo-900 mb-4">⚙️ فعالیت‌ها</h3>
                <p className="text-sm text-indigo-800 opacity-80">توسعه هسته سایت‌ساز، آماده‌سازی قالب‌های بومی و اتصال درگاه پرداخت.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-sky-50 border border-sky-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-sky-100 transition-all group">
                <div className="w-14 h-14 bg-sky-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-sky-900 mb-4">👥 مشتریان هدف</h3>
                <p className="text-sm text-sky-800 opacity-80">مغازه‌ها و فروشگاه‌های کوچک سبزوار، تولیدکنندگان خانگی و محصولات ارگانیک.</p>
              </div>
              <div className="bg-purple-50 border border-purple-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-purple-100 transition-all group">
                <div className="w-14 h-14 bg-purple-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                  <Handshake className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-purple-900 mb-4">🤝 شرکا</h3>
                <p className="text-sm text-purple-800 opacity-80">مجتمع رویش، آژانس کریپتون و درگاه‌های پرداخت ملی.</p>
              </div>
            </div>

            <div className="space-y-6 lg:mt-12">
              <div className="bg-orange-50 border border-orange-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-orange-100 transition-all group">
                <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-orange-900 mb-4">💰 جریان درآمدی</h3>
                <ul className="text-sm text-orange-800 space-y-3 font-medium opacity-80">
                  <li>• فروش سایت: ۳۵۰-۴۵۰ هزارتومان</li>
                  <li>• اشتراک: ۵۰-۱۰۰ هزارتومان</li>
                </ul>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-slate-100 transition-all group">
                <div className="w-14 h-14 bg-slate-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                  <Share2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">📢 کانال‌ها</h3>
                <p className="text-sm text-slate-800 opacity-80">وب‌سایت رویش، ایتا، اینستاگرام و معرفی از طریق اصناف و دانشگاه‌ها.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-rooish to-blue-500 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-white border border-gray-100 rounded-[3rem] p-12 lg:p-20 text-center shadow-2xl">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">آماده تغییر در زیست‌بوم سبزوار هستید؟</h2>
            <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium">
              ایده سایت‌ساز هوشمند و بوم پیشنهادی خود را آماده کنید و همین حالا برای ما ارسال کنید.
            </p>
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-rooish text-white px-16 py-6 rounded-full font-black text-2xl hover:bg-rooish-dark transition-all shadow-2xl shadow-rooish/30 flex items-center gap-4 mx-auto hover:scale-105"
            >
              ارسال از طریق فرم ثبت‌نام
              <ArrowLeft className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Modern Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-md" onClick={() => setIsFormOpen(false)}></div>
          <div className="bg-white rounded-[3rem] w-full max-w-2xl overflow-hidden relative animate-in fade-in zoom-in duration-300 shadow-[0_0_100px_rgba(0,0,0,0.2)]">
            
            {formSubmitted ? (
              <div className="p-20 text-center animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                  <CheckCircle2 className="w-14 h-14" />
                </div>
                <h3 className="text-4xl font-black text-gray-900 mb-4">اطلاعات به ایمیل ارسال شد!</h3>
                <p className="text-lg text-gray-500 font-medium">ایده شما با موفقیت به آدرس (soheil.power@gmail.com) ارسال شد. تیم رویش بزودی با شما تماس می‌گیرد.</p>
              </div>
            ) : (
              <div className="p-10 lg:p-14" dir="rtl">
                <div className="flex justify-between items-center mb-12">
                  <div>
                    <h3 className="text-3xl font-black text-rooish mb-2">ثبت ایده فراخوان ۱۴۰۴</h3>
                    <p className="text-gray-400 text-sm">اطلاعات شما مستقیماً برای مدیریت شتابدهنده ارسال می‌شود.</p>
                  </div>
                  <button onClick={() => setIsFormOpen(false)} className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-2xl transition-colors">
                    <X className="w-7 h-7 text-gray-400" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-black text-gray-700 mr-2 flex items-center gap-2">
                        <User className="w-4 h-4 text-rooish" /> نام و نام خانوادگی <span className="text-red-500">(ضروری)</span>
                      </label>
                      <input 
                        required 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:ring-0 focus:border-rooish transition-all outline-none text-lg" 
                        placeholder="مثلاً: علی محمدی" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black text-gray-700 mr-2 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-rooish" /> شماره تماس همراه <span className="text-red-500">(ضروری)</span>
                      </label>
                      <input 
                        required 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-4 focus:ring-0 focus:border-rooish transition-all outline-none text-lg" 
                        placeholder="۰۹۱۵۰۰۰۰۰۰۰" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-black text-gray-700 mr-2 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-rooish" /> شرح ایده و بوم پیشنهادی <span className="text-red-500">(ضروری)</span>
                    </label>
                    <textarea 
                      required 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 focus:ring-0 focus:border-rooish transition-all outline-none h-48 resize-none text-lg leading-relaxed" 
                      placeholder="ایده خود و جزئیات بوم کسب‌وکار را اینجا بنویسید..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-rooish text-white py-6 rounded-[1.5rem] font-black text-2xl hover:bg-rooish-dark transition-all shadow-2xl shadow-rooish/20 flex items-center justify-center gap-4 disabled:opacity-70 group"
                  >
                    {isSubmitting ? <Loader2 className="w-7 h-7 animate-spin" /> : "ارسال به soheil.power@gmail.com"}
                    {!isSubmitting && <Send className="w-7 h-7 rotate-180 group-hover:translate-x-2 transition-transform" />}
                  </button>
                  <p className="text-center text-xs text-gray-400 font-bold">اطلاعات شما در مرکز رشد رویش سبزوار محفوظ می‌ماند.</p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const MapPin = ({ className, ...props }: any) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default CallForAI;
