function sliderIntro() {
  const wrapper = document.querySelector('.intro__wrapper');
  const slider = document.querySelector('.intro__slider');
  const slides = document.querySelectorAll('.intro__slide');
  const sWidth =
    slides[1].getBoundingClientRect().width +
    window.getComputedStyle(slides[1]).marginLeft.split('px')[0] * 2;
  const rangeInput = document
    .querySelector('.range_favorite')
    .querySelector('.range__input');
  const RngCurVal = document
    .querySelector('.range_favorite')
    .querySelector('.range__big');
  let indexActive = 0;

  rangeInput.max = slides.length;

  slides.forEach((item, index) => {
    item.addEventListener('click', () => {
      shiftSlide(index);
      changeInputValue(rangeInput, index);
    });
  });

  rangeInput.addEventListener('input', () => shiftSlide(rangeInput.value - 1));
  //TODO: make adding of classes better
  slider.addEventListener('transitionend', () => {
    console.log('trans');
    setTimeout(() => {
      slides[indexActive].classList.add('intro__slide_big');
    }, 300);

    setTimeout(() => {
      slides[indexActive].classList.add('intro__slide_visible');
    }, 600);
  });
  shiftSlide(1);
  changeInputValue(rangeInput, 1);
  function shiftSlide(index) {
    if (slides[index].classList.contains('intro__slide_big')) {
      return false;
    }
    slides.forEach((it) => {
      it.classList.remove('intro__slide_big');
      it.classList.remove('intro__slide_visible');
    });
    slider.style.left = `${-sWidth * index}px`;
    indexActive = index;
    changeRangeValue(RngCurVal, index);
    for (let i = 0; i < index; i++) {
      slides[i].classList.add('intro__slide_hide');
    }

    for (
      let i = slides[index - 1] ? index - 1 : index;
      i < slides.length;
      i++
    ) {
      slides[i].classList.remove('intro__slide_hide');
    }
  }
  function changeRangeValue(elem, ind) {
    if (ind < 10) {
      elem.textContent = `0${ind + 1}/`;
    } else {
      elem.textContent = `${ind + 1}/`;
    }
  }
  function changeInputValue(elem, ind) {
    elem.value = ind + 1;
  }
  function pointerGenerator(listOfSlides, home) {
    const number = listOfSlides.length;
    for (let i = 0; i < number; i++) {
      const circle = document.createElement('div');
      circle.classList.add('intro__circle');
      const left =
        listOfSlides[i].getBoundingClientRect().left -
        home.getBoundingClientRect().left +
        listOfSlides[i].getBoundingClientRect().width / 2;
      console.log(left);
      circle.style.left = `${left}px`;
      home.append(circle);
    }
  }
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      pointerGenerator(slides, wrapper);
    }, 1000);
  });
}
sliderIntro();
