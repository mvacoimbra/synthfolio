import React from 'react';
// css
import './Container.css';
// components

const Container = ({ children, className, id }) => {
  const classes = 'container ' + className;

  return (
    <div className={classes} id={id}>
      {children}
    </div>
  );
};

export default Container;
