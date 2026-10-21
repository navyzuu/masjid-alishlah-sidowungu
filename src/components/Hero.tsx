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
    <section id="beranda" className="relative islamic-pattern text-white py-16 md:py-24 overflow-hidden border-b border-muhammadiyah-800">
      {/* Decorative Islamic Radiant Sun Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-muhammadiyah-600/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute -top-24 right-10 w-96 h-96 bg-surya-500/10 rounded-full blur-2xl pointer-events-none -z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Sisi Kiri: Deskripsi & Identitas Masjid */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge Ranting & Cabang Resmi */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-muhammadiyah-800/90 border border-muhammadiyah-600/80 rounded-full px-4 py-1.5 shadow-sm text-xs md:text-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-surya-400"></span>
              <span className="text-slate-200 font-medium">Pimpinan Ranting Muhammadiyah Sidowungu</span>
              <span className="text-slate-400 hidden sm:inline">&bull;</span>
              <span className="text-surya-300 font-semibold hidden sm:inline">PCM Menganti Gresik</span>
            </div>

            {/* Nama Masjid & Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                MASJID <span className="text-transparent bg-clip-text bg-gradient-to-r from-surya-400 via-amber-300 to-surya-500">AL-ISHLAH</span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-slate-200">
                Pusat Ibadah, Pembinaan Jamaah & Dakwah Berkemajuan
              </p>
            </div>

            {/* Kutipan Ayat QS At-Taubah: 18 */}
            <div className="bg-muhammadiyah-950/70 border-l-4 border-surya-500 p-4 sm:p-5 rounded-r-2xl space-y-3 backdrop-blur-sm text-left">
              <p className="font-arabic text-right text-xl sm:text-2xl text-amber-100 leading-loose">
                إِنَّمَا يَعْمُرُ مَسَاجِدَ اللَّهِ مَنْ آمَنَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَأَقَامَ الصَّلَاةَ وَآتَى الزَّكَاةَ
              </p>
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                &ldquo;Sesungguhnya yang memakmurkan masjid-masjid Allah ialah orang-orang yang beriman kepada Allah dan hari kemudian, serta (tetap) mendirikan shalat, menunaikan zakat...&rdquo; (QS. At-Taubah: 18)
              </p>
            </div>

            {/* Tombol Aksi Cepat (Ramah Sentuhan Lansia) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#jadwal-sholat"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-surya-500 hover:bg-surya-400 text-muhammadiyah-950 font-extrabold text-base shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
              >
                <Clock className="w-5 h-5 text-muhammadiyah-950" />
                <span>Jadwal Sholat Realtime</span>
              </a>

              <button
                onClick={onOpenZiswaf}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-muhammadiyah-800 hover:bg-muhammadiyah-700 text-white border border-muhammadiyah-600/80 font-bold text-base shadow-md transition-all min-h-[48px]"
              >
                <Heart className="w-5 h-5 text-rose-400" />
                <span>Infaq & Sedekah (QRIS)</span>
              </button>

              <a
                href="#lokasi"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-slate-300 hover:text-white hover:bg-muhammadiyah-800/60 font-semibold text-sm transition-colors min-h-[48px]"
              >
                <MapPin className="w-4 h-4 text-surya-400" />
                <span>Peta & Arah</span>
              </a>
            </div>

            {/* Jaminan Kenyamanan Lansia */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Jalur Kursi Roda & Tempat Wudhu Duduk</span>
              </div>
              <span className="text-slate-500">&bull;</span>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-surya-400" />
                <span>Arah Kiblat 294° Terkalibrasi</span>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Kartu Waktu & Info Ringkas Jamaah */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Box Status Waktu & Kalender Terkini */}
            <div className="bg-gradient-to-br from-muhammadiyah-800 to-muhammadiyah-950 border border-muhammadiyah-600/60 rounded-3xl p-6 sm:p-7 shadow-elevated text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-surya-500/10 rounded-full blur-xl pointer-events-none"></div>

              {/* Kalender Hijriyah & Masehi */}
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-surya-300 font-semibold mb-2">
                <Calendar className="w-4 h-4" />
                <span>{hijriDate}</span>
              </div>
              <p className="text-slate-200 text-sm font-medium mb-4">
                {gregorianDate}
              </p>

              {/* Sholat Terdekat Countdown */}
              {nextPrayerName && (
                <div className="my-5 p-4 rounded-2xl bg-muhammadiyah-900/90 border border-surya-500/30">
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-bold">
                    Menuju Waktu Sholat Berikutnya:
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {nextPrayerName}
                  </div>
                  <div className="inline-block px-3 py-1 mt-2 text-sm font-bold bg-surya-500 text-muhammadiyah-950 rounded-full animate-pulse">
                    Tersisa: {nextPrayerRemaining || 'Menghitung...'}
                  </div>
                </div>
              )}

              {/* Lokasi Presisi Desa Sidowungu */}
              <div className="pt-3 border-t border-muhammadiyah-700/60 flex items-center justify-center gap-2 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-surya-400 flex-shrink-0" />
                <span>Desa Sidowungu RT 08 / RW 03, Menganti, Gresik</span>
              </div>
            </div>

            {/* Quick Stat Baris Bawah */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-muhammadiyah-850/80 border border-muhammadiyah-700/60 rounded-2xl p-3">
                <div className="text-xl font-black text-surya-400">850</div>
                <div className="text-[11px] text-slate-300 font-medium leading-tight">Kapasitas Jamaah</div>
              </div>
              <div className="bg-muhammadiyah-850/80 border border-muhammadiyah-700/60 rounded-2xl p-3">
                <div className="text-xl font-black text-emerald-400">1984</div>
                <div className="text-[11px] text-slate-300 font-medium leading-tight">Tahun Berdiri</div>
              </div>
              <div className="bg-muhammadiyah-850/80 border border-muhammadiyah-700/60 rounded-2xl p-3">
                <div className="text-xl font-black text-sky-400">+8 Mnt</div>
                <div className="text-[11px] text-slate-300 font-medium leading-tight">Subuh Tarjih</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
