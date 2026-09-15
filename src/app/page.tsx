'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { WhatIBuild } from '../components/WhatIBuild';
import { FeaturedWork } from '../components/FeaturedWork';
import { ProjectModal } from '../components/ProjectModal';
import { CapabilityModal, CapabilityDomain } from '../components/CapabilityModal';
import { TechStackMap } from '../components/TechStackMap';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedDomain, setSelectedDomain] = useState<CapabilityDomain | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Sticky Navigation Bar */}
      <Navbar
        activeTheme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />

        {/* What I Build (Capabilities - Clicking opens Domain Modal Module) */}
        <WhatIBuild onSelectDomain={(domain) => setSelectedDomain(domain)} />

        {/* Featured Projects (Clicking opens Case Study Modal) */}
        <FeaturedWork onSelectProject={(p) => setSelectedProject(p)} />

        {/* Tech Stack Map */}
        <TechStackMap />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Domain Capability Modal Module */}
      <CapabilityModal
        domain={selectedDomain}
        onClose={() => setSelectedDomain(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* Interactive Deep Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
