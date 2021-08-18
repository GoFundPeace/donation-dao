import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import NavLinks from "./nav-links";
import OnboardingButton from "../button/onboard-button";
import { useEagerConnect } from "../../hooks"

import logoDark from "../../assets/images/logo-dark.png";

const Header = () => {
  const triedToEagerConnect = useEagerConnect()

  useEffect(() => {
    mobileMenu();
    return () => {
      mobileMenu();
    };
  });

  const mobileMenu = () => {
    document
      .querySelector(".mobile-nav__toggler")
      .addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.toggle("expanded");
        e.preventDefault();
      });

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay"
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.remove("expanded");
        e.preventDefault();
      });
    });
  };

  return (
    <header className="main-header">
      <Container>
        <div className="inner-container">
          <Row>
            <Col sm={12} md={12} lg={12} xl={2}>
              <div className="logo-box">
                <Link href="/">
                  <a aria-label="logo image">
                    <img src={logoDark} width="101" alt="" />
                  </a>
                </Link>
                <span className="mobile-onboard__toggler">
                  <OnboardingButton triedToEagerConnect={triedToEagerConnect} />
                </span>
                <span className="fa fa-bars mobile-nav__toggler"></span>
              </div>
            </Col>
            <Col
              sm={12}
              md={12}
              lg={12}
              xl={10}
              className="d-none d-md-none d-lg-none d-xl-block"
            >
              <div className="main-header__top">
                <div className="main-header__social">
                  <a href="#" aria-label="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
              <nav className="main-menu dynamic-radius">
              <Container>
                <NavLinks  />
              </Container>
              </nav>
            </Col>
          </Row>
        </div>
      </Container>
    </header>
  );
};

export default Header;
