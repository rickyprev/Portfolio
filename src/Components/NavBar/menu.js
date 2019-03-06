import React from "react";
import "./menu.css";
// import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import AboutPage from "../../Pages/AboutPage/aboutPage";

const Menu = () => (
  <div className="menuBar">
    <div className="homeLink">
      <h2>Home</h2>
    </div>

    <div className="aboutLink">
      <h2>About</h2>
    </div>
    <div className="servicesLink">
      <h2>Services </h2>
    </div>
    <div className="icon">
      <i className="fab fa-linkedin linkedin" />

      <i className="fab fa-git-square git" />
    </div>
  </div> //end menuBar div
);

export default Menu;
