import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DietIcon from "../../atoms/DietIcon";
import HabitatIcon from "../../atoms/HabitatIcon";
import DinoImage from "../../atoms/DinoImage";

const CardLink = styled(NavLink)`
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  color: #333;
  border-radius: 10px;
  margin: 20px;
  text-decoration: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #eee;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
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
      <DinoImage src={dino.image} alt={dino.name} width={50} width={50} />
    </ImageContainer>
    <Icons>
      <DietIcon diet={dino.diet} />
      <HabitatIcon habitat={dino.habitat} />
    </Icons>
    <H2>{dino.name}</H2>
  </CardLink>
);

export default DinoCard;
