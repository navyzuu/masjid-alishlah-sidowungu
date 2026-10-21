import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
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

export const App: React.FC = () => {
  const [timings, setTimings] = useState<PrayerTimesType>(getFallbackTimings());
  const [dateInfo, setDateInfo] = useState<PrayerDateInfo>({
    gregorianDate: 'Memuat tanggal...',
    hijriDate: 'Memuat penanggalan...',
    dayName: '',
  });
  const [nextPrayer, setNextPrayer] = useState<NextPrayerInfo | null>(null);
  const [isLoadingPrayer, setIsLoadingPrayer] = useState<boolean>(true);
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

  // 3. Subtle, Dignified GSAP Islamic Motion Animations
  useEffect(() => {
    if (!mainContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in hero elements
      gsap.from('#beranda h1, #beranda p', {
        opacity: 0,
        y: 20,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // Animate prayer cards entrance
      gsap.from('#jadwal-sholat .grid > div', {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        delay: 0.2,
      });
    }, mainContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainContainerRef} className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      
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
