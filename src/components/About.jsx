import React, { lazy, Suspense } from 'react';
import { motion } from "framer-motion";
import '../App.css';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

// Lazy load the ServiceCard component
//const ServiceCard = lazy(() => import('./ServiceCard'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-64">
    <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='min-h-screen bg-black pt-24 pb-24'
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
                <div className="text-lg text-neutral-400 mb-1">Arjun140205 · he/him</div>
                <div className="text-center lg:text-left text-neutral-300 mb-4">Your attitude is a product of your belief system.</div>
                <div className="flex flex-col items-center lg:items-start gap-2 text-neutral-400">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 1011.314-11.314l-4.243 4.243z" /></svg>
                    Chandigarh,Punjab
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v1m0 4v.01M8 12v1m0 4v.01M12 8v.01M12 16v.01M12 12v.01M12 20v.01M12 4v.01" /></svg>
                    arjunbirsingh1699@gmail.com
                  </div>
                </div>
              </div>
              {/* Right: Introduction Section */}
              <div className="w-full -mt-6 lg:-mt-8 max-w-none lg:flex-[3]">
                <div className="w-full backdrop-blur-sm rounded-3xl py-6 px-6 bg-black/20 border border-gray-800/50 h-full">
                  <motion.h2
                    className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-6 text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                  >
                    Introduction
                  </motion.h2>
                  <div className="space-y-6 text-[17px] leading-[30px] w-full text-justify">
                    <motion.p
                      className="text-gray-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    >
                      What excites me most about web development is not just the ability to build, but the power to create experiences that resonate. I work at the intersection of technology and human emotion, crafting digital platforms that are not only functional but thoughtful, responsive, and deeply intentional.
                    </motion.p>
                    <motion.p
                      className="text-gray-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                    >
                      My expertise lies in the MERN stack, where I transform abstract ideas into intuitive, production-ready applications. I've always been drawn to projects that carry weight — tools that inform, uplift, or make someone feel understood, especially in the realms of mental health, education, and sustainability.
                    </motion.p>
                    <motion.p
                      className="text-gray-200"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                    >
                      I'm not here just to "code things that work." I'm here to build things that matter.
                    </motion.p>
                    <div className="flex flex-wrap gap-4 items-center mt-8">
                      <a
                        className="text-green-300 hover:text-green-500 duration-300"
                        href="https://www.linkedin.com/in/arjunbir-singh-736620280/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Connect with me on LinkedIn
                      </a>
                      <span className="text-gray-400">•</span>
                      <a
                        className="text-purple-300 hover:text-purple-400 duration-300"
                        href="https://www.instagram.com/arjunbir_singhh?igsh=MWcyYWoyN2QwazR4OA=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Follow me on Instagram
                      </a>
                    </div>
                    <div className="mt-8">
                      <ButtonLink
                        url="https://drive.google.com/file/d/19fccecE7QFaHMwweGXZSdh3Vr7OIcmqU/view?usp=sharing"
                        text="View Resume →"
                        padding={`p-3`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
