import {connect} from 'react-redux';
import Home from './home';

const mapStateToProps = (state) => ({
  // events: allEvents(state.events)
});

const mapDispatchToProps = (dispatch) => ({
  // requestBenches: () => {
  // dispatch(requestBenches())
  // }
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Home);

