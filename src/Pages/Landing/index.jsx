import React from "react";

// Import CSS
import "./styles.scss";

const Landing = () => {
  return (
    <div className="landing">
      <header className="landing__header">
        <h1 className="landing__logo">Cedric Friscia </h1>
        <nav className="landing__navbar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main className="landing__main">
        <section className="landing__presentation">
          <h2>Front-End React Developer</h2>
          <aside>
            Bonjour ! Je suis Friscia Cedric un développeur front-end React
            passionné habitant sur nice.{" "}
          </aside>
          <div className="landing__contact">
            <a
              href="https://www.linkedin.com/in/cedricfriscia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="landing__contact-linkedin"
                src="src\assets\img\icons8-linkedin-50.png"
                alt="Linkedin logo"
              />
            </a>
            <a
              href="https://github.com/CedricFriscia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="landing__contact-github"
                src="src\assets\img\icons8-github-50.png"
                alt="Github Logo"
              />
            </a>
          </div>
        </section>

        <section className="landing__image">
          <img
            src="src\assets\img\Team work_Monochromatic.svg"
            alt="Team Work image"
          />
        </section>
      </main>

      <footer>
        <section className="landing__stack">
          <h3>Stack Technique</h3>
        </section>
      </footer>
    </div>
  );
};

export default Landing;
