import React, { useState, useEffect, useRef } from 'react';
// css
import './About.css';
// components
import Window from '../Window';
import CloudImage from '../../UI/CloudImage';

const About = ({
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
      label: 'Country:',
      description: 'Brazil',
    },
    {
      label: 'Language:',
      description: 'English / Portuguese',
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
      <div className="about__container">
        <section className="about__section about__section--1">
          <div className="about__text">
            <h1 className="about__title">About me</h1>
            <div className="about__paragraphs">
              <CloudImage
                className="about__face-photo"
                publicId="synthfolio/mouth-closed"
              />
              <div className="about__text">
                <p>
                  Hello there! I'm Marcos, a passionate individual with a
                  diverse background bridging Chemistry and Computer Science.
                  With a Bachelor's degree in Chemistry, i'm currently on an
                  exciting journey in the tech world as i pursue my studies in
                  Computer Science.
                </p>
                <p>
                  My career switch was motivated by my innate affinity
                  fortechnology and the limitless growth opportunities it
                  offers. The ever-expanding tech market inspires me to explore
                  and thrive in this dynamic industry.
                </p>
                <p>
                  Development is my true calling, i love the exhilarating
                  challenge of solving problems, much like playing a
                  never-ending puzzle game. My personal projects and studies
                  have allowed me to delve deeper into this passion, honing my
                  skills as i progress.
                </p>
                <p>
                  Aspiring to be a full-stack web developer, I'm eager to
                  combine my knowledge of both front-end and back-end
                  technologies to craft seamless user experiences.
                </p>
                <p>
                  My experience in the pharmaceutical industry has instilled in
                  me a "procedural" and "methodical" approach to tasks, and I
                  carry these traits into my coding. This penchant for patterns
                  and rules adds a touch of organization to my work, ensuring
                  efficiency and precision.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="about__section about__section--2">
          <section className="sheet__header">
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
            <div className="sheet__box sheet__box--name">
              <h3 className="sheet__label">Name:</h3>
              <h2 className="sheet__name">Marcos Coimbra</h2>
            </div>
          </section>
        </section>
        <a
          href="https://res.cloudinary.com/mvacoimbra/image/upload/v1691017611/synthfolio/Resume_-_Marcos_Coimbra_tu21ts.pdf"
          download="Resume_-_Marcos_Coimbra_tu21ts.pdf"
          target="blank"
          className="about__resume-btn"
        >
          Download my Resume
        </a>
      </div>
    </Window>
  );
};

export default About;
