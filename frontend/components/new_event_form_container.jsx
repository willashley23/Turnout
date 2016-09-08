import { connect } from 'react-redux';
import { createEvent, clearEventErrors } from '../actions/event_actions';
import EventForm from './new_event_form';


const mapStateToProps = state => {
  return(
  {eventErrors: state.events.errors,
    currentUser: state.session.currentUser}
  )
};

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
  resetErrors: () => dispatch(clearEventErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);