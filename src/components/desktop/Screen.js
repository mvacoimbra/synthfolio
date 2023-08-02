import React from 'react';
import { useState, useRef, useEffect } from 'react';
// css
import './Screen.css';
// components
import Shortcut from './Shortcut';
import About from './programs/About';
import Skills from './programs/Skills/Skills';

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
        setSelectedProgram('');
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

  // click sounds
  const playSound = (audioUrl, loop) => {
    const audio = new Audio(audioUrl);
    audio.loop = loop;
    audio.play();
  };

  const handleClick = () => {
    playSound(
      'https://res.cloudinary.com/mvacoimbra/video/upload/v1689948462/synthfolio/click-sound.mp3',
      false
    );
  };

  // tracking the clicked program
  const [selectedProgram, setSelectedProgram] = useState('');
  const handleSelectedIcon = (icon) => {
    setSelectedProgram(icon);
    playSound(
      'https://res.cloudinary.com/mvacoimbra/video/upload/v1689904583/synthfolio/pong-sound.mp3',
      false
    );
  };

  // tracking window closing
  const handleWindowClose = (windowClosed) => {
    setSelectedProgram(windowClosed);
  };

  // Handle window drag
  const [isDragging, setIsDragging] = useState(false);
  const [clickOffset, setClickOffset] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setWindowPosition({
      x: screenSize.width / 2,
      y: screenSize.height / 2,
    });
  }, [screenSize, selectedProgram]);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    if (isDragging !== true) return;
    setWindowPosition({
      x: cursorPosition.x - clickOffset.x,
      y: cursorPosition.y - clickOffset.y,
    });
  };

  const onWindowDrag = (dragStatus) => {
    setIsDragging(dragStatus);
  };

  const onWindowClick = (onWindowClick) => {
    setClickOffset(onWindowClick);
  };

  // current date

  const currentDate = new Date();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();
  const formattedTime = `${hour < 10 ? '0' : ''}${hour}:${
    min < 10 ? '0' : ''
  }${min}`;

  // ***********************************************************************
  return (
    <div className="screen__container">
      <div
        className={`screen__image ${power ? '' : 'screen__image--off'}`}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
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
            onWindowClick={onWindowClick}
            onWindowDrag={onWindowDrag}
            windowMove={windowPosition}
            onWindowClose={handleWindowClose}
            selectedProgram={selectedProgram}
          />
        )}
        {selectedProgram === 'skills' && (
          <Skills
            cursorPosition={cursorPosition}
            screenSize={screenSize}
            onWindowClick={onWindowClick}
            onWindowDrag={onWindowDrag}
            windowMove={windowPosition}
            onWindowClose={handleWindowClose}
            selectedProgram={selectedProgram}
          />
        )}
        <div className="screen__hour">
          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Screen;
