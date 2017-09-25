const SET_DIET_FILTER = "SET_DIET_FILTER";

const initialState = {
  dinos: [],
  diet: undefined
};

// actions
export const setDietFilter = diet => {
  return {
    type: SET_DIET_FILTER,
    diet: diet
  };
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_DIET_FILTER:
      return {
        ...state,
        diet: action.diet
      };
    default:
      return state;
  }
};

export default reducer;
