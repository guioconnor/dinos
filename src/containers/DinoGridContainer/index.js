import { connect } from "react-redux";
import DinoGrid from "../../components/organisms/DinoGrid";
import mainIllustration from "../../img/main-illustration.jpg";

const mapStateToProps = (state, ownProps) => {
  return {
    dinoData: state.dinos,
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
