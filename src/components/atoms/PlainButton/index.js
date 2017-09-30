import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

const PlainButton = ({ children, ...props }) => (
  <Button type="button" {...props}>
    {children}
  </Button>
);

export default PlainButton;
