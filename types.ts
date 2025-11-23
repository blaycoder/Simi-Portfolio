export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string; // Placeholder URL
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
