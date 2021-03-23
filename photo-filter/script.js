const filters = document.querySelector('.filters');

function handleUpdate(event) {
  event.target.parentNode.querySelector('output').value = event.target.value; // меняем значение аутпута
  const suffix = event.target.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${event.target.name}`,
    event.target.value + suffix
  );
}

filters.addEventListener('input', event => handleUpdate(event));

