import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'home', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'certifications', label: 'Certifications', icon: '📜' },
  { id: 'projects', label: 'Projects', icon: '💻' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'skills', label: 'Skills', icon: '⚡' },
  { id: 'contact', label: 'Contact', icon: '📧' },
];

const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
      {/* Vertical progress line */}
      <div className="relative w-0.5 h-96 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 to-purple-500"
          style={{ height: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Section indicators */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-12 h-96 justify-between py-2">
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          const sectionIndex = sections.findIndex(s => s.id === activeSection);
          const isPassed = index <= sectionIndex;

          return (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Checkpoint dot */}
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-400 ring-4 ring-cyan-400/30 scale-125'
                    : isPassed
                    ? 'bg-cyan-400/60'
                    : 'bg-white/20'
                }`}
              />

              {/* Tooltip on hover */}
              <div className="absolute right-6 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/90 text-white px-3 py-1.5 rounded-lg text-sm border border-cyan-400/30 pointer-events-none">
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollProgress;
