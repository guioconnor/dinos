import { connect } from "react-redux";
import { setFilter } from "../../redux";
import Filter from "../../components/molecules/Filter";

const mapStateToProps = (state, { filterValues }) => {
  return {
    filterValues
  };
};

const mapDispatchToProps = (dispatch, { filterName }) => {
  return {
    setFilter: filter => dispatch(setFilter(filterName, filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
