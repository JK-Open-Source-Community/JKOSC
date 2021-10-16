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
import JkoscIntro from "../../assets/intro_logo.gif";

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
      <div className="jkosc-logo">
        <img src={JkoscIntro} alt="JKOSC" className="intro-logo" />
      </div>
      <div className="open-source-moto"> Ecouraging Open Source </div>
      <div className="open-source-quote"> "We want to put culture on a track so that it becomes more inclusive, more open source." </div>
      <div className="open-source-para">
        <div className="open-source-lines">
          I think open source is an evolutionary idea for humanity, this idea of transparency. It played out for us in the technology world. Open source production has shown us that world-class software, like Linux and Mozilla, can be created with neither the bureaucratic structure of the firm nor the incentives of the marketplace as we've known them.
        </div>
        <div className="open-source-lines">
          I often compare open source to science. To where science took this whole notion of developing ideas in the open and improving on other peoples' ideas and making it into what science is today and the incredible advances that we have had. And I compare that to witchcraft and alchemy, where openness was something you didn't do.
        </div>
        <div className="open-source-lines">
          Certainly there's a phenomenon around open source. You know free software will be a vibrant area. There will be a lot of neat things that get done there.In open source, we feel strongly that to really do something well, you have to get a lot of people involved. Open platforms historically undergo a lot of scrutiny, but there are a lot of advantages to having an open source platform from a security standpoint.
        </div>
        <div className="open-source-lines">
          One thing about open source is that even the failures contribute to the next thing that comes up. Unlike a company that could spend a million dollars in two years and fail and there's nothing really to show for it, if you spend a million dollars on open source, you probably have something amazing that other people can build on.
        </div>
        <div className="open-source-lines">
          We through JKOSC (JK Open Source Community) want to cultivate the Open Source Culture among us. Its an Idea where we encourage people to learn some great skills, taking part in Hackathons, Hacktoberfest, GSOC and various other events. JKOSC act as a helper for your learning phase where we all get united, learn together and serve together. Its a process of growing and grooming of inner-self with contribution to Society, to this technical world .
        </div>
      </div>

      <div className="logo-visit-github">
          <img className="visit-jkosc-logo" src={JkoscLogo} alt="JKOSC" />
        <a
          className="visit-git-statement"
          href="https://github.com/JK-Open-Source-Community"
          target="_blank"
        >
          <AiFillGithub style={{ fontSize: `750%`, color: `#ffffff` }} />
          <div className="visit-on-github">
            Visit us on GitHub
          </div>
        </a>

      </div>

      <div className="open-source-moto"> Community Statement </div>
      <div className="open-source-para">
        <div className="open-source-lines">
          We are a community of, and in solidarity with, people from every gender identity and expression, sexual orientation, race, ethnicity, language, neuro-type, size, ability, class, religion, culture, subculture, political opinion, age, skill level, occupation, and background.
        </div>
        <div className="open-source-lines">
          We acknowledge that not everyone has the time, financial means, or capacity to actively participate, but we recognize and encourage the involvement of all kinds. We facilitate and foster access and empowerment. We are all learners.
        </div>
        <div className="open-source-lines">
          In practice:
        </div>
        <ul className="ul-statement-lines">
          <li className="community-line">We are not coding snobs. We do not assume knowledge or imply there are things that somebody should know.</li>
          <li className="community-line">We insist on actively engaging with requests for feedback regardless of their complexity.</li>
          <li className="community-line">We welcome newcomers and prioritize the education of others. We strive to approach all tasks with the enthusiasm of a newcomer. Because we believe that newcomers are just as valuable in this effort as experts.</li>
          <li className="community-line">We consistently make the effort to actively recognize and validate multiple types of contributions.</li>
          <li className="community-line">We are always willing to offer help or guidance.</li>
        </ul>
      </div>

    </div>
  );
}

export default AboutPage;
