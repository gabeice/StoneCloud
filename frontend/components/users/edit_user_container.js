import { connect } from 'react-redux';
import EditUser from './edit_user';
import { updateUser, fetchUser } from '../../actions/user_actions';
import { receiveCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  user: Object.values(state.user)[0]
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user, userId) => dispatch(updateUser(user, userId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUser);
