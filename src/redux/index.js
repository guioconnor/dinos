import { combineReducers } from "redux";
import dinos from './modules/dinos';
import memoryBoard from './modules//memoryBoard';
import filters from './modules//filters';

const rootReducer = combineReducers({
  dinos,
  memoryBoard,
  filters,
});

export default rootReducer;