import { connect } from 'react-redux';
import { createEvent } from '../actions/event_actions';
import EventForm from './new_event_form';

const mapStateToProps = state => ({
  eventErrors: state.errors
});

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);