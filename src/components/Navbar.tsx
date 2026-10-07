import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import portfolioLogo from '../assets/images/logo-transparent.png';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT ME', href: '#personal-details' },
    { label: 'FAMILY', href: '#family-info' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'ACTIVITIES', href: '#extra-curricular' },
    { label: 'LINEAGE', href: '#family-overview' },
    { label: 'GALLERY', href: '#family-gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#F5F6FA]/80 dark:bg-[#0B0E1B]/85 backdrop-blur-xl border-b border-white/60 dark:border-white/10 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark with Monogram */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BFF] rounded-lg"
            aria-label="Jannatul Ferdous Homepage"
          >
            <img
              src={portfolioLogo}
              alt=""
              className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-display font-bold text-lg tracking-wider text-[#14172B] dark:text-white transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-8 text-xs font-semibold tracking-widest text-[#5C6280] dark:text-[#959EB9]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 transition-colors hover:text-[#3B5BFF] dark:hover:text-[#4FD6D0] ${
                    isActive ? 'text-[#3B5BFF] dark:text-[#4FD6D0]' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#3B5BFF] to-[#4FD6D0] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Gallery Action */}
          <div className="hidden xl:flex items-center gap-4">
            <a
              href="#family-gallery"
              className="px-5 py-2.5 text-xs font-semibold tracking-wider text-[#3B5BFF] dark:text-[#4FD6D0] border border-[#3B5BFF]/40 dark:border-[#4FD6D0]/40 rounded-xl hover:bg-[#3B5BFF]/5 dark:hover:bg-[#4FD6D0]/10 transition-all flex items-center gap-2 group shadow-sm hover:shadow-md hover:shadow-[#3B5BFF]/10"
            >
              <span>PHOTO GALLERY</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

          {/* Mobile Menu */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-[#14172B] dark:text-white border border-white/60 dark:border-white/10 bg-white/50 dark:bg-white/5"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 p-4 glossy-panel space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-semibold tracking-wider text-[#14172B] dark:text-white hover:bg-[#3B5BFF]/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#family-gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full py-2.5 glossy-btn-primary flex items-center justify-center gap-2 text-xs"
              >
                <span>PHOTO GALLERY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
