import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';

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
        <div className='hero flex justify-center items-center text-white min-h-screen px-2 sm:px-0 -mt-8' id='hero'>
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
      </div>
    </>
  );
}

export default Home;
