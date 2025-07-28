import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import { BackgroundPaths } from './ui/BackgroundPaths';

const academics = [
  {
    title: 'Undergraduate Studies (B.Tech Program)',
    school: 'VELLORE INSTITUTE OF TECHNOLOGY BHOPAL',
    domain: 'COMPUTER SCIENCE AND ENGINEERING',
    year: 'Pursuing',
    link: 'https://vitbhopal.ac.in/',
    linkText: 'Visit VIT Bhopal University',
  },
  {
    title: 'Senior Secondary Education (12th Grade)',
    school: 'SHRI GURU HARKRISHAN MODEL SCHOOL',
    domain: 'PHYSICS CHEMISTRY MATHEMATICS',
    year: '2022',
    link: 'https://www.sghms.com/',
    linkText: 'Visit Shri Guru Harkrishan Model School',
  },
  {
    title: 'Secondary Education (10th Grade)',
    school: 'RM PUBLIC SCHOOL',
    domain: 'Standard Mathematics',
    year: '2020',
    link: 'https://rmpublicschool.com/',
    linkText: 'Visit RM Public School',
  },
];

// Responsive card height and spacing for vertical layout
const getCardHeight = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 400) return 180;
    if (window.innerWidth < 640) return 200;
    if (window.innerWidth < 900) return 220;
  }
  return 240;
};
const getCardSpacing = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 400) return 200;
    if (window.innerWidth < 640) return 240;
    if (window.innerWidth < 900) return 280;
  }
  return 320;
};

const CarouselPanel = ({ item, style, isActive, cardHeight }) => (
  <motion.div
    className={`absolute top-1/2 left-1/2 w-full max-w-[180px] xs:max-w-[200px] sm:max-w-[220px] md:max-w-[250px] h-auto flex flex-col items-center justify-center px-2 xs:px-3 sm:px-4 py-4 xs:py-5 sm:py-6 select-none pointer-events-auto bg-neutral-900/95 border border-white/10 rounded-lg xs:rounded-xl transition-all duration-300 z-10 overflow-hidden backdrop-blur-sm
      ${isActive ? 'shadow-[0_6px_30px_0_rgba(34,211,238,0.25)] ring-2 ring-cyan-400/60 shadow-cyan-400/20' : 'shadow-[0_4px_20px_0_rgba(0,0,0,0.3)]'}`}
    style={style}
    initial={false}
  >
    <div className="text-xs xs:text-sm sm:text-base md:text-lg font-extrabold tracking-tight text-white mb-1 xs:mb-2 leading-none text-center whitespace-pre-line relative w-full break-words">
      <span className="relative z-10 block w-full break-words">
        {item.school}
      </span>
      <span className="block mx-auto mt-1 xs:mt-2 h-0.5 w-6 xs:w-8 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 opacity-80" />
    </div>
    <div className="text-xs font-semibold text-gray-200 mb-1 text-center w-full break-words">{item.title}</div>
    <div className="text-xs text-gray-400 mb-1 xs:mb-2 text-center w-full break-words">{item.domain}</div>
    <div className="text-xs xs:text-sm font-mono font-bold text-gray-100 mb-2 xs:mb-3 text-center tracking-widest w-full break-words">{item.year}</div>
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-xs font-medium text-gray-300 hover:text-white underline underline-offset-2 transition-colors duration-200 w-full break-words"
    >
      {item.linkText} ↗
    </a>
  </motion.div>
);

const AnimatedBackground = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
    {/* Subtle animated lines */}
    <svg width="100%" height="100%" className="absolute inset-0" style={{opacity:0.13}}>
      <defs>
        <linearGradient id="bgline" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      {[...Array(12)].map((_, i) => (
        <line
          key={i}
          x1={`${8 + i * 8}%`} x2={`${8 + i * 8}%`} y1="0" y2="100%"
          stroke="url(#bgline)" strokeWidth="1.5"
        />
      ))}
    </svg>
    {/* Subtle animated horizontal lines */}
    <svg width="100%" height="100%" className="absolute inset-0" style={{opacity:0.09}}>
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1="0" x2="100%" y1={`${10 + i * 12}%`} y2={`${10 + i * 12}%`}
          stroke="#fff" strokeOpacity="0.09" strokeWidth="1"
        />
      ))}
    </svg>
  </div>
);

