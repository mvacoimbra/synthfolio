import React from 'react';
import { useState } from 'react';
// css
import './NavBar.css';
// components
import Container from './Container';

const NavBar = () => {
  const [activeNav, setActiveNav] = useState(0);

  const navButtons = [
    {
      icon: 'fa-play',
      text: 'START',
      function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },
    {
      icon: 'fa-id-card',
      text: 'ABOUT',
      function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },
    {
      icon: 'fa-laptop-code',
      text: 'WORKS',
      function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },
    {
      icon: 'fa-diagram-project',
      text: 'SKILLS',
      function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },
    {
      icon: 'fa-comments',
      text: 'CONTACT',
      function() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      },
    },
  ];

  const clickHandler = (event) => {
    setActiveNav(event);
  };

  return (
    <div>
      <Container className="navbar__container">
        <nav className="navbar__box">
          <ul className="navbar__list">
            {navButtons.map((button, index) => (
              <li
                key={index}
                className={`navbar__item ${
                  index === activeNav ? 'navbar__item--active' : ''
                }`}
              >
                <i className={`fa-solid ${button.icon}`}></i>
                <button
                  className="navbar__button"
                  onClick={() => {
                    clickHandler(index);
                    button.function();
                  }}
                >
                  {button.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="navbar__placeholder" />
    </div>
  );
};

export default NavBar;
