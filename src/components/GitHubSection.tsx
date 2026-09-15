'use client';

import React from 'react';
import { developerProfile } from '../data/portfolioData';
import { GitCommit, GitFork, Star, ArrowUpRight, Code2 } from 'lucide-react';
import { Github } from './Icons';

export const GitHubSection: React.FC = () => {
  const languageStats = [
    { name: 'TypeScript / JS', percentage: 38, color: '#3178c6' },
    { name: 'Dart / Flutter', percentage: 28, color: '#02569b' },
    { name: 'Java / Spring', percentage: 20, color: '#b07219' },
    { name: 'Kotlin / Android', percentage: 14, color: '#a97bdb' },
  ];

  // Simulating 52 weeks of GitHub activity squares
  const activityWeeks = Array.from({ length: 48 }, (_, i) => {
    const intensity = (i * 7 + 3) % 5;
    return intensity;
  });

  const getIntensityClass = (level: number) => {
    switch (level) {
      case 4: return 'bg-emerald-500';
      case 3: return 'bg-emerald-600/80';
      case 2: return 'bg-emerald-800/50';
      case 1: return 'bg-emerald-950/60';
      default: return 'bg-[var(--bg-tertiary)]';
    }
  };

  return (
    <section className="py-24 relative border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-emerald)] mb-2">
              06 // Open Source Footprint
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              GitHub Engineering Footprint
            </h2>
          </div>
          <a
            href={developerProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono-tech px-4 py-2 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-emerald)] transition-colors w-fit"
          >
            <Github className="w-4 h-4 text-[var(--accent-emerald)]" />
            <span>@iamprassana on GitHub ↗</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="tech-card rounded-2xl p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-center font-mono-tech text-xs font-bold text-[var(--accent-emerald)]">
                    KP
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-primary)]">Karthick Prassana</div>
                    <div className="text-xs font-mono-tech text-[var(--text-muted)]">@iamprassana</div>
                  </div>
                </div>

                <a
                  href={developerProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[var(--accent-emerald)] text-slate-950 font-bold text-xs font-mono-tech hover:opacity-90"
                >
                  Follow ↗
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 font-mono-tech">
                <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-xs text-[var(--text-muted)]">Public Repositories</div>
                  <div className="text-2xl font-bold text-[var(--accent-emerald)] mt-1">19</div>
                </div>

                <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <div className="text-xs text-[var(--text-muted)]">Academic CGPA</div>
                  <div className="text-2xl font-bold text-[var(--accent-amber)] mt-1">9.03</div>
                </div>
              </div>

              {/* Primary Language Share */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono-tech text-[var(--text-muted)] uppercase tracking-wider flex items-center justify-between">
                  <span>Language Distribution</span>
                  <span>100% Code Verified</span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 rounded-full bg-[var(--bg-primary)] overflow-hidden flex">
                  {languageStats.map((lang) => (
                    <div
                      key={lang.name}
                      style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                      title={`${lang.name}: ${lang.percentage}%`}
                    />
                  ))}
                </div>

                {/* Language Legend */}
                <div className="grid grid-cols-2 gap-2 pt-1 font-mono-tech text-xs">
                  {languageStats.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }}></span>
                      <span className="text-[var(--text-secondary)]">{lang.name}</span>
                      <span className="text-[var(--text-muted)] text-[10px]">{lang.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column Activity Matrix Simulation */}
          <div className="lg:col-span-7">
            <div className="tech-card rounded-2xl p-6 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <GitCommit className="w-4 h-4 text-[var(--accent-emerald)]" />
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-[var(--text-muted)]">
                    Commit History & Activity Heatmap
                  </span>
                </div>
                <span className="text-xs font-mono-tech text-[var(--text-muted)]">
                  Continuous Engineering
                </span>
              </div>

              {/* Heatmap Grid */}
              <div className="space-y-2">
                <div className="text-xs font-mono-tech text-[var(--text-secondary)]">
                  500+ commits across systems, mobile & AI projects
                </div>

                <div className="grid grid-cols-12 gap-1.5 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  {activityWeeks.map((val, idx) => (
                    <div
                      key={idx}
                      className={`h-4 rounded-sm ${getIntensityClass(val)} transition-transform hover:scale-125`}
                      title={`Activity level ${val}`}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono-tech text-[var(--text-muted)] pt-1">
                  <span>Less activity</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded bg-[var(--bg-tertiary)]"></span>
                    <span className="w-2 h-2 rounded bg-emerald-950/60"></span>
                    <span className="w-2 h-2 rounded bg-emerald-800/50"></span>
                    <span className="w-2 h-2 rounded bg-emerald-600/80"></span>
                    <span className="w-2 h-2 rounded bg-emerald-500"></span>
                  </div>
                  <span>More activity</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono-tech text-[var(--text-secondary)]">
                <span>Inspect full repository commit logs:</span>
                <a
                  href={developerProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent-emerald)] font-bold hover:underline flex items-center gap-1"
                >
                  <span>github.com/iamprassana</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
