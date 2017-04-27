export const ADD_SONG = "ADD_SONG";
export const REMOVE_SONG = "REMOVE_SONG";
export const CLEAR_LIST = "CLEAR_LIST";

export const addSong = track => ({
  type: 'ADD_SONG',
  track
});

export const removeSong = pos => ({
  type: 'REMOVE_SONG',
  pos
});

export const clearList = () => ({
  type: 'CLEAR_LIST'
});
