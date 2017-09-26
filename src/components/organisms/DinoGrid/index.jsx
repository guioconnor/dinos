import React from "react";
import styled from "styled-components";
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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const H1 = styled.h1`
  &:first-line {
    font-size: 50px;
  }
`;

// const MainImage = styled.img`
//   width: 94%;
//   padding: 30px;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
//   margin-bottom: 50px;
// `;

const DinoGrid = ({ dinoData, mainIllustration }) => (
  <div className="App">
    <H1>
      Thomas and Marco's <br /> dinosaur page
    </H1>
    {/* <MainImage className="main" src={mainIllustration} alt="dinosaurs" /> */}
    <Filter filterName="diet" filterValues={dietFilterValues} />
    <Filter filterName="period" filterValues={periodFilterValues} />
    <Container>{dinoData.map(dino => <DinoCard dino={dino} />)}</Container>
  </div>
);

export default DinoGrid;
