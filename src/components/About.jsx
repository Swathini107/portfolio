import React from 'react';

export default function About() {
  return (
    <section className="py-section-gap px-margin-edge bg-background" id="about">
      <div className="max-w-container-max mx-auto grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
          <h2 className="font-label-sm text-label-sm uppercase text-outline tracking-[0.2em] text-outline">
            01 / Profile
          </h2>
        </div>
        <div className="col-span-12 md:col-span-8">
          <p className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight mb-12 text-on-background">
            B.Tech Artificial Intelligence and Data Science student with a strong sense of responsibility and organization.
          </p>
          <div className="max-w-xl">
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Enthusiastic learner in Data Science and Machine Learning, skilled in Python, Java, predictive modeling, and web application development. I focus on creating precise, avant-garde digital solutions that leverage data-driven foundations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
