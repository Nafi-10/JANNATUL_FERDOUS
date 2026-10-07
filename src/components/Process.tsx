import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-white/[0.02]">
      {/* Ambient Orb */}
      <div
        className="ambient-orb w-[420px] h-[420px] top-1/2 -right-24 bg-[#4FD6D0]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04. Design &amp; Engineering Process</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14172B] dark:text-white">
            A methodical rhythm from hypothesis to production code.
          </h2>
          <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
            Every project follows a disciplined loop of research inquiry, structural mapping, tactile aesthetic iteration, and usability testing.
          </p>
        </div>

        {/* 4-Step Process Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="glossy-card p-7 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Step Number & Connector indicator */}
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-aurora">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-[#5C6280] dark:text-[#959EB9] uppercase">
                    PHASE 0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-lg font-bold text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Focus Points List */}
              <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-white/10 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#14172B] dark:text-white block mb-1">
                  Key Artifacts:
                </span>
                {step.focus.map((item, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-[#5C6280] dark:text-[#959EB9]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3B5BFF] dark:bg-[#4FD6D0] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Progress Bar Segment on Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3B5BFF]/30 to-transparent group-hover:via-[#3B5BFF] transition-all" />
            </div>
          ))}

        </div>

        {/* Process Guarantee Quote Card */}
        <div className="mt-12 p-6 sm:p-8 glossy-panel flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/80 dark:border-white/15">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3B5BFF] to-[#4FD6D0] p-[2px] shrink-0 shadow-md">
              <div className="w-full h-full bg-white dark:bg-[#0B0E1B] rounded-[14px] flex items-center justify-center font-bold text-[#3B5BFF] dark:text-[#4FD6D0]">
                JF
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#14172B] dark:text-white">
                &ldquo;Rigorous research prevents premature optimization. Beautiful design without clean code is only halfway done.&rdquo;
              </p>
              <p className="text-xs text-[#5C6280] dark:text-[#959EB9]">
                — Jannatul Ferdous, Design Philosophy
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="glossy-btn-secondary px-5 py-2.5 text-xs font-semibold whitespace-nowrap shrink-0"
          >
            Start A Collaboration
          </a>
        </div>

      </div>
    </section>
  );
};
