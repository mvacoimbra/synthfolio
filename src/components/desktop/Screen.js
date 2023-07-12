import React from 'react';
// css
import './Screen.css';
// components
import CloudImage from '../CloudImage';

const Screen = (props) => {
  const classes = props.classes;
  return (
    <div className="screen__container">
      <div className="screen__line"></div>
      <div className="screen__noise"></div>
    </div>
  );
};

export default Screen;
