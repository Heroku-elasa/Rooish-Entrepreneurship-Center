
import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Send, 
  MessageSquare, 
  User, 
  CheckCircle2,
  Loader2,
  Smartphone,
  MessageCircle,
  Share2
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // تست و شبیه‌سازی ارسال به soheil.power@gmail.com
    console.log("Submitting Contact Data to soheil.power@gmail.com:", formData);
    
    // In a production environment, you would use an email integration like Resend or SendGrid
    // to send the actual email to soheil.power@gmail.com.
    // The current code simulates this for testing purposes.

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 8000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6">ارتباط با رویش کالا</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            ما در مجتمع رویش همیشه آماده شنیدن ایده‌ها، سوالات و پیشنهادات شما هستیم. از راه‌های زیر با ما در تماس باشید.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start" dir="rtl">
          
          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-rooish/5 transition-all group">
                <div className="w-12 h-12 bg-rooish/10 text-rooish rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h4 className="font-black text-gray-900 mb-1 text-sm">تلفن همراه</h4>
                <p className="text-rooish font-bold text-sm" dir="ltr">09151710036</p>
              </div>

              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-rooish/5 transition-all group">
                <div className="w-12 h-12 bg-rooish/10 text-rooish rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="font-black text-gray-900 mb-1 text-sm">تلفن ثابت</h4>
                <p className="text-rooish font-bold text-sm" dir="ltr">05144235337</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-[2rem] text-white shadow-lg shadow-pink-500/20 group hover:-translate-y-1 transition-all">
                <Instagram className="w-8 h-8 mb-4 group-hover:rotate-12 transition-transform" />
                <h4 className="font-black mb-1 text-sm">اینستاگرام</h4>
                <p className="text-xs opacity-90" dir="ltr">@royeshsabzevar</p>
              </div>

              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-[2rem] text-white shadow-lg shadow-blue-500/20 group hover:-translate-y-1 transition-all">
                <Send className="w-8 h-8 mb-4 group-hover:-translate-y-1 transition-transform" />
                <h4 className="font-black mb-1 text-sm">تلگرام</h4>
                <p className="text-xs opacity-90" dir="ltr">@royeshsabzevar</p>
              </div>

              <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-6 rounded-[2rem] text-white shadow-lg shadow-orange-500/20 group hover:-translate-y-1 transition-all">
                <MessageSquare className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-black mb-1 text-sm">ایتا</h4>
                <p className="text-xs opacity-90" dir="ltr">@royeshsabzevar</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-500 to-purple-700 p-6 rounded-[2rem] text-white shadow-lg shadow-indigo-500/20 group hover:-translate-y-1 transition-all">
                <Share2 className="w-8 h-8 mb-4 group-hover:rotate-12 transition-transform" />
                <h4 className="font-black mb-1 text-sm">روبیکا</h4>
                <p className="text-xs opacity-90" dir="ltr">09123456789</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-start gap-6">
              <div className="w-16 h-16 bg-gray-50 text-rooish rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="text-right">
                <h4 className="font-black text-gray-900 mb-2">نشانی ما</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  استان خراسان رضوی، شهر سبزوار، میدان مادر، خیابان نور، مجتمع رویش
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 lg:p-14 rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rooish/5 rounded-full -mr-16 -mt-16"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-gray-900 mb-2">ارسال پیام مستقیم</h3>
                <p className="text-gray-400 text-sm mb-10">برای ارتباط با ما می‌توانید فرم زیر را تکمیل و ارسال کنید</p>

                {isSubmitted ? (
                  <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h4 className="text-2xl font-black text-gray-900 mb-2">پیام به soheil.power@gmail.com ارسال شد</h4>
                    <p className="text-gray-500 font-medium">از همراهی شما سپاسگزاریم. پاسخ شما بزودی به شماره تماس اعلام شده ارسال می‌شود.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 mr-2">نام و نام خانوادگی <span className="text-red-500">(ضروری)</span></label>
                        <div className="relative">
                          <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input 
                            required 
                            type="text" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl pr-12 pl-4 py-4 focus:border-rooish transition-all outline-none" 
                            placeholder="نام خود را وارد کنید" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 mr-2">شماره تماس همراه <span className="text-red-500">(ضروری)</span></label>
                        <div className="relative">
                          <Smartphone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input 
                            required 
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl pr-12 pl-4 py-4 focus:border-rooish transition-all outline-none" 
                            placeholder="۰۹۱۵۰۰۰۰۰۰۰" 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 mr-2">موضوع پیام <span className="text-red-500">(ضروری)</span></label>
                      <div className="relative">
                        <MessageCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          required 
                          type="text" 
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl pr-12 pl-4 py-4 focus:border-rooish transition-all outline-none" 
                          placeholder="موضوع پیام شما چیست؟" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 mr-2">لطفاً پیام خود را بنویسید <span className="text-red-500">(ضروری)</span></label>
                      <textarea 
                        required 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 focus:border-rooish transition-all outline-none h-40 resize-none" 
                        placeholder="پیام خود را اینجا بنویسید..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-rooish text-white py-5 rounded-2xl font-black text-xl hover:bg-rooish-dark transition-all shadow-xl shadow-rooish/20 flex items-center justify-center gap-4 disabled:opacity-70 group"
                    >
                      {isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : "ارسال پیام به ایمیل مدیریت"}
                      {!isSubmitting && <Send className="w-6 h-6 rotate-180 group-hover:translate-x-2 transition-transform" />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
