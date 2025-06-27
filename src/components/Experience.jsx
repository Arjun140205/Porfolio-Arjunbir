// This file will be renamed to Experience.jsx and Cognifyz internship content will be removed. Waiting for user to provide new content.

import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Footer from './Footer';

const experiences = [
  {
    title: 'Full Stack Intern',
    org: 'Ethnus',
    duration: 'Feb 2025 – May 2025',
    type: 'Internship',
    description: 'Built a recipe app handling 10K+ entries. Designed UI and backend integration for real-time search.'
  },
  {
    title: 'President',
    org: 'Punjabi Club, VIT Bhopal',
    duration: 'Aug 2025 – Present',
    type: 'Leadership',
    description: 'Leading cultural initiatives to promote Punjabi heritage. Organizing events and managing a core team of members.'
  },
  {
    title: 'Event Management Lead',
    org: 'Vitronix Club',
    duration: 'June 2024 – March 2025',
    type: 'Leadership',
    description: 'Managed technical + non-tech events. Coordinated logistics and communication for 500+ attendees.'
  },
  {
    title: 'Treasurer',
    org: 'ACM VIT Bhopal',
    duration: 'Jan 2025 – Present',
    type: 'Leadership',
    description: 'Handling budgets, sponsor communication, and finance planning for major ACM tech events.'
  },
  {
    title: 'Event Management',
    org: 'Advitya Fest',
    duration: '2024, 2025',
    type: 'Volunteership',
    description: 'Coordinated event flow and handled logistics for flagship cultural fest.'
  },
];

const groups = [
  { heading: 'Internship', type: 'Internship' },
  { heading: 'Leadership Role', type: 'Leadership' },
  { heading: 'Volunteership', type: 'Volunteership' },
];

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
  hover: {
    scale: 1.025,
    boxShadow: '0 8px 32px 0 rgba(34,211,238,0.10), 0 1.5px 8px 0 #a78bfa44',
    borderColor: '#22d3ee',
  },
};

const Experience = () => (
  <div className="min-h-screen bg-black flex flex-col">
    <div className="flex-1 flex flex-col items-center py-20 px-4 relative overflow-x-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl font-extrabold text-cyan-400 mb-14 text-center drop-shadow-lg"
      >
        Experience
      </motion.h1>
      <div className="w-full max-w-3xl flex flex-col gap-16 z-10">
        {groups.map(group => {
          const groupExps = experiences.filter(e => e.type === group.type);
          if (groupExps.length === 0) return null;
          return (
            <div key={group.type}>
              <motion.h2
                variants={headingVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="text-3xl sm:text-4xl font-extrabold text-white mb-8 pl-2 drop-shadow-lg text-left"
              >
                {group.heading}
              </motion.h2>
              <div className="flex flex-col gap-8">
                {groupExps.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-7 shadow-xl transition-all duration-300 group overflow-hidden hover:border-cyan-400/60"
                    style={{ boxShadow: '0 8px 32px 0 rgba(34,211,238,0.10), 0 1.5px 8px 0 #a78bfa44' }}
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-2 rounded-2xl bg-cyan-400/10 blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none z-0" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl font-bold text-white drop-shadow-lg">{exp.title}</span>
                        {exp.org && <span className="text-base text-neutral-300 font-medium ml-2">{exp.org}</span>}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2">
                        <FaRegCalendarAlt className="inline-block mr-1" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="text-[15px] text-neutral-200 leading-relaxed">
                        {exp.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <Footer />
  </div>
);

export default Experience;
