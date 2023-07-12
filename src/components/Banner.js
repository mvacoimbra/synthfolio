import React from 'react';
// css
import './Banner.css';
// components
import VideoBg from './VideoBg';
import CloudImage from './CloudImage';

const Banner = () => {
  return (
    <VideoBg>
      <div className='banner__container'>
        <CloudImage publicId="synthfolio/main-logo" className="banner__logo" />
        <CloudImage
          publicId="synthfolio/landscape"
          className="banner__landscape"
        />
      </div>
    </VideoBg>
  );
};

export default Banner;
