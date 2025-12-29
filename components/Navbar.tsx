
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', updateScrolled);
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8">
      <motion.div 
        className={`max-w-7xl mx-auto px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-between ${
          isScrolled ? 'glass border-white/10 shadow-2xl backdrop-blur-2xl' : ''
        }`}
      >
        <a href="#home" className="text-2xl font-black tracking-tighter text-white">
          AK<span className="text-[#D4AF37]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="mailto:sai@tanneeru.dev" 
            className="px-6 py-2 bg-[#D4AF37] text-black text-sm font-bold rounded-full hover:bg-[#B8860B] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] origin-left z-[101]"
        style={{ scaleX: scrollYProgress, width: '100%' }}
      />
    </nav>
  );
};

export default Navbar;
