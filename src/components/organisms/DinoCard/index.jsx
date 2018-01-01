import React from "react";
import styled from "styled-components";
import DietIcon from "../../atoms/DietIcon";
import HabitatIcon from "../../atoms/HabitatIcon";
import DinoImage from "../../atoms/DinoImage";
import PeriodGraph from "../../atoms/PeriodGraph";

const CardWrapper = styled.div`
  width: ${props => props.width ? `${props.width}px` : '100%'};
  min-height: ${props => props.width ? `${props.width}px` : '100%'};
  opacity: ${props => `${props.opacity}`};
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, .8);
  color: #333;
  padding: 10%;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #eee;
  }
`;

const ElementContainer = styled.div`
  width: 100px;
  height: 100px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  item,
  displayDetails,
  displayImage = true,
  opacity = 1,
  width = null,
  prefix,
}) => (
    <CardWrapper width={width} opacity={opacity}>
      {displayDetails && <H2>{item.name}</H2>}
      {displayImage && (
        <ElementContainer>
          <DinoImage name={item.itemId} prefix={prefix} alt={item.name} width={50} height={50} silhouette={item.silhouette} />
        </ElementContainer>
      )}
      {displayDetails && (
        <div>
          <Icons>
            <DietIcon diet={item.diet} />
            <HabitatIcon habitat={item.habitat} />
          </Icons>
          <ElementContainer>
            {item.mya && <PeriodGraph mya={item.mya} simple />}
          </ElementContainer>
        </div>
      )}
    </CardWrapper>
  );

export default DinoCard;
