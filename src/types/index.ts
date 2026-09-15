export type CategoryType = 
  | 'all'
  | 'backend'
  | 'ai'
  | 'mobile'
  | 'fullstack'
  | 'tools';

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface ArchitectureDetail {
  title: string;
  description: string;
  diagramSteps?: string[];
  keyComponents?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: CategoryType;
  featured: boolean;
  tags: string[];
  summary: string;
  problem: string;
  solution: string;
  architecture: ArchitectureDetail;
  engineeringDecisions: string[];
  whatILearned: string;
  githubUrl: string;
  liveUrl?: string;
  metrics?: ProjectMetric[];
  stars?: number;
  updatedAt?: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: 'Languages' | 'Backend & Distributed' | 'Frontend & AI' | 'Databases & Storage' | 'DevOps & Tools';
  iconName: string;
  description: string;
  projectsUsed: {
    id: string;
    name: string;
    context: string;
  }[];
}

export interface EngineeringPrinciple {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  codeSnippet?: string;
  realWorldExample: string;
}

export interface Milestone {
  id: string;
  period: string;
  year: string;
  title: string;
  organization: string;
  location?: string;
  type: 'education' | 'achievement' | 'certification' | 'project';
  description: string;
  highlights: string[];
  badge?: string;
  link?: string;
}

export interface DeveloperProfile {
  name: string;
  handle: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  university: string;
  degree: string;
  cgpa: string;
  graduationYear: string;
  email: string;
  github: string;
  linkedin: string;
  stats: {
    publicRepos: number;
    cgpa: string;
    latencyReduction: string;
    vectorPrecision: string;
  };
}
