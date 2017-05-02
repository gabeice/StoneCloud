import { connect } from 'react-redux';
import TrackForm from './track_form';
import { createTrack, updateTrack, fetchTrack, removeTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => {
  let track;

  if(ownProps.location.pathname.endsWith("post")) {
    track = {
      title: "",
      artist: "",
      songFile: "",
      imageFile: "",
      imageUrl: "",
      user_id: ""
    }
  } else {
    track = Object.values(state.tracks)[0];
    if(track) {
      track.imageUrl = track.image_url;
    }
  }
  return {
    track,
    header: ownProps.location.pathname.endsWith("post") ? "Post a song" : "Edit song",
    tracks: state.tracks
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let submitAction = ownProps.location.pathname.endsWith("post") ? createTrack : updateTrack;
  return {
    submitAction: (track, trackId) => dispatch(submitAction(track, trackId)),
    fetchTrack: (trackId) => dispatch(fetchTrack(trackId)),
    removeTrack: (track) => dispatch(removeTrack(track))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
