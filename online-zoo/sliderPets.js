function sliderPets() {
  const slider = document.querySelector('.pets__slider');
  const sliderLine = document.querySelector('.pets__slider-line');
  const slides = document.querySelectorAll('.pets__slide');
  let sWidth =
    slides[1].getBoundingClientRect().width +
    window.getComputedStyle(slides[1]).marginLeft.split('px')[0] * 2; // длинна одного слайда
  const rangeInput = document
    .querySelector('#range-pets')
    .querySelector('.range__input');
  const RngCurVal = document
    .querySelector('#range-pets')
    .querySelector('.range__big');
  let indexActive = 0;
  let maxNumVisSlides = Math.round(
    document.querySelector('.pets__slider-wrapper').getBoundingClientRect()
      .width / sWidth
  );
  let sliderW = slider.getBoundingClientRect().width;
  rangeInput.max = slides.length;

  for (let i = 0; i < maxNumVisSlides; i++) {
    slides[i].setAttribute('visib', true);
  }

  function slideOverflow(index) {
    let targetShift = 0,
      targetActive = 0,
      from = 0,
      to = maxNumVisSlides;
    if (index < 0) {
      targetShift = slides.length - maxNumVisSlides;
      targetActive = slides.length - 1;
      to = slides.length;
      from = targetShift;
    }
    sliderLine.style.left = `${-sWidth * targetShift}px`;
    changeRangeValue(RngCurVal, targetActive);
    changeInputValue(rangeInput, targetActive);
    slides[targetActive].classList.add('pets__slide_active');
    slides.forEach((item) => {
      item.setAttribute('visib', 'false');
    });
    for (let i = from; i < to; i++) {
      slides[i].setAttribute('visib', 'true');
    }
    indexActive = targetActive;
  }
  function shiftSlide(index, isRight, isDefault = false) {
    slides.forEach((item) => {
      item.classList.remove('pets__slide_active');
    });
    if (isDefault) {
      sliderLine.style.left = '0px';
      slides[0].classList.add('pets__slide_active');
      slides.forEach((item) => {
        item.setAttribute('visib', false);
      });
      for (let i = 0; i < maxNumVisSlides; i++) {
        slides[i].setAttribute('visib', true);
      }
      changeRangeValue(RngCurVal, 0);
      changeInputValue(rangeInput, 0);
      indexActive = 0;
      return false;
    }
    if (index < 0 || index > slides.length - 1) {
      slideOverflow(index);
      return false;
    }
    let kShift = index;
    if (isRight) {
      kShift = index - maxNumVisSlides + 1;
    }
    slides[index].classList.add('pets__slide_active');
    changeRangeValue(RngCurVal, index);
    changeInputValue(rangeInput, index);
    // TODO make below more dry
    if (slides[index].getAttribute('visib') !== 'true') {
      slides.forEach((item) => {
        item.setAttribute('visib', false);
      });
      if (isRight) {
        let start = index;
        const end = start - maxNumVisSlides;
        while (start > end) {
          slides[start].setAttribute('visib', true);
          start--;
        }
      } else {
        let start = index;
        const end = start + maxNumVisSlides;
        while (start < end) {
          slides[start].setAttribute('visib', true);
          start++;
        }
      }
      sliderLine.style.left = `${-sWidth * kShift}px`;
    }
    indexActive = index;
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
  function updateDimensions() {
    if (sliderW !== slider.getBoundingClientRect().width) {
      sWidth =
        slides[1].getBoundingClientRect().width +
        window.getComputedStyle(slides[1]).marginLeft.split('px')[0] * 2;
      maxNumVisSlides = Math.round(
        document.querySelector('.pets__slider-wrapper').getBoundingClientRect()
          .width / sWidth
      );
      sliderW = slider.getBoundingClientRect().width;
    }
  }
  slider.addEventListener('click', (e) => {
    updateDimensions();
    if (e.target.classList.contains('pets__arrow_left')) {
      shiftSlide(indexActive - 1, false);
    }
    if (e.target.classList.contains('pets__arrow_right')) {
      shiftSlide(indexActive + 1, true);
    }
  });

  rangeInput.addEventListener('input', () => {
    updateDimensions();
    if (rangeInput.value - 1 > indexActive) {
      shiftSlide(rangeInput.value - 1, true);
    }
    if (rangeInput.value - 1 < indexActive) {
      shiftSlide(rangeInput.value - 1, false);
    }
  });

  window.addEventListener('resize', (e) => {
    setTimeout(updateDimensions, 100);
    shiftSlide(0, true, true);
  });
}
sliderPets();
