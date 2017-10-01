import React from "react";
import styled from "styled-components";

const Container = styled.span`
  font-size: 30px;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const DietIcon = ({ diet }) => {
  switch (diet) {
    case "Carnivore":
      return <Container role="img">🍖</Container>;
    case "Herbivore":
      return <Container role="img">🌿</Container>;
    case "Omnivore":
      return <Container role="img">🍖🌿</Container>;
    default:
      return <Container role="img" />;
  }
};

export default DietIcon;
