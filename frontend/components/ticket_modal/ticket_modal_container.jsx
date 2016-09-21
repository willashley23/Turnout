import {connect} from 'react-redux';
import { createTicket, removeTicket } from '../../actions/ticket_actions'; 
import TicketModal from './ticket_modal';

const mapStateToProps = (state, ownProps) => ({
  eventId: ownProps.params.id,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createTicket: (eventId) => {dispatch(createTicket(eventId))}
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(TicketModal);