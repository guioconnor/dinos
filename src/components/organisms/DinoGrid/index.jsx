import React from "react";
import DinoCard from "../DinoCard";
import Filter from "../../../containers/FilterContainer";

const dietFilterValues = [
  { value: null, name: "All" },
  { value: "carnivore", name: "Carnivore" },
  { value: "herbivore", name: "Herbivore" },
  { value: "omnivore", name: "Omnivore" }
];

const periodFilterValues = [
  { value: null, name: "All" },
  { value: "Early Jurassic", name: "Early Jurassic" },
  { value: "Late Jurassic", name: "Late Jurassic" },
  { value: "Early Cretaceous", name: "Early Cretaceous" },
  { value: "Late Cretaceous", name: "Late Cretaceous" }
];

const DinoGrid = ({ dinoData, mainIllustration }) => (
  <div className="App">
    <h1>
      Thomas and Marco's <br /> dinosaur page
    </h1>
    {/* <img className="main" src={mainIllustration} alt="dinosaurs" /> */}
    <Filter filterName="diet" filterValues={dietFilterValues} />
    <Filter filterName="period" filterValues={periodFilterValues} />
    <div className="container">
      {dinoData.map(dino => <DinoCard dino={dino} />)}
    </div>
  </div>
);

export default DinoGrid;
