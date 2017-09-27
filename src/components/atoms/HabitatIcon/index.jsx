import React from "react";
import styled from "styled-components";

const Container = styled.span`font-size: 30px;`;

const HabitatIcon = ({ habitat }) => {
  switch (habitat) {
    case "sea":
      return <Container role="img">🌊</Container>;
    case "freshwater":
      return <Container role="img">🚰</Container>;
    case "land":
      return <Container role="img">⛰️</Container>;
    case "sky":
      return <Container role="img">☁️</Container>;
    default:
      return <Container role="img" />;
  }
};

export default HabitatIcon;
