import React from 'react';
// css
import './About.css';
// components
import Window from '../Window';
import CloudImage from '../../CloudImage';
import TypewriterText from '../../TypewriterText';

const About = ({ active, cursorPosition, screenHeight, screenWidth }) => {
  return (
    <Window
      active={active}
      cursorPosition={cursorPosition}
      screenHeight={screenHeight}
      screenWidth={screenWidth}
    >
      <div className="about__container">
        <div className="about__text">
          <h1 className="about__title">About me</h1>
          <div className="about__paragraphs">
            <TypewriterText
              text={`&nbsp; Hello there! I'm Marcos, a passionate individual with a diverse background bridging Chemistry and Computer Science. With a Bachelor's degree in Chemistry, i'm currently on an exciting journey in the tech world as i pursue my studies in Computer Science.
              &nbsp; My career switch was motivated by my innate affinity fortechnology and the limitless growth opportunities it offers. The ever-expanding tech market inspires me to explore and thrive in this dynamic industry.
              &nbsp; Development is my true calling—I love the exhilarating challenge of solving problems, much like playing a never-ending puzzle game. My personal projects and studies have allowed me to delve deeper into this passion, honing my skills as I progress.
              &nbsp; Aspiring to be a full-stack web developer, I'm eager to combine my knowledge of both front-end and back-end technologies to Craft seamless user experiences.
              &nbsp; My experience in the pharmaceutical industry has instilled in me a "procedural" and "methodical" approach to tasks, and I carry these traits into my coding. This penchant for patterns and rules adds a touch of organization to my work, ensuring efficiency and precision.
              &nbsp; I'm excited about the endless possibilities that lie ahead and look forward to collaborating with like-minded professionals to create innovative solutions.`}
              delay={5}
            />
          </div>
        </div>
        <CloudImage
          className="about__face-photo"
          publicId="synthfolio/face-photo-pixel"
        />
      </div>
    </Window>
  );
};

export default About;
