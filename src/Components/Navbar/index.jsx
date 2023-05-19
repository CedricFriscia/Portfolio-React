import React, { useState } from "react";
import "./styles.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <img
          className="navbar__burger"
          src={
            isOpen
              ? "src/assets/img/icons8-close-50.png"
              : "src/assets/img/icons8-menu-50.png"
          }
          alt="Menu burger"
        />
      </header>
    </div>
  );
};

export default Navbar;
