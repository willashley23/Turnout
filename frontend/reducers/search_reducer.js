import { merge } from 'lodash';
import {RECEIVE_QUERY} from '../actions/search_actions';

const SearchReducer = (state = {}, action) => {
  switch (action.type) {

    case RECEIVE_QUERY:
      return action.query
      
    default: 
      return state;
  }
};

export default SearchReducer
