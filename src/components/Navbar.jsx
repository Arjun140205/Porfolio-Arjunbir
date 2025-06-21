import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavItem = ({ text, to }) => {
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
      <Link to={to} className="px-6 py-2 block text-white relative">
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

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="text-2xl font-bold text-white whitespace-nowrap">MyPortfolio</Link>
          </motion.div>
          
          <div className="flex space-x-8">
            <NavItem text="Home" to="/" />
            <NavItem text="About" to="/about" />
            <NavItem text="Academics" to="/academics" />
            <NavItem text="Certifications" to="/certifications" />
            <NavItem text="Projects" to="/projects" />
            <NavItem text="Internship" to="/internship" />
            <NavItem text="Skills" to="/skills" />
            <NavItem text="Contact" to="/contact" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
