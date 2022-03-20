import React from "react";
import "./projects.css";
import project1 from "../../assets/sports-tweets.gif";
import project2 from "../../assets/project-wayfarer.gif";
import project3 from "../../assets/badapple.gif";
import project4 from "../../assets/load.gif";

const data = [
  {
    id: 1,
    image: project1,
    title: "Project Sports Tweets",
    github: "https://github.com/dbae82/project-sports-tweets",
    demo: "https://sports-tweets.netlify.app/",
  },
  {
    id: 2,
    image: project2,
    title: "Project Wayfarer",
    github: "https://github.com/dbae82/project-wayfare",
    demo: "https://bestwayfarer.herokuapp.com/",
  },
  {
    id: 3,
    image: project3,
    title: "Bad Apple Movies",
    github: "https://github.com/dbae82/Project-1-Reverse-Engineer",
    demo: "https://badapplemovies.herokuapp.com/",
  },
  {
    id: 4,
    image: project4,
    title: "Project L.O.A.D.",
    github: "https://github.com/dbae82/project-0-game",
    demo: "https://dbae82.github.io/project-0-game/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="projects__item">
              <div className="projects__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="projects__item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
