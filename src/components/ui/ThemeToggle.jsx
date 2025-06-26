import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle({ className = '' }) {
  // Determine initial theme
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  };
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 select-none border shadow-lg ${isDark ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'} ${className}`}
      onClick={() => setIsDark(d => !d)}
      role="button"
      tabIndex={0}
      style={{ pointerEvents: 'auto' }}
    >
      <div className="flex justify-between items-center w-full h-full relative">
        {/* Sliding thumb */}
        <div
          className={`flex justify-center items-center w-6 h-6 rounded-full absolute top-1 left-1 transition-transform duration-300 ${isDark ? 'translate-x-0 bg-zinc-800' : 'translate-x-8 bg-gray-200'}`}
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
        >
          {isDark ? (
            <FaMoon className="w-4 h-4 text-white" />
          ) : (
            <FaSun className="w-4 h-4 text-gray-700" />
          )}
        </div>
        {/* Sun and Moon icons for both states */}
        <div className="flex justify-between items-center w-full z-10">
          <div className="flex justify-center items-center w-6 h-6 rounded-full">
            <FaSun className={`w-4 h-4 ${isDark ? 'text-gray-500' : 'text-yellow-400'}`} />
          </div>
          <div className="flex justify-center items-center w-6 h-6 rounded-full">
            <FaMoon className={`w-4 h-4 ${isDark ? 'text-white' : 'text-black'}`} />
          </div>
        </div>
      </div>
    </div>
  );
} 