import React from 'react';
import { useState, useEffect } from 'react';
// css
import './Window.css';
// componets
import CloudImage from '../CloudImage';

const Window = ({
  children,
  cursorPosition,
  screenSize,
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

  const windowDrag = () => {
    if (isDragging !== true) return;
    setWindowPosition(cursorPosition);
    setWindowPosition({
      x: cursorPosition.x - clickOffset.x,
      y: cursorPosition.y - clickOffset.y,
    });
  };

  const windowDragOver = () => {
    setIsDragging(false);
  };

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
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={windowDragStart}
        onMouseMove={windowDrag}
        onMouseLeave={windowDragOver}
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
