import React from "react";
import "./menu.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menuBar">
      <div className="homeLink">
        <h2 className="menuText">
          <ul className="homeList">
            <Link to="/" className="list">
              <li>Home</li>
            </Link>
            <Link to="/about" className="list">
              <li>About</li>
            </Link>
            <Link to="/contact" className="list">
              <li>Contact</li>
            </Link>
          </ul>
        </h2>
      </div>
    </div> //end menuBar div
  );
};

export default Menu;
