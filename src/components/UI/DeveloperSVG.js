import React, { useRef, useEffect, useState } from 'react';
// css
import './DeveloperSVG.css';
// components

const DeveloperSVG = () => {
  const textRef = useRef(null);
  const [textWidth, setTextWidth] = useState(null);
  useEffect(() => {
    console.log(textRef);
  }, [textRef.current]);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="320"
        height="100"
        viewBox="0 0 320 100"
        fill="none"
        id="mySVG"
      >
        <mask id="myMask">
          <text
            x="50%"
            y="50%"
            fontSize="10rem"
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            ref={textRef}
          >
            Developer
          </text>
        </mask>

        <path
          d="M22 22H7H-1L19 7L53.5 9.5L61 17L64 32L53.5 49L36 56.5L19 63.5H7L11 49L22 34.5L27.5 25L31.5 20V17L19 12.5L49 -2L72 52.5L83.5 49L91 39.5L94.5 34.5V32L88.5 29.5L81 34.5L74.5 43L72 60.5L78 63.5H86L94.5 56.5L101.5 49L110.5 39.5V34.5V32L105.5 29.5L101.5 39.5V63.5L105.5 69L112 58L114.5 52.5L120.5 49L124.5 39.5L126.5 34.5L128 28L124.5 52.5V56.5L131.5 52.5L139 49L147.5 46L151 43L155 39.5V34.5V29.5L147.5 25L143 34.5L135 43L131.5 46V60.5L137 63.5H143L147.5 60.5L157.5 52.5L165 46L170.5 39.5L176 34.5L180.5 28L185 22L186.5 15.5V9.5L180.5 2.5L176 17L170.5 25L167 29.5L163 39.5V60.5L165 63.5H170.5L176 56.5L183 52.5L189 43L192.5 39.5L199 34.5L202 32H206L186.5 63.5L196.5 58L202 52.5L206 43L215 49L208.5 56.5L223.5 39.5L231 29.5L236.5 22L241.5 20L208.5 74L206 80V83L241.5 34.5L248.5 32V43L238 55L231 63.5L251 55L255.5 52.5L272.5 46L280.5 34.5V29.5L265.5 34.5L259 39.5L255.5 46L259 60.5L262.5 66L280.5 60.5L289 46L291 39.5V34.5L295 28L306 34.5L308.5 39.5H301.5H295L299 49L295 55V58V63.5L299 66L306 58L310.5 52.5L316 49"
          stroke="#4AED0E"
          strokeWidth="16"
          mask="url(#myMask)"
          id="signature"
        />
      </svg>
    </div>
  );
};

export default DeveloperSVG;
