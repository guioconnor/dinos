import React from "react";
import styled from "styled-components";

const TimeLine = styled.div`
  display: flex;
  width: 100%;
  height: 25px;

  & > div {
    position: relative;
  }

  & > div > span {
    color: #233;
    font-size: 0.7em;
    text-align: center;
  }
`;

const Triasic = styled.div`
  width: 21.05%;
  background: #ffbb5f;
  border-radius: 5px 0 0 5px;
`;

const Jurassic = styled.div`
  width: 32.74%;
  background: #fff15f;
`;

const Cretaceous = styled.div`
  width: 46.19%;
  background: #a166ef;
  border-radius: 0 5px 5px 0;
`;

const PinDropLeft = styled.div`
  position: absolute;
  left: 0;
  top: -30px;
  color: #233;
  font-size: 0.6em;
  border-left: 1px solid #ccc;
  height: 30px;
`;

const PinDropRight = styled.div`
  position: absolute;
  right: 0;
  top: -30px;
  color: #233;
  font-size: 0.6em;
  border-right: 1px solid #ccc;
  height: 30px;
`;

const PeriodGraph = ({ period }) => (
  <TimeLine>
    <Triasic>
      <PinDropLeft>237mya</PinDropLeft>
      <span>Triassic</span>
    </Triasic>
    <Jurassic>
      <PinDropLeft>201mya</PinDropLeft>
      <span>Jurassic</span>
    </Jurassic>
    <Cretaceous>
      <PinDropLeft>145mya</PinDropLeft>
      <span>Cretaceous</span>
      <PinDropRight>66mya</PinDropRight>
    </Cretaceous>
  </TimeLine>
);

export default PeriodGraph;
