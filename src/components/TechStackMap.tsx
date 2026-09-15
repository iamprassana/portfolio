'use client';

import React, { useState } from 'react';
import { techStackData } from '../data/portfolioData';
import { TechItem } from '../types';
import { Layers, ArrowRight, Code2, Server, Globe, Database, Box } from 'lucide-react';

export const TechStackMap: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem>(techStackData[0]);

  const categories = [
    'Languages',
    'Backend & Distributed',
    'Frontend & AI',
    'Databases & Storage',
    'DevOps & Tools'
  ] as const;

  const categoryIcons: Record<string, React.ElementType> = {
    'Languages': Code2,
    'Backend & Distributed': Server,
    'Frontend & AI': Globe,
    'Databases & Storage': Database,
    'DevOps & Tools': Box
  };

  return (
    <section id="tech-stack" className="py-24 relative border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-emerald)] mb-2">
              04 // Interactive Skill-to-Project Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Technologies & System Application Map
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md">
            Click any technology to inspect the exact projects and system components where Karthick implemented it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Grouped Tech Buttons */}
          <div className="lg:col-span-7 space-y-8">
            {categories.map((cat) => {
              const CategoryIcon = categoryIcons[cat] || Layers;
              const items = techStackData.filter((t) => t.category === cat);

              return (
                <div key={cat} className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-wider text-[var(--text-muted)]">
                    <CategoryIcon className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
                    <span>{cat}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => {
                      const isSelected = selectedTech.id === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setSelectedTech(item)}
                          className={`px-3.5 py-2 rounded-xl text-xs font-mono-tech flex items-center gap-2 transition-all ${
                            isSelected
                              ? 'bg-[var(--accent-emerald)] text-slate-950 font-bold shadow-md shadow-emerald-950/20 scale-[1.02]'
                              : 'bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-emerald)]'
                          }`}
                        >
                          <span>{item.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded ${isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)]'}`}>
                            {item.projectsUsed.length}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Project Context Inspector */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 tech-card rounded-2xl p-6 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-emerald)]"></div>
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-[var(--text-muted)]">
                    Technology Context Inspector
                  </span>
                </div>
                <span className="text-xs font-mono-tech px-2.5 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--accent-amber)] border border-amber-500/20">
                  {selectedTech.category}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                  {selectedTech.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-2">
                  {selectedTech.description}
                </p>
              </div>

              {/* Projects List Where Tech Was Used */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono-tech text-[var(--accent-emerald)] uppercase tracking-wider">
                  Deployed in Codebases ({selectedTech.projectsUsed.length})
                </div>

                <div className="space-y-2">
                  {selectedTech.projectsUsed.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[var(--text-primary)] font-mono-tech">
                          {proj.name}
                        </span>
                        <a href="#work" className="text-[10px] font-mono-tech text-[var(--accent-emerald)] flex items-center gap-0.5 hover:underline">
                          <span>Inspect</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] font-mono-tech">
                        {proj.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[10px] font-mono-tech text-[var(--text-muted)]">
                💡 Every technology listed is backed by executable code in public GitHub repositories.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
