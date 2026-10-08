import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon, Sparkles, Maximize2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import familyWithParentsImage from '../assets/images/family-with-parents.png';
import familyGatheringImage from '../assets/images/family-gathering.png';
import parentsTogetherImage from '../assets/images/parents-together.png';

interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  image: string;
}

export const FamilyGallery: React.FC = () => {
  const photos: GalleryPhoto[] = [
    {
      id: 'family-with-parents',
      title: 'Jannatul with Her Parents',
      caption: 'A family portrait of Jannatul Ferdous with her parents.',
      image: familyWithParentsImage,
    },
    {
      id: 'family-gathering',
      title: 'Family Gathering',
      caption: 'A gathering with family and loved ones.',
      image: familyGatheringImage,
    },
    {
      id: 'parents-together',
      title: 'Jannatul’s Parents',
      caption: 'A portrait of Jannatul Ferdous’s parents together.',
      image: parentsTogetherImage,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape' && lightboxOpen) setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const currentPhoto = photos[currentIndex];

  return (
    <section id="family-gallery" className="py-14 lg:py-16 relative overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div
        className="ambient-orb w-[480px] h-[480px] top-1/3 -left-32 bg-[#3B5BFF]"
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-[420px] h-[420px] bottom-10 -right-28 bg-[#4FD6D0]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered in the middle as requested) */}
        <ScrollReveal direction="up" delay={40}>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
              <ImageIcon className="w-3.5 h-3.5 text-[#3B5BFF] dark:text-[#4FD6D0] animate-bounce-subtle" />
              <span>Family Portraits</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14172B] dark:text-white">
              Family Photo Gallery
            </h2>
            <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
              Portraits of Jannatul Ferdous and her family.
            </p>
          </div>
        </ScrollReveal>

        {/* Central Display Frame with Left and Right Arrows (Pixel match to user reference concept) */}
        <ScrollReveal direction="up" delay={100}>
          <div className="relative max-w-5xl mx-auto flex items-center justify-center">
            
            {/* Left Arrow Button (Outside frame as in reference diagram) */}
            <button
              onClick={prevSlide}
              aria-label="Previous photo"
              className="absolute -left-3 sm:-left-6 lg:-left-12 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-white/90 dark:bg-[#14172B]/90 hover:bg-[#3B5BFF] dark:hover:bg-[#3B5BFF] text-[#14172B] dark:text-white hover:text-white border border-slate-200 dark:border-white/15 shadow-xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 group cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Central Large Photo Frame */}
            <div className="w-full rounded-3xl sm:rounded-[32px] overflow-hidden glossy-panel border-2 border-white/90 dark:border-white/15 shadow-2xl relative group bg-slate-900 aspect-[16/10] sm:aspect-[16/9]">
              
              {/* The Main Image */}
              <img
                src={currentPhoto.image}
                alt={currentPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none transition-all duration-700 transform group-hover:scale-[1.02]"
              />

              {/* Dark Scrim Gradient for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Top Right Controls & Slide Counter */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white shadow-sm">
                  0{currentIndex + 1} / 0{photos.length}
                </span>
                <button
                  onClick={() => setLightboxOpen(true)}
                  aria-label="View Fullscreen"
                  className="w-9 h-9 rounded-xl bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Photo Caption & Meta Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 lg:p-10 text-white z-10 space-y-2">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#4FD6D0]">
                  <span>Family Portrait</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                  {currentPhoto.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-200/90 max-w-2xl font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {currentPhoto.caption}
                </p>
              </div>

              {/* Inner Glossy Rim Highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/25 to-transparent pointer-events-none" />
            </div>

            {/* Right Arrow Button (Outside frame as in reference diagram) */}
            <button
              onClick={nextSlide}
              aria-label="Next photo"
              className="absolute -right-3 sm:-right-6 lg:-right-12 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-white/90 dark:bg-[#14172B]/90 hover:bg-[#3B5BFF] dark:hover:bg-[#3B5BFF] text-[#14172B] dark:text-white hover:text-white border border-slate-200 dark:border-white/15 shadow-xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 group cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </ScrollReveal>

        {/* Bottom Thumbnail Strip & Dot Indicators */}
        <ScrollReveal direction="up" delay={160}>
          <div className="mt-8 max-w-2xl mx-auto flex items-center justify-center gap-3">
            {photos.map((photo, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={photo.id}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-16 sm:w-20 h-10 sm:h-12 ring-2 ring-[#3B5BFF] dark:ring-[#4FD6D0] shadow-md scale-105'
                      : 'w-12 sm:w-14 h-8 sm:h-10 opacity-50 hover:opacity-85'
                  }`}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </ScrollReveal>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.image}
              alt={currentPhoto.title}
              referrerPolicy="no-referrer"
              className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain"
            />
            <div className="mt-4 text-center text-white space-y-1">
              <h4 className="font-display text-lg font-bold">{currentPhoto.title}</h4>
              <p className="text-xs text-slate-300">{currentPhoto.caption}</p>
            </div>
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-2 right-2 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-colors"
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
