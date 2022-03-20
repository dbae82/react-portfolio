import React from "react";
import "./about.css";
import ME from "../../assets/normal-portrait.jpeg";
import { ImFire } from "react-icons/im";
import { FaHandshake, FaPaintBrush } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about pic" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <ImFire className="about__icon" />
              <h5>Passion</h5>
              {/* <small>1+ Years</small> */}
            </article>
            <article className="about__card">
              <FaHandshake className="about__icon" />
              <h5>Integrity</h5>
              {/* <small>200+ Worldwide</small> */}
            </article>
            <article className="about__card">
              <FaPaintBrush className="about__icon" />
              <h5>Creativity</h5>
              {/* <small>4+ Completed</small> */}
            </article>
          </div>

          <p>
          I am a front-end web developer with a love of design. In a previous life, I spent years in client relations and technical support which gave me a strong foundation in communication and problem solving skills. I decided to make a change in career paths and found a passion for coding which led me to share these projects with you. I love creating something out of nothing and using creativity to foster inspiration and joy. Take a look around and let me know what you think!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
