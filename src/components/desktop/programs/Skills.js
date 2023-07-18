import React from 'react';
// css
import './Skills.css';
// components
import Window from '../Window';

const Skills = ({ active, cursorPosition, screenHeight, screenWidth }) => {
  return (
    <Window
      active={active}
      cursorPosition={cursorPosition}
      screenHeight={screenHeight}
      screenWidth={screenWidth}
    >
      <h2>SKILLS</h2>
    </Window>
  );
};

export default Skills;
