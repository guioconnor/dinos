import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { logDinoLinkClick } from "../../../lib/analytics";

let StyledDinoLink = styled(NavLink) `text-decoration: none;`;

const DinoLink = ({ dinoName, children }) => (
  <StyledDinoLink
    to={`/dinos/${dinoName}`}
    onClick={() => logDinoLinkClick(dinoName)}
  >{children}</StyledDinoLink>
);

export default DinoLink;
