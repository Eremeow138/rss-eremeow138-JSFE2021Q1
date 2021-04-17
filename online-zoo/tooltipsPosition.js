//надеюсь эту фигню никто никогда не увидит
// скрипт позиционирует тултипы, чтобы они не выезжали ха пределы экрана
const tooltips = document.querySelectorAll('.tooltip');
const pins = document.querySelectorAll('.pin');
function tooltipTune(tt) {
  let world = document.querySelector('.world');
  let clientWidth = document.body.clientWidth;
  tt.forEach((elem) => {
    let rightPosElem = elem.getBoundingClientRect().right;
    let leftPosElem = elem.getBoundingClientRect().left;
    let bottomPosElem = elem.getBoundingClientRect().bottom;
    let bottomPosWorld = world.getBoundingClientRect().bottom;
    let stop = 0;
    if (clientWidth < 1600) {
      while (rightPosElem >= clientWidth - 10) {
        let currentLeft = +elem.style.left.split('px')[0];
        elem.style.left = `${currentLeft - 20}px`;
        rightPosElem = elem.getBoundingClientRect().right;
        stop++;
        if (stop >= 100) {
          break;
        }
      }
      stop = 0;
      while (leftPosElem <= 0) {
        let currentLeft = +elem.style.left.split('px')[0];
        elem.style.left = `${currentLeft + 20}px`;
        leftPosElem = elem.getBoundingClientRect().left;
        stop++;
        if (stop >= 100) {
          break;
        }
      }
      stop = 0;
      if(bottomPosElem >= (bottomPosWorld + 28)) {
        elem.style.top = `100px`;
      };
      while (bottomPosElem >= (bottomPosWorld + 28)) {
        let currentTop = +elem.style.top.split('px')[0];
        elem.style.top = `${currentTop - 10}px`;
        bottomPosElem = elem.getBoundingClientRect().bottom;
        stop++;
        if (stop >= 100) {
          break;
        }
      }
    }
  });
}
pins.forEach((elem) => {
  elem.addEventListener('mouseover', (event) => {
    tooltipTune(tooltips);
  });
});
window.addEventListener('resize', () => tooltipTune(tooltips));
