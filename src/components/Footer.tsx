import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import portfolioLogo from '../assets/images/logo-transparent.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-midnight text-white pt-16 pb-12 overflow-hidden border-t border-white/10">
      {/* Background Soft Glow */}
      <div
        className="ambient-orb w-[400px] h-[400px] top-0 left-1/2 -translate-x-1/2 bg-[#3B5BFF]/30"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Monogram */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src={portfolioLogo} alt="" className="w-10 h-10 object-contain" />
              <span className="font-display font-bold text-lg tracking-wider text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-semibold tracking-wider text-[#959EB9]">
            <a href="#home" className="hover:text-white transition-colors">HOME</a>
            <a href="#personal-details" className="hover:text-white transition-colors">ABOUT ME</a>
            <a href="#family-info" className="hover:text-white transition-colors">FAMILY</a>
            <a href="#education" className="hover:text-white transition-colors">EDUCATION</a>
            <a href="#extra-curricular" className="hover:text-white transition-colors">ACTIVITIES</a>
            <a href="#family-overview" className="hover:text-white transition-colors">LINEAGE</a>
            <a href="#family-gallery" className="hover:text-[#4FD6D0] transition-colors">GALLERY</a>
          </nav>

          {/* Back to Top */}
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B5BFF] to-[#7A5CFF] text-white flex items-center justify-center hover:scale-105 transition-all shadow-md shadow-[#3B5BFF]/30 ml-2"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Integrity */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#959EB9]">
          <p>
            &copy; 2026 Kazi Jawad. All rights reserved.
          </p>
          <p>Develop and Design by Kazi Jawad.</p>
        </div>
      </div>
    </footer>
  );
};
