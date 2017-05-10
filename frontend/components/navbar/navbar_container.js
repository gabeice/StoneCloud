import Navbar from './navbar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearTrack, playTrack } from '../../actions/play_actions';
import { clearList, removeSong } from '../../actions/playlist_actions';

function mapStateToProps(state) {
  return {
    currentUser: state.session.currentUser,
    queue: state.playlist,
    nowPlaying: state.nowPlaying
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(clearTrack());
      dispatch(clearList());
      dispatch(logout());
    },
    playTrack: (track, pos) => dispatch(playTrack(track, pos)),
    removeSong: (pos) => dispatch(removeSong(pos))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
