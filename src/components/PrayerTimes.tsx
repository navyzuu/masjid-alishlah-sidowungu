import React, { useState } from 'react';
import { PrayerTimes as PrayerTimesType, PrayerDateInfo, NextPrayerInfo } from '../types';
import { Clock, Info, ShieldCheck, RefreshCw, Sun, Sunset, Moon, Sunrise, Volume2 } from 'lucide-react';

interface PrayerTimesProps {
  timings: PrayerTimesType;
  dateInfo: PrayerDateInfo;
  nextPrayer: NextPrayerInfo | null;
  isLoading: boolean;
  isFallback: boolean;
  onRefresh: () => void;
}

export const PrayerTimes: React.FC<PrayerTimesProps> = ({
  timings,
  dateInfo,
  nextPrayer,
  isLoading,
  isFallback,
  onRefresh,
}) => {
  const [showTarjihModal, setShowTarjihModal] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  const prayerList = [
    {
      id: 'imsak',
      name: 'Imsak',
      time: timings.imsak,
      arabic: 'الإمساك',
      icon: Sunrise,
      badge: 'Penahan Sahur',
      isSubuh: false,
    },
    {
      id: 'subuh',
      name: 'Subuh',
      time: timings.subuh,
      originalTime: timings.subuhOriginal,
      arabic: 'الصُّبْح',
      icon: Sunrise,
      badge: 'Tarjih Muhammadiyah (+8 Mnt)',
      isSubuh: true,
      description: 'Disesuaikan +8 menit standar Munas Tarjih ke-31 (-18°)',
    },
    {
      id: 'terbit',
      name: 'Terbit',
      time: timings.terbit,
      arabic: 'الشُّرُوق',
      icon: Sun,
      badge: 'Syuruq',
      isSubuh: false,
    },
    {
      id: 'dzuhur',
      name: 'Dzuhur',
      time: timings.dzuhur,
      arabic: 'الظُّهْر',
      icon: Sun,
      badge: 'Tengah Hari',
      isSubuh: false,
    },
    {
      id: 'ashar',
      name: 'Ashar',
      time: timings.ashar,
      arabic: 'العَصْر',
      icon: Sun,
      badge: 'Sore Hari',
      isSubuh: false,
    },
    {
      id: 'maghrib',
      name: 'Maghrib',
      time: timings.maghrib,
      arabic: 'المَغْرِب',
      icon: Sunset,
      badge: 'Buka Puasa',
      isSubuh: false,
    },
    {
      id: 'isya',
      name: 'Isya',
      time: timings.isya,
      arabic: 'العِشَاء',
      icon: Moon,
      badge: 'Malam Hari',
      isSubuh: false,
    },
  ];

  const handleTestChime = () => {
    try {
      // Audio sintetis web audio API (dua nada harmonik santun adzan)
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc1 = ctx.createOscillator();
      const gain = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(440, ctx.currentTime); // A4
      osc1.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 1.2);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
      osc1.connect(gain);
      gain.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 1.5);
      setAudioPlayed(true);
      setTimeout(() => setAudioPlayed(false), 2000);
    } catch (e) {
      console.warn('Audio context error:', e);
    }
  };

  return (
    <section id="jadwal-sholat" className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section Jadwal Sholat */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-muhammadiyah-100 text-muhammadiyah-800 text-xs sm:text-sm font-bold border border-muhammadiyah-200">
            <Clock className="w-4 h-4 text-muhammadiyah-700" />
            <span>Koordinat Presisi: 7°15'55.8"S 112°34'05.9"E</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-muhammadiyah-950 tracking-tight">
            Jadwal Adzan & Waktu Sholat Sidowungu
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Wilayah Desa Sidowungu, Kecamatan Menganti, Kabupaten Gresik &bull; Waktu Indonesia Barat (WIB)
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm">
            <span className="bg-slate-200/80 text-slate-800 px-3 py-1 rounded-md font-semibold">
              Masehi: {dateInfo.gregorianDate}
            </span>
            <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-md font-semibold border border-amber-300/60">
              Hijriyah: {dateInfo.hijriDate}
            </span>
            <button
              onClick={onRefresh}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-semibold shadow-sm transition-all active:scale-95"
              title="Perbarui Waktu dari Server API"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-muhammadiyah-700' : ''}`} />
              <span>{isLoading ? 'Memuat...' : 'Sinkronkan'}</span>
            </button>
          </div>
        </div>

        {/* Pemberitahuan Resmi Hisab Subuh Muhammadiyah (+8 Menit) */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-50/90 border-2 border-amber-300/80 shadow-subtle flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500 text-muhammadiyah-950 flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-extrabold text-amber-950 text-base sm:text-lg">
                  Ketetapan Waktu Adzan Shubuh Persyarikatan Muhammadiyah
                </h3>
                <span className="px-2 py-0.5 text-xs font-black bg-amber-200 text-amber-900 rounded-md border border-amber-400">
                  WAJIB +8 MENIT
                </span>
              </div>
              <p className="text-xs sm:text-sm text-amber-900/90 mt-1 leading-relaxed">
                Berdasarkan Keputusan <strong>Munas Tarjih Muhammadiyah ke-31</strong>, fajar shadiq berada pada posisi matahari <strong>-18°</strong> (sebelumnya -20°). Maka waktu adzan Shubuh di Masjid Al-Ishlah Sidowungu <strong>dimundurkan/dilebihi 8 menit</strong> dibanding hisab kementerian.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 w-full md:w-auto">
            <button
              onClick={() => setShowTarjihModal(true)}
              className="w-full md:w-auto px-4 py-2.5 text-xs sm:text-sm font-bold bg-white hover:bg-amber-100 text-amber-950 border border-amber-400 rounded-xl shadow-sm transition-colors text-center"
            >
              Baca Dalil & Penjelasan Tarjih
            </button>
            <button
              onClick={handleTestChime}
              className="px-3 py-2.5 text-xs font-semibold bg-amber-200/80 hover:bg-amber-300 text-amber-900 rounded-xl transition-colors flex items-center gap-1"
              title="Coba Nada Pengingat"
            >
              <Volume2 className="w-4 h-4" />
              <span>{audioPlayed ? 'Terdengar' : 'Bel'}</span>
            </button>
          </div>
        </div>

        {/* Grid Kartu Waktu Sholat (Sangat Ramah Lansia - Huruf Besar & Kontras) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {prayerList.map((item) => {
            const Icon = item.icon;
            const isNext = nextPrayer?.name.toLowerCase().includes(item.name.toLowerCase());
            
            return (
              <div
                key={item.id}
                className={`relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl transition-all duration-200 border-2 ${
                  item.isSubuh
                    ? 'bg-gradient-to-b from-muhammadiyah-900 to-muhammadiyah-950 text-white border-amber-400 shadow-elevated ring-2 ring-amber-400/40'
                    : isNext
                    ? 'bg-gradient-to-b from-muhammadiyah-800 to-muhammadiyah-900 text-white border-surya-400 shadow-card'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-muhammadiyah-300 shadow-sm'
                }`}
              >
                {/* Badge Waktu Khusus */}
                {item.isSubuh && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-400 text-muhammadiyah-950 font-black text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full shadow-sm">
                    RESMI TARJIH
                  </div>
                )}
                {isNext && !item.isSubuh && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-500 text-white font-black text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full shadow-sm">
                    SELANJUTNYA
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-xl ${
                      item.isSubuh
                        ? 'bg-amber-400/20 text-amber-300'
                        : isNext
                        ? 'bg-surya-400/20 text-surya-300'
                        : 'bg-slate-100 text-muhammadiyah-700'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-arabic text-sm ${
                      item.isSubuh || isNext ? 'text-amber-200/80' : 'text-slate-400'
                    }`}>
                      {item.arabic}
                    </span>
                  </div>

                  <h4 className={`text-base sm:text-lg font-black tracking-tight ${
                    item.isSubuh || isNext ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.name}
                  </h4>
                  <p className={`text-[11px] font-semibold ${
                    item.isSubuh ? 'text-amber-300' : isNext ? 'text-surya-200' : 'text-slate-500'
                  }`}>
                    {item.badge}
                  </p>
                </div>

                {/* Angka Jam (Besar, Tebal, Jelas untuk Lansia) */}
                <div className="mt-4 pt-3 border-t border-slate-200/20">
                  <div className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${
                    item.isSubuh
                      ? 'text-amber-300'
                      : isNext
                      ? 'text-surya-300'
                      : 'text-muhammadiyah-950'
                  }`}>
                    {item.time} <span className="text-xs font-sans font-bold">WIB</span>
                  </div>

                  {item.isSubuh && item.originalTime && (
                    <div className="mt-1 text-[10px] text-slate-300 font-medium">
                      Standar Kemenag: {item.originalTime} (+8 mnt)
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Status Sumber API & Ketepatan Sidowungu Menganti */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 bg-white p-3.5 rounded-xl border border-slate-200">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${isFallback ? 'bg-amber-400' : 'bg-emerald-500'}`}></span>
            <span>
              {isFallback
                ? 'Mode Hisab Offline Gresik (Koreksi Tarjih +8 menit aktif)'
                : 'Terhubung Realtime API Astronomi Sidowungu, Menganti, Gresik (Kemenag Algoritma + Koreksi Fajar -18° Tarjih)'}
            </span>
          </div>
          <div className="font-semibold text-slate-700">
            Koreksi Waktu: Ikhtiyat +2 mnt &bull; Fajar Shadiq -18°
          </div>
        </div>

      </div>

      {/* Modal Penjelasan Tarjih Muhammadiyah Shubuh +8 Menit */}
      {showTarjihModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-amber-300 space-y-5 text-slate-800">
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500 text-muhammadiyah-950">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-muhammadiyah-950">
                    Ketetapan Munas Tarjih ke-31
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    Majelis Tarjih & Tajdid Pimpinan Pusat Muhammadiyah
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowTarjihModal(false)}
                className="text-slate-400 hover:text-slate-700 text-xl font-bold p-1"
                aria-label="Tutup Dialog"
              >
                &times;
              </button>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              <p>
                Berdasarkan kajian mendalam para pakar astronomi (falak) dan ulama fiqih Majelis Tarjih dan Tajdid PP Muhammadiyah pada <strong>Munas Tarjih ke-31 tahun 2020</strong>:
              </p>
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-amber-950 font-medium space-y-2">
                <p>
                  <strong>1. Ketinggian Fajar Shadiq:</strong> Awal waktu Subuh ditandai oleh terbitnya fajar shadiq yang secara astronomis terjadi ketika matahari berada pada kedalaman <strong>-18° (minus delapan belas derajat)</strong> di bawah ufuk timur, bukan -20°.
                </p>
                <p>
                  <strong>2. Penyesuaian Menit:</strong> Selisih 2 derajat tersebut menyebabkan masuknya waktu Subuh mundur sekitar <strong>8 menit (delapan menit)</strong> dibandingkan jadwal hisab -20° (Kemenag).
                </p>
              </div>
              <p>
                Oleh karena itu, di <strong>Masjid Al-Ishlah Sidowungu</strong>, adzan Subuh dikumandangkan tepat <strong>8 menit setelah waktu Subuh kalender kementerian umum</strong> demi kehati-hatian (*ikhtiyat*) dan ketepatan ibadah sholat Subuh berjamaah yang sah sesuai fajar shadiq haqiqi.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowTarjihModal(false)}
                className="px-5 py-2.5 rounded-xl bg-muhammadiyah-900 text-white font-bold text-sm hover:bg-muhammadiyah-800 transition-colors"
              >
                Saya Mengerti
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
