import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaGit, FaPython, FaSass } from "react-icons/fa";
import { DiMongodb, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiTailwindcss, SiCplusplus } from "react-icons/si";
import { BsCloudFill } from "react-icons/bs";
import { TbBrain } from "react-icons/tb";
import { AiOutlineTeam } from "react-icons/ai";

const skillCategories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "languages", label: "Languages" },
  { id: "tools", label: "Tools" },
  { id: "concepts", label: "Concepts" },
];

const skillsData = {
  frontend: [
    {
      icon: <DiJavascript1 className="text-2xl" />,
      title: "JavaScript",
      description:
        "Modern JS including ES6+, async/await, and functional programming concepts",
      proficiency: "Advanced",
    },
    {
      icon: <FaReact className="text-2xl" />,
      title: "React",
      description:
        "Building complex UIs with hooks, context API and state management",
      proficiency: "Advanced",
    },
    {
      icon: <FaSass className="text-2xl" />,
      title: "CSS/SASS",
      description:
        "Advanced styling with flexbox, grid, animations, and responsive design",
      proficiency: "Advanced",
    },
    {
      icon: <SiTailwindcss className="text-2xl" />,
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapidly building custom designs",
      proficiency: "Advanced",
    },
  ],
  backend: [
    {
      icon: <SiExpress className="text-2xl" />,
      title: "Express.js",
      description: "Building robust and scalable backend APIs with Node.js",
      proficiency: "Intermediate",
    },
    {
      icon: <DiMongodb className="text-2xl" />,
      title: "MongoDB",
      description: "NoSQL database design and operations",
      proficiency: "Intermediate",
    },
  ],
  languages: [
    {
      icon: <FaPython className="text-2xl" />,
      title: "Python",
      description:
        "Data structures, algorithms, and computational applications",
      proficiency: "Advanced",
    },
    {
      icon: <SiCplusplus className="text-2xl" />,
      title: "C++",
      description: "Object-oriented programming and system-level development",
      proficiency: "Intermediate",
    },
  ],
  concepts: [
    {
      icon: <TbBrain className="text-2xl" />,
      title: "AI & Neural Networks",
      description:
        "Understanding of artificial intelligence fundamentals and neural networks",
      proficiency: "Intermediate",
    },
    {
      icon: <BsCloudFill className="text-2xl" />,
      title: "Cloud Computing",
      description: "Working with cloud services and distributed systems",
      proficiency: "Intermediate",
    },
    {
      icon: <AiOutlineTeam className="text-2xl" />,
      title: "Agile Methodology",
      description:
        "Experience with agile development practices and workflows",
      proficiency: "Advanced",
    },
  ],
  tools: [
    {
      icon: <FaGit className="text-2xl" />,
      title: "Git",
      description: "Version control and collaborative development",
      proficiency: "Advanced",
    },
  ],
};

const SkillCard = ({ skill }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#1a1a1a] rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
      <span className="text-cyan-400 font-bold text-xl">{skill.icon}</span>
    </div>
    <h3 className="text-white text-xl font-semibold mb-2">{skill.title}</h3>
    <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
    <div className="mt-auto">
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width:
              skill.proficiency === "Advanced"
                ? "85%"
                : skill.proficiency === "Intermediate"
                ? "65%"
                : "45%",
          }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-cyan-500"
        />
      </div>
      <p className="text-cyan-400 text-sm mt-2">{skill.proficiency}</p>
    </div>
  </motion.div>
);

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? Object.values(skillsData).flat()
      : skillsData[selectedCategory] || [];

  return (
    <>
    <div className="min-h-screen bg-black pt-16">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Professional Skills
          </h1>
          <p className="text-gray-400 text-lg">
            A comprehensive overview of my technical expertise and proficiency
            levels
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-cyan-500 text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
