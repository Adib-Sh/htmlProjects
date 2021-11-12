const sliderContainer = document.querySelector('.slider-container')
const sliderRight = document.querySelector('.right-slider')
const sliderLeft = document.querySelector('.left-slider')
const upButton = document.querySelector('.up')
const downButton = document.querySelector('.down')
const slideLength = sliderRight.querySelectorAll('div').length

let activeSlideIndex = 0

sliderLeft.style.top = `-${(slideLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up'){
        activeSlideIndex ++
        if(activeSlideIndex > slideLength - 1){
            activeSlideIndex = 0
        }
    } else if(direction === 'down'){
        activeSlideIndex --
        if(activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1
        }
    }
    sliderRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    sliderLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}