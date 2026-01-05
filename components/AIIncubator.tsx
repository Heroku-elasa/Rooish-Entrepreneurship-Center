
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
  Download,
  CheckCircle,
  Server
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
  const [activeProvider, setActiveProvider] = useState<'Gemini' | 'OpenRouter' | null>(null);
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
      setActiveProvider('OpenRouter');
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

      if (!res.ok) throw new Error(`OpenRouter Error: ${res.status}`);
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
    setActiveProvider('Gemini');

    const prompt = `به عنوان مشاور شتابدهنده رویش، این ایده را تحلیل کن و در ۳ بخش کوتاه با تیترهای جذاب (۱. مزایا، ۲. چالش‌ها، ۳. نقشه راه) پاسخ بده. از ایموجی‌های مناسب استفاده کن و لحن حرفه‌ای و انگیزشی داشته باش: "${idea}"`;

    try {
      // Primary attempt with Gemini 3 Flash
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const result = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: [{ parts: [{ text: prompt }] }],
          config: {
            systemInstruction: "You are an expert startup mentor for Rooish Accelerator in Sabzevar. You have deep knowledge of the local economy and craft industry. Respond in professional Persian with structured sections.",
          },
        });
        
        if (result.text) {
          setResponse(result.text);
        } else {
          throw new Error("Empty Response");
        }
      } catch (geminiErr: any) {
        console.warn("Gemini Primary failed, trying fallback...", geminiErr);
        // Fallback to OpenRouter
        const orResult = await callOpenRouter(prompt);
        setResponse(orResult);
      }
    } catch (err: any) {
      console.error("All AI pipelines failed:", err);
      setError({
        message: "متأسفانه در حال حاضر سیستم‌های تحلیل هوشمند با اختلال مواجه هستند. لطفاً دقایقی دیگر تلاش کنید.",
        type: 'api'
      });
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

  return (
    <section id="ai-incubator" className="py-24 bg-[#051a14] text-white relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#008060 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rooish/10 rounded-full blur-[140px] -mr-96 -mt-96"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-rooish-light text-xs font-black border border-white/10 mb-6 uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4 text-rooish animate-pulse" />
            AI Consultation Engine
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">ایده خود را با هوش مصنوعی بسنجید</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
            دسترسی به قدرتمندترین مدل‌های زبانی برای تحلیل تخصصی ایده‌های استارتاپی در بوم کسب‌وکار سبزوار.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl relative overflow-hidden group-focus-within:border-rooish/50 transition-all">
          <div className="relative">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              disabled={loading}
              placeholder="ایده خود را شرح دهید... (مثلاً: پلتفرم هوشمند توزیع محصولات کشاورزی سبزوار)"
              className="w-full bg-transparent text-white placeholder-white/20 p-10 pt-12 rounded-[2rem] focus:ring-0 border-none text-xl resize-none h-56 leading-relaxed text-right disabled:opacity-50 font-medium"
              dir="rtl"
            />
            
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-6">
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-wider transition-colors ${
                  activeProvider ? 'bg-rooish/10 border-rooish/30 text-rooish' : 'bg-white/5 border-white/10 text-white/30'
                }`}>
                  <Server className="w-3 h-3" />
                  Provider: {activeProvider || 'Standby'}
                </div>
                {activeProvider && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-black uppercase tracking-wider">
                    <CheckCircle className="w-3 h-3" />
                    Online
                  </div>
                )}
              </div>
              <button
                onClick={analyzeIdea}
                disabled={loading || !idea.trim()}
                className="w-full md:w-auto bg-rooish hover:bg-rooish-accent disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-black px-10 py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl hover:shadow-rooish/40 active:scale-95 group"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-6 h-6 rotate-180" /> شروع تحلیل هوشمند</>}
              </button>
            </div>
          </div>

          {loading && (
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-md rounded-[3rem] flex flex-col items-center justify-center p-10 text-center animate-in fade-in duration-300 z-20">
              <div className="relative mb-8">
                <div className="w-24 h-24 border-4 border-rooish/20 rounded-full"></div>
                <div className="absolute top-0 left-0 w-24 h-24 border-4 border-rooish border-t-transparent rounded-full animate-spin"></div>
              </div>
              <h4 className="text-2xl font-black text-white mb-3">{loadingMessages[loadingStep]}</h4>
              <p className="text-white/40 text-sm font-medium">هوش مصنوعی در حال بررسی سناریوهای مختلف بازار است...</p>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-8 p-6 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-200 flex items-start gap-4 animate-in slide-in-from-top-4 duration-500" dir="rtl">
            <AlertCircle className="w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-black mb-1">خطای پردازش</p>
              <p className="text-sm opacity-80 leading-relaxed">{error.message}</p>
            </div>
          </div>
        )}

        {response && !loading && (
          <div className="mt-16 animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="bg-white rounded-[3.5rem] text-gray-900 p-10 lg:p-16 relative overflow-hidden shadow-2xl" dir="rtl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-rooish/5 rounded-full -mr-24 -mt-24"></div>
              
              <div className="relative z-10" ref={resultRef}>
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8 no-print">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-rooish/10 text-rooish rounded-2xl flex items-center justify-center shadow-inner">
                      <Target className="w-9 h-9" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-gray-900">گزارش تحلیل ایده</h3>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-[0.2em] mt-2">Verified by Rooish Innovation Hub</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <button 
                      onClick={copyToClipboard}
                      className={`flex items-center gap-2 text-xs font-black px-5 py-3 rounded-xl transition-all ${copied ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      <ClipboardCheck className="w-4 h-4" />
                      {copied ? 'کپی شد!' : 'کپی تحلیل'}
                    </button>
                    <button 
                      onClick={shareOnWhatsApp}
                      className="flex items-center gap-2 text-xs font-black px-5 py-3 rounded-xl bg-green-50 text-green-600 hover:bg-green-600 hover:text-white transition-all"
                    >
                      <Share2 className="w-4 h-4" />
                      واتس‌اپ
                    </button>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-[2.2] text-justify space-y-8">
                  <div className="whitespace-pre-wrap font-medium text-xl border-r-4 border-rooish/20 pr-8">
                    {response}
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-10 no-print">
                  <div className="text-right max-w-xl">
                    <h4 className="font-black text-gray-900 text-2xl mb-3 flex items-center gap-3">
                      <Sparkles className="w-6 h-6 text-rooish" /> مسیر شما از اینجا شروع می‌شود
                    </h4>
                    <p className="text-gray-500 font-medium text-lg leading-relaxed">این تحلیل یک نقطه شروع است. برای دریافت حمایت‌های مالی و فضای کار، در فراخوان رسمی ما ثبت‌نام کنید.</p>
                  </div>
                  <button 
                    onClick={handleRegisterIdea}
                    className="w-full lg:w-auto bg-rooish text-white px-14 py-6 rounded-3xl font-black text-2xl hover:bg-rooish-dark transition-all shadow-2xl shadow-rooish/30 flex items-center justify-center gap-4 hover:scale-105 active:scale-95"
                  >
                    ارسال ایده به شتابدهنده
                    <ArrowLeft className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 flex justify-center no-print">
          <button 
            onClick={() => setIsAdminOpen(true)}
            className="p-4 rounded-full text-white/5 hover:text-white/20 transition-colors flex items-center gap-2"
          >
            <Settings className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-widest">Admin Dashboard</span>
          </button>
        </div>
      </div>

      <AdminPanel isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </section>
  );
};

export default AIIncubator;
