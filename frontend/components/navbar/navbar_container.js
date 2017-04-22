import Navbar from './navbar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearTrack } from '../../actions/play_actions';

function mapStateToProps(state) {
  return {
    currentUser: state.session.currentUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(clearTrack());
      dispatch(logout());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
