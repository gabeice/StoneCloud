export const fetchTracks = search => {
  return $.ajax({
    method: 'GET',
    url: 'api/tracks',
    data: search
  });
};

export const fetchTrack = trackId => {
  return $.ajax({
    method: 'GET',
    url: `api/tracks/${trackId}`
  });
};

export const createTrack = track => {
  return $.ajax({
    method: 'POST',
    url: 'api/tracks',
    contentType: false,
    processData: false,
    data: track
  });
};

export const updateTrack = (track, trackId) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tracks/${trackId}`,
    contentType: false,
    processData: false,
    data: track
  });
};

export const deleteTrack = trackId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tracks/${trackId}`
  });
};
