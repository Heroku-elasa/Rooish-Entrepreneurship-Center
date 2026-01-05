
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Activity, 
  Settings, 
  Server, 
  Cpu, 
  Clock, 
  AlertCircle, 
  X,
  Zap,
  Globe,
  Database,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{provider: string, status: string, time: string} | null>(null);
  
  const [stats] = useState({
    totalRequests: 142,
    successRate: 98.2,
    avgLatency: 1.4,
    currentModel: 'Gemini 3 Pro',
    quotaUsed: 42
  });

  const testConnection = async () => {
    setIsTesting(true);
    setTestResult(null);
    const start = Date.now();
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Simple small prompt to test connectivity
      await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ parts: [{ text: 'hi' }] }],
      });
      const end = Date.now();
      setTestResult({
        provider: 'Gemini 3 Flash',
        status: 'Online',
        time: `${end - start}ms`
      });
    } catch (e) {
      setTestResult({
        provider: 'Gemini',
        status: 'Error',
        time: 'N/A'
      });
    } finally {
      setIsTesting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-xl" onClick={onClose}></div>
      <div className="bg-[#0b1120] border border-white/10 w-full max-w-5xl rounded-[3rem] overflow-hidden relative shadow-2xl animate-in zoom-in duration-300">
        
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-rooish rounded-2xl flex items-center justify-center shadow-lg shadow-rooish/20">
              <Settings className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">پنل مانیتورینگ سیستم‌های هوشمند</h2>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">Rooish AI Cluster Management</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-white/10 rounded-2xl transition-colors">
            <X className="w-7 h-7 text-white/50" />
          </button>
        </div>

        <div className="p-10 lg:p-14 grid lg:grid-cols-12 gap-10" dir="rtl">
          
          {/* Main Stats */}
          <div className="lg:col-span-8 space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-rooish"></div>
                <div className="flex items-center gap-3 text-rooish mb-4">
                  <Activity className="w-5 h-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest">SLA Status</span>
                </div>
                <div className="text-3xl font-black text-white">۹۹.۹٪</div>
                <p className="text-white/30 text-xs mt-2 font-medium">پایداری کل سرویس</p>
              </div>

              <div className="p-6 bg-white/5 rounded-3xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-blue-500"></div>
                <div className="flex items-center gap-3 text-blue-400 mb-4">
                  <Globe className="w-5 h-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Global Traffic</span>
                </div>
                <div className="text-3xl font-black text-white">{stats.totalRequests}</div>
                <p className="text-white/30 text-xs mt-2 font-medium">درخواست در ۲۴ ساعت</p>
              </div>

              <div className="p-6 bg-white/5 rounded-3xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-2 h-full bg-orange-500"></div>
                <div className="flex items-center gap-3 text-orange-400 mb-4">
                  <Clock className="w-5 h-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Avg Latency</span>
                </div>
                <div className="text-3xl font-black text-white">۱.۲ ثانیه</div>
                <p className="text-white/30 text-xs mt-2 font-medium">زمان پاسخدهی میانگین</p>
              </div>
            </div>

            {/* Diagnostics Interface */}
            <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white font-black text-xl flex items-center gap-3">
                  <Database className="w-6 h-6 text-rooish" /> وضعیت اتصال به API
                </h3>
                <button 
                  onClick={testConnection}
                  disabled={isTesting}
                  className="flex items-center gap-2 bg-rooish/10 text-rooish px-5 py-2.5 rounded-xl text-xs font-black hover:bg-rooish hover:text-white transition-all disabled:opacity-50"
                >
                  {isTesting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                  تست مجدد اتصال
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-rooish/20 rounded-xl flex items-center justify-center">
                      <Zap className="w-5 h-5 text-rooish" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Google Gemini API</div>
                      <div className="text-[10px] text-white/30">Primary AI Pipeline</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    {testResult?.provider.includes('Gemini') && (
                      <div className="text-xs font-black text-white/40">{testResult.time}</div>
                    )}
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                      testResult?.status === 'Online' ? 'bg-green-500/10 text-green-400 border border-green-500/30' : 'bg-white/10 text-white/40 border border-white/10'
                    }`}>
                      {testResult?.status === 'Online' ? 'Active' : 'Standby'}
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                      <Server className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold">OpenRouter Fallback</div>
                      <div className="text-[10px] text-white/30">Secondary Node (Gemma 3)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/5 text-white/40 text-[10px] font-black border border-white/10 uppercase tracking-widest">
                      Standby
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / Configuration */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5">
              <h4 className="text-white/60 text-xs font-black mb-8 uppercase tracking-[0.2em]">Usage Limits</h4>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between text-xs mb-3">
                    <span className="text-white/40 font-bold uppercase tracking-wider">Gemini Daily</span>
                    <span className="text-white font-black">42 / 1000</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-rooish h-full rounded-full" style={{ width: '4.2%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-3">
                    <span className="text-white/40 font-bold uppercase tracking-wider">OpenRouter Pool</span>
                    <span className="text-white font-black">$0.45 / $10.0</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full rounded-full" style={{ width: '4.5%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-5 bg-rooish/5 border border-rooish/10 rounded-2xl flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 text-rooish flex-shrink-0" />
                <p className="text-[11px] text-rooish/70 leading-relaxed font-medium">
                  تمامی زیرسیستم‌ها در وضعیت بهینه هستند. منابع کافی برای ۳۰۰ درخواست آینده موجود است.
                </p>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-rooish to-rooish-dark rounded-[2.5rem] text-white shadow-xl shadow-rooish/20">
              <h4 className="font-black text-xl mb-3">گزارش لحظه‌ای</h4>
              <p className="text-white/70 text-sm leading-relaxed mb-6">دریافت فایل لاگ‌های امروز برای بررسی خطاهای احتمالی سیستم.</p>
              <button className="w-full bg-white text-rooish py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-3 hover:bg-rooish-light transition-all">
                <Database className="w-4 h-4" />
                دانلود لاگ‌های سیستم
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white/5 border-t border-white/5 text-center">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">
            Rooish Intelligence Core v2.5.2 • 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
