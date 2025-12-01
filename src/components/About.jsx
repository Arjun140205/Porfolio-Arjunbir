import React from 'react';
import { motion } from "framer-motion";
import '../App.css';
import { AnimatedTiles } from './ui/animated-tiles';
import { MarqueeAnimation } from './ui/marquee-effect';

// Animated Tiles Profile Component
const AnimatedTilesProfile = () => {
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Tiles Container */}
      <div className="relative w-full max-w-[400px] mx-auto mb-6 rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl shadow-black/50">
        {/* Tiles wrapper - exact dimensions for 8 cols x 12 rows of 50px tiles */}
        <div className="relative w-[400px] h-[600px] mx-auto">
          <AnimatedTiles
            rows={12}
            cols={8}
            tileSize={50}
            imageUrl={`${process.env.PUBLIC_URL}/arjun2.png`}
            backgroundColor="black"
            offsetX={-40}
            offsetY={-60}
          />
        </div>
        
        {/* Gradient overlay at bottom for text readability */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/95 to-transparent pointer-events-none z-[5]" />
        
        {/* Profile Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Arjunbir Singh
            </h1>
            <p className="text-neutral-300 text-sm mb-6 italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              "On the path to engineering a version of myself that outperforms yesterday, exactly what my goals require."
            </p>
            
            {/* Subtle Resume Button */}
            <a
              href="https://drive.google.com/file/d/19fccecE7QFaHMwweGXZSdh3Vr7OIcmqU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-neutral-300 hover:text-white border-2 border-white/20 hover:border-white/60 rounded-lg transition-all duration-300 backdrop-blur-sm bg-black/40 hover:bg-black/60 hover:shadow-lg hover:shadow-white/10"
            >
              <span className="font-medium">Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </motion.div>
        </div>
        

      </div>
    </motion.div>
  );
};



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
            <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
              {/* Left: Profile Section with Animated Tiles */}
              <div className="flex flex-col items-center justify-center w-full max-w-xs mx-auto lg:mx-0 lg:flex-[1] -mt-12 lg:-mt-16">
                <AnimatedTilesProfile />
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


                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee Text - Inside About Section */}
          <div className="max-w-7xl mx-auto px-4 mt-16 pb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <MarqueeAnimation 
                direction="left" 
                baseVelocity={2}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/10 hover:text-white/20 transition-colors duration-500"
              >
                Web Systems • Databases • Cloud • Product Thinking • Problem Solver • MERN Stack • Tech Enthusiast • 
              </MarqueeAnimation>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default About;
