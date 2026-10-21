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
    { name: 'Jadwal', href: '#jadwal-sholat' },
    { name: 'Profil', href: '#profil' },
    { name: 'Kas Infaq', href: '#transparansi-kas' },
    { name: 'Kajian', href: '#agenda' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Pengurus', href: '#pengurus' },
    { name: 'Lokasi', href: '#lokasi' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-muhammadiyah-900 border-b border-muhammadiyah-800 shadow-md text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[4.5rem] py-2.5">
          {/* Slot Placeholder Logo Resmi */}
          <a href="#beranda" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="px-2.5 py-1.5 border border-dashed border-surya-400/80 rounded bg-muhammadiyah-950/70 text-[9px] sm:text-[10px] font-mono text-surya-300 uppercase tracking-wider flex-shrink-0">
              [Slot Logo]
            </div>
            <div className="flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-black tracking-tight text-white whitespace-nowrap">
                  MASJID AL-ISHLAH
                </span>
                <span className="hidden xl:inline-block px-1.5 py-0.5 text-[9px] font-bold bg-surya-500/20 text-surya-300 border border-surya-500/40 rounded">
                  MUHAMMADIYAH
                </span>
              </div>
              <p className="text-[11px] text-slate-300 whitespace-nowrap">
                Sidowungu &bull; Menganti &bull; Gresik
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links (Tampil Rapi di Layar Lebar) */}
          <div className="hidden xl:flex items-center gap-0.5 2xl:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2 2xl:px-2.5 py-1.5 text-xs 2xl:text-sm font-medium text-slate-200 hover:text-surya-300 hover:bg-muhammadiyah-800/60 rounded transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Tools (Desktop) */}
          <div className="hidden xl:flex items-center gap-2.5 flex-shrink-0">
            <SeniorFontControl />
            <button
              onClick={onOpenZiswaf}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-gradient-to-r from-surya-500 to-surya-600 hover:from-surya-400 hover:to-surya-500 text-muhammadiyah-950 font-extrabold text-xs 2xl:text-sm shadow-sm transition-all whitespace-nowrap"
            >
              <HeartHandshake className="w-4 h-4 text-muhammadiyah-900" />
              <span>Infaq & QRIS</span>
            </button>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="xl:hidden flex items-center gap-2 flex-shrink-0">
            <SeniorFontControl />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-muhammadiyah-800 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Buka Menu Navigasi"
            >
              {isOpen ? <X className="w-6 h-6 text-surya-400" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="xl:hidden border-t border-muhammadiyah-800 py-4 px-4 space-y-3 bg-muhammadiyah-950 rounded-b-2xl shadow-xl">
            <div className="space-y-1">
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
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenZiswaf();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-surya-500 to-surya-600 text-muhammadiyah-950 font-bold text-base shadow-sm min-h-[48px]"
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
