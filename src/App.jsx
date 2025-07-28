import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Academics from './components/Academics';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SpiralAnimation from './components/SpiralAnimation';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Skip directly to the spiral animation without showing "Welcome" and "to" steps

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center">
          <SpiralAnimation
            onComplete={() => setIsLoading(false)}
          />
        </div>
      ) : (
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
