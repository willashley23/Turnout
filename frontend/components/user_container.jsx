import { connect } from 'react-redux';
import { requestEvents } from '../actions/event_actions';
import { allEvents } from '../reducers/selector';
import { allEventsByFilter } from '../reducers/selector';
import { updateFilter } from '../actions/filter_actions';
import UserProfile from "./user";

const mapStateToProps = (state) => {
  return {currentUser: state.session.currentUser,
    requestEvents: requestEvents,
    events: allEventsByFilter(state.events, state.filter)}
};

const mapDispatchToProps = (dispatch) => ({
  requestEvents: () => { dispatch(requestEvents()) },
  updateFilter: (filter) => dispatch(updateFilter(filter))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

