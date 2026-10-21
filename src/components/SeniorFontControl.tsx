import React, { useEffect, useState } from 'react';
import { Type } from 'lucide-react';

export const SeniorFontControl: React.FC = () => {
  const [scaleMode, setScaleMode] = useState<'normal' | 'large' | 'xlarge'>('normal');

  useEffect(() => {
    // Muat preferensi ukuran font dari localStorage
    const saved = localStorage.getItem('alishlah_font_scale');
    if (saved === 'large' || saved === 'xlarge' || saved === 'normal') {
      setScaleMode(saved);
      applyScale(saved);
    }
  }, []);

  const applyScale = (mode: 'normal' | 'large' | 'xlarge') => {
    document.body.classList.remove('font-mode-normal', 'font-mode-large', 'font-mode-xlarge');
    document.body.classList.add(`font-mode-${mode}`);
    localStorage.setItem('alishlah_font_scale', mode);
  };

  const handleSelect = (mode: 'normal' | 'large' | 'xlarge') => {
    setScaleMode(mode);
    applyScale(mode);
  };

  return (
    <div className="inline-flex items-center gap-1.5 bg-muhammadiyah-800/80 border border-muhammadiyah-600/60 rounded-lg p-1 text-white shadow-sm" title="Pilihan Ukuran Huruf (Ramah Lansia)">
      <div className="flex items-center gap-1 pl-1 pr-1 text-xs text-slate-300 font-medium">
        <Type className="w-3.5 h-3.5 text-surya-400" />
        <span className="hidden sm:inline">Teks:</span>
      </div>
      <button
        onClick={() => handleSelect('normal')}
        className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
          scaleMode === 'normal'
            ? 'bg-surya-500 text-muhammadiyah-950 font-bold shadow-sm'
            : 'text-slate-200 hover:bg-muhammadiyah-700/60'
        }`}
        aria-label="Ukuran font standar"
      >
        A
      </button>
      <button
        onClick={() => handleSelect('large')}
        className={`px-2.5 py-1 rounded text-sm font-semibold transition-all ${
          scaleMode === 'large'
            ? 'bg-surya-500 text-muhammadiyah-950 font-bold shadow-sm'
            : 'text-slate-200 hover:bg-muhammadiyah-700/60'
        }`}
        aria-label="Ukuran font besar untuk lansia"
      >
        A+
      </button>
      <button
        onClick={() => handleSelect('xlarge')}
        className={`px-2.5 py-1 rounded text-base font-bold transition-all ${
          scaleMode === 'xlarge'
            ? 'bg-surya-500 text-muhammadiyah-950 font-bold shadow-sm'
            : 'text-slate-200 hover:bg-muhammadiyah-700/60'
        }`}
        aria-label="Ukuran font ekstra besar"
      >
        A++
      </button>
    </div>
  );
};
