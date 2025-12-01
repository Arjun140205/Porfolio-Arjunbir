import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  { text: 'Hello', lang: 'English' },
  { text: 'नमस्ते', lang: 'Hindi' },
  { text: 'Hola', lang: 'Spanish' },
];

export default function MacBookHelloAnimation({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Faster transitions for better UX
    if (currentIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 1200); // Reduced from 1800ms
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        setIsComplete(true);
        if (onComplete) {
          onComplete();
        }
      }, 1200); // Reduced from 1800ms
      return () => clearTimeout(finalTimer);
    }
  }, [currentIndex, onComplete]);

  const handleSkip = () => {
    setIsComplete(true);
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div 
      className="relative w-full h-screen flex flex-col justify-center items-center bg-black cursor-pointer overflow-hidden"
      onClick={handleSkip}
      style={{ willChange: 'opacity' }} // GPU acceleration
    >
      <AnimatePresence mode="wait">
        {!isComplete && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.5, // Faster animation
              ease: 'easeInOut'
            }}
            className="text-center"
            style={{ willChange: 'opacity' }}
          >
            <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-light tracking-wide">
              {greetings[currentIndex].text}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 text-white text-sm"
        style={{ willChange: 'opacity' }}
      >
        Click anywhere to skip
      </motion.p>
    </div>
  );
}
