export const startSong = (playbar, buttonImage, playButtonImage, prevButton, prevWave) => {
  playbar.style.display = "flex";
  playButtonImage.className = "fa fa-pause";
  const prog = $('#outer-bar')[0];
  const song = $('#song')[0];
  song.loop = false;
  $('.fa-undo')[0].style.color = "black";
  prog.addEventListener("click", (position) => {
    song.currentTime = (position.clientX-prog.offsetLeft)/(prog.offsetWidth/song.duration);
  })
  if(buttonImage) {
    buttonImage.className = "fa fa-pause";
  }
  if(prevButton) {
    prevButton.className = "fa fa-play";
  }
  if(prevWave) {
    prevWave.firstChild.firstChild.style.width = "0px";
  }
}

export const playSong = (buttonImage, playButtonImage) => {
  playButtonImage.className = "fa fa-pause";
  if(buttonImage) {
    buttonImage.className = "fa fa-pause";
  }
}

export const pauseSong = (buttonImage, playButtonImage) => {
  playButtonImage.className = "fa fa-play";
  if(buttonImage) {
    buttonImage.className = "fa fa-play";
  }
}
