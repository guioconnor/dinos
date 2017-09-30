import React from "react";
import styled from "styled-components";
import DinoImage from "../../atoms/DinoImage";
import DietIcon from "../../atoms/DietIcon";
import HabitatIcon from "../../atoms/HabitatIcon";

const InfoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  flex: 1;
`;

const InfoItem = styled.li`
  padding: 30px 20px 15px 80px;
  margin: 2px 0;
  background: #4f5c5c;
  text-align: left;
  position: relative;
  line-height: 1.5;

  & > span:first-child {
    position: absolute;
    top: 10px;
    font-size: 0.7em;
    color: #abc;
  }

  &:first-child {
    border-radius: 10px 10px 0 0;
  }

  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;

const H1 = styled.h1`
  font-size: 30px;

  @media (min-width: 768px) {
    font-size: 70px;
    padding: 20px 0 30px 0;
    background: #344;
    border-radius: 10px;
    margin: 0 20px;
  }
`;

const FeatureImageContainer = styled.div`
  max-width: 768px;
  padding: 2%;
  background: #fff;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  overflow: hidden;
  flex: 1;

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const IconContainer = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  line-height: 70px;
  width: 70px;
  text-align: center;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const DinoDetailsCard = ({
  dino: {
    name,
    image,
    pronunciation,
    meaningOfName,
    diet,
    habitat,
    length,
    period,
    mya,
    info
  }
}) => (
  <div className="App">
    <H1>{name}</H1>
    <CardBody>
      <FeatureImageContainer>
        <DinoImage className="main" src={image} alt={name} />
      </FeatureImageContainer>
      <InfoList>
        {name && (
          <InfoItem>
            <span>Name</span> <span>{name}</span>
          </InfoItem>
        )}
        {pronunciation && (
          <InfoItem>
            <span>Pronunciation</span> <span>{pronunciation}</span>
          </InfoItem>
        )}
        {meaningOfName && (
          <InfoItem>
            <span>Meaning Of Name</span> <span>{meaningOfName}</span>
          </InfoItem>
        )}
        {diet && (
          <InfoItem>
            <span>Diet</span>
            <IconContainer>
              <DietIcon diet={diet} />
            </IconContainer>
            <span>{diet}</span>
          </InfoItem>
        )}
        {habitat && (
          <InfoItem>
            <span>Habitat</span>
            <IconContainer>
              <HabitatIcon habitat={habitat} />
            </IconContainer>
            <span>{habitat}</span>
          </InfoItem>
        )}
        {length && (
          <InfoItem>
            <span>Length</span> <span>{length}</span>
          </InfoItem>
        )}
        {period && (
          <InfoItem>
            <span>Period</span> <span>{period}</span>
          </InfoItem>
        )}
        {mya && (
          <InfoItem>
            <span>Mya</span> <span>{mya}</span>
          </InfoItem>
        )}
        {info && (
          <InfoItem>
            <span>Info</span> <span>{info}</span>
          </InfoItem>
        )}
      </InfoList>
    </CardBody>
  </div>
);

export default DinoDetailsCard;
