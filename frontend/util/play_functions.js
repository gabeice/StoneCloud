export const showStart = (playbar, buttonImage, playButtonImage) => {
  playbar.className = "";
  playButtonImage.className = "fa fa-pause";
  if(buttonImage) {
    buttonImage.className = "fa fa-pause";
  }
}

export const showPlay = (buttonImage, playButtonImage) => {
  playButtonImage.className = "fa fa-pause";
  if(buttonImage) {
    buttonImage.className = "fa fa-pause";
  }
}

export const showPause = (buttonImage, playButtonImage) => {
  playButtonImage.className = "fa fa-play";
  if(buttonImage) {
    buttonImage.className = "fa fa-play";
  }
}

export const indexStart = (playbar, playButtonImage, buttonImage, prevButton) => {
  playbar.className = "";
  playButtonImage.className = "fa fa-pause";
  if(buttonImage) {
    buttonImage.className = "fa fa-pause";
  }
  if(prevButton) {
    prevButton.className = "fa fa-play";
  }
}

export const indexPlay = (buttonImage, playButtonImage) => {
  playButtonImage.className = "fa fa-pause";
  if(buttonImage) {
    buttonImage.className = "fa fa-pause";
  }
}

export const indexPause = (buttonImage, playButtonImage) => {
  playButtonImage.className = "fa fa-play";
  if(buttonImage) {
    buttonImage.className = "fa fa-play";
  }
}
