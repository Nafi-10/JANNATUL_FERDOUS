import React, { useState } from 'react';
import { MapPin, Copy, Check, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AddressBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const fullAddress = '8/1, Haji Ismail Link Road-2, Sonadanga, Khulna City Corporation, Khulna-9100, Bangladesh.';

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="residential-address" className="pt-6 pb-4 sm:pt-8 sm:pb-6 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" delay={50}>
          {/* Sleek Horizontal Strip Card (Exact match to the reference image provided) */}
          <div className="p-5 sm:py-5 sm:px-7 rounded-2xl glossy-panel border border-white/80 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-[#3B5BFF]/60 dark:hover:border-[#4FD6D0]/50 hover:shadow-lg transition-all duration-300">
          
          {/* Left Group: Badge Box + Title + Address */}
          <div className="flex items-center gap-4">
            {/* Rounded Badge Box (Matches the blue-framed square badge in the screenshot) */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B5BFF]/10 to-[#4FD6D0]/10 dark:from-[#3B5BFF]/20 dark:to-[#4FD6D0]/20 border border-[#3B5BFF]/30 dark:border-[#4FD6D0]/30 flex items-center justify-center font-display font-bold text-xs tracking-wider text-[#3B5BFF] dark:text-[#4FD6D0] shrink-0 group-hover:scale-105 transition-transform shadow-sm">
              <MapPin className="w-5 h-5 text-[#3B5BFF] dark:text-[#4FD6D0]" />
            </div>

            <div className="space-y-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-display text-sm sm:text-base font-bold text-[#14172B] dark:text-white group-hover:text-[#3B5BFF] dark:group-hover:text-[#4FD6D0] transition-colors">
                  Permanent &amp; Present Address
                </h4>
                <span className="text-xs text-[#3B5BFF] dark:text-[#4FD6D0] font-semibold">
                  · Primary Residence
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#5C6280] dark:text-[#959EB9] leading-snug font-medium">
                {fullAddress}
              </p>
            </div>
          </div>

          {/* Right Group: Location & Copy Action */}
          <div className="flex items-center justify-between sm:justify-end gap-4 pl-16 sm:pl-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200/50 dark:border-white/10">
            <div className="sm:text-right shrink-0">
              <span className="text-xs sm:text-sm font-semibold text-[#14172B] dark:text-white block">
                Khulna City Corporation
              </span>
              <p className="text-[11px] text-[#5C6280] dark:text-[#959EB9]">
                Khulna-9100, Bangladesh
              </p>
            </div>

            <button
              onClick={handleCopy}
              className="p-2 rounded-xl bg-[#3B5BFF]/10 hover:bg-[#3B5BFF]/20 text-[#3B5BFF] dark:text-[#4FD6D0] transition-colors shrink-0 flex items-center gap-1.5 text-xs font-bold"
              aria-label="Copy residential address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </button>
          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
