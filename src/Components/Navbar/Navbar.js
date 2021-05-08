import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import InfoIcon from "@material-ui/icons/Info";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SurgeLogo from "../../assets/aulogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navheader">
        <div className="navheader__icons">
        <Link to="/" className="navheader__icon">
            <HomeIcon />
            <p>Home</p>
          </Link>
          <Link to="/courses" className="navheader__icon">
            <LocalLibraryIcon />
            <p>Incept</p>
          </Link>
          </div>
          <img  src={SurgeLogo} alt="Surge Logo"></img>
          <div className="navheader__icons">
          <Link to="/about" className="navheader__icon">
            <InfoIcon />
            <p>Bloom Up</p>
          </Link>
          <Link to="/auth" className="navheader__icon">
            <AssignmentIndIcon />
            <p>Alumni</p>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
