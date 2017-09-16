import React from "react";
import { NavLink } from "react-router-dom";

const DinoGrid = ({ dinoData, mainIllustration }) => (
  <div className="App">
    <h1>
      Thomas and Marco's <br /> dinosaur page
    </h1>
    <img className="main" src={mainIllustration} alt="dinosaurs" />
    <div className="container">
      {dinoData.map(dino => (
        <NavLink to={`/dino/${dino.name}`} className="dino">
          <img src={dino.image} alt={dino.name} />
        </NavLink>
      ))}
    </div>
  </div>
);

export default DinoGrid;
