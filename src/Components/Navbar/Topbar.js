import React, { useState } from "react";
import "./topbar.scss";
import imageblack from "../../assets/jkosc-logo-1.png";
import imagered from "../../assets/favicon.png";

function Topbar({ openMenu, setOpenMenu }) {
  const [navbar, setNavbar] = useState(false);
  const [navblack, setNavblack] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 10 * (window.innerHeight / 100)) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const changeNavBlack = () => {
    if (window.scrollY >= 120 * (window.innerHeight / 100)) {
      setNavblack(true);
    } else {
      setNavblack(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);
  window.addEventListener("scroll", changeNavBlack);
  return (
    <div className={openMenu ? "topbar active" : "topbar"}>
      <div className="wrapper">
        <div className="left">
          <a className="logo">
            {navblack ? (
              <img className="image" src={imageblack} />
            ) : (
              <img className="image" src={imagered} />
            )}
          </a>
        </div>
        <div className="right">
          <div
            className={navblack ? "hamburger black" : "hamburger"}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
