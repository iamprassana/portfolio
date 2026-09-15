'use client';

import React, { useState, useEffect } from 'react';
import { developerProfile } from '../data/portfolioData';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';

const RESUME_DRIVE_URL = 'https://drive.google.com/file/d/1iCEIAP0YkknsGhn5La8m-Nt6ZrmEND-Z/view?usp=drive_link';

interface NavbarProps {
  activeTheme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTheme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border-subtle)] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand / Name & Status */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center font-mono-tech text-xs font-bold text-[var(--accent-emerald)] group-hover:border-[var(--accent-emerald)] transition-colors">
            KP
          </div>
          <div>
            <div className="font-semibold text-sm tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-emerald)] transition-colors">
              {developerProfile.name}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-[var(--text-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)] animate-pulse"></span>
              <span>Available for SDE Roles</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent-emerald)] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle, Resume Link & GitHub */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-emerald)] transition-colors"
          >
            {activeTheme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <a
            href={RESUME_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono-tech px-3 py-1.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-emerald)] hover:text-[var(--accent-emerald)] transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume ↗</span>
          </a>

          <a
            href={developerProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-mono-tech px-3 py-1.5 rounded-lg bg-[var(--accent-emerald)] text-slate-950 font-semibold hover:opacity-90 transition-opacity"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
          >
            {activeTheme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] px-4 pt-3 pb-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-emerald)] py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={RESUME_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-[var(--border-subtle)] text-xs font-mono-tech text-[var(--text-primary)]"
            >
              <FileText className="w-4 h-4" />
              <span>Resume ↗</span>
            </a>
            <a
              href={developerProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-[var(--accent-emerald)] text-slate-950 font-semibold text-xs font-mono-tech"
            >
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
