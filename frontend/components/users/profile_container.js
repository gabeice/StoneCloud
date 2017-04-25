import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.params.userId,
  user: Object.values(state.user)[0]
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
