import React, { useState } from 'react';
import { motion } from 'framer-motion';
import soundManager from '../utils/soundEffects';

const SoundToggle = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    const newState = soundManager.toggle();
    setSoundEnabled(newState);
    if (newState) {
      soundManager.play('success');
    }
  };

  return (
    <motion.button
      onClick={toggleSound}
      className="fixed bottom-6 right-6 z-[150] p-3 bg-neutral-900/80 backdrop-blur-md border border-neutral-700 rounded-full hover:bg-neutral-800 transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={soundEnabled ? 'Sound On' : 'Sound Off'}
    >
      {soundEnabled ? (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      )}
    </motion.button>
  );
};

export default SoundToggle;
