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
      <div className='hero flex justify-center items-center text-white min-h-screen' id='hero'>
        <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl flex flex-col items-center'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='text-6xl sm:text-8xl font-extrabold mt-2 text-center'
          >
            Hi, I'm&nbsp;<span className='text-cyan-400 font-extrabold'>{text}</span>
          </motion.h1>
          <p className='mt-3 text-xl text-center'>
            I turn ideas into fast, responsive, and reliable full-stack web applications.
          </p>
        </div>      
      </div>
      {/* SECTION BREAK BAR */}
      <div className="w-full flex justify-center items-center my-8">
        <div className="transition-all duration-700 ease-in-out h-1 w-1/2 bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full shadow-lg"></div>
      </div>
      {/* FULL STACK DEVELOPMENT SECTION */}
      <div className="relative z-20 flex flex-col items-center justify-center py-12 bg-black bg-opacity-80 text-white" id="what-i-do">
        {/* Animated Section Break Bar */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-1/2 h-2 mb-8 bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full shadow-2xl"
        />
      </div>
      {/* FULL STACK DEVELOPMENT SECTION */}
      <div className="relative z-20 flex flex-col items-center justify-center py-12 bg-black bg-opacity-80 text-white" id="what-i-do">
        <h1 className="text-7xl sm:text-8xl font-extrabold mb-6 drop-shadow-lg text-white" style={{ textShadow: '0 4px 24px rgba(0,255,255,0.4), 0 2px 8px rgba(0,0,0,0.5)' }}>Here is what I do</h1>
        <h2 className="text-4xl font-bold mb-6">Full Stack Development</h2>
        <div className="flex gap-2 md:gap-4 dock-effect mb-6">
          <span className="dock-icon"><FaHtml5 className="text-orange-500" /></span>
          <span className="dock-icon"><FaCss3Alt className="text-blue-500" /></span>
          <span className="dock-icon"><FaJs className="text-yellow-400" /></span>
          <span className="dock-icon"><FaReact className="text-cyan-400" /></span>
          <span className="dock-icon"><FaNodeJs className="text-green-500" /></span>
          <span className="dock-icon"><FaPython className="text-blue-300" /></span>
          <span className="dock-icon"><FaJava className="text-orange-700" /></span>
          <span className="dock-icon"><SiMysql className="text-blue-400" /></span>
          <span className="dock-icon"><SiMongodb className="text-green-600" /></span>
          <span className="dock-icon"><FaGitAlt className="text-orange-600" /></span>
        </div>
        <ul className="text-3xl text-left text-lg list-disc list-inside space-y-2 max-w-xl">
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
