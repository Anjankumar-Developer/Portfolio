
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const CATEGORIES = ['All', 'AI', 'Web', 'Mobile'] as const;

const ProjectCard: React.FC<{ project: typeof PROJECTS[0], index: number }> = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group bg-[#0A0A0A] rounded-[32px] overflow-hidden flex flex-col h-full border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-500 shadow-2xl relative"
    >
      {/* Project Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-[#D4AF37] tracking-widest uppercase">
          {project.category}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-5">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight tracking-tight">
            {project.title}
          </h3>
          <div className="flex gap-3 pt-1">
            {project.live && (
              <a 
                href={project.live} 
                className="text-white/40 hover:text-[#D4AF37] transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                className="text-white/40 hover:text-white transition-all hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                title="Source Code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light flex-grow">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
          {project.tags.slice(0, 4).map(tag => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-white/[0.03] text-slate-300 text-[10px] font-semibold rounded-lg border border-white/5 group-hover:border-[#D4AF37]/10 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 text-slate-500 text-[10px] font-bold">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<typeof CATEGORIES[number]>('All');

  const filteredProjects = PROJECTS.filter(project => 
    activeFilter === 'All' || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-32 px-6 bg-[#030014]">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header Section */}
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-sm font-bold uppercase tracking-[0.4em] mb-4 block"
          >
            PORTFOLIO
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B8860B]">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-12"
          >
            A curated selection of high-impact solutions ranging from generative AI to decentralized systems.
          </motion.p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeFilter === cat 
                    ? 'border-[#D4AF37] text-[#D4AF37]' 
                    : 'border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {activeFilter === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-[#D4AF37]/5 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Precise Grid Layout with Framer Motion Layout animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
