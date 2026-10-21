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
    <section id="jadwal-sholat" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section Jadwal Sholat */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white text-slate-700 text-xs sm:text-sm font-semibold border border-slate-200 shadow-sm">
            <Clock className="w-4 h-4 text-slate-600" />
            <span>Koordinat Presisi: 7°17'47.0"S 112°35'59.7"E (Sidowungu Menganti)</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Jadwal Adzan & Waktu Sholat Sidowungu
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Wilayah Desa Sidowungu, Kecamatan Menganti, Kabupaten Gresik &bull; Waktu Indonesia Barat (WIB)
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm">
            <span className="bg-white text-slate-700 px-3 py-1 rounded border border-slate-200 font-medium">
              Masehi: {dateInfo.gregorianDate}
            </span>
            <span className="bg-amber-50 text-amber-900 px-3 py-1 rounded border border-amber-200 font-semibold">
              Hijriyah: {dateInfo.hijriDate}
            </span>
            <button
              onClick={onRefresh}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold shadow-sm transition-all"
              title="Perbarui Waktu dari Server API"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin text-slate-800' : ''}`} />
              <span>{isLoading ? 'Memuat...' : 'Sinkronkan'}</span>
            </button>
          </div>
        </div>

        {/* Pemberitahuan Resmi Hisab Subuh Muhammadiyah (+8 Menit) */}
        <div className="mb-8 p-5 rounded-xl bg-white border border-amber-300 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-amber-500 text-slate-950 flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                  Ketetapan Waktu Adzan Shubuh Persyarikatan Muhammadiyah
                </h3>
                <span className="px-2 py-0.5 text-xs font-bold bg-amber-100 text-amber-900 rounded border border-amber-300">
                  WAJIB +8 MENIT
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Berdasarkan Keputusan <strong>Munas Tarjih Muhammadiyah ke-31</strong>, fajar shadiq berada pada posisi matahari <strong>-18°</strong>. Maka waktu adzan Shubuh di Masjid Al-Ishlah Sidowungu <strong>dimundurkan 8 menit</strong> dibanding hisab kementerian.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0 w-full md:w-auto">
            <button
              onClick={() => setShowTarjihModal(true)}
              className="w-full md:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-lg shadow-sm transition-colors text-center"
            >
              Baca Dalil Tarjih
            </button>
            <button
              onClick={handleTestChime}
              className="px-3 py-2.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors flex items-center gap-1"
              title="Coba Nada Pengingat"
            >
              <Volume2 className="w-4 h-4 text-slate-600" />
              <span>{audioPlayed ? 'Terdengar' : 'Bel'}</span>
            </button>
          </div>
        </div>

        {/* Grid Kartu Waktu Sholat */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {prayerList.map((item) => {
            const Icon = item.icon;
            const isNext = nextPrayer?.name.toLowerCase().includes(item.name.toLowerCase());
            
            return (
              <div
                key={item.id}
                className={`relative flex flex-col justify-between p-4 sm:p-5 rounded-xl transition-all border ${
                  item.isSubuh
                    ? 'bg-white border-amber-400 ring-1 ring-amber-300 shadow-sm'
                    : isNext
                    ? 'bg-slate-900 text-white border-slate-800 shadow-sm'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Badge Waktu Khusus */}
                {item.isSubuh && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded shadow-xs">
                    TARJIH (+8 MNT)
                  </div>
                )}
                {isNext && !item.isSubuh && (
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-600 text-white font-bold text-[10px] px-2 py-0.5 rounded shadow-xs">
                    SELANJUTNYA
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg ${
                      item.isSubuh
                        ? 'bg-amber-50 text-amber-700'
                        : isNext
                        ? 'bg-slate-800 text-amber-400'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`font-arabic text-sm ${
                      isNext ? 'text-slate-300' : 'text-slate-400'
                    }`}>
                      {item.arabic}
                    </span>
                  </div>

                  <h4 className={`text-base font-black tracking-tight ${
                    isNext ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.name}
                  </h4>
                  <p className={`text-[11px] font-medium ${
                    item.isSubuh ? 'text-amber-800 font-bold' : isNext ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {item.badge}
                  </p>
                </div>

                {/* Angka Jam */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className={`text-2xl sm:text-3xl font-black font-mono tracking-tight ${
                    item.isSubuh
                      ? 'text-amber-700'
                      : isNext
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}>
                    {item.time} <span className="text-xs font-sans font-bold">WIB</span>
                  </div>

                  {item.isSubuh && item.originalTime && (
                    <div className="mt-1 text-[10px] text-slate-500 font-medium">
                      Kemenag: {item.originalTime} (+8 mnt)
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
