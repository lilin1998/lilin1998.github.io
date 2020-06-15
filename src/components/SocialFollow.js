import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faGoogle,
    faTelegram,
    faLinkedin,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://www.github.com/lilin1998"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="4x" />
      </a>
      <a href="mailto:lilin1998@gmail.com"
        className="gmail social">
        <FontAwesomeIcon icon={faGoogle} size="4x" />
      </a>
      <a href="https://t.me/poofessionalist"
        className="telegram social">
        <FontAwesomeIcon icon={faTelegram} size="4x" />
      </a>
      <a href="https://www.linkedin.com/in/tan-lilin"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="4x" />
      </a>
      <a href="https://www.instagram.com/poofessionalist"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="4x" />
      </a>
    </div>
  );
}