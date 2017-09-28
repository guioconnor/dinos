import React from "react";
import styled from "styled-components";
import FilterButton from "../../atoms/FilterButton";

const List = styled.ul`
  display: flex;
  justify-content: center;
  background: #567;
  border-radius: 3px;
`;
const ListItem = styled.li`margin: 10px;`;

const PeriodFilter = ({ setFilter, filterValues }) => {
  const ListItems = filterValues.map(v => (
    <ListItem>
      <FilterButton onClick={setFilter} value={v.value}>
        {v.name}
      </FilterButton>
    </ListItem>
  ));

  return <List>{ListItems}</List>;
};

export default PeriodFilter;
