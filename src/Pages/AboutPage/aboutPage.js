import React from "react";
import "./aboutPage.css";
import Navbar from "../../Components/NavBar/menu";
import SkillBox from "../../Components/SkillBox/skillBox";
import CodingHub from "../../images/codingHub.png";
import PSULogo from "../../images/PSUlogo.png";

const AboutPage = () => {
  return (
    <div className="aboutContainerOuter">
      <Navbar />
      <div className="aboutContainerInnerDiv">
        <h1>Software Engineer</h1>
      </div>
      <div className="blackBox1" />
      <div className="blackBox2" />
      <div className="blackBox1" />

      <div className="aboutBioDiv">
        <h3 className="aboutHeaderText">Who Am I</h3>
        <div className=" aboutBioBox">
          <p className="aboutBioParagraph">
            Hello there! My name is Keith but my friends call me Ricky. I'm a
            recent graduate from the State University of New York at Plattsburgh
            with a B.S in Computer Science as of May 2019. I am currently
            looking to be employed. I've been lucky enough to have recieved a
            variety of experience in both back-end and front-end development
            with the help of a club I helped start at my college called
            CodingHub. I love to be challenged and look forward to becoming part
            of a development team that looks to make each individual member
            better with every project.
          </p>
          <img src={CodingHub} className="codingHubImg" alt="codingHub" />
          <img src={PSULogo} className="PSUImg" alt="plattsburgh" />
        </div>
      </div>
      <div className="blackBox1" />
      <div className="blackBox2" />
      <div className="blackBox1" />
    </div>
  );
};

export default AboutPage;
