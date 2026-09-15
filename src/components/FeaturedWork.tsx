'use client';

import React, { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { Project, CategoryType } from '../types';
import { ArrowUpRight, Zap, BookOpen, Layers } from 'lucide-react';
import { Github } from './Icons';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryType>('all');

  const filterTabs: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend & Event Streams' },
    { id: 'ai', label: 'AI & Vector Search' },
    { id: 'mobile', label: 'Mobile Engineering' },
    { id: 'fullstack', label: 'Full Stack & Canvas' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-24 relative border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-emerald)] mb-2">
              02 // Featured Engineering Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md">
            Click any project to inspect its architecture, engineering decisions, and technical implementation details.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-[var(--border-subtle)]">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono-tech transition-all ${
                activeFilter === tab.id
                  ? 'bg-[var(--accent-emerald)] text-slate-950 font-bold shadow-sm'
                  : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:text-[var(--text-primary)] hover:border-[var(--text-muted)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="tech-card rounded-2xl p-8 flex flex-col justify-between group cursor-pointer hover:border-[var(--accent-emerald)] transition-all relative overflow-hidden"
            >
              {/* Accent Hover Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-emerald)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-tech text-[var(--accent-emerald)]">
                    0{index + 1} // {project.category.toUpperCase()}
                  </span>
                  {project.metrics && project.metrics.length > 0 && (
                    <span className="text-[11px] font-mono-tech px-2.5 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--accent-amber)] border border-amber-500/20">
                      {project.metrics[0].label}: {project.metrics[0].value}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-emerald)] transition-colors mb-2">
                  {project.title}
                </h3>
                
                <p className="text-xs font-mono-tech text-[var(--text-secondary)] mb-4">
                  {project.subtitle}
                </p>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)] mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono-tech px-2.5 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono-tech font-bold text-[var(--accent-emerald)] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-emerald)] transition-colors flex items-center gap-1.5 text-xs font-mono-tech"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repo ↗</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
