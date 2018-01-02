import { connect } from 'react-redux';
import DinoDetailsCard from "../../components/organisms/DinoDetailsCard";
import { getDinoById } from "../../redux/modules/dinos/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    dino: getDinoById(state.dinos)(ownProps.dinoId),
    prefix: 'dinos',
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const DinoDetailsCardContainer = connect(mapStateToProps, mapDispatchToProps)(DinoDetailsCard);

export default DinoDetailsCardContainer;