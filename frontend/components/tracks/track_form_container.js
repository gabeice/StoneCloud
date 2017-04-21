import { connect } from 'react-redux';
import TrackForm from './track_form';
import { createTrack, updateTrack } from '../../actions/track_actions';

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
  }
  return {
    track,
    header: ownProps.location.pathname.endsWith("post") ? "Post a song" : "Edit song"
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let submitAction = ownProps.location.pathname.endsWith("post") ? createTrack : updateTrack;
  return {
    submitAction: (track, trackId) => dispatch(submitAction(track, trackId))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
