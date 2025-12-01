import React from 'react';
import TextMarque from './ui/text-marque';

const TextMarqueeSection = () => {
  return (
    <div className="relative bg-black py-12 overflow-hidden">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      
      {/* First Marquee - Moving Right */}
      <div className="py-4">
        <TextMarque 
          baseVelocity={5} 
          clasname="font-bold text-white/10"
          scrollDependent={false}
          delay={0}
        >
          Lightning Fast Delivery • Critical Thinker • Problem Solver • 
        </TextMarque>
      </div>

      {/* Second Marquee - Moving Left */}
      <div className="py-4">
        <TextMarque 
          baseVelocity={-5} 
          clasname="font-bold text-white/10"
          scrollDependent={false}
          delay={0}
        >
          Innovative Solutions • Team Player • Fast Learner • 
        </TextMarque>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </div>
  );
};

export default TextMarqueeSection;
