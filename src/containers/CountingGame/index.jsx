import { connect } from "react-redux";
import CountingGame from "../../components/organisms/CountingGame";

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const CountingContainer = connect(mapStateToProps, mapDispatchToProps)(
  CountingGame
);

export default CountingContainer;
