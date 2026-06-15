import React, { useState, useEffect } from 'react';
import ShaderBackground from './ShaderBackground';

export default function Hero() {
  const [coimbatoreTime, setCoimbatoreTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      };
      setCoimbatoreTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <header id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-margin-edge pt-24 overflow-hidden">
      {/* Shader Background */}
      <ShaderBackground />

      <div className="relative z-10 w-full max-w-container-max mx-auto text-center md:text-left flex flex-col items-center">
        <h1 className="font-display-xl text-[14vw] md:text-display-xl leading-none uppercase tracking-tighter mb-8 opacity-30 select-none matrix-mask text-on-background">
          SWATHINI
        </h1>
        
        <div className="w-full grid grid-cols-12 gap-gutter items-end">
          <div className="col-span-12 md:col-span-8">
            <p className="font-headline-lg text-headline-lg-mobile md:text-headline-lg max-w-4xl text-left">
              Websites that <span className="italic accent-orange">think</span> in your brand's voice.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 mt-8 md:mt-0 text-left md:text-right">
            <p className="font-body-md text-on-surface-variant max-w-xs ml-auto">
              Brand, design, and code shaped as one. 
              So your online presence works as hard as you do.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll / Location Indicator */}
      <div className="absolute bottom-12 left-margin-edge flex items-center gap-4">
        <span className="font-label-sm text-label-sm opacity-50 uppercase tracking-widest text-on-background">
          Coimbatore {coimbatoreTime || '12:00'}
        </span>
        <div className="w-12 h-px bg-outline-variant"></div>
      </div>
    </header>
  );
}
