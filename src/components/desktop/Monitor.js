import React from 'react';
// css
import './Monitor.css';
// components
import Screen from './Screen'
import CloudImage from '../CloudImage'

const Monitor = () => {
  return (
    <div className="monitor__container">
      <Screen />
      <CloudImage publicId="synthfolio/mobitor-bg-2" className="monitor__bg" width="1440" height="" />
    </div>
  );
};

export default Monitor;
