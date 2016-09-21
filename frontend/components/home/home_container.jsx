import {connect} from 'react-redux';
import Home from './home';
import { allEvents } from '../../reducers/selector';
import { requestEvents } from '../../actions/event_actions';
import { requestBookmarks } from '../../actions/bookmark_actions';
import { updateFilter } from '../../actions/filter_actions';
import { increaseLimit, clearLimit } from '../../actions/limit_actions';

const mapStateToProps = (state) => ({
  events: allEvents(state.events),
  currentUser: state.session.currentUser,
  limit: state.limit
});

const mapDispatchToProps = (dispatch) => ({
  requestEvents: () => {dispatch(requestEvents())},
  requestBookmarks: ()=> {dispatch(requestBookmarks())},
  updateFilter: (filter) => dispatch(updateFilter(filter)),
  increaseLimit: (limit) => dispatch(increaseLimit(limit)),
  clearLimit: () => dispatch(clearLimit())
  });

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Home);

