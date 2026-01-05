
import React from 'react';
import { CONTENT } from '../constants';
import { Building } from 'lucide-react';

const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">سازمان‌های همکار</h2>
          <p className="text-gray-600">همراهانی که در این مسیر همگام با ما هستند</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONTENT.partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <Building className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-gray-700 font-medium text-sm">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
