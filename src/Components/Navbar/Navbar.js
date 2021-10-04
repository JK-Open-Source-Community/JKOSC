import React, { useState, useEffect } from "react";
import imagered from "../../assets/favicon.png";
import imageblack from "../../assets/jkosc-logo-1.png";
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
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
    if (window.scrollY >= 105 * (window.innerHeight / 100)) {
      setNavblack(true);
    } else {
      setNavblack(false);
    }
  }

  window.addEventListener("scroll", changeNavColor);
  window.addEventListener("scroll", changeNavBlack);

  return (
      <div className="navbar">
        <div className={navbar ? (navblack ? "header black" : "header sticky" ) : "header"}>
        {/* <div className={navbar ? "header sticky" : "header"}> */}
        {/* <div className="header" > */}
          <a className="logo">
            {navblack ? 
            <img className="image" src={imageblack}  /> :
            <img className="image" src={imagered}  /> }
          </a>
          <ul>
            <li>
            <Link to="/">
              <a>Home</a>
              </Link>
            </li>
            <li>
            <Link to="/incept" >
              <a>Incept</a>
              </Link>
            </li>
            <li>
            <Link to="/bloom" >
              <a>Bloom Up</a>
              </Link>
            </li>
            <li>
            <Link to="/about" >
              <a>About Us</a>
              </Link>
            </li>
            <li>
            <Link to="/alumni" >
              <a>Our Alumni</a>
              </Link>
            </li>
          </ul>
        </div>
        </div>
        );
    }
    
    export default Navbar;