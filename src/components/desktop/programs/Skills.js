import React from 'react';
// css
import './Skills.css';
// components
import Window from '../Window';

const Skills = ({
  cursorPosition,
  screenSize,
  onWindowClose,
  selectedProgram,
}) => {
  return (
    <Window
      cursorPosition={cursorPosition}
      screenSize={screenSize}
      onWindowClose={onWindowClose}
      selectedProgram={selectedProgram}
    >
      <h2>SKILLS</h2>
    </Window>
  );
};

export default Skills;
