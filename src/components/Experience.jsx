import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
  {
    title: 'Full Stack Intern',
    org: 'Ethnus',
    duration: 'Feb 2025 – May 2025',
    type: 'Internship',
    description: 'Built a recipe app handling 10K+ entries. Designed UI and backend integration for real-time search.',
    number: '01',
  },
  {
    title: 'President',
    org: 'Punjabi Club, VIT Bhopal',
    duration: 'Aug 2025 – Present',
    type: 'Leadership',
    description: 'Leading cultural initiatives to promote Punjabi heritage. Organizing events and managing a core team of members.',
    number: '02',
  },
  {
    title: 'Event Management Lead',
    org: 'Vitronix Club',
    duration: 'June 2024 – March 2025',
    type: 'Leadership',
    description: 'Managed technical + non-tech events. Coordinated logistics and communication for 500+ attendees.',
    number: '03',
  },
  {
    title: 'Treasurer',
    org: 'ACM VIT Bhopal',
    duration: 'Jan 2025 – Present',
    type: 'Leadership',
    description: 'Handling budgets, sponsor communication, and finance planning for major ACM tech events.',
    number: '04',
  },
  {
    title: 'Event Management',
    org: 'Advitya Fest',
    duration: '2024, 2025',
    type: 'Volunteership',
    description: 'Coordinated event flow and handled logistics for flagship cultural fest.',
    number: '05',
  },
];

const Card = ({ exp, index, progress, range, targetScale }) => {
  const cardRef = useRef(null);
  
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={cardRef}
      className="sticky top-[100px] h-screen flex items-center justify-center"
    >
      <motion.div
        style={{ 
          scale,
          transformOrigin: 'top center',
        }}
        className="w-full max-w-5xl mx-4 h-[500px] rounded-[40px] bg-gradient-to-br from-neutral-900 via-black to-neutral-950 border border-white/10 shadow-2xl overflow-hidden relative"
      >
        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent pointer-events-none" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(34, 211, 238, 0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Large number */}
        <div className="absolute -top-10 -right-10 text-[15rem] font-black text-cyan-400/5 select-none leading-none">
          {exp.number}
        </div>

        {/* Cyan accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400/50 via-cyan-400/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
          <div>
            {/* Type badge */}
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-cyan-400 bg-cyan-400/10 backdrop-blur-sm rounded-full border border-cyan-400/30">
                {exp.type}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
              {exp.title}
            </h3>

            {/* Organization */}
            <div className="text-xl md:text-2xl font-bold text-cyan-400 mb-2">
              {exp.org}
            </div>
          </div>

          {/* Bottom section */}
          <div className="space-y-3">
            {/* Duration */}
            <div className="text-base md:text-lg text-neutral-400 font-medium">
              {exp.duration}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-cyan-400/30 via-cyan-400/10 to-transparent" />

            {/* Description */}
            <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
              {exp.description}
            </p>
          </div>
        </div>

        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section className="relative bg-black">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(34, 211, 238, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Header Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            My journey through internships, leadership roles, and volunteering experiences
          </p>
        </motion.div>
      </div>

      {/* Cards Container */}
      <div ref={containerRef} className="relative" style={{ height: `${experiences.length * 100}vh` }}>
        {experiences.map((exp, i) => {
          const targetScale = 1 - ((experiences.length - i) * 0.05);
          return (
            <Card
              key={i}
              exp={exp}
              index={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
