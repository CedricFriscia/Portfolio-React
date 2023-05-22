import React, { useState } from "react";
import "./styles.scss";
import Modal from "../Modal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconClose, setIsIconClose] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsIconClose(!isIconClose);
  };

  return (
    <div className="navbar">
      <header className="navbar__header">
        <h1 className="navbar__logo">Cedric Friscia </h1>
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
        <img
          onClick={handleClick}
          className="navbar__burger"
          src={
            isIconClose
              ? "/src/assets/img/icons8-close-50.png"
              : "/src/assets/img/icons8-menu-50.png"
          }
          alt="Menu burger"
        />
      </header>

      {isOpen && <Modal onClose={() => setIsOpen(false)}></Modal>}
    </div>
  );
};

export default Navbar;
