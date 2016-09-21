import { connect } from 'react-redux';
import EventDetailView from './event_detail_view';
import { allEvents } from '../../reducers/selector';
import { requestEvent } from '../../actions/event_actions';
import { createTicket, removeTicket } from '../../actions/ticket_actions';
import { createBookmark, destroyBookmark } from '../../actions/bookmark_actions';

const mapDispatchToProps = (dispatch) => ({
  requestEvent: (id) => {dispatch(requestEvent(id))},
  createTicket: (eventId) => {dispatch(createTicket(eventId))},
  removeTicket: (eventId) => {dispatch(removeTicket(eventId))},
  createBookmark: (eventId) => {dispatch(createBookmark(eventId))},
  destroyBookmark: (bookmark) => {dispatch(destroyBookmark(bookmark))}
});

const mapStateToProps = (state, ownProps) => 
{
   let id = parseInt(ownProps.params.id);
   return {
     event: state.events[id],
     currentUser: state.session.currentUser
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailView);