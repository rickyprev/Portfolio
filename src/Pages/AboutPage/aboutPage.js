import React from "react";
import "./aboutPage.css";
import Navbar from "../../Components/NavBar/menu";
import SkillBox from "../../Components/SkillBox/skillBox";
import CodingHub from "../../images/codingHub.png";
import PSULogo from "../../images/PSUlogo.png";
import ScriptType from "../../images/scriptType.mp4";
import Shuttler from "../../images/shuttler.png";

const AboutPage = () => {
  return (
    <div className="aboutContainerOuter">
      <div className="aboutContainerInnerDiv">
        <Navbar className="menuBar" />

        <video autoPlay muted loop id="myVideo">
          <source src={ScriptType} type="video/mp4" heih />
        </video>
        <h1>Software Engineer</h1>
      </div>
      <div className="blackBox1" />
      <div className="blackBox2" />
      <div className="blackBox1" />

      <div className="aboutBioDivParent">
        <div className="aboutBioDivLeft">
          <div className="headerText">
            <h3 className="aboutHeaderText">Who Am I</h3>
          </div>

          <div className="aboutBioSummary">
            I'm a recent graduate from the State University of New York at
            Plattsburgh with a B.S in Computer Science as of May 2019. I'm
            currently looking to be employed. I've been lucky enough to have
            recieved a variety of experience in software development with the
            help of a club I helped start at my college, CodingHub. I'm excited
            to become part of a development team that looks to make each
            individual member better with every project.
          </div>
          <div className="aboutBioImages">
            <img src={PSULogo} width="100px" alt="" />
            <img src={CodingHub} width="100px" alt="" />
          </div>
        </div>
        <div className="aboutBioDivRight" />
      </div>

      <div className="blackBox1" />
      <div className="blackBox2" />
      <div className="blackBox1" />
      <div className="skillsContainer">
        <div className="skillsChildLeft">
          <div className="leftTop" />
        </div>
        <div className="skillsChildRight">
          <h2 className="languageText">
            The majority of the projects I've been involved with in the last
            year have involved ReactJS, SQL, and Python. Shuttler is a bus
            tracking app for Android and IOS myself and the rest of CodingHub
            created for SUNY Plattsburgh to help students who use the shuttle
            with time management. The web site was built using ReactJS.
          </h2>
          <a href="https://www.psushuttle.com/">
            <img src={Shuttler} width="100px" alt="" className="shuttler" />
          </a>
        </div>
      </div>

      <SkillBox />

      <div className="footer">
        <a href="https://github.com/rickyprev">
          <i class="fab fa-github fontAwe" />
        </a>
        <h2 className="footerText">GitHub</h2>
        <a href="https://www.linkedin.com/in/keith-prevost-776125161/">
          <i class="fab fa-linkedin fontAwe" />
        </a>
        <h2 className="footerText">LinkedIn</h2>
      </div>
    </div>
  );
};

export default AboutPage;
