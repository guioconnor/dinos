import React from "react";
import styled from "styled-components";
import DinoImage from "../../atoms/DinoImage";
import DietIcon from "../../atoms/DietIcon";
import HabitatIcon from "../../atoms/HabitatIcon";
import Icon from "../../atoms/Icon";
import PeriodGraph from "../../atoms/PeriodGraph";

const InfoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  flex: 1;
`;

const InfoItem = styled.li`
  padding: 30px 20px 15px 80px;
  margin: 0 0 1px 0;
  background: #4f5c5c;
  text-align: left;
  position: relative;
  line-height: 1.5;

  &:hover {
    background: #576464;
  }

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
  background: #3f4c4c;
  max-width: 700px;
  margin: 20px auto;
  border-radius: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    max-width: none;
    margin-left: 20px;
    margin-right: 20px;
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
        <PeriodGraph period={period} />
      </FeatureImageContainer>
      <InfoList>
        {name && (
          <InfoItem>
            <span>Name</span> <span>{name}</span>
          </InfoItem>
        )}
        {pronunciation && (
          <InfoItem>
            <span>Pronunciation</span>
            <IconContainer>
              <Icon type="pronunciation" />
            </IconContainer>
            <span>{pronunciation}</span>
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
            <span>Length</span>
            <IconContainer>
              <Icon type="length" />
            </IconContainer>
            <span>{length}</span>
          </InfoItem>
        )}
        {period && (
          <InfoItem>
            <span>Period</span>
            <IconContainer>
              <Icon type="period" />
            </IconContainer>
            <span>{period}</span>
          </InfoItem>
        )}
        {mya && (
          <InfoItem>
            <span>Mya</span> <span>{mya}</span>
          </InfoItem>
        )}
        {info && (
          <InfoItem>
            <span>Info</span>
            <IconContainer>
              <Icon type="info" />
            </IconContainer>
            <span>{info}</span>
          </InfoItem>
        )}
      </InfoList>
    </CardBody>
  </div>
);

export default DinoDetailsCard;
