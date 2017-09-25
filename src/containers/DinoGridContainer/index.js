import { connect } from "react-redux";
import {
  getdinosAlphabeticallySorted,
  getDinosFilteredByDiet
} from "../../redux/selectors.js";
import DinoGrid from "../../components/organisms/DinoGrid";
import mainIllustration from "../../img/main-illustration.jpg";

const mapStateToProps = state => {
  return {
    dinoData: getDinosFilteredByDiet(state.dinos)(state.diet),
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
