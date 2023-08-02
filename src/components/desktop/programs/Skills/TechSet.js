import React from 'react';

const TechSet = ({ title, array }) => {
  return (
    <div className="sheet__box tech-set__box">
      <h3>{title}</h3>
      <ul className="tech-set__list">
        {array.map((item, index) => {
          return (
            <li className="tech-set__item" key={index}>
              <i className={`tech-set__icon ${item.icon}`} />
              <h2>{item.name}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechSet;
