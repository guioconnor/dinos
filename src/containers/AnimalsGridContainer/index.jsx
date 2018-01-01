import { connect } from "react-redux";
import { getAllAnimalsAlphabeticallySorted } from "../../redux/modules/animals/selectors.js";
import { fetchItems } from "../../redux/modules/animals";

import DinoGrid from "../../components/organisms/DinoGrid";

const mapStateToProps = state => {
  return {
    dinoData: getAllAnimalsAlphabeticallySorted(state.animals),
    prefix: 'animals',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadItems: () => dispatch(fetchItems()),
  };
};

const AnimalGridContainer = connect(mapStateToProps, mapDispatchToProps)(
  DinoGrid
);

export default AnimalGridContainer;
