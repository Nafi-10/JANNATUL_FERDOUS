import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, Building2, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface EducationItem {
  id: string;
  exam: string;
  fullName: string;
  year: string;
  gpa: string;
  gpaLabel?: string;
  institution: string;
  location: string;
  status: 'completed' | 'exempted' | 'ongoing';
  statusText: string;
  highlightText: string;
}

export const Education: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<string>('hsc');

  const educationList: EducationItem[] = [
    {
      id: 'psc',
      exam: 'PSC',
      fullName: 'Primary School Certificate',
      year: '2018',
      gpa: '5.00',
      gpaLabel: 'GPA (Out of 5.00)',
      institution: 'BAF Shaheen School',
      location: 'Jashore, Bangladesh',
      status: 'completed',
      statusText: 'Graduated with Distinction',
      highlightText: 'Secured full GPA 5.00 with academic excellence across all core subjects.',
    },
    {
      id: 'jsc',
      exam: 'JSC',
      fullName: 'Junior School Certificate',
      year: '2021',
      gpa: 'N/A',
      gpaLabel: 'Board Evaluation Wave',
      institution: 'Khulna Collegiate Girls\' School',
      location: 'Khulna, Bangladesh',
      status: 'exempted',
      statusText: 'No Board Exam Held',
      highlightText: 'Nationwide institutional assessment without formal board examination due to government COVID-19 pandemic policy.',
    },
    {
      id: 'ssc',
      exam: 'SSC',
      fullName: 'Secondary School Certificate',
      year: '2024',
      gpa: '4.94',
      gpaLabel: 'GPA (Out of 5.00)',
      institution: 'Khulna Collegiate Girls\' School',
      location: 'Khulna, Bangladesh',
      status: 'completed',
      statusText: 'Graduated with High Honors',
      highlightText: 'Exceptional GPA of 4.94 in Science group with strong performance in Mathematics and Sciences.',
    },
    {
      id: 'hsc',
      exam: 'HSC',
      fullName: 'Higher Secondary Certificate',
      year: '2026',
      gpa: 'Pending',
      gpaLabel: 'Candidate · Batch 2026',
      institution: 'Khulna Government College',
      location: 'Khulna, Bangladesh',
      status: 'ongoing',
      statusText: 'Result Not Published',
      highlightText: 'Currently preparing and appearing for Higher Secondary examinations in Science faculty.',
    },
  ];

  return (
    <section id="education" className="py-14 lg:py-16 relative overflow-hidden bg-transparent">
      {/* Background Ambient Orbs */}
      <div
        className="ambient-orb w-[420px] h-[420px] top-1/4 -right-24 bg-[#3B5BFF]"
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-[400px] h-[400px] bottom-10 -left-20 bg-[#4FD6D0]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered in the middle as requested) */}
        <ScrollReveal direction="up" delay={40}>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Milestones</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14172B] dark:text-white">
              Educational Background
            </h2>
            <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
              Chronological progression of standardized board examinations and academic institutions across Jashore and Khulna.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Horizontal Boxes Layout (Faithfully implementing the PSC · JSC · SSC · HSC row from the user concept image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
          
          {educationList.map((item, index) => {
            const isSelected = selectedExam === item.id;

            return (
              <ScrollReveal key={item.id} direction="up" delay={index * 100} className="h-full">
                <div
                  onClick={() => setSelectedExam(item.id)}
                  className={`relative h-full rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? 'bg-white dark:bg-[#12172A] border-2 border-[#3B5BFF] dark:border-[#4FD6D0] shadow-2xl shadow-[#3B5BFF]/15 dark:shadow-[#4FD6D0]/10 scale-[1.02]'
                      : 'bg-white/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-md hover:shadow-xl'
                  }`}
                >
                {/* Header: Timeline Step & Year */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#5C6280] dark:text-[#959EB9]">
                      0{index + 1} · {item.year}
                    </span>
                    {item.status === 'completed' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Completed</span>
                      </span>
                    )}
                    {item.status === 'exempted' && (
                      <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">
                        COVID Wave
                      </span>
                    )}
                    {item.status === 'ongoing' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3B5BFF] dark:text-[#4FD6D0]">
                        <Clock className="w-3 h-3 animate-spin-slow" />
                        <span>Ongoing</span>
                      </span>
                    )}
                  </div>

                  {/* Prominent Exam Title Box (Matches PSC, JSC, SSC, HSC big title in reference image) */}
                  <div className="pt-2 pb-4 text-center border-b border-slate-200/60 dark:border-white/10">
                    <h3 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors">
                      {item.exam}
                    </h3>
                    <p className="text-xs text-[#5C6280] dark:text-[#959EB9] font-medium mt-1">
                      {item.fullName}
                    </p>
                  </div>

                  {/* Result / GPA Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-center space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#5C6280] dark:text-[#959EB9] block">
                      {item.gpaLabel}
                    </span>
                    <span className={`font-mono text-2xl font-extrabold block ${
                      item.status === 'completed'
                        ? 'text-[#3B5BFF] dark:text-[#4FD6D0]'
                        : item.status === 'ongoing'
                        ? 'text-amber-500'
                        : 'text-[#5C6280] dark:text-[#959EB9]'
                    }`}>
                      {item.gpa}
                    </span>
                    <span className="text-[11px] font-semibold text-[#14172B] dark:text-white block">
                      {item.statusText}
                    </span>
                  </div>
                </div>

                {/* Institution & Location details */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10 space-y-2.5">
                  <div className="flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-[#3B5BFF] dark:text-[#4FD6D0] shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-[#14172B] dark:text-white leading-snug">
                      {item.institution}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5C6280] dark:text-[#959EB9] pl-6">
                    {item.location}
                  </p>
                </div>

                {/* Subtle Top Inner Highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent pointer-events-none" />
              </div>
            </ScrollReveal>
          );
        })}

      </div>

      {/* Selected Exam Highlight Banner */}
      <ScrollReveal direction="up" delay={150}>
        <div className="mt-10 p-6 sm:p-7 rounded-2xl glossy-panel border border-white/80 dark:border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3B5BFF] to-[#4FD6D0] p-[2px] shadow-md shrink-0">
              <div className="w-full h-full bg-white dark:bg-[#0B0E1B] rounded-[10px] flex items-center justify-center font-display font-extrabold text-sm text-[#3B5BFF] dark:text-[#4FD6D0]">
                {educationList.find((e) => e.id === selectedExam)?.exam}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-[#14172B] dark:text-white">
                  {educationList.find((e) => e.id === selectedExam)?.fullName} ({educationList.find((e) => e.id === selectedExam)?.year})
                </h4>
                <span className="text-xs text-[#3B5BFF] dark:text-[#4FD6D0] font-semibold">
                  · {educationList.find((e) => e.id === selectedExam)?.statusText}
                </span>
              </div>
              <p className="text-xs text-[#5C6280] dark:text-[#959EB9] mt-0.5">
                {educationList.find((e) => e.id === selectedExam)?.highlightText}
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs font-semibold text-[#14172B] dark:text-white">
              {educationList.find((e) => e.id === selectedExam)?.institution}
            </span>
            <p className="text-[11px] text-[#5C6280] dark:text-[#959EB9]">
              {educationList.find((e) => e.id === selectedExam)?.location}
            </p>
          </div>
        </div>
      </ScrollReveal>

      </div>
    </section>
  );
};
