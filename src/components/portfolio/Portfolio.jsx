import React from "react";
import "./portfolio.css";
import { Data } from "../../assets/constants";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {Data.Projects.map((Obj) => {
          return (
            <article className="portfolio__item ambient-light" key={Obj.id}>
              <div className="portfolio__item-image">
                <img src={Obj.Image} alt="" />
              </div>
              <h3>{Obj.title}</h3>
              <div className="portfolio__item-cta">
                <a href={Obj.github} className="btn">
                  Github
                </a>
                <a
                  href={Obj.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
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

export default Portfolio;
