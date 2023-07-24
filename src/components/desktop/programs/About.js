import React, { useState, useEffect, useRef } from 'react';
// css
import './About.css';
// components
import Window from '../Window';
import CloudImage from '../../UI/CloudImage';
import TypewriterText from '../../UI/TypewriterText';

const About = ({
  cursorPosition,
  screenSize,
  onWindowClick,
  onWindowDrag,
  onWindowClose,
  windowMove,
  selectedProgram,
}) => {
  // mouth animation
  const [mouthOpen, setMouthOpen] = useState(false);
  const mouthRef = useRef(mouthOpen);

  useEffect(() => {
    mouthRef.current = mouthOpen;
  }, [mouthOpen]);

  useEffect(() => {
    const mouthAudio = new Audio(
      'https://res.cloudinary.com/mvacoimbra/video/upload/v1689954353/synthfolio/beep-sound.mp3'
    );
    let interval;
    let i = 0;
    interval = setInterval(() => {
      if (i < 73) {
        setMouthOpen(!mouthRef.current);
        mouthAudio.play();
        i++;
      } else {
        clearInterval(interval);
        mouthAudio.pause();
        setMouthOpen(false);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // ----
  const [windowDragMove, setWindowDragMove] = useState(windowMove)
  useEffect(() => {
    setWindowDragMove(windowMove)
  }, [windowMove])
  

  return (
    <Window
      cursorPosition={cursorPosition}
      screenSize={screenSize}
      onWindowClick={onWindowClick}
      onWindowDrag={onWindowDrag}
      windowMove={windowDragMove}
      onWindowClose={onWindowClose}
      selectedProgram={selectedProgram}
    >
      <div className="about__container">
        <section className="about__section about__section--1">
          <div className="about__text">
            <h1 className="about__title">About me</h1>
            <div className="about__paragraphs">
              <TypewriterText
                text={`&nbsp; Hello there! I'm Marcos, a passionate individual with a diverse background bridging Chemistry and Computer Science. With a Bachelor's degree in Chemistry, i'm currently on an exciting journey in the tech world as i pursue my studies in Computer Science.
              &nbsp; My career switch was motivated by my innate affinity fortechnology and the limitless growth opportunities it offers. The ever-expanding tech market inspires me to explore and thrive in this dynamic industry.
              &nbsp; Development is my true calling, i love the exhilarating challenge of solving problems, much like playing a never-ending puzzle game. My personal projects and studies have allowed me to delve deeper into this passion, honing my skills as i progress.
              &nbsp; Aspiring to be a full-stack web developer, I'm eager to combine my knowledge of both front-end and back-end technologies to craft seamless user experiences.
              &nbsp; My experience in the pharmaceutical industry has instilled in me a "procedural" and "methodical" approach to tasks, and I carry these traits into my coding. This penchant for patterns and rules adds a touch of organization to my work, ensuring efficiency and precision.
              &nbsp; I'm excited about the endless possibilities that lie ahead and look forward to collaborating with like-minded professionals to create innovative solutions.`}
                delay={5}
              />
            </div>
          </div>
          <CloudImage
            className="about__face-photo"
            publicId={`synthfolio/${mouthOpen ? 'mouth-open' : 'mouth-closed'}`}
          />
        </section>
        <section className="about__section about__section--2">
          <p>batata</p>
        </section>
      </div>
    </Window>
  );
};

export default About;
