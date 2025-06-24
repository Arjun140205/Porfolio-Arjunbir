import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt} from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText(prev => prev + name[ref.current - 1]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='area relative z-0 bg-black w-screen min-h-screen flex flex-col'>
      <Background />
      <ul className="circles">
        <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
      </ul>
      {/* HERO SECTION - FULL SCREEN CENTERED */}
      <div className='hero flex justify-center items-center text-white min-h-screen px-2 sm:px-0' id='hero'>
        <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl flex flex-col items-center w-full max-w-4xl'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mt-2 text-center break-words'
          >
            Hi, I'm&nbsp;<span className='text-cyan-400 font-extrabold'>{text}</span>
          </motion.h1>
          <p className='mt-3 text-base xs:text-lg sm:text-xl text-center max-w-xl'>
            I turn ideas into fast, responsive, and reliable full-stack web applications.
          </p>
        </div>      
      </div>
      {/* SECTION BREAK BAR */}
      <div className="w-full flex justify-center items-center my-8">
        <div className="transition-all duration-700 ease-in-out h-1 w-4/5 sm:w-2/3 md:w-1/2 bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full shadow-lg"></div>
      </div>
      {/* FULL STACK DEVELOPMENT SECTION */}
      <div className="relative z-20 flex flex-col items-center justify-center py-8 sm:py-12 bg-black bg-opacity-80 text-white px-2" id="what-i-do">
        {/* Animated Section Break Bar */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-4/5 sm:w-2/3 md:w-1/2 h-2 mb-8 bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full shadow-2xl"
        />
      </div>
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
          <span className="dock-icon"><FaJava className="text-2xl sm:text-3xl md:text-4xl text-orange-700" /></span>
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
      {/* Footer at the end of the page */}
      <Footer />
    </div>
  );
}

export default Home;
