import React from 'react';
import { MapPin, Phone, Mail, Heart, Clock, ArrowUp } from 'lucide-react';
import { MASJID_PROFILE } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200">
      
      {/* Bagian Utama Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Kolom Profil Masjid (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="px-2.5 py-1.5 border border-dashed border-slate-400 rounded bg-white text-[10px] font-mono text-slate-600 uppercase tracking-wider">
                [Slot Logo]
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900 tracking-tight block">
                  MASJID AL-ISHLAH
                </span>
                <span className="text-xs text-amber-700 font-semibold tracking-wider uppercase">
                  Pimpinan Ranting Muhammadiyah Sidowungu
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Pusat dakwah pencerahan, pembinaan aqidah shahihah, dan pelayanan sosial kemanusiaan masyarakat Desa Sidowungu, Kecamatan Menganti, Kabupaten Gresik, Jawa Timur.
            </p>

            <div className="p-3.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-2.5 shadow-xs">
              <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
              <span>
                Adzan Subuh Berpedoman pada <strong>Hisab Tarjih Muhammadiyah (-18°) / +8 Menit</strong>.
              </span>
            </div>
          </div>

          {/* Kolom Tautan Cepat (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#beranda" className="text-slate-600 hover:text-slate-950 transition-colors">
                  &bull; Beranda Utama
                </a>
              </li>
              <li>
                <a href="#jadwal-sholat" className="text-slate-600 hover:text-slate-950 transition-colors">
                  &bull; Jadwal Adzan Sidowungu
                </a>
              </li>
              <li>
                <a href="#profil" className="text-slate-600 hover:text-slate-950 transition-colors">
                  &bull; Profil & Visi Misi
                </a>
              </li>
              <li>
                <a href="#transparansi-kas" className="text-slate-600 hover:text-slate-950 transition-colors">
                  &bull; Laporan Kas & Infaq
                </a>
              </li>
              <li>
                <a href="#agenda" className="text-slate-600 hover:text-slate-950 transition-colors">
                  &bull; Jadwal Kajian Ahad
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="text-slate-600 hover:text-slate-950 transition-colors">
                  &bull; Fasilitas Ramah Lansia
                </a>
              </li>
              <li>
                <a href="#pengurus" className="text-slate-600 hover:text-slate-950 transition-colors">
                  &bull; Susunan Takmir Masjid
                </a>
              </li>
              <li>
                <a href="#lokasi" className="text-slate-600 hover:text-slate-950 transition-colors">
                  &bull; Lokasi & Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom Kontak & Alamat (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Sekretariat Takmir
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
                <span>{MASJID_PROFILE.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{MASJID_PROFILE.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>{MASJID_PROFILE.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={MASJID_PROFILE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-slate-950 underline"
              >
                Petunjuk Arah Google Maps &rarr;
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Baris Bawah Hak Cipta & Tombol Kembali ke Atas */}
      <div className="bg-slate-100/70 border-t border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Masjid Al-Ishlah Sidowungu &bull; Pimpinan Ranting Muhammadiyah Sidowungu, PCM Menganti Gresik.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">Domain: Masjid-AlIshlah.napuiss.my.id</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors shadow-xs"
              aria-label="Kembali ke atas halaman"
            >
              <ArrowUp className="w-3.5 h-3.5 text-slate-600" />
              <span>Ke Atas</span>
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
