import React from "react";

import styled from "styled-components";

const Container = styled.span`
  font-size: 30px;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const Icon = ({ type }) => {
  switch (type) {
    case "pronunciation":
      return <Container role="img">🗣</Container>;
    case "period":
      return <Container role="img">🗓️</Container>;
    case "info":
      return <Container role="img">🗒️</Container>;
    case "length":
      return <Container role="img">📏</Container>;
    case "name":
    case "meaningOfName":
    case "mya":
    default:
      return <Container role="img" />;
  }
};

export default Icon;
