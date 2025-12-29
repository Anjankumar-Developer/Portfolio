
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Instant position for the precision dot
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth, springy follow for the outer ring
  const ringX = useSpring(0, { stiffness: 400, damping: 30 });
  const ringY = useSpring(0, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
      ringX.set(clientX);
      ringY.set(clientY);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.getAttribute('role') === 'button'
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, ringX, ringY, isVisible]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Outer Fluid Ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: isPointer ? 2.2 : isClicking ? 0.7 : 1,
                borderWidth: isPointer ? '1px' : '2px',
                backgroundColor: isPointer ? 'rgba(212, 175, 55, 0.05)' : 'rgba(212, 175, 55, 0)',
                borderColor: isPointer ? '#D4AF37' : 'rgba(212, 175, 55, 0.5)'
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 25, 
                mass: 0.5,
                borderWidth: { duration: 0.1 }
              }}
              className="fixed top-0 left-0 w-10 h-10 border-[#D4AF37] rounded-full mix-blend-difference flex items-center justify-center"
              style={{
                x: ringX,
                y: ringY,
                translateX: '-50%',
                translateY: '-50%',
              }}
            >
              {/* Internal spinning orbits on hover */}
              {isPointer && (
                <motion.div 
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 360, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 0.3 }
                  }}
                  className="absolute inset-[-6px] border border-dashed border-[#D4AF37]/40 rounded-full"
                />
              )}
            </motion.div>

            {/* Precision Core Dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: isPointer ? 0.3 : isClicking ? 1.8 : 1,
                backgroundColor: isPointer ? '#fff' : '#D4AF37',
                boxShadow: isPointer ? '0 0 15px rgba(255,255,255,0.6)' : '0 0 10px rgba(212,175,55,0.4)'
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ 
                type: 'spring', 
                stiffness: 400, 
                damping: 20 
              }}
              className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full"
              style={{
                x: mouseX,
                y: mouseY,
                translateX: '-50%',
                translateY: '-50%',
              }}
            />

            {/* Subtle light trail / glow */}
            <motion.div
              className="fixed top-0 left-0 w-48 h-48 bg-[#D4AF37]/5 rounded-full blur-[60px]"
              animate={{
                scale: isPointer ? 1.5 : 1,
                opacity: isVisible ? 0.3 : 0
              }}
              style={{
                x: ringX,
                y: ringY,
                translateX: '-50%',
                translateY: '-50%',
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;
