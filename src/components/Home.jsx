import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt} from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState('');
  const heroRef = useRef(null);
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText(prev => prev + name[ref.current - 1]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Show button only when hero is in view
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setShowScrollButton(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  // Dedicated scroll handler
  const handleScrollToSection = () => {
    const el = document.getElementById('what-i-do');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Background only */}
      <div className='area'>
        <Background />
        <ul className="circles">
          <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
        </ul>
      </div>
      {/* Main content above background */}
      <div className='relative z-10 w-screen min-h-screen flex flex-col'>
        {/* HERO SECTION - FULL SCREEN CENTERED */}
        <div ref={heroRef} className='hero flex justify-center items-center text-white min-h-screen px-2 sm:px-0 -mt-8' id='hero'>
          <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl flex flex-col items-center w-full max-w-4xl'>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className='text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mt-2 text-center break-words leading-tight sm:leading-tight md:leading-tight'
            >
              Hi, I'm&nbsp;<span className='text-cyan-400 font-extrabold'>{text}</span>
            </motion.h1>
            <p className='mt-2 sm:mt-3 text-sm xs:text-base sm:text-xl text-center max-w-xs xs:max-w-xl'>
              I turn ideas into fast, responsive, and reliable full-stack web applications.
            </p>
          </div>      
        </div>
        {/* BOUNCING SCROLL TO SEE MORE BUTTON - only when hero is visible */}
        {showScrollButton && (
          <motion.button
            initial={{ y: 0 }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto mb-2 -mt-16 px-6 py-2 xs:px-8 xs:py-3 rounded-full bg-white text-black font-bold text-base xs:text-lg shadow-lg border-2 border-black/80 hover:bg-cyan-400 hover:text-white transition-colors duration-200 flex items-center justify-center"
            style={{ position: 'relative', zIndex: 50, pointerEvents: 'auto' }}
            onClick={handleScrollToSection}
          >
            Scroll To See More
          </motion.button>
        )}
        {/* SECTION BREAK BAR - animated, above 'Here is what I do' */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '66%', opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-1 mx-auto my-8 bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full shadow-lg"
          style={{ minWidth: '120px', maxWidth: '800px' }}
        />
        {/* FULL STACK DEVELOPMENT SECTION */}
        <div className="relative z-20 flex flex-col items-center justify-center py-8 sm:py-12 bg-black bg-opacity-80 text-white px-2" id="what-i-do">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg text-white text-center" style={{ textShadow: '0 4px 24px rgba(0,255,255,0.4), 0 2px 8px rgba(0,0,0,0.5)' }}>Here is what I do</h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-center">Full Stack Development</h2>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 dock-effect mb-6 w-full max-w-2xl">
            <span className="dock-icon"><FaHtml5 className="text-2xl sm:text-3xl md:text-4xl text-orange-500" /></span>
            <span className="dock-icon"><FaCss3Alt className="text-2xl sm:text-3xl md:text-4xl text-blue-500" /></span>
            <span className="dock-icon"><FaJs className="text-2xl sm:text-3xl md:text-4xl text-yellow-400" /></span>
            <span className="dock-icon"><FaReact className="text-2xl sm:text-3xl md:text-4xl text-cyan-400" /></span>
            <span className="dock-icon"><FaNodeJs className="text-2xl sm:text-3xl md:text-4xl text-green-500" /></span>
            <span className="dock-icon"><FaPython className="text-2xl sm:text-3xl md:text-4xl text-blue-300" /></span>
           
            <span className="dock-icon"><SiMysql className="text-2xl sm:text-3xl md:text-4xl text-blue-400" /></span>
            <span className="dock-icon"><SiMongodb className="text-2xl sm:text-3xl md:text-4xl text-green-600" /></span>
            <span className="dock-icon"><FaGitAlt className="text-2xl sm:text-3xl md:text-4xl text-orange-600" /></span>
          </div>
          <ul className="text-base xs:text-lg sm:text-xl text-left list-disc list-inside space-y-2 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl mx-auto">
            <li>Develop highly interactive Front end / User Interfaces for your web and mobile applications</li>
            <li>Building responsive website front end using ReactJS</li>
            <li>Creating application backend in Node, Express & Flask</li>
            <li>Integration of third party services such as Firebase/ MongoDB</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
