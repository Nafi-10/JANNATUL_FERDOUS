import React, { useEffect } from 'react';
import { X, Calendar, Clock, BookOpen } from 'lucide-react';
import { Insight } from '../types/portfolio';

interface InsightModalProps {
  insight: Insight | null;
  onClose: () => void;
}

export const InsightModal: React.FC<InsightModalProps> = ({ insight, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (insight) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [insight, onClose]);

  if (!insight) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-insight-title"
    >
      <div
        className="glossy-panel max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-white/95 dark:bg-[#0E1326]/95 border border-white/80 dark:border-white/15 p-6 sm:p-8 md:p-10 relative space-y-6 animate-in zoom-in-95 duration-200"
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

        {/* Metadata */}
        <div className="space-y-3 pr-12">
          <div className="flex items-center gap-2 text-xs text-[#5C6280] dark:text-[#959EB9] font-medium">
            <span>{insight.category}</span>
            <span aria-hidden="true">·</span>
            <span>{insight.date}</span>
            <span aria-hidden="true">·</span>
            <span>{insight.readTime}</span>
          </div>

          <h2 id="modal-insight-title" className="font-display text-2xl sm:text-3xl font-bold text-[#14172B] dark:text-white leading-tight">
            {insight.title}
          </h2>

          <p className="text-sm font-medium text-[#3B5BFF] dark:text-[#4FD6D0]">
            By Jannatul Ferdous
          </p>
        </div>

        {/* Highlight Summary */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border-l-4 border-[#3B5BFF] text-xs sm:text-sm text-[#5C6280] dark:text-[#A0A7C2] italic">
          {insight.summary}
        </div>

        {/* Full Article Content */}
        <div className="space-y-4 text-sm sm:text-base text-[#14172B] dark:text-[#D1D5E5] leading-relaxed">
          {insight.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
          <span className="text-xs text-[#5C6280] dark:text-[#959EB9]">
            Published on Student Research Notes
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#14172B] dark:bg-white text-white dark:text-[#14172B]"
          >
            Finished Reading
          </button>
        </div>
      </div>
    </div>
  );
};
