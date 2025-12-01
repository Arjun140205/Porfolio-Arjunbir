import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import StaggeredMenu from './components/StaggeredMenu';
import Home from './components/Home';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import ProblemSolving from './components/ProblemSolving';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';
import ScrollProgress from './components/ScrollProgress';
import TopProgressBar from './components/TopProgressBar';
import SoundToggle from './components/SoundToggle';
import MacBookHelloAnimation from './components/MacBookHelloAnimation';
import MagneticCursor from './components/MagneticCursor';
import TextMarqueeSection from './components/TextMarqueeSection';
import SEO from './components/SEO';
import { personSchema, websiteSchema, profilePageSchema } from './utils/structuredData';
import './index.css';

const menuItems = [
  { label: 'Home', ariaLabel: 'Navigate to Home', link: 'home' },
  { label: 'About', ariaLabel: 'Navigate to About', link: 'about' },
  { label: 'Projects', ariaLabel: 'Navigate to Projects', link: 'projects' },
  { label: 'Skills', ariaLabel: 'Navigate to Skills', link: 'skills' },
  { label: 'Certifications', ariaLabel: 'Navigate to Certifications', link: 'certifications' },
  { label: 'Problem Solving', ariaLabel: 'Navigate to Problem Solving', link: 'problemsolving' },
  { label: 'Contact', ariaLabel: 'Navigate to Contact', link: 'contact' },
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/arjunbir-singh/' },
  { label: 'GitHub', link: 'https://github.com/Arjun140205' },
  { label: 'Instagram', link: 'https://www.instagram.com/arjunbir_singhh' },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Combine structured data schemas
  const combinedStructuredData = {
    "@context": "https://schema.org",
    "@graph": [personSchema, websiteSchema, profilePageSchema]
  };

  return (
    <HelmetProvider>
      <SEO 
        structuredData={combinedStructuredData}
      />
      {isLoading ? (
        <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center">
          <MacBookHelloAnimation
            onComplete={() => setIsLoading(false)}
          />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen scroll-smooth">
          <MagneticCursor />
          <TopProgressBar />
          <StaggeredMenu
            position="right"
            colors={['#0f172a', '#1e293b', '#334155']}
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            accentColor="#22d3ee"
            isFixed={true}
            closeOnClickAway={true}
            onItemClick={(item) => {
              const element = document.getElementById(item.link);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          />
          <ScrollProgress />
          <SoundToggle />
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

            <section id="projects">
              <Projects />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <SectionDivider />

            <section id="certifications">
              <Certifications />
            </section>

            <TextMarqueeSection />

            <section id="problemsolving">
              <ProblemSolving />
            </section>

            <SectionDivider />

            <section id="contact">
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      )}
    </HelmetProvider>
  );
}

export default App;
