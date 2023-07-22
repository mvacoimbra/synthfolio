import React from 'react';
// css
import './Contact.css';
// components
import Container from './UI/Container';

const Contact = () => {
  return (
    <Container className="contact__container">
      <div>
        <h2 className="contact__title">CONTACT</h2>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/mvacoimbra/"
            target="blank"
            className="contact__icon"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/mvacoimbra"
            target="blank"
            className="contact__icon"
          >
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a
            href="mailto:mv27.marcoscoimbra@gmail.com"
            target="blank"
            className="contact__icon"
          >
            <i className="fa-solid fa-square-envelope"></i>
          </a>
          <a
            href="https://discord.gg/2QSreUtJuH"
            target="blank"
            className="contact__icon"
          >
            <i className="fa-brands fa-discord"></i>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
