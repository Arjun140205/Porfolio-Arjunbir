import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavItem = ({ text, to, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
      transition={{ duration: 0.2 }}
      className="relative rounded-lg overflow-hidden"
    >
      <Link to={to} className="px-6 py-2 block text-white relative" onClick={onClick}>
        {text}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 origin-left"
        />
      </Link>
    </motion.div>
  );
};

const navLinks = [
  { text: "Home", to: "/" },
  { text: "About", to: "/about" },
  { text: "Academics", to: "/academics" },
  { text: "Certifications", to: "/certifications" },
  { text: "Projects", to: "/projects" },
  { text: "Internship", to: "/internship" },
  { text: "Skills", to: "/skills" },
  { text: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="text-2xl font-bold text-white whitespace-nowrap">MyPortfolio</Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <NavItem key={link.to} text={link.text} to={link.to} />
            ))}
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-[110]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            <span className={`block w-7 h-0.5 bg-white mb-1.5 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-white mb-1.5 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 right-0 h-full w-4/5 max-w-xs z-[200] bg-black opacity-95 flex flex-col items-end md:hidden shadow-2xl px-0"
          >
            <button
              className="mt-6 mr-6 text-white text-4xl focus:outline-none self-end"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              type="button"
            >
              &times;
            </button>
            <nav className="flex flex-col gap-6 w-full px-8 py-8 mt-4">
              {navLinks.map(link => (
                <NavItem key={link.to} text={link.text} to={link.to} onClick={() => setMenuOpen(false)} />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
