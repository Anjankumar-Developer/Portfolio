
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  category: 'AI' | 'Web' | 'Mobile';
}

export interface Skill {
  name: string;
  icon?: string;
  level?: number;
  category: 'Languages' | 'Frontend' | 'Backend' | 'AI / ML' | 'Tools' | 'Databases' | 'UI/UX & Design' | 'Mobile Development';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
