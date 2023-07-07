import React from 'react';
// css
import './VideoBg.css';
// assets
// components
import Container from './Container';
import CloudVideo from './CloudVideo';

const VideoBg = (props) => {
  const classes = '' + props.className;

  return (
    <Container className="video-bg__container">
      <div className={classes}>{props.children}</div>
      <CloudVideo className="video-bg__video"></CloudVideo>
    </Container>
  );
};

export default VideoBg;
