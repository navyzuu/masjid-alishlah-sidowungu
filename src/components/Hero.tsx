import React from 'react';
import { Calendar, MapPin, Heart, Clock, Compass, ShieldCheck } from 'lucide-react';

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
    <section id="beranda" className="relative py-16 md:py-24 bg-white border-b border-slate-200 overflow-hidden">
      {/* Nuansa Keislaman: Ornamen Surya 12 Geometris Muhammadiyah Berotasi Halus di Latar Belakang */}
      <div className="absolute -right-24 -top-24 w-[500px] h-[500px] pointer-events-none opacity-[0.04] text-muhammadiyah-900 select-none animate-spin-slow">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          {/* 12-Pointed Islamic Star Geometry */}
          <polygon points="100,0 120,60 180,40 140,90 200,100 140,110 180,160 120,140 100,200 80,140 20,160 60,110 0,100 60,90 20,40 80,60" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Kolom Kiri: Typographic Editorial Hero */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Header Afiliasi (Tanpa Badge Pill) */}
            <div className="text-xs uppercase font-extrabold tracking-widest text-muhammadiyah-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-surya-500"></span>
              <span>Pimpinan Ranting Muhammadiyah Sidowungu &bull; Menganti Gresik</span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-muhammadiyah-950 leading-tight">
                Pusat Ibadah & Dakwah Berkemajuan
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-muhammadiyah-800">
                Masjid Al-Ishlah Sidowungu
              </p>
            </div>

            {/* Subtext Pendek (<20 Kata) */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-[55ch]">
              Sentra ibadah sholat berjamaah, pengajian pencerahan, dan ta’awun sosial kemanusiaan masyarakat Desa Sidowungu, Kecamatan Menganti, Kabupaten Gresik.
            </p>

            {/* Kutipan Ayat QS. At-Taubah: 18 (Clean Box) */}
            <div className="p-4 sm:p-5 rounded-xl bg-muhammadiyah-50/70 border border-muhammadiyah-100 space-y-2">
              <p className="font-arabic text-right text-lg sm:text-xl text-muhammadiyah-950 leading-relaxed" dir="rtl">
                إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ
              </p>
              <p className="text-xs text-slate-600 italic">
                &ldquo;Hanya yang memakmurkan masjid-masjid Allah ialah orang-orang yang beriman kepada Allah dan hari kemudian, serta mendirikan shalat, menunaikan zakat...&rdquo; (QS. At-Taubah: 18)
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#jadwal-sholat"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-muhammadiyah-900 hover:bg-muhammadiyah-800 text-white font-bold text-sm shadow-sm transition-all min-h-[48px]"
              >
                <Clock className="w-4 h-4 text-surya-400" />
                <span>Jadwal Sholat Sidowungu</span>
              </a>

              <button
                onClick={onOpenZiswaf}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-surya-500 to-surya-600 hover:from-surya-400 hover:to-surya-500 text-muhammadiyah-950 font-extrabold text-sm shadow-sm transition-all min-h-[48px]"
              >
                <Heart className="w-4 h-4 text-muhammadiyah-950" />
                <span>Salurkan Infaq (QRIS)</span>
              </button>

              <a
                href="#lokasi"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-muhammadiyah-800 hover:text-muhammadiyah-950 text-sm font-semibold transition-colors min-h-[48px]"
              >
                <MapPin className="w-4 h-4 text-surya-600" />
                <span>Peta Lokasi</span>
              </a>
            </div>

            {/* Jaminan Fasilitas Lansia */}
            <div className="flex items-center gap-4 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Akses Kursi Roda & Wudhu Duduk</span>
              </div>
              <span>&bull;</span>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-muhammadiyah-700" />
                <span>Kiblat 294° Terkalibrasi</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Bento Card Jadwal Mendatang & Kalender */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-muhammadiyah-50/60 border border-muhammadiyah-200/80 shadow-sm space-y-5">
              
              {/* Header Kalender */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{hijriDate}</span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    {gregorianDate}
                  </div>
                </div>
                <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                  WIB (UTC+7)
                </span>
              </div>

              {/* Sholat Terdekat Highlight */}
              {nextPrayerName && (
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Waktu Sholat Berikutnya:
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">
                    {nextPrayerName}
                  </div>
                  <div className="inline-block px-3 py-1 text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 rounded">
                    Tersisa: {nextPrayerRemaining || 'Menghitung...'}
                  </div>
                </div>
              )}

              {/* Identitas Lokasi Presisi */}
              <div className="pt-2 text-xs text-slate-600 flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-800">Masjid Al-Ishlah Sidowungu</span>
                  <div className="text-slate-500">Kec. Menganti, Kab. Gresik, Jawa Timur</div>
                </div>
              </div>

              {/* Stat Ringkas */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 text-center">
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <div className="text-base font-black text-slate-900">1984</div>
                  <div className="text-[10px] text-slate-500">Tahun Berdiri</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <div className="text-base font-black text-slate-900">850</div>
                  <div className="text-[10px] text-slate-500">Kapasitas</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                  <div className="text-base font-black text-amber-700">+8 Mnt</div>
                  <div className="text-[10px] text-slate-500">Subuh Tarjih</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
