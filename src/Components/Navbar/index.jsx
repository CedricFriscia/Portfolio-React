import React from "react";

import "./styles.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <header className="navbar__header">
        <h1 className="navbar__logo">Cedric Friscia </h1>
        <nav className="navbar__navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
