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
          <h2 className="menuText">Home</h2>
        </Link>
      </div>
    </div> //end menuBar div
  );
};

export default Menu;
