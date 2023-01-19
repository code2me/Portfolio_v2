import React from "react";
import "./footer.css";
import { Data } from "../../utils/constants";
import { SiLeetcode, SiLinkedin, SiInstagram } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#about" className="footer__logo">
        Navneet Bahuguna
      </a>

      <ul className="permalinks">
        <li>
          <a href="#about">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href={Data.LINKEDIN}>
          <SiLinkedin />
        </a>
        <a href={Data.TWITTER}>
          <BsTwitter />
        </a>
        <a href={Data.LEETCODE}>
          <SiLeetcode />
        </a>
        <a href={Data.INSTA}>
          <SiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved</small> <br />
        <small>Created by Navneet Bahuguna</small>
      </div>
    </footer>
  );
};

export default Footer;
