import React from 'react';
// css
import './Skills.css';
// components
import Window from '../Window';

const Skills = (props) => {
  const active = props.active
  return (
    <Window active={active}>
      <h2>SKILLS</h2>
    </Window>
  );
};

export default Skills;
