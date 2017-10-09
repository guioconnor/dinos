const prefix = 'filters';
const SET_FILTER = '${prefix}/SET_FILTER';

const initialState = {};

// actions
export const setFilter = (property, filter) => {
  return {
    type: SET_FILTER,
    property: property,
    filter: filter
  };
};

// reducer
const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        [action.property]: action.filter
      };
    default:
      return state;
  }
};

export default filtersReducer;
