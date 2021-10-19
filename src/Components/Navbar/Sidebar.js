import React, { useState } from "react";
import "./sidebar.scss";
import imageblack from "../../assets/jkosc-logo-1.png";
import imagered from "../../assets/favicon.png";

function Sidebar({ openMenu, setOpenMenu }) {

  const [navblack, setNavblack] = useState(false);


  const changeNavBlack = () => {
    if (window.scrollY >= 250 * (window.innerHeight / 100)) {
      setNavblack(true);
    } else {
      setNavblack(false);
    }
  };

  window.addEventListener("scroll", changeNavBlack);

  //   setOpenMenu(true);
  return (
    <div className={openMenu ? "sidebar active" : "sidebar"}>
        <div className="left">
          <a className="logo">
            {navblack ? (
              <img className="image2" src={imageblack} />
            ) : (
              <img className="image2" src={imagered} />
            )}
          </a>
        </div>
      <ul>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/">Home</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/incept">Incept</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/bloom">Bloom</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/about">About US</a>
        </li>
        <li onClick={() => setOpenMenu(false)}>
          <a href="/alumni">Our Alumni</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
