import React from "react";
import AboutPage from "../AboutPage/aboutPage";

import "./homePage.css";
import Navbar from "../../Components/NavBar/menu";

const IndexPage = () => (
  <div className="container">
    <Navbar />

    <div className="nameDisplay">
      <h3 className="fname">Keith</h3>
      <h3 className="lname">Prevost</h3>
    </div>
  </div>
);

export default IndexPage;
