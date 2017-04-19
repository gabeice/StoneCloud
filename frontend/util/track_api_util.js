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
    data: {track}
  });
};

export const updateTrack = track => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tracks/${track.id}`,
    data: {track}
  });
};

export const deleteTrack = trackId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/tracks/${trackId}`
  });
};
