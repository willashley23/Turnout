import merge from 'lodash/merge';
import { INCREASE_LIMIT, CLEAR_LIMIT } from '../actions/limit_actions';

const LimitReducer = (state = 9, action) => {
  switch (action.type) {
    
    case INCREASE_LIMIT:
      let newLimit = 6 + action.limit
      return newLimit

    case CLEAR_LIMIT:
      return (9)
      
    default: 
      return state
  }
}

export default LimitReducer
