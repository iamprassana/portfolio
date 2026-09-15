'use client';

import React, { useState } from 'react';
import { developerProfile } from '../data/portfolioData';
import { Mail, Copy, Check, Send, ArrowUpRight, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const getGmailUrl = (name: string, senderEmail: string, messageText: string) => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nSender Email: ${senderEmail}\n\nMessage / Inquiry Details:\n${messageText}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${developerProfile.email}&su=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    const gmailUrl = getGmailUrl(formData.name, formData.email, formData.message);
    
    // Open Gmail web composer directly in a new tab
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    setFormSubmitted(true);
  };

  const directGmailUrl = getGmailUrl('Visitor', '', '');

  return (
    <section id="contact" className="py-24 relative border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Editorial Text & Direct Triggers */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono-tech uppercase tracking-widest text-[var(--accent-emerald)]">
              05 // Contact & Opportunities
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
              Have something worth building? <br />
              <span className="text-[var(--accent-emerald)]">Let's talk.</span>
            </h2>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-md">
              Available for Software Engineering roles, backend microservice projects, distributed systems research, and full-stack/mobile application development.
            </p>

            {/* Email Copy & Gmail Direct Link Card */}
            <div className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] space-y-3 font-mono-tech">
              <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
                Direct Email Address
              </div>

              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
                <a
                  href={directGmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-[var(--text-primary)] font-bold truncate hover:text-[var(--accent-emerald)] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[var(--accent-emerald)]" />
                  <span className="truncate">{developerProfile.email}</span>
                  <ExternalLink className="w-3 h-3 text-[var(--text-muted)]" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--accent-emerald)] text-slate-950 font-bold text-xs hover:opacity-90 transition-opacity flex-shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-2 font-mono-tech text-xs">
              <a
                href={developerProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-emerald)] hover:text-[var(--accent-emerald)] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={developerProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-emerald)] hover:text-[var(--accent-emerald)] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Interactive Quick Message Form */}
          <div className="lg:col-span-6">
            <div className="tech-card rounded-2xl p-8 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[var(--text-muted)]">
                  Gmail Web Composer
                </span>
                <span className="text-[10px] font-mono-tech px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--accent-emerald)]">
                  Opens in Gmail ↗
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-3 animate-fadeIn font-mono-tech">
                  <Check className="w-8 h-8 text-[var(--accent-emerald)] mx-auto" />
                  <div className="text-sm font-bold text-[var(--text-primary)]">Opened in Gmail!</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Gmail Web Composer opened in a new tab addressed to <strong className="text-[var(--accent-emerald)]">{developerProfile.email}</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 px-4 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] hover:border-[var(--accent-emerald)]"
                  >
                    Compose Another Email
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono-tech text-xs">
                  <div>
                    <label className="block text-[var(--text-muted)] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager / Engineer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-emerald)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[var(--text-muted)] mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-emerald)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[var(--text-muted)] mb-1">Message / Opportunity Details</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Discuss project requirements, role openings, or engineering opportunities..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-emerald)] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent-emerald)] text-slate-950 font-bold hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Gmail Web ↗</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
