export const PLAY_TRACK = 'PLAY_TRACK';
export const CLEAR_TRACK = 'CLEAR_TRACK';

export const playTrack = track => ({
  type: 'PLAY_TRACK',
  track
});

export const clearTrack = () => ({
  type: 'CLEAR_TRACK'
});
