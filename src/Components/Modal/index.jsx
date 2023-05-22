import React from "react";
import "./styles.scss";

const Modal = () => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <nav className="navbar__mobile">
      <ul>
        <li>
          <a href="#home" onClick={() => navigateTo("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => navigateTo("about")}>
            About
          </a>
        </li>
        <li>
          <a href="#project" onClick={() => navigateTo("project")}>
            Project
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => navigateTo("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Modal;
