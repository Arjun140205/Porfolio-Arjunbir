import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import soundManager from '../utils/soundEffects';

const navLinks = [
  { text: "Home", to: "home" },
  { text: "About", to: "about" },
  { text: "Certifications", to: "certifications" },
  { text: "Projects", to: "projects" },
  { text: "Experience", to: "experience" },
  { text: "Skills", to: "skills" },
  { text: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll function
  const scrollToSection = (sectionId, fromMobile = false) => {
    // Only play click sound if not from mobile (mobile plays it separately)
    if (!fromMobile) {
      soundManager.play('click');
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.to);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
        {/* Logo removed per request */}
        
        {/* Desktop pill navbar */}
        <div className="inline-flex items-center bg-[#18181b]/90 border border-white/10 shadow-xl rounded-full px-2 py-1 gap-3 backdrop-blur-none min-h-[44px]">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent mr-1 flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="2" fill="#b3b3b3"/><circle cx="12" cy="5" r="2" fill="#b3b3b3"/><circle cx="12" cy="19" r="2" fill="#b3b3b3"/><circle cx="19" cy="12" r="2" fill="#b3b3b3"/></svg>
          </div>
          <div className="flex gap-2 lg:gap-4">
            {navLinks.map(link => (
              <button
                key={link.to}
                onClick={() => scrollToSection(link.to)}
                onMouseEnter={() => soundManager.play('hover')}
                className={`px-3 py-1.5 text-white font-medium rounded-full transition-all duration-30 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 text-sm whitespace-nowrap relative hover:bg-white/10 ${activeSection === link.to ? 'bg-white/10' : ''}`}
              >
                {link.text}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Hamburger menu button - fixed in top right */}
        <button
          onClick={() => {
            soundManager.play('pop');
            setIsMenuOpen(!isMenuOpen);
          }}
          onMouseEnter={() => soundManager.play('hover')}
          className="fixed right-4 top-6 z-[101] flex items-center gap-2 bg-[#18181b]/90 border border-white/10 shadow-xl rounded-full px-4 py-2.5 backdrop-blur-md"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 gap-1">
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white rounded-full block"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-white rounded-full block"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white rounded-full block"
            />
          </div>
          <span className="text-white font-medium text-sm">Menu</span>
        </button>

        {/* Mobile menu dropdown - centered with backdrop */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[98]"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="fixed top-24 left-0 right-0 mx-auto w-[90%] max-w-xs bg-[#18181b]/95 border border-white/10 shadow-2xl rounded-3xl p-5 backdrop-blur-lg z-[99]"
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map(link => (
                    <button
                      key={link.to}
                      onClick={() => {
                        soundManager.play('click');
                        scrollToSection(link.to, true);
                      }}
                      className={`px-5 py-3.5 text-white font-medium rounded-2xl transition-all duration-200 text-center hover:bg-white/10 w-full ${activeSection === link.to ? 'bg-cyan-500/20 border border-cyan-400/30' : ''}`}
                    >
                      {link.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
