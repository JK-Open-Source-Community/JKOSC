import React, { useState, useEffect, useRef } from "react";
import "./HomePage.css";


function HomePage() {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const myRef = useRef(null);
  const scrollTop = async () => scrollToRef(myRef);

  useEffect(() => {
    scrollTop();
  },[]);

  return (
    <div ref={myRef} className="home">
      
      <div className="banner"></div>
        <div class="wrapper">
          <div class="static-txt">We are </div>
          <ul class="dynamic-txts">
            <li>
              <span>JK Open Source Society</span>
            </li>
            <li>
              <span>Community of developers</span>
            </li>
            <li>
              <span>run by students of</span>
            </li>
            <li>
              <span>JK Institute, Allahabad University</span>
            </li>
          </ul>
        </div>
      
    </div>
  );
}

export default HomePage;
