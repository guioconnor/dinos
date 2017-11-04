import { connect } from "react-redux";
import { getAllAnimalsAlphabeticallySorted } from "../../redux/modules/animals/selectors.js";
import DinoGrid from "../../components/organisms/DinoGrid";

const mapStateToProps = state => {
  return {
    dinoData: getAllAnimalsAlphabeticallySorted(state.animals),
    prefix: 'animals',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const DinoGridContainer = connect(mapStateToProps, mapDispatchToProps)(
  DinoGrid
);

export default DinoGridContainer;
