function changeVideo() {
  const mainVideo = document
    .querySelector('.zoos__video')
    .querySelector('.zoos__iframe');

  const videoSlide = document.querySelector('.zoos__video-slide');
  const videoSlider = document.querySelector('.zoos__video-slider');
  const dotList = document.querySelectorAll('.zoos__dot');
  const dots = document.querySelector('.zoos__dots');

  videoSlide.addEventListener('click', (e) => {
    let linkBox = mainVideo.src;
    mainVideo.src = e.target.nextElementSibling.src;
    e.target.nextElementSibling.src = linkBox;
  });

  dotList.forEach((item, index) => {
    item.dataset.index = index;
  });
  
  dots.addEventListener('click', (e) => {
    if (e.target.classList.contains('zoos__dot')) {
      dotList.forEach((item) => {
        item.classList.remove('zoos__dot_active');
      });
      let left =
        -videoSlider.getBoundingClientRect().width * e.target.dataset.index;
      videoSlide.style.left = `${left}px`;
      e.target.classList.add('zoos__dot_active');
    }
  });
}
changeVideo();
