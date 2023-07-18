import React from 'react';
import { useState, useRef, useEffect } from 'react';
// css
import './Screen.css';
// components
import Shortcut from './Shortcut';
import About from './programs/About';
import Skills from './programs/Skills';

const Screen = () => {
  // screen size
  const screenRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    setScreenHeight(screenRef.current.offsetHeight);
    setScreenWidth(screenRef.current.offsetWidth);
    console.log(screenRef);
    console.log(screenHeight, screenWidth);
  }, [screenRef.current]);

  const screenResizeHandler = (e) => {
    console.log(e);
  };

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

  // tracking mouse movement
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    // console.log(cursorPosition);
  };

  return (
    <div className="screen__container" onChange={screenResizeHandler}>
      <div
        className="screen__image"
        onMouseMove={handleMouseMove}
        ref={screenRef}
      >
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
                  onIconClick={handleSelectedIcon}
                />
              </div>
            );
          })}
        </ul>
        {selectedProgram === 'about' && (
          <About active={true} cursorPosition={cursorPosition} screenHeight={screenHeight} screenWidth={screenWidth}/>
        )}
        {selectedProgram === 'skills' && (
          <Skills active={true} cursorPosition={cursorPosition} screenHeight={screenHeight} screenWidth={screenWidth}/>
        )}
      </div>
    </div>
  );
};

export default Screen;
