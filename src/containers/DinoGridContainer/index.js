import { connect } from "react-redux";
import { getFilteredDinos } from "../../redux/selectors.js";
import DinoGrid from "../../components/organisms/DinoGrid";

const mapStateToProps = state => {
  return {
    dinoData: getFilteredDinos(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const DinoGridContainer = connect(mapStateToProps, mapDispatchToProps)(
  DinoGrid
);

export default DinoGridContainer;
