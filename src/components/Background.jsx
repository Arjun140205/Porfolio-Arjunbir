import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // Use slim version for better performance

const Background = () => {
  // Use loadSlim instead of loadFull for better performance
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Memoize options to prevent recreating on every render
  const particlesOptions = useMemo(() => ({
    background: { color: { value: "#000000" } },
    fpsLimit: 120, // Increased for smoother animations
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 2 }, // Reduced from 4 for better performance
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: { 
        value: 50,
        density: {
          enable: true,
          area: 800, // Adjust particle density based on screen size
        }
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true, // Better display on retina screens
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0"
      options={particlesOptions}
      style={{ willChange: 'transform' }} // GPU acceleration hint
    />
  );
};

export default Background;
