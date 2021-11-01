let popup = document.querySelector('.popup-menu');
let menuButton = document.querySelector('.menu-btn');

menuButton.onclick = function() {
  popup.classList.toggle('visually-hidden');
};
