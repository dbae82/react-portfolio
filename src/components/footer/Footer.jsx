import React from "react";
import "./footer.css";
import { FaGithubAlt } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import logo from "../../assets/logo-dark.png";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        <img src={logo} alt="logo" height="70px" />
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/dan-bae/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/dbae82">
          <FaGithubAlt />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Dan Bae. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
