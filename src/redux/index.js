const SET_FILTER = "SET_DIET_FILTER";

const initialState = {
  dinos: [],
  filters: {
    diet: undefined,
    period: undefined
  }
};

// actions
export const setFilter = (property, filter) => {
  return {
    type: SET_FILTER,
    property: property,
    filter: filter
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.property]: action.filter
        }
      };
    default:
      return state;
  }
};

export default reducer;
