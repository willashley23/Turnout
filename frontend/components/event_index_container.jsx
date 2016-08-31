import { connect } from 'react-redux';
import { requestEvents } from '../actions/event_actions';
import { allEvents } from '../reducers/selector';
import EventIndex from "./event_index";

const mapStateToProps = (state) => ({
  events: allEvents(state.events)
});

const mapDispatchToProps = (dispatch) => ({
  requestBenches: () => {
  dispatch(requestEvents())
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);

