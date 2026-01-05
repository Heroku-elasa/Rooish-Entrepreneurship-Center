
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
  Zap
} from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [stats, setStats] = useState({
    totalRequests: 142,
    successRate: 98.2,
    avgLatency: 1.4,
    currentModel: 'Gemini 3 Pro',
    quotaUsed: 42
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-lg" onClick={onClose}></div>
      <div className="bg-[#0b1120] border border-white/10 w-full max-w-4xl rounded-[2.5rem] overflow-hidden relative shadow-2xl animate-in zoom-in duration-300">
        
        {/* Header */}
        <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-rooish rounded-2xl flex items-center justify-center shadow-lg shadow-rooish/20">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">پنل مدیریت هوش مصنوعی</h2>
              <p className="text-white/40 text-sm">Monitoring & Configuration Terminal</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-white/5 rounded-2xl transition-colors">
            <X className="w-6 h-6 text-white/50" />
          </button>
        </div>

        <div className="p-8 lg:p-12 grid lg:grid-cols-3 gap-8" dir="rtl">
          
          {/* Stats Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                <div className="flex items-center gap-3 text-rooish mb-4">
                  <Activity className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-wider">وضعیت سیستم</span>
                </div>
                <div className="text-3xl font-black text-white">عملیاتی</div>
                <p className="text-white/40 text-xs mt-1">SLA: 99.9% uptime</p>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                <div className="flex items-center gap-3 text-blue-400 mb-4">
                  <BarChart3 className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-wider">درخواست‌های امروز</span>
                </div>
                <div className="text-3xl font-black text-white">{stats.totalRequests} <span className="text-sm font-medium text-white/40">/ ۵۰۰</span></div>
                <div className="w-full bg-white/5 h-1.5 rounded-full mt-3">
                  <div className="bg-blue-400 h-full rounded-full" style={{ width: '28%' }}></div>
                </div>
              </div>
            </div>

            {/* Model Selector */}
            <div className="p-8 bg-white/5 rounded-[2rem] border border-white/5">
              <h3 className="text-white font-black mb-6 flex items-center gap-3">
                <Cpu className="w-5 h-5 text-rooish" /> انتخاب مدل فعال
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Gemini 3 Flash (Primary)', id: 'g3-flash', status: 'Active', latency: '0.8s' },
                  { name: 'Gemma 3 27B (OpenRouter Fallback)', id: 'g3-27b', status: 'Standby', latency: '1.2s' },
                  { name: 'DeepSeek R1 (Thinker)', id: 'ds-r1', status: 'Standby', latency: '2.4s' }
                ].map((model) => (
                  <div key={model.id} className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${model.status === 'Active' ? 'bg-rooish/10 border-rooish/50' : 'bg-transparent border-white/5 hover:border-white/20'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${model.status === 'Active' ? 'bg-rooish animate-pulse' : 'bg-white/20'}`}></div>
                      <span className="text-white font-bold">{model.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-white/40 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {model.latency}
                      </span>
                      <button className={`px-4 py-1.5 rounded-lg text-xs font-black ${model.status === 'Active' ? 'bg-rooish text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
                        {model.status === 'Active' ? 'فعال' : 'انتخاب'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Settings Column */}
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
              <h4 className="text-white/60 text-xs font-black mb-6 uppercase tracking-widest">محدودیت‌های OpenRouter</h4>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-white/40">درخواست در دقیقه</span>
                    <span className="text-white font-bold">12 / 20</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full">
                    <div className="bg-orange-500 h-full rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-white/40">سهمیه روزانه</span>
                    <span className="text-white font-bold">42 / 50</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-[10px] text-orange-200/70 leading-relaxed">
                  سهمیه روزانه در حال اتمام است. سیستم به‌طور خودکار به Gemini 3 سوئیچ خواهد کرد.
                </p>
              </div>
            </div>

            <button className="w-full bg-rooish text-white py-4 rounded-2xl font-black shadow-xl shadow-rooish/20 flex items-center justify-center gap-3 group">
              <Zap className="w-5 h-5 group-hover:scale-125 transition-transform" />
              ارتقای سهمیه (Top-up)
            </button>
          </div>
        </div>
        
        <div className="p-6 bg-white/5 border-t border-white/5 text-center">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
            Rooish Intelligence System v2.4.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
