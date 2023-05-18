import React from "react";

import "./styles.scss";

const About = () => {
  return (
    <div className="about">
      <section className="about__information">
        <a className="about__me" href="#">
          About me
        </a>
        <h3>Un Developpeur Front-End Junior passioné .</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione id
          commodi recusandae, libero nemo accusantium voluptas nostrum suscipit
          consectetur ipsum voluptates molestiae rem necessitatibus? Adipisci
          aut cum repudiandae perferendis dicta!
        </p>
      </section>

      <div className="about__image"></div>
    </div>
  );
};

export default About;
