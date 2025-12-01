import React from "react";
import { HeroParallax } from "./blocks/hero-parallax-custom";

// Use absolute paths from public folder for deployment
const jordanFitnessImg = "/projects/jordanfitnessclub.png";
const recipediaImg = "/projects/recipedia.png";
const unheardVoicesImg = "/projects/unheardvoices.png";
const cropifyPlaceholder = "/projects/placeholder-cropify.svg";
const voicelessPlaceholder = "/projects/placeholder-voiceless.svg";
const gmailPlaceholder = "/projects/placeholder-gmail.svg";
const bleedImg = "/projects/bleedforacause.png";
const sleepTrackerImg = "/projects/sleeptracker.png";
const fiftyShadesImg = "/projects/fiftyshades.png";
const kanbanPlaceholder = "/projects/placeholder-kanban.svg";
const noBrokerPlaceholder = "/projects/placeholder-nobroker.svg";
const referralPlaceholder = "/projects/placeholder-referral.svg";
const testGenPlaceholder = "/projects/placeholder-testgen.svg";

const projects = [
  // Front row projects (visible first)
  {
    title: "Sleep Tracker",
    description: "A personal wellness tool that helps users monitor and improve their sleep habits by logging routines, visualizing patterns, and generating insights for better sleep quality.",
    link: "https://github.com/Arjun140205/Sleep-tracker",
    thumbnail: sleepTrackerImg,
    technologies: ["React", "JavaScript", "Firebase", "Chart.js", "Tailwind CSS"],
  },
  {
    title: "Bleed for a Cause",
    description: "A blood donation platform connecting hospitals, donors, and patients. Helps hospitals manage blood inventory, donors track donation history, and patients request blood efficiently.",
    link: "https://bleed-for-a-cause.vercel.app/",
    thumbnail: bleedImg,
    technologies: ["Node.js", "React.js", "Express.js", "OpenAI", "Tailwind CSS", "LLM"],
  },
  {
    title: "Unheard Voices",
    description: "A platform for sharing untold stories and experiences, fostering empathy and understanding.",
    link: "https://github.com/Arjun140205/Unheard-Voices",
    thumbnail: unheardVoicesImg,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Jordan Fitness Club",
    description: "Jordan Fitness Club is a modern fitness application built using React, Node.js, and MongoDB. Users can track their workouts, nutrition, and progress.",
    link: "https://github.com/Arjun140205/Jordan-Fitness-Club",
    thumbnail: jordanFitnessImg,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Recipedia",
    description: "Search recipes by ingredients with a user-friendly UI. Built with React and integrated external recipe APIs.",
    link: "https://github.com/Arjun140205/Recipe-Finder-Reactapp",
    thumbnail: recipediaImg,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "50 Shades of Hue",
    description: "A Next.js application generating pixel-perfect color palettes with curated themes. Features dynamic previews for websites and presentations with real-time palette generation, improving design workflow efficiency by 3.2×.",
    link: "https://fifty-shades-of-hue.vercel.app/",
    thumbnail: fiftyShadesImg,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
  },
  // Additional projects
  {
    title: "No-Broker Property",
    description: "A direct property marketplace connecting landowners and clients without intermediaries. Features real-time chat for seamless communication between property owners and potential buyers or renters.",
    link: "#",
    thumbnail: noBrokerPlaceholder,
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
  },
  {
    title: "Realtime Kanban Board",
    description: "A real-time Kanban board for team collaboration with intelligent auto-assignment logic. Tracks 150+ task activities with custom logging and conflict detection, reducing manual effort by 70%.",
    link: "#",
    thumbnail: kanbanPlaceholder,
    technologies: ["Node.js", "React.js", "Socket.io", "Express.js", "MongoDB", "JWT"],
  },
  {
    title: "Referral Chain",
    description: "A networking platform connecting students with company employees for job referrals. Streamlines the referral process to improve shortlisting chances and hiring opportunities.",
    link: "#",
    thumbnail: referralPlaceholder,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
  {
    title: "AI Test Case Generator",
    description: "An automated testing tool that generates comprehensive test cases and summaries by analyzing GitHub repositories. Simply paste a GitHub URL to receive AI-powered test coverage.",
    link: "#",
    thumbnail: testGenPlaceholder,
    technologies: ["Python", "OpenAI", "React", "Node.js", "GitHub API"],
  },
  {
    title: "Cropify",
    description: "Cropify allows users to upload images and use cropping/editing tools. Built with React and Node.js for seamless image manipulation.",
    link: "https://github.com/Arjun140205/Crop-Yield-Predictor-",
    thumbnail: cropifyPlaceholder,
    technologies: ["React", "JavaScript", "API"],
  },
  {
    title: "Voiceless Boundaries",
    description: "A web application that helps professionals talk beyond their language boundaries by providing a platform for real-time translation.",
    link: "https://github.com/Arjun140205/Voiceless-Boundaries",
    thumbnail: voicelessPlaceholder,
    technologies: ["Next.js", "Tailwind", "API"],
  },
  {
    title: "Gmail Genius",
    description: "An intelligent email management system that categorizes and prioritizes emails using AI and advanced Data Analytics.",
    link: "https://github.com/Arjun140205/Gmail-genius",
    thumbnail: gmailPlaceholder,
    technologies: ["React", "Google Cloud", "Node.js", "API"],
  },
];

const Projects = () => {
  return (
    <div className="relative bg-black">
      <HeroParallax products={projects} />
    </div>
  );
};

export default Projects;
