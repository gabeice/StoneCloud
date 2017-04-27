import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchTracks } from '../../actions/track_actions';
import { playTrack } from '../../actions/play_actions';

const mapStateToProps = (state, ownProps) => ({
  tracks: Object.values(state.tracks),
  search: ownProps.location.query,
  queue: state.playlist,
  nowPlaying: state.nowPlaying
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: (search) => dispatch(fetchTracks(search)),
  playTrack: (track, pos) => dispatch(playTrack(track, pos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackIndex);
