import React from 'react';

// 1. Bulan Sabit & Bintang (Hilal Keislaman Penuh Warna)
export const IslamicCrescent: React.FC<{
  size?: number;
  color?: 'gold' | 'emerald' | 'blue' | 'amber';
  className?: string;
}> = ({ size = 48, color = 'gold', className = '' }) => {
  const colorGradients = {
    gold: {
      from: '#F59E0B',
      to: '#D97706',
      star: '#FDE68A',
      glow: 'rgba(245, 158, 11, 0.25)',
    },
    emerald: {
      from: '#10B981',
      to: '#059669',
      star: '#A7F3D0',
      glow: 'rgba(16, 185, 129, 0.25)',
    },
    blue: {
      from: '#38BDF8',
      to: '#0284C7',
      star: '#BAE6FD',
      glow: 'rgba(56, 189, 248, 0.25)',
    },
    amber: {
      from: '#FBBF24',
      to: '#B45309',
      star: '#FEF3C7',
      glow: 'rgba(251, 191, 36, 0.25)',
    },
  }[color];

  const gradId = `crescentGrad-${color}-${Math.random().toString(36).substring(2, 7)}`;

  return (
    <div
      className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_12px_${colorGradients.glow}] ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorGradients.from} />
            <stop offset="100%" stopColor={colorGradients.to} />
          </linearGradient>
        </defs>

        {/* Bulan Sabit Melengkung Indah */}
        <path
          d="M75,20 C50,22 30,42 30,68 C30,85 42,98 58,102 C38,102 18,84 18,60 C18,34 38,12 65,12 C69,12 72,13 75,14 C73,16 74,18 75,20 Z"
          fill={`url(#${gradId})`}
        />

        {/* Bintang Bersinar 8 Sudut di Depan Bulan Sabit */}
        <path
          d="M70,36 L73,43 L80,41 L76,47 L81,51 L74,53 L75,60 L70,55 L65,60 L66,53 L59,51 L64,47 L60,41 L67,43 Z"
          fill={colorGradients.star}
        />
      </svg>
    </div>
  );
};

