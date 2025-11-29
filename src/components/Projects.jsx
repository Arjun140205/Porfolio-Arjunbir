import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ContainerScroll,
  ContainerSticky,
  GalleryContainer,
  GalleryCol,
} from "./blocks/animated-gallery";
import jordanFitnessImg from "../assets/projects/jordanfitnessclub.png";
import recipediaImg from "../assets/projects/recipedia.png";
import unheardVoicesImg from "../assets/projects/unheardvoices.png";
import cropifyPlaceholder from "../assets/projects/placeholder-cropify.svg";
import voicelessPlaceholder from "../assets/projects/placeholder-voiceless.svg";
import gmailPlaceholder from "../assets/projects/placeholder-gmail.svg";

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
    technologies: ["HTML", "CSS", "JavaScript","Mongo", "React", "Rest API","Express","Node.js"],
    image: jordanFitnessImg
  },
  {
    title: "Cropify",
    description:
      "Cropify allows users to upload images and use cropping/editing tools. Built with React and Node.js for seamless image manipulation.",
    git: "https://github.com/Arjun140205/Crop-Yield-Predictor-",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    image: cropifyPlaceholder
  },
  {
    title: "Voiceless-Boundaries",
    description:
      "A web application that helps professionals talk beyond their language boundaries by providing a platform for real-time translation ",
    git: "https://github.com/Arjun140205/Voiceless-Boundaries",
    technologies: ["Next.js", "CSS", "JavaScript", "Tailwind", "API"],
    image: voicelessPlaceholder
  },
  {
    title: "Recipedia",
    description:
      "Search recipes by ingredients with a user-friendly UI. Built with React and integrated external recipe APIs.",
    git: "https://github.com/Arjun140205/Recipe-Finder-Reactapp",
    technologies: ["HTML", "CSS", "JavaScript","Mongo", "React", "Rest API","Express","Node.js"],
    image: recipediaImg
  },
  {
    title: "Unheard Voices",
    description:
      "A platform for sharing untold stories and experiences, fostering empathy and understanding.",
    git: "https://github.com/Arjun140205/Unheard-Voices",
    technologies: ["HTML", "CSS", "JavaScript","Mongo", "React", "Rest API","Express","Node.js"],
    image: unheardVoicesImg
  },
  {
    title: "Gmail genius",
    description:
      "An intelligent email management system that categorizes and prioritizes emails using AI and advanced Data Analytics.",
    git: "https://github.com/Arjun140205/Gmail-genius",
    technologies: ["HTML", "CSS", "JavaScript", "React", "API","Google Cloud", "Node.js"],
    image: gmailPlaceholder
  }
];

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

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    onClick={onClick}
    className="relative group cursor-pointer overflow-hidden rounded-2xl border border-neutral-800 hover:border-cyan-400/50 transition-all duration-300 aspect-[4/3]"
    whileHover={{ scale: 1.02, y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {/* Project Image */}
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
    
    {/* Dark overlay on hover */}
    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    {/* Title overlay - always visible at bottom */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4">
      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
    </div>
    
    {/* Hover content - centered */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
      <div className="text-center">
        <p className="text-white text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <img
              key={idx}
              src={techIcons[tech] || techIcons.API}
              alt={tech}
              title={tech}
              className="w-6 h-6 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Split projects into 3 columns for the gallery
  const col1 = project.filter((_, i) => i % 3 === 0);
  const col2 = project.filter((_, i) => i % 3 === 1);
  const col3 = project.filter((_, i) => i % 3 === 2);

  return (
    <>
      <div className="min-h-screen bg-black pt-16 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-4">
              Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Engineering empathy into every line of code. Building with purpose, not just logic.
            </p>
          </motion.div>

          <ContainerScroll>
            <ContainerSticky>
              <GalleryContainer className="p-4">
                {/* Column 1 */}
                <GalleryCol yRange={["0%", "-15%"]}>
                  {col1.map((proj, idx) => (
                    <ProjectCard
                      key={idx}
                      project={proj}
                      onClick={() => setOpenIndex(project.indexOf(proj))}
                    />
                  ))}
                </GalleryCol>

                {/* Column 2 */}
                <GalleryCol yRange={["0%", "-25%"]}>
                  {col2.map((proj, idx) => (
                    <ProjectCard
                      key={idx}
                      project={proj}
                      onClick={() => setOpenIndex(project.indexOf(proj))}
                    />
                  ))}
                </GalleryCol>

                {/* Column 3 */}
                <GalleryCol yRange={["0%", "-10%"]}>
                  {col3.map((proj, idx) => (
                    <ProjectCard
                      key={idx}
                      project={proj}
                      onClick={() => setOpenIndex(project.indexOf(proj))}
                    />
                  ))}
                </GalleryCol>
              </GalleryContainer>
            </ContainerSticky>
          </ContainerScroll>
        </div>

        <AnimatePresence>
          {openIndex !== null && (
            <ExpandedProjectModal
              {...project[openIndex]}
              onClose={() => setOpenIndex(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Projects;
