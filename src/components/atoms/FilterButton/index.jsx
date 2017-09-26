import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #bbe;
  border-radius: 3px;
  border: none;
`;

const FilterButton = ({ onClick, value, children }) => (
  <Button type="button" onClick={() => onClick(value)}>
    {children}
  </Button>
);

export default FilterButton;
