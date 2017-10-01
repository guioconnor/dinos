import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DietIcon from "../../atoms/DietIcon";
import HabitatIcon from "../../atoms/HabitatIcon";
import DinoImage from "../../atoms/DinoImage";
import PeriodGraph from "../../atoms/PeriodGraph";

const CardWrapper = styled.div`
  width: ${props => `${props.width}px`};
  min-height: ${props => `${props.width}px`};
  opacity: ${props => `${props.opacity}`};
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #fff;
  color: #333;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #eee;
  }
`;

const ElementContainer = styled.div`
  width: 100%;
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

const DinoCard = ({
  dino,
  displayDetails,
  displayImage = true,
  opacity = 1,
  width = 200
}) => (
  <CardWrapper width={width} opacity={opacity}>
    {displayDetails && <H2>{dino.name}</H2>}
    {displayImage && (
      <ElementContainer>
        <DinoImage src={dino.image} alt={dino.name} width={50} width={50} />
      </ElementContainer>
    )}
    {displayDetails && (
      <div>
        <Icons>
          <DietIcon diet={dino.diet} />
          <HabitatIcon habitat={dino.habitat} />
        </Icons>
        <ElementContainer>
          <PeriodGraph mya={dino.mya} simple />
        </ElementContainer>
      </div>
    )}
  </CardWrapper>
);

export default DinoCard;
