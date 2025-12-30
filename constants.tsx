
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
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Finlytics — AI Financial Analytics',
    description: 'Finlytics is an AI-powered financial analytics platform that provides real-time insights and predictive analytics for personal and business finance management. It leverages advanced machine learning algorithms to analyze spending patterns, forecast cash flows, and optimize investment strategies.',
    tags: ['React', 'Next.js', 'Python', 'LLM APIs', 'Prompt Engineering', 'Tailwind CSS', 'Data Visualization','SQL/NoSQL', 'Docker'],
    image: 'https://img.freepik.com/premium-photo/inclusive-digital-marketing-campaign-metrics-dashboard_1029473-773316.jpg?semt=ais_hybrid&w=740&q=80',
    category: 'Web',
    github: 'https://github.com/Anjankumar-Developer/Google-Agentic-AI',
    live: 'https://demo.com'
  },
  {
    id: '2',
    title: 'Radar-CME — Space Weather Prediction System',
    description: 'Radar-CME is a machine learning system that predicts coronal mass ejections (CMEs) using real-time and historical space weather data from NASA and NOAA sources. The system uses deep learning models to analyze the data and make predictions on when CMEs are likely to occur.',
    tags: ['Python', 'Scikit-learn', 'PyTorch', 'Numpy', 'Pandas', 'Matplotlib','NOAA datasets', 'NASA datasets'],
    image: 'https://img.freepik.com/premium-photo/surface-sun-with-prominences-solar-radiation-generative-ai_77190-13548.jpg',
    category: 'Web',
    github: 'https://github.com/Ravitheja1289-dot/RADAR-CME',
    live: 'https://radar-cme.vercel.app'
  },
  {
    id: '3',
    title: 'QuantumFin — AI Finance Assistant',
    description: 'QuantumFin is a full-stack AI-powered financial assistant that tracks expenses, manages budgets, and provides conversational insights with automated categorization. It leverages advanced NLP models to deliver personalized financial advice and real-time analytics.',
    tags: ['React', 'Next.js', 'Python', 'LLM APIs', 'Prompt Engineering', 'Tailwind CSS','SQL/NoSQL'],
    image: 'https://cdna.artstation.com/p/assets/images/images/080/142/728/smaller_square/alamin-hasan-m-12.jpg?1726775153',
    category: 'AI',
    github: 'https://github.com/Ravitheja1289-dot/QuantumFin',
    live: 'https://demo.com'
  },
  {
    id: '4',
    title: 'RetainRover — AI-Powered Customer Retention Platform',
    description: 'RetainRover predicts user churn and enables proactive retention strategies by analyzing user behavior, engagement patterns, and historical data to identify at-risk customers. It provides actionable insights to optimize customer retention and reduce churn rates.',
    tags: ['Python', 'Scikit-learn', 'PyTorch', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'FastAPI','Docker'],
    image: 'https://danlok.com/wp-content/uploads/2025/04/362d58de-5bba-445d-a43b-bda503119a80.jpeg',
    category: 'AI',
    github: 'https://github.com/Ravitheja1289-dot/RetainRover',
    live: 'https://retainrover.streamlit.app'
  },
  {
    id: '5',
    title: 'Cyber Shield — Security & Fraud Detection',
    description: 'Cyber Shield is a machine-learning-driven platform that uses NLP to detect fraudulent transactions and phishing emails. It analyzes textual data and transaction patterns to identify potential threats and anomalies, enhancing cybersecurity measures for businesses.',
    tags: ['Python', 'NLP', 'Machine Learning', 'Threat Detection', 'Anomaly Detection', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
    image: 'https://www.informaticando.eu/wp-content/uploads/2024/06/A-high-tech-graphic-design-illustrating-the-concept-of-AI-in-cybersecurity-678x381.webp',
    category: 'AI',
    github: 'https://github.com/Durgaprasad044/CyberShield',
    live: 'https://cybershield-2.onrender.com'
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
  { name: 'SwiftUI', category: 'Mobile Development' },
  { name: 'Android Studio', category: 'Mobile Development' },
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
  { name: 'GitHub', icon: Github, href: 'https://github.com/Anjankumar-Developer' },
  { name: 'Linkedin', icon: Linkedin, href: 'https://linkedin.com/in/anjan-kumar45/' },
  { name: 'Mail', icon: Mail, href: 'mailto:tsanjankumar@gmail.com' },
];
