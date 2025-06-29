import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

const techIcons = {
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  Express: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  "Express.js": "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
  Mongo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Vue: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "Fast API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  API: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  "Google Cloud": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
};

const project = [
  {
    title: "Jordan Fitness Club",
    description:
      "Jordan Fitness Club is a modern fitness application built using React, Node.js, and MongoDB. Users can track their workouts, nutrition, and progress.",
    git: "https://github.com/Arjun140205/Jordan-Fitness-Club",
    technologies: ["HTML", "CSS", "JavaScript","Mongo", "React", "Rest API","Express","Node.js", ]
  },
  {
    title: "Cropify",
    description:
      "Cropify allows users to upload images and use cropping/editing tools. Built with React and Node.js for seamless image manipulation.",
    git: "https://github.com/Arjun140205/Crop-Yield-Predictor-",
    technologies: ["HTML", "CSS", "JavaScript", "API"]
  },
  {
    title: "Voiceless-Boundaries",
    description:
      "A web application that helps professionals talk beyond their language boundaries by providing a platform for real-time translation ",
    git: "https://github.com/Arjun140205/Voiceless-Boundaries",
    technologies: ["Next.js", "CSS", "JavaScript", "Tailwind", "API"]
  },
  {
    title: "Recipe Finder",
    description:
      "Search recipes by ingredients with a user-friendly UI. Built with React and integrated external recipe APIs.",
    git: "https://github.com/Arjun140205/Recipe-Finder-Reactapp",
    technologies: ["HTML", "CSS", "JavaScript","Mongo", "React", "Rest API","Express","Node.js"]
  },
  {
    title: "Unheard Voices",
    description:
      "A platform for sharing untold stories and experiences, fostering empathy and understanding.",
    git: "https://github.com/Arjun140205/Unheard-Voices",
    technologies: ["HTML", "CSS", "JavaScript","Mongo", "React", "Rest API","Express","Node.js"]
  },
  {
    title: "Gmail genius",
    description:
      "An intelligent email management system that categorizes and prioritizes emails using AI and advanced Data Analytics.",
    git: "https://github.com/Arjun140205/Gmail-genius",
    technologies: ["HTML", "CSS", "JavaScript", "React", "API","Google Cloud", "Node.js"]
  }
];

