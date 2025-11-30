import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaGit, FaPython, FaNodeJs, FaJava, FaHtml5, FaGithub, FaAws } from "react-icons/fa";
import { DiMongodb, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiTailwindcss, SiCplusplus, SiFirebase, SiNextdotjs, SiMysql, SiJira, SiPostgresql } from "react-icons/si";
import { BsCloudFill } from "react-icons/bs";
import { TbBrain } from "react-icons/tb";
import { AiOutlineTeam, AiOutlineProject } from "react-icons/ai";
import RadialOrbitalTimeline from "../components/ui/radial-orbital-timeline";

// Orbit 1 (Inner - 150px): Core Languages
// Orbit 2 (250px): Frameworks & Libraries  
// Orbit 3 (350px): Technologies & Tools
// Orbit 4 (Outer - 450px): Concepts & Methodologies

const skillsTimelineData = [
  // Orbit 1: Core Languages (Inner orbit - 100px)
  {
    id: 1,
    title: "JavaScript",
    icon: DiJavascript1,
    date: "Language",
    status: "completed",
    content: "Modern JS including ES6+, async/await, and functional programming concepts",
    energy: 95,
    orbitRadius: 100,
    relatedIds: [2, 4, 5],
  },
  {
    id: 7,
    title: "Python",
    icon: FaPython,
    date: "Language",
    status: "completed",
    content: "Data structures, algorithms, and computational applications",
    energy: 80,
    orbitRadius: 100,
    relatedIds: [9, 10],
  },
  {
    id: 8,
    title: "C++",
    icon: SiCplusplus,
    date: "Language",
    status: "in-progress",
    content: "Object-oriented programming and system-level development",
    energy: 60,
    orbitRadius: 100,
    relatedIds: [7],
  },

  {
    id: 14,
    title: "Java",
    icon: FaJava,
    date: "Language",
    status: "in-progress",
    content: "Enterprise application development and OOP principles",
    energy: 65,
    orbitRadius: 100,
    relatedIds: [8],
  },
  {
    id: 15,
    title: "SQL",
    icon: SiMysql,
    date: "Language",
    status: "completed",
    content: "Database querying and relational database management",
    energy: 75,
    orbitRadius: 100,
    relatedIds: [6, 16],
  },
  {
    id: 16,
    title: "HTML",
    icon: FaHtml5,
    date: "Language",
    status: "completed",
    content: "Semantic markup and web structure fundamentals",
    energy: 90,
    orbitRadius: 100,
    relatedIds: [1, 4],
  },
  
  // Orbit 2: Frameworks & Libraries (180px)
  {
    id: 2,
    title: "React",
    icon: FaReact,
    date: "Framework",
    status: "completed",
    content: "Building complex UIs with hooks, context API and state management",
    energy: 90,
    orbitRadius: 180,
    relatedIds: [1, 4, 5, 17],
  },
  {
    id: 4,
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    date: "Framework",
    status: "completed",
    content: "Utility-first CSS framework for rapidly building custom designs",
    energy: 85,
    orbitRadius: 180,
    relatedIds: [1, 2, 17],
  },
  {
    id: 5,
    title: "Express.js",
    icon: SiExpress,
    date: "Framework",
    status: "in-progress",
    content: "Building robust and scalable backend APIs with Node.js",
    energy: 70,
    orbitRadius: 180,
    relatedIds: [2, 3, 6],
  },
  {
    id: 17,
    title: "Next.js",
    icon: SiNextdotjs,
    date: "Framework",
    status: "in-progress",
    content: "React framework for production with SSR and static generation",
    energy: 75,
    orbitRadius: 180,
    relatedIds: [2, 4],
  },
  
  // Orbit 3: Technologies & Tools (260px)
  {
    id: 3,
    title: "Node.js",
    icon: FaNodeJs,
    date: "Technology",
    status: "in-progress",
    content: "Server-side JavaScript runtime for building scalable applications",
    energy: 75,
    orbitRadius: 260,
    relatedIds: [5, 6, 18],
  },
  {
    id: 6,
    title: "MongoDB",
    icon: DiMongodb,
    date: "Database",
    status: "in-progress",
    content: "NoSQL database design and operations for modern applications",
    energy: 65,
    orbitRadius: 260,
    relatedIds: [3, 5, 18],
  },
  {
    id: 11,
    title: "Git",
    icon: FaGit,
    date: "Tool",
    status: "completed",
    content: "Version control and collaborative development workflows",
    energy: 90,
    orbitRadius: 260,
    relatedIds: [12, 20],
  },
  {
    id: 18,
    title: "Firebase",
    icon: SiFirebase,
    date: "Database",
    status: "in-progress",
    content: "Real-time database and backend-as-a-service platform",
    energy: 60,
    orbitRadius: 260,
    relatedIds: [6, 10],
  },
  {
    id: 19,
    title: "PostgreSQL",
    icon: SiPostgresql,
    date: "Database",
    status: "in-progress",
    content: "Advanced open-source relational database system",
    energy: 55,
    orbitRadius: 260,
    relatedIds: [6, 15],
  },
  {
    id: 20,
    title: "GitHub",
    icon: FaGithub,
    date: "Tool",
    status: "completed",
    content: "Advanced Git workflows, CI/CD, and collaborative development",
    energy: 90,
    orbitRadius: 260,
    relatedIds: [11, 21],
  },
  {
    id: 21,
    title: "AWS",
    icon: FaAws,
    date: "Cloud",
    status: "in-progress",
    content: "Cloud infrastructure, EC2, S3, Lambda, and serverless architecture",
    energy: 65,
    orbitRadius: 260,
    relatedIds: [10, 20],
  },
  
  // Orbit 4: Concepts & Methodologies (Outer - 340px)
  {
    id: 9,
    title: "AI & Neural Networks",
    icon: TbBrain,
    date: "Concept",
    status: "in-progress",
    content: "Understanding of artificial intelligence fundamentals and neural networks",
    energy: 55,
    orbitRadius: 340,
    relatedIds: [7, 10],
  },
  {
    id: 10,
    title: "Cloud Computing",
    icon: BsCloudFill,
    date: "Concept",
    status: "in-progress",
    content: "Working with cloud services and distributed systems",
    energy: 65,
    orbitRadius: 340,
    relatedIds: [3, 5, 9, 21],
  },
  {
    id: 12,
    title: "Agile",
    icon: AiOutlineTeam,
    date: "Methodology",
    status: "completed",
    content: "Experience with agile development practices and workflows",
    energy: 85,
    orbitRadius: 340,
    relatedIds: [11, 22, 23],
  },
  {
    id: 22,
    title: "Scrum",
    icon: AiOutlineProject,
    date: "Methodology",
    status: "completed",
    content: "Scrum framework implementation and sprint management",
    energy: 85,
    orbitRadius: 340,
    relatedIds: [12, 23],
  },
  {
    id: 23,
    title: "Jira",
    icon: SiJira,
    date: "Tool",
    status: "completed",
    content: "Project management, issue tracking, and agile board management",
    energy: 90,
    orbitRadius: 340,
    relatedIds: [12, 22],
  },
];

const Skills = () => {
  return (
    <div className="relative bg-black">
      {/* Header Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            Interactive skill constellation - Click on any node to explore connections
          </p>
        </motion.div>
      </div>

      {/* Radial Orbital Timeline */}
      <RadialOrbitalTimeline timelineData={skillsTimelineData} />
    </div>
  );
};

export default Skills;
