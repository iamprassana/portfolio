'use client';

import React from 'react';
import { featuredProjects, secondaryProjects } from '../data/portfolioData';
import { Project } from '../types';
import { CapabilityDomain } from './CapabilityModal';
import { Server, Sparkles, Smartphone, Terminal, ArrowUpRight } from 'lucide-react';

interface WhatIBuildProps {
  onSelectDomain: (domain: CapabilityDomain) => void;
}

export const WhatIBuild: React.FC<WhatIBuildProps> = ({ onSelectDomain }) => {
  // Combine all projects for domain lookup
  const allProjects = [...featuredProjects, ...secondaryProjects];

  const getProjectsByIds = (ids: string[]): Project[] => {
    return allProjects.filter((p) => ids.includes(p.id));
  };

  const capabilityDomains: (Omit<CapabilityDomain, 'projects'> & { icon: React.ElementType; projectIds: string[] })[] = [
    {
      id: 'backend',
      icon: Server,
      title: 'Backend & Event-Driven Systems',
      subtitle: 'APIs, async pipelines, authentication & relational data modeling.',
      description: 'Building horizontally scalable REST services in Spring Boot and Express. Decoupling latency-critical write flows using Apache Kafka event streams to reduce HTTP redirect latency by 58%. Implementing stateless JWT authentication and normalized PostgreSQL schemas.',
      techBadges: ['Spring Boot', 'Apache Kafka', 'PostgreSQL', 'JWT Auth', 'REST APIs', 'Supabase'],
      highlightMetric: '-58% Async Redirect Latency',
      projectIds: ['url-shortener-backend', 'realtime-chat', 'express-jwt']
    },
    {
      id: 'ai',
      icon: Sparkles,
      title: 'AI & Semantic Information Retrieval',
      subtitle: 'Vector databases, LLM embedding pipelines & monorepo architecture.',
      description: 'Constructing high-precision vector search platforms over Qdrant index using Gemini AI embeddings. Structured within TurboRepo monorepos for type-safe document ingestion pipelines achieving over 95% text precision and 85% image precision.',
      techBadges: ['Next.js Monorepo', 'Qdrant Vector DB', 'Gemini AI', 'Prisma ORM', 'TypeScript', 'TurboRepo'],
      highlightMetric: '>95% Text Retrieval Precision',
      projectIds: ['semantic-search-platform', 'second-brain']
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile & Cross-Platform Engineering',
      subtitle: 'Flutter UI widgets, native Android Kotlin & Firebase backends.',
      description: 'Engineering responsive cross-platform applications in Flutter and native Android (Kotlin). Focused on accessible user experiences (Google Solution Challenge ReaderPro), local SQLite/Room caching, and clean architecture state management.',
      techBadges: ['Flutter / Dart', 'Android (Kotlin)', 'Firebase', 'Room DB', 'SQLite', 'Provider / Bloc'],
      highlightMetric: 'Google Solution Challenge Entry',
      projectIds: ['reader-pro', 'finance-tracker', 'bill-app', 'question-bank']
    },
    {
      id: 'fullstack',
      icon: Terminal,
      title: 'Full-Stack & Developer Tools',
      subtitle: 'Canvas rendering engines, TypeScript tooling & knowledge platforms.',
      description: 'Developing interactive web applications, high-performance HTML5 Canvas drawing engines (60FPS path rendering), knowledge organization platforms (Second Brain), and TypeScript CLI source code scanners.',
      techBadges: ['React', 'TypeScript', 'HTML5 Canvas', 'Express.js', 'MongoDB', 'CLI Stream Parsers'],
      highlightMetric: '60FPS Canvas Render Engine',
      projectIds: ['draw-app', 'url-detector', 'fingerprint-payment']
    }
  ];

  const handleCardClick = (domainItem: typeof capabilityDomains[0]) => {
    const fullDomain: CapabilityDomain = {
      id: domainItem.id,
      title: domainItem.title,
      subtitle: domainItem.subtitle,
      description: domainItem.description,
      highlightMetric: domainItem.highlightMetric,
      techBadges: domainItem.techBadges,
      projects: getProjectsByIds(domainItem.projectIds)
    };
    onSelectDomain(fullDomain);
  };

  return (
    <section id="capabilities" className="py-24 relative border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-emerald)] mb-2">
              01 // Core Capabilities & Domain Modules
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              What I Build
            </h2>
          </div>
          <p className="text-sm text-[var(--text-secondary)] max-w-md">
            Click any capability card to pop up the domain module and explore all projects built in that engineering domain.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilityDomains.map((cap) => {
            const Icon = cap.icon;
            const projectCount = cap.projectIds.length;

            return (
              <div
                key={cap.id}
                onClick={() => handleCardClick(cap)}
                className="tech-card rounded-2xl p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden hover:border-[var(--accent-emerald)] transition-all"
              >
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent-emerald)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-emerald)] group-hover:border-[var(--accent-emerald)] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono-tech px-3 py-1 rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-amber)] border border-amber-500/20">
                      {cap.highlightMetric}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-emerald)] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-mono-tech text-[var(--accent-emerald)] mb-4">
                    {cap.subtitle}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-subtle)] mb-4">
                    {cap.techBadges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[11px] font-mono-tech px-2.5 py-1 rounded bg-[var(--bg-tertiary)] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono-tech text-[var(--text-muted)] pt-2">
                    <span className="text-[var(--text-primary)] font-bold">{projectCount} Projects Built</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(cap);
                      }}
                      className="text-[var(--accent-emerald)] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Domain Module</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
