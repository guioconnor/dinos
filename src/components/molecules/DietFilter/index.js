import React from "react";
import { connect } from "react-redux";
import { setDietFilter } from "../../../redux";
import FilterButton from "../../atoms/FilterButton";

const DietFilter = ({ setFilter }) => (
  <ul>
    <li>
      <FilterButton onClick={setFilter} value={null}>
        All
      </FilterButton>
    </li>
    <li>
      <FilterButton onClick={setFilter} value="carnivore">
        Carnivores
      </FilterButton>
    </li>
    <li>
      <FilterButton onClick={setFilter} value="herbivore">
        Herbivores
      </FilterButton>
    </li>
    <li>
      <FilterButton onClick={setFilter} value="omnivore">
        Omnivores
      </FilterButton>
    </li>
  </ul>
);

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: filter => dispatch(setDietFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DietFilter);
