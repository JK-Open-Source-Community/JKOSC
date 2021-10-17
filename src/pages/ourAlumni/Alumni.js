import React, { useState, useEffect, useRef } from "react";
import BannerBottom from "../../Components/banner-bottom/BannerBottom";
import "./Alumni.css";

function Alumni() {

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const myRef = useRef(null);
  const scrollTop = async () => scrollToRef(myRef);

  useEffect(() => {
    scrollTop();
  },[]);

  return (
    <div ref={myRef} className="alumni">
      <div className="banner5">
        <BannerBottom />
      </div>
      <h1> Our Alumnies </h1>
    </div>
  );
}

export default Alumni;
