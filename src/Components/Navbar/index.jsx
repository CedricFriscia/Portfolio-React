import React, { useState } from "react";
import "./styles.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconClose, setIsIconClose] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsIconClose(!isIconClose);
    setShowModal(!showModal);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="navbar">
      <header className="navbar__header">
        <h1 className="navbar__logo">Cedric Friscia</h1>
        <nav className="navbar__desktop">
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
        <button className="navbar__burger" onClick={handleClick}>
          {isIconClose ? (
            <img src="/src/assets/img/icons8-close-50.png" alt="Close" />
          ) : (
            <img src="/src/assets/img/icons8-menu-50.png" alt="Menu" />
          )}
        </button>
      </header>

      {showModal && (
        <nav className="navbar__mobile">
          <ul>
            <li>
              <a href="#home" onClick={handleCloseModal}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleCloseModal}>
                About
              </a>
            </li>
            <li>
              <a href="#project" onClick={handleCloseModal}>
                Project
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleCloseModal}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
