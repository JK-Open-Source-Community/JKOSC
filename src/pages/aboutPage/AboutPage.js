import React from "react";
import BannerBottom from "../../Components/banner-bottom/BannerBottom";
import "./AboutPage.css";
import JkoscLogo from "../../assets/jkosc-logo.png";

function AboutPage() {
  return (
    <div className="about">
      <div className="banner4">
        <div className="about-banner-text">
          <div className="about-text">
            <div className="about-heading">We Develop it, For Society</div>
            <div className="about-para">
              A community of developers run by the students of JK Institute of
              Applied Physics and Technology.
            </div>
          </div>
          <img className="about-jkoscLogo" src={JkoscLogo} alt="jkosc logo" />
        </div>
        <BannerBottom />
      </div>
      <h1>Know more about our developer community</h1>
      <h2> Tirupati Raman Mishra </h2>
    </div>
  );
}

export default AboutPage;
