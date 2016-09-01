import { connect } from 'react-redux';
import EventDetailView from './event_detail_view';
import { allEvents } from '../reducers/selector';
import { requestEvents } from '../actions/event_actions';// Actions

const mapDispatchToProps = (dispatch) => ({
  requestEvents: () => {
  dispatch(requestEvents())
  }
});
const mapStateToProps = (state, ownProps) => 
{
   let id = parseInt(ownProps.params.id)-1;
   return {
     event: state.events[id]
   }

}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailView);