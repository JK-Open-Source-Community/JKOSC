import React, { useState } from "react";
import BannerBottom from "../../Components/banner-bottom/BannerBottom";
import "./Incept.css";
import JkoscLogo from "../../assets/jkosc-logo.png";
import ScrollableTabsButtonAuto from "../../Components/Navbar/StyledComponents/ScrollableTabsButtonAuto";
import { Button,ButtonGroup } from "@material-ui/core";


const Incept = () => {

  const [userSyllabus,setUserSyllabus] = useState(true);

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
          {userSyllabus && <div> Computer Science & Engineering </div>}
          {!userSyllabus && <div> Electronic & Communication Engineering </div>}
        </div>
        <ButtonGroup variant="contained" color="primary" >
        
          <Button onClick={()=>setUserSyllabus(true)} className={userSyllabus ? "streamButton-selected" : "streamButton-deselected"}>CSE</Button>
          <Button onClick={()=>setUserSyllabus(false)} className={userSyllabus ? "streamButton-deselected" : "streamButton-selected"} >ECE</Button>
          
        </ButtonGroup>
        
        <ScrollableTabsButtonAuto userSyllabus={userSyllabus}/>
      </div>
    </div>
  );
}

export default Incept;
