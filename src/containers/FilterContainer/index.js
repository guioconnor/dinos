import { connect } from "react-redux";
import ReactGA from 'react-ga';
import { setFilter } from "../../redux";
import Filter from "../../components/molecules/Filter";

const LogFilterChange = (filterName, filter) => {
  debugger;
  ReactGA.event({
    category: 'Filter',
    action: filterName,
    label: filter,
  });
}

const mapStateToProps = (state, { filterValues }) => {
  return {
    filterValues
  };
};

const mapDispatchToProps = (dispatch, { filterName }) => {
  return {
    setFilter: filter => {
      LogFilterChange(filterName, filter)
      dispatch(setFilter(filterName, filter))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
