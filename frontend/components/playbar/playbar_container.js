import { connect } from 'react-redux';
import Playbar from './playbar';
import { playTrack, clearTrack } from '../../actions/play_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    nowPlaying: state.nowPlaying,
    upNext: state.playlist[state.nowPlaying.position + 1]
  }
};

const mapDispatchToProps = dispatch => ({
  playTrack: (track, pos) => dispatch(playTrack(track, pos)),
  clearTrack: () => dispatch(clearTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);
