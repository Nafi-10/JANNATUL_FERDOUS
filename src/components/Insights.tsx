import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { INSIGHTS } from '../data/portfolioData';
import { Insight } from '../types/portfolio';
import { InsightModal } from './InsightModal';

export const Insights: React.FC = () => {
  const [activeInsight, setActiveInsight] = useState<Insight | null>(null);

  return (
    <section id="insights" className="py-24 relative overflow-hidden">
      {/* Ambient Orb */}
      <div
        className="ambient-orb w-[450px] h-[450px] -bottom-10 -right-20 bg-[#7A5CFF]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>05. Research &amp; Articles</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14172B] dark:text-white">
              Written thoughts on design tactility &amp; ergonomics.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#959EB9] max-w-md leading-relaxed">
            Exploring intersections between human psychology, academic cognitive balance, and modern UI engineering.
          </p>
        </div>

        {/* 3-Column Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((insight) => (
            <article
              key={insight.id}
              onClick={() => setActiveInsight(insight)}
              className="glossy-card p-7 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Zero-Pill Unboxed Metadata with Typographic Separator */}
                <div className="flex items-center gap-2 text-xs text-[#5C6280] dark:text-[#959EB9] font-medium">
                  <span>{insight.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{insight.readTime}</span>
                </div>

                {/* Article Title */}
                <h3 className="font-display text-xl font-bold text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors leading-snug">
                  {insight.title}
                </h3>

                {/* Article Summary */}
                <p className="text-xs sm:text-sm text-[#5C6280] dark:text-[#959EB9] leading-relaxed line-clamp-3">
                  {insight.summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-5 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs text-[#5C6280] dark:text-[#959EB9]">
                  {insight.date}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B5BFF] dark:text-[#4FD6D0] group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Hover Top Glow Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7A5CFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      <InsightModal
        insight={activeInsight}
        onClose={() => setActiveInsight(null)}
      />
    </section>
  );
};
