import React, { useState } from 'react';
import StaggeredMenu from './components/StaggeredMenu';
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

const menuItems = [
  { label: 'Home', ariaLabel: 'Navigate to Home', link: 'home' },
  { label: 'About', ariaLabel: 'Navigate to About', link: 'about' },
  { label: 'Certifications', ariaLabel: 'Navigate to Certifications', link: 'certifications' },
  { label: 'Projects', ariaLabel: 'Navigate to Projects', link: 'projects' },
  { label: 'Experience', ariaLabel: 'Navigate to Experience', link: 'experience' },
  { label: 'Skills', ariaLabel: 'Navigate to Skills', link: 'skills' },
  { label: 'Contact', ariaLabel: 'Navigate to Contact', link: 'contact' },
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/arjunbir-singh-736620280/' },
  { label: 'GitHub', link: 'https://github.com/Arjun140205' },
  { label: 'Instagram', link: 'https://www.instagram.com/arjunbir_singhh' },
];

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
