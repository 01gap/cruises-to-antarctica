'use strict';
(function() {
  const mainNav = document.querySelector('.page-header__main-nav');
  const navButton = mainNav.querySelector('.main-nav__toggle');
  const pageMain = document.querySelector('.page-main');
  const logo = document.querySelector('.page-header__logo');

  if (mainNav !== null && navButton !== null && pageMain !== null && logo !== null) {
    mainNav.classList.remove('page-header__main-nav--no-js');
    logo.classList.remove('page-header__logo--no-js');
    pageMain.classList.remove('page-main--no-js');

    navButton.addEventListener('click', () => {
      let expanded = navButton.getAttribute('aria-expanded') === 'true';
      navButton.setAttribute('aria-expanded', !expanded);
      mainNav.classList.toggle('page-header__main-nav--opened');
      logo.classList.toggle('page-header__logo--menu-opened');
      pageMain.classList.toggle('page-main--menu-opened');
    });
  }
})();
