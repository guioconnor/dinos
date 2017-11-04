import { connect } from 'react-redux';
import DinoDetailsCard from "../../components/organisms/DinoDetailsCard";
import { getAnimalById } from "../../redux/modules/animals/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    dino: getAnimalById(state.animals)(ownProps.animalId)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const AnimalDetailsCardContainer = connect(mapStateToProps, mapDispatchToProps)(DinoDetailsCard);

export default AnimalDetailsCardContainer;