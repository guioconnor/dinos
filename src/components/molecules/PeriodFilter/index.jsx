import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../../redux";
import FilterButton from "../../atoms/FilterButton";

const PeriodFilter = ({ setFilter }) => (
  <ul>
    <li>
      <FilterButton onClick={setFilter} value={null}>
        All
      </FilterButton>
    </li>
    <li>
      <FilterButton onClick={setFilter} value="Late Jurassic">
        Late Jurassic
      </FilterButton>
    </li>
    <li>
      <FilterButton onClick={setFilter} value="Late Cretaceous">
        Late Cretaceous
      </FilterButton>
    </li>
    <li>
      <FilterButton onClick={setFilter} value="Early Jurassic">
        Early Jurassic
      </FilterButton>
    </li>
    <li>
      <FilterButton onClick={setFilter} value="Early Cretaceous">
        Early Cretaceous
      </FilterButton>
    </li>
  </ul>
);

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: filter => dispatch(setFilter("period", filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeriodFilter);
