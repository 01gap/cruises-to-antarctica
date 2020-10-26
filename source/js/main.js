'use strict';
(function() {
  const pageHeader = document.querySelector('.page-header');
  const navButton = pageHeader.querySelector('.main-nav__toggle');

  if (pageHeader !== null && navButton !== null) {
    pageHeader.classList.remove('page-header--no-js');

    navButton.addEventListener('click', () => {
      let expanded = navButton.getAttribute('aria-expanded') === 'true';
      navButton.setAttribute('aria-expanded', !expanded);
      pageHeader.classList.toggle('page-header--menu-opened');
    });
  }
})();
