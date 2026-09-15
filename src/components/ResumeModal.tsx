'use client';

import React from 'react';
import { developerProfile } from '../data/portfolioData';
import { X, Download, FileText, CheckCircle2, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/markdown resume download blob
    const resumeText = `
KARTHICK PRASSANA R
Software Engineer | Computer Science Undergraduate @ VIT-AP University
Location: Amaravathi / Kovilpatti, India
Email: ${developerProfile.email}
GitHub: ${developerProfile.github}
LinkedIn: ${developerProfile.linkedin}

--------------------------------------------------------------------------------
EDUCATION
VIT-AP University | B.Tech in Computer Science & Engineering (2023 – 2027)
Academic CGPA: 9.03 / 10.0

Ravilla K.R.A Vidhyashram | Higher Secondary Education (March 2023)
Score: 92%

--------------------------------------------------------------------------------
TECHNICAL SKILLS
Languages: Java, C++, Kotlin, TypeScript, JavaScript, Dart
Backend & Frameworks: Spring Boot, Express.js, Node.js, REST APIs, JWT Authentication
Frontend & Mobile: React, Next.js, Flutter, Tailwind CSS, HTML5 Canvas APIs
Databases & Storage: PostgreSQL, Supabase, MongoDB, Prisma ORM, Qdrant Vector DB, Room DB
Infrastructure & AI: Apache Kafka, Git, Docker, Firebase, Gemini AI Embeddings, Postman

--------------------------------------------------------------------------------
PROJECTS & ENGINEERING HIGHLIGHTS

1. URL Shortener Backend & Analytics Platform | Spring Boot, Kafka, PostgreSQL, JWT, React
- Designed and implemented a horizontally scalable URL-shortening service in Spring Boot exposing versioned REST APIs.
- Secured all user endpoints with stateless JWT authentication and role-based authorization.
- Composed an event-driven analytics pipeline with Apache Kafka to process click events asynchronously, reducing average redirect latency by 58%.
- Introduced a real-time analytics dashboard in React visualizing click trends and visitor distributions.

2. Semantic Search Platform | Next.js, TypeScript, Prisma, Qdrant, Gemini AI
- Built an AI-powered semantic search platform performing vector-embedding retrieval with cosine-similarity search over a Qdrant index using Gemini AI.
- Architected a TurboRepo monorepo with Next.js, TypeScript, and Prisma for scalable, modular development.
- Evaluated retrieval quality observing over 95% precision for text queries and 85% for image queries.

3. Second Brain Knowledge System | React, TypeScript, Express.js, MongoDB, Tailwind CSS
- Full-stack knowledge management platform for capturing, organizing, and querying personal notes with cloud persistence.
- Implemented RESTful APIs using Express.js and MongoDB to support efficient CRUD operations.

4. ReaderPro (Google Solution Challenge Entry) | Flutter, Dart, Firebase
- Cross-platform assistive mobile reading application empowering accessible content consumption.

--------------------------------------------------------------------------------
CERTIFICATIONS & ACHIEVEMENTS
- Flipkart Grid 8.0 Semi-Finalist
- Google Solution Challenge Participant
- Smart India Hackathon Participant
- IBM Quantum Computing Certification
- Android & Java Development Certification
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Karthick_Prassana_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-[var(--bg-secondary)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[var(--accent-emerald)]" />
            <span className="text-xs font-mono-tech font-bold text-[var(--text-primary)]">
              Karthick Prassana — Official Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent-emerald)] text-slate-950 font-bold text-xs font-mono-tech hover:opacity-90 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[var(--bg-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Preview */}
        <div className="p-6 sm:p-8 space-y-8 font-mono-tech text-xs text-[var(--text-secondary)]">
          
          {/* Contact Bar */}
          <div className="space-y-2 border-b border-[var(--border-subtle)] pb-6">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] font-sans">
              Karthick Prassana R
            </h2>
            <div className="text-xs text-[var(--accent-emerald)]">
              B.Tech Computer Science Student · VIT-AP University (CGPA 9.03)
            </div>
            <div className="flex flex-wrap gap-4 text-[11px] text-[var(--text-muted)] pt-1">
              <span>Email: {developerProfile.email}</span>
              <span>GitHub: github.com/iamprassana</span>
              <span>Location: Amaravathi / Kovilpatti, India</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase text-[var(--accent-emerald)] tracking-wider">
              Education
            </div>
            <div className="space-y-2 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
              <div className="flex justify-between font-bold text-[var(--text-primary)]">
                <span>VIT-AP University — B.Tech Computer Science</span>
                <span className="text-[var(--accent-amber)]">CGPA 9.03 / 10.0</span>
              </div>
              <div className="text-[11px] text-[var(--text-muted)]">2023 – 2027 · Amaravathi, India</div>
              <div className="pt-2 flex justify-between font-bold text-[var(--text-primary)]">
                <span>Ravilla K.R.A Vidhyashram — Higher Secondary</span>
                <span>Score: 92%</span>
              </div>
            </div>
          </div>

          {/* Core Skills */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase text-[var(--accent-emerald)] tracking-wider">
              Technical Skills
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                <span className="text-bold text-[var(--text-primary)]">Languages:</span> Java, C++, Kotlin, TypeScript, JavaScript, Dart
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                <span className="text-bold text-[var(--text-primary)]">Backend:</span> Spring Boot, Express.js, REST APIs, Kafka, JWT Auth
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                <span className="text-bold text-[var(--text-primary)]">Frontend & Mobile:</span> React, Next.js, Flutter, Tailwind CSS, Canvas
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                <span className="text-bold text-[var(--text-primary)]">Databases & AI:</span> PostgreSQL, Supabase, MongoDB, Qdrant, Gemini AI
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase text-[var(--accent-emerald)] tracking-wider">
              Selected Engineering Projects
            </div>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-1.5">
                <div className="font-bold text-[var(--text-primary)]">URL Manager | Spring Boot, Kafka, PostgreSQL, JWT</div>
                <p className="text-[11px] leading-relaxed">
                  • Designed horizontally scalable shortener exposing REST APIs with stateless JWT auth.<br />
                  • Event-driven analytics pipeline with Apache Kafka cut redirect response latency by 58%.<br />
                  • React analytics dashboard visualizing click events and visitor geographical trends.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-1.5">
                <div className="font-bold text-[var(--text-primary)]">Semantic Search Platform | Next.js, Prisma, Qdrant, Gemini AI</div>
                <p className="text-[11px] leading-relaxed">
                  • Vector-embedding retrieval over Qdrant index with Gemini AI embeddings in Next.js monorepo.<br />
                  • Evaluated retrieval precision observing &gt;95% for text queries and &gt;85% for image queries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-1.5">
                <div className="font-bold text-[var(--text-primary)]">Second Brain | React, Express.js, MongoDB, TypeScript</div>
                <p className="text-[11px] leading-relaxed">
                  • Full-stack knowledge management system with RESTful Express APIs and MongoDB cloud persistence.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase text-[var(--accent-emerald)] tracking-wider">
              Achievements & Certifications
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                🏆 Flipkart Grid 8.0 Semi-Finalist
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                🌐 Google Solution Challenge Participant (ReaderPro)
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                📜 IBM Quantum Computing Certification
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)]">
                📜 Android and Java Certification
              </div>
            </div>
          </div>

        </div>

        {/* Sticky Footer */}
        <div className="sticky bottom-0 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] px-6 py-4 flex items-center justify-between">
          <span className="text-xs font-mono-tech text-[var(--text-muted)]">
            Verified Resume Document
          </span>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--accent-emerald)] text-slate-950 font-bold text-xs font-mono-tech hover:opacity-90"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Copy</span>
          </button>
        </div>

      </div>
    </div>
  );
};
