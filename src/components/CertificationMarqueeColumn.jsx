import React from 'react';
import { motion } from 'framer-motion';

const CertificationCard = ({ cert }) => (
  <div className="p-6 rounded-3xl border border-white/10 shadow-lg max-w-xs w-full bg-black/80 backdrop-blur-md glassy-card card-glow-light">
    <div className="font-bold text-lg text-purple-200 mb-1 tracking-tight leading-5">{cert.role}</div>
    <div className="text-blue-200 text-sm mb-2 leading-5">{cert.company}</div>
    <div className="text-xs text-gray-400 mb-3 leading-5">{cert.duration}</div>
    <ul className="list-disc pl-4 text-xs text-white/90">
      {cert.points.map((point, idx) => (
        <li key={idx}>{point}</li>
      ))}
    </ul>
  </div>
);

const CertificationMarqueeColumn = ({ certifications, direction = 'up', duration = 64, className = '' }) => {
  // For infinite loop, repeat the cards twice
  const cards = [
    ...certifications,
    ...certifications,
  ];
  return (
    <div className={`overflow-hidden h-[520px] flex flex-col items-center ${className}`}>
      <motion.div
        animate={{ translateY: direction === 'up' ? '-50%' : '0%' }}
        initial={{ translateY: direction === 'up' ? '0%' : '-50%' }}
        transition={{ duration, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
        className="flex flex-col gap-8 pb-8"
      >
        {cards.map((cert, i) => (
          <CertificationCard cert={cert} key={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default CertificationMarqueeColumn; 