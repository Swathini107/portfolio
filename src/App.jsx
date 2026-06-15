import React from 'react';
import { motion } from 'framer-motion';

// Import custom components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section entry animation wrapper using Framer Motion
  const AnimatedSection = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-150px' }}
      transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="bg-background text-on-background selection:bg-tertiary selection:text-on-tertiary overflow-x-hidden min-h-screen">
      {/* Top Navigation */}
      <Navbar onNavClick={handleNavClick} />

      {/* Main layout wrapper */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Profile (About) */}
        <AnimatedSection>
          <About />
        </AnimatedSection>

        {/* Education & Experience Timeline */}
        <AnimatedSection>
          <Experience />
        </AnimatedSection>

        {/* Selected Works (Projects) */}
        <AnimatedSection>
          <Projects />
        </AnimatedSection>

        {/* Technical Stack (Skills) */}
        <AnimatedSection>
          <Skills />
        </AnimatedSection>

        {/* Contact CTA */}
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="w-full py-section-gap border-t border-outline-variant bg-background">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-edge w-full max-w-container-max mx-auto gap-8">
          <span className="font-headline-lg text-on-background text-2xl uppercase tracking-widest">
            Swathini B.
          </span>
          
          <div className="flex gap-8 items-center">
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-tertiary transition-colors duration-300 underline-offset-4 hover:underline" 
              href="https://linkedin.com/in/swathini-balachandar"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-tertiary transition-colors duration-300 underline-offset-4 hover:underline" 
              href="https://github.com/Swathini107"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-tertiary transition-colors duration-300 underline-offset-4 hover:underline" 
              href="mailto:swathini0999@gmail.com"
            >
              Email
            </a>
          </div>
          
          <p className="font-label-sm text-label-sm text-on-surface-variant opacity-50 uppercase">
            © {new Date().getFullYear()} SWATHINI BALACHANDAR — ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}
