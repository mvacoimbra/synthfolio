import React from 'react';
import { useState, useEffect } from 'react';
// css
import './Window.css';
// componets
import CloudImage from '../UI/CloudImage';

const Window = ({
  children,
  cursorPosition,
  screenSize,
  onWindowClick,
  onWindowDrag,
  windowMove,
  onWindowClose,
  selectedProgram,
}) => {
  // window size
  const [windowSize, setWindowSize] = useState('50%');
  // window movement
  const [windowPosition, setWindowPosition] = useState({
    x: screenSize.width / 2,
    y: screenSize.height / 2,
  });

  const [isDragging, setIsDragging] = useState(false);
  const [clickOffset, setClickOffset] = useState({ x: 0, y: 0 });

  // window controls
  const [actualProgram, setActualProgram] = useState(selectedProgram);
  useEffect(() => {
    if (selectedProgram != '') {
      setActualProgram('');
    }
  }, [selectedProgram, windowSize.width]);

  const closeClick = () => {
    onWindowClose(actualProgram);
  };

  const maxMinClick = () => {
    if (windowSize === '50%') {
      setWindowSize('100%');
      setWindowPosition({
        x: screenSize.width / 2,
        y: screenSize.height / 2,
      });
    } else {
      setWindowSize('50%');
    }
  };

  // window dragging
  const windowDragStart = (e) => {
    if (windowSize !== '50%') return;
    setIsDragging(true);
    setClickOffset({
      x: e.clientX - windowPosition.x,
      y: e.clientY - windowPosition.y,
    });
  };

  useEffect(() => {
    setWindowPosition(windowMove);
    console.log(windowMove);
  }, [windowMove]);

  const windowDragOver = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    onWindowDrag(isDragging);
    onWindowClick(clickOffset);
  }, [isDragging, clickOffset]);

  return (
    <div
      className="window__container"
      style={{
        top: windowPosition.y,
        left: windowPosition.x,
        width: windowSize,
        height: windowSize,
      }}
    >
      <div
        className="window__header"
        style={{
          cursor: isDragging
            ? 'url(https://res.cloudinary.com/mvacoimbra/image/upload/v1689942563/synthfolio/cursor/hand-closed.png), grabbing'
            : 'url(https://res.cloudinary.com/mvacoimbra/image/upload/v1689942563/synthfolio/cursor/hand-open.png), grab',
        }}
        onMouseDown={windowDragStart}
        // onMouseLeave={windowDragOver}
        onMouseUp={windowDragOver}
      >
        <button className="window__control" onClick={maxMinClick}>
          <CloudImage
            publicId={
              windowSize === '50%'
                ? 'synthfolio/maximize-icon'
                : 'synthfolio/minimize-icon'
            }
            height="20"
          />
        </button>
        <button className="window__control" onClick={closeClick}>
          <CloudImage publicId="synthfolio/close-icon" height="20" />
        </button>
      </div>
      <div className="window__body">{children}</div>
    </div>
  );
};

export default Window;
