import { FilterConstants } from '../actions/filter_actions';
import merge from 'lodash/merge';

const _defaultFilters = () => {
    return true;
}


const FiltersReducer = function(state = null, action){
  if (action.type === FilterConstants.UPDATE_FILTER){
    // const newFilter = {[action.filter]: action.value};
    return action.filter;
  } else {
    return state;
  }
};

export default FiltersReducer;