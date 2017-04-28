import { fetchTrack, deleteTrack, postComment, deleteComment, likeSong } from '../../actions/track_actions';
import { connect } from 'react-redux';
import TrackShow from './track_show';
import { playTrack } from '../../actions/play_actions';
import { addSong, clearList } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => ({
  track: Object.values(state.tracks)[0],
  trackId: ownProps.location.pathname,
  currentUserId: state.session.currentUser ? state.session.currentUser.id : null,
  comments: Object.values(state.tracks)[0] ? Object.values(state.tracks)[0].comments : [],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
  deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),

  playTrack: (track) => {
    dispatch(playTrack(track, 0));
    dispatch(addSong(track));
  },

  clearList: () => dispatch(clearList()),
  postComment: (comment) => dispatch(postComment(comment)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  like: (trackId) => dispatch(likeSong(trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
