import React, { useState, useEffect } from 'react';

export const ScrollProgressLine: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentScroll = window.scrollY;
        const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
        setScrollPercentage(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center z-30 pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Top Anchor Dot */}
      <div className="w-1.5 h-1.5 rounded-full bg-[#3B5BFF] mb-2 shadow-sm" />

      {/* Vertical Indicator Track */}
      <div className="w-[2px] h-48 sm:h-56 bg-slate-200/80 dark:bg-white/10 rounded-full relative overflow-hidden">
        {/* Animated Progress Fill */}
        <div
          className="w-full bg-gradient-to-b from-[#3B5BFF] via-[#7A5CFF] to-[#4FD6D0] rounded-full transition-all duration-150 ease-out shadow-sm"
          style={{ height: `${scrollPercentage}%` }}
        />
      </div>

      {/* Bottom Anchor Dot */}
      <div
        className={`w-1.5 h-1.5 rounded-full mt-2 transition-colors duration-200 ${
          scrollPercentage > 95 ? 'bg-[#4FD6D0]' : 'bg-slate-300 dark:bg-white/20'
        }`}
      />
    </div>
  );
};
