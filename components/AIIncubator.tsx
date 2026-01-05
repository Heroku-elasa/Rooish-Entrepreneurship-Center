
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Loader2, Target, AlertCircle, ClipboardCheck, ArrowLeft } from 'lucide-react';

const AIIncubator: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const checkApiKey = async () => {
    if (window.aistudio && typeof window.aistudio.hasSelectedApiKey === 'function') {
      const hasKey = await window.aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await window.aistudio.openSelectKey();
        return true;
      }
    }
    return true;
  };

  const analyzeIdea = async () => {
    if (!idea.trim()) return;
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      await checkApiKey();
      const apiKey = process.env.API_KEY || (typeof window !== 'undefined' ? (window as any).GEMINI_API_KEY : '');
      const ai = new GoogleGenAI(apiKey);
      const prompt = `به عنوان مشاور شتابدهنده رویش، این ایده را تحلیل کن و در ۳ بخش کوتاه (مزایا، چالش‌ها، نقشه راه) پاسخ بده: "${idea}"`;
      
      const model = ai.getGenerativeModel({
        model: 'gemini-1.5-flash',
      });

      const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      } as any);
      const text = result.response.text();

      setResponse(text || "خطایی رخ داد.");
    } catch (err: any) {
      if (err.message?.includes("Requested entity was not found") && window.aistudio) {
        setError("لطفاً کلید API معتبر انتخاب کنید.");
        await window.aistudio.openSelectKey();
      } else {
        setError("خطا در ارتباط با سرور هوش مصنوعی.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterIdea = () => {
    // ارسال اطلاعات ایده به فرم ثبت‌نام از طریق رویداد سفارشی
    const registrationEvent = new CustomEvent('open-registration-form', {
      detail: { text: `ایده: ${idea}\n\nتحلیل هوشمند:\n${response}` }
    });
    window.dispatchEvent(registrationEvent);
  };

  const copyToClipboard = () => {
    const textToCopy = `ایده: ${idea}\n\nتحلیل هوشمند رویش:\n${response}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-incubator" className="py-24 bg-rooish-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rooish/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-rooish-light text-sm font-bold border border-white/10 mb-4">
            <Sparkles className="w-4 h-4" />
            دستیار هوشمند رویش (نسخه بتا)
          </div>
          <h2 className="text-3xl lg:text-5xl font-black mb-6">ایده خود را با هوش مصنوعی بسنجید</h2>
          <p className="text-rooish-light/70 text-lg">
            ایده خود را در یک جمله بنویسید تا منتور هوشمند ما، اولین بازخورد تخصصی را به شما ارائه دهد.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-2 rounded-[2.5rem] shadow-2xl">
          <div className="relative">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="مثلاً: سامانه هوشمند مدیریت پسماند خشک در منازل..."
              className="w-full bg-transparent text-white placeholder-rooish-light/30 p-8 pt-10 rounded-[2rem] focus:ring-0 border-none text-xl resize-none h-40 leading-relaxed text-right"
              dir="rtl"
            />
            
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <button
                onClick={analyzeIdea}
                disabled={loading || !idea.trim()}
                className="bg-rooish hover:bg-rooish-accent disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-black px-8 py-4 rounded-2xl flex items-center gap-2 transition-all shadow-xl group"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5 rotate-180" /> تحلیل ایده</>}
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-8 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl flex items-center gap-3 text-red-200" dir="rtl">
            <AlertCircle className="w-5 h-5" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        {response && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden" dir="rtl">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rooish rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black">تحلیل هوشمند رویش</h3>
                  </div>
                  <button 
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-all"
                  >
                    {copied ? <ClipboardCheck className="w-4 h-4 text-green-400" /> : <><span className="hidden sm:inline">کپی متن تحلیل</span><ClipboardCheck className="w-4 h-4" /></>}
                  </button>
                </div>
                
                <div className="prose prose-invert max-w-none whitespace-pre-wrap text-rooish-light/90 text-lg leading-relaxed mb-10">
                  {response}
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-right">
                    <p className="font-bold text-white mb-1">از این تحلیل راضی هستید؟</p>
                    <p className="text-sm text-rooish-light/60">می‌توانید همین حالا ایده خود را در بخش فراخوان ثبت کنید.</p>
                  </div>
                  <button 
                    onClick={handleRegisterIdea}
                    className="bg-white text-rooish-dark px-10 py-4 rounded-full font-black text-lg hover:bg-rooish-light transition-all shadow-xl flex items-center gap-3"
                  >
                    ثبت ایده در فراخوان
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIIncubator;
