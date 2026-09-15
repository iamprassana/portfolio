'use client';

import React from 'react';
import { journeyMilestones } from '../data/portfolioData';
import { GraduationCap, Trophy, Award, CheckCircle2 } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-emerald)] mb-2">
              07 // Education & Achievements
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Engineering Journey & Timeline
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md">
            Academic performance at VIT-AP University (CGPA 9.03), national hackathon milestones, and technical certifications.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-[var(--border-subtle)] ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {journeyMilestones.map((milestone) => (
            <div key={milestone.id} className="relative group">
              
              {/* Timeline Dot Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-emerald)] flex items-center justify-center group-hover:scale-125 transition-transform">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)]"></span>
              </div>

              {/* Card Container */}
              <div className="tech-card rounded-2xl p-6 sm:p-8 space-y-4">
                
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono-tech px-3 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-emerald)] border border-[var(--border-subtle)]">
                      {milestone.period}
                    </span>
                    <span className="text-xs font-mono-tech text-[var(--text-muted)] uppercase">
                      {milestone.type}
                    </span>
                  </div>

                  {milestone.badge && (
                    <span className="text-xs font-mono-tech px-3 py-1 rounded-full bg-[var(--accent-emerald)] text-slate-950 font-bold">
                      {milestone.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-emerald)] transition-colors">
                    {milestone.title}
                  </h3>
                  <div className="text-xs font-mono-tech text-[var(--accent-amber)] mt-0.5">
                    {milestone.organization} {milestone.location ? `· ${milestone.location}` : ''}
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {milestone.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-1.5 pt-2">
                  {milestone.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs font-mono-tech text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-emerald)] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
