import { connect } from 'react-redux';
import Playbar from './playbar';
import { playTrack, clearTrack } from '../../actions/play_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    nowPlaying: state.nowPlaying
  }
};

const mapDispatchToProps = dispatch => ({
  playTrack: (track) => dispatch(playTrack(track)),
  clearTrack: () => dispatch(clearTrack())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playbar);
