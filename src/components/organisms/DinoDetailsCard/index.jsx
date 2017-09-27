import React from "react";
import styled from "styled-components";

const InfoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const InfoItem = styled.li`
  padding: 5px 20px;
  margin: 2px 0;
  background: #567;
  color: #cde;
`;

const Image = styled.img`
  background: #fff;
  margin: 30px;
  padding: 30px;
  border-radius: 10%;
`;

const H1 = styled.h1`font-size: 30px;`;

const DinoDetailsCard = ({
  dino: {
    name,
    image,
    pronunciation,
    meaningOfName,
    diet,
    length,
    period,
    mya,
    info
  }
}) => (
  <div className="App">
    <H1>{name}</H1>
    <Image className="main" src={image} alt={name} />
    <InfoList>
      {name && <InfoItem>name: {name}</InfoItem>}
      {pronunciation && <InfoItem>pronunciation: {pronunciation}</InfoItem>}
      {meaningOfName && <InfoItem>meaningOfName: {meaningOfName}</InfoItem>}
      {diet && <InfoItem>diet: {diet}</InfoItem>}
      {length && <InfoItem>length: {length}</InfoItem>}
      {period && <InfoItem>period: {period}</InfoItem>}
      {mya && <InfoItem>mya: {mya}</InfoItem>}
      {info && <InfoItem>info: {info}</InfoItem>}
    </InfoList>
  </div>
);

export default DinoDetailsCard;
