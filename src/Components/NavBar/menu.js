import React from "react";
import "./menu.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import AboutPage from "../../Pages/AboutPage/aboutPage";
import HomePage from "../../Pages/HomePage/homePage";

const Menu = () => {
  return (
    <div className="menuBar">
      <div className="homeLink">
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </div>

      <div className="aboutLink">
        <Link to="/about">
          <h2>About</h2>
        </Link>
      </div>
      <div className="servicesLink">
        <Link to="/services">
          <h2>Services </h2>
        </Link>
      </div>
      <div className="icon">
        <i className="fab fa-linkedin linkedin" />

        <i className="fab fa-git-square git" />
      </div>
    </div> //end menuBar div
  );
};

export default Menu;
