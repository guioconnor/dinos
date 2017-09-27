import React from "react";
import styled from "styled-components";
import DinoCard from "../DinoCard";
import Filter from "../../../containers/FilterContainer";

const dietFilterValues = [
  { value: null, name: "All Diets" },
  { value: "carnivore", name: "Carnivore" },
  { value: "herbivore", name: "Herbivore" },
  { value: "omnivore", name: "Omnivore" }
];

const periodFilterValues = [
  { value: null, name: "All Periods" },
  { value: "Early Jurassic", name: "Early Jurassic" },
  { value: "Late Jurassic", name: "Late Jurassic" },
  { value: "Early Cretaceous", name: "Early Cretaceous" },
  { value: "Late Cretaceous", name: "Late Cretaceous" }
];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const H1 = styled.h1`font-size: 50px;`;

const DinoGrid = ({ dinoData, mainIllustration }) => (
  <div className="App">
    <H1>Dinosaurs</H1>
    <Filter filterName="diet" filterValues={dietFilterValues} />
    <Filter filterName="period" filterValues={periodFilterValues} />
    <Container>
      {dinoData
        .filter(dino => !!dino.image)
        .map(dino => <DinoCard dino={dino} />)}
    </Container>
  </div>
);

export default DinoGrid;
