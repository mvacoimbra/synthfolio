import React from 'react';
// css
import './Skills.css';
// components
import Window from '../../Window';
import TechSet from './TechSet';

const Skills = ({
  screenSize,
  onWindowClick,
  onWindowDrag,
  onWindowClose,
  windowMove,
  selectedProgram,
}) => {
  const programingLanguages = [
    {
      icon: 'fa-brands fa-js',
      name: 'JavaScript',
    },
    {
      icon: 'fa-solid fa-t',
      name: 'TypeScript',
    },
    {
      icon: 'fa-solid fa-c',
      name: 'C#',
    },
  ];

  const frameworks = [
    {
      icon: 'fa-brands fa-react',
      name: 'React',
    },
    {
      icon: 'fa-solid fa-n',
      name: 'Next.js',
    },
  ];

  const design = [
    {
      icon: 'fa-brands fa-css3-alt',
      name: 'CSS',
    },
    {
      icon: 'fa-brands fa-figma',
      name: 'Figma',
    },
    {
      icon: 'fa-solid fa-a',
      name: 'Adobe Illustrator',
    },
  ];

  const misc = [
    {
      icon: 'fa-brands fa-html5',
      name: 'HTML',
    },
    {
      icon: 'fa-brands fa-unity',
      name: 'Unity',
    },
    {
      icon: 'fa-solid fa-o',
      name: 'Office',
    },
    {
      icon: 'fa-brands fa-square-git',
      name: 'Git',
    },
    {
      icon: 'fa-brands fa-square-github',
      name: 'GitHub',
    },
  ];

  return (
    <Window
      screenSize={screenSize}
      onWindowClick={onWindowClick}
      onWindowDrag={onWindowDrag}
      windowMove={windowMove}
      onWindowClose={onWindowClose}
      selectedProgram={selectedProgram}
    >
      <section className="skills__container">
        <h1 className="skills__title">Skills</h1>
        <div className="skills__sheet">
          <section className="sheet__tech-sets">
            <TechSet
              title="Programming Languages:"
              array={programingLanguages}
            />
            <TechSet title="Frameworks | Libraries:" array={frameworks} />
            <TechSet title="Design | UX/UI:" array={design} />
            <TechSet title="Misc:" array={misc} />
          </section>
        </div>
      </section>
    </Window>
  );
};

export default Skills;
