import { connect } from 'react-redux';
import EventDetailView from './event_detail_view';
// Actions

const mapStateToProps = state => ({
 event: state.event
})

export default connect(mapStateToProps)(EventDetailView);