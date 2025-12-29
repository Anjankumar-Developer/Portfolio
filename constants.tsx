
import React from 'react';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Smartphone, 
  Database, 
  Zap, 
  Layers, 
  Sparkles,
  Github,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react';
import { Project, Skill, Experience } from './types';

export const THEME_COLORS = {
  accent: '#D4AF37',
  accentSecondary: '#B8860B',
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'CodeMind — AI Code Generation Assistant',
    description: 'CodeMind is a specialized AI-powered code generation assistant that deeply understands developer intent, context, and project structure to deliver high-accuracy Python and JavaScript code.',
    tags: ['Python', 'HuggingFace Transformers', 'PyTorch', 'QLoRA', 'PEFT', 'Colab / GPU'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    category: 'AI',
    github: 'https://github.com',
    live: 'https://demo.com'
  },
  {
    id: '2',
    title: 'Nexus AI Engine',
    description: 'A cutting-edge large language model orchestration platform capable of multi-agent collaboration and real-time reasoning across complex datasets.',
    tags: ['Next.js', 'FastAPI', 'OpenAI', 'LangChain', 'Pinecone'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop',
    category: 'AI',
    github: 'https://github.com',
    live: 'https://demo.com'
  },
  {
    id: '3',
    title: 'Zenith OS — Virtual Collaboration',
    description: 'A cloud-based virtual operating system prototype built for high-performance creative collaboration and real-time remote infrastructure management.',
    tags: ['TypeScript', 'Node.js', 'Docker', 'AWS', 'WebRTC'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98aadebc25a?q=80&w=2070&auto=format&fit=crop',
    category: 'Web',
    github: 'https://github.com',
    live: 'https://demo.com'
  },
  {
    id: '4',
    title: 'Etherium Flow Dashboard',
    description: 'A decentralized finance dashboard with real-time liquidity tracking and predictive analytics for yield farming strategies.',
    tags: ['React Native', 'Solidity', 'GraphQL', 'Tailwind', 'Ethers.js'],
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop',
    category: 'Mobile',
    github: 'https://github.com'
  },
  {
    id: '5',
    title: 'Solaris UI — Design System',
    description: 'A high-performance component library built with WebGL acceleration for ultra-smooth 60fps animations in enterprise data applications.',
    tags: ['Three.js', 'React', 'Framer Motion', 'TypeScript', 'GLSL'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    category: 'Web',
    github: 'https://github.com',
    live: 'https://demo.com'
  },
  {
    id: '6',
    title: 'Quantify AI — Market Engine',
    description: 'Advanced financial modeling engine leveraging reinforcement learning to simulate and predict market volatility with high precision.',
    tags: ['Python', 'TensorFlow', 'PostgreSQL', 'FastAPI', 'Redis'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
    category: 'AI',
    github: 'https://github.com',
    live: 'https://demo.com'
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'C/C++', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'HTML', category: 'Languages' },
  { name: 'CSS', category: 'Languages' },

  // Frontend
  { name: 'React.js', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vite', category: 'Frontend' },
  { name: 'Three.js', category: 'Frontend' },
  { name: 'Framer Motion', category: 'Frontend' },

  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },

  // AI / ML
  { name: 'FinBERT', category: 'AI / ML' },
  { name: 'Numpy', category: 'AI / ML' },
  { name: 'Pandas', category: 'AI / ML' },
  { name: 'Scikit-learn', category: 'AI / ML' },
  { name: 'TensorFlow', category: 'AI / ML' },
  { name: 'PyTorch', category: 'AI / ML' },
  { name: 'LangChain', category: 'AI / ML' },
  { name: 'LLMs', category: 'AI / ML' },
  { name: 'OpenAI', category: 'AI / ML' },
  { name: 'Hugging Face', category: 'AI / ML' },
  { name: 'Vector Databases', category: 'AI / ML' },

  // Mobile Development
  { name: 'React Native', category: 'Mobile Development' },
  { name: 'Flutter', category: 'Mobile Development' },
  { name: 'Dart', category: 'Mobile Development' },
  { name: 'Expo', category: 'Mobile Development' },
  { name: 'Kotlin', category: 'Mobile Development' },
  { name: 'Swift', category: 'Mobile Development' },
  { name: 'Jetpack Compose', category: 'Mobile Development' },
  { name: 'SwiftUI', category: 'Mobile Development' },
  { name: 'Android Studio', category: 'Mobile Development' },
  { name: 'Xcode', category: 'Mobile Development' },
  { name: 'Firebase (FCM)', category: 'Mobile Development' },
  { name: 'SQLite / Room', category: 'Mobile Development' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
  { name: 'Jupyter Notebook', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'AWS', category: 'Tools' },
  { name: 'GitHub Actions', category: 'Tools' },

  // Databases & Infrastructure
  { name: 'MongoDB Atlas', category: 'Databases' },
  { name: 'Firebase', category: 'Databases' },
  { name: 'Render', category: 'Databases' },
  { name: 'Netlify', category: 'Databases' },
  { name: 'Vercel', category: 'Databases' },

  // UI/UX & Design
  { name: 'Tailwind CSS', category: 'UI/UX & Design' },
  { name: 'Material UI', category: 'UI/UX & Design' },
  { name: 'Responsive Design', category: 'UI/UX & Design' },
  { name: 'Figma', category: 'UI/UX & Design' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Malla Reddy College of Engineering and Technology',
    role: 'Student Placement Coordinator',
    period: 'Sep 2025 – Present',
    description: [
      'Managed placement operations for 1500+ students by coordinating with recruiters and departments.',
      'Streamlined communication workflows, reducing overall process delays by 30%.'
    ]
  },
  {
    company: 'Vishwam.AI – Summer of AI',
    role: 'AI Intern',
    period: 'June 2025 – Aug 2025',
    description: [
      'Deployed RAG and Telugu LLM models using Python, Docker, and MLOps practices.',
      'Improved inference efficiency by 20% through optimization and architectural refinements.'
    ]
  },
  {
    company: 'Vidhyashala',
    role: 'Artificial Intelligence Trainee',
    period: 'Feb 2025 – Apr 2025',
    description: [
      'Completed comprehensive Artificial Intelligence training program.',
      'Learned AI fundamentals, machine learning concepts, and practical applications.',
      'Developed proficiency in AI frameworks and LLM-based solutions.',
      'Recognized for dedication, hard work, and intelligence in the training program.'
    ]
  }
];

export const SOCIALS = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'Linkedin', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Mail', icon: Mail, href: 'mailto:contact@example.com' },
];
