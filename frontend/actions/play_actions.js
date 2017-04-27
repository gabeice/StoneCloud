export const PLAY_TRACK = 'PLAY_TRACK';
export const CLEAR_TRACK = 'CLEAR_TRACK';

export const playTrack = (track, pos) => ({
  type: 'PLAY_TRACK',
  track,
  pos
});

export const clearTrack = () => ({
  type: 'CLEAR_TRACK'
});
