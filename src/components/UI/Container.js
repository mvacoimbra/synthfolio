import React from 'react';
// css
import './Container.css';
// components

const Container = (props) => {
  const classes = 'container ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Container;
