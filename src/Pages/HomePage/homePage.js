import React from "react";

import "./homePage.css";
import Navbar from "../../Components/NavBar/menu";

const IndexPage = () => {
  return (
    <div className="containerHome">
      <Navbar className="navBar" />

      <div className="nameDisplay">
        <h3 className="fname">Keith</h3>
        <h3 className="lname">Prevost</h3>
      </div>

      <div className="homeButton" />
    </div>
  );
};

export default IndexPage;
