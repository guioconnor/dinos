import { connect } from "react-redux";
import MemoryGame from "../../components/organisms/MemoryGame";
import { getRandomDinos } from "../../redux/selectors.js";

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    getRandomDinos: getRandomDinos(state.dinos)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const MemoryGameContainer = connect(mapStateToProps, mapDispatchToProps)(
  MemoryGame
);

export default MemoryGameContainer;
