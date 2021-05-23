import React from "react";
import BannerBottom from "../../Components/banner-bottom/BannerBottom";
import "./Incept.css";
import JkoscLogo from "../../assets/jkosc-logo.png";
import ScrollableTabsButtonAuto from "../../Components/Navbar/StyledComponents/ScrollableTabsButtonAuto";
import { Button,ButtonGroup } from "@material-ui/core";

function Incept() {
  return (
    <div className="incept">
      <div className="banner2">
        <div className="incept-text">
          <img className="incept-jkoscLogo" src={JkoscLogo} alt="jkosc logo" />
          <div className="incept-heading">
            Build Your Grades Here. Surging the career with JKOSC.
          </div>
          <br />
          <div className="incept-para">
            The way to get started is to quit talking and begin doing
          </div>
        </div>
        <BannerBottom />
      </div>

      <div className="incept-container">
        <div className="syllabus-head" id="syllabus">
          Your B.tech Drive Path
        </div>
        <ButtonGroup variant="contained" color="primary">
          <Button>CSE</Button>
          <Button>ECE</Button>
        </ButtonGroup>
        <ScrollableTabsButtonAuto />
      </div>
    </div>
  );
}

export default Incept;
