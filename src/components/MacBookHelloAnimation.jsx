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
    if (currentIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 1800);
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        setIsComplete(true);
        if (onComplete) {
          onComplete();
        }
      }, 1800);
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
    >
      <AnimatePresence mode="wait">
        {!isComplete && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: 'easeInOut'
            }}
            className="text-center"
          >
            <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-light tracking-wide">
              {greetings[currentIndex].text}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 text-white text-sm opacity-60"
      >
        Click anywhere to continue
      </motion.p>
    </div>
  );
}
