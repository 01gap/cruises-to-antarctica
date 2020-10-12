'use strict';

const mainNav = document.querySelector('.page-header__main-nav');
const navButton = mainNav.querySelector('.main-nav__toggle');

mainNav.classList.remove('page-header__main-nav--no-js');

navButton.addEventListener('click', () => {
  let expanded = navButton.getAttribute('aria-expanded') === 'true';
  navButton.setAttribute('aria-expanded', !expanded);
  if (mainNav.classList.contains('page-header__main-nav--closed')) {
    mainNav.classList.remove('page-header__main-nav--closed');
    mainNav.classList.add('page-header__main-nav--opened')
  } else {
    mainNav.classList.remove('page-header__main-nav--opened');
    mainNav.classList.add('page-header__main-nav--closed');
  }
})
