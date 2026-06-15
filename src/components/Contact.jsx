import React from 'react';

export default function Contact() {
  return (
    <section className="py-section-gap px-margin-edge text-center bg-background" id="contact">
      <div className="max-w-4xl mx-auto">
        <span className="font-label-sm text-label-sm text-outline uppercase tracking-[0.5em] block mb-12 text-outline">
          Let's connect
        </span>
        
        <a 
          className="font-display-xl text-[10vw] md:text-display-xl tracking-tighter hover:text-tertiary transition-colors duration-500 uppercase leading-none block mb-12 text-on-background select-none cursor-pointer" 
          href="mailto:swathini0999@gmail.com"
        >
          Get In Touch
        </a>
        
        <div className="flex justify-center gap-12 mt-24">
          <a 
            className="font-label-sm text-label-sm border-b border-outline hover:border-tertiary transition-colors pb-1 text-on-background" 
            href="https://linkedin.com/in/swathini-balachandar" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a 
            className="font-label-sm text-label-sm border-b border-outline hover:border-tertiary transition-colors pb-1 text-on-background" 
            href="https://github.com/Swathini107" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a 
            className="font-label-sm text-label-sm border-b border-outline hover:border-tertiary transition-colors pb-1 text-on-background" 
            href="#"
          >
            RESUME
          </a>
        </div>
      </div>
    </section>
  );
}
