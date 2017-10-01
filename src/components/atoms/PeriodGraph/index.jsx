import React from "react";
import styled from "styled-components";

const getPercentagePosition = mya => {
  const limits = [237, 66];

  const getSafeValue = value => {
    if (value < limits[0] && value > limits[1]) {
      return value;
    } else if (value > limits[0]) {
      return limits[0];
    } else {
      return limits[1];
    }
  };

  const start = getSafeValue(mya[0]);
  const end = getSafeValue(mya[1]);

  return [
    100 * (1 - (start - limits[1]) / (limits[0] - limits[1])),
    100 * ((end - limits[1]) / (limits[0] - limits[1]))
  ];
};

const Wrapper = styled.div`
  height: 55px;
  padding: 15px 0;
`;

const TimeLine = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: ${props => (props && props.simple ? 10 : 25)}px;

  & > div > span {
    position: absolute;
    top: 2px;
    left: 0;
    right: 0;
    color: #233;
    font-size: 0.7em;
    text-align: center;
  }
`;

const PeriodBase = styled.div`position: relative;`;

const Triasic = styled(PeriodBase)`
  width: 21.05%;
  background: #ffbb5f;
  border-radius: 5px 0 0 5px;
`;

const Jurassic = styled(PeriodBase)`
  width: 32.74%;
  background: #fff15f;
`;

const Cretaceous = styled(PeriodBase)`
  width: 46.19%;
  background: #a166ef;
  border-radius: 0 5px 5px 0;
`;

const PinDropBase = styled.div`
  position: absolute;
  height: 15px;
  color: #233;
  font-size: 0.6em;
`;

const PinDropTopLeft = styled(PinDropBase)`
  left: 0;
  top: -15px;
  border-left: 1px solid #ccc;
`;

const PinDropTopRight = styled(PinDropBase)`
  right: 0;
  top: -15px;
  border-right: 1px solid #ccc;
`;

const PinDropBottomLeft = styled(PinDropBase)`
  left: -40px;
  bottom: -12px;
  border-right: 1px solid #ccc;
  text-align: right;
  padding-top: 6px;
  width: 40px;
`;

const PinDropBottomRight = styled(PinDropBase)`
  right: -40px;
  bottom: -12px;
  border-left: 1px solid #ccc;
  text-align: left;
  padding-top: 6px;
  width: 40px;
`;

const TimePeriod = styled.div`
  background: rgba(255, 0, 0, 0.7);
  position: absolute;
  left: ${props => props.mya && props.mya[0]}%;
  right: ${props => props.mya && props.mya[1]}%;
  top: ${props => (props.simple ? 5 : 15)}px;
  bottom: -3px;
  border-radius: 3px;
  min-width: 5px;
`;

const PeriodGraph = ({ mya = [], simple = false }) => (
  <Wrapper>
    <TimeLine simple={simple}>
      <Triasic>
        {!simple && <PinDropTopLeft>237mya</PinDropTopLeft>}
        {!simple && <span>Triassic</span>}
      </Triasic>
      <Jurassic>
        {!simple && <PinDropTopLeft>201mya</PinDropTopLeft>}
        {!simple && <span>Jurassic</span>}
      </Jurassic>
      <Cretaceous>
        {!simple && <PinDropTopLeft>145mya</PinDropTopLeft>}
        {!simple && <span>Cretaceous</span>}
        {!simple && <PinDropTopRight>66mya</PinDropTopRight>}
      </Cretaceous>
      {mya.length === 2 && (
        <TimePeriod mya={getPercentagePosition(mya)} simple={simple}>
          <PinDropBottomLeft>{mya[0]}</PinDropBottomLeft>
          <PinDropBottomRight>{mya[1]}</PinDropBottomRight>
        </TimePeriod>
      )}
    </TimeLine>
  </Wrapper>
);

export default PeriodGraph;
