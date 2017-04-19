import { fetchTrack } from '../../actions/track_actions';
import { connect } from 'react-redux';
import TrackShow from './track_show';

const mapStateToProps = (state, ownProps) => ({
  trackId: ownProps.location.pathname
});

const mapDispatchToProps = dispatch => ({
  fetchTrack: (trackId) => dispatch(fetchTrack(trackId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackShow);
