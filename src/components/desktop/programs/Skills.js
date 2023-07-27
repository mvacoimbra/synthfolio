import React from 'react';
// css
import './Skills.css';
// components
import Window from '../Window';

const Skills = ({
  screenSize,
  onWindowClick,
  onWindowDrag,
  onWindowClose,
  windowMove,
  selectedProgram,
}) => {
  return (
    <Window
      screenSize={screenSize}
      onWindowClick={onWindowClick}
      onWindowDrag={onWindowDrag}
      windowMove={windowMove}
      onWindowClose={onWindowClose}
      selectedProgram={selectedProgram}
    >
      <h2>SKILLS</h2>
    </Window>
  );
};

export default Skills;
