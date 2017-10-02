import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

let StyledDinoLink = styled(NavLink) `text-decoration: none;`;

const DinoLink = ({ dinoName, children }) => (
  <StyledDinoLink to={`/dinos/${dinoName}`}>{children}</StyledDinoLink>
);

export default DinoLink;
