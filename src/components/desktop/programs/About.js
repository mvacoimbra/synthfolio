import React from 'react';
// css
import './About.css';
// components
import Window from '../Window';

const About = (props) => {
  const active = props.active
  return (
    <Window active={active}>
      <h2>ABOUT</h2>
    </Window>
  );
};

export default About;
