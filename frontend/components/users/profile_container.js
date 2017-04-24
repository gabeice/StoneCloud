import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
