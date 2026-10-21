import React from 'react';
import { Shield, BookOpen, Users, Compass, CheckCircle2, Award } from 'lucide-react';
import { MASJID_PROFILE } from '../data/mockData';
import { IslamicStarDivider } from './IslamicMotif';
import { IslamicSectionDecor } from './IslamicAmbientElements';

export const About: React.FC = () => {
  return (
    <section id="profil" className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 overflow-hidden">
      {/* Ornamen Keislaman Alami Berwarna: Kubah, Lentera Emas, Bulan Sabit Emerald & Bintang */}
      <IslamicSectionDecor variant="about" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Profil (Tanpa Pill Badge) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="text-xs uppercase font-extrabold tracking-widest text-muhammadiyah-700">
            Profil & Sejarah Persyarikatan
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-muhammadiyah-950 tracking-tight">
            Mengenal Masjid Al-Ishlah Sidowungu
          </h2>

          {/* Hanya 1 Divider Bintang Tunggal Islami */}
          <IslamicStarDivider />
          
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            Tonggak pembinaan iman, ilmu, dan amal sholeh warga Sidowungu, Menganti, Kabupaten Gresik sejak tahun 1984.
          </p>
        </div>

        {/* 2 Kolom: Sejarah & Visi Misi */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Kolom Kiri: Narasi Sejarah & Karakteristik */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Masjid Al-Ishlah Sidowungu</strong> berakar dari semangat dakwah pencerahan para perintis Pimpinan Ranting Muhammadiyah (PRM) Sidowungu di era tahun 1980-an. Berdiri kokoh di atas tanah wakaf seluas 1.250 m², masjid ini menjadi pusat gravitasi ibadah dan pembinaan keluarga muslim di wilayah timur Kecamatan Menganti, perbatasan Gresik dan Surabaya Barat.
              </p>
              <p>
                Nama <em>Al-Ishlah</em> bermakna <strong>perbaikan dan pemurnian yang berkelanjutan</strong>. Selaras dengan kepribadian Muhammadiyah, Masjid Al-Ishlah tidak hanya difungsikan sebagai tempat sholat lima waktu berjamaah, melainkan juga wadah pemberdayaan sosial, majelis taklim Aisyiyah, pendidikan Al-Qur'an anak-anak (TPQ), serta santunan lansia dhuafa.
              </p>
              <p>
                Dengan arsitektur modern bernuansa biru keteduhan dan ornamen surya keemasan, masjid ini dirancang ramah bagi seluruh kelompok usia—khususnya para sesepuh dan lansia dengan fasilitas ram miring, pegangan tangan, toilet duduk, dan kursi sholat khusus.
              </p>
            </div>

            {/* Poin Karakteristik Utama */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-muhammadiyah-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-muhammadiyah-950">Manhaj Tarjih & Tajdid</div>
                  <div className="text-slate-600">Ibadah murni berlandaskan Al-Qur’an & Sunnah Shahihah.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-muhammadiyah-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-muhammadiyah-950">Amanah & Transparan</div>
                  <div className="text-slate-600">Laporan kas infaq diumumkan terbuka setiap Jumat & online.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-muhammadiyah-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-muhammadiyah-950">Ramah Sepuh & Lansia</div>
                  <div className="text-slate-600">Akses tanpa hambatan dan kursi ibadah nyaman.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-muhammadiyah-200/80 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-bold text-muhammadiyah-950">Gerakan Berkemajuan</div>
                  <div className="text-slate-600">Mengembangkan amal usaha dan ta'awun kemanusiaan.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Visi & Misi Bento Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="bg-gradient-to-br from-muhammadiyah-950 to-muhammadiyah-900 text-white rounded-2xl p-6 sm:p-7 border border-muhammadiyah-700/80 shadow-card space-y-5">
              
              {/* Visi */}
              <div className="space-y-2 border-b border-muhammadiyah-800 pb-4">
                <div className="flex items-center gap-2 text-surya-400 font-extrabold text-xs uppercase tracking-wider">
                  <Compass className="w-4 h-4 text-surya-400" />
                  <span>Visi Masjid</span>
                </div>
                <p className="text-base font-bold text-white leading-snug">
                  &ldquo;Terwujudnya Masjid Al-Ishlah sebagai sentra ibadah yang khusyuk, mencerahkan peradaban umat, dan memakmurkan masyarakat Sidowungu yang berkemajuan.&rdquo;
                </p>
              </div>

              {/* Misi */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-surya-400 font-extrabold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4 text-surya-400" />
                  <span>Misi Strategis</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded bg-surya-500/20 text-surya-400 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                    <span>Menyelenggarakan ibadah sholat fardhu dan Jumat yang tertib, khusyuk, sesuai tuntunan As-Sunnah.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded bg-surya-500/20 text-surya-400 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                    <span>Menghidupkan majelis ilmu, pengajian Aisyiyah, dan pendidikan TPQ bagi generasi penerus.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded bg-surya-500/20 text-surya-400 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                    <span>Menyalurkan zakat, infaq, dan shodaqoh secara tepat sasaran menolong lansia dan dhuafa.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded bg-surya-500/20 text-surya-400 font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
                    <span>Memelihara kebersihan, kenyamanan fisik, dan keramahan akses ibadah bagi lansia.</span>
                  </li>
                </ul>
              </div>

              {/* Info Afiliasi Resmi */}
              <div className="pt-3 border-t border-muhammadiyah-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Afiliasi: PRM Sidowungu &bull; PCM Menganti</span>
                <span className="font-semibold text-surya-400">Gresik, Jawa Timur</span>
              </div>
            </div>

            {/* Ringkasan Angka Identitas */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-white border border-muhammadiyah-200 rounded-xl p-4 shadow-xs">
                <div className="text-2xl font-black text-muhammadiyah-900">{MASJID_PROFILE.landArea}</div>
                <div className="text-xs text-slate-600 font-medium">Luas Lahan Wakaf</div>
              </div>
              <div className="bg-white border border-muhammadiyah-200 rounded-xl p-4 shadow-xs">
                <div className="text-2xl font-black text-surya-600">{MASJID_PROFILE.capacity}</div>
                <div className="text-xs text-slate-600 font-medium">Daya Tampung Jamaah</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
