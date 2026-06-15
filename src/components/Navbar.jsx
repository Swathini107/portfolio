import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onNavClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant">
        <div className="flex justify-between items-center px-margin-edge py-6 w-full max-w-container-max mx-auto">
          <span className="font-headline-lg text-[24px] tracking-tighter text-on-background select-none">
            SWATHINI BALACHANDAR
          </span>
          
          <div className="hidden md:flex gap-8 items-center">
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer active:scale-95" 
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              Profile
            </a>
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer active:scale-95" 
              href="#education"
              onClick={(e) => handleNavClick(e, 'education')}
            >
              Education & Experience
            </a>
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer active:scale-95" 
              href="#work"
              onClick={(e) => handleNavClick(e, 'work')}
            >
              Work
            </a>
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer active:scale-95" 
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
            >
              Skills
            </a>
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer active:scale-95" 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
            <button className="font-label-sm text-label-sm btn-ghost px-6 py-2 uppercase">
              Resume
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden flex items-center justify-center p-2 text-on-background focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-on-background select-none">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[73px] left-0 w-full z-45 md:hidden bg-background border-b border-outline-variant flex flex-col items-center gap-6 py-8"
          >
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" 
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
            >
              Profile
            </a>
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" 
              href="#education"
              onClick={(e) => handleNavClick(e, 'education')}
            >
              Education & Experience
            </a>
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" 
              href="#work"
              onClick={(e) => handleNavClick(e, 'work')}
            >
              Work
            </a>
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" 
              href="#skills"
              onClick={(e) => handleNavClick(e, 'skills')}
            >
              Skills
            </a>
            <a 
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer" 
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
            <button className="font-label-sm text-label-sm btn-ghost px-6 py-2 uppercase mt-2">
              Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
