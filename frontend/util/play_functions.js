export const startSong = (playbar, buttonImage, playButtonImage, prevButton) => {
  playbar.className = "";
  playButtonImage.className = "fa fa-pause";
  $('#progress-bar')[0].addEventListener("click", (position) => {
    debugger
    $('#song')[0].currentTime = (position.clientX-255)/(500/$('#song')[0].duration);
  })
  if(buttonImage) {
    buttonImage.className = "fa fa-pause";
  }
  if(prevButton) {
    prevButton.className = "fa fa-play";
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
