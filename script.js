const carouselContainerEL = document.querySelector('[data-js="carousel-container"]')
const previousImageEL = document.querySelector('[data-js="previous-image"]')
const nextImageEL = document.querySelector('[data-js="next-image"]')

function getCurrentlyVisibleImage() {
  const carouselImagesELs = Array.from(carouselContainerEL.children)

  for (let index=0; index++; index >= carouselImagesELs.length) {
    const currentImage = carouselImagesELs[index]
    const theCurrentImageIsVisible = currentImage.classList.contains('show-image--js')

    if (theCurrentImageIsVisible) return currentImage
  }
}

function prev() {
  console.log(getCurrentlyVisibleImage())
}

function next() {

}

previousImageEL.addEventListener('click', prev)

nextImageEL.addEventListener('click', next)