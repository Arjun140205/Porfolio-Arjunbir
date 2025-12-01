import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const MagneticCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorXDelayed = useSpring(0, { stiffness: 150, damping: 20 });
  const cursorYDelayed = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // Check if device is mobile or has touch screen
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Don't add event listeners on mobile
    if (isMobile) return;
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      cursorXDelayed.set(e.clientX);
      cursorYDelayed.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';

      if (isInteractive) {
        setIsHovering(true);
        // Check for data-cursor-text attribute
        const textElement = target.closest('[data-cursor-text]');
        if (textElement) {
          setCursorText(textElement.getAttribute('data-cursor-text'));
        } else {
          setCursorText('');
        }
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, cursorXDelayed, cursorYDelayed, isMobile]);

  // Don't render cursor on mobile
  if (isMobile) return null;

  return (
    <>
      {/* Outer ring - delayed follow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXDelayed,
          y: cursorYDelayed,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.6 : isHovering ? 2 : 1,
            opacity: isHovering ? 0.6 : 0.3,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="w-10 h-10 border-2 border-cyan-400 rounded-full" 
               style={{ 
                 boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
               }} 
          />
        </motion.div>
      </motion.div>

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isClicking ? 0.7 : isHovering ? 1.8 : 1,
          }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        >
          <div className="w-3 h-3 bg-cyan-400 rounded-full" 
               style={{ 
                 boxShadow: '0 0 15px rgba(34, 211, 238, 0.8)',
               }} 
          />
        </motion.div>
      </motion.div>

      {/* Cursor text (optional) */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            x: cursorX,
            y: cursorY,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          <div className="relative -translate-x-1/2 translate-y-8">
            <div className="bg-cyan-400 text-black px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
              {cursorText}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MagneticCursor;
