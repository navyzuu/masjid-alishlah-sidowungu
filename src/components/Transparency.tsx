import React, { useState } from 'react';
import { MOCK_KAS } from '../data/mockData';
import { Wallet, TrendingUp, TrendingDown, FileText, CheckCircle, Filter, Download } from 'lucide-react';

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
    // Generate text report summary
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
    <section id="transparansi-kas" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-bold border border-emerald-200">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Akuntabilitas & Amanah Jamaah</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-muhammadiyah-950 tracking-tight">
            Transparansi Laporan Kas & Infaq
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Periode: <strong>{MOCK_KAS.period}</strong> &bull; Pembaruan Terakhir: {MOCK_KAS.lastUpdated}
          </p>
        </div>

        {/* 4 Kartu Ringkasan Finansial */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          {/* Saldo Akhir (Highlight Utama Clean Bento) */}
          <div className="p-5 rounded-xl bg-white border border-slate-300 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-600 font-bold mb-2">
              <span className="uppercase tracking-wider">Saldo Kas Aktif</span>
              <Wallet className="w-5 h-5 text-slate-700" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {formatRupiah(MOCK_KAS.saldoAkhir)}
            </div>
            <p className="text-[11px] text-slate-500 mt-2 font-medium">
              Siap disalurkan untuk operasional & sosial umat
            </p>
          </div>

          {/* Total Pemasukan */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-2">
              <span className="uppercase tracking-wider text-emerald-700">Pemasukan Bulan Ini</span>
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-700 tracking-tight">
              {formatRupiah(MOCK_KAS.pemasukan)}
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Kotak Jumat, transfer QRIS, & sedekah
            </p>
          </div>

          {/* Total Pengeluaran */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-2">
              <span className="uppercase tracking-wider text-rose-700">Pengeluaran Bulan Ini</span>
              <TrendingDown className="w-5 h-5 text-rose-600" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-rose-700 tracking-tight">
              {formatRupiah(MOCK_KAS.pengeluaran)}
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Listrik AC, marbot, santunan & sarpras
            </p>
          </div>

          {/* Saldo Awal Bulan */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-2">
              <span className="uppercase tracking-wider">Saldo Awal Bulan</span>
              <FileText className="w-5 h-5 text-slate-500" />
            </div>
            <div className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
              {formatRupiah(MOCK_KAS.saldoAwal)}
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Sisa saldo per 01 {MOCK_KAS.period}
            </p>
          </div>

        </div>

        {/* Tabel Rincian Mutasi Kas */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden">
          
          {/* Bar Filter & Aksi Download */}
          <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/70">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Tampilkan:</span>
              <div className="inline-flex rounded-lg border border-slate-300 p-0.5 bg-white text-xs font-semibold">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    filterType === 'all'
                      ? 'bg-muhammadiyah-800 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Semua ({MOCK_KAS.items.length})
                </button>
                <button
                  onClick={() => setFilterType('in')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    filterType === 'in'
                      ? 'bg-emerald-700 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Masuk
                </button>
                <button
                  onClick={() => setFilterType('out')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    filterType === 'out'
                      ? 'bg-rose-700 text-white'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Keluar
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={handleDownloadStub}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg shadow-sm transition-colors"
                title="Unduh Rekap Laporan Transparansi (.txt)"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>Unduh Rekap Kas</span>
              </button>

              <button
                onClick={onOpenZiswaf}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-muhammadiyah-950 bg-surya-500 hover:bg-surya-400 rounded-lg shadow-sm transition-all"
              >
                <span>Infaq Sekarang</span>
              </button>
            </div>
          </div>

          {/* List Data Transaksi */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-100 text-slate-700 text-xs uppercase font-extrabold border-b border-slate-200">
                <tr>
                  <th scope="col" className="px-5 py-3.5">Tanggal</th>
                  <th scope="col" className="px-5 py-3.5">Uraian / Keterangan</th>
                  <th scope="col" className="px-5 py-3.5">Kategori</th>
                  <th scope="col" className="px-5 py-3.5 text-right">Nominal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredItems.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-5 py-3.5 whitespace-nowrap text-xs font-semibold text-slate-500">
                      {item.date}
                    </td>
                    <td className="px-5 py-3.5 font-medium text-slate-900">
                      {item.description}
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        item.type === 'in'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}>
                        {item.type === 'in' ? 'Pemasukan' : 'Pengeluaran'}
                      </span>
                    </td>
                    <td className={`px-5 py-3.5 whitespace-nowrap text-right font-bold text-base ${
                      item.type === 'in' ? 'text-emerald-700' : 'text-rose-700'
                    }`}>
                      {item.type === 'in' ? '+' : '-'} {formatRupiah(item.amount)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Note Akuntabilitas */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>
              Laporan kas lengkap dibacakan sebelum Sholat Jumat & diawasi Pimpinan Ranting Muhammadiyah Sidowungu.
            </span>
            <span className="font-semibold text-muhammadiyah-800">
              Status Audit: Wajar Tanpa Pengecualian (WTP)
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
