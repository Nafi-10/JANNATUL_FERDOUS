import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, User, Sparkles, CheckCircle, Wrench, Layers } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="glossy-panel max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white/95 dark:bg-[#0E1326]/95 border border-white/80 dark:border-white/15 p-6 sm:p-8 md:p-10 relative space-y-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-[#14172B] dark:text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[#3B5BFF]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="space-y-3 pr-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#3B5BFF] dark:text-[#4FD6D0] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <h2 id="modal-project-title" className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#14172B] dark:text-white">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#A0A7C2]">
            {project.tagline}
          </p>
        </div>

        {/* Abstract case study cover without demo imagery */}
        <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-200/60 dark:border-white/10 shadow-lg bg-gradient-to-br from-[#E8ECFF] via-[#F4F5FA] to-[#DDF4F1] dark:from-[#171D3B] dark:via-[#11162B] dark:to-[#12302F] flex items-center justify-center">
          <div className="absolute inset-6 rounded-2xl border border-white/70 dark:border-white/10" />
          <div className="w-20 h-20 rounded-3xl bg-white/80 dark:bg-[#1E2540]/90 border border-white dark:border-white/10 shadow-xl flex items-center justify-center text-[#3B5BFF] dark:text-[#4FD6D0]">
            <Layers className="w-10 h-10" />
          </div>
        </div>

        {/* Roles & Meta Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#5C6280] dark:text-[#959EB9] block mb-1">
              ROLE
            </span>
            <p className="text-xs font-semibold text-[#14172B] dark:text-white">
              {project.role}
            </p>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-[#5C6280] dark:text-[#959EB9] block mb-1">
              TIMELINE
            </span>
            <p className="text-xs font-semibold text-[#14172B] dark:text-white">
              {project.year} (Semester Project)
            </p>
          </div>
          <div className="col-span-2">
            <span className="text-[10px] uppercase font-bold text-[#5C6280] dark:text-[#959EB9] block mb-1">
              TOOLING
            </span>
            <p className="text-xs font-semibold text-[#14172B] dark:text-white">
              {project.tools.join(', ')}
            </p>
          </div>
        </div>

        {/* Deep Dive: Challenge vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
              <span>The Problem &amp; Friction</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#5C6280] dark:text-[#A0A7C2] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#3B5BFF]/5 dark:bg-[#3B5BFF]/10 border border-[#3B5BFF]/20 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#3B5BFF] dark:text-[#4FD6D0] flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Architected Solution</span>
            </h4>
            <p className="text-xs sm:text-sm text-[#14172B] dark:text-white leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Quantitative Impact / Results */}
        <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-300">
          <span className="text-[10px] font-bold uppercase tracking-widest block mb-1">
            MEASURED IMPACT &amp; VALIDATION
          </span>
          <p className="text-xs sm:text-sm font-medium">
            {project.impact}
          </p>
        </div>

        {/* Deliverables List */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#14172B] dark:text-white">
            Key Deliverables
          </h4>
          <div className="flex flex-wrap gap-2 text-xs text-[#5C6280] dark:text-[#959EB9]">
            {project.deliverables.map((item, index) => (
              <span key={index} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/10 text-[#14172B] dark:text-white font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
          <span className="text-xs text-[#5C6280] dark:text-[#959EB9]">
            Available for in-depth design walkthrough upon request.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold rounded-xl bg-[#14172B] dark:bg-white text-white dark:text-[#14172B] hover:opacity-90 transition-opacity"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
