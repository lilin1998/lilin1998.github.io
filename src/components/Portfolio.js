import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Footer from "./Footer";

export default class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <AboutMe />
        <Skills />
        <Footer />
      </div>
    );
  }
}
