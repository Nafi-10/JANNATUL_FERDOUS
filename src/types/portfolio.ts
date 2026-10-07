export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  deliverables: string[];
  tools: string[];
  challenge: string;
  solution: string;
  impact: string;
  link?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface Insight {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  focus: string[];
}
