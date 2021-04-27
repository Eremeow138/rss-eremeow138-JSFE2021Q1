const checkbox = document.querySelector('.checkbox__input');
function changeTheme() {
  if (localStorage.isDark === 'true') {
    document.documentElement.classList.remove('dark');
    localStorage.isDark = 'false';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.isDark = 'true';
  }
}
if (localStorage.isDark === 'true') {
  localStorage.isDark = 'false';
  checkbox.setAttribute('checked', true);
  changeTheme();
}
checkbox.addEventListener('change', changeTheme);
