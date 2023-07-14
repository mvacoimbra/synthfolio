import React from 'react';
import { useState } from 'react';
// css
import './Screen.css';
// components
import Shortcut from './Shortcut';
import About from './programs/About';
import Skills from './programs/Skills';

const Screen = () => {
  const shortcuts = [
    {
      icon: 'synthfolio/file-icon',
      name: 'ABOUT.TXT',
      program: 'about',
    },
    {
      icon: 'synthfolio/file-icon',
      name: 'SKILLS.TXT',
      program: 'skills',
    },
  ];

  const [selectedProgram, setSelectedProgram] = useState('')
  const handleSelectedIcon = (icon) => {
    setSelectedProgram(icon)
  };

  console.log(selectedProgram);

  return (
    <div className="screen__container">
      <div className="screen__image">
        <div className="screen__line"></div>
        <div className="screen__noise"></div>
        <ul className="screen__shortcuts">
          {shortcuts.map((shortcut, index) => {
            return (
              <div key={index} id={shortcut.id}>
                <Shortcut
                  publicId={shortcut.icon}
                  name={shortcut.name}
                  program={shortcut.program}
                  onIconDClick={handleSelectedIcon}
                />
              </div>
            );
          })}
        </ul>
        {selectedProgram === 'about' && <About active={true} />}
        {selectedProgram === 'skills' && <Skills active={true} />}
        {/* <About active={false} />
          <Skills active={false} /> */}
      </div>
    </div>
  );
};

export default Screen;
