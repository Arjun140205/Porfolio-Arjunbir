import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

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

// Responsive card width and spacing
const getCardWidth = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 400) return 260;
    if (window.innerWidth < 640) return 300;
    if (window.innerWidth < 900) return 380;
  }
  return 520;
};
const getCardSpacing = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 400) return 270;
    if (window.innerWidth < 640) return 320;
    if (window.innerWidth < 900) return 400;
  }
  return 420;
};

const CarouselPanel = ({ item, style, isActive, cardWidth }) => (
  <motion.div
    className={`absolute top-1/2 left-1/2 w-[90vw] max-w-[${cardWidth}px] h-[220px] xs:h-[240px] sm:h-[300px] md:h-[340px] flex flex-col items-center justify-center px-3 xs:px-4 sm:px-8 md:px-12 py-4 xs:py-6 sm:py-10 select-none pointer-events-auto bg-neutral-900/95 border border-white/10 rounded-2xl transition-shadow duration-300 z-10 overflow-hidden
      ${isActive ? 'shadow-[0_0_32px_8px_rgba(34,211,238,0.25),0_2px_16px_0_rgba(34,211,238,0.10)] ring-2 ring-cyan-400/60' : ''}`}
    style={style}
    initial={false}
  >
    <div className="text-[1.1rem] xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2 leading-none text-center whitespace-pre-line relative w-full break-words">
      <span className="relative z-10 block w-full break-words">
        {item.school}
      </span>
      <span className="block mx-auto mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 opacity-80" />
    </div>
    <div className="text-xs xs:text-sm sm:text-base md:text-xl font-semibold text-gray-200 mb-1 text-center w-full break-words">{item.title}</div>
    <div className="text-xs sm:text-sm md:text-lg text-gray-400 mb-2 text-center w-full break-words">{item.domain}</div>
    <div className="text-xs sm:text-base md:text-2xl font-mono font-bold text-gray-100 mb-4 text-center tracking-widest w-full break-words">{item.year}</div>
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-xs sm:text-sm font-medium text-gray-300 hover:text-white underline underline-offset-4 transition-colors duration-200 w-full break-words"
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
  const [cardWidth, setCardWidth] = useState(getCardWidth());
  const [cardSpacing, setCardSpacing] = useState(getCardSpacing());

  // Responsive card width and spacing
  React.useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
      setCardSpacing(getCardSpacing());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Wheel navigation
  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      setActive((prev) => (prev - 1 + N) % N);
    } else if (e.deltaY > 0) {
      setActive((prev) => (prev + 1) % N);
    }
  };

  // Drag navigation
  const dragStartX = useRef(0);
  const dragActive = useRef(false);

  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX || (e.touches && e.touches[0].clientX);
    dragActive.current = true;
  };
  const handlePointerMove = (e) => {
    if (!dragActive.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    if (clientX - dragStartX.current > 40) {
      setActive((prev) => (prev - 1 + N) % N);
      dragActive.current = false;
    } else if (clientX - dragStartX.current < -40) {
      setActive((prev) => (prev + 1) % N);
      dragActive.current = false;
    }
  };
  const handlePointerUp = () => {
    dragActive.current = false;
  };

  // Keyboard support
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setActive((prev) => (prev - 1 + N) % N);
    if (e.key === 'ArrowRight') setActive((prev) => (prev + 1) % N);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-20 select-none" tabIndex={0} onKeyDown={handleKeyDown}>
        <AnimatedBackground />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-400 mb-2 text-center drop-shadow-lg" style={{letterSpacing:'-0.02em'}}>Academics</h1>
        <p className="text-lg md:text-xl font-light text-neutral-200 text-center max-w-2xl mb-6">
          My academic journey reflects a commitment to excellence and a passion for learning across diverse disciplines.
        </p>
        <div
          className="relative w-full max-w-6xl h-[220px] xs:h-[240px] sm:h-[300px] md:h-[340px] flex items-center justify-center z-10 mb-8"
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
          style={{cursor:'grab'}}
        >
          {academics.map((item, i) => {
            const offset = i - active;
            return (
              <CarouselPanel
                key={i + '-' + item.school}
                item={item}
                isActive={offset === 0}
                cardWidth={cardWidth}
                style={{
                  transform: `translate(-50%, -50%) translateX(${offset * cardSpacing}px)`,
                  opacity: Math.abs(offset) > 2 ? 0 : 1,
                  zIndex: 100 - Math.abs(offset),
                  pointerEvents: offset === 0 ? 'auto' : 'none',
                  transition: 'transform 0.18s cubic-bezier(.7,.2,.2,1), opacity 0.18s',
                }}
              />
            );
          })}
        </div>
        <div className="mt-2 text-center text-gray-400 text-base font-medium z-10 max-w-xl mx-auto flex items-center justify-center gap-2">
          <span className="text-lg">&#8592;</span>
          <span>Swipe left to go through my academic journey.</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Academics;
