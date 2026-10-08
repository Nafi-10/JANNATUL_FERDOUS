import React, { useState, useEffect, useCallback } from 'react';
import portfolioLogo from '../assets/images/logo-transparent.png';
import { PERSONAL_INFO } from '../data/portfolioData';

interface LoadingScreenProps {
  onComplete: () => void;
  minDuration?: number; // duration in ms, default 2400
}

const STAGES = [
  { threshold: 0, text: 'Calibrating glossy visual system...' },
  { threshold: 25, text: 'Compiling academic & personal archives...' },
  { threshold: 55, text: 'Curating ancestral lineage & heritage...' },
  { threshold: 80, text: 'Rendering interactive experience...' },
  { threshold: 98, text: 'Welcome to the portfolio' },
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  minDuration = 2400,
}) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [currentStage, setCurrentStage] = useState(STAGES[0].text);

  const finishLoading = useCallback(() => {
    setProgress(100);
    setCurrentStage('Welcome to the portfolio');
    setIsExiting(true);
    const timeout = setTimeout(() => {
      onComplete();
    }, 600);
    return () => clearTimeout(timeout);
  }, [onComplete]);

  // Handle keyboard shortcut (ESC or Space or Enter to skip)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        finishLoading();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [finishLoading]);

  // Progress animation ticker
  useEffect(() => {
    const startTime = performance.now();

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const rawProgress = Math.min((elapsed / minDuration) * 100, 100);

      // Smooth ease-out pacing
      const easedProgress = Math.round(
        rawProgress >= 100
          ? 100
          : 100 * (1 - Math.pow(1 - rawProgress / 100, 2))
      );

      setProgress(easedProgress);

      // Update stage message
      const activeStage = [...STAGES]
        .reverse()
        .find((s) => easedProgress >= s.threshold);
      if (activeStage) {
        setCurrentStage(activeStage.text);
      }

      if (rawProgress >= 100) {
        clearInterval(interval);
        const exitTimer = setTimeout(() => {
          setIsExiting(true);
          const completeTimer = setTimeout(() => {
            onComplete();
          }, 600);
          return () => clearTimeout(completeTimer);
        }, 350);
        return () => clearTimeout(exitTimer);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [minDuration, onComplete]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isExiting
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100'
      } bg-[#F5F6FA] dark:bg-[#0B0E1B] text-[#14172B] dark:text-[#F3F4F8]`}
    >
      {/* Ambient Aurora Glow Spheres */}
      <div
        className="ambient-orb w-[500px] h-[500px] -top-32 -left-32 bg-[#3B5BFF] animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-[550px] h-[550px] -bottom-36 -right-36 bg-[#4FD6D0] animate-pulse-glow"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7A5CFF] opacity-30"
        aria-hidden="true"
      />

      {/* Subtle Geometric Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[radial-gradient(#3B5BFF_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      {/* Centerpiece Content Card */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md w-full">
        {/* Animated Emblem Lockup */}
        <div className="relative mb-8">
          {/* Rotating Conic Aurora Halo Ring */}
          <div
            className="absolute -inset-2.5 rounded-full blur-md opacity-80 animate-aurora-spin"
            style={{
              background:
                'conic-gradient(from 0deg, #3B5BFF 0%, #7A5CFF 35%, #4FD6D0 70%, #FF8FB1 85%, #3B5BFF 100%)',
            }}
            aria-hidden="true"
          />

          {/* Frosted Glass Emblem Plate */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-white/80 dark:bg-[#14182E]/90 backdrop-blur-xl border border-white/90 dark:border-white/20 shadow-2xl flex items-center justify-center group">
            <img
              src={portfolioLogo}
              alt="Jannatul Ferdous Emblem"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-md animate-logo-spin"
            />
          </div>
        </div>

        {/* Brand Typography */}
        <div className="space-y-2 mb-8">
          <p lang="ar" dir="rtl" className="font-arabic text-2xl sm:text-3xl font-semibold text-[#3B5BFF] dark:text-[#4FD6D0]">
            السَّلَامُ عَلَيْكُمْ
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#14172B] dark:text-white">
            {PERSONAL_INFO.name}
          </h1>
        </div>

        {/* Progress System */}
        <div className="w-full space-y-3">
          {/* Progress Bar Track */}
          <div className="relative w-full h-2 rounded-full bg-slate-200/70 dark:bg-slate-800/80 p-0.5 overflow-hidden backdrop-blur-md shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#3B5BFF] via-[#7A5CFF] to-[#4FD6D0] transition-all duration-150 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Light Beam */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Numerical & Status Indicator */}
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="text-[#5C6280] dark:text-[#959EB9] transition-all duration-300 truncate max-w-[240px] text-left">
              {currentStage}
            </span>
            <span className="font-mono font-bold tabular-nums text-[#3B5BFF] dark:text-[#4FD6D0] text-sm tracking-tight">
              {progress.toString().padStart(2, '0')}%
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
