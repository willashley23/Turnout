import { combineReducers } from 'redux'
import BenchesReducer from './events_reducer';
import SessionReducer from './session_reducer';
//import other reducers


export default combineReducers({
// reducer1: nameOfReducer
  events: BenchesReducer,
  session: SessionReducer
});