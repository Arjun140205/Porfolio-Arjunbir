import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "./Navbar";

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

const ProjectCard = ({ title, onClick }) => (
  <motion.div
    layout
    onClick={onClick}
    className="relative w-full bg-white/10 backdrop-blur rounded-xl border border-neutral-700 shadow-md p-4 cursor-pointer hover:shadow-lg transition-all duration-300"
  >
    <motion.div layout className="flex flex-col gap-2">
      <h3 className="text-xl sm:text-2xl font-semibold text-white">{title}</h3>
    </motion.div>
  </motion.div>
);

const ExpandedProjectModal = ({ title, description, git, technologies, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-neutral-900 border border-neutral-700 p-6 rounded-xl shadow-lg max-w-2xl w-[90%] sm:w-[70%] max-h-[85vh] overflow-y-auto relative"
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
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base mb-4">{description}</p>
      <div className="flex flex-wrap gap-3 mb-4">
        {technologies.map((tech, index) => (
          <img
            key={index}
            src={techIcons[tech] || techIcons.API}
            alt={tech}
            title={tech}
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
        ))}
      </div>
      <a
        href={git}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-neutral-800 border border-neutral-600 text-white px-4 py-2 rounded-lg hover:bg-neutral-700 transition-all text-sm"
      >
        View on GitHub
      </a>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-black pt-16 px-4 relative flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto py-10 flex-grow"
      >
        <h2 className="text-4xl font-bold text-white mb-10 text-center">Projects</h2>
        <h3 className="text-xl text-white mb-10 text-center">Engineering empathy into every line of code. Building with purpose, not just logic. </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {project.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              onClick={() => setOpenIndex(index)}
            />
          ))}
        </div>
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
  );
};

export default Projects;
