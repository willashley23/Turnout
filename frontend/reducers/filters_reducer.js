import { FilterConstants } from '../actions/filter_actions';
import merge from 'lodash/merge';

// const _defaultFilters = () => {
//     return true;
// }


const FiltersReducer = (state = null, action) => {
  // debugger
  switch (action.type) {

    case FilterConstants.UPDATE_FILTER:
      if (action.filter) {
        return action.filter;
      } else {
        return state;
      }
      break;

    default:
    return state;
  }
};

export default FiltersReducer;