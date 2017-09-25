import { connect } from "react-redux";
import { getFilteredDinos } from "../../redux/selectors.js";
import DinoGrid from "../../components/organisms/DinoGrid";
import mainIllustration from "../../img/main-illustration.jpg";

const mapStateToProps = state => {
  return {
    dinoData: getFilteredDinos(state.dinos)(state.filters),
    mainIllustration: mainIllustration
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const DinoGridContainer = connect(mapStateToProps, mapDispatchToProps)(
  DinoGrid
);

export default DinoGridContainer;
