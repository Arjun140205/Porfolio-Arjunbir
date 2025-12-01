// Optimized Framer Motion configurations for better performance

// Detect if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Detect device performance tier
export const getPerformanceTier = () => {
  const memory = navigator.deviceMemory || 4;
  const cores = navigator.hardwareConcurrency || 2;
  
  if (memory >= 8 && cores >= 4) return 'high';
  if (memory >= 4 && cores >= 2) return 'medium';
  return 'low';
};

// Base animation variants optimized for GPU
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

// Optimized transition settings
export const springTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 20,
};

export const easeTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1], // Custom easing
};

// Viewport settings for scroll animations
export const viewportConfig = {
  once: true, // Animate only once
  margin: '0px 0px -100px 0px', // Trigger before element is in view
  amount: 0.3, // Trigger when 30% visible
};

// Performance-aware animation config
export const getAnimationConfig = () => {
  const tier = getPerformanceTier();
  const reducedMotion = prefersReducedMotion();

  if (reducedMotion) {
    return {
      initial: false,
      animate: false,
      exit: false,
      transition: { duration: 0 },
    };
  }

  switch (tier) {
    case 'high':
      return {
        transition: springTransition,
        viewport: viewportConfig,
      };
    case 'medium':
      return {
        transition: easeTransition,
        viewport: { ...viewportConfig, amount: 0.5 },
      };
    case 'low':
      return {
        transition: { duration: 0.2 },
        viewport: { once: true, amount: 0.8 },
      };
    default:
      return {
        transition: easeTransition,
        viewport: viewportConfig,
      };
  }
};

// Stagger children animation
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// GPU-accelerated properties only
export const gpuAccelerated = {
  transform: true,
  opacity: true,
  // Avoid: width, height, top, left, margin, padding
};
