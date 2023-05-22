import React from "react";

import "./styles.scss";

const About = () => {
  return (
    <div className="about" id="about">
      <section className="about__information">
        <a className="about__me" href="#">
          About me
        </a>
        <h3>Un Developpeur Front-End Junior passioné .</h3>
        <p>
          Jeune développeur curieux et passionné, toujours en quête de nouvelles
          compétences et de projets stimulants. J'aime la programmation, la
          collaboration et l'équilibre entre travail et loisir .
        </p>
      </section>

      <div className="about__image"></div>
    </div>
  );
};

export default About;
