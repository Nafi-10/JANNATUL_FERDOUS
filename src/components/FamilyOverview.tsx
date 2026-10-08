import React, { useState } from 'react';
import {
  Heart,
  Shield,
  Briefcase,
  GraduationCap,
  Building2,
  Award,
  Globe,
  Scale,
  Plane,
  Compass,
  Layers,
  Search,
  X,
  ChevronRight,
  Info,
  Link as LinkIcon,
  Columns3,
  Sparkles
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export interface FamilyMemberRecord {
  id: string;
  side: 'paternal' | 'maternal';
  generation: 'grandparents' | 'siblings';
  roleType: 'grandparent' | 'uncle' | 'aunt';
  badgeCode?: string;
  name: string;
  relation: string;
  bengaliTitle: string; // Dada, Dadi, Chacha, Boro Fupu, Nana, Nanu, Mama, Khala
  profession: string;
  fieldCategory: 'education' | 'business' | 'defense' | 'law' | 'homemaker' | 'public-service';
  detail: string;
}

export interface VitalMemberRecord {
  id: string;
  category: 'maternal-uncles' | 'maternal-inlaws' | 'paternal-inlaws';
  categoryLabel: string;
  badgeCode?: string;
  name: string;
  honoraryTitle?: string; // Boro Fupa, Mejho Fupa, etc.
  relationOrSpouse: string;
  spouseName?: string;
  profession: string;
  fieldCategory: 'aviation' | 'defense' | 'law' | 'corporate' | 'business' | 'global';
  detail: string;
  locationOrCompany?: string;
}

export const FamilyOverview: React.FC = () => {
  const [activeSideTab, setActiveSideTab] = useState<'all' | 'paternal' | 'maternal'>('all');
  const [roleFilter, setRoleFilter] = useState<'all' | 'grandparent' | 'uncle' | 'aunt'>('all');
  const [viewMode, setViewMode] = useState<'comparison' | 'tree'>('tree');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVitalTab, setActiveVitalTab] = useState<'all' | 'maternal-uncles' | 'maternal-inlaws' | 'paternal-inlaws'>('all');
  const [selectedMember, setSelectedMember] = useState<FamilyMemberRecord | VitalMemberRecord | null>(null);

  // 1. Overall Direct Lineage Records (15 Members)
  const records: FamilyMemberRecord[] = [
    // Paternal Lineage - Generation I: Grandparents
    {
      id: 'pgf',
      side: 'paternal',
      generation: 'grandparents',
      roleType: 'grandparent',
      badgeCode: 'PGF',
      name: 'Late Musllim Uddin',
      relation: 'Paternal Grandfather',
      bengaliTitle: 'Dada',
      profession: 'Teacher',
      fieldCategory: 'education',
      detail: 'Paternal Grandfather · Dedicated lifelong educator, esteemed teacher, and beacon of ethical discipline.',
    },
    {
      id: 'pgm',
      side: 'paternal',
      generation: 'grandparents',
      roleType: 'grandparent',
      badgeCode: 'PGM',
      name: 'Late Suraiya Khatun',
      relation: 'Paternal Grandmother',
      bengaliTitle: 'Dadi',
      profession: 'Homemaker',
      fieldCategory: 'homemaker',
      detail: 'Paternal Grandmother · Pillar of domestic grace, generosity, and familial unity across generations.',
    },

    // Paternal Lineage - Generation II: 1 Son (Uncle) & 5 Daughters (Aunts)
    {
      id: 'pu1',
      side: 'paternal',
      generation: 'siblings',
      roleType: 'uncle',
      badgeCode: 'PU',
      name: 'Md. Tahier Islam',
      relation: 'Paternal Uncle',
      bengaliTitle: 'Chacha',
      profession: 'Businessman',
      fieldCategory: 'business',
      detail: 'Paternal Uncle · Commercial enterprise leader directing business administration and corporate trade.',
    },
    {
      id: 'pa1',
      side: 'paternal',
      generation: 'siblings',
      roleType: 'aunt',
      badgeCode: 'PA1',
      name: 'Begum Ummey Kulsum',
      relation: '1st Paternal Aunt',
      bengaliTitle: 'Boro Fupu',
      profession: 'Homemaker',
      fieldCategory: 'homemaker',
      detail: '1st Paternal Aunt · Devoted homemaker nurturing extended family unity and household stewardship.',
    },
    {
      id: 'pa2',
      side: 'paternal',
      generation: 'siblings',
      roleType: 'aunt',
      badgeCode: 'PA2',
      name: 'Begum Rokeya',
      relation: '2nd Paternal Aunt',
      bengaliTitle: 'Mejho Fupu',
      profession: 'Retired SI, BD Police',
      fieldCategory: 'defense',
      detail: '2nd Paternal Aunt · Retired Sub-Inspector (SI), Bangladesh Police, with honorable law enforcement career.',
    },
    {
      id: 'pa3',
      side: 'paternal',
      generation: 'siblings',
      roleType: 'aunt',
      badgeCode: 'PA3',
      name: 'Khosneara Begum',
      relation: '3rd Paternal Aunt',
      bengaliTitle: 'Shejho Fupu',
      profession: 'Family Planning',
      fieldCategory: 'public-service',
      detail: '3rd Paternal Aunt · Dedicated public health professional serving in Family Planning and community care.',
    },
    {
      id: 'pa4',
      side: 'paternal',
      generation: 'siblings',
      roleType: 'aunt',
      badgeCode: 'PA4',
      name: 'Morsheda Begum',
      relation: '4th Paternal Aunt',
      bengaliTitle: 'Noa Fupu',
      profession: 'Homemaker',
      fieldCategory: 'homemaker',
      detail: '4th Paternal Aunt · Devoted homemaker upholding family traditions, empathy, and warm hospitality.',
    },
    {
      id: 'pa5',
      side: 'paternal',
      generation: 'siblings',
      roleType: 'aunt',
      badgeCode: 'PA5',
      name: 'Salma Rahman',
      relation: '5th Paternal Aunt',
      bengaliTitle: 'Choto Fupu',
      profession: 'Homemaker',
      fieldCategory: 'homemaker',
      detail: '5th Paternal Aunt · Devoted homemaker fostering warmth, close kinship, and family harmony.',
    },

    // Maternal Lineage - Generation I: Grandparents
    {
      id: 'mgf',
      side: 'maternal',
      generation: 'grandparents',
      roleType: 'grandparent',
      badgeCode: 'MGF',
      name: 'Late Khan Solaiman Hossain',
      relation: 'Maternal Grandfather',
      bengaliTitle: 'Nana',
      profession: 'Businessman',
      fieldCategory: 'business',
      detail: 'Maternal Grandfather · Respected business entrepreneur, community benefactor, and moral patriarch.',
    },
    {
      id: 'mgm',
      side: 'maternal',
      generation: 'grandparents',
      roleType: 'grandparent',
      badgeCode: 'MGM',
      name: 'Late Monowara Begum',
      relation: 'Maternal Grandmother',
      bengaliTitle: 'Nanu',
      profession: 'Homemaker',
      fieldCategory: 'homemaker',
      detail: 'Maternal Grandmother · Remembered for boundless empathy, gracious hospitality, and moral foundation.',
    },

    // Maternal Lineage - Generation II: 2 Sons (Uncles) & 3 Daughters (Aunts)
    {
      id: 'mu1',
      side: 'maternal',
      generation: 'siblings',
      roleType: 'uncle',
      badgeCode: 'MU1',
      name: 'Ibrahim Khan',
      relation: 'Maternal Uncle',
      bengaliTitle: 'Boro Mama',
      profession: 'Businessman',
      fieldCategory: 'business',
      detail: 'Maternal Uncle · Commerce, corporate partnerships, and entrepreneurship.',
    },
    {
      id: 'mu2',
      side: 'maternal',
      generation: 'siblings',
      roleType: 'uncle',
      badgeCode: 'MU2',
      name: 'Imtiaz Khan',
      relation: 'Maternal Uncle',
      bengaliTitle: 'Mejho Mama',
      profession: 'Businessman',
      fieldCategory: 'business',
      detail: 'Maternal Uncle · Commercial enterprise, trade development, and management.',
    },
    {
      id: 'ma1',
      side: 'maternal',
      generation: 'siblings',
      roleType: 'aunt',
      badgeCode: 'MA1',
      name: 'Anoara Akhter',
      relation: '1st Maternal Aunt',
      bengaliTitle: 'Khala',
      profession: 'Homemaker',
      fieldCategory: 'homemaker',
      detail: '1st Maternal Aunt · Family support, cultural traditions, and guidance.',
    },
    {
      id: 'ma2',
      side: 'maternal',
      generation: 'siblings',
      roleType: 'aunt',
      badgeCode: 'MA2',
      name: 'Reijina Afrin',
      relation: '2nd Maternal Aunt',
      bengaliTitle: 'Khala',
      profession: 'Homemaker',
      fieldCategory: 'homemaker',
      detail: '2nd Maternal Aunt · Compassionate counseling and extended family care.',
    },
    {
      id: 'ma3',
      side: 'maternal',
      generation: 'siblings',
      roleType: 'aunt',
      badgeCode: 'MA3',
      name: 'Gulshan Ara Happy',
      relation: '3rd Maternal Aunt',
      bengaliTitle: 'Khala',
      profession: 'Homemaker',
      fieldCategory: 'homemaker',
      detail: '3rd Maternal Aunt · Warmth, celebration of family milestones, and encouragement.',
    },
  ];

  // 2. Vital Members of Family (Extended In-Laws & Distinctions - 10 Members)
  const vitalMembers: VitalMemberRecord[] = [
    // Paternal Aunt's Husbands (The 5 Fupas)
    {
      id: 'vital-pah-1',
      category: 'paternal-inlaws',
      categoryLabel: "Paternal Aunt's Husband",
      badgeCode: 'PAH1',
      name: 'Md. Abdul Quddus',
      honoraryTitle: 'Elder Paternal Uncle (Boro Fupa)',
      relationOrSpouse: 'Elder Paternal Uncle (Boro Fupa)',
      spouseName: 'Begum Ummey Kulsum (1st Paternal Aunt)',
      profession: 'Aeronautical Engineer, Bahrain',
      fieldCategory: 'aviation',
      detail: 'Senior aeronautical engineer practicing in the Kingdom of Bahrain.',
      locationOrCompany: 'Kingdom of Bahrain',
    },
    {
      id: 'vital-pah-2',
      category: 'paternal-inlaws',
      categoryLabel: "Paternal Aunt's Husband",
      badgeCode: 'PAH2',
      name: 'Md. Rejaul Karim',
      honoraryTitle: 'Second Paternal Uncle (Mejho Fupa)',
      relationOrSpouse: 'Second Paternal Uncle (Mejho Fupa)',
      spouseName: 'Begum Rokeya (2nd Paternal Aunt)',
      profession: 'Retired SI, BD Police',
      fieldCategory: 'defense',
      detail: 'Retired Sub-Inspector (SI), Bangladesh Police, recognized for honorable public security service.',
      locationOrCompany: 'Bangladesh Police (Retd.)',
    },
    {
      id: 'vital-pah-3',
      category: 'paternal-inlaws',
      categoryLabel: "Paternal Aunt's Husband",
      badgeCode: 'PAH3',
      name: 'Md. Billal Hossain Sorkar',
      honoraryTitle: 'Third Paternal Uncle (Shejho Fupa)',
      relationOrSpouse: 'Third Paternal Uncle (Shejho Fupa)',
      spouseName: 'Khosneara Begum (3rd Paternal Aunt)',
      profession: 'Businessman',
      fieldCategory: 'business',
      detail: 'Respected commercial entrepreneur and community leader contributing to business development.',
      locationOrCompany: 'Commercial Enterprise, Bangladesh',
    },
    {
      id: 'vital-pah-4',
      category: 'paternal-inlaws',
      categoryLabel: "Paternal Aunt's Husband",
      badgeCode: 'PAH4',
      name: 'Md. Jahangir Alam',
      honoraryTitle: 'Fourth Paternal Uncle (Noa Fupa)',
      relationOrSpouse: 'Fourth Paternal Uncle (Noa Fupa)',
      spouseName: 'Morsheda Begum (4th Paternal Aunt)',
      profession: 'Businessman',
      fieldCategory: 'business',
      detail: 'Established business executive involved in enterprise commerce and community stewardship.',
      locationOrCompany: 'Business & Trade, Bangladesh',
    },
    {
      id: 'vital-pah-5',
      category: 'paternal-inlaws',
      categoryLabel: "Paternal Aunt's Husband",
      badgeCode: 'PAH5',
      name: 'Md. Mukhlesur Rahman',
      honoraryTitle: 'Youngest Paternal Uncle (Choto Fupa)',
      relationOrSpouse: 'Youngest Paternal Uncle (Choto Fupa)',
      spouseName: 'Salma Rahman (5th Paternal Aunt)',
      profession: 'Service Holder, Orion Group',
      fieldCategory: 'corporate',
      detail: 'Senior managerial career and executive service at leading conglomerate Orion Group.',
      locationOrCompany: 'Orion Group',
    },

    // Maternal Uncles (Nanu)
    {
      id: 'vital-mu-1',
      category: 'maternal-uncles',
      categoryLabel: 'Mejho Nanu',
      badgeCode: 'MU1',
      name: 'Harun-ar-Rashid',
      honoraryTitle: 'Mejho Nanu',
      relationOrSpouse: 'Mejho Nanu',
      profession: 'Businessman',
      fieldCategory: 'business',
      detail: 'Respected maternal uncle engaged in commercial enterprises and business development.',
      locationOrCompany: 'Business Enterprise',
    },
    {
      id: 'vital-mu-2',
      category: 'maternal-uncles',
      categoryLabel: 'Choto Nanu',
      badgeCode: 'MU2',
      name: 'Masud Khan',
      honoraryTitle: 'Choto Nanu',
      relationOrSpouse: 'Choto Nanu',
      profession: 'Resides in the USA',
      fieldCategory: 'global',
      detail: 'Maternal uncle residing in the United States, fostering international family linkages and global perspectives.',
      locationOrCompany: 'United States of America',
    },

    // Maternal Aunt's Husbands (The 3 Khalus)
    {
      id: 'vital-mah-1',
      category: 'maternal-inlaws',
      categoryLabel: "Maternal Aunt's Husband",
      badgeCode: 'MAH1',
      name: 'Nurul Sheikh',
      honoraryTitle: "Maternal Aunt's Husband (Khalu)",
      relationOrSpouse: "1st Maternal Aunt's Husband (Khalu)",
      spouseName: 'Reijina Afrin (Maternal Aunt)',
      profession: 'Retired Navy Officer',
      fieldCategory: 'defense',
      detail: 'Distinguished naval career with honor and strategic leadership in the Bangladesh Navy.',
      locationOrCompany: 'Bangladesh Navy (Retd.)',
    },
    {
      id: 'vital-mah-2',
      category: 'maternal-inlaws',
      categoryLabel: "Maternal Aunt's Husband",
      badgeCode: 'MAH2',
      name: 'Md. Masum Billah',
      honoraryTitle: "Maternal Aunt's Husband (Khalu)",
      relationOrSpouse: "2nd Maternal Aunt's Husband (Khalu)",
      spouseName: 'Gulshan Ara Happy (Maternal Aunt)',
      profession: 'Advocate, Supreme Court of Bangladesh',
      fieldCategory: 'law',
      detail: 'Practicing senior advocate with constitutional and civil jurisprudence expertise at the highest appellate court.',
      locationOrCompany: 'Supreme Court of Bangladesh',
    },
    {
      id: 'vital-mah-3',
      category: 'maternal-inlaws',
      categoryLabel: "Maternal Aunt's Husband",
      badgeCode: 'MAH3',
      name: 'Syed Titu',
      honoraryTitle: "Maternal Aunt's Husband (Khalu)",
      relationOrSpouse: "3rd Maternal Aunt's Husband (Khalu)",
      spouseName: 'Anoara Akhter (Maternal Aunt)',
      profession: 'Resides in Oman',
      fieldCategory: 'global',
      detail: 'Residing in the Sultanate of Oman with distinguished expatriate professional engagements.',
      locationOrCompany: 'Sultanate of Oman',
    },
  ];

  // Professional domain icon helper with animated styling
  const getFieldIcon = (field?: string) => {
    switch (field) {
      case 'education':
        return <GraduationCap className="w-3.5 h-3.5 text-[#3B5BFF] dark:text-[#4FD6D0] animate-bounce-subtle" />;
      case 'defense':
        return <Shield className="w-3.5 h-3.5 text-emerald-500 animate-pulse-subtle" />;
      case 'law':
        return <Scale className="w-3.5 h-3.5 text-indigo-500 animate-pulse-subtle" />;
      case 'aviation':
        return <Plane className="w-3.5 h-3.5 text-sky-500 animate-float-gentle" />;
      case 'corporate':
        return <Building2 className="w-3.5 h-3.5 text-purple-500 animate-pulse-subtle" />;
      case 'business':
        return <Briefcase className="w-3.5 h-3.5 text-blue-500 animate-pulse-subtle" />;
      case 'public-service':
        return <Compass className="w-3.5 h-3.5 text-teal-500 animate-spin-slow" />;
      case 'global':
        return <Globe className="w-3.5 h-3.5 text-emerald-500 animate-spin-slow" />;
      case 'homemaker':
      default:
        return <Heart className="w-3.5 h-3.5 text-rose-400 animate-bounce-subtle" />;
    }
  };

  // Spouse pairing lookup for aunts in the animated tree
  const getLinkedSpouse = (memberId: string): VitalMemberRecord | undefined => {
    const spouseIdMap: Record<string, string> = {
      pa1: 'vital-pah-1', // Begum Ummey Kulsum -> Md. Abdul Quddus
      pa2: 'vital-pah-2', // Begum Rokeya -> Md. Rejaul Karim
      pa3: 'vital-pah-3', // Khosneara Begum -> Md. Billal Hossain Sorkar
      pa4: 'vital-pah-4', // Morsheda Begum -> Md. Jahangir Alam
      pa5: 'vital-pah-5', // Salma Rahman -> Md. Mukhlesur Rahman
      ma1: 'vital-mah-1', // Reijina Afrin -> Nurul Sheikh
      ma2: 'vital-mah-2', // Gulshan Ara Happy -> Md. Masum Billah
      ma3: 'vital-mah-3', // Anoara Akhter -> Syed Titu
    };
    const targetId = spouseIdMap[memberId];
    if (!targetId) return undefined;
    return vitalMembers.find((v) => v.id === targetId);
  };

  // Filtered direct records
  const filteredRecords = records.filter((r) => {
    const matchesSide = activeSideTab === 'all' || r.side === activeSideTab;
    const matchesRole = roleFilter === 'all' || r.roleType === roleFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      r.name.toLowerCase().includes(q) ||
      r.relation.toLowerCase().includes(q) ||
      r.profession.toLowerCase().includes(q) ||
      r.bengaliTitle.toLowerCase().includes(q);
    return matchesSide && matchesRole && matchesSearch;
  });

  // Filtered vital records
  const filteredVitalMembers = vitalMembers.filter((v) => {
    const matchesTab = activeVitalTab === 'all' || v.category === activeVitalTab;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      v.name.toLowerCase().includes(q) ||
      v.profession.toLowerCase().includes(q) ||
      (v.spouseName && v.spouseName.toLowerCase().includes(q)) ||
      (v.honoraryTitle && v.honoraryTitle.toLowerCase().includes(q)) ||
      (v.locationOrCompany && v.locationOrCompany.toLowerCase().includes(q));
    return matchesTab && matchesSearch;
  });

  // Segregations for tree views
  const paternalGrandparents = records.filter((r) => r.side === 'paternal' && r.generation === 'grandparents');
  const paternalUncle = records.filter((r) => r.side === 'paternal' && r.roleType === 'uncle');
  const paternalAunts = records.filter((r) => r.side === 'paternal' && r.roleType === 'aunt');

  const maternalGrandparents = records.filter((r) => r.side === 'maternal' && r.generation === 'grandparents');
  const maternalUnclesList = records.filter((r) => r.side === 'maternal' && r.roleType === 'uncle');
  const maternalAuntsList = records.filter((r) => r.side === 'maternal' && r.roleType === 'aunt');

  // Groups for Vital Members
  const paternalInLaws = vitalMembers.filter((v) => v.category === 'paternal-inlaws');
  const maternalUncles = vitalMembers.filter((v) => v.category === 'maternal-uncles');
  const maternalInLaws = vitalMembers.filter((v) => v.category === 'maternal-inlaws');

  return (
    <section id="family-overview" className="py-16 lg:py-24 relative overflow-hidden bg-transparent">
      {/* Ambient background blur orbs */}
      <div className="ambient-orb w-[520px] h-[520px] top-1/4 -right-40 bg-[#3B5BFF]/25" aria-hidden="true" />
      <div className="ambient-orb w-[480px] h-[480px] bottom-16 -left-36 bg-[#4FD6D0]/20" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">

        {/* ========================================================================= */}
        {/* SECTION 1: OVERALL FAMILY MEMBER OVERVIEW (CREATIVE & UNDERSTANDABLE)      */}
        {/* ========================================================================= */}
        <div className="space-y-10">

          {/* Section Master Header & View Perspective Switcher */}
          <ScrollReveal direction="up" delay={30}>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
              <div className="space-y-2.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B5BFF]/10 dark:bg-[#3B5BFF]/20 text-xs font-bold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Ancestral Lineage &amp; Heritage Architecture</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14172B] dark:text-white">
                  Overall Family Member Overview
                </h2>
                <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
                  An intuitive, creative genealogical presentation honoring the direct ancestry of Jannatul Ferdous. Explore the dual ancestral pillars — the Musllim Uddin and Khan Solaiman Hossain dynasties — across generations with connected in-law distinctions.
                </p>
              </div>

              {/* Master View Perspectives: Animated Tree vs Dual Dynasties Deck vs Kinship Roster */}
              {/* Master View Perspectives: Dual Dynasties Deck vs Kinship Directory */}
              <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
                <div className="flex items-center p-1.5 rounded-2xl bg-white/90 dark:bg-white/5 border border-white/80 dark:border-white/10 shadow-sm backdrop-blur-md">
                  {/* Perspective 1: Dual Dynasties Deck */}
                  <button
                    onClick={() => setViewMode('comparison')}
                    className={`px-4 py-2.5 text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                      viewMode === 'comparison'
                        ? 'bg-gradient-to-r from-[#3B5BFF] via-[#7A5CFF] to-[#4FD6D0] text-white shadow-md shadow-[#3B5BFF]/30'
                        : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <Columns3 className="w-3.5 h-3.5 animate-pulse-subtle" />
                    <span>Dual Dynasties Deck</span>
                  </button>

                  {/* Perspective 2: Kinship Directory */}
                  <button
                    onClick={() => setViewMode('tree')}
                    className={`px-4 py-2.5 text-xs font-bold rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
                      viewMode === 'tree'
                        ? 'bg-gradient-to-r from-[#3B5BFF] via-[#7A5CFF] to-[#4FD6D0] text-white shadow-md shadow-[#3B5BFF]/30'
                        : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 animate-bounce-subtle" />
                    <span>Kinship Directory</span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Heritage Architectural Summary Ribbon (4 Core Pillars) */}
          <ScrollReveal direction="up" delay={50}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
              {/* Pillar 1: Apex Protagonist */}
              <div
                onClick={() => {
                  const el = document.getElementById('about');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-4 rounded-2xl glossy-panel border border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent cursor-pointer hover:border-amber-500/60 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-amber-600 dark:text-amber-400">
                    Heritage Center
                  </span>
                  <div className="w-6 h-6 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
                <h4 className="font-display text-sm sm:text-base font-bold text-[#14172B] dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors truncate">
                  Jannatul Ferdous
                </h4>
                <p className="text-[11px] text-[#5C6280] dark:text-[#959EB9] mt-0.5 truncate">
                  B.Sc &amp; M.Sc in Statistics · JU
                </p>
              </div>

              {/* Pillar 2: Paternal Dynasty */}
              <div
                onClick={() => {
                  setViewMode('comparison');
                  setActiveSideTab('paternal');
                }}
                className="p-4 rounded-2xl glossy-panel border border-[#3B5BFF]/30 bg-gradient-to-br from-[#3B5BFF]/10 via-[#3B5BFF]/5 to-transparent cursor-pointer hover:border-[#3B5BFF]/60 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#3B5BFF] dark:text-[#4FD6D0]">
                    Paternal Dynasty
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#3B5BFF]/15 text-[#3B5BFF] dark:text-[#4FD6D0]">
                    8 Members
                  </span>
                </div>
                <h4 className="font-display text-sm sm:text-base font-bold text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors truncate">
                  Musllim Uddin
                </h4>
                <p className="text-[11px] text-[#5C6280] dark:text-[#959EB9] mt-0.5 truncate">
                  Dada, Dadi · 1 Chacha · 5 Fupus
                </p>
              </div>

              {/* Pillar 3: Maternal Dynasty */}
              <div
                onClick={() => {
                  setViewMode('comparison');
                  setActiveSideTab('maternal');
                }}
                className="p-4 rounded-2xl glossy-panel border border-[#7A5CFF]/30 bg-gradient-to-br from-[#7A5CFF]/10 via-[#7A5CFF]/5 to-transparent cursor-pointer hover:border-[#7A5CFF]/60 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#7A5CFF] dark:text-[#4FD6D0]">
                    Maternal Dynasty
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#7A5CFF]/15 text-[#7A5CFF] dark:text-[#4FD6D0]">
                    7 Members
                  </span>
                </div>
                <h4 className="font-display text-sm sm:text-base font-bold text-[#14172B] dark:text-white group-hover:text-[#7A5CFF] dark:group-hover:text-[#4FD6D0] transition-colors truncate">
                  Solaiman Hossain Lineage
                </h4>
                <p className="text-[11px] text-[#5C6280] dark:text-[#959EB9] mt-0.5 truncate">
                  Nana, Nanu · 2 Mamas · 3 Khalas
                </p>
              </div>

              {/* Pillar 4: Distinguished In-Laws */}
              <div
                onClick={() => {
                  const el = document.getElementById('vital-members-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="p-4 rounded-2xl glossy-panel border border-[#4FD6D0]/30 bg-gradient-to-br from-[#4FD6D0]/10 via-[#4FD6D0]/5 to-transparent cursor-pointer hover:border-[#4FD6D0]/60 transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-teal-600 dark:text-[#4FD6D0]">
                    In-Law Distinctions
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#4FD6D0]/15 text-teal-700 dark:text-[#4FD6D0]">
                    8 Spouses
                  </span>
                </div>
                <h4 className="font-display text-sm sm:text-base font-bold text-[#14172B] dark:text-white group-hover:text-teal-600 dark:group-hover:text-[#4FD6D0] transition-colors truncate">
                  Fupas &amp; Khalus
                </h4>
                <p className="text-[11px] text-[#5C6280] dark:text-[#959EB9] mt-0.5 truncate">
                  Aviation · Defense · Law · Trade
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Search & Exploration Utility */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-white/70 dark:bg-white/[0.03] border border-white/80 dark:border-white/10 backdrop-blur-md">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5C6280] dark:text-[#959EB9]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, Bengali title (Dada, Fupu, Mama...), or profession..."
                className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[#14172B] dark:text-white placeholder-[#5C6280] dark:placeholder-[#959EB9] focus:outline-none focus:ring-2 focus:ring-[#3B5BFF]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 text-xs text-[#5C6280] dark:text-[#959EB9]">
              {searchQuery ? (
                <span className="font-semibold text-[#3B5BFF] dark:text-[#4FD6D0]">
                  Filtered view matching &ldquo;{searchQuery}&rdquo;
                </span>
              ) : (
                <span className="hidden sm:inline">💡 Click any member card or node to inspect full biographical details</span>
              )}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PERSPECTIVE 3: KINSHIP DIRECTORY & REGISTRY (FILTERABLE MATRIX)            */}
          {/* ========================================================================= */}
          {viewMode === 'tree' && (
            <ScrollReveal direction="up" delay={50}>
              <div className="space-y-6">

                {/* Kinship Registry Quick Filter Chips */}
                <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-white/80 dark:bg-white/5 border border-white/80 dark:border-white/10">
                  <button
                    onClick={() => { setActiveSideTab('all'); setRoleFilter('all'); }}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      activeSideTab === 'all' && roleFilter === 'all'
                        ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-xs'
                        : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                    }`}
                  >
                    All 15 Members
                  </button>
                  <button
                    onClick={() => { setActiveSideTab('all'); setRoleFilter('grandparent'); }}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      roleFilter === 'grandparent'
                        ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-xs'
                        : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                    }`}
                  >
                    Ancestral Grandparents (4)
                  </button>
                  <button
                    onClick={() => { setActiveSideTab('paternal'); setRoleFilter('all'); }}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      activeSideTab === 'paternal' && roleFilter === 'all'
                        ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-xs'
                        : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                    }`}
                  >
                    Paternal Branch (8)
                  </button>
                  <button
                    onClick={() => { setActiveSideTab('maternal'); setRoleFilter('all'); }}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      activeSideTab === 'maternal' && roleFilter === 'all'
                        ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-xs'
                        : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                    }`}
                  >
                    Maternal Branch (7)
                  </button>
                  <button
                    onClick={() => { setActiveSideTab('all'); setRoleFilter('uncle'); }}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      roleFilter === 'uncle'
                        ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-xs'
                        : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                    }`}
                  >
                    Uncles · Chacha &amp; Mamas (3)
                  </button>
                  <button
                    onClick={() => { setActiveSideTab('all'); setRoleFilter('aunt'); }}
                    className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                      roleFilter === 'aunt'
                        ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-xs'
                        : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                    }`}
                  >
                    Aunts · Fupus &amp; Khalas (8)
                  </button>
                </div>

                {/* Grid of Roster Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredRecords.map((m) => {
                    const linkedSpouse = getLinkedSpouse(m.id);
                    return (
                      <div
                        key={m.id}
                        onClick={() => setSelectedMember(m)}
                        className="p-5 rounded-2xl glossy-card border border-white/80 dark:border-white/10 hover:border-[#3B5BFF] cursor-pointer transition-all flex flex-col justify-between gap-4 group shadow-xs hover:shadow-md"
                      >
                        <div className="space-y-3">
                          {/* Prominently Highlighted Relation Type */}
                          <div className="flex items-center justify-between gap-2">
                            <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide shadow-xs border ${
                              m.side === 'paternal'
                                ? 'bg-[#3B5BFF]/10 text-[#3B5BFF] dark:text-[#4FD6D0] border-[#3B5BFF]/30'
                                : 'bg-[#7A5CFF]/10 text-[#7A5CFF] dark:text-[#a78bfa] border-[#7A5CFF]/30'
                            }`}>
                              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow shrink-0" />
                              <span className="font-extrabold uppercase tracking-wide">{m.relation}</span>
                              <span className="text-[11px] font-semibold opacity-80">· {m.bengaliTitle}</span>
                            </div>
                            <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                              {getFieldIcon(m.fieldCategory)}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-display text-base font-bold text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors">
                              {m.name}
                            </h4>
                            <p className="text-xs font-semibold text-[#3B5BFF] dark:text-[#4FD6D0] mt-0.5">
                              {m.profession}
                            </p>
                            <span className="text-[11px] font-medium text-[#5C6280] dark:text-[#959EB9] block mt-0.5">
                              {m.side === 'paternal' ? 'Musllim Uddin Dynasty · Paternal Line' : 'Solaiman Hossain Dynasty · Maternal Line'}
                            </span>
                          </div>

                          <p className="text-xs text-[#5C6280] dark:text-[#959EB9] line-clamp-2 leading-relaxed">
                            {m.detail}
                          </p>
                        </div>

                        {/* Linked Spouse Footnote or Card Footer */}
                        <div className="pt-2.5 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs text-[#5C6280] dark:text-[#959EB9]">
                          {linkedSpouse ? (
                            <span className="text-[11px] text-[#3B5BFF] dark:text-[#4FD6D0] font-semibold truncate">
                              💍 Spouse: {linkedSpouse.name}
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400">Direct Bloodline</span>
                          )}
                          <span className="text-[11px] font-bold text-[#3B5BFF] dark:text-[#4FD6D0] group-hover:underline flex items-center gap-1">
                            Details <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </ScrollReveal>
          )}

          {/* ========================================================================= */}
          {/* PERSPECTIVE 2: DUAL DYNASTIES DECK (SIDE-BY-SIDE GENERATIONAL COMPARISON) */}
          {/* ========================================================================= */}
          {viewMode === 'comparison' && (
            <ScrollReveal direction="up" delay={50}>
              <div className="space-y-8">
                {/* Side-by-Side Dual Dynasties Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                  {/* LEFT COLUMN: PATERNAL DYNASTY DECK */}
                  <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-blue-500/[0.06] via-white/80 to-white/40 dark:from-[#3B5BFF]/10 dark:via-[#0E1326] dark:to-[#090D1C] border border-[#3B5BFF]/30 space-y-8 shadow-xl">

                    {/* Dynasty Deck Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#3B5BFF]/20">
                      <div>
                        <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#3B5BFF] dark:text-[#4FD6D0]">
                          Direct Paternal Lineage
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#14172B] dark:text-white">
                          Musllim Uddin Dynasty
                        </h3>
                        <p className="text-xs text-[#5C6280] dark:text-[#959EB9]">
                          8 Direct Bloodline Members · 1 Son + 5 Daughters
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-[#3B5BFF]/15 text-[#3B5BFF] dark:text-[#4FD6D0] flex items-center justify-center font-bold text-sm">
                        8
                      </div>
                    </div>

                    {/* SHELF 1: Grandparents Foundation (Roots) */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        <Heart className="w-3.5 h-3.5 fill-amber-500/20 text-amber-500 animate-bounce-subtle" />
                        <span>Tier 1 · Ancestral Roots (Dada &amp; Dadi)</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {paternalGrandparents.map((gp) => (
                          <div
                            key={gp.id}
                            onClick={() => setSelectedMember(gp)}
                            className="p-4 rounded-xl bg-white/90 dark:bg-white/[0.05] border border-amber-500/20 hover:border-amber-500 cursor-pointer transition-all space-y-2 group shadow-xs"
                          >
                            <div className="flex items-center justify-between gap-1.5">
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide bg-gradient-to-r from-amber-500/15 to-orange-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 shadow-xs">
                                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow shrink-0" />
                                <span className="font-extrabold uppercase">{gp.relation}</span>
                                <span className="text-[10px] font-medium opacity-80">· {gp.bengaliTitle}</span>
                              </div>
                              <div className="w-6 h-6 rounded-md bg-amber-500/10 flex items-center justify-center shrink-0">
                                {getFieldIcon(gp.fieldCategory)}
                              </div>
                            </div>
                            <h5 className="font-display text-sm font-bold text-[#14172B] dark:text-white group-hover:text-amber-600 transition-colors">
                              {gp.name}
                            </h5>
                            <p className="text-xs font-semibold text-[#3B5BFF] dark:text-[#4FD6D0]">{gp.profession}</p>
                            <p className="text-[11px] text-[#5C6280] dark:text-[#959EB9] line-clamp-2">{gp.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SHELF 2: Respected Uncle (1 Son) */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#3B5BFF] dark:text-[#4FD6D0]">
                        <span>Tier 2 · Respected Uncle (1 Son)</span>
                        <span className="text-[10px] font-mono">Chacha</span>
                      </div>
                      {paternalUncle.map((uncle) => (
                        <div
                          key={uncle.id}
                          onClick={() => setSelectedMember(uncle)}
                          className="p-4 rounded-xl bg-white/90 dark:bg-white/[0.05] border border-[#3B5BFF]/30 hover:border-[#3B5BFF] cursor-pointer transition-all flex items-center justify-between gap-3 group shadow-xs"
                        >
                          <div className="space-y-1.5 min-w-0">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide bg-gradient-to-r from-[#3B5BFF]/15 to-[#7A5CFF]/15 text-[#3B5BFF] dark:text-[#4FD6D0] border border-[#3B5BFF]/30 shadow-xs">
                              <Briefcase className="w-3.5 h-3.5 text-[#3B5BFF] animate-pulse-subtle shrink-0" />
                              <span className="font-extrabold uppercase">{uncle.relation}</span>
                              <span className="text-[10px] font-medium opacity-80">· {uncle.bengaliTitle}</span>
                            </div>
                            <h5 className="font-display text-sm font-bold text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] transition-colors truncate">
                              {uncle.name}
                            </h5>
                            <p className="text-xs font-semibold text-[#3B5BFF] dark:text-[#4FD6D0]">{uncle.profession}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#3B5BFF] shrink-0" />
                        </div>
                      ))}
                    </div>

                    {/* SHELF 3: Respected Aunts (5 Daughters) */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#3B5BFF] dark:text-[#4FD6D0]">
                        <span>Tier 3 · Respected Aunts (5 Daughters)</span>
                        <span className="text-[10px] font-mono">1st to 5th Fupus</span>
                      </div>
                      <div className="space-y-2.5">
                        {paternalAunts.map((aunt) => {
                          const linkedFupa = getLinkedSpouse(aunt.id);
                          return (
                            <div
                              key={aunt.id}
                              onClick={() => setSelectedMember(aunt)}
                              className="p-3.5 rounded-xl bg-white/90 dark:bg-white/[0.05] border border-white/80 dark:border-white/10 hover:border-[#3B5BFF] cursor-pointer transition-all space-y-2 group shadow-xs"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-bold tracking-wide bg-[#3B5BFF]/10 text-[#3B5BFF] dark:text-[#4FD6D0] border border-[#3B5BFF]/20 shadow-xs">
                                  <Heart className="w-3 h-3 text-[#3B5BFF] animate-bounce-subtle shrink-0" />
                                  <span className="font-extrabold uppercase">{aunt.relation}</span>
                                  <span className="text-[10px] font-medium opacity-80">· {aunt.bengaliTitle}</span>
                                </div>
                                <span className="text-xs font-bold text-[#14172B] dark:text-white shrink-0">{aunt.profession}</span>
                              </div>
                              <h5 className="font-display text-sm font-bold text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] transition-colors">
                                {aunt.name}
                              </h5>
                              {linkedFupa && (
                                <div className="text-[11px] text-[#5C6280] dark:text-[#959EB9] flex items-center gap-1.5 pt-1 border-t border-slate-100 dark:border-white/5">
                                  <LinkIcon className="w-3 h-3 text-[#3B5BFF] shrink-0" />
                                  <span className="truncate">Husband: {linkedFupa.name} ({linkedFupa.profession})</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                  {/* RIGHT COLUMN: MATERNAL DYNASTY DECK */}
                  <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-purple-500/[0.06] via-white/80 to-white/40 dark:from-[#7A5CFF]/10 dark:via-[#0E1326] dark:to-[#090D1C] border border-[#7A5CFF]/30 space-y-8 shadow-xl">

                    {/* Dynasty Deck Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#7A5CFF]/20">
                      <div>
                        <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#7A5CFF] dark:text-[#4FD6D0]">
                          Direct Maternal Lineage
                        </span>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#14172B] dark:text-white">
                          Solaiman Hossain Dynasty
                        </h3>
                        <p className="text-xs text-[#5C6280] dark:text-[#959EB9]">
                          7 Direct Bloodline Members · 2 Sons + 3 Daughters
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-[#7A5CFF]/15 text-[#7A5CFF] dark:text-[#4FD6D0] flex items-center justify-center font-bold text-sm">
                        7
                      </div>
                    </div>

                    {/* SHELF 1: Grandparents Foundation (Roots) */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        <Heart className="w-3.5 h-3.5 fill-amber-500/20 text-amber-500 animate-bounce-subtle" />
                        <span>Tier 1 · Ancestral Roots (Nana &amp; Nanu)</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {maternalGrandparents.map((gp) => (
                          <div
                            key={gp.id}
                            onClick={() => setSelectedMember(gp)}
                            className="p-4 rounded-xl bg-white/90 dark:bg-white/[0.05] border border-amber-500/20 hover:border-amber-500 cursor-pointer transition-all space-y-2 group shadow-xs"
                          >
                            <div className="flex items-center justify-between gap-1.5">
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide bg-gradient-to-r from-amber-500/15 to-orange-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 shadow-xs">
                                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow shrink-0" />
                                <span className="font-extrabold uppercase">{gp.relation}</span>
                                <span className="text-[10px] font-medium opacity-80">· {gp.bengaliTitle}</span>
                              </div>
                              <div className="w-6 h-6 rounded-md bg-amber-500/10 flex items-center justify-center shrink-0">
                                {getFieldIcon(gp.fieldCategory)}
                              </div>
                            </div>
                            <h5 className="font-display text-sm font-bold text-[#14172B] dark:text-white group-hover:text-amber-600 transition-colors">
                              {gp.name}
                            </h5>
                            <p className="text-xs font-semibold text-[#7A5CFF] dark:text-[#4FD6D0]">{gp.profession}</p>
                            <p className="text-[11px] text-[#5C6280] dark:text-[#959EB9] line-clamp-2">{gp.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SHELF 2: Respected Uncles (2 Sons) */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#7A5CFF] dark:text-[#4FD6D0]">
                        <span>Tier 2 · Respected Uncles (2 Sons)</span>
                        <span className="text-[10px] font-mono">Mamas</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {maternalUnclesList.map((uncle) => (
                          <div
                            key={uncle.id}
                            onClick={() => setSelectedMember(uncle)}
                            className="p-4 rounded-xl bg-white/90 dark:bg-white/[0.05] border border-[#7A5CFF]/30 hover:border-[#7A5CFF] cursor-pointer transition-all space-y-2 group shadow-xs"
                          >
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide bg-gradient-to-r from-[#7A5CFF]/15 to-[#4FD6D0]/15 text-[#7A5CFF] dark:text-[#4FD6D0] border border-[#7A5CFF]/30 shadow-xs">
                              <Briefcase className="w-3.5 h-3.5 text-[#7A5CFF] animate-pulse-subtle shrink-0" />
                              <span className="font-extrabold uppercase">{uncle.relation}</span>
                              <span className="text-[10px] font-medium opacity-80">· {uncle.bengaliTitle}</span>
                            </div>
                            <h5 className="font-display text-sm font-bold text-[#14172B] dark:text-white group-hover:text-[#7A5CFF] transition-colors truncate">
                              {uncle.name}
                            </h5>
                            <p className="text-xs font-semibold text-[#7A5CFF] dark:text-[#4FD6D0]">{uncle.profession}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SHELF 3: Respected Aunts (3 Daughters) */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#7A5CFF] dark:text-[#4FD6D0]">
                        <span>Tier 3 · Respected Aunts (3 Daughters)</span>
                        <span className="text-[10px] font-mono">1st to 3rd Khalas</span>
                      </div>
                      <div className="space-y-2.5">
                        {maternalAuntsList.map((aunt) => {
                          const linkedKhalu = getLinkedSpouse(aunt.id);
                          return (
                            <div
                              key={aunt.id}
                              onClick={() => setSelectedMember(aunt)}
                              className="p-3.5 rounded-xl bg-white/90 dark:bg-white/[0.05] border border-white/80 dark:border-white/10 hover:border-[#7A5CFF] cursor-pointer transition-all space-y-2 group shadow-xs"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-bold tracking-wide bg-[#7A5CFF]/10 text-[#7A5CFF] dark:text-[#4FD6D0] border border-[#7A5CFF]/20 shadow-xs">
                                  <Heart className="w-3 h-3 text-[#7A5CFF] animate-bounce-subtle shrink-0" />
                                  <span className="font-extrabold uppercase">{aunt.relation}</span>
                                  <span className="text-[10px] font-medium opacity-80">· {aunt.bengaliTitle}</span>
                                </div>
                                <span className="text-xs font-bold text-[#14172B] dark:text-white shrink-0">{aunt.profession}</span>
                              </div>
                              <h5 className="font-display text-sm font-bold text-[#14172B] dark:text-white group-hover:text-[#7A5CFF] transition-colors">
                                {aunt.name}
                              </h5>
                              {linkedKhalu && (
                                <div className="text-[11px] text-[#5C6280] dark:text-[#959EB9] flex items-center gap-1.5 pt-1 border-t border-slate-100 dark:border-white/5">
                                  <LinkIcon className="w-3 h-3 text-[#7A5CFF] shrink-0" />
                                  <span className="truncate">Husband: {linkedKhalu.name} ({linkedKhalu.profession})</span>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </ScrollReveal>
          )}

        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: VITAL MEMBERS OF FAMILY (EXTENDED IN-LAWS & DISTINCTIONS)     */}
        {/* ========================================================================= */}
        <div className="pt-8 space-y-10">

          {/* Subsection Header */}
          <ScrollReveal direction="up" delay={40}>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
                  <Award className="w-3.5 h-3.5" />
                  <span>Extended Distinctions &amp; In-Laws</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#14172B] dark:text-white">
                  Vital Member of Family
                </h3>
                <p className="text-sm text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
                  Esteemed uncles and uncles-in-law serving in Aeronautical Engineering, Bangladesh Police, Bangladesh Navy, Supreme Court Jurisprudence, Multinational Corporate Leadership, and Global Commerce.
                </p>
              </div>

              {/* Filter Tabs for Vital Members */}
              <div className="flex w-full max-w-full flex-wrap items-center gap-1.5 p-1.5 glossy-panel rounded-2xl border border-white/80 dark:border-white/10 self-start lg:w-auto">
                <button
                  onClick={() => setActiveVitalTab('all')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    activeVitalTab === 'all'
                      ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-md shadow-[#3B5BFF]/30'
                      : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                  }`}
                >
                  All Vital Members ({vitalMembers.length})
                </button>
                <button
                  onClick={() => setActiveVitalTab('paternal-inlaws')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    activeVitalTab === 'paternal-inlaws'
                      ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-md shadow-[#3B5BFF]/30'
                      : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                  }`}
                >
                  Paternal Aunts&apos; Husbands ({paternalInLaws.length})
                </button>
                <button
                  onClick={() => setActiveVitalTab('maternal-uncles')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    activeVitalTab === 'maternal-uncles'
                      ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-md shadow-[#3B5BFF]/30'
                      : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                  }`}
                >
                  Maternal Uncles ({maternalUncles.length})
                </button>
                <button
                  onClick={() => setActiveVitalTab('maternal-inlaws')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                    activeVitalTab === 'maternal-inlaws'
                      ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-md shadow-[#3B5BFF]/30'
                      : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                  }`}
                >
                  Maternal Aunts&apos; Husbands ({maternalInLaws.length})
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* 3 Meaningful Categorized Columns/Sections for Vital Members */}
          <div className="space-y-12">

            {/* GROUP 1: PATERNAL AUNTS' HUSBANDS (THE 5 FUPAS) */}
            {(activeVitalTab === 'all' || activeVitalTab === 'paternal-inlaws') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3B5BFF]" />
                    <h4 className="font-display text-lg font-bold text-[#14172B] dark:text-white">
                      Paternal Aunts&apos; Husbands (The 5 Fupas)
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-[#5C6280] dark:text-[#959EB9]">
                    Ordered by Seniority · 5 Eminent Figures
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {paternalInLaws.map((fupa, idx) => (
                    <div
                      key={fupa.id}
                      onClick={() => setSelectedMember(fupa)}
                      className="p-5 rounded-2xl glossy-card border border-white/80 dark:border-white/10 hover:border-[#3B5BFF]/50 flex flex-col justify-between gap-4 cursor-pointer group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold tracking-wide bg-[#3B5BFF]/10 text-[#3B5BFF] dark:text-[#4FD6D0] border border-[#3B5BFF]/20 shadow-xs">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow shrink-0" />
                            <span className="font-extrabold uppercase">{fupa.honoraryTitle?.includes('(') ? fupa.honoraryTitle.split('(')[0].trim() : fupa.relationOrSpouse}</span>
                            <span className="text-[10px] font-medium opacity-80">· {fupa.honoraryTitle?.includes('(') ? fupa.honoraryTitle.split('(')[1]?.replace(')', '') : 'Fupa'}</span>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                            {getFieldIcon(fupa.fieldCategory)}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-display text-base font-bold text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors">
                            {fupa.name}
                          </h5>
                          <p className="text-xs font-semibold text-[#3B5BFF] dark:text-[#4FD6D0]">
                            {fupa.profession}
                          </p>
                        </div>

                        {fupa.spouseName && (
                          <div className="p-2 rounded-xl bg-slate-100/80 dark:bg-white/[0.05] border border-slate-200/50 dark:border-white/10 text-[11px] text-[#5C6280] dark:text-[#959EB9] flex items-center gap-1.5">
                            <LinkIcon className="w-3 h-3 text-[#3B5BFF] dark:text-[#4FD6D0] shrink-0" />
                            <span className="truncate">Spouse: {fupa.spouseName}</span>
                          </div>
                        )}

                        <p className="text-xs text-[#5C6280] dark:text-[#959EB9] line-clamp-2 leading-relaxed">
                          {fupa.detail}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-200/50 dark:border-white/10 flex items-center justify-between text-[11px] text-[#5C6280] dark:text-[#959EB9]">
                        <span>{fupa.locationOrCompany}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#3B5BFF] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GROUP 2: MATERNAL UNCLES (NANU) */}
            {(activeVitalTab === 'all' || activeVitalTab === 'maternal-uncles') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7A5CFF]" />
                    <h4 className="font-display text-lg font-bold text-[#14172B] dark:text-white">
                      Maternal Uncles (Nanu)
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-[#5C6280] dark:text-[#959EB9]">
                    Domestic &amp; International Linkages
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {maternalUncles.map((uncle) => (
                    <div
                      key={uncle.id}
                      onClick={() => setSelectedMember(uncle)}
                      className="p-5 rounded-2xl glossy-card border border-white/80 dark:border-white/10 hover:border-[#7A5CFF]/50 flex flex-col justify-between gap-4 cursor-pointer group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold tracking-wide bg-[#7A5CFF]/10 text-[#7A5CFF] dark:text-[#4FD6D0] border border-[#7A5CFF]/20 shadow-xs">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow shrink-0" />
                            <span className="font-extrabold uppercase">{uncle.relationOrSpouse}</span>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                            {getFieldIcon(uncle.fieldCategory)}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-display text-base font-bold text-[#14172B] dark:text-white group-hover:text-[#7A5CFF] dark:group-hover:text-[#4FD6D0] transition-colors">
                            {uncle.name}
                          </h5>
                          <p className="text-xs font-semibold text-[#7A5CFF] dark:text-[#4FD6D0]">
                            {uncle.profession}
                          </p>
                        </div>

                        <p className="text-xs text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
                          {uncle.detail}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-200/50 dark:border-white/10 flex items-center justify-between text-[11px] text-[#5C6280] dark:text-[#959EB9]">
                        <span>{uncle.locationOrCompany}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#7A5CFF] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GROUP 3: MATERNAL AUNTS' HUSBANDS (THE 3 KHALUS) */}
            {(activeVitalTab === 'all' || activeVitalTab === 'maternal-inlaws') && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#4FD6D0]" />
                    <h4 className="font-display text-lg font-bold text-[#14172B] dark:text-white">
                      Maternal Aunts&apos; Husbands (The 3 Khalus)
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-[#5C6280] dark:text-[#959EB9]">
                    Legal Jurisprudence, Defense &amp; Global Trade
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {maternalInLaws.map((khalu) => (
                    <div
                      key={khalu.id}
                      onClick={() => setSelectedMember(khalu)}
                      className="p-5 rounded-2xl glossy-card border border-white/80 dark:border-white/10 hover:border-[#4FD6D0]/50 flex flex-col justify-between gap-4 cursor-pointer group"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold tracking-wide bg-[#4FD6D0]/10 text-teal-700 dark:text-[#4FD6D0] border border-[#4FD6D0]/20 shadow-xs">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow shrink-0" />
                            <span className="font-extrabold uppercase">{khalu.relationOrSpouse.replace(' (Khalu)', '')}</span>
                            <span className="text-[10px] font-medium opacity-80">· Khalu</span>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/10 flex items-center justify-center shrink-0">
                            {getFieldIcon(khalu.fieldCategory)}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-display text-base font-bold text-[#14172B] dark:text-white group-hover:text-teal-600 dark:group-hover:text-[#4FD6D0] transition-colors">
                            {khalu.name}
                          </h5>
                          <p className="text-xs font-semibold text-teal-700 dark:text-[#4FD6D0]">
                            {khalu.profession}
                          </p>
                        </div>

                        {khalu.spouseName && (
                          <div className="p-2 rounded-xl bg-slate-100/80 dark:bg-white/[0.05] border border-slate-200/50 dark:border-white/10 text-[11px] text-[#5C6280] dark:text-[#959EB9] flex items-center gap-1.5">
                            <LinkIcon className="w-3 h-3 text-teal-600 dark:text-[#4FD6D0] shrink-0" />
                            <span className="truncate">Spouse: {khalu.spouseName}</span>
                          </div>
                        )}

                        <p className="text-xs text-[#5C6280] dark:text-[#959EB9] line-clamp-2 leading-relaxed">
                          {khalu.detail}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-200/50 dark:border-white/10 flex items-center justify-between text-[11px] text-[#5C6280] dark:text-[#959EB9]">
                        <span>{khalu.locationOrCompany}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* ================= INTERACTIVE MEMBER PROFILE MODAL ================= */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedMember(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="glossy-panel max-w-lg w-full bg-white/95 dark:bg-[#0E1326]/95 border border-white/80 dark:border-white/15 p-6 sm:p-8 relative space-y-6 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-[#14172B] dark:text-white flex items-center justify-center transition-all focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header info */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3B5BFF]/15 to-[#4FD6D0]/15 border border-[#3B5BFF]/30 text-[#3B5BFF] dark:text-[#4FD6D0] flex items-center justify-center shrink-0 shadow-sm">
                {'fieldCategory' in selectedMember ? getFieldIcon(selectedMember.fieldCategory) : <Sparkles className="w-5 h-5 text-[#3B5BFF] animate-spin-slow" />}
              </div>
              <div className="space-y-1.5 pr-6">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#3B5BFF]/10 text-[#3B5BFF] dark:text-[#4FD6D0] border border-[#3B5BFF]/20">
                  <Sparkles className="w-3 h-3 text-amber-500 animate-spin-slow" />
                  <span>{'relation' in selectedMember ? `${selectedMember.relation} · ${selectedMember.bengaliTitle}` : selectedMember.relationOrSpouse}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#14172B] dark:text-white">
                  {selectedMember.name}
                </h3>
                <p className="text-xs font-semibold text-[#5C6280] dark:text-[#959EB9]">
                  {'side' in selectedMember ? `${selectedMember.side === 'paternal' ? 'Musllim Uddin Dynasty (Paternal)' : 'Solaiman Hossain Dynasty (Maternal)'}` : selectedMember.categoryLabel}
                </p>
              </div>
            </div>

            {/* Profile Data Points */}
            <div className="space-y-3 pt-2 border-t border-slate-200/60 dark:border-white/10 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04]">
                <span className="text-[#5C6280] dark:text-[#959EB9]">Profession / Title:</span>
                <span className="font-semibold text-[#14172B] dark:text-white">{selectedMember.profession}</span>
              </div>

              {'spouseName' in selectedMember && selectedMember.spouseName && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04]">
                  <span className="text-[#5C6280] dark:text-[#959EB9]">Connected Spouse:</span>
                  <span className="font-semibold text-[#3B5BFF] dark:text-[#4FD6D0]">{selectedMember.spouseName}</span>
                </div>
              )}

              {'locationOrCompany' in selectedMember && selectedMember.locationOrCompany && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04]">
                  <span className="text-[#5C6280] dark:text-[#959EB9]">Location / Enterprise:</span>
                  <span className="font-semibold text-[#14172B] dark:text-white">{selectedMember.locationOrCompany}</span>
                </div>
              )}
            </div>

            {/* Detailed Biographical Narrative */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#3B5BFF]/5 to-[#4FD6D0]/5 border border-[#3B5BFF]/10 space-y-1.5">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#3B5BFF] dark:text-[#4FD6D0] uppercase tracking-wider">
                <Info className="w-3.5 h-3.5" />
                <span>Lineage Record Summary</span>
              </div>
              <p className="text-xs text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
                {selectedMember.detail}
              </p>
            </div>

            {/* Bottom Dismiss Button */}
            <div className="pt-2">
              <button
                onClick={() => setSelectedMember(null)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white font-semibold text-xs shadow-md shadow-[#3B5BFF]/25 hover:shadow-lg transition-all cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
