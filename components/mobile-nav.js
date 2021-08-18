import React from "react";
import Link from "next/link";
import NavLinks from "./header/nav-links";

import logoLight from "../assets/images/logo-light.png";
import flag1 from "../assets/images/resources/flag-1-1.jpg";

const MobileNav = () => {
  return (
    <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay side-menu__block-overlay"></div>
      <div className="mobile-nav__content">
        <span className="mobile-nav__close side-menu__close-btn">
          <i className="far fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <img src={logoLight} width="101" alt="" />
            </a>
          </Link>
        </div>
        <div className="mobile-nav__container">
          <NavLinks />
        </div>

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="gfp-icon-email"></i>
            <a href="mailto:contact@gofundpeace.org">contact@gofundpeace.org</a>
          </li>
        </ul>
        {/* <div className="mobile-nav__top">
          <div className="mobile-nav__language">
            <img src={flag1} alt="" />
            <label className="sr-only" htmlFor="language-select">
              select language
            </label>
            <select className="selectpicker" id="language-select">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
            </select>
            <i className="fa fa-caret-down select-icon"></i>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MobileNav;
