import {connect} from 'react-redux';
import Home from './home';
import { allEvents } from '../reducers/selector';
import { requestEvents } from '../actions/event_actions';

const mapStateToProps = (state) => ({
  events: allEvents(state.events),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestEvents: () => {
  dispatch(requestEvents())
  }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Home);

