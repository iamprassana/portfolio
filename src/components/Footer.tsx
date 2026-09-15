'use client';

import React from 'react';
import { developerProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono-tech text-[var(--text-muted)]">
        
        <div>
          <div className="font-bold text-[var(--text-primary)]">
            {developerProfile.name}
          </div>
          <div>Software Engineer · {developerProfile.location}</div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={developerProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-emerald)] transition-colors"
          >
            GitHub
          </a>
          <a
            href={developerProfile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-emerald)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${developerProfile.email}`}
            className="hover:text-[var(--accent-emerald)] transition-colors"
          >
            Email
          </a>
        </div>

        <div className="text-right">
          <div>© {new Date().getFullYear()} Karthick Prassana</div>
          <div className="text-[10px] text-[var(--accent-emerald)] mt-0.5">
            Built with curiosity and too many commits.
          </div>
        </div>

      </div>
    </footer>
  );
};
