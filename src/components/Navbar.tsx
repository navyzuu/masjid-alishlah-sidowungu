import React, { useState } from 'react';
import { Menu, X, HeartHandshake, MapPin } from 'lucide-react';
import { SeniorFontControl } from './SeniorFontControl';

interface NavbarProps {
  onOpenZiswaf: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenZiswaf }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Jadwal Sholat', href: '#jadwal-sholat' },
    { name: 'Profil', href: '#profil' },
    { name: 'Laporan Kas', href: '#transparansi-kas' },
    { name: 'Agenda Kajian', href: '#agenda' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Pengurus', href: '#pengurus' },
    { name: 'Lokasi & Kontak', href: '#lokasi' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-muhammadiyah-900/95 backdrop-blur-md border-b border-muhammadiyah-800 shadow-md">
      {/* Top Banner Khusus Identitas Ranting */}
      <div className="bg-muhammadiyah-950 text-slate-300 text-xs py-1.5 px-4 border-b border-muhammadiyah-800/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
            <span>Pimpinan Ranting Muhammadiyah Sidowungu &bull; Cabang Menganti Gresik</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-surya-400" />
              Sidowungu, Menganti, Kab. Gresik, Jawa Timur
            </span>
            <span>Standar Tarjih Subuh (+8 Menit)</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Nama Masjid */}
          <a href="#beranda" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-muhammadiyah-800 to-muhammadiyah-950 border border-surya-500/40 p-1.5 shadow-sm group-hover:border-surya-400 transition-colors">
              <img
                src="/logo-muhammadiyah.svg"
                alt="Logo Muhammadiyah Al-Ishlah"
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white group-hover:text-surya-300 transition-colors">
                  MASJID AL-ISHLAH
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-bold bg-surya-500/20 text-surya-300 border border-surya-500/40 rounded-full">
                  MUHAMMADIYAH
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Sidowungu &bull; Menganti &bull; Gresik
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 xl:px-3 py-2 text-sm font-medium text-slate-200 hover:text-surya-400 hover:bg-muhammadiyah-800/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Tools (Senior Font Sizer + Infaq Button) */}
          <div className="hidden md:flex items-center gap-3">
            <SeniorFontControl />
            <button
              onClick={onOpenZiswaf}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-surya-500 to-surya-600 hover:from-surya-400 hover:to-surya-500 text-muhammadiyah-950 font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <HeartHandshake className="w-4 h-4 text-muhammadiyah-900" />
              <span>Infaq & QRIS</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <SeniorFontControl />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-muhammadiyah-800 focus:outline-none focus:ring-2 focus:ring-surya-400 min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Buka Menu Navigasi"
            >
              {isOpen ? <X className="w-6 h-6 text-surya-400" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-muhammadiyah-800 py-4 px-2 space-y-1 bg-muhammadiyah-950/98 rounded-b-2xl shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-base font-medium text-slate-100 hover:bg-muhammadiyah-800 hover:text-surya-300 rounded-xl transition-colors min-h-[48px] flex items-center"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 px-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenZiswaf();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-surya-500 text-muhammadiyah-950 font-bold text-base shadow-md min-h-[48px]"
              >
                <HeartHandshake className="w-5 h-5 text-muhammadiyah-900" />
                <span>Salurkan Infaq & QRIS Masjid</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
