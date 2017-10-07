import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(76vmin + 80px);
  height: calc(76vmin + 80px);
  margin: 0 auto 0 auto;
  user-select: none;

  & a {
    width: auto;
  }
`;

export default Grid;