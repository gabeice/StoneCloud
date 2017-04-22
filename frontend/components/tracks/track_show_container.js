import { fetchTrack, deleteTrack } from '../../actions/track_actions';
import { connect } from 'react-redux';
import TrackShow from './track_show';
import { playTrack } from '../../actions/play_actions';

const mapStateToProps = (state, ownProps) => ({
  track: Object.values(state.tracks)[0],
  trackId: ownProps.location.pathname,
  currentUserId: state.session.currentUser ? state.session.currentUser.id : null
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
  deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
  playTrack: (track) => dispatch(playTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
