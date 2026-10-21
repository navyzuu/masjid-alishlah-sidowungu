import React from 'react';
import { MOCK_FACILITIES } from '../data/mockData';
import { Wind, Accessibility, Droplets, Volume2, Ambulance, BookOpen, HeartHandshake } from 'lucide-react';
import { IslamicStarDivider, IslamicWatermark, IslamicArabesqueBand } from './IslamicMotif';

export const Facilities: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wind':
        return <Wind className="w-6 h-6 text-sky-600" />;
      case 'Accessibility':
        return <Accessibility className="w-6 h-6 text-emerald-600" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-blue-600" />;
      case 'Volume2':
        return <Volume2 className="w-6 h-6 text-amber-600" />;
      case 'Ambulance':
        return <Ambulance className="w-6 h-6 text-rose-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-indigo-600" />;
      default:
        return <HeartHandshake className="w-6 h-6 text-muhammadiyah-700" />;
    }
  };

  return (
    <section id="fasilitas" className="relative py-16 sm:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <IslamicWatermark position="top-right" size={380} opacity="opacity-[0.08]" />
      <IslamicWatermark position="bottom-left" size={320} opacity="opacity-[0.06]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Tanpa Pill Badge) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="text-xs uppercase font-extrabold tracking-widest text-muhammadiyah-700">
            Kenyamanan & Aksesibilitas Jamaah
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-muhammadiyah-950 tracking-tight">
            Fasilitas Masjid Ramah Semua Usia
          </h2>

          <IslamicStarDivider />
          <IslamicArabesqueBand className="-mt-2 mb-2" />
          
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Dirancang secara khusus dengan mengutamakan kenyamanan, kemudahan mobilitas, dan kebersihan prima bagi jamaah anak-anak hingga lansia sepuh.
          </p>
        </div>

        {/* Grid Fasilitas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_FACILITIES.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200">
                    {getIcon(fac.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                    {fac.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2">
                  {fac.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {fac.description}
                </p>
              </div>

              {/* Callout Ramah Lansia */}
              {fac.seniorFriendlyNote && (
                <div className="mt-2 p-3 rounded-lg bg-amber-50/80 border border-amber-200 text-xs text-amber-950">
                  <strong className="text-amber-900 block mb-0.5">Prioritas Jamaah Sepuh:</strong>
                  {fac.seniorFriendlyNote}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Layanan Tambahan: Kursi Sholat & Pengantaran Lansia */}
        <div className="mt-10 bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-200">
              <Accessibility className="w-6 h-6 text-slate-800" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">
                Membutuhkan Kursi Roda atau Bantuan Masuk Masjid?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Petugas marbot dan relawan siap membantu jamaah yang membutuhkan pendampingan saat sholat berjamaah atau sholat Jumat.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Assalamu'alaikum,%20mohon%20bantuan%20kursi%20roda/pendampingan%20sholat%20di%20Masjid%20Al-Ishlah"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap min-h-[48px] flex items-center justify-center"
          >
            Hubungi Petugas Marbot
          </a>
        </div>

      </div>
    </section>
  );
};
