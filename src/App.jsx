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
import VaporizeTextCycle from './components/VaporizeTextCycle';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
          <VaporizeTextCycle
            texts={["Welcome", "to", "My Portfolio"]}
            font={{
              fontFamily: "Inter, sans-serif",
              fontSize: "70px",
              fontWeight: 600
            }}
            color="rgb(255, 255, 255)"
            spread={5}
            density={5}
            animation={{
              vaporizeDuration: 2,
              fadeInDuration: 1,
              waitDuration: 0.5
            }}
            direction="left-to-right"
            alignment="center"
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
