import React from "react";
import "./about.css";
import me_about from "../../assets/me_about.jpeg";
import { Data } from "../../utils/constants";
import { FaAward, FaFolderOpen } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me_about} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card ambient-light">
              <HiOutlineBuildingOffice2 className="about__icon" />
              <h5>Experience</h5>
              <small>{Data.About.Experience}</small>
            </article>
            <article className="about__card ambient-light">
              <FaAward className="about__icon" />
              <h5>Research Paper</h5>
              <small>{Data.About.Research_Papers}</small>
            </article>
            <article className="about__card ambient-light">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>{Data.About.Projects}</small>
            </article>
          </div>

          <p>{Data.About.paragraph}</p>

          <a href="#contact" className="colorful-button">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
