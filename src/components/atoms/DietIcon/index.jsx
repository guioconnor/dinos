import React from "react";
import styled from "styled-components";

const Container = styled.span`font-size: 30px;`;

const DietIcon = ({ diet }) => {
  switch (diet) {
    case "carnivore":
      return <Container role="img">🍖</Container>;
    case "herbivore":
      return <Container role="img">🌿</Container>;
    case "omnivore":
      return <Container role="img">🍖🌿</Container>;
    default:
      return <Container role="img" />;
  }
};

export default DietIcon;
