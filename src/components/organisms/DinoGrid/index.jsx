import React from "react";
import styled from "styled-components";
import DinoLink from "../../atoms/DinoLink";
import DinoCard from "../DinoCard";
import Filter from "../../../containers/FilterContainer";

const dietFilterValues = [
  { value: null, name: "All Diets" },
  { value: "Carnivore", name: "Carnivore" },
  { value: "Herbivore", name: "Herbivore" },
  { value: "Omnivore", name: "Omnivore" }
];

const periodFilterValues = [
  { value: null, name: "All Periods" },
  { value: "Early Jurassic", name: "Early Jurassic" },
  { value: "Late Jurassic", name: "Late Jurassic" },
  { value: "Early Cretaceous", name: "Early Cretaceous" },
  { value: "Late Cretaceous", name: "Late Cretaceous" }
];

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const GridItem = styled.li`
  margin: 10px;
  max-width: 230px;
  min-width: 150px;

  @media(max-width: 550px) {
    width: calc(50vw - 30px);
  }
`;

const StyledDinoLink = styled(DinoLink) `
  display: block;
  margin: 20px;
`;

const H1 = styled.h1`font-size: 50px;`;

const DinoGrid = ({ dinoData, mainIllustration }) => (
  <div className="App">
    <H1>Dinosaurs</H1>
    <Container>
      {dinoData.map(dino => (
        <GridItem>
          <StyledDinoLink dinoName={dino.name}>
            <DinoCard dino={dino} displayDetails />
          </StyledDinoLink>
        </GridItem>
      ))}
    </Container>
    <Filter filterName="diet" filterValues={dietFilterValues} />
    <Filter filterName="period" filterValues={periodFilterValues} />
  </div>
);

export default DinoGrid;
