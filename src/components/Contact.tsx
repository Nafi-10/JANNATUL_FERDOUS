import React, { useState } from 'react';
import { Send, Mail, Copy, Check, Sparkles, MapPin, Globe, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'Internship Opportunity', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient Orbs */}
      <div
        className="ambient-orb w-[480px] h-[480px] top-1/4 -right-28 bg-[#3B5BFF]"
        aria-hidden="true"
      />
      <div
        className="ambient-orb w-[400px] h-[400px] bottom-10 -left-20 bg-[#4FD6D0]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#3B5BFF] dark:text-[#4FD6D0] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06. Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14172B] dark:text-white">
            Let&apos;s build something meaningful together.
          </h2>
          <p className="text-sm sm:text-base text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
            Whether you have an internship opening, a student research project, or a design challenge—my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Info & Quick Copy Card */}
          <div className="lg:col-span-5 glossy-panel p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-[#14172B] dark:text-white">
                Contact Details
              </h3>
              <p className="text-sm text-[#5C6280] dark:text-[#959EB9] leading-relaxed">
                I am actively seeking Product Design and Frontend Engineering internship opportunities for 2026. Available for remote and hybrid roles globally.
              </p>

              {/* Email One-Click Copy Box */}
              <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 space-y-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#5C6280] dark:text-[#959EB9] block">
                  DIRECT EMAIL
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs sm:text-sm font-semibold text-[#14172B] dark:text-white truncate">
                    {PERSONAL_INFO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-[#3B5BFF]/10 hover:bg-[#3B5BFF]/20 text-[#3B5BFF] dark:text-[#4FD6D0] transition-colors shrink-0 flex items-center gap-1.5 text-xs font-bold"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Timezone Details */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-[#5C6280] dark:text-[#959EB9]">
                  <MapPin className="w-4 h-4 text-[#3B5BFF] dark:text-[#4FD6D0] shrink-0" />
                  <span>{PERSONAL_INFO.location} (GMT+6)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#5C6280] dark:text-[#959EB9]">
                  <Globe className="w-4 h-4 text-[#3B5BFF] dark:text-[#4FD6D0] shrink-0" />
                  <span>Available for global remote collaboration</span>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="pt-6 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between text-xs text-[#5C6280] dark:text-[#959EB9]">
              <span>Typical response time:</span>
              <span className="font-semibold text-[#14172B] dark:text-white">&le; 24 hours</span>
            </div>
          </div>

          {/* Right Column: Interactive Glossy Form */}
          <div className="lg:col-span-7 glossy-panel p-8 sm:p-10 relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold tracking-wider text-[#14172B] dark:text-white uppercase">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/15 text-sm text-[#14172B] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B5BFF] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold tracking-wider text-[#14172B] dark:text-white uppercase">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/15 text-sm text-[#14172B] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B5BFF] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-bold tracking-wider text-[#14172B] dark:text-white uppercase">
                  Subject / Inquiring About
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/15 text-sm text-[#14172B] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3B5BFF] transition-all"
                >
                  <option value="Internship Opportunity" className="dark:bg-[#14172B]">Internship Opportunity (Design / Frontend)</option>
                  <option value="Freelance Project" className="dark:bg-[#14172B]">UI/UX Project Collaboration</option>
                  <option value="Academic Mentorship" className="dark:bg-[#14172B]">Academic Research / Mentorship</option>
                  <option value="General Conversation" className="dark:bg-[#14172B]">General Inquiry / Coffee Chat</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold tracking-wider text-[#14172B] dark:text-white uppercase">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, or team..."
                  className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/15 text-sm text-[#14172B] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3B5BFF] transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="glossy-btn-primary px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider flex items-center gap-2"
                >
                  {status === 'sending' ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 animate-in fade-in">
                    <Check className="w-4 h-4" />
                    <span>Message received! Will reply soon.</span>
                  </div>
                )}
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
