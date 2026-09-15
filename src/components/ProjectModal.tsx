'use client';

import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { Github } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

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
              Case Study
            </span>
            <span className="text-xs font-mono-tech text-[var(--text-muted)] truncate max-w-xs sm:max-w-md">
              {project.title}
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
        <div className="p-6 sm:p-8 space-y-10">
          
          {/* Title Header */}
          <div className="space-y-3 pb-6 border-b border-[var(--border-subtle)]">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              {project.title}
            </h2>
            <p className="text-base font-mono-tech text-[var(--accent-emerald)]">
              {project.subtitle}
            </p>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed pt-2">
              {project.summary}
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-emerald)] text-slate-950 font-bold text-xs font-mono-tech hover:opacity-90 transition-opacity"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] text-xs font-mono-tech hover:border-[var(--accent-emerald)] transition-colors"
                >
                  <span>Live Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* 01 Overview & Metrics */}
          <div className="space-y-4">
            <div className="text-xs font-mono-tech uppercase text-[var(--accent-emerald)] tracking-wider">
              01 // Overview & Impact Metrics
            </div>
            {project.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                    <div className="text-xs font-mono-tech text-[var(--text-muted)]">{m.label}</div>
                    <div className="text-2xl font-bold text-[var(--accent-emerald)] font-mono-tech mt-1">{m.value}</div>
                    {m.change && <div className="text-xs text-[var(--text-muted)] mt-0.5">{m.change}</div>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 02 Problem */}
          <div className="space-y-3">
            <div className="text-xs font-mono-tech uppercase text-amber-400 tracking-wider">
              02 // The Problem
            </div>
            <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.problem}
            </div>
          </div>

          {/* 03 Solution */}
          <div className="space-y-3">
            <div className="text-xs font-mono-tech uppercase text-[var(--accent-emerald)] tracking-wider">
              03 // Solution & Engineering Approach
            </div>
            <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.solution}
            </div>
          </div>

          {/* 04 Architecture & Diagrams */}
          <div className="space-y-4">
            <div className="text-xs font-mono-tech uppercase text-[var(--accent-emerald)] tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              <span>04 // Architecture: {project.architecture.title}</span>
            </div>
            
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.architecture.description}
            </p>

            {/* Diagram Flow Steps */}
            {project.architecture.diagramSteps && (
              <div className="p-5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-3 font-mono-tech">
                <div className="text-xs font-bold text-[var(--text-primary)] mb-2">Execution Flow:</div>
                {project.architecture.diagramSteps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3 text-xs text-[var(--text-secondary)]">
                    <span className="w-5 h-5 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-subtle)] text-[var(--accent-emerald)] flex items-center justify-center flex-shrink-0 text-[10px]">
                      {sIdx + 1}
                    </span>
                    <span className="pt-0.5">{step}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 05 Tech Stack */}
          <div className="space-y-3">
            <div className="text-xs font-mono-tech uppercase text-[var(--accent-emerald)] tracking-wider">
              05 // Technologies & Libraries
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono-tech px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-subtle)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 06 Engineering Decisions */}
          <div className="space-y-3">
            <div className="text-xs font-mono-tech uppercase text-[var(--accent-emerald)] tracking-wider">
              06 // Key Engineering Decisions
            </div>
            <div className="space-y-2">
              {project.engineeringDecisions.map((dec, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent-emerald)] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {dec}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 07 What I Learned */}
          <div className="space-y-3 pt-4 border-t border-[var(--border-subtle)]">
            <div className="text-xs font-mono-tech uppercase text-[var(--accent-amber)] tracking-wider">
              07 // Key Engineering Takeaways & Lessons
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed italic bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-subtle)]">
              "{project.whatILearned}"
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] px-6 py-4 flex items-center justify-between">
          <span className="text-xs font-mono-tech text-[var(--text-muted)]">
            Karthick Prassana Engineering Workspace
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[var(--accent-emerald)] text-slate-950 font-bold text-xs font-mono-tech hover:opacity-90 transition-opacity"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
