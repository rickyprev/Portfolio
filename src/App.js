import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AboutPage from "../src/Pages/AboutPage/aboutPage";
import HomePage from "./Pages/HomePage/homePage";
// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
