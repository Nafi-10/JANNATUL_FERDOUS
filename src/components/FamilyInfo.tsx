import React, { useState } from 'react';
import { Users, Heart, Sparkles, Quote, Shield, Compass, BookOpen } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import fatherImage from '../assets/images/father.png';
import motherImage from '../assets/images/mother.png';
import brotherImage from '../assets/images/brother.png';

interface FamilyMember {
  id: string;
  relation: string;
  name: string;
  subtitle: string;
  profession: string;
  image: string;
  description: string;
  highlights: string[];
  quote: string;
  icon: React.ReactNode;
  links?: { label: string; href: string }[];
  interests?: string[];
}

export const FamilyInfo: React.FC = () => {
  const [activeQuoteId, setActiveQuoteId] = useState<string | null>(null);

  const familyMembers: FamilyMember[] = [
    {
      id: 'father',
      relation: 'Father',
      name: 'Md Kazi Saiful Islam',
      subtitle: 'Warrant Officer · Bangladesh Air Force',
      profession: 'Former Warrant Officer, Bangladesh Air Force',
      image: fatherImage,
      description:
        'A proud Bangladesh Air Force Warrant Officer and Notre Dame College (NDC), Dhaka alumnus. Remembered as punctual, disciplined, and well-mannered, he passed away on 23 August 2026. His example of service and integrity remains a lasting inspiration to his family.',
      highlights: [
        'Served as a Warrant Officer in the Bangladesh Air Force',
        'Educated at Notre Dame College (NDC), Dhaka',
        'Remembered for punctuality, discipline, and good manners',
      ],
      quote:
        '“His discipline, kindness, and dedication to service continue to guide his family.”',
      icon: <Shield className="w-5 h-5 text-[#3B5BFF] dark:text-[#4FD6D0] animate-pulse-subtle" />,
    },
    {
      id: 'mother',
      relation: 'Mother',
      name: 'Jahanara Islam',
      subtitle: 'Care, Strength & Devotion to Family',
      profession: 'Homemaker',
      image: motherImage,
      description:
        'A devoted and responsible homemaker, Jahanara Islam brings care, patience, and steady strength to her family. Through the thoughtful work of managing a home and supporting those she loves, she creates a welcoming environment where everyone can feel encouraged, cared for, and at home.',
      highlights: [
        'Creates a caring, welcoming, and supportive home',
        'Demonstrates patience, responsibility, and resilience in daily life',
        'Encourages kindness, respect, and close family bonds',
      ],
      quote:
        '“Her steady care and unconditional support are a source of strength for our family.”',
      icon: <Heart className="w-5 h-5 text-rose-500 animate-bounce-subtle" />,
    },
    {
      id: 'brother',
      relation: 'Brother',
      name: 'Md Kazi Jawadul Islam',
      subtitle: 'Computing & Information Systems · Artificial Intelligence',
      profession: 'B.Sc. in Computing and Information System, Daffodil International University.',
      image: brotherImage,
      description: 'Major in Artificial Intelligence',
      highlights: ['Business Analyst, Akand Engineering ·'],
      interests: ['IoT with AI', 'Critical Problem Solving', 'Playing Football'],
      quote:
        "“Love yourself, Be yourself. No one's gonna pay your bill's ( Peace)”",
      icon: <Compass className="w-5 h-5 text-[#3B5BFF] dark:text-[#4FD6D0] animate-spin-slow" />,
      links: [
        { label: 'Facebook', href: 'https://www.facebook.com/jawadul.islam.14490/' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kazi-jawadul-islam' },
        { label: 'Portfolio', href: 'https://kazi-jawad.netlify.app/' },
      ],
    },
  ];

  return (
    <section id="family-info" className="py-14 lg:py-16 relative overflow-hidden">
      {/* Background Ambient Orbs */}
      <div
        className="ambient-orb w-[450px] h-[450px] top-1/3 -left-32 bg-[#7A5CFF]"
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-[420px] h-[420px] bottom-1/4 -right-28 bg-[#4FD6D0]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered in the middle as requested) */}
        <ScrollReveal direction="up" delay={40}>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
              <Users className="w-3.5 h-3.5 text-[#3B5BFF] dark:text-[#4FD6D0] animate-bounce-subtle" />
              <span>Support System &amp; Roots</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14172B] dark:text-white">
              Family Information
            </h2>
            <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
              The foundation of values, encouragement, and inspiration behind every step of my academic and design voyage.
            </p>
          </div>
        </ScrollReveal>

        {/* Alternating Asymmetric Layout (Faithfully implementing the provided reference diagram) */}
        <div className="space-y-12 lg:space-y-14">
          
          {/* ROW 1: Father Information (Left) + Image (Right) */}
          <ScrollReveal direction="up" delay={60}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Father Info Card (Wider: col-span-7) */}
              <div className="lg:col-span-7 glossy-panel p-7 sm:p-9 flex flex-col justify-between group hover:border-[#3B5BFF]/40 transition-all duration-300 relative overflow-hidden">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#3B5BFF]/10 dark:bg-[#3B5BFF]/20 flex items-center justify-center">
                        {familyMembers[0].icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] block">
                          {familyMembers[0].relation}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#14172B] dark:text-white">
                          {familyMembers[0].name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-[#3B5BFF] dark:text-[#4FD6D0]">
                      {familyMembers[0].profession}
                    </p>
                    <p className="text-xs sm:text-sm text-[#5C6280] dark:text-[#A0A7C2] leading-relaxed">
                      {familyMembers[0].description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#14172B] dark:text-white block mb-1">
                      Key Influences &amp; Values:
                    </span>
                    {familyMembers[0].highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#5C6280] dark:text-[#959EB9]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3B5BFF] dark:bg-[#4FD6D0] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-start gap-2.5 text-xs italic text-[#5C6280] dark:text-[#959EB9]">
                  <Quote className="w-4 h-4 text-[#3B5BFF] shrink-0 mt-0.5" />
                  <span>{familyMembers[0].quote}</span>
                </div>
              </div>

              {/* Father Image Card (Right: col-span-5) */}
              <div className="lg:col-span-5 glossy-card overflow-hidden relative min-h-[300px] sm:min-h-[340px] group border border-white/80 dark:border-white/10">
                <img
                  src={familyMembers[0].image}
                  alt="Father Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#4FD6D0] block mb-0.5">
                    FAMILY PILLAR
                  </span>
                  <p className="font-display text-lg font-bold">
                    {familyMembers[0].name}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ROW 2: Image (Left) + Mother Information (Right) - Inverted as shown in diagram */}
          <ScrollReveal direction="up" delay={60}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Mother Image Card (Left: col-span-5) */}
              <div className="lg:col-span-5 glossy-card overflow-hidden relative min-h-[300px] sm:min-h-[340px] group border border-white/80 dark:border-white/10 order-2 lg:order-1">
                <img
                  src={familyMembers[1].image}
                  alt="Mother Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#4FD6D0] block mb-0.5">
                    HEART &amp; NURTURE
                  </span>
                  <p className="font-display text-lg font-bold">
                    {familyMembers[1].name}
                  </p>
                </div>
              </div>

              {/* Mother Info Card (Right: col-span-7) */}
              <div className="lg:col-span-7 glossy-panel p-7 sm:p-9 flex flex-col justify-between group hover:border-[#3B5BFF]/40 transition-all duration-300 relative overflow-hidden order-1 lg:order-2">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#3B5BFF]/10 dark:bg-[#3B5BFF]/20 flex items-center justify-center">
                        {familyMembers[1].icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] block">
                          {familyMembers[1].relation}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#14172B] dark:text-white">
                          {familyMembers[1].name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-[#3B5BFF] dark:text-[#4FD6D0]">
                      {familyMembers[1].profession}
                    </p>
                    <p className="text-xs sm:text-sm text-[#5C6280] dark:text-[#A0A7C2] leading-relaxed">
                      {familyMembers[1].description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#14172B] dark:text-white block mb-1">
                      Key Influences &amp; Values:
                    </span>
                    {familyMembers[1].highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#5C6280] dark:text-[#959EB9]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3B5BFF] dark:bg-[#4FD6D0] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-start gap-2.5 text-xs italic text-[#5C6280] dark:text-[#959EB9]">
                  <Quote className="w-4 h-4 text-[#3B5BFF] shrink-0 mt-0.5" />
                  <span>{familyMembers[1].quote}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ROW 3: Brother Information (Left) + Image (Right) */}
          <ScrollReveal direction="up" delay={60}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              {/* Brother Info Card (Wider: col-span-7) */}
              <div className="lg:col-span-7 glossy-panel p-7 sm:p-9 flex flex-col justify-between group hover:border-[#3B5BFF]/40 transition-all duration-300 relative overflow-hidden">
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#3B5BFF]/10 dark:bg-[#3B5BFF]/20 flex items-center justify-center">
                        {familyMembers[2].icon}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] block">
                          {familyMembers[2].relation}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#14172B] dark:text-white">
                          {familyMembers[2].name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-[#3B5BFF] dark:text-[#4FD6D0]">
                      {familyMembers[2].profession}
                    </p>
                    <p className="text-xs sm:text-sm text-[#5C6280] dark:text-[#A0A7C2] leading-relaxed">
                      {familyMembers[2].description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-white/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#14172B] dark:text-white block mb-1">
                      Working Experience:
                    </span>
                    {familyMembers[2].highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#5C6280] dark:text-[#959EB9]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3B5BFF] dark:bg-[#4FD6D0] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {familyMembers[2].interests && (
                    <div className="space-y-2 pt-2 border-t border-slate-200/60 dark:border-white/10">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#14172B] dark:text-white block mb-1">
                        Interests:
                      </span>
                      {familyMembers[2].interests.map((interest) => (
                        <div key={interest} className="flex items-center gap-2 text-xs text-[#5C6280] dark:text-[#959EB9]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#3B5BFF] dark:bg-[#4FD6D0] shrink-0" />
                          <span>{interest}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {familyMembers[2].links && (
                    <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1 text-xs font-semibold">
                      {familyMembers[2].links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#3B5BFF] dark:text-[#4FD6D0] hover:underline"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Quote Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-start gap-2.5 text-xs italic text-[#5C6280] dark:text-[#959EB9]">
                  <Quote className="w-4 h-4 text-[#3B5BFF] shrink-0 mt-0.5" />
                  <span>{familyMembers[2].quote}</span>
                </div>
              </div>

              {/* Brother Image Card (Right: col-span-5) */}
              <div className="lg:col-span-5 glossy-card overflow-hidden relative min-h-[300px] sm:min-h-[340px] group border border-white/80 dark:border-white/10">
                <img
                  src={familyMembers[2].image}
                  alt="Brother Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#4FD6D0] block mb-0.5">
                    BUSINESS ANALYST
                  </span>
                  <p className="font-display text-lg font-bold">
                    {familyMembers[2].name}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
