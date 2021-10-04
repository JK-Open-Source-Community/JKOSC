import React from "react";
import BannerBottom from "../../Components/banner-bottom/BannerBottom";
import "./AboutPage.css";
import JkoscLogo from "../../assets/jkosc-logo.png";
import RamanPic from "../../assets/raman-pic.jpg";
import AdityaPic from "../../assets/aditya.jpg";
import AyushPic from "../../assets/ayush.jpg";
import HareKrishnaPic from "../../assets/hareKrishna.jpg";
import SwayamPic from "../../assets/swayam.jpg";
import YashPic from "../../assets/yash1.jpg";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


function AboutPage() {

  const markdown = `

  `;


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

      <div className="team-members">
        <div className="team-quote-top"> "No one con whistle a symphony. It takes a whole orchestra to play it." </div>
        <div className="meet-with-Team"> Meet with our Team </div>
        <div className="team-quote"> "The strength of the team is each individual member. The strength of each member is the team." </div>
      </div>
      {/* <h1>Know more about our developer community</h1>
      <h2> Tirupati Raman Mishra </h2> */}
      <div>
        <div className="dveloper-outer">
          <div className="developer-inner">
            <div className="developer-profile-left">
              <img className="profile-pic-circle" src={RamanPic} alt="profile" />
              <div className="developer-details">
                <div className="developer-name">Tirupati Raman Mishra</div>

                <div className="developer-about">Passionate MERN Full Stack Developer</div>
                <div className="follow-on-text"> Follow on:</div>
                <div className="developer-follow">
                  <a
                    className="platform-link"
                    href="https://github.com/trmofsln"
                    target="_blank"
                  >
                    <AiFillGithub style={{ fontSize: `250%`, color: `#171515` }} />
                  </a>
                  <a
                    className="platform-link"
                    href="https://www.linkedin.com/in/tirupati-raman-mishra-a2a441190/"
                    target="_blank"
                  >
                    <AiFillLinkedin style={{ fontSize: `250%`, color: `#0072b1` }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="developer-profile-right">
              <img className="profile-pic-circle" src={AdityaPic} alt="profile" />
              <div className="developer-details">
                <div className="developer-name">Aditya Siddheshwar</div>
                <div className="developer-about">Passionate Electronics Engineer</div>
                <div className="follow-on-text"> Follow on:</div>
                <div className="developer-follow">
                  <a
                    className="platform-link"
                    href="https://github.com/two-ticks"
                    target="_blank"
                  >
                    <AiFillGithub style={{ fontSize: `250%`, color: `#171515` }} />
                  </a>
                  <a
                    className="platform-link"
                    href="https://www.linkedin.com/in/aditya-siddheshwar/"
                    target="_blank"
                  >
                    <AiFillLinkedin style={{ fontSize: `250%`, color: `#0072b1` }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="developer-inner">
            <div className="developer-profile-left">
              <img className="profile-pic-circle" src={HareKrishnaPic} alt="profile" />
              <div className="developer-details">
                <div className="developer-name">Harekrishna Rai</div>

                <div className="developer-about">Strong CyberSecurity Enthusiast</div>
                <div className="follow-on-text"> Follow on:</div>
                <div className="developer-follow">
                  <a
                    className="platform-link"
                    href="https://github.com/harekrishnarai"
                    target="_blank"
                  >
                    <AiFillGithub style={{ fontSize: `250%`, color: `#171515` }} />
                  </a>
                  <a
                    className="platform-link"
                    href="https://www.linkedin.com/in/harekrishnarai/"
                    target="_blank"
                  >
                    <AiFillLinkedin style={{ fontSize: `250%`, color: `#0072b1` }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="developer-profile-right">
              <img className="profile-pic-circle" src={AyushPic} alt="profile" />
              <div className="developer-details">
                <div className="developer-name">Ayush Agarwal</div>
                <div className="developer-about">Passionate Backend Developer</div>
                <div className="follow-on-text"> Follow on:</div>
                <div className="developer-follow">
                  <a
                    className="platform-link"
                    href="https://github.com/ayushagarwal210"
                    target="_blank"
                  >
                    <AiFillGithub style={{ fontSize: `250%`, color: `#171515` }} />
                  </a>
                  <a
                    className="platform-link"
                    href="https://www.linkedin.com/in/ayush-agarwal-3503b0192/"
                    target="_blank"
                  >
                    <AiFillLinkedin style={{ fontSize: `250%`, color: `#0072b1` }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="developer-inner">
            <div className="developer-profile-left">
              <img className="profile-pic-circle" src={YashPic} alt="profile" />
              <div className="developer-details">
                <div className="developer-name">Yash Kumar Prajapati</div>
                <div className="developer-about">MERN Stack Developer</div>
                <div className="follow-on-text"> Follow on:</div>
                <div className="developer-follow">
                  <a
                    className="platform-link"
                    href="https://github.com/yashpra2626"
                    target="_blank"
                  >
                    <AiFillGithub style={{ fontSize: `250%`, color: `#171515` }} />
                  </a>
                  <a
                    className="platform-link"
                    href="https://www.linkedin.com/in/yash-kumar-prajapati-a8b38a1b5/"
                    target="_blank"
                  >
                    <AiFillLinkedin style={{ fontSize: `250%`, color: `#0072b1` }} />
                  </a>
                </div>
              </div>
            </div>
            <div className="developer-profile-right">
              <img className="profile-pic-circle" src={SwayamPic} alt="profile" />
              <div className="developer-details">
                <div className="developer-name">Swayam Singh</div>

                <div className="developer-about">MERN Stack Developer</div>
                <div className="follow-on-text"> Follow on:</div>
                <div className="developer-follow">
                  <a
                    className="platform-link"
                    href="https://github.com/practice404"
                    target="_blank"
                  >
                    <AiFillGithub style={{ fontSize: `250%`, color: `#171515` }} />
                  </a>
                  <a
                    className="platform-link"
                    href="https://www.linkedin.com/in/swayam-singh-406610213/"
                    target="_blank"
                  >
                    <AiFillLinkedin style={{ fontSize: `250%`, color: `#0072b1` }} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <ReactMarkdown className="markdown-about" source={markdown} >{markdown}</ReactMarkdown> */}
      </div>
    </div>
  );
}

export default AboutPage;
