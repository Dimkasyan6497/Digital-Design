const menuListEl = document.body.querySelector('.menu-list');

document.body.querySelector('.menu').addEventListener('click', (evt) => {
  menuListEl.classList.toggle('visually-hidden');
});

document.body.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('link')) { return };
  menuListEl.classList.add('visually-hidden');
});