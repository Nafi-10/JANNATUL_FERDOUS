import React from 'react';
import { Layout, Code, Compass, Palette, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService?: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Code':
        return <Code className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Ambient Orb */}
      <div
        className="ambient-orb w-[460px] h-[460px] top-1/3 -right-28 bg-[#7A5CFF]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02. Capabilities &amp; Services</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14172B] dark:text-white">
            Specialized skillsets built for modern digital systems.
          </h2>
          <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
            Combining empathetic user inquiry with technical software architecture to build memorable, resilient products.
          </p>
        </div>

        {/* 4-Column Glossy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glossy-card p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-5">
                {/* Header row: Number + Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#5C6280] dark:text-[#959EB9]">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B5BFF]/10 to-[#4FD6D0]/10 dark:from-[#3B5BFF]/20 dark:to-[#4FD6D0]/20 flex items-center justify-center text-[#3B5BFF] dark:text-[#4FD6D0] group-hover:scale-110 group-hover:bg-[#3B5BFF] group-hover:text-white transition-all shadow-sm">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-display text-lg font-bold text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Skills Footer (Zero-Pill Rule: clean unboxed text with typographic separators) */}
              <div className="mt-8 pt-5 border-t border-slate-200/60 dark:border-white/10 space-y-3">
                <div className="text-[11px] text-[#5C6280] dark:text-[#959EB9] flex flex-wrap items-center gap-1.5 leading-relaxed font-medium">
                  {service.skills.map((skill, sIdx) => (
                    <React.Fragment key={skill}>
                      <span>{skill}</span>
                      {sIdx < service.skills.length - 1 && (
                        <span className="text-[#3B5BFF]/60 dark:text-[#4FD6D0]/60" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3B5BFF] dark:text-[#4FD6D0] group-hover:translate-x-1 transition-transform"
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Hover Top Glow Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B5BFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
