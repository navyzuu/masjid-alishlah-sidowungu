import { PrayerTimes, PrayerDateInfo, NextPrayerInfo } from '../types';

// Koordinat Presisi Masjid Al-Ishlah Sidowungu (berdasarkan Google Maps: https://maps.app.goo.gl/VedUu7nzekCqQRTF8)
export const LOCATION_CONFIG = {
  name: 'Sidowungu, Menganti, Gresik',
  province: 'Jawa Timur',
  latitude: -7.2963785,
  longitude: 112.5999143,
  timezone: 'Asia/Jakarta',
  tarjihSubuhOffsetMinutes: 8, // Koreksi Munas Tarjih Muhammadiyah ke-31 (-18 derajat / +8 menit)
};

// Helper: Tambah menit ke string HH:mm
export function addMinutesToTimeString(timeStr: string, minutesToAdd: number): string {
  const parts = timeStr.trim().split(':');
  if (parts.length < 2) return timeStr;
  
  let hours = parseInt(parts[0], 10);
  let minutes = parseInt(parts[1], 10);
  
  if (isNaN(hours) || isNaN(minutes)) return timeStr;
  
  minutes += minutesToAdd;
  while (minutes >= 60) {
    minutes -= 60;
    hours = (hours + 1) % 24;
  }
  while (minutes < 0) {
    minutes += 60;
    hours = (hours - 1 + 24) % 24;
  }
  
  const hStr = hours.toString().padStart(2, '0');
  const mStr = minutes.toString().padStart(2, '0');
  return `${hStr}:${mStr}`;
}

// Terjemahan Nama Bulan Hijriyah ke Bahasa Indonesia
const HIJRI_MONTHS_ID: Record<string, string> = {
  'Muḥarram': 'Muharram',
  'Safar': 'Safar',
  'Rabīʿ al-awwal': "Rabi'ul Awwal",
  'Rabīʿ al-thānī': "Rabi'ul Akhir",
  'Jumādá al-ūlá': 'Jumadil Awwal',
  'Jumādá al-ākhirah': 'Jumadil Akhir',
  'Rajab': 'Rajab',
  'Shaʿbān': "Sya'ban",
  'Ramaḍān': 'Ramadhan',
  'Shawwāl': 'Syawwal',
  'Dhū al-Qaʿdah': "Dzulqa'dah",
  'Dhū al-Ḥijjah': 'Dzulhijjah',
};

// Fallback Estimasi Waktu Sholat Gresik jika API offline
export function getFallbackTimings(): PrayerTimes {
  return {
    imsak: '03:44',
    subuh: '03:54', // Sudah +8 menit dari 03:46
    subuhOriginal: '03:46',
    terbit: '05:06',
    dzuhur: '11:14',
    ashar: '14:24',
    maghrib: '17:23',
    isya: '18:34',
  };
}

