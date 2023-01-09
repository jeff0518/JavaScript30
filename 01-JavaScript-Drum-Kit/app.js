const playHandler = (e) => {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const dom = document.querySelector(`div[data-key = "${e.keyCode}"]`)
  if (audio) {
    audio.currentTime = 0
    audio.play()
  }

  if (dom) {
    dom.classList.add('playing')
  }
}

const transitionendHandle = (e) => {
  if (e.propertyName === 'transform') {
    e.currentTarget.classList.remove('playing')
  }
}

window.addEventListener('keydown', playHandler)
document
  .querySelectorAll(".key")
  .forEach((key) => key.addEventListener("transitionend", transitionendHandle));
