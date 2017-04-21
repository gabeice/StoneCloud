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
    track = ownProps.track;
  }
  return {
    track
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let submitAction = ownProps.location.pathname.endsWith("post") ? createTrack : updateTrack;
  return {
    submitAction: (track) => dispatch(submitAction(track))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackForm);
