import * as TrackAPIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';

export const receiveTracks = tracks => ({
  type: 'RECEIVE_TRACKS',
  tracks
});

export const receiveTrack = track => ({
  type: 'RECEIVE_TRACK',
  track
});

export const removeTrack = track => ({
  type: 'REMOVE_TRACK',
  track
});

export const fetchTracks = search => dispatch => {
  return TrackAPIUtil.fetchTracks(search)
    .then(tracks => dispatch(receiveTracks(tracks)));
}

export const fetchTrack = trackId => dispatch => {
  return TrackAPIUtil.fetchTrack(trackId)
    .then(track => dispatch(receiveTrack(track)));
};

export const createTrack = track => dispatch => {
  return TrackAPIUtil.createTrack(track)
    .then(track => dispatch(receiveTrack(track)));
}

export const updateTrack = (track, trackId) => dispatch => {
  return TrackAPIUtil.updateTrack(track, trackId)
    .then(track => dispatch(receiveTrack(track)));
}

export const deleteTrack = trackId => dispatch => {
  return TrackAPIUtil.deleteTrack(trackId)
    .then(track => dispatch(removeTrack(track)));
}
