import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
  'Hello',
  'नमस्ते',
  'Hola',
  'Bonjour',
  'Ciao',
  'こんにちは',
  'Hallo',
  '你好',
  'Olá',
  'Привет',
];

export default function MacBookHelloAnimation({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [percentage, setPercentage] = useState(1);

  // Cycle through greetings without repeating
  useEffect(() => {
    if (currentIndex >= greetings.length - 1) {
      // Stop cycling after showing all greetings once
      return;
    }
    
    const greetingInterval = 500; // Change greeting every 500ms
    
    const timer = setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
    }, greetingInterval);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Complete after 5000ms + pause at 99%
  useEffect(() => {
    const completeTimer = setTimeout(() => {
      // Pause at 99% for 300ms before completing
      setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, 300);
    }, 5000);

    return () => clearTimeout(completeTimer);
  }, [onComplete]);

  // Percentage counter from 1% to 99% with slowdown after 96%
  useEffect(() => {
    const startTime = Date.now();
    const duration = 5000;
    
    const updatePercentage = () => {
      const elapsed = Date.now() - startTime;
      let progress = Math.min(elapsed / duration, 1);
      
      // Apply easing for slowdown after 96%
      let newPercentage;
      if (progress < 0.96) {
        // Normal speed from 1% to 96%
        newPercentage = Math.floor(1 + progress * 95);
      } else {
        // Slower progression from 96% to 99%
        const slowProgress = (progress - 0.96) / 0.04; // 0 to 1 for the last 4%
        const easedProgress = Math.pow(slowProgress, 2); // Quadratic easing
        newPercentage = Math.floor(96 + easedProgress * 3); // 96 to 99
      }
      
      setPercentage(Math.min(newPercentage, 99));
      
      if (progress < 1) {
        requestAnimationFrame(updatePercentage);
      }
    };
    
    requestAnimationFrame(updatePercentage);
  }, []);

  return (
    <div 
      className="relative w-full h-screen flex flex-col justify-center items-center bg-black overflow-hidden"
      style={{ willChange: 'opacity' }}
    >
      <div className="text-center flex items-center gap-1">
        {/* Fixed bullet point - small and close like a footpath marker */}
        <span className="text-white text-2xl sm:text-3xl md:text-4xl font-extralight leading-none" style={{ fontWeight: 200, marginRight: '0.25rem' }}>•</span>
        
        {/* Rotating text like digital clock */}
        <div className="relative text-5xl sm:text-6xl md:text-8xl font-extralight leading-none" style={{ minWidth: '280px', height: '1em', fontWeight: 200 }}>
          <AnimatePresence mode="popLayout">
            <motion.h1
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ 
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="text-white absolute left-0 right-0 leading-none"
              style={{ willChange: 'transform, opacity', fontWeight: 200 }}
            >
              {greetings[currentIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 text-white text-base font-extralight tracking-wider tabular-nums"
        style={{ willChange: 'opacity', fontWeight: 200 }}
      >
        {percentage}%
      </motion.p>
    </div>
  );
}
