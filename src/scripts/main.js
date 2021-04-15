'use strict';

document.querySelector('.header__burgermenu')
  .addEventListener('click', function() {
    document.querySelector('.header__burgermenu-icon').classList
      .toggle('active');
    document.querySelector('.header__menu-wrapper').classList.toggle('animate');
    document.querySelector('.header__girl-wrapper').classList.toggle('animate');
  });
