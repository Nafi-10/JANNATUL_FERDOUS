import React from 'react';
import { Calendar, MapPin, Heart, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface DetailCard {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  primaryValue: string;
  secondaryValue: string;
  stats: { label: string; value: string }[];
  icon: React.ReactNode;
}

export const PersonalDetails: React.FC = () => {
  const cards: DetailCard[] = [
    {
      id: 'dob',
      title: 'Date of Birth',
      subtitle: '21 November 2005',
      primaryValue: '21 November 2005',
      secondaryValue: 'Scorpio · Gen-Z Technologist',
      icon: <Calendar className="w-5 h-5 text-[#3B5BFF] dark:text-[#4FD6D0] animate-pulse-subtle" />,
      stats: [
        { label: 'Day', value: '21' },
        { label: 'Month', value: 'November' },
        { label: 'Year', value: '2005' },
      ],
    },
    {
      id: 'birthplace',
      title: 'Place of Birth',
      subtitle: 'CMH Jashore, Bangladesh',
      badge: 'Heritage & Roots',
      primaryValue: 'CMH Jashore',
      secondaryValue: 'Khulna Division, Bangladesh',
      icon: <MapPin className="w-5 h-5 text-[#3B5BFF] dark:text-[#4FD6D0] animate-bounce-subtle" />,
      stats: [
        { label: 'Facility', value: 'CMH' },
        { label: 'District', value: 'Jashore' },
        { label: 'Country', value: 'Bangladesh' },
      ],
    },
    {
      id: 'marital',
      title: 'Marital Status',
      subtitle: 'Single',
      primaryValue: 'Single',
      secondaryValue: 'Focused on Computer Science & Career',
      icon: <Heart className="w-5 h-5 text-rose-500 animate-bounce-subtle" />,
      stats: [
        { label: 'Status', value: 'Single' },
        { label: 'Academic Focus', value: '100%' },
        { label: 'Internships', value: 'Open' },
      ],
    },
  ];

  return (
    <section id="personal-details" className="py-14 lg:py-16 relative overflow-hidden">
      {/* Background Ambient Orbs */}
      <div
        className="ambient-orb w-[400px] h-[400px] top-1/2 -left-28 bg-[#3B5BFF]"
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-[400px] h-[400px] top-10 -right-28 bg-[#4FD6D0]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Centered (Pixel match to reference image "Built for Every Journey" layout) */}
        <ScrollReveal direction="up" delay={40}>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Profile Milestones</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14172B] dark:text-white">
              Detail Information About Me
            </h2>
            <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
              Essential personal background, roots, and current life phase presented in centered milestone cards.
            </p>
          </div>
        </ScrollReveal>

        {/* Three centered personal detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card, idx) => {
            return (
              <ScrollReveal key={card.id} direction="up" delay={idx * 130} className="h-full">
                <div
                  className="relative h-full rounded-3xl p-7 sm:p-8 flex flex-col justify-between bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 shadow-md transition-shadow hover:shadow-xl"
                >
                <div className="space-y-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="space-y-1">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#14172B] dark:text-white tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5C6280] dark:text-[#959EB9] font-medium">
                        {card.subtitle}
                      </p>
                    </div>

                    {card.badge && (
                      <span className="px-3 py-1 text-[11px] font-bold tracking-wide rounded-full bg-[#B7C9B0]/30 text-[#14172B] dark:text-[#DDE8D6] border border-[#B7C9B0]/40">
                        {card.badge}
                      </span>
                    )}
                  </div>

                  {/* Animated Center Box Area (Reference visual illustration area) */}
                  <div className="py-6 flex flex-col items-center justify-center">
                    <div className="relative w-full h-36 rounded-2xl bg-gradient-to-br from-[#F5F6FA] to-[#EEF0F8] dark:from-[#0B0E1B] dark:to-[#161C33] border border-slate-200/60 dark:border-white/10 p-4 flex flex-col items-center justify-center overflow-hidden shadow-inner">
                      
                      {/* Soft glow in the background */}
                      <div className="absolute w-24 h-24 rounded-full blur-2xl bg-[#3B5BFF]/20" />

                      {/* Icon Container with Glossy Ring */}
                      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1E2540] shadow-md border border-white/80 dark:border-white/15 flex items-center justify-center mb-2 z-10">
                        {card.icon}
                      </div>

                      {/* Prominent Value */}
                      <span className="font-display font-extrabold text-lg sm:text-xl text-[#14172B] dark:text-white tracking-tight z-10 text-center">
                        {card.primaryValue}
                      </span>

                      {/* Secondary description */}
                      <span className="text-[11px] text-[#5C6280] dark:text-[#959EB9] z-10 text-center font-medium">
                        {card.secondaryValue}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Spec Rows (Matches the 3-spec row in the reference image: e.g. 420km / 6.1s / RWD) */}
                <div className="space-y-5 pt-2">
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-slate-200/60 dark:border-white/10 text-center">
                    {card.stats.map((stat, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="font-mono text-xs sm:text-sm font-bold text-[#14172B] dark:text-white block">
                          {stat.value}
                        </span>
                        <span className="text-[10px] uppercase font-semibold text-[#5C6280] dark:text-[#959EB9] tracking-wider block">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Subtle Top Inner Highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          );
        })}
        </div>

      </div>

    </section>
  );
};