const ProjectCard = ({ title, onClick, isSpotlit, cardRef, onTouchStart, onMouseDown }) => (
  <motion.li
    layout
    ref={cardRef}
    onClick={onClick}
    onTouchStart={onTouchStart}
    onMouseDown={onMouseDown}
    className={`relative w-full aspect-square md:aspect-auto h-36 md:h-44 lg:h-48 flex-shrink-0 list-none rounded-3xl group cursor-pointer transition-all duration-300 bg-black overflow-hidden ${isSpotlit ? 'z-10' : 'z-0'}`}
    style={{
      filter: isSpotlit ? 'brightness(1.15)' : 'brightness(0.85)',
      transition: 'filter 0.3s',
    }}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  >
    {/* Glossy shine overlay */}
    <span
      className="pointer-events-none absolute inset-0 rounded-3xl"
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 30%, rgba(0,0,0,0) 70%)',
        zIndex: 2,
        mixBlendMode: 'lighten',
      }}
    />
    {/* Spotlight gradient overlay */}
    <span
      className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${isSpotlit ? 'opacity-100' : 'opacity-0'}`}
      style={{
        background: 'radial-gradient(circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(34,211,238,0.18) 0%, rgba(34,211,238,0.08) 60%, transparent 100%)',
        zIndex: 1,
      }}
    />
    <div className="relative flex h-full w-full flex-col justify-center items-center overflow-hidden rounded-3xl px-4 py-2 md:p-6 z-10">
      <motion.h3
        className={`text-lg md:text-xl font-semibold font-sans tracking-tight text-white text-center transition-all duration-300 ${isSpotlit ? 'text-cyan-300 translate-y-[-4px]' : ''}`}
        animate={isSpotlit ? { y: -4, color: '#67e8f9' } : { y: 0, color: '#fff' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {title}
      </motion.h3>
    </div>
  </motion.li>
);

// Add subtle cyan glow effect styles
if (typeof window !== "undefined") {
  const style = document.createElement('style');
  style.innerHTML = `
    .glowing-cyan-border {
      border: 2px solid transparent;
      background: radial-gradient(circle at 50% 50%, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0.08) 60%, transparent 100%);
      filter: blur(6px);
      opacity: 0.7;
      z-index: 0;
      transition: opacity 0.3s;
    }
  `;
  if (!document.head.querySelector('style[data-glow-cyan]')) {
    style.setAttribute('data-glow-cyan', 'true');
    document.head.appendChild(style);
  }
}

const ExpandedProjectModal = ({ title, description, git, technologies, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-neutral-900 border border-neutral-700 p-4 xs:p-6 rounded-xl shadow-lg max-w-lg w-[95%] sm:w-[80%] max-h-[90vh] overflow-y-auto relative"
      initial={{ scale: 0.95, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ 
        scale: 0.8,
        y: 40,
        opacity: 0,
        filter: "blur(8px)",
        transition: {
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
          scale: {
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1]
          },
          opacity: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1]
          },
          filter: {
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
          }
        }
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      <div className="flex items-center justify-end mb-4">
        <div 
          className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer relative group" 
          onClick={onClose}
          title="Close"
        >
          <span className="absolute inset-0 flex items-center justify-center text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold">
            ×
          </span>
        </div>
      </div>
      <h3 className="text-xl xs:text-2xl sm:text-2xl font-bold text-white mb-2 break-words">{title}</h3>
      <p className="text-gray-300 text-sm xs:text-base mb-4 break-words">{description}</p>
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
        {technologies.map((tech, index) => (
          <img
            key={index}
            src={techIcons[tech] || techIcons.API}
            alt={tech}
            title={tech}
            className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 object-contain"
          />
        ))}
      </div>
      <a
        href={git}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-neutral-800 border border-neutral-600 text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-all text-xs xs:text-sm"
      >
        View on GitHub
      </a>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [spotlitIndex, setSpotlitIndex] = useState(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);

  // Mouse/touch spotlight logic
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMove = (e) => {
      let x, y;
      if (e.touches && e.touches[0]) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        x = e.clientX;
        y = e.clientY;
      }
      const rect = grid.getBoundingClientRect();
      const relX = x - rect.left;
      const relY = y - rect.top;
      // Find closest card
      let minDist = Infinity;
      let closest = null;
      cardRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const r = ref.getBoundingClientRect();
        const cx = r.left - rect.left + r.width / 2;
        const cy = r.top - rect.top + r.height / 2;
        const dist = Math.hypot(cx - relX, cy - relY);
        if (dist < minDist) {
          minDist = dist;
          closest = idx;
        }
        // Set CSS vars for spotlight position
        if (ref) {
          ref.style.setProperty('--spot-x', `${((relX - (r.left - rect.left)) / r.width) * 100}%`);
          ref.style.setProperty('--spot-y', `${((relY - (r.top - rect.top)) / r.height) * 100}%`);
        }
      });
      setSpotlitIndex(closest);
    };
    const handleLeave = () => setSpotlitIndex(null);
    grid.addEventListener('mousemove', handleMove);
    grid.addEventListener('touchmove', handleMove);
    grid.addEventListener('mouseleave', handleLeave);
    grid.addEventListener('touchend', handleLeave);
    return () => {
      grid.removeEventListener('mousemove', handleMove);
      grid.removeEventListener('touchmove', handleMove);
      grid.removeEventListener('mouseleave', handleLeave);
      grid.removeEventListener('touchend', handleLeave);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto py-6 px-2 sm:px-4 flex-grow"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-cyan-400 mb-6 sm:mb-10 text-center">Projects</h2>
          <h3 className="text-base xs:text-lg sm:text-xl text-white mb-6 sm:mb-10 text-center">Engineering empathy into every line of code. Building with purpose, not just logic. </h3>
          <ul
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch bg-transparent rounded-3xl"
            style={{ touchAction: 'pan-y', backgroundClip: 'padding-box' }}
          >
            {project.map((item, index) => (
              <ProjectCard
                key={index}
                title={item.title}
                onClick={() => setOpenIndex(index)}
                isSpotlit={spotlitIndex === index}
                cardRef={el => (cardRefs.current[index] = el)}
              />
            ))}
          </ul>
        </motion.div>
        <AnimatePresence>
          {openIndex !== null && (
            <ExpandedProjectModal
              {...project[openIndex]}
              onClose={() => setOpenIndex(null)}
            />
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
