import React from 'react';

const categories = [
  {
    title: 'Programming & Web',
    items: ['Python', 'Java', 'React.js', 'Javascript', 'HTML / CSS']
  },
  {
    title: 'Data Science',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn']
  },
  {
    title: 'Tools & Methods',
    items: ['Git / GitHub', 'VS Code', 'EDA', 'Data Cleaning']
  }
];

export default function Skills() {
  return (
    <section className="py-section-gap px-margin-edge bg-surface-container-lowest" id="skills">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-label-sm text-label-sm uppercase text-outline tracking-[0.2em] mb-24 text-outline">
          05 / Technical Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-l border-outline-variant pl-8 md:pl-12">
          {categories.map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="font-label-sm text-label-sm text-tertiary uppercase mb-8">
                {category.title}
              </h3>
              <ul className="space-y-4 font-headline-lg text-3xl text-on-background">
                {category.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="hover:translate-x-2 hover:text-tertiary transition-all duration-300 cursor-default select-none"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
