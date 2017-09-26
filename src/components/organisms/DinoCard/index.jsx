import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const CardLink = styled(NavLink)`
  padding: 30px;
  width: 46%;
  background: #fff;
  border-radius: 10px;
  margin: 1%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #eee;
  }

  &:hover img {
    transition: transform 0.15s;
    transition-timing-function: ease-in-out;
    transform: scale(2.4);
  }

  &:hover h2 {
    transition: transform 0.15s 0.1s;
    transition-timing-function: ease-in-out;
    transform: scale(2.4);
  }
`;

const CardImage = styled.img`
  width: 70px;
  height: 70px;
`;

const DinoCard = ({ dino }) => (
  <CardLink to={`/dino/${dino.name}`}>
    <CardImage src={dino.image} alt={dino.name} />
    <h2>{dino.name}</h2>
    <p>{dino.diet}</p>
    <p>{dino.period}</p>
  </CardLink>
);

export default DinoCard;
