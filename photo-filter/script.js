const filters = document.querySelector('.filters');
const inputs = filters.querySelectorAll('input');
const btnReset = document.querySelector('.btn-reset');
const defaultFilters = {};

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

filters.addEventListener('input', (event) => handleUpdate(event.target));

btnReset.addEventListener('click', () => handleUpdateDefault(inputs));
