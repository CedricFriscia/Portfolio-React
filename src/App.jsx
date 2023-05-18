import React from "react";

// IMPORT COMPONENTS
import Landing from "./Pages/Landing";
import About from "./Pages/About";

// IMPORT CSS
import "./css/reset.css";
import "./css/app.scss";

const App = () => {
  return (
    <div className="container">
      <Landing />
      <About />
    </div>
  );
};

export default App;
