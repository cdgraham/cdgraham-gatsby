import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Obfuscate from 'react-obfuscate'; 
import PortfolioContext from '../context/context';
import Title from './Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <Obfuscate 
              className="cta-btn cta-btn--resume" 
              rel="noopener noreferrer" 
              email={email}>{btn || "Let's Talk"}
            </Obfuscate>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
