import React from 'react';

export const IslamicStarDivider: React.FC<{ className?: string; isDark?: boolean }> = ({
  className = '',
  isDark = false,
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`} aria-hidden="true">
      <div className={`h-px w-12 sm:w-24 ${isDark ? 'bg-gradient-to-r from-transparent to-surya-400' : 'bg-gradient-to-r from-transparent to-surya-500'}`}></div>
      <div className="w-5 h-5 text-surya-500 animate-spin-slow">
        {/* 8-Pointed Rub el Hizb / 12-Ray Islamic Star */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2L14.5 7.5L20 5L17.5 10.5L22 12L17.5 13.5L20 19L14.5 16.5L12 22L9.5 16.5L4 19L6.5 13.5L2 12L6.5 10.5L4 5L9.5 7.5L12 2Z" />
        </svg>
      </div>
      <div className={`h-px w-12 sm:w-24 ${isDark ? 'bg-gradient-to-l from-transparent to-surya-400' : 'bg-gradient-to-l from-transparent to-surya-500'}`}></div>
    </div>
  );
};

// Watermark Bintang Surya 12 Muhammadiyah untuk Latar Belakang Section (Tegas & Jelas)
export const IslamicWatermark: React.FC<{
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  size?: number;
  opacity?: string;
  isDark?: boolean;
}> = ({
  position = 'top-right',
  size = 420,
  opacity = 'opacity-[0.09]',
  isDark = false,
}) => {
  const getPosClasses = () => {
    switch (position) {
      case 'top-left':
        return '-left-16 -top-16';
      case 'bottom-right':
        return '-right-16 -bottom-16';
      case 'bottom-left':
        return '-left-16 -bottom-16';
      case 'center':
        return 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
      case 'top-right':
      default:
        return '-right-16 -top-16';
    }
  };

  return (
    <div
      className={`absolute ${getPosClasses()} pointer-events-none ${opacity} select-none animate-spin-slow ${
        isDark ? 'text-surya-400' : 'text-muhammadiyah-700'
      }`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
        {/* 12-Pointed Islamic Surya Star Geometry with Double Inner Ring */}
        <polygon points="100,0 120,60 180,40 140,90 200,100 140,110 180,160 120,140 100,200 80,140 20,160 60,110 0,100 60,90 20,40 80,60" />
        <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};

// Pola Arabesque Pita Garis Keislaman (Islamic Geometric Header Line - Bolder & Prominent)
export const IslamicArabesqueBand: React.FC<{ isDark?: boolean; className?: string }> = ({
  isDark = false,
  className = '',
}) => {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center py-2.5 ${className}`} aria-hidden="true">
      <div className="flex items-center gap-3 sm:gap-4 text-surya-500">
        <div className={`h-[2px] w-20 sm:w-36 ${isDark ? 'bg-gradient-to-r from-transparent via-surya-400 to-surya-500' : 'bg-gradient-to-r from-transparent via-surya-500 to-surya-600'}`}></div>
        
        {/* Rangkaian Ornamen Bintang Islami & Bulan Sabit */}
        <div className="flex items-center gap-2">
          {/* 8-Pointed Star Left */}
          <svg viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 ${isDark ? 'text-surya-400' : 'text-surya-600'}`}>
            <path d="M12 2L14 7L19 6L16 11L21 13L16 16L18 21L13 18L10 22L9 17L4 18L6 13L2 11L7 9L5 4L10 6L12 2Z" />
          </svg>

          {/* Central 12-Pointed Islamic Surya Star (Rotating) */}
          <div className="relative flex items-center justify-center">
            <svg viewBox="0 0 200 200" fill="currentColor" className={`w-6 h-6 sm:w-7 sm:h-7 animate-spin-slow ${isDark ? 'text-surya-400' : 'text-surya-500'}`}>
              <polygon points="100,0 120,60 180,40 140,90 200,100 140,110 180,160 120,140 100,200 80,140 20,160 60,110 0,100 60,90 20,40 80,60" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="6" />
            </svg>
          </div>

          {/* 8-Pointed Star Right */}
          <svg viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 ${isDark ? 'text-surya-400' : 'text-surya-600'}`}>
            <path d="M12 2L14 7L19 6L16 11L21 13L16 16L18 21L13 18L10 22L9 17L4 18L6 13L2 11L7 9L5 4L10 6L12 2Z" />
          </svg>
        </div>

        <div className={`h-[2px] w-20 sm:w-36 ${isDark ? 'bg-gradient-to-l from-transparent via-surya-400 to-surya-500' : 'bg-gradient-to-l from-transparent via-surya-500 to-surya-600'}`}></div>
      </div>
    </div>
  );
};

// Ornamen Bintang Kecil untuk Sudut Kartu atau Header
export const IslamicStarBadge: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center justify-center text-surya-500 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2L14 7L19 6L16 11L21 13L16 16L18 21L13 18L10 22L9 17L4 18L6 13L2 11L7 9L5 4L10 6L12 2Z" />
      </svg>
    </div>
  );
};
