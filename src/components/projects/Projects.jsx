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
    description: "Project Sports Tweets is a full MERN stack application powered by the Twitter API to provide sports fans an up to date feed of Tweets for their favorite teams.",
    github: "https://github.com/dbae82/project-sports-tweets",
    demo: "https://sports-tweets.netlify.app/",
  },
  {
    id: 2,
    image: project2,
    title: "Project Wayfarer",
    description: "Project wayfarer is a city based blog where users can create blog articles about their travels. This app was made using Django and PostgreSQL.",
    github: "https://github.com/dbae82/project-wayfare",
    demo: "https://bestwayfarer.herokuapp.com/",
  },
  {
    id: 3,
    image: project3,
    title: "Bad Apple Movies",
    description: "Bad Apple Movies is a full NEM stack web application where users could share opinions on what they think of movies by submitting reviews and holding discussions with other users.",
    github: "https://github.com/dbae82/Project-1-Reverse-Engineer",
    demo: "https://badapplemovies.herokuapp.com/",
  },
  {
    id: 4,
    image: project4,
    title: "Project L.O.A.D.",
    description: "Life of a Dev is a simple web application where you as a character will need to upkeep various metrics by clicking on buttons that correspond to the colored status bars. Through time, the character will evolve and after 2 evolutions the character will reach retirement.",
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
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="projects__item">
              <div className="projects__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="projects__item-description">
                <p>{description}</p>
              </div>
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
