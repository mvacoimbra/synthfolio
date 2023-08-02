import React from 'react';
// css
import './Skills.css';
// components
import Window from '../Window';

const Skills = ({
  screenSize,
  onWindowClick,
  onWindowDrag,
  onWindowClose,
  windowMove,
  selectedProgram,
}) => {
  // bio sheet items
  const bioItens = [
    {
      label: 'Role:',
      description: 'Full-Stack',
    },
    {
      label: 'Age:',
      description: '23',
    },
    {
      label: 'Gender:',
      description: 'Male',
    },
    {
      label: 'Contry:',
      description: 'Brazil',
    },
    {
      label: 'Language:',
      description: 'English / Portuguese',
    },
  ];

  const programingLanguages = [
    {
      icon: 'fa-brands fa-js',
      name: 'JavaScript',
    },
    {
      icon: 'fa-solid fa-file-code',
      name: 'TypeScript',
    },
    {
      icon: 'fa-solid fa-file-code',
      name: 'C#',
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
          <section className="sheet__header">
            <div className="sheet__box sheet__box--name">
              <h3 className="sheet__label">Name:</h3>
              <h2 className="sheet__name">Marcos Coimbra</h2>
            </div>
            <div className="sheet__box sheet__bio">
              {bioItens.map((item, index) => {
                return (
                  <div className="sheet__bio-cell" key={index}>
                    <h3 className="sheet__label">{item.label}</h3>
                    <h2 className="sheet__bio-data">{item.description}</h2>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="sheet__tech-sets">
            <div className="sheet__box tech-set">
              <h3>Programing Languages</h3>
              <ul className="tech-set__list">
                {programingLanguages.map((item, index) => {
                  return (
                    <li className="tech-set__item">
                      <i className={`tech-set__icon ${item.icon}`} />
                      <h2>{item.name}</h2>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </Window>
  );
};

export default Skills;
