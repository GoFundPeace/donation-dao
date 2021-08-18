import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import ml from "../assets/images/partners/ML.png";
import mptf from "../assets/images/partners/MPTF.png";

const Footer = () => {
  return (
    <section className="site-footer">
      <div className="main-footer pt-142 pb-80">
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <a href="https://www.media.mit.edu/projects/gofundpeace/overview/" target="_blank">
                <img src={ml}></img>
              </a>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <a href="https://www.fondoonucol.org/" target="_blank">
                <img src={mptf}></img>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ScrollLink
            to="wrapper"
            smooth={true}
            duration={500}
            className="scroll-to-top"
          >
            <i className="far fa-angle-up"></i>
          </ScrollLink>
          <p>© Copyright 2021 by GoFundPeace</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
