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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Banner Status */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
            <span>Pimpinan Ranting Muhammadiyah Sidowungu &bull; Cabang Menganti Gresik</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Sidowungu, Menganti, Gresik
            </span>
            <span className="text-amber-300 font-semibold">Subuh Tarjih (+8 Menit)</span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Slot Placeholder Logo Resmi */}
          <a href="#beranda" className="flex items-center gap-3">
            <div className="px-2.5 py-1.5 border border-dashed border-slate-400 rounded bg-slate-50 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
              [Slot Logo]
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  MASJID AL-ISHLAH
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200 rounded">
                  MUHAMMADIYAH
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Sidowungu, Menganti, Gresik
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Tools */}
          <div className="hidden md:flex items-center gap-3">
            <SeniorFontControl />
            <button
              onClick={onOpenZiswaf}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all active:scale-98"
            >
              <HeartHandshake className="w-4 h-4 text-amber-400" />
              <span>Infaq & QRIS</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <SeniorFontControl />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-none min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Buka Menu Navigasi"
            >
              {isOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 px-2 space-y-1 bg-white rounded-b-2xl shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-100 rounded-xl transition-colors min-h-[48px] flex items-center"
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
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-base shadow-sm min-h-[48px]"
              >
                <HeartHandshake className="w-5 h-5 text-amber-400" />
                <span>Salurkan Infaq & QRIS Masjid</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
