import React from 'react';
// css
import './Banner.css';
// components
import RiveLogo from './UI/RiveLogo';
import RiveBanner from './UI/RiveBanner';
import Container from './UI/Container';

const Banner = () => {
  return (
    <Container id="banner__container">
      <RiveLogo className="banner__logo" />
      <RiveBanner className="banner__bg" />
    </Container>
  );
};

export default Banner;
