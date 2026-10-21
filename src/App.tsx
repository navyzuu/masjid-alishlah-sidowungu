import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PrayerTimes } from './components/PrayerTimes';
import { About } from './components/About';
import { Transparency } from './components/Transparency';
import { Agenda } from './components/Agenda';
import { Facilities } from './components/Facilities';
import { Takmir } from './components/Takmir';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { ZiswafModal } from './components/ZiswafModal';
import { fetchPrayerTimes, getNextPrayer, getFallbackTimings } from './utils/prayerApi';
import { PrayerTimes as PrayerTimesType, PrayerDateInfo, NextPrayerInfo } from './types';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [timings, setTimings] = useState<PrayerTimesType>(getFallbackTimings());
  
  // Format Tanggal Masehi & Hijriyah Sinkron (Tanpa Flash "Memuat...")
  const now = new Date();
  const daysIndo = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const monthsIndo = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const initialGregorian = `${daysIndo[now.getDay()]}, ${now.getDate()} ${monthsIndo[now.getMonth()]} ${now.getFullYear()}`;

  const [dateInfo, setDateInfo] = useState<PrayerDateInfo>({
    gregorianDate: initialGregorian,
    hijriDate: '10 Jumadil Awwal 1448 H',
    dayName: daysIndo[now.getDay()],
  });
  const [nextPrayer, setNextPrayer] = useState<NextPrayerInfo | null>(() => getNextPrayer(getFallbackTimings()));
  const [isLoadingPrayer, setIsLoadingPrayer] = useState<boolean>(false);
  const [isFallback, setIsFallback] = useState<boolean>(false);
  const [isZiswafOpen, setIsZiswafOpen] = useState<boolean>(false);

  const mainContainerRef = useRef<HTMLDivElement>(null);

  // 1. Fetch Prayer Times from API on Mount
  const loadTimings = async () => {
    setIsLoadingPrayer(true);
    try {
      const data = await fetchPrayerTimes();
      setTimings(data.timings);
      setDateInfo(data.dateInfo);
      setIsFallback(data.isFallback);
      setNextPrayer(getNextPrayer(data.timings));
    } catch (e) {
      console.warn('Gagal memuat jadwal sholat:', e);
      setIsFallback(true);
    } finally {
      setIsLoadingPrayer(false);
    }
  };

  useEffect(() => {
    loadTimings();
  }, []);

  // 2. Realtime 1-Second Countdown for Next Prayer
  useEffect(() => {
    if (!timings) return;
    
    // Initial calculate
    setNextPrayer(getNextPrayer(timings));

    const interval = setInterval(() => {
      setNextPrayer(getNextPrayer(timings));
    }, 1000);

    return () => clearInterval(interval);
  }, [timings]);

  // 3. Motion Keislaman Halus (GSAP ScrollTrigger Reveal)
  useEffect(() => {
    if (!mainContainerRef.current) return;

    const sections = mainContainerRef.current.querySelectorAll('section');
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0.9, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div ref={mainContainerRef} className="min-h-screen flex flex-col bg-slate-50 text-slate-800 overflow-x-hidden">
      
      {/* 1. Header & Navigation */}
      <Navbar onOpenZiswaf={() => setIsZiswafOpen(true)} />

      {/* 2. Landing Page / Hero Section */}
      <Hero
        onOpenZiswaf={() => setIsZiswafOpen(true)}
        gregorianDate={dateInfo.gregorianDate}
        hijriDate={dateInfo.hijriDate}
        nextPrayerName={nextPrayer?.name}
        nextPrayerRemaining={nextPrayer?.remainingText}
      />

      {/* 3. Jadwal Adzan Realtime Sidowungu (Diatas About & Dibawah Hero) */}
      <PrayerTimes
        timings={timings}
        dateInfo={dateInfo}
        nextPrayer={nextPrayer}
        isLoading={isLoadingPrayer}
        isFallback={isFallback}
        onRefresh={loadTimings}
      />

      {/* 4. Profil & Sejarah Singkat Masjid Al-Ishlah */}
      <About />

      {/* 5. Transparansi Kas & Infaq Mingguan */}
      <Transparency onOpenZiswaf={() => setIsZiswafOpen(true)} />

      {/* 6. Agenda & Jadwal Kajian Rutin */}
      <Agenda />

      {/* 7. Fasilitas Masjid Ramah Lansia */}
      <Facilities />

      {/* 8. Susunan Takmir & Pengurus */}
      <Takmir />

      {/* 9. Lokasi Google Maps & Kontak Takmir */}
      <LocationContact />

      {/* 10. Footer Komprehensif */}
      <Footer />

      {/* Modal Dialog Infaq / ZISWAF QRIS */}
      <ZiswafModal
        isOpen={isZiswafOpen}
        onClose={() => setIsZiswafOpen(false)}
      />

    </div>
  );
};

export default App;
