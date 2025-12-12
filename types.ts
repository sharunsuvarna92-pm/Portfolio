
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  role: string;
  summary: string;
  star: {
    situation: string;
    task: string;
    action: string[];
    result: string[];
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface MethodologyStep {
  title: string;
  description: string;
  icon: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  logoUrl: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
}
