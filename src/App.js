import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AboutPage from "../src/Pages/AboutPage/aboutPage";
import HomePage from "./Pages/HomePage/homePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
