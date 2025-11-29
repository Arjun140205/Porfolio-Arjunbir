import React from 'react';
import { motion } from "framer-motion";
import '../App.css';
import LogoLoop from './LogoLoop';
import soundManager from '../utils/soundEffects';

// Tech stack logos - Faded monochrome style
const techLogos = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', alt: 'Express' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', alt: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', alt: 'Next.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', alt: 'Git' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', alt: 'AWS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', alt: 'Firebase' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', alt: 'Vercel' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
];

const About = () => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='min-h-screen bg-black pt-36 pb-24' // was pt-24
      >
        <section className='text-white container mx-auto px-4 md:px-8' id='about'>
          {/* Main content wrapper */}
          <div className="max-w-7xl mx-auto px-4 pt-0 pb-12">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left: Profile Section */}
              <div className="flex flex-col items-center w-full max-w-xs mx-auto lg:mx-0 lg:items-start mt-0 lg:mt-0 lg:flex-[1]">
                <div className="relative w-56 h-56 mb-4 flex items-center justify-center">
                  {/* Glassmorphism/blurred background */}
                  <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-lg shadow-xl shadow-cyan-400/10 border border-white/20" />
                  {/* Softer ambient glow */}
                  <div className="absolute -inset-2 rounded-full bg-cyan-400/5 blur-3xl" />
                  {/* Profile image with enhanced effects */}
                  <div className="relative w-56 h-56 rounded-full overflow-hidden z-10">
                    <img
                      src={process.env.PUBLIC_URL + '/arjunbir-profile.jpg'}
                      alt="Profile"
                      className="w-56 h-56 rounded-full object-cover"
                      style={{ filter: 'contrast(1.08)' }}
                      loading="lazy"
                    />
                    {/* Vignette overlay */}
                    <div className="pointer-events-none absolute inset-0 rounded-full" style={{
                      background: 'radial-gradient(circle, transparent 60%, rgba(0,0,0,0.35) 100%)'
                    }} />
                  </div>
                  {/* Subtle overlay for exposure */}
                  <div className="absolute inset-0 rounded-full bg-black/10 z-20 pointer-events-none" />
                </div>
                <h1 className="text-3xl font-bold text-white mt-2">Arjunbir Singh</h1>
                <div className="text-center lg:text-left text-neutral-300 mb-4">Your attitude is a product of your belief system.</div>
                <div className="flex flex-col items-center lg:items-start gap-2 text-neutral-400">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 1011.314-11.314l-4.243 4.243z" /></svg>
                    India
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v1m0 4v.01M8 12v1m0 4v.01M12 8v.01M12 16v.01M12 12v.01M12 20v.01M12 4v.01" /></svg>
                    arjunbirsingh1699@gmail.com
                  </div>
                </div>
              </div>
              {/* Right: Introduction Section */}
              <div className="w-full -mt-6 lg:-mt-8 max-w-none lg:flex-[3]">
                <div className="w-full py-4 sm:py-6">
                  <motion.h2
                    className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-12 text-left tracking-tight"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Who I Am
                    </span>
                  </motion.h2>
                  
                  <div className="space-y-10 text-lg sm:text-xl leading-relaxed">
                    {/* Paragraph 1 with staggered word animation */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ staggerChildren: 0.015 }}
                      className="group"
                    >
                      <motion.p 
                        className="text-gray-300 text-left sm:text-justify font-light" 
                        style={{ lineHeight: '1.8' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      >
                        What captivates me about{' '}
                        <span className="relative inline-block">
                          <span className="relative z-10 text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                            web development
                          </span>
                          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </span>{' '}
                        is not merely the act of building digital systems, but the privilege of{' '}
                        <span className="text-white font-medium hover:text-cyan-300 transition-colors duration-200 cursor-default">
                          crafting experiences
                        </span>{' '}
                        that truly resonate with people. I see myself working at the{' '}
                        <span className="relative inline-block group/cross">
                          <span className="text-white font-medium group-hover/cross:text-purple-400 transition-colors duration-200">
                            crossroads of technology and human emotion
                          </span>
                          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover/cross:opacity-100 transition-opacity duration-300"></span>
                        </span>
                        , designing interfaces that are not only functional, but also{' '}
                        <span className="text-cyan-300 font-medium hover:text-cyan-100 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-200 cursor-default">
                          deliberate, empathetic, and refined
                        </span>{' '}
                        in their intent.
                      </motion.p>
                    </motion.div>

                    {/* Paragraph 2 with slide-in animation */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                      className="group"
                    >
                      <motion.p 
                        className="text-gray-300 text-left sm:text-justify font-light" 
                        style={{ lineHeight: '1.8' }}
                      >
                        My expertise lies within the{' '}
                        <span className="relative inline-block group/mern">
                          <span className="text-white font-bold group-hover/mern:text-transparent group-hover/mern:bg-gradient-to-r group-hover/mern:from-green-400 group-hover/mern:via-cyan-400 group-hover/mern:to-blue-400 group-hover/mern:bg-clip-text transition-all duration-300">
                            MERN stack
                          </span>
                          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 transform scale-x-0 group-hover/mern:scale-x-100 transition-transform duration-300"></span>
                        </span>
                        , where I translate{' '}
                        <span className="text-white font-medium hover:text-blue-300 transition-colors duration-200 cursor-default">
                          abstract ideas
                        </span>{' '}
                        into purposeful,{' '}
                        <span className="text-cyan-300 font-medium hover:text-cyan-100 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)] transition-all duration-200 cursor-default">
                          production-grade applications
                        </span>
                        . I am drawn to projects that carry{' '}
                        <span className="relative inline-block group/sig">
                          <span className="text-white font-semibold group-hover/sig:text-yellow-300 transition-colors duration-200">
                            significance
                          </span>
                          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-yellow-400 opacity-0 group-hover/sig:opacity-100 transition-opacity duration-300"></span>
                        </span>
                        , platforms that{' '}
                        <span className="text-white font-medium hover:text-green-300 transition-colors duration-200 cursor-default">
                          educate, uplift, or offer a sense of recognition
                        </span>
                        , especially in areas like{' '}
                        <span className="text-purple-300 font-medium hover:text-purple-100 hover:drop-shadow-[0_0_8px_rgba(192,132,252,0.4)] transition-all duration-200 cursor-default">
                          mental health, learning, and sustainability
                        </span>
                        .
                      </motion.p>
                    </motion.div>

                    {/* Paragraph 3 - Bold statement with scale animation */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                      className="relative pl-6 border-l-2 border-cyan-400/30 hover:border-cyan-400 transition-colors duration-500"
                    >
                      <motion.p 
                        className="text-xl sm:text-2xl lg:text-3xl font-light text-left"
                        style={{ lineHeight: '1.6' }}
                      >
                        <span className="text-gray-400 font-light">I'm not here just to </span>
                        <span className="relative inline-block group/code">
                          <span className="text-gray-500 line-through decoration-red-500/50 group-hover/code:decoration-red-500 transition-colors duration-200 font-light">
                            "code things that work."
                          </span>
                        </span>
                        <br />
                        <span className="text-white font-medium">I'm here to </span>
                        <span className="relative inline-block">
                          <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text font-semibold hover:from-cyan-300 hover:via-blue-300 hover:to-purple-300 transition-all duration-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.3)]">
                            build things that matter
                          </span>
                          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full"></span>
                        </span>
                        <span className="text-white font-medium">.</span>
                      </motion.p>
                    </motion.div>

                    {/* Resume Button - Redesigned */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                      className="mt-8"
                    >
                      <a
                        href="https://drive.google.com/file/d/19fccecE7QFaHMwweGXZSdh3Vr7OIcmqU/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.play('buttonClick')}
                        onMouseEnter={() => soundManager.play('hover')}
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-105"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative z-10 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          View Resume
                        </span>
                        <svg className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Logo Loop - Inside About Section */}
          <div className="max-w-7xl mx-auto px-4 mt-12 pb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <div className="w-full overflow-hidden">
                <LogoLoop
                  logos={techLogos}
                  speed={60}
                  direction="left"
                  logoHeight={64}
                  gap={48}
                  pauseOnHover={false}
                  fadeOut={true}
                  fadeOutColor="#000000"
                  scaleOnHover={false}
                />
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default About;
