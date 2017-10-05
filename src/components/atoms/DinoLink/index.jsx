import React from "react";
import styled from "styled-components";
import ReactGA from 'react-ga';
import { NavLink } from "react-router-dom";

let StyledDinoLink = styled(NavLink) `text-decoration: none;`;

const LogClick = (dinoName) => {
  ReactGA.event({
    category: 'DinoLinkClick',
    action: 'click',
    label: dinoName
  });
}

const DinoLink = ({ dinoName, children }) => (
  <StyledDinoLink
    to={`/dinos/${dinoName}`}
    onClick={() => LogClick(dinoName)}
  >{children}</StyledDinoLink>
);

export default DinoLink;
