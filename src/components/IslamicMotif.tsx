import React from 'react';

export const IslamicStarDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`} aria-hidden="true">
      <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-surya-400"></div>
      <div className="w-5 h-5 text-surya-500 animate-spin-slow">
        {/* 8-Pointed Rub el Hizb / 12-Ray Islamic Star */}
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2L14.5 7.5L20 5L17.5 10.5L22 12L17.5 13.5L20 19L14.5 16.5L12 22L9.5 16.5L4 19L6.5 13.5L2 12L6.5 10.5L4 5L9.5 7.5L12 2Z" />
        </svg>
      </div>
      <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-surya-400"></div>
    </div>
  );
};
