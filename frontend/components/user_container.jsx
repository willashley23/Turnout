import { connect } from 'react-redux';
import { requestEvents } from '../actions/event_actions';
import { allEvents } from '../reducers/selector';
import UserProfile from "./user";

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  // requestEvents: () => {
  // dispatch(requestEvents())
  // }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

