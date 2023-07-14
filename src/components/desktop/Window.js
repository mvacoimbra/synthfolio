import React from 'react';
import { useState, useEffect } from 'react';
// css
import './Window.css';
// componets
import CloudImage from '../CloudImage';

const Window = (props) => {
  
  const [windowDisplay, setWindowDisplay] = useState("")
 
  useEffect(() => {
    setWindowDisplay(props.active ? '' : 'none');
  }, [props.active]);

  return (
    <div className="window__container" style={{display: windowDisplay}}>
      <div className="window__header">
        <button className="window__control">
          <CloudImage publicId="synthfolio/maximize-icon.png" height="20" />
        </button>
        <button className="window__control">
          <CloudImage publicId="synthfolio/close-icon" height="20" />
        </button>
      </div>
      <div className="window__body">{props.children}</div>
    </div>
  );
};

export default Window;
