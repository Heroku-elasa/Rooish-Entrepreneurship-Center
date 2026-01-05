
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { 
  Sparkles, 
  Send, 
  Loader2, 
  Target, 
  AlertCircle, 
  ClipboardCheck, 
  ArrowLeft,
  Settings,
  ShieldAlert,
  Clock,
  RefreshCw,
  FileDown,
  Share2,
  FileText,
  Printer,
  Download
} from 'lucide-react';
import AdminPanel from './AdminPanel';

const AIIncubator: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<{message: string, type: 'api' | 'quota' | 'general'} | null>(null);
  const [copied, setCopied] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const OPENROUTER_KEY = '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';

  useEffect(() => {
    let interval: any;
    if (loading) {
      interval = setInterval(() => {
        setLoadingStep(prev => (prev + 1) % 4);
      }, 2000);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  const loadingMessages = [
    "در حال تحلیل بازار سبزوار...",
    "بررسی چالش‌های فنی ایده شما...",
    "تدوین نقشه راه اختصاصی رویش...",
    "بهینه‌سازی پاسخ نهایی..."
  ];

  const callOpenRouter = async (prompt: string) => {
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "google/gemma-3-27b-it",
          messages: [{ role: "user", content: prompt }]
        })
      });

      if (res.status === 429) throw new Error("QUOTA_EXHAUSTED");
      const data = await res.json();
      return data.choices[0].message.content;
    } catch (e: any) {
      throw e;
    }
  };

  const analyzeIdea = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setError(null);
    setResponse(null);

    const prompt = `به عنوان مشاور شتابدهنده رویش، این ایده را تحلیل کن و در ۳ بخش کوتاه با تیترهای جذاب (۱. مزایا، ۲. چالش‌ها، ۳. نقشه راه) پاسخ بده. از ایموجی‌های مناسب استفاده کن و لحن حرفه‌ای و انگیزشی داشته باش: "${idea}"`;

    try {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const result = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: prompt,
          config: {
            systemInstruction: "You are an expert startup mentor for Rooish Accelerator in Sabzevar. Use professional, beautiful Persian with clear headings.",
          },
        });
        setResponse(result.text || "خطایی رخ داد.");
      } catch (geminiErr: any) {
        console.warn("Gemini failed, falling back to OpenRouter...", geminiErr);
        const orResult = await callOpenRouter(prompt);
        setResponse(orResult);
      }
    } catch (err: any) {
      if (err.message === "QUOTA_EXHAUSTED") {
        setError({
          message: "متأسفانه سهمیه امروز دستیار هوشمند به پایان رسیده است.",
          type: 'quota'
        });
      } else {
        setError({
          message: "خطا در ارتباط با سرورهای هوش مصنوعی. لطفا لحظاتی دیگر تلاش کنید.",
          type: 'api'
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterIdea = () => {
    const registrationEvent = new CustomEvent('open-registration-form', {
      detail: { text: `ایده: ${idea}\n\nتحلیل هوشمند:\n${response}` }
    });
    window.dispatchEvent(registrationEvent);
  };

  const copyToClipboard = () => {
    const textToCopy = `تحلیل هوشمند شتابدهنده رویش برای ایده: ${idea}\n\n${response}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnWhatsApp = () => {
    const text = `تحلیل هوشمند شتابدهنده رویش برای ایده: ${idea}\n\n${response}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const exportToWord = () => {
    const content = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head><meta charset='utf-8'><title>تحلیل ایده رویش</title></head>
      <body style="font-family: Arial, sans-serif; direction: rtl; text-align: right;">
        <h1>تحلیل هوشمند ایده - شتابدهنده رویش</h1>
        <hr/>
        <h3>ایده: ${idea}</h3>
        <div style="white-space: pre-wrap;">${response}</div>
        <hr/>
        <p>مرکز کارآفرینی رویش سبزوار - ۱۴۰۴</p>
      </body>
      </html>
    `;
    const blob = new Blob(['\ufeff', content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Rooish_Analysis_${new Date().getTime()}.doc`;
    link.click();
  };

  const exportToPDF = () => {
    const printContent = resultRef.current?.innerHTML;
    const windowPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
    if (windowPrint) {
      windowPrint.document.write(`
        <html dir="rtl">
          <head>
            <title>خروجی تحلیل رویش</title>
            <style>
              @font-face { font-family: 'Vazir'; src: url('https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/Vazir.woff2') format('woff2'); }
              body { font-family: 'Vazir', sans-serif; padding: 40px; line-height: 1.8; color: #333; }
              h1 { color: #008060; border-bottom: 2px solid #008060; padding-bottom: 10px; }
              .header { margin-bottom: 30px; }
              .footer { margin-top: 50px; font-size: 12px; color: #777; border-top: 1px solid #eee; padding-top: 10px; }
              pre { white-space: pre-wrap; font-family: inherit; font-size: 16px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>گزارش تحلیل هوشمند شتابدهنده رویش</h1>
              <p>تاریخ: ${new Date().toLocaleDateString('fa-IR')}</p>
              <p><strong>ایده مطرح شده:</strong> ${idea}</p>
            </div>
            <pre>${response}</pre>
            <div class="footer">این گزارش توسط دستیار هوشمند مرکز رشد رویش سبزوار تولید شده است.</div>
          </body>
        </html>
      `);
      windowPrint.document.close();
      windowPrint.focus();
      windowPrint.print();
      windowPrint.close();
    }
  };

  return (
    <section id="ai-incubator" className="py-24 bg-rooish-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rooish/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-rooish-light text-sm font-bold border border-white/10 mb-4">
            <Sparkles className="w-4 h-4" />
            دستیار هوشمند رویش
          </div>
          <h2 className="text-3xl lg:text-5xl font-black mb-6">ایده خود را با هوش مصنوعی بسنجید</h2>
          <p className="text-rooish-light/70 text-lg">
            دسترسی به قدرتمندترین مدل‌های زبانی برای تحلیل تخصصی ایده شما در محیطی کاملاً بومی.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-2 rounded-[2.5rem] shadow-2xl relative group-focus-within:border-rooish/50 transition-all">
          <div className="relative">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              disabled={loading}
              placeholder="ایده خود را اینجا بنویسید (مثلاً: پلتفرم فروش صنایع دستی سبزوار)..."
              className="w-full bg-transparent text-white placeholder-rooish-light/30 p-8 pt-10 rounded-[2rem] focus:ring-0 border-none text-xl resize-none h-48 leading-relaxed text-right disabled:opacity-50"
              dir="rtl"
            />
            
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <button
                onClick={analyzeIdea}
                disabled={loading || !idea.trim()}
                className="bg-rooish hover:bg-rooish-accent disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-black px-8 py-4 rounded-2xl flex items-center gap-2 transition-all shadow-xl hover:shadow-rooish/40 active:scale-95 group"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5 rotate-180" /> شروع تحلیل هوشمند</>}
              </button>
            </div>
          </div>

          {loading && (
            <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300 z-20">
              <div className="w-20 h-20 border-4 border-rooish border-t-transparent rounded-full animate-spin mb-6"></div>
              <h4 className="text-xl font-black text-white mb-2">{loadingMessages[loadingStep]}</h4>
              <p className="text-white/60 text-sm">در حال آماده‌سازی بهترین مشاوره برای شما...</p>
            </div>
          )}
        </div>

        {error && (
          <div className={`mt-8 p-6 rounded-3xl border flex items-start gap-4 animate-in slide-in-from-top-4 duration-500 ${
            error.type === 'quota' ? 'bg-orange-500/10 border-orange-500/30 text-orange-200' : 'bg-red-500/10 border-red-500/30 text-red-200'
          }`} dir="rtl">
            {error.type === 'quota' ? <ShieldAlert className="w-6 h-6 flex-shrink-0" /> : <AlertCircle className="w-6 h-6 flex-shrink-0" />}
            <div>
              <p className="font-black mb-1">{error.type === 'quota' ? 'محدودیت استفاده' : 'خطای فنی'}</p>
              <p className="text-sm opacity-80 leading-relaxed">{error.message}</p>
            </div>
          </div>
        )}

        {response && !loading && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-white rounded-[3rem] text-gray-900 p-8 lg:p-14 relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]" dir="rtl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rooish/5 rounded-full -mr-16 -mt-16"></div>
              
              <div className="relative z-10" ref={resultRef}>
                <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6 no-print">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-rooish/10 text-rooish rounded-2xl flex items-center justify-center shadow-inner">
                      <Target className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-gray-900">تحلیل نهایی ایده</h3>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mt-1">Generated by Rooish AI Assistant</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <button 
                      onClick={copyToClipboard}
                      className={`flex items-center gap-2 text-xs font-black px-4 py-2.5 rounded-xl transition-all ${copied ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                      title="کپی در حافظه"
                    >
                      {copied ? <ClipboardCheck className="w-4 h-4" /> : <ClipboardCheck className="w-4 h-4" />}
                      {copied ? 'کپی شد!' : 'کپی'}
                    </button>
                    <button 
                      onClick={shareOnWhatsApp}
                      className="flex items-center gap-2 text-xs font-black px-4 py-2.5 rounded-xl bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all"
                      title="ارسال در واتس‌اپ"
                    >
                      <Share2 className="w-4 h-4" />
                      واتس‌اپ
                    </button>
                    <button 
                      onClick={exportToPDF}
                      className="flex items-center gap-2 text-xs font-black px-4 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-all"
                      title="خروجی PDF"
                    >
                      <Printer className="w-4 h-4" />
                      PDF
                    </button>
                    <button 
                      onClick={exportToWord}
                      className="flex items-center gap-2 text-xs font-black px-4 py-2.5 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                      title="خروجی Word"
                    >
                      <Download className="w-4 h-4" />
                      Word
                    </button>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-[2.2] text-justify space-y-6">
                  {/* Rendering headings with special styles if they exist */}
                  <div className="whitespace-pre-wrap font-medium">
                    {response}
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8 no-print">
                  <div className="text-right">
                    <h4 className="font-black text-gray-900 text-xl mb-2 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-rooish" /> ایده شما پتانسیل رشد دارد!
                    </h4>
                    <p className="text-gray-500 font-medium">می‌توانید همین حالا با این تحلیل، در فراخوان جدید شتابدهنده ثبت‌نام کنید.</p>
                  </div>
                  <button 
                    onClick={handleRegisterIdea}
                    className="bg-rooish text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-rooish-dark transition-all shadow-xl shadow-rooish/20 flex items-center gap-3 hover:scale-105 active:scale-95"
                  >
                    ثبت‌نام در فراخوان رویش
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            
            <p className="text-center text-white/40 text-xs mt-8 font-bold">
              تمامی تحلیل‌ها توسط هوش مصنوعی و با رویکرد بومی سبزوار انجام شده است.
            </p>
          </div>
        )}

        {/* Hidden Admin Trigger */}
        <div className="mt-20 flex justify-center no-print">
          <button 
            onClick={() => setIsAdminOpen(true)}
            className="p-4 rounded-full text-white/5 hover:text-white/20 transition-colors"
            title="AI Management"
          >
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </section>
  );
};

export default AIIncubator;
