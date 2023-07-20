import React, { useState } from 'react';
// css
import './Monitor.css';
// components
import Screen from './Screen';

const Monitor = () => {

  const [screenPower, setScreenPower] = useState(false)

  const playSound = (audioUrl, loop) => {
    const audio = new Audio(audioUrl);
    audio.loop = loop
    audio.play();
  };

  const powerClickHandler = () => {
    playSound('https://res.cloudinary.com/mvacoimbra/video/upload/v1689887694/synthfolio/nobreak.3gp', false)
    setScreenPower(true)
  };

  return (
    <section className="monitor__container">
      <button className="monitor__power" onClick={powerClickHandler} style={{display: screenPower ? 'none' : ''}}>
        <i className="fa-solid fa-power-off" />
      </button>
      <Screen power={screenPower}/>
    </section>
  );
};

export default Monitor;
