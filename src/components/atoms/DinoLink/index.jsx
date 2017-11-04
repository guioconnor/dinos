import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { logDinoLinkClick } from "../../../lib/analytics";

let StyledDinoLink = styled(NavLink) `text-decoration: none;`;

const DinoLink = ({ dinoId, children, prefix = 'dinos' }) => (
  <StyledDinoLink
    to={`/${prefix}/${dinoId}`}
    onClick={() => logDinoLinkClick(dinoId)}
  >{children}</StyledDinoLink>
);

export default DinoLink;
