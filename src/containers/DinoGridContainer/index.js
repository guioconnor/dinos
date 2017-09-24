import { connect } from "react-redux";
import { getdinosAlphabeticallySorted } from "../../redux/selectors.js";
import DinoGrid from "../../components/organisms/DinoGrid";
import mainIllustration from "../../img/main-illustration.jpg";

const mapStateToProps = (state, ownProps) => {
  return {
    dinoData: getdinosAlphabeticallySorted(state),
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
