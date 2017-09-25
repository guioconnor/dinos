import React from "react";

const FilterButton = ({ onClick, value, children }) => (
  <button type="button" onClick={() => onClick(value)}>
    {children}
  </button>
);

export default FilterButton;
