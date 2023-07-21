import React from 'react';
import { useState, useRef, useEffect } from 'react';
// css
import './Screen.css';
// components
import Shortcut from './Shortcut';
import About from './programs/About';
import Skills from './programs/Skills';

const Screen = ({ power }) => {
  // screen size
  const screenRef = useRef(null);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (screenRef.current) {
        setScreenSize({
          width: screenRef.current.offsetWidth,
          height: screenRef.current.offsetHeight,
        });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // shortcuts array
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

  // tracking the clicked program
  const [selectedProgram, setSelectedProgram] = useState('');
  const handleSelectedIcon = (icon) => {
    setSelectedProgram(icon);
  };

  // tracking window closing
  const handleWindowClose = (windowClosed) => {
    setSelectedProgram(windowClosed);
  };

  // tracking mouse movement
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    // console.log(cursorPosition);
  };
 

  return (
    <div className="screen__container">
      <div
        className={`screen__image ${power ? '' : 'screen__image--off'}`}
        onMouseMove={handleMouseMove}
        ref={screenRef}
      >
        <div
          className={`screen__noise ${power ? '' : 'screen__noise--off'}`}
        ></div>
        <div
          className={`screen__black ${power ? '' : 'screen__black--off'}`}
        ></div>
        <div
          className={`screen__line ${power ? '' : 'screen__line--off'}`}
        ></div>
        <ul className="screen__shortcuts">
          {shortcuts.map((shortcut, index) => {
            return (
              <div key={index} id={shortcut.id}>
                <Shortcut
                  publicId={shortcut.icon}
                  name={shortcut.name}
                  program={shortcut.program}
                  onIconClick={handleSelectedIcon}
                />
              </div>
            );
          })}
        </ul>
        {selectedProgram === 'about' && (
          <About
            cursorPosition={cursorPosition}
            screenSize={screenSize}
            onWindowClose={handleWindowClose}
            selectedProgram={selectedProgram}
          />
        )}
        {selectedProgram === 'skills' && (
          <Skills
            cursorPosition={cursorPosition}
            screenSize={screenSize}
            onWindowClose={handleWindowClose}
            selectedProgram={selectedProgram}
          />
        )}
      </div>
    </div>
  );
};

export default Screen;
