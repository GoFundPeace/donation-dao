import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../assets/images/logos/mediumsmall-notext.png';

const AboutOne = () => {
  return (
    <section className='about pt-120 pb-120'>
      <Container>
        <Row>
          <Col xl={6}>
            <div className='about__image '>
              <img src={logo} alt='' />
            </div>
          </Col>
          <Col xl={6}>
            <div className='about__content'>
              <div className='block-title'>
                <h3>About GoFundPeace</h3>
              </div>
              <p className='mb-40 pr-10'>
                GoFundPeace is a place for grassroot organizations in Colombia who are 
                working to help sustain peace to reach out directly to the world for 
                funds that help support their local initiatives.
              </p>
              <p className='mb-40 pr-10'>
                Using the power of Ethereum and smart contracts, we've created a decentralized
                autonomous organization (DAO) that enables anyone in the world to donate to GoFundPeace
                using a cryptocurrency called DAI. DAI is a stable coin on the Ethereum network that 
                is pegged against the United States Dollar, meaning that 1 DAI is equal to about 1 US Dollar.
              </p>
              <p className='mb-40 pr-10'>
                Once you donate to the DAO, you will then receive a GoFundMe token (GFP) that is
                used to be able to vote on proposals on how to use the DAOs pool of donations.
                This means that you will get a say on not just where your donation goes to, but you 
                get a say on where all donations go to!
              </p>
              <p className='mb-40 pr-10'>
                
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutOne;

