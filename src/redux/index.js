import { combineReducers } from "redux";
import dinos from './modules/dinos';
import animals from './modules/animals';
import birds from './modules/birds';
import memoryBoard from './modules//memoryBoard';
import filters from './modules//filters';

const rootReducer = combineReducers({
  dinos,
  animals,
  birds,
  memoryBoard,
  filters,
});

export default rootReducer;