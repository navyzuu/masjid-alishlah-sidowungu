import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { MASJID_PROFILE } from '../data/mockData';
import { IslamicStarDivider } from './IslamicMotif';
import { IslamicSectionDecor } from './IslamicAmbientElements';

export const LocationContact: React.FC = () => {
  return (
    <section id="lokasi" className="relative py-16 sm:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      {/* Ornamen Keislaman Alami Berwarna */}
      <IslamicSectionDecor variant="location" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Tanpa Pill Badge) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="text-xs uppercase font-extrabold tracking-widest text-muhammadiyah-700">
            Peta & Pusat Informasi
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-muhammadiyah-950 tracking-tight">
            Lokasi & Kontak Masjid
          </h2>

          {/* Hanya 1 Divider Bintang Tunggal Islami */}
          <IslamicStarDivider />
          
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Kunjungi Masjid Al-Ishlah di Desa Sidowungu, Menganti, Gresik. Siaga menyambut jamaah dan musafir.
          </p>
        </div>

        {/* 2 Kolom: Informasi Kontak & Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Kolom Informasi & Kontak */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
            
            <div className="space-y-6">
              {/* Alamat Lengkap */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-muhammadiyah-50 text-muhammadiyah-700 flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Alamat Masjid</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {MASJID_PROFILE.address}
                  </p>
                  <span className="inline-block mt-2 text-xs font-semibold text-muhammadiyah-800 bg-muhammadiyah-50 px-2.5 py-1 rounded-md">
                    Kec. Menganti, Kab. Gresik, Jawa Timur
                  </span>
                </div>
              </div>

              {/* Jam Buka */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-700 flex-shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Pelayanan Ibadah</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Terbuka 24 Jam untuk sholat fardhu, i’tikaf, dan peristirahatan musafir yang melintas kawasan Menganti-Gresik.
                  </p>
                </div>
              </div>

              {/* Kontak WhatsApp & Telepon */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-amber-50 text-amber-700 flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">Telepon / WhatsApp Takmir</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {MASJID_PROFILE.phone}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Layanan konsultasi jadwal, infaq, dan sewa fasilitas umat
                  </p>
                </div>
              </div>

              {/* Petunjuk Arah Jalan */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-muhammadiyah-700" />
                  <span>Petunjuk Rute Singkat:</span>
                </div>
                <p>
                  &bull; Dari <strong>Surabaya Barat / Benowo</strong>: Menuju Menganti lewat Boboh, belok barat ke Sidowungu (~15 menit).
                </p>
                <p>
                  &bull; Dari <strong>Gresik Kota / Cerme</strong>: Menuju selatan via Raya Cerme Kidul tembus pertigaan Sidowungu.
                </p>
              </div>
            </div>

            {/* Tombol Kontak WhatsApp Langsung */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/6281234567890?text=Assalamu'alaikum%20Takmir%20Masjid%20Al-Ishlah%20Sidowungu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat WA Takmir</span>
              </a>

              <a
                href={MASJID_PROFILE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-sm shadow-sm transition-all min-h-[48px]"
              >
                <ExternalLink className="w-4 h-4 text-slate-600" />
                <span>Google Maps</span>
              </a>
            </div>

          </div>

          {/* Kolom Peta Google Maps Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 min-h-[380px] sm:min-h-[460px] relative">
            <iframe
              title="Peta Lokasi Masjid Al-Ishlah Sidowungu Menganti Gresik"
              src="https://maps.google.com/maps?q=-7.2963785,112.5999143&t=&z=17&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] sm:min-h-[460px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay Tag Lokasi */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white p-3.5 rounded-xl shadow-sm border border-slate-200 max-w-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
                <div>
                  <div className="font-extrabold text-xs sm:text-sm text-slate-900">
                    Masjid Al-Ishlah Sidowungu
                  </div>
                  <div className="text-[11px] text-slate-500">
                    7°17'47.0"S 112°35'59.7"E &bull; Menganti, Gresik
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
