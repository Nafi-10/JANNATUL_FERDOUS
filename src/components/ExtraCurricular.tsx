import React, { useState } from 'react';
import { Compass, Car, HeartPulse, Laptop, Music, Sparkles, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ActivityItem {
  id: string;
  shortCode: string;
  title: string;
  subtitle: string;
  institution: string;
  category: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
}

export const ExtraCurricular: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<string>('rcrc');

  const activities: ActivityItem[] = [
    {
      id: 'driving',
      shortCode: 'DRIVE',
      title: 'Driving Course',
      subtitle: 'Defensive Driving & Vehicular Navigation',
      institution: 'Jahanabad Military Driving School',
      category: 'Practical Life Skills',
      description: 'Comprehensive automotive driving course adhering to rigorous military school standards, focusing on road discipline, defensive maneuvering, and vehicle maintenance.',
      skills: ['Defensive Driving', 'Traffic Regulations', 'Emergency Handling', 'Road Safety'],
      icon: <Car className="w-5 h-5 text-[#3B5BFF] dark:text-[#4FD6D0] animate-float-gentle" />,
    },
    {
      id: 'rcrc',
      shortCode: 'RCRC',
      title: 'RCRC Basic & First Aid',
      subtitle: 'Emergency Medical & Humanitarian Response',
      institution: 'Bangladesh Red Crescent Society (BDRCS)',
      category: 'Humanitarian & First Aid',
      description: 'Certified first responder training covering triage protocols, CPR, wound dressing, trauma management, and humanitarian relief principles.',
      skills: ['Emergency First Aid', 'CPR Certification', 'Disaster Relief', 'Humanitarian Service'],
      icon: <HeartPulse className="w-5 h-5 text-rose-500 animate-pulse-subtle" />,
    },
    {
      id: 'computer',
      shortCode: 'TECH',
      title: 'Computer Training',
      subtitle: 'Technical Certification & IT Applications',
      institution: 'Bangladesh Technical Education Board, Dhaka',
      category: 'Technical Certification',
      description: 'Government certified vocational computing program administered by BTEB Dhaka, strengthening core software toolsets, documentation systems, and digital literacy.',
      skills: ['Operating Systems', 'Office Suites', 'BTEB Certified', 'Digital Workflows'],
      icon: <Laptop className="w-5 h-5 text-[#3B5BFF] dark:text-[#4FD6D0] animate-bounce-subtle" />,
    },
    {
      id: 'singing',
      shortCode: 'MUSIC',
      title: 'Singing (Robindro Shongit)',
      subtitle: 'Classical Vocal Arts & Cultural Heritage',
      institution: 'Rabindra Sangeet Vocal Studies',
      category: 'Cultural & Performing Arts',
      description: 'Disciplined classical vocal training in Robindro Shongit (Rabindra Sangeet), cultivating tonal nuance, lyrical emotion, breathing control, and artistic discipline.',
      skills: ['Classical Vocalism', 'Tagore Literature', 'Melodic Ragas', 'Stage Performance'],
      icon: <Music className="w-5 h-5 text-[#7A5CFF] animate-spin-slow" />,
    },
  ];

  return (
    <section id="extra-curricular" className="py-14 lg:py-16 relative overflow-hidden">
      {/* Background Ambient Orbs */}
      <div
        className="ambient-orb w-[420px] h-[420px] top-1/3 -left-28 bg-[#7A5CFF]"
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-[420px] h-[420px] bottom-10 -right-24 bg-[#4FD6D0]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered in the middle as requested) */}
        <ScrollReveal direction="up" delay={40}>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
              <span>Beyond The Classroom</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14172B] dark:text-white">
              Extra Curricular Activities
            </h2>
            <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
              Multi-disciplinary pursuits fostering emergency preparedness, practical mobility, certified tech foundations, and cultural expression.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Continuous Horizontal Boxes (Implementing the 4-box layout concept from your reference) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {activities.map((act, index) => {
            const isSelected = selectedActivity === act.id;

            return (
              <ScrollReveal key={act.id} direction="up" delay={index * 100} className="h-full">
                <div
                  onClick={() => setSelectedActivity(act.id)}
                  className={`relative h-full rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? 'bg-white dark:bg-[#12172A] border-2 border-[#3B5BFF] dark:border-[#4FD6D0] shadow-2xl shadow-[#3B5BFF]/15 dark:shadow-[#4FD6D0]/10 scale-[1.02]'
                      : 'bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-md hover:shadow-xl'
                  }`}
                >
                {/* Header row: Index & Category */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#5C6280] dark:text-[#959EB9]">
                      0{index + 1} · {act.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {act.icon}
                    </div>
                  </div>

                  {/* Prominent Visual Acronym Box (Matches the 4-box wireframe headline cards) */}
                  <div className="py-4 text-center border-b border-slate-200/60 dark:border-white/10">
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors">
                      {act.shortCode}
                    </h3>
                    <p className="text-xs font-bold text-[#14172B] dark:text-white mt-1">
                      {act.title}
                    </p>
                  </div>

                  {/* Institution Details */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-center space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#5C6280] dark:text-[#959EB9] block">
                      Institution / Authority
                    </span>
                    <p className="text-xs font-bold text-[#3B5BFF] dark:text-[#4FD6D0] leading-snug">
                      {act.institution}
                    </p>
                  </div>
                </div>

                {/* Subtitle / Focus */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#5C6280] dark:text-[#959EB9] truncate max-w-[160px]">
                    {act.subtitle}
                  </span>
                  {isSelected ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3B5BFF] dark:text-[#4FD6D0]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Active</span>
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold text-[#5C6280] dark:text-[#959EB9] group-hover:text-[#14172B] dark:group-hover:text-white">
                      Explore &rarr;
                    </span>
                  )}
                </div>

                {/* Subtle Top Inner Highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Selected Activity Deep-Dive Banner */}
      <ScrollReveal direction="up" delay={150}>
        <div className="mt-10 p-6 sm:p-8 rounded-2xl glossy-panel border border-white/80 dark:border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#3B5BFF] dark:text-[#4FD6D0]">
              <ShieldCheck className="w-4 h-4" />
              <span>{activities.find((a) => a.id === selectedActivity)?.institution}</span>
            </div>
            <h4 className="font-display text-xl font-bold text-[#14172B] dark:text-white">
              {activities.find((a) => a.id === selectedActivity)?.title} — {activities.find((a) => a.id === selectedActivity)?.subtitle}
            </h4>
            <p className="text-xs sm:text-sm text-[#5C6280] dark:text-[#A0A7C2] leading-relaxed">
              {activities.find((a) => a.id === selectedActivity)?.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            {activities.find((a) => a.id === selectedActivity)?.skills.map((skill, sIdx) => (
              <span
                key={sIdx}
                className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/10 text-[#14172B] dark:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      </div>
    </section>
  );
};
