import React from 'react';

export default function Experience() {
  return (
    <section className="py-section-gap px-margin-edge bg-surface-container-lowest" id="education">
      <div className="max-w-container-max mx-auto">
        
        {/* Experience Part */}
        <div className="grid grid-cols-12 gap-gutter mb-24">
          <div className="col-span-12 md:col-span-4">
            <h2 className="font-label-sm text-label-sm uppercase text-outline tracking-[0.2em]">
              02 / Experience
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="border-t border-outline-variant pt-12 group hover:border-tertiary transition-colors duration-500">
              <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
                <h3 className="font-headline-lg text-4xl uppercase text-on-background group-hover:text-tertiary transition-colors">
                  React JS Intern
                </h3>
                <span className="font-label-sm text-label-sm text-tertiary">2025 — Present</span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">
                ACCENT TECHNO SOFT (ATS)
              </p>
              <p className="font-body-md text-on-surface-variant mt-8 max-w-2xl">
                Gained hands-on experience in developing component-based user interfaces using Props, State Management, and React Hooks. Focusing on scalable architecture and fluid user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Education Part */}
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-4">
            <h2 className="font-label-sm text-label-sm uppercase text-outline tracking-[0.2em]">
              03 / Education
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 flex flex-col gap-12">
            <div className="border-t border-outline-variant pt-12">
              <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
                <h3 className="font-headline-lg text-4xl uppercase text-on-background">
                  B.Tech AI &amp; DS
                </h3>
                <span className="font-label-sm text-label-sm text-outline">2023 — 2027</span>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-2 italic">
                KGISL Institute of Technology
              </p>
              <div className="mt-4 inline-block bg-on-surface text-background px-3 py-1 font-label-sm text-label-sm rounded-sm">
                CGPA: 7.5
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
