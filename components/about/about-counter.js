import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage from '../../assets/images/women/mujer-3-small.jpg';

const AboutCounter = () => {
  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };
  return (
    <section className='about-counter pt-120'>
      <Container>
        <Row>
          <Col lg={6}>
            <div className='block-title'>
              <p>
                Empower Yourself, Empower People
              </p>
              <h3>
                Charity for the people <br />
                by the people.
              </h3>
            </div>
            <p className='about-counter__text'>
              With GoFundPeace you have the power to pool <br />{' '}
              donations around the world and vote as a collective <br />{' '}
              on what projects to fund.{' '}
            </p>
            <ul className='list-unstyled ul-list-one'>
              <li>Donate to the pool of funds</li>
              <li>Vote on how to disperse the funds</li>
              <li>Help sustain peace in Colombia</li>
            </ul>
            <div className='about-counter__count'>
              <h3 className='odometer'>
                <VisibilitySensor
                  onChange={onVisibilityChange}
                  offset={{ top: 10 }}
                  delayedCall
                >
                  <CountUp end={counter.startCounter ? 4 : 0} />
                </VisibilitySensor>
              </h3>
              <p>
                Organizations are <br /> looking for funding
              </p>
            </div>
          </Col>
          <Col lg={2}>
            <div className='about-counter__image clearfix'>
              <img src={aboutImage} alt='' className='float-left' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCounter;
