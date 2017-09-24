import React from "react";
import DinoCard from "../DinoCard";

const DinoGrid = ({ dinoData, mainIllustration }) => (
  <div className="App">
    <h1>
      Thomas and Marco's <br /> dinosaur page
    </h1>
    <img className="main" src={mainIllustration} alt="dinosaurs" />
    <div className="container">
      {dinoData.map(dino => <DinoCard dino={dino} />)}
    </div>
  </div>
);

export default DinoGrid;
