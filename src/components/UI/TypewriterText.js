import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    const startTyping = () => {
      const currentChar = text[currentIndex];

      if (currentChar === '\n') {
        setDisplayedText((prevText) => prevText + '<br />');
      } else {
        setDisplayedText((prevText) => prevText + currentChar);
      }

      currentIndex++;

      if (currentIndex >= text.length) {
        clearInterval(interval);
      }
    };

    interval = setInterval(startTyping, delay);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div>
      <span dangerouslySetInnerHTML={{ __html: displayedText }} />
      {cursorVisible && <span className="cursor">|</span>}
    </div>
  );
};

export default TypewriterText;
