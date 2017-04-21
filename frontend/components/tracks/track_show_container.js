import { fetchTrack } from '../../actions/track_actions';
import { connect } from 'react-redux';
import TrackShow from './track_show';

const mapStateToProps = (state, ownProps) => ({
  track: Object.values(state.tracks)[0],
  trackId: ownProps.location.pathname,
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
