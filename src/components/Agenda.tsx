import React, { useState } from 'react';
import { MOCK_AGENDA } from '../data/mockData';
import { Calendar, Clock, MapPin, User, Tag, Sparkles } from 'lucide-react';
import { IslamicStarDivider, IslamicWatermark } from './IslamicMotif';

export const Agenda: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Kajian Ahad', 'Aisyiyah', 'Pemuda', 'TPQ', 'Umum'];

  const filteredAgenda = MOCK_AGENDA.filter((item) => {
    if (selectedCategory === 'Semua') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="agenda" className="relative py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <IslamicWatermark position="bottom-left" size={340} opacity="opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Tanpa Pill Badge) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="text-xs uppercase font-extrabold tracking-widest text-surya-700">
            Syiar & Majelis Ilmu Berkelanjutan
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-muhammadiyah-950 tracking-tight">
            Agenda & Jadwal Kajian Rutin
          </h2>

          <IslamicStarDivider />
          
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Taman-taman surga terbuka untuk seluruh jamaah Sidowungu, Menganti, dan sekitarnya. Gratis & terbuka untuk umum.
          </p>

          {/* Filter Kategori */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-muhammadiyah-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Kartu Kajian */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgenda.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Kartu: Kategori & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                    {item.badge}
                  </span>
                </div>

                {/* Judul Kajian */}
                <h3 className="text-base font-bold text-slate-900 tracking-tight mb-2 leading-snug">
                  {item.title}
                </h3>

                {/* Pemateri */}
                <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <User className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">{item.speaker}</span>
                </div>

                {/* Deskripsi */}
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Footer Kartu: Waktu & Lokasi */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span className="font-bold text-slate-800">{item.day}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Layanan Ramah Lansia pada Kajian Ahad */}
        <div className="mt-10 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-slate-900">
              Kajian Ahad Shubuh Ramah Lansia
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Disediakan sarapan sehat, teh/kopi hangat, pemeriksaan tensi gratis berkala, dan tempat duduk kursi nyaman bagi jamaah lansia.
            </p>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Assalamu'alaikum%20Takmir%20Masjid%20Al-Ishlah,%20saya%20ingin%20menanyakan%20informasi%20kajian"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all whitespace-nowrap min-h-[48px] flex items-center justify-center"
          >
            Tanya Jadwal via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};
