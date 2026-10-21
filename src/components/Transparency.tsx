import React, { useState } from 'react';
import { MOCK_KAS } from '../data/mockData';
import { Wallet, TrendingUp, TrendingDown, FileText, CheckCircle, Filter, Download } from 'lucide-react';
import { IslamicStarDivider, IslamicWatermark, IslamicArabesqueBand } from './IslamicMotif';

interface TransparencyProps {
  onOpenZiswaf: () => void;
}

export const Transparency: React.FC<TransparencyProps> = ({ onOpenZiswaf }) => {
  const [filterType, setFilterType] = useState<'all' | 'in' | 'out'>('all');

  const filteredItems = MOCK_KAS.items.filter((item) => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(val);
  };

  const handleDownloadStub = () => {
    const content = `LAPORAN KAS & INFAQ MASJID AL-ISHLAH SIDOWUNGU
Periode: ${MOCK_KAS.period}
Terakhir Diperbarui: ${MOCK_KAS.lastUpdated}
--------------------------------------------------
Saldo Awal:   ${formatRupiah(MOCK_KAS.saldoAwal)}
Pemasukan:    ${formatRupiah(MOCK_KAS.pemasukan)}
Pengeluaran:  ${formatRupiah(MOCK_KAS.pengeluaran)}
--------------------------------------------------
Saldo Akhir:  ${formatRupiah(MOCK_KAS.saldoAkhir)}

Detail Mutasi Kas:
${MOCK_KAS.items
  .map(
    (i) =>
      `[${i.date}] ${i.type === 'in' ? '(+)' : '(-)'} ${formatRupiah(i.amount)} - ${i.description}`
  )
  .join('\n')}

Laporan ini diumumkan secara transparan kepada jamaah sholat Jumat dan diaudit oleh Pimpinan Ranting Muhammadiyah Sidowungu.`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Laporan_Kas_AlIshlah_Sidowungu_${MOCK_KAS.period.replace(' ', '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="transparansi-kas" className="relative py-16 sm:py-24 bg-gradient-to-br from-muhammadiyah-950 via-muhammadiyah-900 to-muhammadiyah-950 text-white border-b border-muhammadiyah-800 overflow-hidden">
      <IslamicWatermark position="top-right" size={440} opacity="opacity-[0.10]" isDark={true} />
      <IslamicWatermark position="bottom-left" size={380} opacity="opacity-[0.08]" isDark={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section (Tanpa Pill Badge) */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="text-xs uppercase font-extrabold tracking-widest text-surya-400">
            Akuntabilitas & Amanah Jamaah
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            Transparansi Laporan Kas & Infaq
          </h2>

          <IslamicStarDivider isDark={true} />
          <IslamicArabesqueBand isDark={true} className="-mt-2 mb-2" />
          
          <p className="text-sm sm:text-base text-slate-300 font-medium">
            Periode: <strong className="text-surya-300">{MOCK_KAS.period}</strong> &bull; Pembaruan Terakhir: {MOCK_KAS.lastUpdated}
          </p>
        </div>

        {/* 4 Kartu Ringkasan Finansial */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          {/* Saldo Akhir (Highlight Utama Clean Bento) */}
          <div className="p-5 rounded-xl bg-muhammadiyah-900/90 border-2 border-surya-400 shadow-elevated flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-surya-400 font-bold mb-2">
              <span className="uppercase tracking-wider">Saldo Kas Aktif</span>
              <Wallet className="w-5 h-5 text-surya-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-surya-300 tracking-tight">
              {formatRupiah(MOCK_KAS.saldoAkhir)}
            </div>
            <p className="text-[11px] text-slate-300 mt-2 font-medium">
              Siap disalurkan untuk operasional & sosial umat
            </p>
          </div>

          {/* Total Pemasukan */}
          <div className="p-5 rounded-xl bg-muhammadiyah-900/80 border border-emerald-500/50 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-bold mb-2">
              <span className="uppercase tracking-wider">Pemasukan Bulan Ini</span>
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 tracking-tight">
              {formatRupiah(MOCK_KAS.pemasukan)}
            </div>
            <p className="text-[11px] text-slate-300 mt-2">
              Kotak Jumat, transfer QRIS, & sedekah
            </p>
          </div>

          {/* Total Pengeluaran */}
          <div className="p-5 rounded-xl bg-muhammadiyah-900/80 border border-rose-500/50 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-rose-400 font-bold mb-2">
              <span className="uppercase tracking-wider">Pengeluaran Bulan Ini</span>
              <TrendingDown className="w-5 h-5 text-rose-400" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-rose-400 tracking-tight">
              {formatRupiah(MOCK_KAS.pengeluaran)}
            </div>
            <p className="text-[11px] text-slate-300 mt-2">
              Listrik AC, marbot, santunan & sarpras
            </p>
          </div>

          {/* Saldo Awal Bulan */}
          <div className="p-5 rounded-xl bg-muhammadiyah-900/80 border border-muhammadiyah-700 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-2">
              <span className="uppercase tracking-wider">Saldo Awal Bulan</span>
              <FileText className="w-5 h-5 text-slate-400" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-200 tracking-tight">
              {formatRupiah(MOCK_KAS.saldoAwal)}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Sisa saldo per 01 {MOCK_KAS.period}
            </p>
          </div>

        </div>

        {/* Tabel Rincian Mutasi Kas */}
        <div className="bg-muhammadiyah-900/90 rounded-2xl border border-muhammadiyah-700/80 shadow-elevated overflow-hidden">
          
          {/* Bar Filter & Aksi Download */}
          <div className="p-4 sm:p-5 border-b border-muhammadiyah-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-muhammadiyah-950/80">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-surya-400" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Tampilkan:</span>
              <div className="inline-flex rounded-lg border border-muhammadiyah-700 p-0.5 bg-muhammadiyah-900 text-xs font-semibold">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    filterType === 'all'
                      ? 'bg-surya-500 text-muhammadiyah-950 font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Semua ({MOCK_KAS.items.length})
                </button>
                <button
                  onClick={() => setFilterType('in')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    filterType === 'in'
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Masuk
                </button>
                <button
                  onClick={() => setFilterType('out')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    filterType === 'out'
                      ? 'bg-rose-600 text-white font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Keluar
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={handleDownloadStub}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-200 bg-muhammadiyah-800 border border-muhammadiyah-600 hover:bg-muhammadiyah-700 rounded-lg shadow-sm transition-colors"
                title="Unduh Rekap Laporan Transparansi (.txt)"
              >
                <Download className="w-3.5 h-3.5 text-surya-400" />
                <span>Unduh Rekap Kas</span>
              </button>

              <button
                onClick={onOpenZiswaf}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-muhammadiyah-950 bg-gradient-to-r from-surya-500 to-surya-600 hover:from-surya-400 hover:to-surya-500 rounded-lg shadow-sm transition-all"
              >
                <span>Infaq Sekarang</span>
              </button>
            </div>
          </div>

          {/* List Data Transaksi */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-200">
              <thead className="bg-muhammadiyah-950/90 text-surya-300 text-xs uppercase font-extrabold border-b border-muhammadiyah-700/80">
                <tr>
                  <th scope="col" className="px-5 py-3.5">Tanggal</th>
                  <th scope="col" className="px-5 py-3.5">Uraian / Keterangan</th>
                  <th scope="col" className="px-5 py-3.5">Kategori</th>
                  <th scope="col" className="px-5 py-3.5 text-right">Nominal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-muhammadiyah-800">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-muhammadiyah-800/40 transition-colors">
                    <td className="px-5 py-3.5 whitespace-nowrap text-xs font-semibold text-slate-400">
                      {item.date}
                    </td>
                    <td className="px-5 py-3.5 font-medium text-white">
                      {item.description}
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold ${
                        item.type === 'in'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      }`}>
                        {item.type === 'in' ? 'Pemasukan' : 'Pengeluaran'}
                      </span>
                    </td>
                    <td className={`px-5 py-3.5 whitespace-nowrap text-right font-bold text-base ${
                      item.type === 'in' ? 'text-emerald-400' : 'text-rose-400'
                    }`}>
                      {item.type === 'in' ? '+' : '-'} {formatRupiah(item.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Note Akuntabilitas */}
          <div className="p-4 bg-muhammadiyah-950/90 border-t border-muhammadiyah-700/80 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>
              Laporan kas lengkap dibacakan sebelum Sholat Jumat & diawasi Pimpinan Ranting Muhammadiyah Sidowungu.
            </span>
            <span className="font-semibold text-surya-400">
              Status Audit: Wajar Tanpa Pengecualian (WTP)
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
