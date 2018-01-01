const prefix = 'animals';

const REQUEST_ITEMS = `${prefix}/REQUEST_ITEMS`;
const RECEIVE_ITEMS = `${prefix}/RECEIVE_ITEMS`;

const initialState = {
  // isFetching: false,
};

// actions
function requestItems() {
  return {
    type: REQUEST_ITEMS,
  }
}

function receiveItems(items) {
  return {
    type: RECEIVE_ITEMS,
    items: items,
    receivedAt: Date.now(),
  }
}

export function fetchItems() {
  return dispatch => {
    dispatch(requestItems())
    return fetch(`https://dinos-ef87d.firebaseio.com/animals.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveItems(json)))
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ITEMS:
      return {
        ...state,
        // isFetching: true,
      }
    case RECEIVE_ITEMS:
      debugger;
      return {
        ...action.items,
        // isFetching: false,
        // receivedAt: action.receivedAt,
      }
    default:
      return state;
  }
}

export default reducer;