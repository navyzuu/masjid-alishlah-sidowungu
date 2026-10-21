import React, { useState } from 'react';
import { X, Copy, Check, Heart, QrCode, Building2, MessageCircle } from 'lucide-react';
import { MASJID_PROFILE } from '../data/mockData';

interface ZiswafModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ZiswafModal: React.FC<ZiswafModalProps> = ({ isOpen, onClose }) => {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (bankName: string, textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy.replace(/\s+/g, ''));
    setCopiedBank(bankName);
    setTimeout(() => {
      setCopiedBank(null);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
        
        {/* Tombol Tutup */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-2 rounded-xl hover:bg-slate-100 transition-colors"
          aria-label="Tutup Dialog Infaq"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header Dialog */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-2">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-muhammadiyah-950">
            Infaq, Sedekah & Wakaf Al-Ishlah
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Salurkan amal jariyah Anda untuk kemakmuran masjid dan operasional dakwah Sidowungu.
          </p>
        </div>

        {/* 2 Metode: QRIS & Transfer Bank */}
        <div className="space-y-6">
          
          {/* Card QRIS Standar Nasional */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              <QrCode className="w-4 h-4 text-slate-700" />
              <span>Pindai QRIS (Semua Dompet Digital & Mobile Banking)</span>
            </div>

            {/* Ilustrasi QRIS Stylized Bersih */}
            <div className="inline-block p-4 bg-white rounded-xl shadow-xs border border-slate-200 mx-auto">
              <div className="w-48 h-48 bg-slate-900 rounded-lg p-2.5 flex flex-col items-center justify-between text-white relative">
                {/* QR Code Canvas Mockup */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
                  <path d="M10,10 h30 v30 h-30 z M15,15 v20 h20 v-20 z" />
                  <rect x="20" y="20" width="10" height="10" fill="#D97706" />
                  <path d="M60,10 h30 v30 h-30 z M65,15 v20 h20 v-20 z" />
                  <rect x="70" y="20" width="10" height="10" fill="#D97706" />
                  <path d="M10,60 h30 v30 h-30 z M15,65 v20 h20 v-20 z" />
                  <rect x="20" y="70" width="10" height="10" fill="#D97706" />
                  {/* Decorative QR Pattern */}
                  <rect x="45" y="15" width="8" height="8" />
                  <rect x="45" y="30" width="8" height="8" />
                  <rect x="50" y="45" width="8" height="8" />
                  <rect x="15" y="45" width="8" height="8" />
                  <rect x="30" y="45" width="8" height="8" />
                  <rect x="60" y="50" width="8" height="8" />
                  <rect x="75" y="50" width="8" height="8" />
                  <rect x="65" y="65" width="8" height="8" />
                  <rect x="80" y="65" width="8" height="8" />
                  <rect x="50" y="75" width="8" height="8" />
                  <rect x="65" y="80" width="8" height="8" />
                  <rect x="80" y="80" width="8" height="8" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-slate-900 border border-white rounded p-1 text-[8px] font-bold tracking-widest text-amber-400">
                    QRIS
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs font-bold text-slate-800 mt-3">
              NMID: ID102026198401MAS
            </p>
            <p className="text-[11px] text-slate-500">
              Masjid Al-Ishlah Sidowungu Menganti Gresik
            </p>
          </div>

          {/* Transfer Rekening Bank Syariah */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-muhammadiyah-700" />
              <span>Transfer Rekening Bank Resmi Masjid</span>
            </div>

            {MASJID_PROFILE.bankAccounts.map((acc) => (
              <div
                key={acc.accountNumber}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-muhammadiyah-300 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-sm text-slate-900">{acc.bank}</span>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      Kode: {acc.code}
                    </span>
                  </div>
                  <div className="text-lg font-black font-mono text-muhammadiyah-800 tracking-wider mt-1">
                    {acc.accountNumber}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    a.n. {acc.accountName}
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(acc.bank, acc.accountNumber)}
                  className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all min-h-[44px] ${
                    copiedBank === acc.bank
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {copiedBank === acc.bank ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-600" />
                      <span>Salin No. Rek</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Konfirmasi WhatsApp */}
          <div className="pt-2">
            <a
              href="https://wa.me/6281234567890?text=Assalamu'alaikum%20Bendahara%20Masjid%20Al-Ishlah%20Sidowungu,%20saya%20sudah%20melakukan%20transfer%20infaq/sedekah.%20Berikut%20bukti%20terlampir."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Konfirmasi Infaq via WhatsApp Bendahara</span>
            </a>
          </div>

          {/* Doa Penghargaan */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-center text-xs text-amber-950">
            <p className="font-arabic text-sm text-amber-900 mb-1">
              آجَرَكَ اللَّهُ فِيمَا أَعْطَيْتَ، وَبَارَكَ لَكَ فِيمَا أَبْقَيْتَ
            </p>
            <p className="italic">
              &ldquo;Semoga Allah memberi pahala atas apa yang engkau berikan, memberkahi apa yang engkau simpan, dan menjadikannya pembersih bagimu.&rdquo;
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
