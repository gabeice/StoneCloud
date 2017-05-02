import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item';
import { playTrack } from '../../actions/play_actions';
import { addSong, clearList } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => ({
  track: ownProps.track,
  nowPlaying: state.nowPlaying,
  playlist: state.playlist
});

const mapDispatchToProps = dispatch => ({
  playTrack: (track, pos) => dispatch(playTrack(track, pos)),
  addSong: (track) => dispatch(addSong(track)),
  clearList: () => dispatch(clearList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndexItem);
