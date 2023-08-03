import React from 'react';
// css
import './Works.css';
// components
import Window from '../Window';

const Works = ({
  screenSize,
  onWindowClick,
  onWindowDrag,
  onWindowClose,
  windowMove,
  selectedProgram,
}) => {
  const works = [
    {
      title: 'Website-EMCOS',
      link: 'https://emcos-website.vercel.app',
    },
    {
      title: 'Website-EMCOS',
      link: 'https://emcos-website.vercel.app',
    },
    {
      title: 'Website-EMCOS',
      link: 'https://emcos-website.vercel.app',
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
      <h1 className="about__title">Works</h1>
      <ul className="works__list">
        {works.map((item, index) => {
          return (
            <li className="works__item" key={index}>
              <a className="works__link" href={item.link} target="blank">
                <i className="works__icon fa-solid fa-folder" />
                <h3 className="works__tag">{item.title}</h3>
              </a>
            </li>
          );
        })}
      </ul>
    </Window>
  );
};

export default Works;
