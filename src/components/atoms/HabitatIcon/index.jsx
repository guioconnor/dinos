import React from "react";
import styled from "styled-components";

const Container = styled.span`
  font-size: 30px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const HabitatIcon = ({ habitat }) => {
  switch (habitat) {
    case "Sea":
      return <Container role="img">🌊</Container>;
    case "Freshwater":
      return <Container role="img">🚰</Container>;
    case "Land":
      return <Container role="img">⛰️</Container>;
    case "Sky":
      return <Container role="img">☁️</Container>;
    default:
      return <Container role="img" />;
  }
};

export default HabitatIcon;
