const filters = document.querySelector('.filters');
const inputs = filters.querySelectorAll('input');
const btnReset = document.querySelector('.btn-reset');
const btnNext = document.querySelector('.btn-next');
const defaultFilters = {};
const image = document.querySelector('.editor img');
const baseLink =
  'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/';
const fileInput = document.querySelector('input[type="file"]');
let imageCounter = 1;
const btnDownload = document.querySelector('.btn-save');
const canvas = document.querySelector('canvas');
document.addEventListener('DOMContentLoaded', (e) => {
  // при загрузке документа записываем в объект defaultFilters значения фильтров
  inputs.forEach((item) => {
    defaultFilters[item.name] = item.value;
  });
});
//функция изменения значения переменной css
function handleUpdate(input) {
  //input - это определенный инпут на странице.
  input.parentNode.querySelector('output').value = input.value; // меняем значение аутпута
  const suffix = input.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${input.name}`,
    input.value + suffix
  );
}
//функция изменения значений переменных css на дефолтное
function handleUpdateDefault(inputs) {
  inputs.forEach((item) => {
    const val = defaultFilters[item.name];
    item.value = val;
    handleUpdate(item);
  });
}
//функция смены пути для картинки
//отправляем запрос на получение картинки, если картинка не существует - запрашиваем первую картинку
async function viewNextImage(src) {
  const img = new Image();
  const res = await fetch(src);
  if (res.ok) {
    img.src = src;
    img.onload = () => {
      image.src = src;
      toggleBtn(btnNext);
    };
  } else {
    if (res.status === 404) {
      imageCounter = 1;
      getNextImage(baseLink);
      toggleBtn(btnNext);
    } else {
      console.error(`Response error: ${res.status}`);
    }
  }
}
//функция получения времени суток(часа)
function getTimesOfDay() {
  const data = new Date();
  const hour = data.getHours();
  if (hour >= 6 && hour < 12) {
    return 'morning';
  }
  if (hour >= 12 && hour < 18) {
    return 'day';
  }
  if (hour >= 18 && hour < 24) {
    return 'evening';
  }
  if (hour >= 0 && hour < 6) {
    return 'night';
  }
}
//функция получения след картинки
function getNextImage(base) {
  toggleBtn(btnNext);
  let imgNumber;
  if (imageCounter >= 0 && imageCounter < 10) {
    imgNumber = `0${imageCounter}`;
  } else {
    imgNumber = imageCounter;
  }
  imageCounter++;
  const fullLink = `${base}${getTimesOfDay()}/${imgNumber}.jpg`;
  viewNextImage(fullLink);
}
//функция переключения активности кнопки
function toggleBtn(btn) {
  if (btn.disabled) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
//функция закрузки изображения с компьютера
function uploadImage() {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    image.src = reader.result;
  };
  fileInput.value = null;
}
//функция закрузки изображения на компьютер
function downloadImage() {
  const link = document.createElement('a');
  link.download = 'download.png';
  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  const ctx = canvas.getContext('2d');
  const hClient = image.height;
  const hImage = image.naturalHeight;
  let k;
  if (hClient > hImage) {
    k = hClient / hImage;
  } else {
    k = hImage / hClient;
  }
  let filter = window.getComputedStyle(image).filter;
  const blur = filter.split(' ')[0].match(/\d{1,}/)[0];
  const newFilter = window
    .getComputedStyle(image)
    .filter.replace(/blur\([0-9]*px\)/, `blur(${blur * k}px)`);
  ctx.filter = newFilter;
  ctx.drawImage(image, 0, 0);
  link.href = canvas.toDataURL();
  link.click();
  link.delete;
}
filters.addEventListener('input', (event) => handleUpdate(event.target));
btnReset.addEventListener('click', () => handleUpdateDefault(inputs));
btnNext.addEventListener('click', () => getNextImage(baseLink));
fileInput.addEventListener('change', uploadImage);
btnDownload.addEventListener('click', downloadImage);
