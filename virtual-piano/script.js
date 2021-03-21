const piano = document.querySelector('.piano');

const pianoKeys = document.querySelectorAll('.piano-key');

const btnContainer = document.querySelector('.btn-container');

const btnFullScreen = document.querySelector('.fullscreen');

const pressedKeys = {};

let cX; //Координаты мыши
let cY;
// Для каждой клавиши пианино создаем на странице свой плеер
pianoKeys.forEach((elem) => {
  const note = elem.dataset.note;
  if (note) {
    const audio = document.createElement('audio');
    audio.dataset.note = note;
    const src = `assets/audio-mp3/${note}.mp3`;
    audio.src = src;
    document.body.append(audio);
  }
});

// функция playAudio получает ноту, находит на странице нужный плеер и запускает его
function playAudio(note) {
  const a = document.querySelector(`audio[data-note="${note}"]`);
  a.currentTime = 0;
  a.play();
}

// --начало куска кода для работы с мышкой

// выключаем у клавиш возможность их перетаскивания, иначе будет баг при проведении по клавишам курсора с зажатой кнопкой мыши
pianoKeys.forEach((item) => {
  item.ondragstart = function () {
    return false;
  };
});
let isMouseDown = false; // флаг что клавиша мышки зажата, нужен для событий mouseover и mouseout
// слушаем mousedown. Если цель - клавиша, то берем ноту у клавиши
piano.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('piano-key')) {
    const note = event.target.dataset.note;
    if (note) {
      // если нота есть у клавиши, то запускаем функцию
      playAudio(note);
      event.target.classList.add('piano-key-active');
      isMouseDown = true; // клавиша мышки нажата
    }
  }
});
// добавляем слушатель на событие mouseup ко всему документу, иначе оно не сработает при отпускании кнопки вне пианино. И тогда клавиши будут проигрываться когда курсор будет проходить над ними даже без зажатия кнопки мыши.
document.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('piano-key')) {
    event.target.classList.remove('piano-key-active');
  }
  isMouseDown = false; // клавиша мышки нажата
});
piano.addEventListener('mousemove',(event) => {
  cX = event.clientX;
  cY = event.clientY;
})
// при событии mouseover (налету мыши на клавишу), смотрим по флагу isMouseDown, нажата ли кнопка мыши, а также смотрим было ли перемещение мыши(может и не быть если клавиша уменшится в размере и курсор мышки попадет на другую клавишу),если да, то играем ноту
piano.addEventListener('mouseover', (event) => {
  if (isMouseDown && (event.clientX !== cX || event.clientY !== cY)) {
    const note = event.target.dataset.note;
    if (note) {
      playAudio(note);
      event.target.classList.add('piano-key-active');
    }
  }
});
// убираем класс при уходе мыши с клавиши
piano.addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('piano-key')) {
    event.target.classList.remove('piano-key-active');
  }
});
// --конец куска кода для работы с мышкой

// --начало куска кода для работы с клавиатурой

window.addEventListener('keydown', (event) => {
  if (!pressedKeys[event.code]) {
    pressedKeys[event.code] = true;
    pianoKeys.forEach((el) => {
      if (event.code.slice(-1) === el.dataset.letter) {
        const note = el.dataset.note;
        if (note) {
          playAudio(note);
          el.classList.add('piano-key-active');
        }
      }
    });
  }
});

window.addEventListener('keyup', (event) => {
  pressedKeys[event.code] = false;
  pianoKeys.forEach((el) => {
    if (event.code.slice(-1) === el.dataset.letter) {
      el.classList.remove('piano-key-active');
    }
  });
});
// --конец куска кода для работы с клавиатурой

// --начало куска кода для работы с кнопкой переключения нот и букв
btnContainer.addEventListener('click', (event) => {
  if (
    event.target.classList.contains('btn') &&
    !event.target.classList.contains('btn-active')
  ) {
    Array.from(btnContainer.children).forEach((item) => {
      item.classList.remove('btn-active');
    });
    event.target.classList.add('btn-active');
    pianoKeys.forEach((el) => {
      el.classList.toggle('letter');
    });
  }
});
// --конец куска кода для работы с кнопкой переключения нот и букв

// --начало куска кода для входа в полноэкранный режим
btnFullScreen.addEventListener('click', (event) => {
  if (document.fullscreenElement !== null) {
    deactivateFullscreen(document.documentElement);
  } else {
    activateFullscreen(document.documentElement);
  }
});

function activateFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

// Whack fullscreen
function deactivateFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

document.addEventListener('fullscreenchange', (event) => {
  if (document.fullscreenElement) {
    btnFullScreen.classList.remove('openfullscreen');
    btnFullScreen.classList.add('exitfullscreen');
  } else {
    btnFullScreen.classList.remove('exitfullscreen');
    btnFullScreen.classList.add('openfullscreen');
  }
});
// --конец куска кода для входа в полноэкранный режим
