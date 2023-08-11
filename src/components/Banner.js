import React from 'react';
// css
import './Banner.css';
// components
import RiveLogo from './UI/RiveLogo';
import Container from './UI/Container';
import CloudVideo from './UI/CloudVideo';
import CloudImage from './UI/CloudImage';

const Banner = () => {
  return (
    <Container id="banner__container">
      <RiveLogo className="banner__logo" />
      <CloudImage
        className="banner__montains"
        publicId="synthfolio/landscape"
      />
      <CloudVideo className="banner__video" publicId="synthfolio/synthvideo" />
    </Container>
  );
};

export default Banner;
