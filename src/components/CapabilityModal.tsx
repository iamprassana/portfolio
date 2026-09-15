'use client';

import React from 'react';
import { Project } from '../types';
import { X, ArrowUpRight, BookOpen, Layers } from 'lucide-react';
import { Github } from './Icons';

export interface CapabilityDomain {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlightMetric: string;
  techBadges: string[];
  projects: Project[];
}

interface CapabilityModalProps {
  domain: CapabilityDomain | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const CapabilityModal: React.FC<CapabilityModalProps> = ({ domain, onClose, onSelectProject }) => {
  if (!domain) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[var(--bg-secondary)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono-tech px-2.5 py-1 rounded bg-[var(--accent-emerald)] text-slate-950 font-bold uppercase">
              Domain Portfolio
            </span>
            <span className="text-xs font-mono-tech text-[var(--text-muted)] truncate max-w-xs sm:max-w-md">
              {domain.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-emerald)] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Header Info */}
          <div className="space-y-3 pb-6 border-b border-[var(--border-subtle)]">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                {domain.title}
              </h2>
              <span className="text-xs font-mono-tech px-3 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-amber)] border border-amber-500/20">
                {domain.highlightMetric}
              </span>
            </div>

            <p className="text-xs font-mono-tech text-[var(--accent-emerald)]">
              {domain.subtitle}
            </p>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {domain.description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {domain.techBadges.map((badge) => (
                <span
                  key={badge}
                  className="text-[11px] font-mono-tech px-2.5 py-1 rounded bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Mapped Projects List */}
          <div className="space-y-4">
            <div className="text-xs font-mono-tech uppercase tracking-wider text-[var(--accent-emerald)] flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Projects Built in this Domain ({domain.projects.length})</span>
            </div>

            <div className="space-y-6">
              {domain.projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="tech-card rounded-xl p-6 relative group hover:border-[var(--accent-emerald)] transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono-tech text-[var(--accent-emerald)]">
                          0{idx + 1}
                        </span>
                        <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-emerald)] transition-colors">
                          {proj.title}
                        </h3>
                      </div>
                      <p className="text-xs font-mono-tech text-[var(--text-secondary)] mt-0.5">
                        {proj.subtitle}
                      </p>
                    </div>

                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-emerald)] transition-colors flex items-center gap-1.5 text-xs font-mono-tech w-fit"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repo ↗</span>
                    </a>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {proj.summary}
                  </p>

                  {/* Project Metrics if available */}
                  {proj.metrics && proj.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.metrics.map((m, mIdx) => (
                        <span key={mIdx} className="text-[10px] font-mono-tech px-2.5 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--accent-amber)] border border-[var(--border-subtle)]">
                          {m.label}: {m.value}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action to open full case study */}
                  <div className="pt-3 border-t border-[var(--border-subtle)] flex justify-end">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProject(proj);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--accent-emerald)] text-slate-950 font-bold text-xs font-mono-tech hover:opacity-90 transition-opacity"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Inspect Deep Case Study</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] px-6 py-4 flex items-center justify-between">
          <span className="text-xs font-mono-tech text-[var(--text-muted)]">
            Karthick Prassana Capability Domain Module
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[var(--accent-emerald)] text-slate-950 font-bold text-xs font-mono-tech hover:opacity-90"
          >
            Close Domain Module
          </button>
        </div>

      </div>
    </div>
  );
};
