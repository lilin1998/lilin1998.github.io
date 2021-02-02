import React from "react";
import img from "../styles/images/about-img.jpg";
import Skills from "./Skills";

export default class AboutMe extends React.Component {
  render() {
    return (
      <div id="aboutMe" className="about">
        <div className="container-fluid">
          <img className="circular--portrait" alt="Avatar" src={img} />
          <div className="row">
            <div className="col-sm-6">
              <h3 className="my-5">about me</h3>
              <div className="bio">
                <p>
                  I'm an <strong>Information Systems undergraduate</strong> from
                  National University of Singapore. I aspire to work in the
                  Business and IT field when i enter the workforce. Being an
                  International Business Diploma graduate, I am striving to
                  acquire more technical skills in the IT field to further my
                  knowledge.
                </p>
                <p>
                  This page is my humble attempt to put my expertise to great
                  use. I am currently passionate in software development. Feel
                  free to connect with me to share your knowledge and to know me
                  better!
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
