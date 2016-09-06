import {connect} from 'react-redux';
import Home from './home';
import { allEvents } from '../reducers/selector';
import { requestEvents } from '../actions/event_actions';
import { requestBookmarks } from '../actions/bookmark_actions';
import {updateFilter} from '../actions/filter_actions';

const mapStateToProps = (state) => ({
  events: allEvents(state.events),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  requestEvents: () => {dispatch(requestEvents())},
  requestBookmarks: ()=> {dispatch(requestBookmarks())},
  updateFilter: (filter) => dispatch(updateFilter(filter))
  });

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Home);

