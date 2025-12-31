
export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'IA & Automation' | 'Database' | 'Tools';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  role: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}
