import React from 'react';
import { GraduationCap, Award, BookOpen, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ACADEMIC_STATS } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    'Major in Computer Science & Engineering with honors track',
    'Specialized in Human-Computer Interaction & Design Systems',
    'Recipient of Academic Excellence & Dean’s Merit Scholarship',
    'Active open-source contributor and student mentor',
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle Ambient Orb */}
      <div
        className="ambient-orb w-[450px] h-[450px] top-1/4 -left-32 bg-[#4FD6D0]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>01. Academic &amp; Creative Background</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14172B] dark:text-white">
              Bridging computing theory with tactile human experiences.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#959EB9] max-w-md font-normal leading-relaxed">
            As a computer science student and interface designer, I don&apos;t just sketch mockups—I understand the algorithms, state trees, and systems powering them.
          </p>
        </div>

        {/* Academic Stats Grid (Tabular numerals) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {ACADEMIC_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="glossy-card p-6 sm:p-7 relative overflow-hidden group"
            >
              <div className="relative z-10 space-y-2">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#14172B] dark:text-white font-mono tabular-nums group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors">
                  {stat.value}
                </span>
                <h3 className="text-xs font-bold tracking-wider uppercase text-[#14172B] dark:text-white">
                  {stat.label}
                </h3>
                <p className="text-xs text-[#5C6280] dark:text-[#959EB9]">
                  {stat.subtext}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#3B5BFF]/10 to-transparent rounded-bl-full pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Narrative & Highlights Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-7 glossy-panel p-8 sm:p-10 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#3B5BFF] dark:text-[#4FD6D0] uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>My Academic Journey</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#14172B] dark:text-white">
                Designing for people, grounded in science.
              </h3>
              <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#A0A7C2] leading-relaxed">
                Currently pursuing my bachelor&apos;s degree in Computer Science, my focus revolves around human-computer interaction, cognitive load optimization, and tactile digital products. I believe the best digital tools feel effortless, calm, and delightful.
              </p>
              <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#A0A7C2] leading-relaxed">
                When I&apos;m not researching accessibility frameworks or engineering frontends, I experiment with glossy micro-interactions, generative algorithms, and student community mentorship.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200/60 dark:border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3B5BFF]/10 dark:bg-[#3B5BFF]/20 flex items-center justify-center text-[#3B5BFF] dark:text-[#4FD6D0]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#14172B] dark:text-white">B.Sc. in Computer Science</h4>
                  <p className="text-[11px] text-[#5C6280] dark:text-[#959EB9]">Expected Graduation: 2027</p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B5BFF] dark:text-[#4FD6D0] hover:underline"
              >
                <span>Request Full Academic Transcript</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Highlights & Values Card (Sage-glass themed) */}
          <div className="lg:col-span-5 bg-sage-glass p-8 sm:p-10 rounded-[20px] shadow-lg shadow-[#202343]/05 border border-white/80 dark:border-white/10 flex flex-col justify-between text-[#14172B] dark:text-white">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#14172B] dark:text-[#DDE8D6]">
                <Award className="w-4 h-4" />
                <span>Core Distinctions</span>
              </div>

              <h3 className="font-display text-2xl font-bold">
                Standards I bring to every team
              </h3>

              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3B5BFF] dark:text-[#4FD6D0] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium leading-relaxed opacity-90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/15">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span>Looking for: Summer 2026 / Fall 2026 Internships</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
