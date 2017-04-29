import { connect } from 'react-redux';
import Playbar from './playbar';
import { playTrack, clearTrack } from '../../actions/play_actions';
import { clearList } from '../../actions/playlist_actions';

const mapStateToProps = (state, ownProps) => ({
  nowPlaying: state.nowPlaying,
  upNext: state.playlist[state.nowPlaying.position + 1],
  lastSong: state.playlist[state.nowPlaying.position - 1]
});

const mapDispatchToProps = dispatch => ({
  playTrack: (track, pos) => dispatch(playTrack(track, pos)),
  clearTrack: () => dispatch(clearTrack()),
  clearList: () => dispatch(clearList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);
