import { useEffect, useState } from 'react';

const AnimatedCounter = ({ value, duration = 2, showPlus = false, threshold = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * value);
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    if (value > 0) {
      animationFrame = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);
  
  const shouldShowPlus = showPlus && value > threshold;
  
  return (
    <span className="tabular-nums">
      {displayValue.toLocaleString()}
      {shouldShowPlus && <span className="text-cyan-300">+</span>}
    </span>
  );
};

export default AnimatedCounter;
