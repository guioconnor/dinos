const prefix = 'countingGame';
export const SET_NUMBER = `${prefix}/SET_NUMBER`;
export const ACTION_ITEM = `${prefix}/ACTION_ITEM`;
export const CHECK_NUMBER = `${prefix}/CHECK_NUMBER`;

const initialState = {
  number: null,
  resultFound: false,
  items: [],
};

// reducer
const countingGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER:
      return {
        ...initialState,
        items: Array(action.number).fill(false),
        number: action.number,
      };
    case ACTION_ITEM:
      const items = [...state.items];
      items[action.item - 1] = true;
      return {
        ...state,
        items,
      };
    case CHECK_NUMBER:
      if (action.number === state.number) {
        return {
          ...state,
          resultFound: true,
        }
      }
      return state;
    default:
      return state;
  }
};

export default countingGameReducer;