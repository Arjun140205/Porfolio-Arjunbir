import React, { useState, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import StaggeredMenu from './components/StaggeredMenu';
import Home from './components/Home';
import MagneticCursor from './components/MagneticCursor';
import ScrollProgress from './components/ScrollProgress';
import TopProgressBar from './components/TopProgressBar';
import SoundToggle from './components/SoundToggle';
import MacBookHelloAnimation from './components/MacBookHelloAnimation';
import SEO from './components/SEO';
import { personSchema, websiteSchema, profilePageSchema } from './utils/structuredData';
import './index.css';

// Lazy load below-fold components
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const ProblemSolving = lazy(() => import('./components/ProblemSolving'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const SectionDivider = lazy(() => import('./components/SectionDivider'));
const TextMarqueeSection = lazy(() => import('./components/TextMarqueeSection'));

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

            <Suspense fallback={<div className="h-20" />}>
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
            </Suspense>
          </main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      )}
    </HelmetProvider>
  );
}

export default App;
