import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DietIcon from "../../atoms/DietIcon";
import HabitatIcon from "../../atoms/HabitatIcon";

const CardLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 46%;
  background: #fff;
  color: #333;
  border-radius: 10px;
  margin: 1%;
  text-decoration: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  @media (min-width: 800px) {
    width: 16%;
  }

  @media (min-width: 1000px) {
    width: 12%;
  }

  &:hover {
    background: #eee;
  }

  &:hover img {
    transition: transform 0.15s;
    transition-timing-function: ease-in-out;
    transform: scale(2.4);
  }
`;

const ImageContainer = styled.div`
  flex-grow: 1;
  margin-bottom: 10px;
`;

const CardImage = styled.img`
  width: 90px;
  height: 90px;
`;

const Icons = styled.ul`
  display: flex;
  justify-content: center;

  & > span {
    margin: 0 5px;
  }
`;

const H2 = styled.h2`margin-top: 20px;`;

const DinoCard = ({ dino }) => (
  <CardLink to={`/dino/${dino.name}`}>
    <ImageContainer>
      <CardImage src={dino.image} alt={dino.name} />
    </ImageContainer>
    {/* <p>{dino.period}</p> */}
    <Icons>
      <DietIcon diet={dino.diet} />
      <HabitatIcon habitat={dino.habitat} />
    </Icons>
    <H2>{dino.name}</H2>
  </CardLink>
);

export default DinoCard;
