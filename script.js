const hamburguerButtonEL = document.querySelector('[data-js="hamburguer-button"]')
const hamburguerMenuCloserEL = document.querySelector('[data-js="hamburguer-menu-closer"]')
const hamburguerMenuEL = document.querySelector('[data-js="hamburguer-menu"]')
const backdropAreaEL = document.querySelector('[data-js="backdrop-area"]')

const carouselImagesELs = Array.from(document.querySelector('[data-js="carousel-container"]').children)
const previousImageEL = document.querySelector('[data-js="previous-image"]')
const nextImageEL = document.querySelector('[data-js="next-image"]')

let carouselMoveInterval = null


function toggleShowHamburgerMenu() {
  const hamburguerMenuIsExposed = hamburguerMenuEL.classList.contains('show-hamburguer-menu--js')

  if (hamburguerMenuIsExposed) {
    hamburguerMenuEL.classList.remove('show-hamburguer-menu--js')
    backdropAreaEL.classList.remove('show-backdrop-area--js')
  }
  else {
    hamburguerMenuEL.classList.add('show-hamburguer-menu--js')
    backdropAreaEL.classList.add('show-backdrop-area--js')
  }
}

function getVisibleImageIndex() {
  for (let index=0; index < carouselImagesELs.length; index++) {
    const currentImage = carouselImagesELs[index]
    const theCurrentImageIsVisible = currentImage.classList.contains('show-image--js')

    if (theCurrentImageIsVisible) return index
  }
}

function removeVisibilityClass(imageIndex) {
  carouselImagesELs[imageIndex].classList.remove('show-image--js')
}

function addVisibilityClass(imageIndex) {
  carouselImagesELs[imageIndex].classList.add('show-image--js')
}

function scheduleCarouselAutoMovement() {
  carouselMoveInterval = setInterval(next, 4000)
}

function prev() {
  clearInterval(carouselMoveInterval)

  const visibleImageIndex = getVisibleImageIndex()
  const carouselImagesLength = carouselImagesELs.length

  removeVisibilityClass(visibleImageIndex)

  if (visibleImageIndex) {
    addVisibilityClass(visibleImageIndex-1)
  }
  else {
    addVisibilityClass(carouselImagesLength-1)
  }

  scheduleCarouselAutoMovement()
}

function next() {
  clearInterval(carouselMoveInterval)

  const visibleImageIndex = getVisibleImageIndex()
  const carouselImagesLength = carouselImagesELs.length

  removeVisibilityClass(visibleImageIndex)

  if (visibleImageIndex < carouselImagesLength-1) {
    addVisibilityClass(visibleImageIndex+1)
  }
  else {
    addVisibilityClass(0)
  }

  scheduleCarouselAutoMovement()
}

scheduleCarouselAutoMovement()


hamburguerMenuCloserEL.addEventListener('click', toggleShowHamburgerMenu)

hamburguerButtonEL.addEventListener('click', toggleShowHamburgerMenu)

previousImageEL.addEventListener('click', prev)

nextImageEL.addEventListener('click', next)
