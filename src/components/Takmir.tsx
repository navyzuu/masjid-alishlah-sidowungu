import React from 'react';
import { MOCK_TAKMIR } from '../data/mockData';
import { Users, Shield, CheckCircle } from 'lucide-react';

export const Takmir: React.FC = () => {
  return (
    <section id="pengurus" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muhammadiyah-50 text-muhammadiyah-700 text-xs sm:text-sm font-bold border border-muhammadiyah-200">
            <Users className="w-4 h-4 text-surya-500" />
            <span>Kepengurusan Amanah & Melayani</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-muhammadiyah-950 tracking-tight">
            Struktur Takmir Masjid Al-Ishlah
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Masa Bakti Khidmat 2024–2028 &bull; Di bawah Naungan Pimpinan Ranting Muhammadiyah Sidowungu
          </p>
        </div>

        {/* Grid Pengurus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_TAKMIR.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-muhammadiyah-300 hover:bg-white shadow-sm hover:shadow-card transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-muhammadiyah-800 to-muhammadiyah-950 text-white flex items-center justify-center font-bold text-lg shadow-sm border border-surya-500/30">
                  {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight">
                    {member.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold text-muhammadiyah-700 mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-1 flex items-center gap-1">
                    <Shield className="w-3 h-3 text-surya-500" />
                    <span>{member.division}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dewan Penasehat & Pengawas */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-muhammadiyah-900 to-muhammadiyah-950 text-white border border-muhammadiyah-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-bold text-surya-400 uppercase tracking-wider">
              Dewan Penasehat & Pengawas Syariah
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Pimpinan Ranting Muhammadiyah & Pimpinan Ranting Aisyiyah Sidowungu
            </h4>
            <p className="text-xs text-slate-300">
              Menjaga kemurnian aqidah, ketepatan hisab tarjih sholat, dan akuntabilitas pengelolaan aset wakaf.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muhammadiyah-800 text-xs font-semibold text-slate-200 border border-muhammadiyah-700">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Terdaftar di Lazismu Gresik</span>
          </div>
        </div>

      </div>
    </section>
  );
};
