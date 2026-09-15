'use client';

import React from 'react';
import { engineeringPrinciples } from '../data/portfolioData';
import { Terminal, CheckCircle } from 'lucide-react';

export const EngineeringPrinciples: React.FC = () => {
  return (
    <section id="principles" className="py-24 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-emerald)] mb-2">
              05 // Engineering Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              How I Think About Software
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md">
            Pragmatic software principles derived from building event-driven microservices, vector search platforms, and production codebases.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engineeringPrinciples.map((principle) => (
            <div
              key={principle.number}
              className="tech-card rounded-2xl p-8 flex flex-col justify-between space-y-6 group hover:border-[var(--accent-emerald)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-tech px-2.5 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--accent-emerald)] border border-[var(--border-subtle)]">
                    Principle {principle.number}
                  </span>
                  <span className="text-[10px] font-mono-tech text-[var(--accent-amber)]">
                    Verified Pattern
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-emerald)] transition-colors mb-2">
                  {principle.title}
                </h3>
                
                <p className="text-xs font-mono-tech text-[var(--accent-emerald)] mb-4">
                  {principle.subtitle}
                </p>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Code Snippet Box if available */}
              {principle.codeSnippet && (
                <div className="rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] p-4 font-mono-tech overflow-x-auto">
                  <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)] pb-2 mb-2 border-b border-[var(--border-subtle)]">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3 h-3 text-[var(--accent-emerald)]" />
                      Code Pattern
                    </span>
                    <span>Production Snippet</span>
                  </div>
                  <pre className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                    <code>{principle.codeSnippet}</code>
                  </pre>
                </div>
              )}

              <div className="flex items-center gap-2 text-xs font-mono-tech text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)]">
                <CheckCircle className="w-3.5 h-3.5 text-[var(--accent-emerald)] flex-shrink-0" />
                <span>{principle.realWorldExample}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
