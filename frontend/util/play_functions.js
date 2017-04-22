export const showStart = (playbar, buttonImage, playButtonImage) => {
  playbar.className = "";
  buttonImage.className = "fa fa-pause";
  buttonImage.style.fontSize = "2.5em";
  buttonImage.style.margin = "17px 20px";
  playButtonImage.className = "fa fa-pause";
  playButtonImage.style.fontSize = "1.5em";
  playButtonImage.style.margin = "17px 20px";
}

export const showPlay = (buttonImage, playButtonImage) => {
  buttonImage.className = "fa fa-pause";
  buttonImage.style.fontSize = "2.5em";
  buttonImage.style.margin = "17px 20px";
  playButtonImage.className = "fa fa-pause";
  playButtonImage.style.fontSize = "1.5em";
  playButtonImage.style.margin = "17px 20px";

}

export const showPause = (buttonImage, playButtonImage) => {
  buttonImage.className = "fa fa-play";
  buttonImage.style.fontSize = "3em";
  buttonImage.style.margin = "14px 23px";
  playButtonImage.className = "fa fa-play";
  playButtonImage.style.fontSize = "2em";
  playButtonImage.style.margin = "14px 23px";
}

export const indexStart = (playbar, playButtonImage, buttonImage, prevButton) => {
  playbar.className = "";
  playButtonImage.className = "fa fa-pause";
  playButtonImage.style.fontSize = "0.9em";
  playButtonImage.style.margin = "6px 6px";
  buttonImage.className = "fa fa-pause";
  buttonImage.style.fontSize = "0.9em";
  buttonImage.style.margin = "6px 6px";
  if(prevButton) {
    prevButton.className = "fa fa-play";
    prevButton.style.fontSize = "1em";
    prevButton.style.margin = "4px 8px";
  }
}

export const indexPlay = (playButtonImage, buttonImage) => {
  playButtonImage.className = "fa fa-pause";
  playButtonImage.style.fontSize = "0.9em";
  playButtonImage.style.margin = "6px 6px";
  buttonImage.className = "fa fa-pause";
  buttonImage.style.fontSize = "0.9em";
  buttonImage.style.margin = "6px 6px";
}

export const indexPause = (playButtonImage, buttonImage) => {
  playButtonImage.className = "fa fa-play";
  playButtonImage.style.fontSize = "1em";
  playButtonImage.style.margin = "4px 8px";
  buttonImage.className = "fa fa-play";
  buttonImage.style.fontSize = "1em";
  buttonImage.style.margin = "4px 8px";
}
