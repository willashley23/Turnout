import { connect } from 'react-redux';
import { requestEvents } from '../actions/event_actions';
import { allEvents } from '../reducers/selector';
import EventIndex from "./event_index";
import { createBookmark } from '../actions/bookmark_actions';

const mapStateToProps = (state) => ({
  events: allEvents(state.events),
});

const mapDispatchToProps = (dispatch) => ({
  createBookmark: (eventId) => {dispatch(createBookmark(eventId))},
  requestEvents: () => {dispatch(requestEvents())},
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);

