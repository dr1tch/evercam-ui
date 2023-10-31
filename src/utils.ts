export function isFullScreen() {
  const doc = document

  return !!(
    doc.fullscreenElement ||
    doc.mozFullScreenElement ||
    doc.webkitFullscreenElement ||
    doc.msFullscreenElement
  )
}

export function makeFullScreen(element: HTMLElement) {
  if (isFullScreen()) {
    return new Promise((resolve) => resolve())
  }

  if (element.requestFullscreen) {
    return element?.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    return element?.mozRequestFullScreen()
  } else if (element.webkitRequestFullScreen) {
    return element?.webkitRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    return element?.msRequestFullscreen()
  }
}

export function exitFullScreen() {
  if (isFullScreen()) {
    return new Promise((resolve) => resolve())
  }

  if (document.exitFullscreen) {
    return document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    return document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) {
    return document.webkitCancelFullScreen()
  } else if (document.msExitFullscreen) {
    return document.msExitFullscreen()
  }
}
