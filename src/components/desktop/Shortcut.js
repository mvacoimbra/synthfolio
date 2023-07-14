import React from 'react';
import { useState } from 'react';
// css
import './Shortcut.css';
// components
import CloudImage from '../CloudImage';

const Shortcut = (props) => {
  const publicId = props.publicId;
  const name = props.name;
  const program = props.program

  const [clickedIcon, setClickedIcon] = useState('')
  const handleIconClick = () => {
    setClickedIcon(program)
    props.onIconDClick(clickedIcon)
  };

  return (
    <li className="shortcut">
      <div className="shortcut__icon" onClick={handleIconClick}>
        <CloudImage publicId={publicId} />
      </div>
      <div className="shortcut__tag">
        <h6 className="shortcut__name">{name}</h6>
      </div>
    </li>
  );
};

export default Shortcut;
