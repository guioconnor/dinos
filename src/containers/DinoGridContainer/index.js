import {
  connect
} from "react-redux";
import {
  getFilteredDinos
} from "../../redux/selectors.js";
import {
  fetchItems
} from "../../redux/modules/dinos";
import DinoGrid from "../../components/organisms/DinoGrid";

const mapStateToProps = state => {
  return {
    dinoData: getFilteredDinos(state),
    prefix: 'dinos',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadItems: () => dispatch(fetchItems()),
  };
};

const DinoGridContainer = connect(mapStateToProps, mapDispatchToProps)(
  DinoGrid
);

export default DinoGridContainer;