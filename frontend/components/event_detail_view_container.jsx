import { connect } from 'react-redux';
import EventDetailView from './event_detail_view';
import { allEvents } from '../reducers/selector';
import { requestEvent } from '../actions/event_actions';// Actions

const mapDispatchToProps = (dispatch) => ({
  requestEvent: (id) => {
  dispatch(requestEvent(id))
  }
});
const mapStateToProps = (state, ownProps) => 
{
   let id = parseInt(ownProps.params.id);
   return {
     event: state.events[id]
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailView);