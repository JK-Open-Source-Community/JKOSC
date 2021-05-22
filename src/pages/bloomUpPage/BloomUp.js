import React from "react";
import BannerBottom from "../../Components/banner-bottom/BannerBottom";
import "./BloomUp.css";
import JkoscLogo from "../../assets/jkosc-logo.png";

function BloomUp() {
  return (
    <div className="bloom">
      <div className="banner3">
        <div className="bloom-text">
        <img className="bloom-jkoscLogo" src={JkoscLogo} alt="jkosc logo" />
          <div className="bloom-heading">
            College doesn't make us, Its we student, who make our College.
          </div>
          <div className="bloom-para">
            college is reflection of their students. Have again to see JK at its
            Golden Jublee Peak.
          </div>
        </div>
        <BannerBottom />
      </div>
      <h1> Bloom Up Your Skills</h1>
    </div>
  );
}

export default BloomUp;
