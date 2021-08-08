import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faTelegram,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="home-container">
      <p className="home-header">Hey, I'm Li Lin ;)</p>
      <p className="home-description">
        I would love to explore the field of frontend development.
      </p>
      <a className="button" href="resume.pdf" download="lilin-resume.pdf">
        Download Resume
      </a>
      <div className="header-social">
        <a href="https://www.github.com/lilin1998" className="github social">
          <FontAwesomeIcon icon={faGithub} className="icon-size" />
        </a>
        <a href="mailto:lilin1998@gmail.com" className="gmail social">
          <FontAwesomeIcon icon={faGoogle} className="icon-size" />
        </a>
        <a href="https://t.me/poofessionalist" className="telegram social">
          <FontAwesomeIcon icon={faTelegram} className="icon-size" />
        </a>
        <a
          href="https://www.linkedin.com/in/tan-lilin"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon-size" />
        </a>
        <a
          href="https://www.instagram.com/poofessionalist"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon-size" />
        </a>
      </div>
    </div>
  );
};

export default Home;
