import React from 'react';
import { Calendar, MapPin, Heart, Clock, Compass, ShieldCheck } from 'lucide-react';
import { Islamic3DStar } from './Islamic3DStar';
import { IslamicArabesqueBand } from './IslamicMotif';

interface HeroProps {
  onOpenZiswaf: () => void;
  gregorianDate: string;
  hijriDate: string;
  nextPrayerName?: string;
  nextPrayerRemaining?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenZiswaf,
  gregorianDate,
  hijriDate,
  nextPrayerName,
  nextPrayerRemaining,
}) => {
  return (
    <section id="beranda" className="relative py-14 md:py-20 bg-gradient-to-br from-muhammadiyah-950 via-muhammadiyah-900 to-muhammadiyah-950 text-white border-b border-muhammadiyah-800 overflow-hidden">
      {/* Nuansa Keislaman: Ornamen Surya 12 Geometris Muhammadiyah Berotasi Halus di Latar Belakang */}
      <div className="absolute -right-20 -top-20 w-[550px] h-[550px] pointer-events-none opacity-[0.09] text-surya-400 select-none animate-spin-slow">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <polygon points="100,0 120,60 180,40 140,90 200,100 140,110 180,160 120,140 100,200 80,140 20,160 60,110 0,100 60,90 20,40 80,60" />
          <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>

      {/* Ornamen Bintang Geometris Kiri Bawah */}
      <div className="absolute -left-24 -bottom-24 w-[450px] h-[450px] pointer-events-none opacity-[0.07] text-surya-400 select-none animate-spin-slow">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <polygon points="100,0 120,60 180,40 140,90 200,100 140,110 180,160 120,140 100,200 80,140 20,160 60,110 0,100 60,90 20,40 80,60" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Kolom Kiri: Typographic Editorial Hero */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Afiliasi (Tanpa Badge Pill) */}
            <div className="text-xs uppercase font-extrabold tracking-widest text-surya-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-surya-500 animate-pulse"></span>
              <span>Pimpinan Ranting Muhammadiyah Sidowungu &bull; Menganti Gresik</span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Pusat Ibadah & Dakwah Berkemajuan
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-surya-300">
                Masjid Al-Ishlah Sidowungu
              </p>
            </div>

            {/* Subtext Pendek (<20 Kata) */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-[55ch]">
              Sentra ibadah sholat berjamaah, pengajian pencerahan, dan ta’awun sosial kemanusiaan masyarakat Desa Sidowungu, Kecamatan Menganti, Kabupaten Gresik.
            </p>

            {/* Kutipan Ayat QS. At-Taubah: 18 (Clean Box) */}
            <div className="p-4 sm:p-5 rounded-xl bg-muhammadiyah-900/90 border-l-4 border-surya-500 border-y border-r border-muhammadiyah-700/80 space-y-2 shadow-sm">
              <p className="font-arabic text-right text-lg sm:text-xl text-amber-100 leading-relaxed" dir="rtl">
                إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ
              </p>
              <p className="text-xs text-slate-300 italic">
                &ldquo;Hanya yang memakmurkan masjid-masjid Allah ialah orang-orang yang beriman kepada Allah dan hari kemudian, serta mendirikan shalat, menunaikan zakat...&rdquo; (QS. At-Taubah: 18)
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#jadwal-sholat"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-surya-500 to-surya-600 hover:from-surya-400 hover:to-surya-500 text-muhammadiyah-950 font-black text-sm shadow-md transition-all min-h-[48px]"
              >
                <Clock className="w-4 h-4 text-muhammadiyah-950" />
                <span>Jadwal Sholat Sidowungu</span>
              </a>

              <button
                onClick={onOpenZiswaf}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-muhammadiyah-800 hover:bg-muhammadiyah-700 text-white border border-muhammadiyah-600 font-bold text-sm shadow-sm transition-all min-h-[48px]"
              >
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Salurkan Infaq (QRIS)</span>
              </button>

              <a
                href="#lokasi"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-slate-300 hover:text-white text-sm font-semibold transition-colors min-h-[48px]"
              >
                <MapPin className="w-4 h-4 text-surya-400" />
                <span>Peta Lokasi</span>
              </a>
            </div>

            {/* Jaminan Fasilitas Lansia */}
            <div className="flex items-center gap-4 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Akses Kursi Roda & Wudhu Duduk</span>
              </div>
              <span>&bull;</span>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-surya-400" />
                <span>Kiblat 294° Terkalibrasi</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: 3D Islamic Polyhedron + Bento Card */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-3">
            {/* Ornamen 3D Bintang Islami Berputar (Three.js WebGL & Scroll-Driven) */}
            <div className="flex flex-col items-center">
              <Islamic3DStar size={240} className="filter drop-shadow-[0_12px_28px_rgba(245,158,11,0.3)]" />
              <div className="text-[10px] font-mono font-bold text-surya-400 uppercase tracking-widest -mt-2">
                ✦ 3D Bintang Surya Muhammadiyah (Scroll & Tilt) ✦
              </div>
            </div>

            <div className="w-full p-5 sm:p-6 rounded-2xl bg-muhammadiyah-900/90 border border-muhammadiyah-700/80 shadow-elevated space-y-4">
              {/* Header Kalender */}
              <div className="flex items-center justify-between border-b border-muhammadiyah-700/80 pb-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-surya-300">
                    <Calendar className="w-3.5 h-3.5 text-surya-400" />
                    <span>{hijriDate}</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    {gregorianDate}
                  </div>
                </div>
                <span className="text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                  WIB (UTC+7)
                </span>
              </div>

              {/* Sholat Terdekat Highlight */}
              {nextPrayerName && (
                <div className="p-4 rounded-xl bg-muhammadiyah-950/80 border border-surya-500/40 shadow-inner space-y-1.5">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Waktu Sholat Berikutnya:
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {nextPrayerName}
                  </div>
                  <div className="inline-block px-3 py-1 text-xs font-extrabold bg-surya-500 text-muhammadiyah-950 rounded shadow-xs">
                    Tersisa: {nextPrayerRemaining || 'Menghitung...'}
                  </div>
                </div>
              )}

              {/* Identitas Lokasi Presisi */}
              <div className="pt-1 text-xs text-slate-300 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-surya-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Masjid Al-Ishlah Sidowungu</span>
                  <div className="text-slate-400">Kec. Menganti, Kab. Gresik, Jawa Timur</div>
                </div>
              </div>

              {/* Stat Ringkas */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-muhammadiyah-700/80 text-center">
                <div className="p-2 rounded-lg bg-muhammadiyah-850/70 border border-muhammadiyah-700/60">
                  <div className="text-base font-black text-white">1984</div>
                  <div className="text-[10px] text-slate-400">Tahun Berdiri</div>
                </div>
                <div className="p-2 rounded-lg bg-muhammadiyah-850/70 border border-muhammadiyah-700/60">
                  <div className="text-base font-black text-surya-400">850</div>
                  <div className="text-[10px] text-slate-400">Kapasitas</div>
                </div>
                <div className="p-2 rounded-lg bg-muhammadiyah-850/70 border border-muhammadiyah-700/60">
                  <div className="text-base font-black text-amber-400">+8 Mnt</div>
                  <div className="text-[10px] text-slate-400">Subuh Tarjih</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
