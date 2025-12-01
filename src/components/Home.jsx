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
        {/* HERO SECTION - FULL SCREEN */}
        <div className='hero flex justify-center items-center text-white min-h-screen px-6 py-12 sm:px-6' id='hero'>
          <div className='flex flex-col justify-center items-center w-full max-w-5xl space-y-8 sm:space-y-8 h-full'>
            {/* Greeting - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center hidden sm:block'
            >
              <p className='text-sm sm:text-base text-neutral-400 tracking-widest uppercase font-light'>
                Welcome to my portfolio
              </p>
            </motion.div>

            {/* Main Heading - Bigger on mobile */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className='text-5xl xs:text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center leading-tight'
            >
              Hi, I'm{' '}
              <span className='block sm:inline mt-3 sm:mt-0'>
                <span className='bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent'>
                  {text}
                </span>
              </span>
            </motion.h1>

            {/* Role - Bigger on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className='text-center space-y-4'
            >
              <h2 className='text-xl xs:text-2xl sm:text-xl md:text-2xl font-semibold text-white px-4'>
                <span className='sm:hidden'>Aspiring Software Developer</span>
                <span className='hidden sm:inline'>Aspiring Full-Stack Developer | Cloud, Databases & Data Analytics Enthusiast</span>
              </h2>
              <div className='flex items-center justify-center hidden sm:flex'>
                <span className='px-5 py-2 border-2 border-white/20 text-neutral-300 text-sm font-medium rounded-full flex items-center gap-2 backdrop-blur-sm hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300'>
                  <svg className='w-4 h-4 text-cyan-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
                  </svg>
                  Based in India
                </span>
              </div>
            </motion.div>

            {/* Description - Visible on mobile with bigger text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className='text-lg leading-relaxed sm:text-lg md:text-xl text-center max-w-3xl text-neutral-300 sm:leading-relaxed font-light px-4'
            >
              Transforming innovative ideas into scalable, high-performance web applications with modern technologies and data-driven solutions
            </motion.p>
          </div>

          {/* Unique Scroll Down Indicator - Outside content div with higher z-index */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className='absolute bottom-8 left-1/2 -translate-x-1/2 z-50'
          >
            <a
              href='#about'
              className='group flex flex-col items-center gap-3'
            >
              {/* Animated chevrons */}
              <div className='flex flex-col gap-1'>
                <motion.svg
                  animate={{ y: [0, 4, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                  className='w-6 h-6 text-cyan-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </motion.svg>
                <motion.svg
                  animate={{ y: [0, 4, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                  className='w-6 h-6 text-cyan-400 -mt-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </motion.svg>
              </div>
              
              {/* Vertical line */}
              <motion.div
                animate={{ scaleY: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className='w-px h-16 bg-gradient-to-b from-cyan-400 to-transparent origin-top'
              />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
