import React from "react";
import "./contactPage.css";
import Selfie from "../../images/Selfie.png";
import Navbar from "../../Components/NavBar/menu";

const ContactPage = () => {
  return (
    <div className="containerContact">
      <div className="contactBack">
        <Navbar />
        <div className="aboutForm">
          <h2 className="contactFormText">
            Thank you for taking the time to view my page! The best way to
            contact me is my email at rickyprev1928@gmail.com. I can provide a
            copy of my resume as well as references upon request
          </h2>
          <div className="contactBothIcons">
            <div className="git">
              <a href="https://github.com/rickyprev">
                <i class="fab fa-github fontAwe" />
                <h2>Github</h2>
              </a>
            </div>
            <div className="linked">
              <a href="https://www.linkedin.com/in/keith-prevost-776125161/">
                <i class="fab fa-linkedin fontAwe" />
                <h2>Linkedin</h2>
              </a>
            </div>
          </div>
        </div>
        {/* <img src={Selfie} alt="headShot" className="headShot" /> */}
      </div>
    </div>
  );
};

export default ContactPage;
