import React from 'react';
import { Github } from './SocialIcons';

// Import local assets
import cyberquestImg from '../assets/cyberquest.png';
import livechatImg from '../assets/livechat.png';
import blogImg from '../assets/blog.png';

export default function Projects() {
  return (
    <section className="py-section-gap px-margin-edge bg-background" id="work">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-24">
          <h2 className="font-label-sm text-label-sm uppercase text-outline tracking-[0.2em] text-outline">
            04 / Selected Works
          </h2>
          <span className="material-symbols-outlined text-4xl text-outline animate-bounce">
            arrow_downward
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project 1: CyberQuest */}
          <div
            role="link"
            tabIndex={0}
            onClick={() => window.open("https://cyberquest-p2ks.onrender.com", "_blank", "noopener,noreferrer")}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open("https://cyberquest-p2ks.onrender.com", "_blank", "noopener,noreferrer");
              }
            }}
            className="group border border-outline-variant p-8 md:p-12 hover:border-tertiary transition-all duration-500 relative overflow-hidden flex flex-col justify-between aspect-[4/5] cursor-pointer hover:shadow-2xl hover:shadow-tertiary/5"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="font-label-sm text-label-sm text-outline">
                  01 / TEAM LEAD
                </span>
                
                {/* Action Buttons */}
                <div className="flex gap-3 items-center z-20">
                  <a
                    href="https://github.com/Swathini107/CyberQuest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-outline-variant hover:border-tertiary hover:text-tertiary rounded-full transition-all duration-300 flex items-center justify-center text-on-surface-variant hover:bg-tertiary/10"
                    onClick={(e) => e.stopPropagation()}
                    title="View GitHub Repository"
                  >
                    <Github size="18" />
                  </a>
                  <a
                    href="https://cyberquest-p2ks.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-outline-variant hover:border-tertiary hover:text-tertiary rounded-full transition-all duration-300 flex items-center justify-center text-on-surface-variant hover:bg-tertiary/10 group-hover:border-tertiary group-hover:text-tertiary"
                    onClick={(e) => e.stopPropagation()}
                    title="Open Deployed Page"
                  >
                    <span className="material-symbols-outlined text-[18px] leading-none">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>

              <h3 className="font-headline-lg text-5xl mb-6 group-hover:text-tertiary transition-colors text-on-background">
                CyberQuest
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-sm">
                A gamified cyber safety learning platform featuring role-based portals, XP systems, and matrix-style animations.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-wrap gap-2">
              <span className="bg-on-surface text-background px-3 py-1 font-label-sm text-label-sm rounded-sm">
                HTML5
              </span>
              <span className="bg-on-surface text-background px-3 py-1 font-label-sm text-label-sm rounded-sm">
                JS
              </span>
              <span className="bg-on-surface text-background px-3 py-1 font-label-sm text-label-sm rounded-sm">
                GAMIFICATION
              </span>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none duration-500">
              <img 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" 
                src={cyberquestImg} 
                alt="CyberQuest Game Platform" 
              />
            </div>
          </div>

          {/* Project 2: Live Chat */}
          <div
            role="link"
            tabIndex={0}
            onClick={() => window.open("https://live-chat-pvt.onrender.com", "_blank", "noopener,noreferrer")}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open("https://live-chat-pvt.onrender.com", "_blank", "noopener,noreferrer");
              }
            }}
            className="group border border-outline-variant p-8 md:p-12 hover:border-tertiary transition-all duration-500 relative overflow-hidden flex flex-col justify-between aspect-[4/5] md:mt-24 cursor-pointer hover:shadow-2xl hover:shadow-tertiary/5"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="font-label-sm text-label-sm text-outline">
                  02 / DEVELOPER
                </span>

                {/* Action Buttons */}
                <div className="flex gap-3 items-center z-20">
                  <a
                    href="https://github.com/Swathini107/live-chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-outline-variant hover:border-tertiary hover:text-tertiary rounded-full transition-all duration-300 flex items-center justify-center text-on-surface-variant hover:bg-tertiary/10"
                    onClick={(e) => e.stopPropagation()}
                    title="View GitHub Repository"
                  >
                    <Github size="18" />
                  </a>
                  <a
                    href="https://live-chat-pvt.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-outline-variant hover:border-tertiary hover:text-tertiary rounded-full transition-all duration-300 flex items-center justify-center text-on-surface-variant hover:bg-tertiary/10 group-hover:border-tertiary group-hover:text-tertiary"
                    onClick={(e) => e.stopPropagation()}
                    title="Open Deployed Page"
                  >
                    <span className="material-symbols-outlined text-[18px] leading-none">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>

              <h3 className="font-headline-lg text-5xl mb-6 group-hover:text-tertiary transition-colors text-on-background">
                Live Chat App
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-sm">
                Real-time bidirectional messaging platform built with Socket.IO, featuring emoji support and low-latency communication.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-wrap gap-2">
              <span className="bg-on-surface text-background px-3 py-1 font-label-sm text-label-sm rounded-sm">
                REACT
              </span>
              <span className="bg-on-surface text-background px-3 py-1 font-label-sm text-label-sm rounded-sm">
                NODE.JS
              </span>
              <span className="bg-on-surface text-background px-3 py-1 font-label-sm text-label-sm rounded-sm">
                SOCKET.IO
              </span>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none duration-500">
              <img 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" 
                src={livechatImg} 
                alt="Live Chat Application" 
              />
            </div>
          </div>

          {/* Project 3: Acrostia Landing */}
          <div
            role="link"
            tabIndex={0}
            onClick={() => window.open("https://webacrostia.onrender.com", "_blank", "noopener,noreferrer")}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.open("https://webacrostia.onrender.com", "_blank", "noopener,noreferrer");
              }
            }}
            className="group border border-outline-variant p-8 md:p-12 hover:border-tertiary transition-all duration-500 relative overflow-hidden flex flex-col justify-between aspect-[4/5] cursor-pointer hover:shadow-2xl hover:shadow-tertiary/5"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="font-label-sm text-label-sm text-outline">
                  03 / DEVELOPER
                </span>

                {/* Action Buttons */}
                <div className="flex gap-3 items-center z-20">
                  <a
                    href="https://github.com/Swathini107/webacrostia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-outline-variant hover:border-tertiary hover:text-tertiary rounded-full transition-all duration-300 flex items-center justify-center text-on-surface-variant hover:bg-tertiary/10"
                    onClick={(e) => e.stopPropagation()}
                    title="View GitHub Repository"
                  >
                    <Github size="18" />
                  </a>
                  <a
                    href="https://webacrostia.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-outline-variant hover:border-tertiary hover:text-tertiary rounded-full transition-all duration-300 flex items-center justify-center text-on-surface-variant hover:bg-tertiary/10 group-hover:border-tertiary group-hover:text-tertiary"
                    onClick={(e) => e.stopPropagation()}
                    title="Open Deployed Page"
                  >
                    <span className="material-symbols-outlined text-[18px] leading-none">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>

              <h3 className="font-headline-lg text-5xl mb-6 group-hover:text-tertiary transition-colors text-on-background">
                Acrostia Landing
              </h3>
              <p className="font-body-md text-on-surface-variant max-w-sm">
                A high-performance responsive landing page for Acrostia built with Bootstrap-enhanced responsive grid and modular styling.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-wrap gap-2">
              <span className="bg-on-surface text-background px-3 py-1 font-label-sm text-label-sm rounded-sm">
                HTML5
              </span>
              <span className="bg-on-surface text-background px-3 py-1 font-label-sm text-label-sm rounded-sm">
                BOOTSTRAP
              </span>
              <span className="bg-on-surface text-background px-3 py-1 font-label-sm text-label-sm rounded-sm">
                CSS
              </span>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none duration-500">
              <img 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" 
                src={blogImg} 
                alt="Acrostia Landing Site" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

