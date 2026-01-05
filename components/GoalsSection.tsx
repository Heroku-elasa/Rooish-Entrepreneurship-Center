
import React from 'react';
import { CONTENT } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const GoalsSection: React.FC = () => {
  return (
    <section id="goals" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">اهداف و رسالت‌های ما</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ما بر آنیم تا با تمرکز بر این اهداف کلیدی، آینده‌ای روشن برای اکوسیستم استارتاپی منطقه رقم بزنیم.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTENT.goals.map((goal, index) => (
            <div key={index} className="flex gap-4 items-start p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-gray-100 transition-all border border-transparent hover:border-emerald-100">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{goal.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {goal.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
