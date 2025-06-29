import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { text: "Home", to: "/" },
  { text: "About", to: "/about" },
  { text: "Academics", to: "/academics" },
  { text: "Certifications", to: "/certifications" },
  { text: "Projects", to: "/projects" },
  { text: "Experience", to: "/experience" },
  { text: "Skills", to: "/skills" },
  { text: "Contact", to: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full flex justify-center">
      <div className="flex items-center w-full max-w-5xl px-2">
        <div className="w-full flex justify-center items-center px-2 relative">
          {/* Desktop pill navbar */}
          <div className="hidden md:inline-flex items-center bg-[#18181b]/90 border border-white/10 shadow-xl rounded-full px-2 py-1 gap-1 md:gap-3 backdrop-blur-none min-h-[44px] w-auto mx-auto">
            {/* Minimal icon on the left */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent mr-1 flex-shrink-0">
              {/* Dots SVG icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="2" fill="#b3b3b3"/><circle cx="12" cy="5" r="2" fill="#b3b3b3"/><circle cx="12" cy="19" r="2" fill="#b3b3b3"/><circle cx="19" cy="12" r="2" fill="#b3b3b3"/></svg>
            </div>
            {/* Nav links center, scrollable if needed */}
            <div className="flex gap-1 md:gap-2 lg:gap-4 flex-1 justify-center min-w-0">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 text-white font-medium rounded-full transition-all duration-30 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 text-sm whitespace-nowrap relative hover:bg-white/10 ${location.pathname === link.to ? 'bg-white/10' : ''}`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile: horizontally scrollable pill navbar */}
          <div className="md:hidden w-full flex items-center justify-center">
            <div className="flex items-center bg-[#18181b]/90 border border-white/10 shadow-xl rounded-full px-2 py-1 gap-1 backdrop-blur-none min-h-[44px] w-full overflow-x-auto scrollbar-hide mx-2">
              {/* Minimal icon on the left */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-transparent mr-1 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="2" fill="#b3b3b3"/><circle cx="12" cy="5" r="2" fill="#b3b3b3"/><circle cx="12" cy="19" r="2" fill="#b3b3b3"/><circle cx="19" cy="12" r="2" fill="#b3b3b3"/></svg>
              </div>
              <div className="flex gap-1 flex-1 min-w-0 overflow-x-auto scrollbar-hide">
                {navLinks.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-3 py-1.5 text-white font-medium rounded-full transition-all duration-30 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 text-sm whitespace-nowrap relative hover:bg-white/10 ${location.pathname === link.to ? 'bg-white/10' : ''}`}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
