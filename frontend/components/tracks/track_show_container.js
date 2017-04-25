import { fetchTrack, deleteTrack, postComment } from '../../actions/track_actions';
import { connect } from 'react-redux';
import TrackShow from './track_show';
import { playTrack } from '../../actions/play_actions';

const mapStateToProps = (state, ownProps) => ({
  track: Object.values(state.tracks)[0],
  trackId: ownProps.location.pathname,
  currentUserId: state.session.currentUser ? state.session.currentUser.id : null,
  comments: Object.values(state.tracks)[0] ? Object.values(state.tracks)[0].comments : []
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
  deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
  playTrack: (track) => dispatch(playTrack(track)),
  postComment: (comment) => dispatch(postComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
