import React, { useEffect } from "react";
import Link from "next/link";
import Donate from "./donate";

import logoLight from "../../assets/images/logo-light.png";

const SidePanel = () => {
  useEffect(() => {
    sidePanel();
    return () => {
      sidePanel();
    };
  });
  
  const sidePanel = () => {
    //Close Mobile Menu
    let sidePanelCloser = document.querySelectorAll(
      ".side-panel__close-btn, .side-menu__block-overlay"
    );

    sidePanelCloser.forEach((sidePanelCloserBtn) => {
      sidePanelCloserBtn.addEventListener("click", function (e) {
        document
          .querySelector(".side-panel__wrapper")
          .classList.remove("expanded");
        e.preventDefault();
      });
    });
  }  



  return (
    <div className="side-panel__wrapper">
      <div className="side-panel__content">
        <span className="side-panel__close side-panel__close-btn">
          <i className="far fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <img src={logoLight} width="101" alt="" />
            </a>
          </Link>
        </div>
        <Donate/>
      </div>
    </div>
  );
};

export default SidePanel;