export async function fetchPrayerTimes(): Promise<{
  timings: PrayerTimes;
  dateInfo: PrayerDateInfo;
  isFallback: boolean;
}> {
  const now = new Date();
  
  try {
    const url = `https://api.aladhan.com/v1/timings?latitude=${LOCATION_CONFIG.latitude}&longitude=${LOCATION_CONFIG.longitude}&method=20`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API response status: ${response.status}`);
    }
    
    const data = await response.json();
    const raw = data.data.timings;
    const dateData = data.data.date;
    
    // Ambil Subuh standar dan terapkan hisab Tarjih Muhammadiyah (+8 menit)
    const subuhOriginal = raw.Fajr ? raw.Fajr.substring(0, 5) : '03:46';
    const subuhMuhammadiyah = addMinutesToTimeString(subuhOriginal, LOCATION_CONFIG.tarjihSubuhOffsetMinutes);
    
    const timings: PrayerTimes = {
      imsak: raw.Imsak ? raw.Imsak.substring(0, 5) : '03:36',
      subuh: subuhMuhammadiyah,
      subuhOriginal: subuhOriginal,
      terbit: raw.Sunrise ? raw.Sunrise.substring(0, 5) : '05:06',
      dzuhur: raw.Dhuhr ? raw.Dhuhr.substring(0, 5) : '11:14',
      ashar: raw.Asr ? raw.Asr.substring(0, 5) : '14:24',
      maghrib: raw.Maghrib ? raw.Maghrib.substring(0, 5) : '17:23',
      isya: raw.Isha ? raw.Isha.substring(0, 5) : '18:34',
    };
    
    // Format Tanggal Masehi & Hijriyah
    const daysIndo = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const monthsIndo = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    
    const dayName = daysIndo[now.getDay()];
    const gregorianDate = `${dayName}, ${now.getDate()} ${monthsIndo[now.getMonth()]} ${now.getFullYear()}`;
    
    let hijriDate = '10 Jumadil Awwal 1448 H';
    if (dateData?.hijri) {
      const hDay = dateData.hijri.day;
      const rawMonth = dateData.hijri.month?.en || '';
      const hMonth = HIJRI_MONTHS_ID[rawMonth] || rawMonth;
      const hYear = dateData.hijri.year;
      hijriDate = `${hDay} ${hMonth} ${hYear} H`;
    }
    
    return {
      timings,
      dateInfo: {
        gregorianDate,
        hijriDate,
        dayName,
      },
      isFallback: false,
    };
  } catch (error) {
    console.warn('Gagal memuat API sholat, menggunakan kalkulasi hisab lokal Gresik:', error);
    
    const daysIndo = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const monthsIndo = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    
    const dayName = daysIndo[now.getDay()];
    const gregorianDate = `${dayName}, ${now.getDate()} ${monthsIndo[now.getMonth()]} ${now.getFullYear()}`;
    
    return {
      timings: getFallbackTimings(),
      dateInfo: {
        gregorianDate,
        hijriDate: '10 Jumadil Awwal 1448 H',
        dayName,
      },
      isFallback: true,
    };
  }
}

// Menghitung jadwal sholat berikutnya beserta sisa waktu mundur
export function getNextPrayer(timings: PrayerTimes): NextPrayerInfo {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const currentSeconds = now.getSeconds();
  
  const schedule = [
    { name: 'Subuh', time: timings.subuh },
    { name: 'Terbit', time: timings.terbit },
    { name: 'Dzuhur', time: timings.dzuhur },
    { name: 'Ashar', time: timings.ashar },
    { name: 'Maghrib', time: timings.maghrib },
    { name: 'Isya', time: timings.isya },
  ];
  
  for (const item of schedule) {
    const [h, m] = item.time.split(':').map(Number);
    const targetMinutes = h * 60 + m;
    
    if (targetMinutes > currentMinutes || (targetMinutes === currentMinutes && currentSeconds === 0)) {
      const diffTotalSec = (targetMinutes - currentMinutes) * 60 - currentSeconds;
      const hrs = Math.floor(diffTotalSec / 3600);
      const mins = Math.floor((diffTotalSec % 3600) / 60);
      const secs = diffTotalSec % 60;
      
      const parts = [];
      if (hrs > 0) parts.push(`${hrs} jam`);
      parts.push(`${mins} menit`);
      parts.push(`${secs} dtk`);
      
      return {
        name: item.name,
        time: item.time,
        remainingSeconds: diffTotalSec,
        remainingText: parts.join(' '),
      };
    }
  }
  
  // Jika sudah melewati Isya, target berikutnya adalah Subuh esok hari
  const [subuhH, subuhM] = timings.subuh.split(':').map(Number);
  const subuhTomorrowMinutes = 24 * 60 + (subuhH * 60 + subuhM);
  const diffTotalSec = (subuhTomorrowMinutes - currentMinutes) * 60 - currentSeconds;
  const hrs = Math.floor(diffTotalSec / 3600);
  const mins = Math.floor((diffTotalSec % 3600) / 60);
  const secs = diffTotalSec % 60;
  
  return {
    name: 'Subuh (Besok)',
    time: timings.subuh,
    remainingSeconds: diffTotalSec,
    remainingText: `${hrs} jam ${mins} menit ${secs} dtk`,
  };
}
