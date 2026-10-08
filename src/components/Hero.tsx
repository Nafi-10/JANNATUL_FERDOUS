import React from 'react';
import { Download, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PORTRAIT_IMAGE } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { downloadBioData } from '../utils/downloadBioData';

interface HeroProps {
  onOpenAboutModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-transparent"
    >
      {/* Background Soft Blurred Gradient Orbs */}
      <div
        className="ambient-orb w-[420px] h-[420px] -top-20 -left-20 bg-[#7A5CFF]"
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-[500px] h-[500px] top-1/3 -right-24 bg-[#4FD6D0]"
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-[380px] h-[380px] bottom-10 left-1/3 bg-[#3B5BFF]"
        aria-hidden="true"
      />

      {/* Ambient background orbs for smooth atmospheric depth */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio, CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7 text-left -translate-y-5 lg:-translate-y-8">
            <ScrollReveal direction="left" delay={40}>
              <div className="space-y-6 sm:space-y-7">
                {/* Small Greeting Kicker */}
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#5C6280] dark:text-[#959EB9] px-3 py-1 rounded-full bg-white/60 dark:bg-white/5 border border-white/60 dark:border-white/10 w-fit backdrop-blur-sm shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
                  <span>{PERSONAL_INFO.greeting}</span>
                </div>

                {/* Main Name Heading (Pixel match to ETHAN COLE in reference) */}
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                  <span className="block sm:inline text-[#14172B] dark:text-white sm:mr-3">
                    {PERSONAL_INFO.firstName}
                  </span>
                  {' '}
                  <span className="block sm:inline text-[#3B5BFF] dark:text-[#4FD6D0] drop-shadow-sm">
                    {PERSONAL_INFO.lastName}
                  </span>
                </h1>

                {/* Subtitle / Role Badge */}
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#5C6280] dark:text-[#959EB9] uppercase">
                    {PERSONAL_INFO.title}
                  </p>
                  {/* Subtle line accent with cobalt dot */}
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-[2px] bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] rounded-full" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4FD6D0]" />
                  </div>
                </div>

                {/* Tagline / Bio (Matches reference bio tone) */}
                <p className="text-base sm:text-lg text-[#5C6280] dark:text-[#A0A7C2] leading-relaxed max-w-xl font-normal text-justify whitespace-pre-line">
                  {PERSONAL_INFO.bio}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  {/* Primary Profile Details Button */}
                  <button
                    type="button"
                    onClick={downloadBioData}
                    className="glossy-btn-primary px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider flex items-center gap-2.5 group cursor-pointer"
                  >
                    <span>DOWNLOAD BIO-DATA</span>
                    <Download className="w-4 h-4 animate-bounce-subtle" />
                  </button>

                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Layered portrait with a circular backdrop */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end relative">
            <ScrollReveal direction="right" delay={100}>
              <div className="relative w-full max-w-[440px] sm:max-w-[500px] aspect-[5/6] flex items-end justify-center">

                {/* Circular backdrop and soft glow */}
                <div
                  className="absolute top-[8%] right-[2%] w-[88%] aspect-square rounded-full bg-gradient-to-br from-[#DDE8D6] via-[#B7C9B0] to-[#9CB8A8] dark:from-[#263A34] dark:via-[#1C302A] dark:to-[#14231F] shadow-2xl shadow-[#14172B]/10 dark:shadow-black/40"
                  aria-hidden="true"
                />
                <div
                  className="absolute top-[5%] right-0 w-[92%] aspect-square rounded-full border border-white/70 dark:border-white/15"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#3B5BFF]/15 via-[#7A5CFF]/10 to-[#4FD6D0]/15 blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <img
                  src={PORTRAIT_IMAGE}
                  alt="Jannatul Ferdous Portrait"
                  referrerPolicy="no-referrer"
                  className="relative z-10 h-[96%] w-[88%] rounded-t-full rounded-b-[2rem] object-cover object-top shadow-xl shadow-black/10 dark:shadow-black/30"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
