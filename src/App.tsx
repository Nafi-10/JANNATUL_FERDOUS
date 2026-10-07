import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AddressBanner } from './components/AddressBanner';
import { PersonalDetails } from './components/PersonalDetails';
import { FamilyInfo } from './components/FamilyInfo';
import { Education } from './components/Education';
import { ExtraCurricular } from './components/ExtraCurricular';
import { FamilyOverview } from './components/FamilyOverview';
import { FamilyGallery } from './components/FamilyGallery';
import { Footer } from './components/Footer';
import { ScrollProgressLine } from './components/ScrollProgressLine';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'residential-address',
        'personal-details',
        'family-info',
        'education',
        'extra-curricular',
        'family-overview',
        'family-gallery',
      ];
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          if (sections[i] === 'residential-address') {
            setActiveSection('personal-details');
          } else {
            setActiveSection(sections[i]);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-pearl-wash text-[#14172B] dark:text-[#F3F4F8] transition-colors duration-300 relative">
      {/* Scroll Progress Length Indicator Line */}
      <ScrollProgressLine />

      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Single-Page Sections */}
      <main>
        <Hero />
        <AddressBanner />
        <PersonalDetails />
        <FamilyInfo />
        <Education />
        <ExtraCurricular />
        <FamilyOverview />
        <FamilyGallery />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
