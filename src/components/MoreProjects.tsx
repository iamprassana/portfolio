'use client';

import React, { useState } from 'react';
import { secondaryProjects } from '../data/portfolioData';
import { Search, ArrowUpRight, Code2 } from 'lucide-react';
import { Github } from './Icons';

export const MoreProjects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = secondaryProjects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-20 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-emerald)] mb-1">
              03 // Repositories & Experiments
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              More Repositories & Open Source
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-emerald)] font-mono-tech transition-colors"
            />
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="tech-card rounded-xl p-6 flex flex-col justify-between group hover:border-[var(--accent-emerald)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[var(--accent-emerald)]" />
                    <h3 className="font-mono-tech font-bold text-sm text-[var(--text-primary)] group-hover:text-[var(--accent-emerald)] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[var(--bg-primary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent-emerald)] transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3">
                  {project.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-subtle)]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 text-[10px] font-mono-tech text-[var(--text-muted)]">
                  <span>Updated {project.updatedAt}</span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-[var(--accent-emerald)] transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    <span>Repo ↗</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-xs font-mono-tech text-[var(--text-muted)]">
            No repositories found matching "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
};
