const hamburguerButtonEL = document.querySelector('[data-js="hamburguer-button"]')
const hamburguerMenuCloserEL = document.querySelector('[data-js="hamburguer-menu-closer"]')
const hamburguerMenuEL = document.querySelector('[data-js="hamburguer-menu"]')
const backdropAreaEL = document.querySelector('[data-js="backdrop-area"]')

const carouselImagesELs = Array.from(document.querySelector('[data-js="carousel-container"]').children)
const contentSectionsELs = Array.from(document.querySelector('main').children)
const previousImageEL = document.querySelector('[data-js="previous-image"]')
const nextImageEL = document.querySelector('[data-js="next-image"]')


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

function getVisibleSectionIndex() {
  for (let index=0; index < carouselImagesELs.length; index++) {
    const currentImage = carouselImagesELs[index]
    const theCurrentImageIsVisible = currentImage.classList.contains('show-image--js')

    if (theCurrentImageIsVisible) return index
  }
}

function removeVisibilityClasses(sectionIndex) {
  carouselImagesELs[sectionIndex].classList.remove('show-image--js')
  contentSectionsELs[sectionIndex].classList.remove('show-text--js')
}

function addVisibilityClasses(sectionIndex) {
  carouselImagesELs[sectionIndex].classList.add('show-image--js')
  contentSectionsELs[sectionIndex].classList.add('show-text--js')
}

function prev() {

  const visibleSectionIndex = getVisibleSectionIndex()
  const carouselImagesLength = carouselImagesELs.length

  removeVisibilityClasses(visibleSectionIndex)

  if (visibleSectionIndex) {
    addVisibilityClasses(visibleSectionIndex-1)
  }
  else {
    addVisibilityClasses(carouselImagesLength-1)
  }
}

function next() {
  const visibleSectionIndex = getVisibleSectionIndex()
  const carouselImagesLength = carouselImagesELs.length

  removeVisibilityClasses(visibleSectionIndex)

  if (visibleSectionIndex < carouselImagesLength-1) {
    addVisibilityClasses(visibleSectionIndex+1)
  }
  else {
    addVisibilityClasses(0)
  }
}


hamburguerMenuCloserEL.addEventListener('click', toggleShowHamburgerMenu)

hamburguerButtonEL.addEventListener('click', toggleShowHamburgerMenu)

backdropAreaEL.addEventListener('click', toggleShowHamburgerMenu)

previousImageEL.addEventListener('click', prev)

nextImageEL.addEventListener('click', next)
