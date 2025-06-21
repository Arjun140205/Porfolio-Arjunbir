import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [cardRect, setCardRect] = useState(null);

  const handleMouseMove = (e) => {
    if (!cardRect) return;
    
    // Calculate position relative to the card
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    
    setPosition({ x, y });
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    setCardRect(e.currentTarget.getBoundingClientRect());
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {/* Card content */}
      <div className="relative z-10 backdrop-blur-sm rounded-3xl p-8 bg-black/20 border border-gray-800/50 h-full transition-all duration-300 hover:bg-black/30">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Animated background shape */}
          <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-indigo-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">{service.title}</h3>
          <p className="text-gray-300 leading-relaxed">{service.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 