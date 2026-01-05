
import React, { useState, useEffect } from 'react';
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
  RefreshCw
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

    const prompt = `به عنوان مشاور شتابدهنده رویش، این ایده را تحلیل کن و در ۳ بخش کوتاه (مزایا، چالش‌ها، نقشه راه) پاسخ بده: "${idea}"`;

    try {
      // Attempt 1: Gemini (Primary)
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const result = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: prompt,
          config: {
            systemInstruction: "You are an expert startup mentor for Rooish Accelerator in Sabzevar. Use professional Persian.",
          },
        });
        setResponse(result.text || "خطایی رخ داد.");
      } catch (geminiErr: any) {
        console.warn("Gemini failed, falling back to OpenRouter...", geminiErr);
        // Attempt 2: OpenRouter (Fallback)
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
            دستیار هوشمند رویش
          </div>
          <h2 className="text-3xl lg:text-5xl font-black mb-6">ایده خود را با هوش مصنوعی بسنجید</h2>
          <p className="text-rooish-light/70 text-lg">
            دسترسی به قدرتمندترین مدل‌های زبانی (Gemini 3 و DeepSeek) برای تحلیل تخصصی ایده شما.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-2 rounded-[2.5rem] shadow-2xl relative">
          <div className="relative">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              disabled={loading}
              placeholder="مثلاً: سامانه هوشمند مدیریت پسماند خشک در منازل..."
              className="w-full bg-transparent text-white placeholder-rooish-light/30 p-8 pt-10 rounded-[2rem] focus:ring-0 border-none text-xl resize-none h-48 leading-relaxed text-right disabled:opacity-50"
              dir="rtl"
            />
            
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <button
                onClick={analyzeIdea}
                disabled={loading || !idea.trim()}
                className="bg-rooish hover:bg-rooish-accent disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-black px-8 py-4 rounded-2xl flex items-center gap-2 transition-all shadow-xl group"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-5 h-5 rotate-180" /> تحلیل هوشمند</>}
              </button>
            </div>
          </div>

          {loading && (
            <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
              <div className="w-20 h-20 border-4 border-rooish border-t-transparent rounded-full animate-spin mb-6"></div>
              <h4 className="text-xl font-black text-white mb-2">{loadingMessages[loadingStep]}</h4>
              <p className="text-white/60 text-sm">این فرآیند معمولاً کمتر از ۱۰ ثانیه زمان می‌برد...</p>
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
              {error.type === 'quota' && (
                <div className="mt-4 flex items-center gap-4">
                  <span className="flex items-center gap-1 text-xs opacity-60"><Clock className="w-3 h-3" /> زمان باقی‌مانده تا ریست: ۴ ساعت</span>
                  <button onClick={analyzeIdea} className="text-xs font-black underline hover:text-white flex items-center gap-1">
                    <RefreshCw className="w-3 h-3" /> تلاش مجدد
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {response && !loading && (
          <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden" dir="rtl">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rooish rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black">تحلیل نهایی ایده</h3>
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
                    <p className="font-bold text-white mb-1">ایده شما پتانسیل رشد دارد!</p>
                    <p className="text-sm text-rooish-light/60">می‌توانید همین حالا برای دوره جدید شتابدهی ثبت‌نام کنید.</p>
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

        {/* Hidden Admin Trigger */}
        <div className="mt-20 flex justify-center">
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
