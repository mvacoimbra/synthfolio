import React from 'react';
import { useState } from 'react';
// css
import './Shortcut.css';
// components
import CloudImage from '../UI/CloudImage';

const Shortcut = (props) => {
  const publicId = props.publicId;
  const name = props.name;
  const program = props.program

  const [clickedIcon, setClickedIcon] = useState('')
  const handleIconClick = () => {
    setClickedIcon(program)
    props.onIconClick(clickedIcon)
  };

  return (
    <li className="shortcut">
      <div className="shortcut__icon" onClick={handleIconClick}>
        <CloudImage publicId={publicId} className='shortcut__icon-img' />
      </div>
      <div className="shortcut__tag">
        <h6 className="shortcut__name">{name}</h6>
      </div>
    </li>
  );
};

export default Shortcut;
