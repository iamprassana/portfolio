'use client';

import React, { useState } from 'react';
import { developerProfile } from '../data/portfolioData';
import { ArrowUpRight, FileText, Server, Cpu, Database, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

const RESUME_DRIVE_URL = 'https://drive.google.com/file/d/1iCEIAP0YkknsGhn5La8m-Nt6ZrmEND-Z/view?usp=drive_link';

export const HeroSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('kafka');

  const topologyNodes = [
    {
      id: 'client',
      name: 'Client Applications',
      type: 'Frontend & Mobile',
      icon: Layers,
      tech: 'Flutter / React / Next.js',
      detail: 'Stateful UI components, canvas engines & mobile cross-platform widgets communicating with REST & WebSocket endpoints.'
    },
    {
      id: 'gateway',
      name: 'Spring Boot Gateway',
      type: 'Backend REST API',
      icon: Server,
      tech: 'Spring Boot / JWT Auth',
      detail: 'Layered controller-service-repository architecture exposing versioned REST APIs with stateless JWT token authorization.'
    },
    {
      id: 'kafka',
      name: 'Kafka Event Broker',
      type: 'Async Streaming',
      icon: Cpu,
      tech: 'Apache Kafka Pipeline',
      detail: 'Asynchronous event stream processing click analytics, reducing redirect response latency by 58% vs synchronous writes.'
    },
    {
      id: 'qdrant',
      name: 'Qdrant Vector Engine',
      type: 'AI Search Index',
      icon: Sparkles,
      tech: 'Qdrant + Gemini AI Embeddings',
      detail: 'Cosine-similarity vector retrieval pipeline achieving over 95% precision for text queries and 85% for image inputs.'
    },
    {
      id: 'db',
      name: 'PostgreSQL & Supabase',
      type: 'Database Engine',
      icon: Database,
      tech: 'PostgreSQL / Prisma ORM',
      detail: 'Normalized relational schemas for user accounts, shortened URLs, click events, and aggregated analytics records.'
    }
  ];

  const activeNodeData = topologyNodes.find((n) => n.id === selectedNode) || topologyNodes[2];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-xs font-mono-tech text-[var(--accent-emerald)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-emerald)]"></span>
              <span>Computer Science Undergraduate @ VIT-AP · CGPA 9.03</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
                Karthick Prassana
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[var(--accent-emerald)]">
                Software Engineer building scalable backend systems, AI platforms & mobile applications.
              </p>
            </div>

            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              Focusing on high-throughput backend services (Spring Boot, Apache Kafka), vector search engine optimization (Qdrant, Gemini AI embeddings), and clean cross-platform products (Flutter, Next.js). Experienced in designing RESTful APIs, event-driven pipelines, and normalized PostgreSQL schemas.
            </p>

            {/* Quick System Badge Bar */}
            <div className="flex flex-wrap gap-2 pt-1 font-mono-tech text-xs text-[var(--text-muted)]">
              <span className="px-2.5 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">Java / Spring Boot</span>
              <span className="px-2.5 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">Apache Kafka</span>
              <span className="px-2.5 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">TypeScript / Next.js</span>
              <span className="px-2.5 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">Flutter</span>
              <span className="px-2.5 py-1 rounded bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">PostgreSQL</span>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--accent-emerald)] text-slate-950 font-semibold text-sm hover:opacity-95 transition-all shadow-md shadow-emerald-950/20"
              >
                <span>View Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={developerProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-medium text-sm hover:border-[var(--accent-emerald)] hover:text-[var(--accent-emerald)] transition-all"
              >
                <span>GitHub ↗</span>
              </a>

              <a
                href={RESUME_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-dashed border-[var(--border-subtle)] text-[var(--text-secondary)] font-mono-tech text-xs hover:text-[var(--text-primary)] hover:border-[var(--accent-emerald)] transition-all"
              >
                <FileText className="w-4 h-4 text-[var(--accent-emerald)]" />
                <span>Resume ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive System Topology Visualizer */}
          <div className="lg:col-span-5">
            <div className="tech-card rounded-2xl p-6 relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent-emerald)] animate-pulse"></div>
                  <span className="text-xs font-mono-tech uppercase tracking-wider text-[var(--text-muted)]">
                    System Topology Visualizer
                  </span>
                </div>
                <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--accent-amber)] border border-amber-500/20">
                  Interactive Node Map
                </span>
              </div>

              {/* Topology Nodes Flow */}
              <div className="space-y-3 mb-6">
                {topologyNodes.map((node) => {
                  const Icon = node.icon;
                  const isSelected = node.id === selectedNode;

                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-[var(--bg-tertiary)] border-[var(--accent-emerald)] shadow-sm'
                          : 'bg-[var(--bg-secondary)] border-[var(--border-subtle)] hover:border-[var(--text-muted)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'bg-[var(--accent-emerald)] text-slate-950'
                              : 'bg-[var(--bg-primary)] text-[var(--text-muted)]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-[var(--text-primary)]">{node.name}</div>
                          <div className="text-[10px] font-mono-tech text-[var(--text-muted)]">{node.tech}</div>
                        </div>
                      </div>

                      {isSelected ? (
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-emerald)]" />
                      ) : (
                        <span className="text-[10px] font-mono-tech text-[var(--text-muted)] group-hover:text-[var(--text-primary)]">
                          Inspect ↗
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Node Detail Box */}
              <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--accent-emerald)]">{activeNodeData.name}</span>
                  <span className="text-[10px] font-mono-tech text-[var(--accent-amber)] px-2 py-0.5 rounded bg-[var(--bg-tertiary)]">
                    {activeNodeData.type}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-mono-tech">
                  {activeNodeData.detail}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
