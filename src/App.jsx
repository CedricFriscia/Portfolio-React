import React from "react";

// IMPORT COMPONENTS
import Landing from "./Pages/Landing";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div className="container">
      <Landing />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;

// IMPORT CSS
import "./css/reset.css";
import "./css/app.scss";
