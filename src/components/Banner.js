import React from 'react';
// css
import './Banner.css';
// components
import VideoBg from './UI/VideoBg';
import CloudImage from './UI/CloudImage';
import RiveLogo from './UI/RiveLogo';

const Banner = () => {
  return (
    <VideoBg>
      <div className="banner__container">
        {/* <CloudImage
          publicId="synthfolio/logo-triangle"
          className="logo__triangle"
        /> */}
        <RiveLogo className="banner__logo" />
        <CloudImage
          publicId="synthfolio/landscape"
          className="banner__landscape"
        />
      </div>
    </VideoBg>
  );
};

export default Banner;
