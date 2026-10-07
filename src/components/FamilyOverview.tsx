import React, { useState } from 'react';
import { Users, Sparkles, Heart, Shield, Briefcase, GraduationCap, Building2, User, ChevronRight, Award, Compass } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FamilyMemberRecord {
  id: string;
  side: 'paternal' | 'maternal';
  badgeCode: string;
  name: string;
  relation: string;
  statusTag?: string;
  profession: string;
  detail: string;
  isDeceased?: boolean;
}

interface VitalMemberRecord {
  id: string;
  category: 'maternal-uncles' | 'maternal-inlaws' | 'paternal-inlaws';
  categoryLabel: string;
  badgeCode: string;
  name: string;
  relationOrSpouse: string;
  profession: string;
  detail: string;
  locationOrCompany?: string;
}

export const FamilyOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'paternal' | 'maternal'>('all');
  const [activeVitalTab, setActiveVitalTab] = useState<'all' | 'maternal-uncles' | 'maternal-inlaws' | 'paternal-inlaws'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const records: FamilyMemberRecord[] = [
    // Paternal Lineage
    {
      id: 'pgf',
      side: 'paternal',
      badgeCode: 'PGF',
      name: 'Late Mr. Musnim Uddin',
      relation: 'Paternal Grandfather',
      statusTag: 'Deceased',
      profession: 'Teacher',
      detail: 'Paternal Grandfather · Dedicated lifelong educator and beacon of ethical discipline.',
      isDeceased: true,
    },
    {
      id: 'pgm',
      side: 'paternal',
      badgeCode: 'PGM',
      name: 'Late Mrs. Subaiya Begum',
      relation: 'Paternal Grandmother',
      statusTag: 'Deceased',
      profession: 'Homemaker',
      detail: 'Paternal Grandmother · Pillar of domestic grace, generosity, and familial unity.',
      isDeceased: true,
    },
    {
      id: 'pu1',
      side: 'paternal',
      badgeCode: 'PU',
      name: 'Md. Tahier Islam',
      relation: 'Paternal Uncle',
      statusTag: 'Active',
      profession: 'Businessman',
      detail: 'Paternal Uncle · Commercial enterprise leader and business management.',
    },
    {
      id: 'pa1',
      side: 'paternal',
      badgeCode: 'PA',
      name: 'Paternal Aunt (1st)',
      relation: 'Paternal Aunt',
      statusTag: 'Private Record',
      profession: 'Not Disclosed',
      detail: 'Paternal Aunt · Extended paternal family lineage and household stewardship.',
    },
    {
      id: 'pa2',
      side: 'paternal',
      badgeCode: 'PA',
      name: 'Paternal Aunt (2nd)',
      relation: 'Paternal Aunt',
      statusTag: 'Private Record',
      profession: 'Not Disclosed',
      detail: 'Paternal Aunt · Extended paternal family lineage and household stewardship.',
    },
    {
      id: 'pa3',
      side: 'paternal',
      badgeCode: 'PA',
      name: 'Paternal Aunt (3rd)',
      relation: 'Paternal Aunt',
      statusTag: 'Private Record',
      profession: 'Not Disclosed',
      detail: 'Paternal Aunt · Extended paternal family lineage and household stewardship.',
    },
    {
      id: 'pa4',
      side: 'paternal',
      badgeCode: 'PA',
      name: 'Paternal Aunt (4th)',
      relation: 'Paternal Aunt',
      statusTag: 'Private Record',
      profession: 'Not Disclosed',
      detail: 'Paternal Aunt · Extended paternal family lineage and household stewardship.',
    },

    // Maternal Lineage
    {
      id: 'mgf',
      side: 'maternal',
      badgeCode: 'MGF',
      name: 'Late Khan Solaiman Hossain',
      relation: 'Maternal Grandfather',
      statusTag: 'Deceased',
      profession: 'Businessman',
      detail: 'Maternal Grandfather · Respected business entrepreneur and community benefactor.',
      isDeceased: true,
    },
    {
      id: 'mgm',
      side: 'maternal',
      badgeCode: 'MGM',
      name: 'Late Monowara Begum',
      relation: 'Maternal Grandmother',
      statusTag: 'Deceased',
      profession: 'Homemaker',
      detail: 'Maternal Grandmother · Empathy, warm hospitality, and moral foundation.',
      isDeceased: true,
    },
    {
      id: 'mu1',
      side: 'maternal',
      badgeCode: 'MU',
      name: 'Ibrahim Khan',
      relation: 'Maternal Uncle',
      statusTag: 'Active',
      profession: 'Businessman',
      detail: 'Maternal Uncle · Commerce, corporate partnerships, and entrepreneurship.',
    },
    {
      id: 'mu2',
      side: 'maternal',
      badgeCode: 'MU',
      name: 'Imtiaz Khan',
      relation: 'Maternal Uncle',
      statusTag: 'Active',
      profession: 'Businessman',
      detail: 'Maternal Uncle · Commercial enterprise, trade development, and management.',
    },
    {
      id: 'ma1',
      side: 'maternal',
      badgeCode: 'MA',
      name: 'Anoara Akhter',
      relation: 'Maternal Aunt',
      statusTag: 'Active',
      profession: 'Maternal Aunt',
      detail: 'Maternal Aunt · Family support, cultural traditions, and guidance.',
    },
    {
      id: 'ma2',
      side: 'maternal',
      badgeCode: 'MA',
      name: 'Reijina Afrin',
      relation: 'Maternal Aunt',
      statusTag: 'Active',
      profession: 'Maternal Aunt',
      detail: 'Maternal Aunt · Compassionate counseling and extended family care.',
    },
    {
      id: 'ma3',
      side: 'maternal',
      badgeCode: 'MA',
      name: 'Gulshan Ara Happy',
      relation: 'Maternal Aunt',
      statusTag: 'Active',
      profession: 'Maternal Aunt',
      detail: 'Maternal Aunt · Warmth, celebration of family milestones, and encouragement.',
    },
  ];

  // Vital Members of Family
  const vitalMembers: VitalMemberRecord[] = [
    // Maternal Uncles
    {
      id: 'vital-mu-1',
      category: 'maternal-uncles',
      categoryLabel: 'Maternal Uncle',
      badgeCode: 'MU',
      name: 'Harun-ar-Rashid',
      relationOrSpouse: 'Maternal Uncle',
      profession: 'Businessman',
      detail: 'Respected maternal uncle engaged in commercial enterprises and business development.',
      locationOrCompany: 'Business Enterprise',
    },
    {
      id: 'vital-mu-2',
      category: 'maternal-uncles',
      categoryLabel: 'Maternal Uncle',
      badgeCode: 'MU',
      name: 'Masud Khan',
      relationOrSpouse: 'Maternal Uncle',
      profession: 'Resides in the USA',
      detail: 'Maternal uncle residing in the United States, fostering international family linkages.',
      locationOrCompany: 'United States of America',
    },

    // Maternal Aunt's Husbands
    {
      id: 'vital-mah-1',
      category: 'maternal-inlaws',
      categoryLabel: "Maternal Aunt's Husband",
      badgeCode: 'MAH',
      name: 'Nurul Sheikh',
      relationOrSpouse: 'Husband of Reijina Afrin (Maternal Aunt)',
      profession: 'Retired Navy Officer',
      detail: 'Distinguished naval career with honor and strategic leadership in the Bangladesh Navy.',
      locationOrCompany: 'Bangladesh Navy (Retd.)',
    },
    {
      id: 'vital-mah-2',
      category: 'maternal-inlaws',
      categoryLabel: "Maternal Aunt's Husband",
      badgeCode: 'MAH',
      name: 'Md. Masum Billah',
      relationOrSpouse: 'Husband of Gulshan Ara Happy (Maternal Aunt)',
      profession: 'Advocate, Supreme Court of Bangladesh',
      detail: 'Practicing senior advocate at the Supreme Court of Bangladesh with constitutional and civil expertise.',
      locationOrCompany: 'Supreme Court of Bangladesh',
    },
    {
      id: 'vital-mah-3',
      category: 'maternal-inlaws',
      categoryLabel: "Maternal Aunt's Husband",
      badgeCode: 'MAH',
      name: 'Syed Titu',
      relationOrSpouse: 'Husband of Anoara Akhter (Maternal Aunt)',
      profession: 'Resides in Oman',
      detail: 'Residing in the Sultanate of Oman with distinguished expatriate professional engagements.',
      locationOrCompany: 'Sultanate of Oman',
    },

    // Paternal Aunt's Husbands
    {
      id: 'vital-pah-1',
      category: 'paternal-inlaws',
      categoryLabel: "Paternal Aunt's Husband",
      badgeCode: 'PAH',
      name: 'Abdul Kuddus',
      relationOrSpouse: "Paternal Aunt's Husband",
      profession: 'Architect',
      detail: 'Professional architect practicing in the Kingdom of Bahrain, designing architectural infrastructures.',
      locationOrCompany: 'Kingdom of Bahrain',
    },
    {
      id: 'vital-pah-2',
      category: 'paternal-inlaws',
      categoryLabel: "Paternal Aunt's Husband",
      badgeCode: 'PAH',
      name: 'Md. Billal Hossain Sorkar',
      relationOrSpouse: "Paternal Aunt's Husband",
      profession: 'Professional & Business Executive',
      detail: 'Senior executive and community figure contributing to business administration and social harmony.',
      locationOrCompany: 'Bangladesh',
    },
    {
      id: 'vital-pah-3',
      category: 'paternal-inlaws',
      categoryLabel: "Paternal Aunt's Husband",
      badgeCode: 'PAH',
      name: 'Mokhlesur Rahman',
      relationOrSpouse: "Paternal Aunt's Husband",
      profession: 'Corporate Executive, Orion Group',
      detail: 'Senior managerial and executive career within leading conglomerate Orion Group.',
      locationOrCompany: 'Orion Group',
    },
  ];

  const filteredRecords = records.filter((r) => {
    const matchesTab = activeTab === 'all' || r.side === activeTab;
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.relation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.profession.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const filteredVitalMembers = vitalMembers.filter((v) => {
    if (activeVitalTab === 'all') return true;
    return v.category === activeVitalTab;
  });

  return (
    <section id="family-overview" className="py-14 lg:py-16 relative overflow-hidden bg-transparent">
      {/* Background Ambient Orbs */}
      <div
        className="ambient-orb w-[450px] h-[450px] top-1/4 -right-32 bg-[#3B5BFF]"
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-[420px] h-[420px] bottom-10 -left-24 bg-[#4FD6D0]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* ================= SECTION 1: DIRECT ANCESTRAL LINEAGE ================= */}
        <div>
          {/* Section Header */}
          <ScrollReveal direction="up" delay={40}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
                  <Users className="w-3.5 h-3.5" />
                  <span>Ancestral Heritage &amp; Lineage</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14172B] dark:text-white">
                  Overall Family Member Overview
                </h2>
                <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
                  Comprehensive overview of paternal and maternal heritage, honoring extended family roots across generations.
                </p>
              </div>

              {/* Interactive Lineage Filter Segmented Tabs */}
              <div className="flex w-full max-w-full flex-wrap items-center gap-1.5 p-1.5 glossy-panel rounded-2xl border border-white/80 dark:border-white/10 self-start md:w-auto md:self-auto">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                    activeTab === 'all'
                      ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-md shadow-[#3B5BFF]/30'
                      : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                  }`}
                >
                  All Lineage ({records.length})
                </button>
                <button
                  onClick={() => setActiveTab('paternal')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                    activeTab === 'paternal'
                      ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-md shadow-[#3B5BFF]/30'
                      : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                  }`}
                >
                  Paternal Side (7)
                </button>
                <button
                  onClick={() => setActiveTab('maternal')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                    activeTab === 'maternal'
                      ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-md shadow-[#3B5BFF]/30'
                      : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                  }`}
                >
                  Maternal Side (7)
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Sleek Horizontal Strip Cards */}
          <div className="space-y-4">
            {filteredRecords.map((member, idx) => (
              <ScrollReveal key={member.id} direction="up" delay={Math.min(idx * 60, 300)}>
                <div
                  className="p-5 sm:py-5 sm:px-7 rounded-2xl glossy-panel border border-white/80 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-[#3B5BFF]/60 dark:hover:border-[#4FD6D0]/50 hover:shadow-lg transition-all duration-300"
                >
                {/* Left Group: Acronym Badge + Title + Subtitle */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B5BFF]/10 to-[#4FD6D0]/10 dark:from-[#3B5BFF]/20 dark:to-[#4FD6D0]/20 border border-[#3B5BFF]/30 dark:border-[#4FD6D0]/30 flex items-center justify-center font-display font-bold text-xs tracking-wider text-[#3B5BFF] dark:text-[#4FD6D0] shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                    {member.badgeCode}
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-display text-sm sm:text-base font-bold text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors">
                        {member.name}
                      </h4>
                      <span className="text-xs text-[#3B5BFF] dark:text-[#4FD6D0] font-semibold">
                        · {member.relation}
                        {member.statusTag && member.statusTag !== 'Active' && member.statusTag !== 'Deceased'
                          ? ` (${member.statusTag})`
                          : ''}
                      </span>
                    </div>

                    <p className="text-xs text-[#5C6280] dark:text-[#959EB9] leading-snug">
                      {member.detail}
                    </p>
                  </div>
                </div>

                {/* Right Group: Profession & Side indicator */}
                <div className="sm:text-right shrink-0 pl-16 sm:pl-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200/50 dark:border-white/10">
                  <span className="text-xs sm:text-sm font-semibold text-[#14172B] dark:text-white block">
                    {member.profession}
                  </span>
                  <p className="text-[11px] text-[#5C6280] dark:text-[#959EB9]">
                    {member.side === 'paternal' ? 'Paternal Lineage' : 'Maternal Lineage'}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          </div>
        </div>

        {/* ================= SECTION 2: SUBSECTION - VITAL MEMBERS OF FAMILY ================= */}
        <div className="pt-8">
          
          {/* Subsection Header */}
          <ScrollReveal direction="up" delay={40}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
                  <Award className="w-3.5 h-3.5" />
                  <span>Extended Distinctions &amp; In-Laws</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#14172B] dark:text-white">
                  Vital Member of Family
                </h3>
                <p className="text-sm text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
                  Esteemed uncles and uncles-in-law serving in defense, legal jurisprudence, corporate leadership, architecture, and international commerce.
                </p>
              </div>

              {/* Filter Tabs for Vital Members */}
              <div className="flex w-full max-w-full flex-wrap items-center gap-1.5 p-1.5 glossy-panel rounded-2xl border border-white/80 dark:border-white/10 self-start md:w-auto md:self-auto">
                <button
                  onClick={() => setActiveVitalTab('all')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                    activeVitalTab === 'all'
                      ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-md shadow-[#3B5BFF]/30'
                      : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                  }`}
                >
                  All Vital Members ({vitalMembers.length})
                </button>
                <button
                  onClick={() => setActiveVitalTab('maternal-uncles')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                    activeVitalTab === 'maternal-uncles'
                      ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-md shadow-[#3B5BFF]/30'
                      : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                  }`}
                >
                  Maternal Uncles (2)
                </button>
                <button
                  onClick={() => setActiveVitalTab('maternal-inlaws')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                    activeVitalTab === 'maternal-inlaws'
                      ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-md shadow-[#3B5BFF]/30'
                      : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                  }`}
                >
                  Maternal Aunts&apos; Husbands (3)
                </button>
                <button
                  onClick={() => setActiveVitalTab('paternal-inlaws')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                    activeVitalTab === 'paternal-inlaws'
                      ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-md shadow-[#3B5BFF]/30'
                      : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                  }`}
                >
                  Paternal Aunts&apos; Husbands (3)
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Sleek Horizontal Strip Cards for Vital Members */}
          <div className="space-y-4">
            {filteredVitalMembers.map((vital, idx) => (
              <ScrollReveal key={vital.id} direction="up" delay={Math.min(idx * 60, 300)}>
                <div
                  className="p-5 sm:py-5 sm:px-7 rounded-2xl glossy-panel border border-white/80 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-[#3B5BFF]/60 dark:hover:border-[#4FD6D0]/50 hover:shadow-lg transition-all duration-300"
                >
                  {/* Left Group: Acronym Badge + Title + Subtitle */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B5BFF]/15 to-[#7A5CFF]/15 dark:from-[#3B5BFF]/25 dark:to-[#7A5CFF]/25 border border-[#3B5BFF]/30 dark:border-[#4FD6D0]/30 flex items-center justify-center font-display font-bold text-xs tracking-wider text-[#3B5BFF] dark:text-[#4FD6D0] shrink-0 group-hover:scale-105 transition-transform shadow-sm">
                      {vital.badgeCode}
                    </div>

                    <div className="space-y-0.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-display text-sm sm:text-base font-bold text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors">
                          {vital.name}
                        </h4>
                        <span className="text-xs text-[#3B5BFF] dark:text-[#4FD6D0] font-semibold">
                          · {vital.relationOrSpouse}
                        </span>
                      </div>

                      <p className="text-xs text-[#5C6280] dark:text-[#959EB9] leading-snug">
                        {vital.detail}
                      </p>
                    </div>
                  </div>

                  {/* Right Group: Profession / Designation & Affiliation */}
                  <div className="sm:text-right shrink-0 pl-16 sm:pl-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200/50 dark:border-white/10">
                    <span className="text-xs sm:text-sm font-semibold text-[#14172B] dark:text-white block">
                      {vital.profession}
                    </span>
                    {vital.locationOrCompany && (
                      <p className="text-[11px] text-[#5C6280] dark:text-[#959EB9]">
                        {vital.locationOrCompany}
                      </p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
