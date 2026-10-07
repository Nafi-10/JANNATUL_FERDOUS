import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Work: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'UI/UX & Mobile' },
    { id: 'web', label: 'Web Systems' },
    { id: 'iot', label: 'IoT & Strategy' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'mobile') return proj.category.includes('Mobile');
    if (selectedCategory === 'web') return proj.category.includes('Web');
    if (selectedCategory === 'iot') return proj.category.includes('IoT');
    return true;
  });

  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="ambient-orb w-[480px] h-[480px] bottom-10 -left-20 bg-[#3B5BFF]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Segmented Filter Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03. Selected Works &amp; Case Studies</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14172B] dark:text-white">
              Tactile products engineered with student curiosity.
            </h2>
          </div>

          {/* Segmented Interactive Filter Tabs (Functional buttons as permitted by zero-pill guidelines) */}
          <div className="flex items-center gap-1.5 p-1.5 glossy-panel rounded-2xl border border-white/80 dark:border-white/10 self-start md:self-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-[#3B5BFF] to-[#7A5CFF] text-white shadow-md shadow-[#3B5BFF]/30'
                      : 'text-[#5C6280] dark:text-[#959EB9] hover:text-[#14172B] dark:hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Bento / Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="glossy-card group cursor-pointer overflow-hidden flex flex-col justify-between relative border border-white/80 dark:border-white/10"
            >
              {/* Abstract project preview without demo imagery */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#E8ECFF] via-[#F4F5FA] to-[#DDF4F1] dark:from-[#171D3B] dark:via-[#11162B] dark:to-[#12302F] flex items-center justify-center">
                <div className="absolute inset-5 rounded-2xl border border-white/70 dark:border-white/10" />
                <div className="absolute inset-x-12 top-10 bottom-10 rounded-2xl border border-[#3B5BFF]/15 dark:border-[#4FD6D0]/15 bg-white/35 dark:bg-white/[0.03] shadow-xl flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 dark:bg-[#1E2540]/90 border border-white dark:border-white/10 shadow-lg flex items-center justify-center text-[#3B5BFF] dark:text-[#4FD6D0]">
                    <Layers className="w-8 h-8" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-white/75 dark:bg-black/30 backdrop-blur-md border border-white/60 dark:border-white/10 text-[11px] font-semibold text-[#3B5BFF] dark:text-[#4FD6D0] tracking-wide">
                  {project.category}
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/80 dark:bg-black/60 backdrop-blur-md flex items-center justify-center text-[#14172B] dark:text-white group-hover:bg-[#3B5BFF] group-hover:text-white transition-all shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
                  <div className="flex items-center gap-2 text-xs text-[#5C6280] dark:text-[#959EB9] font-medium">
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.role.split('&')[0].trim()}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C6280] dark:text-[#959EB9] leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Tools & Click Action */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#5C6280] dark:text-[#959EB9] truncate max-w-[200px]">
                    {project.tools.slice(0, 3).join(' · ')}
                  </span>
                  <span className="text-[#3B5BFF] dark:text-[#4FD6D0] group-hover:underline flex items-center gap-1">
                    Read Case Study
                  </span>
                </div>
              </div>

              {/* Shine Sweep Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4FD6D0] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
