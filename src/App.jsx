import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import ScrollProgress from './components/ScrollProgress';
import TopProgressBar from './components/TopProgressBar';
import MacBookHelloAnimation from './components/MacBookHelloAnimation';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center">
          <MacBookHelloAnimation
            onComplete={() => setIsLoading(false)}
          />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen scroll-smooth">
          <TopProgressBar />
          <Navbar />
          <ScrollProgress />
          <main className="flex-grow">
            {/* Single scrolling page with all sections */}
            <section id="home">
              <Home />
            </section>

            <SectionDivider />

            <section id="about">
              <About />
            </section>

            <SectionDivider />

            <section id="certifications">
              <Certifications />
            </section>

            <SectionDivider />

            <section id="projects">
              <Projects />
            </section>

            <SectionDivider />

            <section id="experience">
              <Experience />
            </section>

            <SectionDivider />

            <section id="skills">
              <Skills />
            </section>

            <SectionDivider />

            <section id="contact">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
