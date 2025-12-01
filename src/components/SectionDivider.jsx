import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ sectionName }) => {
  return (
    <div className="relative py-12 flex items-center justify-center bg-black">
      {/* Animated gradient line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '66%', opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full shadow-lg"
        style={{ minWidth: '120px', maxWidth: '800px' }}
      />
      
      {/* Optional section label */}
      {sectionName && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bg-black px-4 py-1 rounded-full border border-cyan-400/30 text-cyan-400 text-sm font-medium"
        >
          {sectionName}
        </motion.div>
      )}
    </div>
  );
};

export default SectionDivider;
