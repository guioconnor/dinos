import { connect } from "react-redux";
import { setFilter } from "../../redux/modules/filters";
import Filter from "../../components/molecules/Filter";
import { logFllterChange } from "../../lib/analytics";


const mapStateToProps = (state, { filterValues }) => {
  return {
    filterValues
  };
};

const mapDispatchToProps = (dispatch, { filterName }) => {
  return {
    setFilter: filter => {
      logFllterChange(filterName, filter)
      dispatch(setFilter(filterName, filter))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
