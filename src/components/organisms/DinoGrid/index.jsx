import React from "react";
import DinoCard from "../DinoCard";
import DietFilter from "../../molecules/DietFilter";

const DinoGrid = ({ dinoData, mainIllustration }) => (
  <div className="App">
    <h1>
      Thomas and Marco's <br /> dinosaur page
    </h1>
    <img className="main" src={mainIllustration} alt="dinosaurs" />
    <DietFilter setFilter={f => console.log(f)} />
    <div className="container">
      {dinoData.map(dino => <DinoCard dino={dino} />)}
    </div>
  </div>
);

export default DinoGrid;