// 2. Lentera Islami / Fanous Berkilau Emas & Amber
export const IslamicLantern: React.FC<{
  size?: number;
  color?: 'gold' | 'emerald' | 'amber';
  className?: string;
}> = ({ size = 56, color = 'gold', className = '' }) => {
  const gradId = `lanternGrad-${color}-${Math.random().toString(36).substring(2, 7)}`;
  const mainColor = color === 'emerald' ? '#10B981' : color === 'amber' ? '#D97706' : '#F59E0B';
  const glowColor = color === 'emerald' ? '#34D399' : '#FDE68A';

  return (
    <div
      className={`inline-block select-none pointer-events-none filter drop-shadow-[0_4px_14px_rgba(245,158,11,0.3)] ${className}`}
      style={{ width: `${size}px`, height: `${size * 1.5}px` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 150" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor={mainColor} />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
        </defs>

        {/* Rantai Gantung */}
        <line x1="50" y1="0" x2="50" y2="25" stroke={mainColor} strokeWidth="2.5" strokeDasharray="3 2" />
        <circle cx="50" cy="27" r="4" fill={mainColor} />

        {/* Kubah Puncak Lentera */}
        <path d="M50,30 C65,30 72,42 75,50 L25,50 C28,42 35,30 50,30 Z" fill={`url(#${gradId})`} />

        {/* Badan Kaca Lentera Berisi Cahaya Lilin */}
        <polygon points="25,50 75,50 68,105 32,105" fill="rgba(254, 243, 199, 0.25)" stroke={mainColor} strokeWidth="2" />
        
        {/* Cahaya Lilin / Api Lentera */}
        <ellipse cx="50" cy="78" rx="8" ry="14" fill={glowColor} className="animate-pulse" />
        <ellipse cx="50" cy="78" rx="4" ry="8" fill="#FFFFFF" />

        {/* Rangka Geometris Lentera */}
        <line x1="50" y1="50" x2="50" y2="105" stroke={mainColor} strokeWidth="1.5" />
        <line x1="38" y1="50" x2="42" y2="105" stroke={mainColor} strokeWidth="1.2" />
        <line x1="62" y1="50" x2="58" y2="105" stroke={mainColor} strokeWidth="1.2" />

        {/* Dudukan Bawah Lentera */}
        <path d="M30,105 L70,105 L62,120 L38,120 Z" fill={`url(#${gradId})`} />
        
        {/* Rumbai Liontin Bawah */}
        <circle cx="50" cy="125" r="3.5" fill={glowColor} />
      </svg>
    </div>
  );
};

// 3. Kubah Masjid Elegan & Menara (Mosque Dome Architectural Silhouette)
export const IslamicDomeSilhouette: React.FC<{
  size?: number;
  className?: string;
  isDark?: boolean;
}> = ({ size = 90, className = '', isDark = false }) => {
  return (
    <div
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: `${size}px`, height: `${size * 0.9}px` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 120 100" fill="none" className="w-full h-full">
        {/* Bulan Bintang Puncak Kubah */}
        <circle cx="60" cy="8" r="3" fill="#F59E0B" />
        <path d="M60,11 L60,18" stroke="#F59E0B" strokeWidth="2" />

        {/* Kubah Kurva Bawang (Onion Dome Arch) */}
        <path
          d="M60,18 C72,25 95,45 95,72 C95,82 85,85 60,85 C35,85 25,82 25,72 C25,45 48,25 60,18 Z"
          fill={isDark ? 'rgba(245, 158, 11, 0.08)' : 'rgba(15, 71, 125, 0.06)'}
          stroke={isDark ? '#F59E0B' : '#0F477D'}
          strokeWidth="1.5"
        />

        {/* Dasar Kubah & Jendela Busur Islami */}
        <rect x="35" y="85" width="50" height="10" fill={isDark ? '#0C2B4E' : '#E2E8F0'} stroke={isDark ? '#F59E0B' : '#0F477D'} strokeWidth="1.2" />
        <path d="M52,85 C52,80 56,76 60,76 C64,76 68,80 68,85 Z" fill="#F59E0B" />
      </svg>
    </div>
  );
};

// 4. Rosette Geometris Islami / Bintang Girih Berwarna (Variasi Ukuran Kecil & Normal)
export const IslamicRosette: React.FC<{
  size?: number;
  color?: 'gold' | 'emerald' | 'blue' | 'amber';
  points?: 8 | 12;
  className?: string;
}> = ({ size = 48, color = 'gold', points = 8, className = '' }) => {
  const palette = {
    gold: { fill: '#F59E0B', border: '#FBBF24', center: '#D97706' },
    emerald: { fill: '#10B981', border: '#34D399', center: '#059669' },
    blue: { fill: '#0284C7', border: '#38BDF8', center: '#0C2B4E' },
    amber: { fill: '#D97706', border: '#FDE68A', center: '#92400E' },
  }[color];

  return (
    <div
      className={`inline-block select-none pointer-events-none filter drop-shadow-sm ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
        {points === 8 ? (
          // 8-Point Rub el Hizb with Inner Star
          <>
            <rect x="25" y="25" width="50" height="50" fill={palette.fill} rx="4" />
            <rect x="25" y="25" width="50" height="50" fill={palette.fill} rx="4" transform="rotate(45 50 50)" />
            <circle cx="50" cy="50" r="16" fill={palette.center} stroke={palette.border} strokeWidth="2.5" />
            <circle cx="50" cy="50" r="7" fill="#FFFFFF" opacity="0.8" />
          </>
        ) : (
          // 12-Point Surya Muhammadiyah
          <>
            <polygon
              points="50,5 60,32 87,22 72,45 98,50 72,55 87,78 60,68 50,95 40,68 13,78 28,55 2,50 28,45 13,22 40,32"
              fill={palette.fill}
            />
            <circle cx="50" cy="50" r="20" fill={palette.center} stroke={palette.border} strokeWidth="3" />
            <circle cx="50" cy="50" r="10" fill="#FFFFFF" opacity="0.85" />
          </>
        )}
      </svg>
    </div>
  );
};

// 5. Ornamen Komposisi Acak & Alami untuk Background Tiap Section
// Menghilangkan kekakuan yang hanya ada di 4 pojokan dengan ukuran raksasa
export const IslamicSectionDecor: React.FC<{
  variant: 'hero' | 'prayer' | 'about' | 'kas' | 'agenda' | 'facilities' | 'takmir' | 'location';
  isDark?: boolean;
}> = ({ variant, isDark = false }) => {
  switch (variant) {
    case 'hero':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
          {/* Lentera Mengambang Lembut Kiri Atas */}
          <div className="absolute top-10 left-[8%] animate-float opacity-80">
            <IslamicLantern size={48} color="gold" />
          </div>

          {/* Bulan Sabit Berkilau Emas Kanan Atas */}
          <div className="absolute top-12 right-[12%] animate-float opacity-75 hidden sm:block">
            <IslamicCrescent size={56} color="gold" />
          </div>

          {/* Siluet Kubah Masjid Halus di Tengah-Kiri */}
          <div className="absolute top-1/2 left-[3%] -translate-y-1/2 opacity-25 hidden lg:block">
            <IslamicDomeSilhouette size={100} isDark={true} />
          </div>

          {/* Bintang Rosette Surya 12 Kecil Kanan Tengah */}
          <div className="absolute top-[65%] right-[6%] animate-spin-slow opacity-70">
            <IslamicRosette size={42} color="amber" points={12} />
          </div>

          {/* Rosette Emerald Lembut Kiri Bawah */}
          <div className="absolute bottom-10 left-[18%] opacity-60">
            <IslamicRosette size={32} color="emerald" points={8} />
          </div>

          {/* Bintang Kecil Berkelap-Kelip Acak */}
          <div className="absolute top-1/3 left-[45%] w-3 h-3 bg-surya-400 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-16 right-[35%] w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse opacity-50"></div>
        </div>
      );

    case 'prayer':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
          {/* Bulan Sabit & Bintang Emas Halus Kiri Atas (Dekat Judul) */}
          <div className="absolute top-8 left-[10%] animate-float opacity-50">
            <IslamicCrescent size={44} color="gold" />
          </div>

          {/* Lentera Berayun Halus Kanan Atas */}
          <div className="absolute top-10 right-[9%] animate-float opacity-50 hidden sm:block">
            <IslamicLantern size={42} color="emerald" />
          </div>

          {/* Rosette 8 Sudut Berwarna Biru Dongker Kiri Bawah */}
          <div className="absolute bottom-6 left-[6%] opacity-40">
            <IslamicRosette size={38} color="blue" points={8} />
          </div>

          {/* Rosette 12 Sudut Surya Kanan Bawah */}
          <div className="absolute bottom-8 right-[14%] animate-spin-slow opacity-40">
            <IslamicRosette size={36} color="gold" points={12} />
          </div>
        </div>
      );

    case 'about':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
          {/* Siluet Kubah Masjid Halus Kanan Atas */}
          <div className="absolute top-10 right-[8%] opacity-40 hidden md:block">
            <IslamicDomeSilhouette size={90} isDark={false} />
          </div>

          {/* Lentera Emas Menggantung Kiri Atas */}
          <div className="absolute top-12 left-[6%] animate-float opacity-50">
            <IslamicLantern size={46} color="gold" />
          </div>

          {/* Bulan Sabit Zamrud (Emerald) Kiri Tengah */}
          <div className="absolute top-1/2 left-[12%] -translate-y-1/2 opacity-45 hidden lg:block">
            <IslamicCrescent size={40} color="emerald" />
          </div>

          {/* Bintang Rosette Surya Kanan Bawah */}
          <div className="absolute bottom-10 right-[10%] animate-spin-slow opacity-50">
            <IslamicRosette size={34} color="gold" points={12} />
          </div>
        </div>
      );

    case 'kas':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
          {/* Lentera Bercahaya Emas Hangat Kiri Atas */}
          <div className="absolute top-8 left-[7%] animate-float opacity-80">
            <IslamicLantern size={52} color="gold" />
          </div>

          {/* Bulan Sabit Bersinar Kanan Atas */}
          <div className="absolute top-10 right-[8%] animate-float opacity-75">
            <IslamicCrescent size={50} color="gold" />
          </div>

          {/* Rosette Emerald Kanan Bawah */}
          <div className="absolute bottom-10 right-[15%] opacity-70">
            <IslamicRosette size={40} color="emerald" points={8} />
          </div>

          {/* Rosette Biru Langit Kiri Bawah */}
          <div className="absolute bottom-12 left-[14%] opacity-60">
            <IslamicRosette size={34} color="blue" points={8} />
          </div>
        </div>
      );

    case 'agenda':
    case 'facilities':
    case 'takmir':
    case 'location':
    default:
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
          {/* Variasi Bulan Sabit dan Lentera Berukuran Sedang & Kecil */}
          <div className="absolute top-10 left-[8%] animate-float opacity-45">
            <IslamicCrescent size={38} color={isDark ? 'gold' : 'blue'} />
          </div>
          <div className="absolute top-12 right-[8%] animate-float opacity-50 hidden sm:block">
            <IslamicLantern size={42} color={isDark ? 'gold' : 'emerald'} />
          </div>
          <div className="absolute bottom-8 left-[12%] opacity-40">
            <IslamicRosette size={32} color="amber" points={8} />
          </div>
          <div className="absolute bottom-10 right-[12%] animate-spin-slow opacity-40">
            <IslamicRosette size={34} color="gold" points={12} />
          </div>
        </div>
      );
  }
};