const Academics = () => {
  const [active, setActive] = useState(0); // Start at the first panel
  const N = academics.length;
  const [cardHeight, setCardHeight] = useState(getCardHeight());
  const [cardSpacing, setCardSpacing] = useState(getCardSpacing());

  // Swipe state
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchMoved, setTouchMoved] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseStartX, setMouseStartX] = useState(null);
  const [mouseStartY, setMouseStartY] = useState(null);
  const [mouseMoved, setMouseMoved] = useState(false);

  // Responsive card height and spacing
  React.useEffect(() => {
    const handleResize = () => {
      setCardHeight(getCardHeight());
      setCardSpacing(getCardSpacing());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard support (horizontal)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setActive((prev) => (prev - 1 + N) % N);
    if (e.key === 'ArrowRight') setActive((prev) => (prev + 1) % N);
  };

  // Touch/swipe handlers
  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length === 1) {
      setTouchStartX(e.touches[0].clientX);
      setTouchStartY(e.touches[0].clientY);
      setTouchMoved(false);
    }
  };
  const handleTouchMove = (e) => {
    if (!touchStartX || !touchStartY) return;
    const dx = e.touches[0].clientX - touchStartX;
    const dy = e.touches[0].clientY - touchStartY;
    if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
      setTouchMoved(true);
    }
  };
  const handleTouchEnd = (e) => {
    if (!touchStartX || !touchMoved) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) {
        // Swipe left
        setActive((prev) => (prev + 1) % N);
      } else {
        // Swipe right
        setActive((prev) => (prev - 1 + N) % N);
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
    setTouchMoved(false);
  };

  // Mouse drag handlers for desktop swipe
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only left click
    setMouseDown(true);
    setMouseStartX(e.clientX);
    setMouseStartY(e.clientY);
    setMouseMoved(false);
  };
  const handleMouseMove = (e) => {
    if (!mouseDown || mouseStartX === null || mouseStartY === null) return;
    const dx = e.clientX - mouseStartX;
    const dy = e.clientY - mouseStartY;
    if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
      setMouseMoved(true);
    }
  };
  const handleMouseUp = (e) => {
    if (!mouseDown || mouseStartX === null || !mouseMoved) return;
    const dx = e.clientX - mouseStartX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) {
        // Drag left
        setActive((prev) => (prev + 1) % N);
      } else {
        // Drag right
        setActive((prev) => (prev - 1 + N) % N);
      }
    }
    setMouseDown(false);
    setMouseStartX(null);
    setMouseStartY(null);
    setMouseMoved(false);
  };
  // Prevent unwanted text selection while dragging
  const handleDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="h-screen flex flex-col bg-black">
      <div
        className="flex-1 flex flex-col items-center justify-start relative overflow-hidden pt-2 xs:pt-3 sm:pt-4 pb-4 xs:pb-6 sm:pb-8 select-none"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDragStart={handleDragStart}
      >
        {/* Add the BackgroundPaths component behind AnimatedBackground */}
        <div className="absolute inset-0 w-full h-full z-0">
          <BackgroundPaths />
        </div>
        <div className="opacity-40">
          <AnimatedBackground />
        </div>
        <div className="w-full flex flex-col items-center justify-start mt-16 xs:mt-24 sm:mt-20 mb-4 xs:mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center tracking-tighter">
              {"Academics".split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: letterIndex * 0.08,
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                  }}
                  className="inline-block text-transparent bg-clip-text 
                  bg-gradient-to-r from-cyan-400 to-cyan-200 
                  drop-shadow-lg"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-sm xs:text-base md:text-lg font-light text-neutral-200 text-center max-w-lg xs:max-w-xl mb-2 xs:mb-3 px-4"
            >
              My academic journey reflects a commitment to excellence and a passion for learning across diverse disciplines.
            </motion.p>
          </motion.div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div
            className="relative w-full max-w-4xl xs:max-w-5xl h-[220px] xs:h-[240px] sm:h-[260px] md:h-[280px] flex items-center justify-center z-10 mb-3 xs:mb-4"
          >
            {academics.map((item, i) => {
              const offset = i - active;
              const opacity = Math.abs(offset) > 1 ? 0 : Math.max(0.5, 1 - Math.abs(offset) * 0.5);
              return (
                <CarouselPanel
                  key={i + '-' + item.school}
                  item={item}
                  isActive={offset === 0}
                  cardHeight={cardHeight}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${offset * cardSpacing}px)`,
                    opacity: opacity,
                    zIndex: 100 - Math.abs(offset),
                    pointerEvents: offset === 0 ? 'auto' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              );
            })}
          </div>
          
          {/* Three dots navigation */}
          <div className="flex items-center justify-center gap-1.5 xs:gap-2 mb-2 z-10">
            {academics.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 xs:w-2.5 h-2 xs:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === active 
                    ? 'bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.5)] xs:shadow-[0_0_8px_rgba(34,211,238,0.5)]' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
          
          <div className="text-center text-gray-400 text-xs font-medium z-10 max-w-sm xs:max-w-lg mx-auto flex items-center justify-center gap-1 px-4">
            <span>Click the dots or swipe/drag to navigate through my academic journey.</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Academics;
